const secp = require("ethereum-cryptography/secp256k1");
//const { toHex } = require("ethereum-cryptography/utils");

exports.verifyWalletAccess = async(signature, walletAddress) => {
    try {
        const msgHash = await secp.utils.sha256('Signed by ' + walletAddress);
        return secp.verify(signature, msgHash, walletAddress);
    } catch {
        return false;
    }
}

/*
(async() => {
    var privateKey = toHex(secp.utils.randomPrivateKey());
    console.log("Private Key: "+ privateKey);
    var x = toHex(secp.getPublicKey(privateKey));
    console.log("Public Key: "+ x);
    var hash = await secp.utils.sha256('Signed by '+x);
    //"6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e"
    var signature = await secp.sign(hash, privateKey);
    var str = toHex(signature);
    console.log(str);
    console.log(secp.verify(str, hash, x));
})();*/
