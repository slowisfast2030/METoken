// npm install dotenv
// npm install @truffle/hdwallet-provider

require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

//to fetch these keys from .env file
const privateKey = process.env.SEPOLIA_PRIVATE_KEY;
const mnemonic = process.env.NMEMONIC;


module.exports = {

  networks: {
  
    ganache: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    
    // 这里不能用助记词
    // 在使用助记词的情况下，默认使用accounts[0]进行部署，from参数不起作用
    // 而account[0]没有ETH，导致部署失败
    sepolia: { 
			network_id: "11155111",
			provider: () => new HDWalletProvider(privateKey, 'https://sepolia.infura.io/v3/9faf676500e24b3693d74249d8c8412c'),
			gas: 26000000,
      //from: '0xca8415e9c49c69cac55d640aa752cfe95aeca071',
    },

    goerli: { 
			network_id: "5",
			provider: () => new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/9faf676500e24b3693d74249d8c8412c'),
			gas: 26000000,
      from: '0x7529a3FA1934AdF47258937443196567AaB43Ac5',
    },

    mainnet: { 
			network_id: "1",
			provider: () => new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/9faf676500e24b3693d74249d8c8412c'),
			gas: 460000,
      from: '0x7529a3FA1934AdF47258937443196567AaB43Ac5',
    }

  }, 

  compilers: {
    solc: {
      version: "0.4.24" // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};

// 初始化HDWalletProvider可以提供助记词或者账户私钥
// 提供助记词的时候，需要为network添加from字段
// 提供账户私钥的时候，from字段可以由私钥计算出来

