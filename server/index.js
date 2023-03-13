const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const helper = require("./scripts/helper");

app.use(cors());
app.use(express.json());

const balances = {
  "04f1a21c8d628ed338163fb1e344e64d93d78166eb37d4c1dc3e7c5ed18e010048b580bcb2bd9abb4b4c492020bcc8d6275de141ee9c04f3b4d192fdb9b330eef9": 100,
  "04b22d911408a69cadfbe2e1c1910f4830cc30a94073753010ce1002f6c764b084fa7d57d26ba7b0af4cece92d7fcdce086a319566109706073f0c076a40fb076e": 50,
  "045bfbb5c6320aa2af4094c8690445949e8e387a60d5f01ba35fd98a991d26a0d24efa94ca7955fe4d7d0be84e05536890a7b767c01a49c80b31d9355f5564cac2": 75,
};

//TODO: Can cache session state using redis/cookies, will be done later
const currentState = {
  connected: false
}

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {

  if(!currentState.connected) {
    res.status(400).send({ message: "Wallet not connected!!" })
  } else {
    //wallet is Connected, performing checks and operation
    const { sender, recipient, amount } = req.body;
    setInitialBalance(sender);
    setInitialBalance(recipient);

    if (balances[sender] < amount) {
      res.status(400).send({ message: "Not enough funds!" });
    } else {
      balances[sender] -= amount;
      balances[recipient] += amount;
      res.send({ balance: balances[sender] });
    }
  }

});

app.post("/verify", async (req, res) => {
  //Can be handled better
  const {signature, walletAddress} = req.body;
  currentState.connected = await helper.verifyWalletAccess(signature, walletAddress);
  if(currentState.connected) {
    res.send({ verified : currentState.connected })
  } else {
    res.status(400).send({ message: "Verification Failed!, Please check the provided signature and wallet address!!" });
  }
});

app.get("/disconnect", ({}, res) => {
  currentState.connected = false;
  res.send({ status : currentState.connected });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
