import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [signatureMessage, setSignatureMessage] = useState("");
  const [verifiedStatus, setVerifiedStatus] = useState(false);

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        signatureMessage={signatureMessage}
        setSignatureMessage={setSignatureMessage}
        verifiedStatus={verifiedStatus}
        setVerifiedStatus={setVerifiedStatus}
      />
      <Transfer 
        setBalance={setBalance} 
        address={address}
        verifiedStatus={verifiedStatus}
      />
    </div>
  );
}

export default App;
