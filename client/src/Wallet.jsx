import server from "./server";

function Wallet({ address, setAddress, balance, setBalance, signatureMessage, setSignatureMessage, verifiedStatus, setVerifiedStatus }) {
  async function onAddressChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  function onSignatureMessageChange(evt) {
    //Simply set the message
    setSignatureMessage(evt.target.value);
  }

  async function verify(evt) {
    evt.preventDefault();

    if(!verifiedStatus) {
      try {
        const {
          data: { verified },
        } = await server.post(`verify`, {
          signature: signatureMessage,
          walletAddress: address
        });
        setVerifiedStatus(verified);
      } catch (ex) {
        alert(ex.response.data.message);
      }
    } else {
      const {
        data: { status },
      } = await server.get(`disconnect`);

      if(!status) {
        setSignatureMessage("");
        setAddress("");
        setBalance(0);
      }

      setVerifiedStatus(status);
    }
    
  }

  return (
    <form className="container wallet" onSubmit={verify}>
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input placeholder="Type an address, for example: 0x1" value={address} onChange={onAddressChange} disabled={verifiedStatus}></input>
      </label>

      <label>
        Signature
        <textarea placeholder="Type your signature message here.." value={signatureMessage} onChange={onSignatureMessageChange}
          rows={10} cols={40} style={{resize:"none"}} disabled={verifiedStatus}/>
      </label>

      <div className="balance">Balance: {balance}</div>
      
      { 
        !verifiedStatus 
        ? <input type="submit" className="button" value="Validate & Connect" disabled={!address || !signatureMessage}/>
        : <input type="submit" className="button" value="Disconnect"/>
      }

    </form>
  );
}

export default Wallet;
