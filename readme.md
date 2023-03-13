## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

### Sample created account wallet address with signature
1. 
Public Key: 045bfbb5c6320aa2af4094c8690445949e8e387a60d5f01ba35fd98a991d26a0d24efa94ca7955fe4d7d0be84e05536890a7b767c01a49c80b31d9355f5564cac2
Sign: 
304402205dfa00366ef2fdfa86b1cffed48a0776504fbd96014210c0c17cde293e50092102206c4be631f7a7c2e91d318b6daf8774ae93b3f3cd7e136404c140f0a870e7ee84

2. 
Public Key: 04b22d911408a69cadfbe2e1c1910f4830cc30a94073753010ce1002f6c764b084fa7d57d26ba7b0af4cece92d7fcdce086a319566109706073f0c076a40fb076e
Sign:
3045022100f3869e0298844842c1e1e9f5adf874cf0a037120df7b9d122a64ec65b8d62c84022039dc84aff39402cab7879145614a3ec28cc4b8b38c5cd610019498cfe0b8da60

3. 
Public Key: 04f1a21c8d628ed338163fb1e344e64d93d78166eb37d4c1dc3e7c5ed18e010048b580bcb2bd9abb4b4c492020bcc8d6275de141ee9c04f3b4d192fdb9b330eef9
Sign:
304402202873cfe19906ab2a6f558b98f89c3c8edaba9b3819abcb49a589185523c4651202206b623b7f7ba8132967defa4385feaefc2531ec60c2cdf467ef8fd8f882089906
