(this["webpackJsonp@pancakeswap/interface"] = this["webpackJsonp@pancakeswap/interface"] || []).push([
    [1],
    {
        134: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
            );
        },
        165: function (e) {
            e.exports = JSON.parse(
                '{"name":"Dexbuilder Swap Default List","timestamp":"2021-03-17T09:56:23Z","version":{"major":1,"minor":1,"patch":0},"tags":{},"logoURI":"https://exchange.pancakeswap.finance/images/pancakeswap.png","keywords":["santaai","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18,"logoURI":"images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"},{"name":"Twoge CEO","symbol":"TWOGECEO","address":"0xa59e9a03ca703e2ae244cb3ae0796bd76c2cecaa","chainId":56,"decimals":9,"logoURI":"images/coins/0x5435F964eeEEf525fe571C95E8f601f8C708454E.png"},{"name":"Tether USD","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","chainId":56,"decimals":18,"logoURI":"images/coins/0x55d398326f99059ff775485246999027b3197955.png"},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170ed0880ac9a755fd29b2688956bd959f933f8","chainId":56,"decimals":18,"logoURI":"images/coins/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"},{"name":"BTCB Token","symbol":"BTCB","address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","chainId":56,"decimals":18,"logoURI":"images/coins/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png"}]}'
            );
        },
        272: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        273: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        301: function (e) {
            e.exports = JSON.parse(
                '{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"evm":{"bytecode":{"linkReferences":{},"object":"","opcodes":"","sourceMap":""},"deployedBytecode":{"linkReferences":{},"object":"","opcodes":"","sourceMap":""}},"metadata":"{\\"compiler\\":{\\"version\\":\\"0.5.16+commit.9c3226ce\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"Burn\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Mint\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0In\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1In\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0Out\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1Out\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"Swap\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint112\\",\\"name\\":\\"reserve0\\",\\"type\\":\\"uint112\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint112\\",\\"name\\":\\"reserve1\\",\\"type\\":\\"uint112\\"}],\\"name\\":\\"Sync\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"DOMAIN_SEPARATOR\\",\\"outputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"\\",\\"type\\":\\"bytes32\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"MINIMUM_LIQUIDITY\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"PERMIT_TYPEHASH\\",\\"outputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"\\",\\"type\\":\\"bytes32\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"allowance\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"burn\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"decimals\\",\\"outputs\\":[{\\"internalType\\":\\"uint8\\",\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"factory\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getReserves\\",\\"outputs\\":[{\\"internalType\\":\\"uint112\\",\\"name\\":\\"reserve0\\",\\"type\\":\\"uint112\\"},{\\"internalType\\":\\"uint112\\",\\"name\\":\\"reserve1\\",\\"type\\":\\"uint112\\"},{\\"internalType\\":\\"uint32\\",\\"name\\":\\"blockTimestampLast\\",\\"type\\":\\"uint32\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"initialize\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"kLast\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"mint\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"liquidity\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"nonces\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"deadline\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint8\\",\\"name\\":\\"v\\",\\"type\\":\\"uint8\\"},{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"r\\",\\"type\\":\\"bytes32\\"},{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"s\\",\\"type\\":\\"bytes32\\"}],\\"name\\":\\"permit\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"price0CumulativeLast\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"price1CumulativeLast\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"skim\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0Out\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1Out\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"swap\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"sync\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"token0\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"token1\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"contracts/interfaces/IPinkswapPair.sol\\":\\"IPinkswapPair\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":true,\\"runs\\":999999},\\"remappings\\":[]},\\"sources\\":{\\"contracts/interfaces/IPinkswapPair.sol\\":{\\"keccak256\\":\\"0xc6984cc4b9ee27cf6514944e26b9ffc77982334ce34ff68df750b8c5e5980b57\\",\\"urls\\":[\\"bzz-raw://cb2a98f0743d22e64ca458524b5e98be3fc7ae00778957dc0f76d32e27154e0e\\",\\"dweb:/ipfs/QmeY7iaN3kLHvNF5CnXcypye7iRMfY1Z22k8MPwe5ZB9bR\\"]}},\\"version\\":1}","interface":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":""}'
            );
        },
        308: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        309: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        310: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
            );
        },
        420: function (e, n) {},
        433: function (e, n) {},
        539: function (e, n) {},
        559: function (e, n, t) {
            "use strict";
            t.r(n);
            var r = t(0),
                a = t.n(r),
                i = t(82),
                o = t.n(i),
                c = t(4),
                s = t(27),
                l = t(290),
                u = t.n(l),
                d = (t(171), t(195), t(593)),
                p = t(291),
                b = t.n(p),
                f = t(50),
                m = t(595),
                h = t(596),
                y = function () {
                    return (y =
                        Object.assign ||
                        function (e) {
                            for (var n, t = 1, r = arguments.length; t < r; t++) for (var a in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                            return e;
                        }).apply(this, arguments);
                };
            function x(e, n) {
                var t = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
                }
                return t;
            }
            function j(e, n) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", { value: n }) : (e.raw = n), e;
            }
            var v,
                g,
                O,
                C = function (e, n) {
                    return function (t) {
                        return u()(t, e, n);
                    };
                },
                w = Object(c.keyframes)(
                    v || (v = j(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))
                ),
                k = Object(c.css)(g || (g = j(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), w),
                T = c.default.svg(
                    O || (O = j(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])),
                    function (e) {
                        var n = e.theme,
                            t = e.color;
                        return C("colors." + t, t)(n);
                    },
                    function (e) {
                        return e.spin && k;
                    },
                    s.space
                );
            T.defaultProps = { color: "text", width: "20px", xmlns: "http://www.w3.org/2000/svg", spin: !1 };
            var E,
                I = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z",
                        })
                    );
                },
                S = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z",
                        })
                    );
                },
                N = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z",
                        })
                    );
                },
                L = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
                        })
                    );
                },
                R = c.default.div(
                    E ||
                        (E = j(
                            ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"],
                            ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"]
                        )),
                    function (e) {
                        var n = e.color,
                            t = e.theme;
                        return C("colors." + n, n)(t);
                    },
                    function (e) {
                        var n = e.fontSize;
                        return e.small ? "14px" : n || "16px";
                    },
                    function (e) {
                        return e.bold ? 600 : 400;
                    },
                    function (e) {
                        var n = e.textTransform;
                        return n && "text-transform: " + n + ";";
                    },
                    s.space,
                    s.typography
                );
            R.defaultProps = { color: "text", small: !1 };
            var M,
                A,
                D,
                U = "md",
                B = "nm",
                P = "sm",
                F = "xs",
                _ = "primary",
                z = "secondary",
                q = "tertiary",
                Y = "text",
                H = "danger",
                V = "subtle",
                Z = "success",
                W =
                    (((M = {})[U] = { height: "52px", padding: "0 16px" }),
                    (M[B] = { height: "40px", fontSize: "16px", padding: "0 16px" }),
                    (M[P] = { height: "32px", fontSize: "16px", padding: "0 16px" }),
                    (M[F] = { height: "24px", fontSize: "12px", padding: "0 8px" }),
                    M),
                Q =
                    (((A = {})[_] = { backgroundColor: "secondaryBackground", color: "primary" }),
                    (A[z] = { backgroundColor: "transparent", border: "2px solid", borderColor: "primary", boxShadow: "none", color: "primary", ":disabled": { backgroundColor: "transparent" } }),
                    (A[q] = { backgroundColor: "tertiary", boxShadow: "none", color: "primary" }),
                    (A[V] = { backgroundColor: "textSubtle", color: "white" }),
                    (A[H] = { backgroundColor: "failure", color: "white" }),
                    (A[Z] = { backgroundColor: "success", color: "white" }),
                    (A[Y] = { backgroundColor: "transparent", color: "primary", boxShadow: "none" }),
                    A),
                G = c.default.button(
                    D ||
                        (D = j(
                            [
                                "\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  //box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.2) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ",
                                ";\n  outline: 0;\n  //transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.85;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ",
                                "\n  ",
                                "\n  ",
                                "\n  ",
                                "\n  ",
                                "\n",
                            ],
                            [
                                "\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  //box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.2) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ",
                                ";\n  outline: 0;\n  //transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.85;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ",
                                "\n  ",
                                "\n  ",
                                "\n  ",
                                "\n  ",
                                "\n",
                            ]
                        )),
                    function (e) {
                        var n = e.$isLoading;
                        return void 0 !== n && n ? ".5" : "1";
                    },
                    function (e) {
                        var n = e.$isLoading,
                            t = e.theme;
                        return !0 === n
                            ? "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    "
                            : "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " +
                                  t.colors.backgroundDisabled +
                                  ";\n      border-color: " +
                                  t.colors.backgroundDisabled +
                                  ";\n      box-shadow: none;\n      color: " +
                                  t.colors.textDisabled +
                                  ";\n      cursor: not-allowed;\n    }\n  ";
                    },
                    Object(s.variant)({ prop: "scale", variants: W }),
                    Object(s.variant)({ variants: Q }),
                    s.layout,
                    s.space
                ),
                X = function (e) {
                    var n = e.startIcon,
                        t = e.endIcon,
                        i = e.external,
                        o = e.className,
                        c = e.isLoading,
                        s = e.disabled,
                        l = e.children,
                        u = x(e, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]),
                        d = i ? { target: "_blank", rel: "noreferrer noopener" } : {},
                        p = c || s,
                        b = o ? [o] : [];
                    return (
                        c && b.push("pancake-button--loading"),
                        p && !c && b.push("pancake-button--disabled"),
                        a.a.createElement(
                            G,
                            y({ $isLoading: c, className: b.join(" "), disabled: p }, d, u),
                            a.a.createElement(a.a.Fragment, null, Object(r.isValidElement)(n) && Object(r.cloneElement)(n, { mr: "0.5rem" }), l, Object(r.isValidElement)(t) && Object(r.cloneElement)(t, { ml: "0.5rem" }))
                        )
                    );
                };
            X.defaultProps = { isLoading: !1, external: !1, variant: _, scale: U, disabled: !1 };
            var K,
                J,
                $,
                ee,
                ne,
                te,
                re,
                ae,
                ie = Object(c.default)(X)(K || (K = j(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (e) {
                    return "sm" === e.scale ? "32px" : "48px";
                }),
                oe = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z",
                        })
                    );
                },
                ce = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z",
                        })
                    );
                },
                se = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z",
                        })
                    );
                },
                le = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z",
                        })
                    );
                },
                ue = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z",
                        })
                    );
                },
                de = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z",
                        })
                    );
                },
                pe = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z",
                        })
                    );
                },
                be = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
                        })
                    );
                },
                fe = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", {
                            d:
                                "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z",
                        })
                    );
                },
                me = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 24" }, e),
                        a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        a.a.createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })
                    );
                },
                he = function (e) {
                    return a.a.createElement(
                        T,
                        y({ viewBox: "0 0 24 25" }, e),
                        a.a.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d:
                                "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z",
                        })
                    );
                },
                ye = c.default.div(J || (J = j(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), s.background, s.border, s.layout, s.position, s.space),
                xe = Object(c.default)(ye)($ || ($ = j(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), s.flexbox),
                je = "info",
                ve = "danger",
                ge = "success",
                Oe = "warning",
                Ce = c.default.div(
                    ee || (ee = j(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])),
                    function (e) {
                        var n = e.theme,
                            t = e.variant;
                        switch (void 0 === t ? je : t) {
                            case ve:
                                return n.colors.failure;
                            case Oe:
                                return n.colors.warning;
                            case ge:
                                return n.colors.success;
                            case je:
                            default:
                                return n.colors.secondary;
                        }
                    },
                    function (e) {
                        return e.theme.alert.background;
                    }
                ),
                we = c.default.div(
                    ne ||
                        (ne = j(
                            ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"],
                            ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"]
                        )),
                    function (e) {
                        return e.hasHandler ? "52px" : "12px";
                    }
                ),
                ke = c.default.div(te || (te = j(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"]))),
                Te = Object(c.default)(xe)(
                    re ||
                        (re = j(
                            ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"],
                            ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"]
                        )),
                    function (e) {
                        return e.theme.alert.background;
                    }
                ),
                Ee = function (e) {
                    var n = e.title,
                        t = e.children,
                        r = e.variant,
                        i = e.onClick,
                        o = (function (e) {
                            switch ((void 0 === e && (e = je), e)) {
                                case ve:
                                    return N;
                                case Oe:
                                    return S;
                                case ge:
                                    return I;
                                case je:
                                default:
                                    return L;
                            }
                        })(r);
                    return a.a.createElement(
                        Te,
                        null,
                        a.a.createElement(Ce, { variant: r, hasDescription: !!t }, a.a.createElement(o, { color: "currentColor", width: "24px" })),
                        a.a.createElement(we, { hasHandler: !!i }, a.a.createElement(R, { bold: !0 }, n), "string" === typeof t ? a.a.createElement(R, { as: "p" }, t) : t),
                        i && a.a.createElement(ke, null, a.a.createElement(ie, { scale: "sm", variant: "text", onClick: i }, a.a.createElement(ue, { width: "24px", color: "currentColor" })))
                    );
                },
                Ie = "sm",
                Se = "md",
                Ne = "lg",
                Le = c.default.input(
                    ae ||
                        (ae = j(
                            [
                                "\n  background-color: ",
                                ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ",
                                ";\n  color: ",
                                ";\n  display: block;\n  font-size: 16px;\n  height: ",
                                ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ",
                                ";\n  }\n\n  &:disabled {\n    background-color: ",
                                ";\n    box-shadow: none;\n    color: ",
                                ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",
                                ";\n  }\n",
                            ],
                            [
                                "\n  background-color: ",
                                ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ",
                                ";\n  color: ",
                                ";\n  display: block;\n  font-size: 16px;\n  height: ",
                                ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ",
                                ";\n  }\n\n  &:disabled {\n    background-color: ",
                                ";\n    box-shadow: none;\n    color: ",
                                ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",
                                ";\n  }\n",
                            ]
                        )),
                    function (e) {
                        return e.theme.colors.input;
                    },
                    function (e) {
                        var n = e.isSuccess,
                            t = void 0 !== n && n,
                            r = e.isWarning,
                            a = void 0 !== r && r,
                            i = e.theme;
                        return a ? i.shadows.warning : t ? i.shadows.success : i.shadows.inset;
                    },
                    function (e) {
                        return e.theme.colors.text;
                    },
                    function (e) {
                        var n = e.scale;
                        switch (void 0 === n ? Se : n) {
                            case Ie:
                                return "32px";
                            case Ne:
                                return "48px";
                            case Se:
                            default:
                                return "40px";
                        }
                    },
                    function (e) {
                        return e.theme.colors.textInput;
                    },
                    function (e) {
                        return e.theme.colors.backgroundDisabled;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    },
                    function (e) {
                        return e.theme.shadows.focus;
                    }
                );
            Le.defaultProps = { scale: Se, isSuccess: !1, isWarning: !1 };
            Object(c.default)(ye)(
                Re ||
                    (Re = j(
                        ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"],
                        ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"]
                    )),
                function (e) {
                    return e.theme.colors.input;
                },
                function (e) {
                    return e.theme.colors.inputSecondary;
                },
                function (e) {
                    var n = e.theme,
                        t = e.isWarning;
                    return n.shadows[t ? "warning" : "inset"];
                }
            ),
                Object(c.default)(Le)(
                    Me ||
                        (Me = j(
                            [
                                "\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ",
                                ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n",
                            ],
                            [
                                "\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ",
                                ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n",
                            ]
                        )),
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                c.default.div(
                    Ae ||
                        (Ae = j(
                            [
                                "\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ",
                                " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ",
                                " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n",
                            ],
                            [
                                "\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ",
                                " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ",
                                " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n",
                            ]
                        )),
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    },
                    function (e) {
                        return e.theme.mediaQueries.md;
                    }
                ),
                c.default.ul(
                    De ||
                        (De = j(
                            ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"],
                            ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"]
                        )),
                    function (e) {
                        return e.theme.colors.textDisabled;
                    },
                    s.space
                ),
                a.a.createElement(
                    function (e) {
                        return a.a.createElement(
                            T,
                            y({ viewBox: "0 0 24 24" }, e),
                            a.a.createElement("path", {
                                d:
                                    "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z",
                            })
                        );
                    },
                    { color: "currentColor", width: "24px" }
                ),
                c.default.div(
                    Ue ||
                        (Ue = j(
                            ["\n  background-color: #2a2113;\n  border-radius: 12px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"],
                            ["\n  background-color: #2a2113;\n  border-radius: 12px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"]
                        ))
                ),
                Object(c.default)(X)(
                    Be ||
                        (Be = j(
                            ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"],
                            ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"]
                        )),
                    function (e) {
                        var n = e.theme;
                        return e.variant === _ ? n.colors.primary : n.colors.textSubtle;
                    }
                );
            var Re,
                Me,
                Ae,
                De,
                Ue,
                Be,
                Pe,
                Fe = c.default.div(
                    Pe ||
                        (Pe = j(
                            ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"],
                            ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"]
                        )),
                    function (e) {
                        return e.theme.card.background;
                    },
                    function (e) {
                        return e.theme.card.boxShadow;
                    },
                    function (e) {
                        var n = e.isActive,
                            t = e.isSuccess,
                            r = e.isWarning,
                            a = e.theme;
                        return r ? a.card.boxShadowWarning : t ? a.card.boxShadowSuccess : n ? a.card.boxShadowActive : a.card.boxShadow;
                    },
                    function (e) {
                        var n = e.theme,
                            t = e.isDisabled;
                        return n.colors[t ? "textDisabled" : "text"];
                    },
                    s.space
                );
            Fe.defaultProps = { isActive: !1, isSuccess: !1, isWarning: !1, isDisabled: !1 };
            var _e,
                ze,
                qe,
                Ye = function (e) {
                    var n = e.ribbon,
                        t = e.children,
                        r = x(e, ["ribbon", "children"]);
                    return a.a.createElement(Fe, y({}, r), n, t);
                },
                He = c.default.div(_e || (_e = j(["\n  ", "\n"], ["\n  ", "\n"])), s.space);
            (He.defaultProps = { p: "12px 24px 24px 24px" }),
                (c.default.div(
                    ze || (ze = j(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])),
                    function (e) {
                        var n = e.theme,
                            t = e.variant,
                            r = void 0 === t ? "default" : t;
                        return n.card.cardHeaderBackground[r];
                    },
                    s.space
                ).defaultProps = { p: "24px" }),
                (c.default.div(
                    qe || (qe = j(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])),
                    function (e) {
                        return e.theme.colors.borderColor;
                    },
                    s.space
                ).defaultProps = { p: "24px" });
            c.default.div(
                Ve ||
                    (Ve = j(
                        [
                            "\n  background-color: ",
                            ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ",
                            ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
                            ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",
                            ';\n    content: "";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n',
                        ],
                        [
                            "\n  background-color: ",
                            ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ",
                            ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
                            ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",
                            ';\n    content: "";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n',
                        ]
                    )),
                function (e) {
                    var n = e.variantColor,
                        t = void 0 === n ? "secondary" : n;
                    return e.theme.colors[t];
                },
                function (e) {
                    return "right" === e.ribbonPosition ? 0 : "auto";
                },
                function (e) {
                    return "right" === e.ribbonPosition ? "translateX(30%) translateY(0%) rotate(45deg)" : "translateX(0%) translateY(200%) rotate(-45deg)";
                },
                function (e) {
                    var n = e.variantColor,
                        t = void 0 === n ? "secondary" : n;
                    return e.theme.colors[t];
                }
            );
            var Ve,
                Ze,
                We = "sm",
                Qe = "md",
                Ge = function (e) {
                    switch (e.scale) {
                        case We:
                            return "24px";
                        case Qe:
                        default:
                            return "32px";
                    }
                };
            c.default.input.attrs({ type: "checkbox" })(
                Ze ||
                    (Ze = j(
                        [
                            "\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",
                            ";\n  width: ",
                            ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ",
                            ";\n  box-shadow: ",
                            ';\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ',
                            ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",
                            ";\n  }\n\n  &:checked {\n    background-color: ",
                            ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n",
                        ],
                        [
                            "\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",
                            ";\n  width: ",
                            ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ",
                            ";\n  box-shadow: ",
                            ';\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ',
                            ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",
                            ";\n  }\n\n  &:checked {\n    background-color: ",
                            ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n",
                        ]
                    )),
                Ge,
                Ge,
                function (e) {
                    return e.theme.colors.input;
                },
                function (e) {
                    return e.theme.shadows.inset;
                },
                function (e) {
                    return e.theme.shadows.focus;
                },
                function (e) {
                    return e.theme.shadows.focus;
                },
                function (e) {
                    return e.theme.colors.success;
                }
            ).defaultProps = { scale: Qe };
            var Xe,
                Ke,
                Je,
                $e,
                en,
                nn,
                tn = c.default.div(
                    Xe ||
                        (Xe = j(
                            [
                                "\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ",
                                ";\n  bottom: ",
                                ";\n  background-color: ",
                                ";\n  box-shadow: ",
                                ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ",
                                ";\n  border-radius: ",
                                ";\n",
                            ],
                            [
                                "\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ",
                                ";\n  bottom: ",
                                ";\n  background-color: ",
                                ";\n  box-shadow: ",
                                ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ",
                                ";\n  border-radius: ",
                                ";\n",
                            ]
                        )),
                    function (e) {
                        return "top-right" === e.position ? "100%" : "50%";
                    },
                    function (e) {
                        var n = e.position;
                        return "top" === n || "top-right" === n ? "100%" : "auto";
                    },
                    function (e) {
                        return e.theme.nav.background;
                    },
                    function (e) {
                        return e.theme.shadows.level1;
                    },
                    function (e) {
                        return e.theme.zIndices.dropdown;
                    },
                    function (e) {
                        return e.theme.radii.small;
                    }
                ),
                rn =
                    (c.default.div(
                        Ke || (Ke = j(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])),
                        tn,
                        tn
                    ),
                    Object(c.keyframes)(
                        Je ||
                            (Je = j(
                                [
                                    "\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n",
                                ],
                                [
                                    "\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n",
                                ]
                            ))
                    )),
                an =
                    (c.default.div(
                        $e ||
                            ($e = j(
                                [
                                    "\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ",
                                    ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ",
                                    ";\n  animation-duration: ",
                                    ";\n  animation-timing-function: linear;\n  animation-iteration-count: ",
                                    ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ",
                                    ";\n  }\n",
                                ],
                                [
                                    "\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ",
                                    ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ",
                                    ";\n  animation-duration: ",
                                    ";\n  animation-timing-function: linear;\n  animation-iteration-count: ",
                                    ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ",
                                    ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ",
                                    ";\n  }\n",
                                ]
                            )),
                        function (e) {
                            return e.position + "vw";
                        },
                        rn,
                        function (e) {
                            return e.duration + "s";
                        },
                        function (e) {
                            var n = e.iterations;
                            return Number.isFinite(n) ? String(n) : "infinite";
                        },
                        function (e) {
                            return (e.duration / 10) * 1.3 + "s";
                        },
                        function (e) {
                            return (e.duration / 10) * 1.5 + "s";
                        },
                        function (e) {
                            return (e.duration / 10) * 1.7 + "s";
                        },
                        function (e) {
                            return (e.duration / 10) * 2.7 + "s";
                        },
                        function (e) {
                            return (e.duration / 10) * 3.5 + "s";
                        },
                        function (e) {
                            return (e.duration / 10) * 5.5 + "s";
                        },
                        function (e) {
                            return (e.duration / 10) * 8 + "s";
                        }
                    ),
                    "md"),
                on = "lg",
                cn = "xl",
                sn = "xxl",
                ln =
                    (((en = {})[an] = { fontSize: "20px", fontSizeLg: "20px" }),
                    (en[on] = { fontSize: "24px", fontSizeLg: "24px" }),
                    (en[cn] = { fontSize: "32px", fontSizeLg: "40px" }),
                    (en[sn] = { fontSize: "48px", fontSizeLg: "64px" }),
                    en),
                un = Object(c.default)(R).attrs({ bold: !0 })(
                    nn ||
                        (nn = j(
                            ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"],
                            ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"]
                        )),
                    function (e) {
                        var n = e.size;
                        return ln[n || an].fontSize;
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    },
                    function (e) {
                        var n = e.size;
                        return ln[n || an].fontSizeLg;
                    }
                );
            un.defaultProps = { as: "h2" };
            c.default.div(
                dn ||
                    (dn = j(
                        [
                            "\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ",
                            "px;\n  max-width: ",
                            "px;\n  max-height: ",
                            "px;\n  width: 100%;\n  padding-top: ",
                            "%;\n  ",
                            "\n",
                        ],
                        [
                            "\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ",
                            "px;\n  max-width: ",
                            "px;\n  max-height: ",
                            "px;\n  width: 100%;\n  padding-top: ",
                            "%;\n  ",
                            "\n",
                        ]
                    )),
                function (e) {
                    var n = e.height;
                    return e.responsive ? 0 : n;
                },
                function (e) {
                    return e.width;
                },
                function (e) {
                    return e.height;
                },
                function (e) {
                    var n = e.width,
                        t = e.height;
                    return e.responsive ? (t / n) * 100 : 0;
                },
                s.space
            ),
                c.default.img(
                    pn ||
                        (pn = j(
                            ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"],
                            ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"]
                        ))
                ),
                c.default.div(bn || (bn = j(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
            var dn,
                pn,
                bn,
                fn,
                mn,
                hn,
                yn = c.default.div(
                    fn ||
                        (fn = j(
                            [
                                "\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ",
                                " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ",
                                " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ",
                                " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n",
                            ],
                            [
                                "\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ",
                                " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ",
                                " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ",
                                " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n",
                            ]
                        )),
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    },
                    function (e) {
                        return e.theme.mediaQueries.md;
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    }
                ),
                xn =
                    (Object(c.default)(yn)(
                        mn || (mn = j(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])),
                        function (e) {
                            return e.theme.mediaQueries.sm;
                        }
                    ),
                    Object(c.default)(R)(
                        hn ||
                            (hn = j(
                                ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"],
                                ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"]
                            ))
                    )),
                jn = function (e) {
                    var n = e.external,
                        t = x(e, ["external"]),
                        r = n ? { target: "_blank", rel: "noreferrer noopener" } : {};
                    return a.a.createElement(xn, y({ as: "a", bold: !0 }, r, t));
                };
            jn.defaultProps = { color: "primary" };
            var vn,
                gn,
                On,
                Cn,
                wn,
                kn,
                Tn = function (e) {
                    var n = e.children,
                        t = x(e, ["children"]);
                    return a.a.createElement(jn, y({ external: !0 }, t), n, a.a.createElement(fe, { color: "primary", ml: "4px" }));
                },
                En =
                    (c.default.span(vn || (vn = j(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"]))),
                    c.default.span(
                        gn ||
                            (gn = j(
                                ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"],
                                ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"]
                            )),
                        function (e) {
                            return e.show ? "inline-flex" : "none";
                        },
                        function (e) {
                            return e.theme.colors.invertedContrast;
                        },
                        function (e) {
                            return e.theme.colors.failure;
                        }
                    ),
                    "md"),
                In = {
                    sm: {
                        pancakeSize: "16px",
                        travelDistance: "16px",
                        toggleHeight: "20px",
                        toggleWidth: "36px",
                        pancakeThickness: "1px",
                        pancakeTwoOffset: "0px",
                        pancakeThreeOffset: "-3px",
                        butterTop: "3px",
                        butterLeft: "10px",
                        butterWidth: "6px",
                        butterHeight: "5px",
                        butterThickness: "0.5px",
                        butterRadius: "2px",
                        butterSmearOneTop: "10px",
                        butterSmearOneLeft: "2.5px",
                        butterSmearTwoTop: "11px",
                        butterSmearTwoRight: "2.5px",
                    },
                    md: {
                        pancakeSize: "32px",
                        travelDistance: "34px",
                        toggleHeight: "40px",
                        toggleWidth: "72px",
                        pancakeThickness: "2px",
                        pancakeTwoOffset: "-3px",
                        pancakeThreeOffset: "-8px",
                        butterTop: "3px",
                        butterLeft: "16px",
                        butterWidth: "12px",
                        butterHeight: "11px",
                        butterThickness: "1px",
                        butterRadius: "4px",
                        butterSmearOneTop: "20px",
                        butterSmearOneLeft: "5px",
                        butterSmearTwoTop: "22px",
                        butterSmearTwoRight: "5px",
                    },
                },
                Sn = function (e) {
                    return function (n) {
                        var t = n.scale;
                        return In[void 0 === t ? En : t][e];
                    };
                },
                Nn =
                    (c.default.div(
                        On ||
                            (On = j(
                                [
                                    "\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ",
                                    ";\n    height: ",
                                    ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ",
                                    " 0 ",
                                    " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ",
                                    ";\n    box-shadow: 0 ",
                                    " 0 ",
                                    "\n      ",
                                    ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ",
                                    ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ",
                                    ';\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: "";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ',
                                    ";\n    left: ",
                                    ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ",
                                    ";\n    right: ",
                                    ";\n  }\n\n  .butter {\n    width: ",
                                    ";\n    height: ",
                                    ";\n    background: #fbdb60;\n    top: ",
                                    ";\n    left: ",
                                    ";\n    position: absolute;\n    border-radius: ",
                                    ";\n    box-shadow: 0 ",
                                    " 0 ",
                                    " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n",
                                ],
                                [
                                    "\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ",
                                    ";\n    height: ",
                                    ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ",
                                    " 0 ",
                                    " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ",
                                    ";\n    box-shadow: 0 ",
                                    " 0 ",
                                    "\n      ",
                                    ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ",
                                    ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ",
                                    ';\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: "";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ',
                                    ";\n    left: ",
                                    ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ",
                                    ";\n    right: ",
                                    ";\n  }\n\n  .butter {\n    width: ",
                                    ";\n    height: ",
                                    ";\n    background: #fbdb60;\n    top: ",
                                    ";\n    left: ",
                                    ";\n    position: absolute;\n    border-radius: ",
                                    ";\n    box-shadow: 0 ",
                                    " 0 ",
                                    " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n",
                                ]
                            )),
                        Sn("pancakeSize"),
                        Sn("pancakeSize"),
                        Sn("pancakeThickness"),
                        Sn("pancakeThickness"),
                        function (e) {
                            return e.theme.pancakeToggle.handleBackground;
                        },
                        Sn("pancakeThickness"),
                        Sn("pancakeThickness"),
                        function (e) {
                            return e.theme.pancakeToggle.handleShadow;
                        },
                        Sn("pancakeTwoOffset"),
                        Sn("pancakeThreeOffset"),
                        Sn("butterSmearOneTop"),
                        Sn("butterSmearOneLeft"),
                        Sn("butterSmearTwoTop"),
                        Sn("butterSmearTwoRight"),
                        Sn("butterWidth"),
                        Sn("butterHeight"),
                        Sn("butterTop"),
                        Sn("butterLeft"),
                        Sn("butterRadius"),
                        Sn("butterThickness"),
                        Sn("butterThickness")
                    ),
                    c.default.input(
                        Cn ||
                            (Cn = j(
                                [
                                    "\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ",
                                    ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(",
                                    ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ",
                                    " 0 ",
                                    " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n",
                                ],
                                [
                                    "\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ",
                                    ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(",
                                    ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ",
                                    " 0 ",
                                    " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n",
                                ]
                            )),
                        function (e) {
                            return e.theme.shadows.focus;
                        },
                        Sn("travelDistance"),
                        Sn("pancakeThickness"),
                        Sn("pancakeThickness")
                    ),
                    c.default.label(
                        wn ||
                            (wn = j(
                                [
                                    "\n  width: ",
                                    ";\n  height: ",
                                    ";\n  background: ",
                                    ";\n  box-shadow: ",
                                    ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n",
                                ],
                                [
                                    "\n  width: ",
                                    ";\n  height: ",
                                    ";\n  background: ",
                                    ";\n  box-shadow: ",
                                    ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n",
                                ]
                            )),
                        Sn("toggleWidth"),
                        Sn("toggleHeight"),
                        function (e) {
                            var n = e.theme,
                                t = e.checked;
                            return n.colors[t ? "success" : "input"];
                        },
                        function (e) {
                            return e.theme.shadows.inset;
                        }
                    ),
                    "round"),
                Ln = "flat",
                Rn = (((kn = {})[Nn] = { borderRadius: "32px" }), (kn[Ln] = { borderRadius: 0 }), kn),
                Mn = c.default.div(
                    An ||
                        (An = j(
                            ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"],
                            ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"]
                        )),
                    function (e) {
                        return e.primary ? e.theme.colors.secondary : e.theme.colors.secondary + "80";
                    }
                );
            Mn.defaultProps = { primary: !1 };
            c.default.div(
                Dn ||
                    (Dn = j(
                        [
                            "\n  position: relative;\n  background-color: ",
                            ";\n  box-shadow: ",
                            ";\n  height: 16px;\n  overflow: hidden;\n\n  ",
                            " {\n    border-top-left-radius: ",
                            ";\n    border-bottom-left-radius: ",
                            ";\n  }\n\n  ",
                            "\n  ",
                            "\n",
                        ],
                        [
                            "\n  position: relative;\n  background-color: ",
                            ";\n  box-shadow: ",
                            ";\n  height: 16px;\n  overflow: hidden;\n\n  ",
                            " {\n    border-top-left-radius: ",
                            ";\n    border-bottom-left-radius: ",
                            ";\n  }\n\n  ",
                            "\n  ",
                            "\n",
                        ]
                    )),
                function (e) {
                    return e.theme.colors.input;
                },
                function (e) {
                    return e.theme.shadows.inset;
                },
                Mn,
                function (e) {
                    return e.variant === Ln ? "0" : "32px";
                },
                function (e) {
                    return e.variant === Ln ? "0" : "32px";
                },
                Object(s.variant)({ variants: Rn }),
                s.space
            ),
                c.default.div(
                    Un ||
                        (Un = j(
                            ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"],
                            ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"]
                        ))
                );
            var An,
                Dn,
                Un,
                Bn,
                Pn = "sm",
                Fn = "md",
                _n = function (e) {
                    switch (e.scale) {
                        case Pn:
                            return "24px";
                        case Fn:
                        default:
                            return "32px";
                    }
                },
                zn = function (e) {
                    switch (e.scale) {
                        case Pn:
                            return "12px";
                        case Fn:
                        default:
                            return "20px";
                    }
                };
            c.default.input.attrs({ type: "radio" })(
                Bn ||
                    (Bn = j(
                        [
                            "\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",
                            ";\n  width: ",
                            ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",
                            ";\n  box-shadow: ",
                            ';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',
                            ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",
                            ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",
                            ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",
                            ";\n  }\n\n  &:checked {\n    background-color: ",
                            ";\n    &:after {\n      background-color: ",
                            ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ",
                            "\n",
                        ],
                        [
                            "\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",
                            ";\n  width: ",
                            ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",
                            ";\n  box-shadow: ",
                            ';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',
                            ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",
                            ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",
                            ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",
                            ";\n  }\n\n  &:checked {\n    background-color: ",
                            ";\n    &:after {\n      background-color: ",
                            ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ",
                            "\n",
                        ]
                    )),
                _n,
                _n,
                function (e) {
                    return e.theme.colors.input;
                },
                function (e) {
                    return e.theme.shadows.inset;
                },
                zn,
                zn,
                function (e) {
                    return e.theme.shadows.focus;
                },
                function (e) {
                    return e.theme.shadows.focus;
                },
                function (e) {
                    return e.theme.colors.success;
                },
                function (e) {
                    return e.theme.radio.handleBackground;
                },
                s.space
            ).defaultProps = { scale: Fn, m: 0 };
            var qn,
                Yn,
                Hn,
                Vn,
                Zn,
                Wn,
                Qn,
                Gn,
                Xn,
                Kn,
                Jn,
                $n,
                et,
                nt,
                tt,
                rt,
                at,
                it,
                ot,
                ct,
                st,
                lt,
                ut,
                dt,
                pt,
                bt,
                ft,
                mt,
                ht,
                yt,
                xt,
                jt,
                vt,
                gt = function (e) {
                    var n = e.disabled;
                    return void 0 !== n && n ? "not-allowed" : "cursor";
                },
                Ot = function (e) {
                    var n = e.isMax,
                        t = e.disabled;
                    return (
                        "\n  -webkit-appearance: none;\n  background-image: url(" +
                        (n
                            ? "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_max%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_max%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                            : "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_main%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_main%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E") +
                        ");\n  cursor: " +
                        gt +
                        ";\n  width: 24px;\n  height: 32px;\n  filter: " +
                        (t ? "grayscale(100%)" : "none") +
                        ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " +
                        (t ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") +
                        ";\n  }\n"
                    );
                },
                Ct =
                    (c.default.div(qn || (qn = j(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"]))),
                    Object(c.default)(R)(
                        Yn ||
                            (Yn = j(
                                ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"],
                                ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"]
                            )),
                        function (e) {
                            return e.progress;
                        }
                    ),
                    c.default.div(
                        Hn ||
                            (Hn = j(
                                ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"],
                                ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"]
                            )),
                        "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3C%2Fsvg%3E",
                        function (e) {
                            return e.disabled ? "grayscale(100%)" : "none";
                        }
                    ),
                    c.default.div(Vn || (Vn = j(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"]))),
                    c.default.input(
                        Zn ||
                            (Zn = j(
                                [
                                    "\n  cursor: ",
                                    ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ",
                                    "\n  }\n\n  ::-moz-range-thumb {\n    ",
                                    "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ",
                                    "\n  }\n",
                                ],
                                [
                                    "\n  cursor: ",
                                    ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ",
                                    "\n  }\n\n  ::-moz-range-thumb {\n    ",
                                    "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ",
                                    "\n  }\n",
                                ]
                            )),
                        gt,
                        Ot,
                        Ot,
                        Ot
                    ),
                    c.default.div(
                        Wn ||
                            (Wn = j(
                                ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"],
                                ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"]
                            )),
                        function (e) {
                            var n = e.theme,
                                t = e.disabled;
                            return n.colors[t ? "textDisabled" : "inputSecondary"];
                        }
                    ),
                    c.default.div(
                        Qn ||
                            (Qn = j(
                                ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"],
                                ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"]
                            )),
                        function (e) {
                            return e.theme.colors.primary;
                        },
                        function (e) {
                            return e.disabled ? "grayscale(100%)" : "none";
                        }
                    ),
                    "circle"),
                wt = Object(c.keyframes)(Gn || (Gn = j(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"]))),
                kt = Object(c.keyframes)(
                    Xn || (Xn = j(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))
                ),
                Tt = c.default.div(
                    Kn ||
                        (Kn = j(
                            ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"],
                            ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"]
                        )),
                    function (e) {
                        return e.theme.colors.backgroundDisabled;
                    },
                    function (e) {
                        var n = e.variant,
                            t = e.theme;
                        return n === Ct ? t.radii.circle : t.radii.small;
                    },
                    s.layout,
                    s.space
                ),
                Et =
                    (Object(c.default)(Tt)(Jn || (Jn = j(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), kt),
                    Object(c.default)(Tt)(
                        $n ||
                            ($n = j(
                                [
                                    '\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: "";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ',
                                    " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n",
                                ],
                                [
                                    '\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: "";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ',
                                    " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n",
                                ]
                            )),
                        wt
                    ),
                    Object(c.keyframes)(
                        et || (et = j(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))
                    )),
                It = Object(c.keyframes)(
                    nt ||
                        (nt = j(
                            ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"],
                            ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"]
                        ))
                ),
                St =
                    (c.default.div(tt || (tt = j(["\n  position: relative;\n"], ["\n  position: relative;\n"]))),
                    Object(c.default)(function (e) {
                        return a.a.createElement(
                            T,
                            y({ viewBox: "0 0 128 128" }, e),
                            a.a.createElement(
                                "svg",
                                { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                a.a.createElement("path", {
                                    d:
                                        "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z",
                                    fill: "#FEDC90",
                                    stroke: "#D1884F",
                                    strokeWidth: "2.89134",
                                }),
                                a.a.createElement("path", {
                                    d:
                                        "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z",
                                    fill: "#D1884F",
                                    stroke: "#633001",
                                    strokeWidth: "2.89134",
                                }),
                                a.a.createElement("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d:
                                        "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z",
                                    fill: "#633001",
                                })
                            )
                        );
                    })(
                        rt ||
                            (rt = j(
                                ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"],
                                ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"]
                            )),
                        Et
                    ),
                    Object(c.default)(function (e) {
                        return a.a.createElement(
                            T,
                            y({ viewBox: "0 0 256 256" }, e),
                            a.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d:
                                    "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z",
                                fill: "#464649",
                            }),
                            a.a.createElement("path", {
                                d:
                                    "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z",
                                fill: "#606063",
                            }),
                            a.a.createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
                            a.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d:
                                    "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z",
                                fill: "#464649",
                            }),
                            a.a.createElement("path", {
                                d:
                                    "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z",
                                fill: "#606063",
                            }),
                            a.a.createElement("path", {
                                d:
                                    "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z",
                                fill: "#464649",
                            }),
                            a.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d:
                                    "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z",
                                fill: "#464649",
                            }),
                            a.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d:
                                    "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z",
                                fill: "#979797",
                            }),
                            a.a.createElement("path", {
                                d:
                                    "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z",
                                fill: "#464649",
                            }),
                            a.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d:
                                    "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z",
                                fill: "#737373",
                            }),
                            a.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d:
                                    "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z",
                                fill: "#606063",
                            })
                        );
                    })(at || (at = j(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), It),
                    c.default.div(it || (it = j(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"]))),
                    c.default.div(
                        ot ||
                            (ot = j(
                                ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"],
                                ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"]
                            )),
                        function (e) {
                            var n = e.theme,
                                t = e.status;
                            return n.colors["past" === t ? "success" : "textDisabled"];
                        }
                    ),
                    Object(c.default)(ye)(
                        ct || (ct = j(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])),
                        function (e) {
                            return e.theme.mediaQueries.md;
                        },
                        function (e) {
                            return e.isVisible ? "visible" : "hidden";
                        }
                    )),
                Nt =
                    (Object(c.default)(St)(
                        st || (st = j(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])),
                        function (e) {
                            return e.theme.mediaQueries.md;
                        }
                    ),
                    Object(c.default)(St)(lt || (lt = j(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (e) {
                        return e.theme.mediaQueries.md;
                    }),
                    c.default.div(ut || (ut = j(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),
                    c.default.div(
                        dt ||
                            (dt = j(
                                [
                                    "\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ",
                                    ";\n  border: 2px solid ",
                                    ";\n  border-radius: ",
                                    ";\n  color: ",
                                    ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ",
                                    " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n",
                                ],
                                [
                                    "\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ",
                                    ";\n  border: 2px solid ",
                                    ";\n  border-radius: ",
                                    ";\n  color: ",
                                    ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ",
                                    " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n",
                                ]
                            )),
                        function (e) {
                            var n = e.theme,
                                t = e.status;
                            return n.colors["current" === t ? "secondary" : "invertedContrast"];
                        },
                        function (e) {
                            var n = e.theme;
                            return "past" === e.status ? n.colors.success : "transparent";
                        },
                        function (e) {
                            return e.theme.radii.circle;
                        },
                        function (e) {
                            var n = e.theme,
                                t = e.status;
                            return "past" === t ? n.colors.success : "current" === t ? n.colors.invertedContrast : n.colors.textDisabled;
                        },
                        function (e) {
                            return e.theme.mediaQueries.md;
                        }
                    ),
                    Object(c.default)(xe)(
                        pt ||
                            (pt = j(
                                ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"],
                                ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"]
                            )),
                        function (e) {
                            return e.theme.colors.textSubtle;
                        }
                    ),
                    Object(c.default)(xe)(
                        bt ||
                            (bt = j(
                                ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"],
                                ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"]
                            )),
                        function (e) {
                            return e.theme.mediaQueries.md;
                        }
                    ),
                    c.default.button(
                        ft ||
                            (ft = j(
                                [
                                    "\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ",
                                    ";\n  background-color: ",
                                    ";\n\n  ",
                                    " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n",
                                ],
                                [
                                    "\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ",
                                    ";\n  background-color: ",
                                    ";\n\n  ",
                                    " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n",
                                ]
                            )),
                        function (e) {
                            var n = e.theme,
                                t = e.color;
                            return n.colors[t];
                        },
                        function (e) {
                            var n = e.theme,
                                t = e.bgColor;
                            return n.colors[t];
                        },
                        function (e) {
                            return e.theme.mediaQueries.md;
                        }
                    ),
                    "primary"),
                Lt = "secondary",
                Rt = "success",
                Mt = "textDisabled",
                At = "textSubtle",
                Dt = "binance",
                Ut = "failure",
                Bt = "md",
                Pt = "sm",
                Ft = (((mt = {})[Bt] = { height: "28px", padding: "0 8px", fontSize: "14px" }), (mt[Pt] = { height: "24px", padding: "0 4px", fontSize: "12px" }), mt),
                _t =
                    (((ht = {})[Nt] = { backgroundColor: "primary" }),
                    (ht[Lt] = { backgroundColor: "secondary" }),
                    (ht[Rt] = { backgroundColor: "success" }),
                    (ht[Mt] = { backgroundColor: "textDisabled" }),
                    (ht[At] = { backgroundColor: "textSubtle" }),
                    (ht[Dt] = { backgroundColor: "binance" }),
                    (ht[Ut] = { backgroundColor: "failure" }),
                    ht),
                zt =
                    (c.default.div(
                        yt ||
                            (yt = j(
                                [
                                    "\n  align-items: center;\n  border-radius: 16px;\n  color: #2a2113;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
                                    "\n  ",
                                    "\n  ",
                                    "\n\n  ",
                                    "\n",
                                ],
                                [
                                    "\n  align-items: center;\n  border-radius: 16px;\n  color: #2a2113;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
                                    "\n  ",
                                    "\n  ",
                                    "\n\n  ",
                                    "\n",
                                ]
                            )),
                        Object(s.variant)({ prop: "scale", variants: Ft }),
                        Object(s.variant)({ variants: _t }),
                        s.space,
                        function (e) {
                            var n = e.outline,
                                t = e.theme,
                                r = e.variant;
                            if (n) {
                                var a = _t[void 0 === r ? Nt : r].backgroundColor,
                                    i = t.colors[a];
                                return "\n      color: " + i + ";\n      background: transparent;\n      border: 2px solid " + i + ";\n    ";
                            }
                            return "";
                        }
                    ),
                    {
                        sm: { handleHeight: "16px", handleWidth: "16px", handleLeft: "2px", handleTop: "2px", checkedLeft: "calc(100% - 18px)", toggleHeight: "20px", toggleWidth: "36px" },
                        md: { handleHeight: "32px", handleWidth: "32px", handleLeft: "4px", handleTop: "4px", checkedLeft: "calc(100% - 36px)", toggleHeight: "40px", toggleWidth: "72px" },
                    }),
                qt = function (e) {
                    return function (n) {
                        var t = n.scale;
                        return zt[void 0 === t ? Qe : t][e];
                    };
                },
                Yt = c.default.div(
                    xt ||
                        (xt = j(
                            ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"],
                            ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"]
                        )),
                    function (e) {
                        return e.theme.toggle.handleBackground;
                    },
                    qt("handleHeight"),
                    qt("handleLeft"),
                    qt("handleTop"),
                    qt("handleWidth")
                ),
                Ht = c.default.input(
                    jt ||
                        (jt = j(
                            [
                                "\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ",
                                " {\n    left: ",
                                ";\n  }\n\n  &:focus + ",
                                " {\n    box-shadow: ",
                                ";\n  }\n\n  &:hover + ",
                                ":not(:disabled):not(:checked) {\n    box-shadow: ",
                                ";\n  }\n",
                            ],
                            [
                                "\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ",
                                " {\n    left: ",
                                ";\n  }\n\n  &:focus + ",
                                " {\n    box-shadow: ",
                                ";\n  }\n\n  &:hover + ",
                                ":not(:disabled):not(:checked) {\n    box-shadow: ",
                                ";\n  }\n",
                            ]
                        )),
                    Yt,
                    qt("checkedLeft"),
                    Yt,
                    function (e) {
                        return e.theme.shadows.focus;
                    },
                    Yt,
                    function (e) {
                        return e.theme.shadows.focus;
                    }
                ),
                Vt = c.default.div(
                    vt ||
                        (vt = j(
                            [
                                "\n  align-items: center;\n  background-color: ",
                                ";\n  border-radius: 24px;\n  box-shadow: ",
                                ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ",
                                ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ",
                                ";\n",
                            ],
                            [
                                "\n  align-items: center;\n  background-color: ",
                                ";\n  border-radius: 24px;\n  box-shadow: ",
                                ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ",
                                ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ",
                                ";\n",
                            ]
                        )),
                    function (e) {
                        var n = e.theme,
                            t = e.checked;
                        return n.colors[t ? "success" : "input"];
                    },
                    function (e) {
                        return e.theme.shadows.inset;
                    },
                    qt("toggleHeight"),
                    qt("toggleWidth")
                ),
                Zt = "md",
                Wt = function (e) {
                    var n = e.checked,
                        t = e.scale,
                        r = void 0 === t ? Zt : t,
                        i = x(e, ["checked", "scale"]),
                        o = !!n;
                    return a.a.createElement(Vt, { checked: o, scale: r }, a.a.createElement(Ht, y({ checked: n, scale: r }, i, { type: "checkbox" })), a.a.createElement(Yt, { scale: r }));
                };
            Wt.defaultProps = { scale: Zt };
            var Qt,
                Gt,
                Xt = { xs: 370, sm: 576, md: 852, lg: 968, xl: 1080 },
                Kt = {
                    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
                    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
                    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
                    warning: "0px 0px 0px 1px #fbca46, 0px 0px 0px 4px rgba(251, 202, 70, 0.2)",
                    focus: "0px 0px 0px 1px #fefefe, 0px 0px 0px 4px rgba(254, 128, 177, 0.6)",
                    inset: "inset 0px 2px 2px -1px rgba(253, 228, 162, 0.1)",
                },
                Jt = {
                    siteWidth: 1200,
                    breakpoints: Object.values(Xt).map(function (e) {
                        return e + "px";
                    }),
                    mediaQueries: {
                        xs: "@media screen and (min-width: " + Xt.xs + "px)",
                        sm: "@media screen and (min-width: " + Xt.sm + "px)",
                        md: "@media screen and (min-width: " + Xt.md + "px)",
                        lg: "@media screen and (min-width: " + Xt.lg + "px)",
                        xl: "@media screen and (min-width: " + Xt.xl + "px)",
                        nav: "@media screen and (min-width: " + Xt.lg + "px)",
                    },
                    spacing: [0, 4, 8, 16, 24, 32, 48, 64],
                    shadows: Kt,
                    radii: { small: "4px", default: "16px", card: "32px", circle: "50%" },
                    zIndices: { dropdown: 10, modal: 100 },
                },
                $t = (function () {
                    var e = 0;
                    return Object.keys(Xt).reduce(function (n, t, r) {
                        var a, i;
                        if (r === Object.keys(Xt).length - 1) return y(y({}, n), (((a = {})[t] = "(min-width: " + e + "px)"), a));
                        var o = e,
                            c = Xt[t];
                        return (e = c + 1), y(y({}, n), (((i = {})[t] = "(min-width: " + o + "px) and (max-width: " + c + "px)"), i));
                    }, {});
                })(),
                er = function (e) {
                    return "is" + e.charAt(0).toUpperCase() + e.slice(1);
                },
                nr = function () {
                    var e = Object(r.useState)(function () {
                            return Object.keys($t).reduce(function (e, n) {
                                var t,
                                    r = er(n),
                                    a = window.matchMedia($t[n]);
                                return y(y({}, e), (((t = {})[r] = a.matches), t));
                            }, {});
                        }),
                        n = e[0],
                        t = e[1];
                    return (
                        Object(r.useEffect)(
                            function () {
                                var e = Object.keys($t).map(function (e) {
                                    var n = window.matchMedia($t[e]),
                                        r = function (n) {
                                            var r = er(e);
                                            t(function (e) {
                                                var t;
                                                return y(y({}, e), (((t = {})[r] = n.matches), t));
                                            });
                                        };
                                    return (
                                        n.addEventListener && n.addEventListener("change", r),
                                        function () {
                                            n.removeEventListener && n.removeEventListener("change", r);
                                        }
                                    );
                                });
                                return function () {
                                    e.forEach(function (e) {
                                        e();
                                    });
                                };
                            },
                            [t]
                        ),
                        n
                    );
                },
                tr = c.default.div(
                    Qt ||
                        (Qt = j(
                            [
                                '\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: "";\n    transform: rotate(45deg);\n    background: ',
                                ";\n  }\n",
                            ],
                            [
                                '\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: "";\n    transform: rotate(45deg);\n    background: ',
                                ";\n  }\n",
                            ]
                        )),
                    function (e) {
                        return e.theme.tooltip.background;
                    }
                );
            c.default.div(
                Gt ||
                    (Gt = j(
                        [
                            "\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  background: ",
                            ";\n  color: ",
                            ";\n  box-shadow: ",
                            ';\n\n  &[data-popper-placement^="top"] > ',
                            ' {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^="bottom"] > ',
                            ' {\n    top: -4px;\n  }\n\n  &[data-popper-placement^="left"] > ',
                            ' {\n    right: -4px;\n  }\n\n  &[data-popper-placement^="right"] > ',
                            " {\n    left: -4px;\n  }\n",
                        ],
                        [
                            "\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  background: ",
                            ";\n  color: ",
                            ";\n  box-shadow: ",
                            ';\n\n  &[data-popper-placement^="top"] > ',
                            ' {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^="bottom"] > ',
                            ' {\n    top: -4px;\n  }\n\n  &[data-popper-placement^="left"] > ',
                            ' {\n    right: -4px;\n  }\n\n  &[data-popper-placement^="right"] > ',
                            " {\n    left: -4px;\n  }\n",
                        ]
                    )),
                function (e) {
                    return e.theme.tooltip.background;
                },
                function (e) {
                    return e.theme.tooltip.text;
                },
                function (e) {
                    return e.theme.tooltip.boxShadow;
                },
                tr,
                tr,
                tr,
                tr
            );
            var rr,
                ar,
                ir,
                or,
                cr,
                sr = c.default.div(
                    rr ||
                        (rr = j(
                            ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"],
                            ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"]
                        )),
                    function (e) {
                        return e.background || "transparent";
                    },
                    function (e) {
                        return e.theme.colors.borderColor;
                    }
                ),
                lr = Object(c.default)(xe)(ar || (ar = j(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"]))),
                ur = Object(c.default)(xe)(ir || (ir = j(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"]))),
                dr = function (e) {
                    var n = e.onDismiss;
                    return a.a.createElement(ie, { variant: "text", onClick: n, "aria-label": "Close the dialog" }, a.a.createElement(ue, { color: "primary" }));
                },
                pr = function (e) {
                    var n = e.onBack;
                    return a.a.createElement(ie, { variant: "text", onClick: n, "area-label": "go back", mr: "8px" }, a.a.createElement(ce, { color: "primary" }));
                },
                br = Object(c.default)(ye)(
                    or ||
                        (or = j(
                            [
                                "\n  background: ",
                                ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ",
                                ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ",
                                ";\n\n  ",
                                " {\n    width: auto;\n    min-width: ",
                                ";\n    max-width: 100%;\n  }\n",
                            ],
                            [
                                "\n  background: ",
                                ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ",
                                ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ",
                                ";\n\n  ",
                                " {\n    width: auto;\n    min-width: ",
                                ";\n    max-width: 100%;\n  }\n",
                            ]
                        )),
                    function (e) {
                        return e.theme.modal.background;
                    },
                    function (e) {
                        return e.theme.colors.borderColor;
                    },
                    function (e) {
                        return e.theme.zIndices.modal;
                    },
                    function (e) {
                        return e.theme.mediaQueries.xs;
                    },
                    function (e) {
                        return e.minWidth;
                    }
                ),
                fr = function (e) {
                    var n = e.title,
                        t = e.onDismiss,
                        r = e.onBack,
                        i = e.children,
                        o = e.hideCloseButton,
                        c = void 0 !== o && o,
                        s = e.bodyPadding,
                        l = void 0 === s ? "24px" : s,
                        u = e.headerBackground,
                        d = void 0 === u ? "transparent" : u,
                        p = e.minWidth,
                        b = void 0 === p ? "320px" : p,
                        f = x(e, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
                    return a.a.createElement(
                        br,
                        y({ minWidth: b }, f),
                        a.a.createElement(sr, { background: d }, a.a.createElement(lr, null, r && a.a.createElement(pr, { onBack: r }), a.a.createElement(un, null, n)), !c && a.a.createElement(dr, { onDismiss: t })),
                        a.a.createElement(ur, { p: l }, i)
                    );
                },
                mr = c.default.div.attrs({ role: "presentation" })(
                    cr ||
                        (cr = j(
                            ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"],
                            ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"]
                        )),
                    function (e) {
                        return e.show ? 0.6 : 0;
                    },
                    function (e) {
                        return e.zIndex;
                    },
                    function (e) {
                        return e.show ? "initial" : "none";
                    }
                );
            mr.defaultProps = { show: !1, zIndex: 10 };
            var hr,
                yr,
                xr,
                jr,
                vr,
                gr,
                Or = c.default.div(
                    hr ||
                        (hr = j(
                            ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"],
                            ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"]
                        )),
                    function (e) {
                        return e.theme.zIndices.modal - 1;
                    }
                ),
                Cr = Object(r.createContext)({
                    onPresent: function () {
                        return null;
                    },
                    onDismiss: function () {
                        return null;
                    },
                    setCloseOnOverlayClick: function () {
                        return !0;
                    },
                }),
                wr = function (e) {
                    var n = e.children,
                        t = Object(r.useState)(!1),
                        i = t[0],
                        o = t[1],
                        c = Object(r.useState)(),
                        s = c[0],
                        l = c[1],
                        u = Object(r.useState)(!0),
                        d = u[0],
                        p = u[1],
                        b = function () {
                            l(void 0), o(!1);
                        };
                    return a.a.createElement(
                        Cr.Provider,
                        {
                            value: {
                                onPresent: function (e) {
                                    l(e), o(!0);
                                },
                                onDismiss: b,
                                setCloseOnOverlayClick: p,
                            },
                        },
                        i &&
                            a.a.createElement(
                                Or,
                                null,
                                a.a.createElement(mr, {
                                    show: !0,
                                    onClick: function () {
                                        d && b();
                                    },
                                }),
                                a.a.isValidElement(s) && a.a.cloneElement(s, { onDismiss: b })
                            ),
                        n
                    );
                },
                kr = function (e, n) {
                    void 0 === n && (n = !0);
                    var t = Object(r.useContext)(Cr),
                        a = t.onPresent,
                        i = t.onDismiss,
                        o = t.setCloseOnOverlayClick,
                        c = Object(r.useCallback)(
                            function () {
                                a(e);
                            },
                            [e, a]
                        );
                    return (
                        Object(r.useEffect)(
                            function () {
                                o(n);
                            },
                            [n, o]
                        ),
                        [c, i]
                    );
                },
                
                Tr = a.a.memo(
                    function (e) {
                        e.isDark;
                        var n = x(e, ["isDark"]);
                        return a.a.createElement("img", y({ src: "images/logo.png" , style: { width: "160px" } }, n));
                    },
                    function (e, n) {
                        return e.isDark === n.isDark;
                    }
                ),
                Er = Object(c.default)(f.b)(
                    yr ||
                        (yr = j(
                            [
                                "\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 52px;\n    ",
                                " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 80px;\n    //display: none;\n    ",
                                " {\n      display: block;\n    }\n  }\n",
                            ],
                            [
                                "\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 52px;\n    ",
                                " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 80px;\n    //display: none;\n    ",
                                " {\n      display: block;\n    }\n  }\n",
                            ]
                        )),
                    function (e) {
                        return e.theme.mediaQueries.nav;
                    },
                    function (e) {
                        return e.theme.mediaQueries.nav;
                    }
                ),
                Ir = c.default.div(
                    xr ||
                        (xr = j(
                            [
                                "\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  width: 100%;\n  display: flex;\n  padding: 0px;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n",
                            ],
                            [
                                "\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  width: 100%;\n  display: flex;\n  padding: 0px;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n",
                            ]
                        ))
                ),
                Sr = Object(c.default)(f.b)(jr || (jr = j(["\n  padding: 0;\n"], ["\n  padding: 0;\n"]))),
                Nr = a.a.memo(
                    function (e) {
                        e.isPushed, e.togglePush;
                        var n = e.isDark,
                            t = e.href,
                            r = t.startsWith("http"),
                            i = a.a.createElement(a.a.Fragment, null, a.a.createElement(Tr, { className: "desktop-icon", isDark: n }));
                        return a.a.createElement(
                            xe,
                            null,
                            r ? a.a.createElement(Er, { as: "a", href: t, "aria-label": "Dexbuilder home page" }, i) : a.a.createElement(Er, { to: t, "aria-label": "Dexbuilder home page" }, i),
                            a.a.createElement(
                                Ir,
                                null,
                                a.a.createElement(Sr, { style: { marginRight: "12px", color: "#ffffff"}, to: "/swap" }, "Swap"),
                                a.a.createElement(Sr, { style: { marginRight: "12px", color: "#ffffff" }, to: "/pool" }, "Liquidity"),
                            )
                        );
                    },
                    function (e, n) {
                        return e.isPushed === n.isPushed && e.isDark === n.isDark;
                    }
                ),
                Lr = 240,
                Rr = c.default.div(
                    vr ||
                        (vr = j(
                            [
                                "\n  // position: fixed;\n  // padding-top: ",
                                ";\n  // top: 0;\n  // left: 0;\n  // display: flex;\n  // flex-direction: column;\n  // justify-content: space-between;\n  // flex-shrink: 0;\n  // background-color: ",
                                ";\n  // width: ",
                                ";\n  // height: 100vh;\n  // transition: padding-top 0.2s, width 0.2s;\n  // border-right: ",
                                ";\n  // z-index: 11;\n  // overflow: ",
                                ";\n  // transform: translate3d(0, 0, 0);\n\n  ",
                                " {\n    // z-index: initial;\n    // border-right: 2px solid rgba(133, 133, 133, 0.1);\n    // width: ",
                                ";\n  }\n",
                            ],
                            [
                                "\n  // position: fixed;\n  // padding-top: ",
                                ";\n  // top: 0;\n  // left: 0;\n  // display: flex;\n  // flex-direction: column;\n  // justify-content: space-between;\n  // flex-shrink: 0;\n  // background-color: ",
                                ";\n  // width: ",
                                ";\n  // height: 100vh;\n  // transition: padding-top 0.2s, width 0.2s;\n  // border-right: ",
                                ";\n  // z-index: 11;\n  // overflow: ",
                                ";\n  // transform: translate3d(0, 0, 0);\n\n  ",
                                " {\n    // z-index: initial;\n    // border-right: 2px solid rgba(133, 133, 133, 0.1);\n    // width: ",
                                ";\n  }\n",
                            ]
                        )),
                    function (e) {
                        return e.showMenu ? "80px" : 0;
                    },
                    function (e) {
                        return e.theme.nav.background;
                    },
                    function (e) {
                        return e.isPushed ? "240px" : 0;
                    },
                    function (e) {
                        return e.isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0;
                    },
                    function (e) {
                        return e.isPushed ? "initial" : "hidden";
                    },
                    function (e) {
                        return e.theme.mediaQueries.nav;
                    },
                    function (e) {
                        return (e.isPushed ? Lr : 56) + "px";
                    }
                ),
                Mr = function (e) {
                    var n = e.isPushed,
                        t = e.showMenu;
                    return a.a.createElement(Rr, { isPushed: n, showMenu: t });
                };
            !(function (e) {
                (e.Injected = "injected"), (e.WalletConnect = "walletconnect"), (e.BSC = "bsc");
            })(gr || (gr = {}));
            var Ar,
                Dr,
                Ur,
                Br,
                Pr,
                Fr,
                _r,
                zr,
                qr,
                Yr,
                Hr,
                Vr,
                Zr,
                Wr = [
                    {
                        title: "Metamask",
                        icon: function (e) {
                            return a.a.createElement(
                                T,
                                y({ viewBox: "0 0 96 96" }, e),
                                a.a.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
                                a.a.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
                                a.a.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
                                a.a.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
                                a.a.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
                                a.a.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
                                a.a.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
                                a.a.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
                                a.a.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
                                a.a.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
                                a.a.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
                                a.a.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
                                a.a.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
                                a.a.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
                                a.a.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
                                a.a.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
                                a.a.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
                                a.a.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
                                a.a.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
                                a.a.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
                                a.a.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
                                a.a.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
                                a.a.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
                                a.a.createElement("path", {
                                    d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z",
                                    fill: "#C0AC9D",
                                }),
                                a.a.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
                                a.a.createElement("path", {
                                    d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z",
                                    fill: "#763E1A",
                                }),
                                a.a.createElement("path", {
                                    d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z",
                                    fill: "#763E1A",
                                }),
                                a.a.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
                                a.a.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
                                a.a.createElement("path", {
                                    d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z",
                                    fill: "#F5841F",
                                })
                            );
                        },
                        connectorId: gr.Injected,
                    },
                    {
                        title: "TrustWallet",
                        icon: function (e) {
                            return a.a.createElement(
                                T,
                                y({ viewBox: "0 0 96 96" }, e),
                                a.a.createElement(
                                    "g",
                                    { clipPath: "url(#clip-trustwallet)" },
                                    a.a.createElement("path", {
                                        d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z",
                                        fill: "#3375BB",
                                    }),
                                    a.a.createElement("path", {
                                        d:
                                            "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z",
                                        fill: "white",
                                    })
                                ),
                                a.a.createElement("defs", null, a.a.createElement("clipPath", { id: "clip-trustwallet" }, a.a.createElement("rect", { width: "96", height: "96", fill: "white" })))
                            );
                        },
                        connectorId: gr.Injected,
                    },
                    {
                        title: "WalletConnect",
                        icon: function (e) {
                            return a.a.createElement(
                                T,
                                y({ viewBox: "0 0 96 96" }, e),
                                a.a.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
                                a.a.createElement("path", {
                                    d:
                                        "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z",
                                    fill: "white",
                                })
                            );
                        },
                        connectorId: gr.WalletConnect,
                    },
                    {
                        title: "Binance Chain Wallet",
                        icon: function (e) {
                            return a.a.createElement(
                                T,
                                y({ viewBox: "0 0 32 32" }, e),
                                a.a.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
                                a.a.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
                                a.a.createElement("path", {
                                    d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z",
                                    fill: "#F0B90B",
                                }),
                                a.a.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
                                a.a.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
                                a.a.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
                                a.a.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
                                a.a.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
                                a.a.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
                                a.a.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
                                a.a.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })
                            );
                        },
                        connectorId: gr.BSC,
                    },
                ],
                Qr = "connectorId",
                Gr = function (e) {
                    var n = e.login,
                        t = e.walletConfig,
                        r = e.onDismiss,
                        i = e.mb,
                        o = t.title,
                        c = t.icon;
                    return a.a.createElement(
                        X,
                        {
                            width: "100%",
                            variant: "tertiary",
                            onClick: function () {
                                n(t.connectorId), window.localStorage.setItem(Qr, t.connectorId), r();
                            },
                            style: { justifyContent: "space-between" },
                            mb: i,
                            id: "wallet-connect-" + o.toLocaleLowerCase(),
                        },
                        a.a.createElement(R, { bold: !0, color: "primary", mr: "16px" }, o),
                        a.a.createElement(c, { width: "32px" })
                    );
                },
                Xr = Object(c.default)(jn)(
                    Ar || (Ar = j(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"]))
                ),
                Kr = function (e) {
                    var n = e.login,
                        t = e.onDismiss,
                        r =
                            void 0 === t
                                ? function () {
                                      return null;
                                  }
                                : t;
                    return a.a.createElement(
                        fr,
                        { title: "Connect to a wallet", onDismiss: r },
                        Wr.map(function (e, t) {
                            return a.a.createElement(Gr, { key: e.title, login: n, walletConfig: e, onDismiss: r, mb: t < Wr.length - 1 ? "8px" : "0" });
                        }),
                        a.a.createElement(
                            Xr,
                            { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: !0 },
                            a.a.createElement(pe, { color: "primary", mr: "6px" }),
                            "Learn how to connect"
                        )
                    );
                },
                Jr = Object(c.default)(R).attrs({ role: "button" })(
                    Dr || (Dr = j(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])),
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                $r = c.default.div(
                    Ur ||
                        (Ur = j(
                            ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: #3389fb", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"],
                            ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: #3389fb", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"]
                        )),
                    function (e) {
                        return e.isTooltipDisplayed ? "block" : "none";
                    },
                    function (e) {
                        return e.theme.colors.contrast;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    }
                ),
                ea = function (e) {
                    var n = e.toCopy,
                        t = e.children,
                        i = x(e, ["toCopy", "children"]),
                        o = Object(r.useState)(!1),
                        c = o[0],
                        s = o[1];
                    return a.a.createElement(
                        Jr,
                        y(
                            {
                                small: !0,
                                bold: !0,
                                onClick: function () {
                                    navigator.clipboard &&
                                        (navigator.clipboard.writeText(n),
                                        s(!0),
                                        setTimeout(function () {
                                            s(!1);
                                        }, 1e3));
                                },
                            },
                            i
                        ),
                        t,
                        a.a.createElement(de, { width: "20px", color: "primary", ml: "4px" }),
                        a.a.createElement($r, { isTooltipDisplayed: c }, "Copied")
                    );
                },
                na = function (e) {
                    var n = e.account,
                        t = e.logout,
                        r = e.onDismiss,
                        i =
                            void 0 === r
                                ? function () {
                                      return null;
                                  }
                                : r;
                    return a.a.createElement(
                        fr,
                        { title: "Your wallet", onDismiss: i },
                        a.a.createElement(R, { fontSize: "20px", bold: !0, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, n),
                        a.a.createElement(xe, { mb: "32px" }, a.a.createElement(Tn, { small: !0, href: "https://bscscan.com/address/" + n, mr: "16px" }, "View on BscScan"), a.a.createElement(ea, { toCopy: n }, "Copy Address")),
                        a.a.createElement(
                            xe,
                            { justifyContent: "center" },
                            a.a.createElement(
                                X,
                                {
                                    scale: "sm",
                                    variant: "secondary",
                                    onClick: function () {
                                        t(), window.localStorage.removeItem(Qr), i();
                                    },
                                },
                                "Logout"
                            )
                        )
                    );
                },
                ta = function (e, n, t) {
                    return { onPresentConnectModal: kr(a.a.createElement(Kr, { login: e }))[0], onPresentAccountModal: kr(a.a.createElement(na, { account: t || "", logout: n }))[0] };
                },
                ra = a.a.memo(
                    function (e) {
                        var n = e.account,
                            t = e.login,
                            r = e.logout,
                            i = ta(t, r, n),
                            o = i.onPresentConnectModal,
                            c = i.onPresentAccountModal,
                            s = n ? n.substring(0, 4) + "..." + n.substring(n.length - 4) : null;
                        return a.a.createElement(
                            "div",
                            null,
                            n
                                ? a.a.createElement(
                                      X,
                                      {
                                          scale: "nm",
                                          variant: "tertiary",
                                          onClick: function () {
                                              c();
                                          },
                                      },
                                      s
                                  )
                                : a.a.createElement(
                                      X,
                                      {
                                          variant: "tertiary",
                                          scale: "nm",
                                          onClick: function () {
                                              o();
                                          },
                                      },
                                      "Connect Wallet"
                                  )
                        );
                    },
                    function (e, n) {
                        return e.account === n.account;
                    }
                ),
                aa = c.default.div(Br || (Br = j(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"]))),
                ia = c.default.nav(
                    Pr ||
                        (Pr = j(
                            [
                                "\n  // position: fixed;\n  // top: ",
                                ";\n  // left: 0;\n  //transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n  height: ",
                                "px;\n  background-color: transparent;\n  //border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  //transform: translate3d(0, 0, 0);\n",
                            ],
                            [
                                "\n  // position: fixed;\n  // top: ",
                                ";\n  // left: 0;\n  //transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n  height: ",
                                "px;\n  background-color: transparent;\n  //border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  //transform: translate3d(0, 0, 0);\n",
                            ]
                        )),
                    function (e) {
                        return e.showMenu ? 0 : "-64px";
                    },
                    64
                ),
                oa = c.default.div(Fr || (Fr = j(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"]))),
                ca = c.default.div(
                    _r ||
                        (_r = j(
                            ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  // ", " {\n  //   margin-left: ", ";\n  //   max-width: ", ";\n  // }\n"],
                            ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  // ", " {\n  //   margin-left: ", ";\n  //   max-width: ", ";\n  // }\n"]
                        )),
                    function (e) {
                        return e.showMenu ? "64px" : 0;
                    },
                    function (e) {
                        return e.theme.mediaQueries.nav;
                    },
                    function (e) {
                        return (e.isPushed ? Lr : 56) + "px";
                    },
                    function (e) {
                        return "calc(100% - " + (e.isPushed ? Lr : 56) + "px)";
                    }
                ),
                sa = function (e) {
                    var n,
                        t = e.account,
                        i = e.login,
                        o = e.logout,
                        c = e.isDark,
                        s = e.toggleTheme,
                        l = e.langs,
                        u = e.setLang,
                        d = e.currentLang,
                        p = e.cakePriceUsd,
                        f = e.links;
                    e.profile;
                    var m = e.children,
                        h = !1 === nr().isXl,
                        y = Object(r.useState)(!h),
                        x = y[0],
                        j = y[1],
                        v = Object(r.useState)(!0),
                        g = v[0],
                        O = v[1],
                        C = Object(r.useRef)(window.pageYOffset);
                    Object(r.useEffect)(function () {
                        var e = b()(function () {
                            var e = window.pageYOffset,
                                n = window.document.body.clientHeight === e + window.innerHeight;
                            0 === e ? O(!0) : n || (e < C.current ? O(!0) : O(!1)), (C.current = e);
                        }, 200);
                        return (
                            window.addEventListener("scroll", e),
                            function () {
                                window.removeEventListener("scroll", e);
                            }
                        );
                    }, []);
                    var w = f.find(function (e) {
                        return "Home" === e.label;
                    });
                    return a.a.createElement(
                        aa,
                        null,
                        a.a.createElement(
                            ia,
                            { showMenu: g },
                            a.a.createElement(Nr, {
                                isPushed: x,
                                togglePush: function () {
                                    return j(function (e) {
                                        return !e;
                                    });
                                },
                                isDark: c,
                                href: null !== (n = null === w || void 0 === w ? void 0 : w.href) && void 0 !== n ? n : "/",
                            }),
                            a.a.createElement(xe, null, a.a.createElement(ra, { account: t, login: i, logout: o }))
                        ),
                        a.a.createElement(
                            oa,
                            null,
                            a.a.createElement(Mr, { isPushed: x, isMobile: h, showMenu: g, isDark: c, toggleTheme: s, langs: l, setLang: u, currentLang: d, cakePriceUsd: p, pushNav: j, links: f }),
                            a.a.createElement(ca, { isPushed: x, showMenu: g }, m)
                        )
                    );
                },
                la = function (e) {
                    var n = e.action;
                    return n.url.startsWith("http")
                        ? a.a.createElement(X, y({ as: "a", scale: "sm", href: n.url }, { target: "_blank", rel: "noreferrer noopener" }), n.text)
                        : a.a.createElement(X, { as: f.b, scale: "sm", to: n.url }, n.text);
                },
                ua = "success",
                da = "danger",
                pa = "warning",
                ba = "info",
                fa = (((zr = {})[ba] = je), (zr[ua] = ge), (zr[da] = ve), (zr[pa] = Oe), zr),
                ma = c.default.div(
                    qr ||
                        (qr = j(
                            ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"],
                            ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"]
                        )),
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                ha = function (e) {
                    var n = e.toast,
                        t = e.onRemove,
                        i = e.style,
                        o = e.ttl,
                        c = x(e, ["toast", "onRemove", "style", "ttl"]),
                        s = Object(r.useRef)(),
                        l = Object(r.useRef)(null),
                        u = Object(r.useRef)(t),
                        d = n.id,
                        p = n.title,
                        b = n.description,
                        f = n.type,
                        h = n.action,
                        j = Object(r.useCallback)(
                            function () {
                                return u.current(d);
                            },
                            [d, u]
                        );
                    return (
                        Object(r.useEffect)(
                            function () {
                                return (
                                    s.current && clearTimeout(s.current),
                                    (s.current = window.setTimeout(function () {
                                        j();
                                    }, o)),
                                    function () {
                                        clearTimeout(s.current);
                                    }
                                );
                            },
                            [s, o, j]
                        ),
                        a.a.createElement(
                            m.a,
                            y({ nodeRef: l, timeout: 250, style: i }, c),
                            a.a.createElement(
                                ma,
                                {
                                    ref: l,
                                    onMouseEnter: function () {
                                        clearTimeout(s.current);
                                    },
                                    onMouseLeave: function () {
                                        s.current && clearTimeout(s.current),
                                            (s.current = window.setTimeout(function () {
                                                j();
                                            }, o));
                                    },
                                },
                                a.a.createElement(Ee, { title: p, variant: fa[f], onClick: j }, h ? a.a.createElement(a.a.Fragment, null, a.a.createElement(R, { as: "p", mb: "8px" }, b), a.a.createElement(la, { action: h })) : b)
                            )
                        )
                    );
                },
                ya = c.default.div(
                    Yr ||
                        (Yr = j(
                            [
                                "\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n",
                            ],
                            [
                                "\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n",
                            ]
                        ))
                ),
                xa = function (e) {
                    var n = e.toasts,
                        t = e.onRemove,
                        r = e.ttl,
                        i = void 0 === r ? 6e3 : r,
                        o = e.stackSpacing,
                        c = void 0 === o ? 24 : o;
                    return a.a.createElement(
                        ya,
                        null,
                        a.a.createElement(
                            h.a,
                            null,
                            n.map(function (e, n) {
                                var r = (1e3 - n).toString(),
                                    o = 80 + n * c;
                                return a.a.createElement(ha, { key: e.id, toast: e, onRemove: t, ttl: i, style: { top: o + "px", zIndex: r } });
                            })
                        )
                    );
                },
                ja = Object(c.createGlobalStyle)(
                    Hr ||
                        (Hr = j(
                            [
                                '\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role="button"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  // ::-webkit-scrollbar {\n  //   width: 8px;\n  // }\n  // ::-webkit-scrollbar-thumb {\n  //   background: ',
                                "; \n  //   border-radius: 8px;\n  // }\n  // ::-webkit-scrollbar-track {\n  //   box-shadow: inset 0 0 5px ",
                                "; \n  //   border-radius: 10px;\n  // }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n",
                            ],
                            [
                                '\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role="button"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  // ::-webkit-scrollbar {\n  //   width: 8px;\n  // }\n  // ::-webkit-scrollbar-thumb {\n  //   background: ',
                                "; \n  //   border-radius: 8px;\n  // }\n  // ::-webkit-scrollbar-track {\n  //   box-shadow: inset 0 0 5px ",
                                "; \n  //   border-radius: 10px;\n  // }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n",
                            ]
                        )),
                    function (e) {
                        return e.theme.colors.textSubtle;
                    },
                    function (e) {
                        return e.theme.colors.input;
                    }
                ),
                va = { failure: "#ED4B9E", primary: "#fefefe", primaryBright: "#53DEE9", primaryDark: "#0098A1", secondary: "#fefefe", secondaryBackground: "#03a9f4", 
                success: "#31D0AA", warning: "#FFB237", blue: "#027dd6" },
                ga = { binance: "#F0B90B" },
                Oa = y(y(y({}, va), ga), {
                    background: "#03a9f4",
                    backgroundDisabled: "#E9EAEB",
                    contrast: "#44464a",
                    dropdown: "#F6F6F6",
                    invertedContrast: "#2a2113",
                    input: "#4fa0c4de",
                    inputSecondary: "#eeeeee",
                    inputThird: "#AAAAAA",
                    tertiary: "#03a9f4",
                    text: "#feffff",
                    textDisabled: "#BDC2C4",
                    textSubtle: "#fefefe",
                    textInput: "#888888",
                    borderColor: "#f0f0f0",
                    card: "#2a2113",
                    gradients: { bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)" },
                }),
                Ca = y(y(y({}, va), ga), {
                    secondary: "#9A6AFF",
                    background: "#16181d",
                    backgroundDisabled: "#3c3742",
                    contrast: "#2a2113",
                    dropdown: "#1E1D20",
                    invertedContrast: "#44464a",
                    input: "#2d2f33",
                    inputSecondary: "#66578D",
                    inputThird: "#AAAAAA",
                    primaryDark: "#0098A1",
                    tertiary: "#737477",
                    text: "#efefef",
                    textDisabled: "#666171",
                    textSubtle: "#e7e7e8",
                    textInput: "#cccccc",
                    borderColor: "#524B63",
                    card: "#131519",
                    gradients: { bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)" },
                }),
                wa = { background: Oa.card },
                ka = { background: Ca.card },
                Ta = {
                    background: Oa.card,
                    boxShadow: "rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px, rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px",
                    boxShadowActive: Kt.active,
                    boxShadowSuccess: Kt.success,
                    boxShadowWarning: Kt.warning,
                    cardHeaderBackground: { default: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)", blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)", violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)" },
                    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
                },
                Ea = {
                    background: Ca.card,
                    boxShadow: "rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px, rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px",
                    boxShadowActive: Kt.active,
                    boxShadowSuccess: Kt.success,
                    boxShadowWarning: Kt.warning,
                    cardHeaderBackground: { default: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)", blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)", violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)" },
                    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
                },
                Ia = { handleBackground: Oa.card, handleShadow: Oa.textDisabled },
                Sa = { handleBackground: Ca.card, handleShadow: Ca.textDisabled },
                Na = { handleBackground: Oa.card },
                La = { handleBackground: Ca.card },
                Ra = { handleBackground: Oa.card },
                Ma = { handleBackground: Ca.card },
                Aa = { background: Oa.card, hover: "#EEEAF4" },
                Da = { background: Ca.card, hover: "#473d5d" },
                Ua = { background: Oa.card },
                Ba = { background: Ca.card },
                Pa = { background: Ca.card, text: Ca.text, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)" },
                Fa = { background: Oa.card, text: Oa.text, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)" },
                _a = y(y({}, Jt), { isDark: !0, alert: ka, colors: Ca, card: Ea, toggle: Ma, nav: Da, modal: Ba, pancakeToggle: Sa, radio: La, tooltip: Fa }),
                za = y(y({}, Jt), { isDark: !1, alert: wa, colors: Oa, card: Ta, toggle: Ra, nav: Aa, modal: Ua, pancakeToggle: Ia, radio: Na, tooltip: Pa }),
                qa = t(11),
                Ya = Object(c.createGlobalStyle)(Vr || (Vr = Object(qa.a)(["\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), function (e) {
                    return e.theme.colors.background;
                }),
                Ha = t(2),
                Va = t.n(Ha),
                Za = t(34),
                Wa = t(15),
                Qa = t(48),
                Ga = t(296),
                Xa = t(22),
                Ka = t(60),
                Ja = t(136),
                $a = t(18),
                ei = t(594),
                ni = t(137),
                ti = t(138),
                ri = t(298),
                ai = t(155),
                ii = t(8),
                oi = t(139),
                ci = t(6),
                si = t(13),
                li = t(14),
                ui = t(140),
                di = t(88),
                pi = t(45),
                bi = (function (e) {
                    Object(si.a)(t, e);
                    var n = Object(li.a)(t);
                    function t(e, r, a) {
                        var i;
                        return Object(ci.a)(this, t), ((i = n.call(this, e)).code = r), (i.data = a), i;
                    }
                    return t;
                })(Object(ui.a)(Error)),
                fi = function e(n, t, r) {
                    var a = this;
                    Object(ci.a)(this, e),
                        (this.isMetaMask = !1),
                        (this.chainId = void 0),
                        (this.url = void 0),
                        (this.host = void 0),
                        (this.path = void 0),
                        (this.batchWaitTimeMs = void 0),
                        (this.nextId = 1),
                        (this.batchTimeoutId = null),
                        (this.batch = []),
                        (this.clearBatch = Object(Za.a)(
                            Va.a.mark(function e() {
                                var n, t, r, i, o, c, s, l, u, d, p, b, f, m;
                                return Va.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        console.info("Clearing batch", a.batch),
                                                        (n = a.batch),
                                                        (a.batch = []),
                                                        (a.batchTimeoutId = null),
                                                        (e.prev = 4),
                                                        (e.next = 7),
                                                        fetch(a.url, {
                                                            method: "POST",
                                                            headers: { "content-type": "application/json", accept: "application/json" },
                                                            body: JSON.stringify(
                                                                n.map(function (e) {
                                                                    return e.request;
                                                                })
                                                            ),
                                                        })
                                                    );
                                                case 7:
                                                    (t = e.sent), (e.next = 14);
                                                    break;
                                                case 10:
                                                    return (
                                                        (e.prev = 10),
                                                        (e.t0 = e.catch(4)),
                                                        n.forEach(function (e) {
                                                            return (0, e.reject)(new Error("Failed to send batch call"));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 14:
                                                    if (t.ok) {
                                                        e.next = 17;
                                                        break;
                                                    }
                                                    return (
                                                        n.forEach(function (e) {
                                                            return (0, e.reject)(new bi("".concat(t.status, ": ").concat(t.statusText), -32e3));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 17:
                                                    return (e.prev = 17), (e.next = 20), t.json();
                                                case 20:
                                                    (r = e.sent), (e.next = 27);
                                                    break;
                                                case 23:
                                                    return (
                                                        (e.prev = 23),
                                                        (e.t1 = e.catch(17)),
                                                        n.forEach(function (e) {
                                                            return (0, e.reject)(new Error("Failed to parse JSON response"));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 27:
                                                    (i = n.reduce(function (e, n) {
                                                        return (e[n.request.id] = n), e;
                                                    }, {})),
                                                        (o = Object(oi.a)(r));
                                                    try {
                                                        for (o.s(); !(c = o.n()).done; )
                                                            (s = c.value),
                                                                (l = i[s.id]),
                                                                (u = l.resolve),
                                                                (d = l.reject),
                                                                (p = l.request.method),
                                                                u &&
                                                                    ("error" in s
                                                                        ? d(
                                                                              new bi(
                                                                                  null === s || void 0 === s || null === (b = s.error) || void 0 === b ? void 0 : b.message,
                                                                                  null === s || void 0 === s || null === (f = s.error) || void 0 === f ? void 0 : f.code,
                                                                                  null === s || void 0 === s || null === (m = s.error) || void 0 === m ? void 0 : m.data
                                                                              )
                                                                          )
                                                                        : "result" in s
                                                                        ? u(s.result)
                                                                        : d(new bi("Received unexpected JSON-RPC response to ".concat(p, " request."), -32e3, s)));
                                                    } catch (h) {
                                                        o.e(h);
                                                    } finally {
                                                        o.f();
                                                    }
                                                case 30:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [
                                        [4, 10],
                                        [17, 23],
                                    ]
                                );
                            })
                        )),
                        (this.sendAsync = function (e, n) {
                            a.request(e.method, e.params)
                                .then(function (t) {
                                    return n(null, { jsonrpc: "2.0", id: e.id, result: t });
                                })
                                .catch(function (e) {
                                    return n(e, null);
                                });
                        }),
                        (this.request = (function () {
                            var e = Object(Za.a)(
                                Va.a.mark(function e(n, t) {
                                    var r, i;
                                    return Va.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ("string" === typeof n) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return", a.request(n.method, n.params));
                                                case 2:
                                                    if ("eth_chainId" !== n) {
                                                        e.next = 4;
                                                        break;
                                                    }
                                                    return e.abrupt("return", "0x".concat(a.chainId.toString(16)));
                                                case 4:
                                                    return (
                                                        (i = new Promise(function (e, r) {
                                                            a.batch.push({ request: { jsonrpc: "2.0", id: a.nextId++, method: n, params: t }, resolve: e, reject: r });
                                                        })),
                                                        (a.batchTimeoutId = null !== (r = a.batchTimeoutId) && void 0 !== r ? r : setTimeout(a.clearBatch, a.batchWaitTimeMs)),
                                                        e.abrupt("return", i)
                                                    );
                                                case 7:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (n, t) {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (this.chainId = n),
                        (this.url = t);
                    var i = new URL(t);
                    (this.host = i.host), (this.path = i.pathname), (this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50);
                },
                mi = (function (e) {
                    Object(si.a)(t, e);
                    var n = Object(li.a)(t);
                    function t(e) {
                        var r,
                            a = e.urls,
                            i = e.defaultChainId;
                        return (
                            Object(ci.a)(this, t),
                            Object(pi.a)(i || 1 === Object.keys(a).length, "defaultChainId is a required argument with >1 url"),
                            ((r = n.call(this, {
                                supportedChainIds: Object.keys(a).map(function (e) {
                                    return Number(e);
                                }),
                            })).providers = void 0),
                            (r.currentChainId = void 0),
                            (r.currentChainId = i || Number(Object.keys(a)[0])),
                            (r.providers = Object.keys(a).reduce(function (e, n) {
                                return (e[Number(n)] = new fi(Number(n), a[Number(n)])), e;
                            }, {})),
                            r
                        );
                    }
                    return (
                        Object(ii.a)(t, [
                            {
                                key: "provider",
                                get: function () {
                                    return this.providers[this.currentChainId];
                                },
                            },
                            {
                                key: "activate",
                                value: (function () {
                                    var e = Object(Za.a)(
                                        Va.a.mark(function e() {
                                            return Va.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", { provider: this.providers[this.currentChainId], chainId: this.currentChainId, account: null });
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getProvider",
                                value: (function () {
                                    var e = Object(Za.a)(
                                        Va.a.mark(function e() {
                                            return Va.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.providers[this.currentChainId]);
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getChainId",
                                value: (function () {
                                    var e = Object(Za.a)(
                                        Va.a.mark(function e() {
                                            return Va.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.currentChainId);
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getAccount",
                                value: (function () {
                                    var e = Object(Za.a)(
                                        Va.a.mark(function e() {
                                            return Va.a.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.abrupt("return", null);
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "deactivate",
                                value: function () {
                                    return null;
                                },
                            },
                        ]),
                        t
                    );
                })(di.AbstractConnector),
                hi = "https://bscrpc.com",
                yi = parseInt(("56", "56"));
            var xi,
                ji = new mi({ urls: Object($a.a)({}, yi, hi) });
            var vi,
                gi,
                Oi,
                Ci,
                wi = new ni.a({ supportedChainIds: [56, 97] }),
                ki = new ai.BscConnector({ supportedChainIds: [56] }),
                Ti = new ti.b({ rpc: Object($a.a)({}, yi, hi), bridge: "https://bridge.walletconnect.org", qrcode: !0, pollingInterval: 15e3 }),
                Ei =
                    (new ri.a({
                        url: hi,
                        appName: "Uniswap",
                        appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg",
                    }),
                    (Zr = {}),
                    Object($a.a)(Zr, gr.Injected, wi),
                    Object($a.a)(Zr, gr.WalletConnect, Ti),
                    Object($a.a)(Zr, gr.BSC, ki),
                    Zr),
                Ii = t(28),
                Si = t(16),
                Ni = t(17),
                Li = t.n(Ni),
                Ri = t(24),
                Mi = t(42),
                Ai = t(200),
                Di = t.n(Ai),
                Ui = t(167),
                Bi = t.n(Ui),
                Pi = t(300),
                Fi = t.n(Pi),
                _i = t(201);
            t(208), t(101), t(207), t(301);
            !(function (e) {
                (e[(e.MAINNET = 56)] = "MAINNET"), (e[(e.BSCTESTNET = 97)] = "BSCTESTNET");
            })(gi || (gi = {})),
                (function (e) {
                    (e[(e.EXACT_INPUT = 0)] = "EXACT_INPUT"), (e[(e.EXACT_OUTPUT = 1)] = "EXACT_OUTPUT");
                })(Oi || (Oi = {})),
                (function (e) {
                    (e[(e.ROUND_DOWN = 0)] = "ROUND_DOWN"), (e[(e.ROUND_HALF_UP = 1)] = "ROUND_HALF_UP"), (e[(e.ROUND_UP = 2)] = "ROUND_UP");
                })(Ci || (Ci = {}));
            var zi,
                qi = Li.a.BigInt(1e3),
                Yi = Li.a.BigInt(0),
                Hi = Li.a.BigInt(1),
                Vi = Li.a.BigInt(2),
                Zi = Li.a.BigInt(3),
                Wi = Li.a.BigInt(5),
                Qi = Li.a.BigInt(10),
                Gi = Li.a.BigInt(100),
                Xi = Li.a.BigInt(997),
                Ki = Li.a.BigInt(1e3);
            !(function (e) {
                (e.uint8 = "uint8"), (e.uint256 = "uint256");
            })(zi || (zi = {}));
            var Ji = (((vi = {})[zi.uint8] = Li.a.BigInt("0xff")), (vi[zi.uint256] = Li.a.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")), vi);
            function $i(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function eo(e, n, t) {
                return n && $i(e.prototype, n), t && $i(e, t), e;
            }
            function no() {
                return (no =
                    Object.assign ||
                    function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function to(e, n) {
                (e.prototype = Object.create(n.prototype)), (e.prototype.constructor = e), ao(e, n);
            }
            function ro(e) {
                return (ro = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function ao(e, n) {
                return (ao =
                    Object.setPrototypeOf ||
                    function (e, n) {
                        return (e.__proto__ = n), e;
                    })(e, n);
            }
            function io() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            }
            function oo(e, n, t) {
                return (oo = io()
                    ? Reflect.construct
                    : function (e, n, t) {
                          var r = [null];
                          r.push.apply(r, n);
                          var a = new (Function.bind.apply(e, r))();
                          return t && ao(a, t.prototype), a;
                      }).apply(null, arguments);
            }
            function co(e) {
                var n = "function" === typeof Map ? new Map() : void 0;
                return (co = function (e) {
                    if (null === e || ((t = e), -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
                    var t;
                    if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof n) {
                        if (n.has(e)) return n.get(e);
                        n.set(e, r);
                    }
                    function r() {
                        return oo(e, arguments, ro(this).constructor);
                    }
                    return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), ao(r, e);
                })(e);
            }
            function so(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function lo(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function uo(e, n) {
                var t = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (t) return (t = t.call(e)).next.bind(t);
                if (
                    Array.isArray(e) ||
                    (t = (function (e, n) {
                        if (e) {
                            if ("string" === typeof e) return lo(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? lo(e, n) : void 0;
                        }
                    })(e)) ||
                    (n && e && "number" === typeof e.length)
                ) {
                    t && (e = t);
                    var r = 0;
                    return function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var po = "setPrototypeOf" in Object,
                bo = (function (e) {
                    function n() {
                        var t;
                        return ((t = e.call(this) || this).isInsufficientReservesError = !0), (t.name = t.constructor.name), po && Object.setPrototypeOf(so(t), (this instanceof n ? this.constructor : void 0).prototype), t;
                    }
                    return to(n, e), n;
                })(co(Error)),
                fo = (function (e) {
                    function n() {
                        var t;
                        return ((t = e.call(this) || this).isInsufficientInputAmountError = !0), (t.name = t.constructor.name), po && Object.setPrototypeOf(so(t), (this instanceof n ? this.constructor : void 0).prototype), t;
                    }
                    return to(n, e), n;
                })(co(Error));
            function mo(e, n) {
                Li.a.greaterThanOrEqual(e, Yi) || Object(Ri.a)(!1), Li.a.lessThanOrEqual(e, Ji[n]) || Object(Ri.a)(!1);
            }
            function ho(e) {
                try {
                    return Object(Mi.a)(e);
                } catch (n) {
                    Object(Ri.a)(!1);
                }
            }
            function yo(e) {
                return e instanceof Li.a ? e : "bigint" === typeof e ? Li.a.BigInt(e.toString()) : Li.a.BigInt(e);
            }
            function xo(e) {
                mo(e, zi.uint256);
                var n,
                    t = Yi;
                if (Li.a.greaterThan(e, Zi)) for (t = e, n = Li.a.add(Li.a.divide(e, Vi), Hi); Li.a.lessThan(n, t); ) (t = n), (n = Li.a.divide(Li.a.add(Li.a.divide(e, n), n), Vi));
                else Li.a.notEqual(e, Yi) && (t = Hi);
                return t;
            }
            function jo(e, n, t, r) {
                if ((t > 0 || Object(Ri.a)(!1), e.length <= t || Object(Ri.a)(!1), 0 === e.length)) return e.push(n), null;
                var a = e.length === t;
                if (a && r(e[e.length - 1], n) <= 0) return n;
                for (var i = 0, o = e.length; i < o; ) {
                    var c = (i + o) >>> 1;
                    r(e[c], n) <= 0 ? (i = c + 1) : (o = c);
                }
                return e.splice(i, 0, n), a ? e.pop() : null;
            }
            var vo,
                go = function (e, n, t) {
                    mo(Li.a.BigInt(e), zi.uint8), (this.decimals = e), (this.symbol = n), (this.name = t);
                },
                Oo = (go.ETHER = new go(18, "BNB", "Binance")),
                Co = (function (e) {
                    function n(n, t, r, a, i) {
                        var o;
                        return ((o = e.call(this, r, a, i) || this).chainId = n), (o.address = ho(t)), o;
                    }
                    to(n, e);
                    var t = n.prototype;
                    return (
                        (t.equals = function (e) {
                            return this === e || (this.chainId === e.chainId && this.address === e.address);
                        }),
                        (t.sortsBefore = function (e) {
                            return this.chainId !== e.chainId && Object(Ri.a)(!1), this.address === e.address && Object(Ri.a)(!1), this.address.toLowerCase() < e.address.toLowerCase();
                        }),
                        n
                    );
                })(go);
            function wo(e, n) {
                return e instanceof Co && n instanceof Co ? e.equals(n) : !(e instanceof Co) && !(n instanceof Co) && e === n;
            }
            var ko,
                To,
                Eo =
                    (((vo = {})[gi.MAINNET] = new Co(gi.MAINNET, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB")),
                    (vo[gi.BSCTESTNET] = new Co(gi.BSCTESTNET, "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", 18, "WBNB", "Wrapped BNB")),
                    vo),
                Io = Bi()(Fi.a),
                So = Bi()(Di.a),
                No = (((ko = {})[Ci.ROUND_DOWN] = Io.ROUND_DOWN), (ko[Ci.ROUND_HALF_UP] = Io.ROUND_HALF_UP), (ko[Ci.ROUND_UP] = Io.ROUND_UP), ko),
                Lo = (((To = {})[Ci.ROUND_DOWN] = 0), (To[Ci.ROUND_HALF_UP] = 1), (To[Ci.ROUND_UP] = 3), To),
                Ro = (function () {
                    function e(e, n) {
                        void 0 === n && (n = Hi), (this.numerator = yo(e)), (this.denominator = yo(n));
                    }
                    var n = e.prototype;
                    return (
                        (n.invert = function () {
                            return new e(this.denominator, this.numerator);
                        }),
                        (n.add = function (n) {
                            var t = n instanceof e ? n : new e(yo(n));
                            return Li.a.equal(this.denominator, t.denominator)
                                ? new e(Li.a.add(this.numerator, t.numerator), this.denominator)
                                : new e(Li.a.add(Li.a.multiply(this.numerator, t.denominator), Li.a.multiply(t.numerator, this.denominator)), Li.a.multiply(this.denominator, t.denominator));
                        }),
                        (n.subtract = function (n) {
                            var t = n instanceof e ? n : new e(yo(n));
                            return Li.a.equal(this.denominator, t.denominator)
                                ? new e(Li.a.subtract(this.numerator, t.numerator), this.denominator)
                                : new e(Li.a.subtract(Li.a.multiply(this.numerator, t.denominator), Li.a.multiply(t.numerator, this.denominator)), Li.a.multiply(this.denominator, t.denominator));
                        }),
                        (n.lessThan = function (n) {
                            var t = n instanceof e ? n : new e(yo(n));
                            return Li.a.lessThan(Li.a.multiply(this.numerator, t.denominator), Li.a.multiply(t.numerator, this.denominator));
                        }),
                        (n.equalTo = function (n) {
                            var t = n instanceof e ? n : new e(yo(n));
                            return Li.a.equal(Li.a.multiply(this.numerator, t.denominator), Li.a.multiply(t.numerator, this.denominator));
                        }),
                        (n.greaterThan = function (n) {
                            var t = n instanceof e ? n : new e(yo(n));
                            return Li.a.greaterThan(Li.a.multiply(this.numerator, t.denominator), Li.a.multiply(t.numerator, this.denominator));
                        }),
                        (n.multiply = function (n) {
                            var t = n instanceof e ? n : new e(yo(n));
                            return new e(Li.a.multiply(this.numerator, t.numerator), Li.a.multiply(this.denominator, t.denominator));
                        }),
                        (n.divide = function (n) {
                            var t = n instanceof e ? n : new e(yo(n));
                            return new e(Li.a.multiply(this.numerator, t.denominator), Li.a.multiply(this.denominator, t.numerator));
                        }),
                        (n.toSignificant = function (e, n, t) {
                            void 0 === n && (n = { groupSeparator: "" }), void 0 === t && (t = Ci.ROUND_HALF_UP), Number.isInteger(e) || Object(Ri.a)(!1), e > 0 || Object(Ri.a)(!1), Io.set({ precision: e + 1, rounding: No[t] });
                            var r = new Io(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(e);
                            return r.toFormat(r.decimalPlaces(), n);
                        }),
                        (n.toFixed = function (e, n, t) {
                            return (
                                void 0 === n && (n = { groupSeparator: "" }),
                                void 0 === t && (t = Ci.ROUND_HALF_UP),
                                Number.isInteger(e) || Object(Ri.a)(!1),
                                e >= 0 || Object(Ri.a)(!1),
                                (So.DP = e),
                                (So.RM = Lo[t]),
                                new So(this.numerator.toString()).div(this.denominator.toString()).toFormat(e, n)
                            );
                        }),
                        eo(e, [
                            {
                                key: "quotient",
                                get: function () {
                                    return Li.a.divide(this.numerator, this.denominator);
                                },
                            },
                            {
                                key: "remainder",
                                get: function () {
                                    return new e(Li.a.remainder(this.numerator, this.denominator), this.denominator);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Mo = Bi()(Di.a),
                Ao = (function (e) {
                    function n(n, t) {
                        var r,
                            a = yo(t);
                        return mo(a, zi.uint256), ((r = e.call(this, a, Li.a.exponentiate(Qi, Li.a.BigInt(n.decimals))) || this).currency = n), r;
                    }
                    to(n, e),
                        (n.ether = function (e) {
                            return new n(Oo, e);
                        });
                    var t = n.prototype;
                    return (
                        (t.add = function (e) {
                            return wo(this.currency, e.currency) || Object(Ri.a)(!1), new n(this.currency, Li.a.add(this.raw, e.raw));
                        }),
                        (t.subtract = function (e) {
                            return wo(this.currency, e.currency) || Object(Ri.a)(!1), new n(this.currency, Li.a.subtract(this.raw, e.raw));
                        }),
                        (t.toSignificant = function (n, t, r) {
                            return void 0 === n && (n = 6), void 0 === r && (r = Ci.ROUND_DOWN), e.prototype.toSignificant.call(this, n, t, r);
                        }),
                        (t.toFixed = function (n, t, r) {
                            return void 0 === n && (n = this.currency.decimals), void 0 === r && (r = Ci.ROUND_DOWN), n <= this.currency.decimals || Object(Ri.a)(!1), e.prototype.toFixed.call(this, n, t, r);
                        }),
                        (t.toExact = function (e) {
                            return void 0 === e && (e = { groupSeparator: "" }), (Mo.DP = this.currency.decimals), new Mo(this.numerator.toString()).div(this.denominator.toString()).toFormat(e);
                        }),
                        eo(n, [
                            {
                                key: "raw",
                                get: function () {
                                    return this.numerator;
                                },
                            },
                        ]),
                        n
                    );
                })(Ro),
                Do = (function (e) {
                    function n(n, t) {
                        var r;
                        return ((r = e.call(this, n, t) || this).token = n), r;
                    }
                    to(n, e);
                    var t = n.prototype;
                    return (
                        (t.add = function (e) {
                            return this.token.equals(e.token) || Object(Ri.a)(!1), new n(this.token, Li.a.add(this.raw, e.raw));
                        }),
                        (t.subtract = function (e) {
                            return this.token.equals(e.token) || Object(Ri.a)(!1), new n(this.token, Li.a.subtract(this.raw, e.raw));
                        }),
                        n
                    );
                })(Ao),
                Uo = (function (e) {
                    function n(n, t, r, a) {
                        var i;
                        return ((i = e.call(this, a, r) || this).baseCurrency = n), (i.quoteCurrency = t), (i.scalar = new Ro(Li.a.exponentiate(Qi, Li.a.BigInt(n.decimals)), Li.a.exponentiate(Qi, Li.a.BigInt(t.decimals)))), i;
                    }
                    to(n, e),
                        (n.fromRoute = function (e) {
                            for (var t, r = [], a = uo(e.pairs.entries()); !(t = a()).done; ) {
                                var i = t.value,
                                    o = i[0],
                                    c = i[1];
                                r.push(e.path[o].equals(c.token0) ? new n(c.reserve0.currency, c.reserve1.currency, c.reserve0.raw, c.reserve1.raw) : new n(c.reserve1.currency, c.reserve0.currency, c.reserve1.raw, c.reserve0.raw));
                            }
                            return r.slice(1).reduce(function (e, n) {
                                return e.multiply(n);
                            }, r[0]);
                        });
                    var t = n.prototype;
                    return (
                        (t.invert = function () {
                            return new n(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
                        }),
                        (t.multiply = function (t) {
                            wo(this.quoteCurrency, t.baseCurrency) || Object(Ri.a)(!1);
                            var r = e.prototype.multiply.call(this, t);
                            return new n(this.baseCurrency, t.quoteCurrency, r.denominator, r.numerator);
                        }),
                        (t.quote = function (n) {
                            return (
                                wo(n.currency, this.baseCurrency) || Object(Ri.a)(!1),
                                this.quoteCurrency instanceof Co ? new Do(this.quoteCurrency, e.prototype.multiply.call(this, n.raw).quotient) : Ao.ether(e.prototype.multiply.call(this, n.raw).quotient)
                            );
                        }),
                        (t.toSignificant = function (e, n, t) {
                            return void 0 === e && (e = 6), this.adjusted.toSignificant(e, n, t);
                        }),
                        (t.toFixed = function (e, n, t) {
                            return void 0 === e && (e = 4), this.adjusted.toFixed(e, n, t);
                        }),
                        eo(n, [
                            {
                                key: "raw",
                                get: function () {
                                    return new Ro(this.numerator, this.denominator);
                                },
                            },
                            {
                                key: "adjusted",
                                get: function () {
                                    return e.prototype.multiply.call(this, this.scalar);
                                },
                            },
                        ]),
                        n
                    );
                })(Ro),
                Bo = {},
                Po = (function () {
                    function e(n, t) {
                        var r = n.token.sortsBefore(t.token) ? [n, t] : [t, n];
                        (this.liquidityToken = new Co(r[0].token.chainId, e.getAddress(r[0].token, r[1].token), 18, "UNI-V2", "Uniswap V2")), (this.tokenAmounts = r);
                    }
                    e.getAddress = function (e, n) {
                        var t,
                            r,
                            a,
                            i,
                            o,
                            c = e.sortsBefore(n) ? [e, n] : [n, e];
                        void 0 === (null === (t = Bo) || void 0 === t || null === (r = t[c[0].address]) || void 0 === r ? void 0 : r[c[1].address]) &&
                            (Bo = no(
                                {},
                                Bo,
                                (((o = {})[c[0].address] = no(
                                    {},
                                    null === (a = Bo) || void 0 === a ? void 0 : a[c[0].address],
                                    (((i = {})[c[1].address] = Object(Mi.c)(
                                        "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
                                        Object(_i.a)(["bytes"], [Object(_i.b)(["address", "address"], [c[0].address, c[1].address])]),
                                        "0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5"
                                    )),
                                    i)
                                )),
                                o)
                            ));
                        return Bo[c[0].address][c[1].address];
                    };
                    var n = e.prototype;
                    return (
                        (n.involvesToken = function (e) {
                            return e.equals(this.token0) || e.equals(this.token1);
                        }),
                        (n.priceOf = function (e) {
                            return this.involvesToken(e) || Object(Ri.a)(!1), e.equals(this.token0) ? this.token0Price : this.token1Price;
                        }),
                        (n.reserveOf = function (e) {
                            return this.involvesToken(e) || Object(Ri.a)(!1), e.equals(this.token0) ? this.reserve0 : this.reserve1;
                        }),
                        (n.getOutputAmount = function (n) {
                            if ((this.involvesToken(n.token) || Object(Ri.a)(!1), Li.a.equal(this.reserve0.raw, Yi) || Li.a.equal(this.reserve1.raw, Yi))) throw new bo();
                            var t = this.reserveOf(n.token),
                                r = this.reserveOf(n.token.equals(this.token0) ? this.token1 : this.token0),
                                a = Li.a.multiply(n.raw, Xi),
                                i = Li.a.multiply(a, r.raw),
                                o = Li.a.add(Li.a.multiply(t.raw, Ki), a),
                                c = new Do(n.token.equals(this.token0) ? this.token1 : this.token0, Li.a.divide(i, o));
                            if (Li.a.equal(c.raw, Yi)) throw new fo();
                            return [c, new e(t.add(n), r.subtract(c))];
                        }),
                        (n.getInputAmount = function (n) {
                            if ((this.involvesToken(n.token) || Object(Ri.a)(!1), Li.a.equal(this.reserve0.raw, Yi) || Li.a.equal(this.reserve1.raw, Yi) || Li.a.greaterThanOrEqual(n.raw, this.reserveOf(n.token).raw))) throw new bo();
                            var t = this.reserveOf(n.token),
                                r = this.reserveOf(n.token.equals(this.token0) ? this.token1 : this.token0),
                                a = Li.a.multiply(Li.a.multiply(r.raw, n.raw), Ki),
                                i = Li.a.multiply(Li.a.subtract(t.raw, n.raw), Xi),
                                o = new Do(n.token.equals(this.token0) ? this.token1 : this.token0, Li.a.add(Li.a.divide(a, i), Hi));
                            return [o, new e(r.add(o), t.subtract(n))];
                        }),
                        (n.getLiquidityMinted = function (e, n, t) {
                            e.token.equals(this.liquidityToken) || Object(Ri.a)(!1);
                            var r,
                                a = n.token.sortsBefore(t.token) ? [n, t] : [t, n];
                            if (((a[0].token.equals(this.token0) && a[1].token.equals(this.token1)) || Object(Ri.a)(!1), Li.a.equal(e.raw, Yi))) r = Li.a.subtract(xo(Li.a.multiply(a[0].raw, a[1].raw)), qi);
                            else {
                                var i = Li.a.divide(Li.a.multiply(a[0].raw, e.raw), this.reserve0.raw),
                                    o = Li.a.divide(Li.a.multiply(a[1].raw, e.raw), this.reserve1.raw);
                                r = Li.a.lessThanOrEqual(i, o) ? i : o;
                            }
                            if (!Li.a.greaterThan(r, Yi)) throw new fo();
                            return new Do(this.liquidityToken, r);
                        }),
                        (n.getLiquidityValue = function (e, n, t, r, a) {
                            var i;
                            if (
                                (void 0 === r && (r = !1),
                                this.involvesToken(e) || Object(Ri.a)(!1),
                                n.token.equals(this.liquidityToken) || Object(Ri.a)(!1),
                                t.token.equals(this.liquidityToken) || Object(Ri.a)(!1),
                                Li.a.lessThanOrEqual(t.raw, n.raw) || Object(Ri.a)(!1),
                                r)
                            ) {
                                a || Object(Ri.a)(!1);
                                var o = yo(a);
                                if (Li.a.equal(o, Yi)) i = n;
                                else {
                                    var c = xo(Li.a.multiply(this.reserve0.raw, this.reserve1.raw)),
                                        s = xo(o);
                                    if (Li.a.greaterThan(c, s)) {
                                        var l = Li.a.multiply(n.raw, Li.a.subtract(c, s)),
                                            u = Li.a.add(Li.a.multiply(c, Wi), s),
                                            d = Li.a.divide(l, u);
                                        i = n.add(new Do(this.liquidityToken, d));
                                    } else i = n;
                                }
                            } else i = n;
                            return new Do(e, Li.a.divide(Li.a.multiply(t.raw, this.reserveOf(e).raw), i.raw));
                        }),
                        eo(e, [
                            {
                                key: "token0Price",
                                get: function () {
                                    return new Uo(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw);
                                },
                            },
                            {
                                key: "token1Price",
                                get: function () {
                                    return new Uo(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw);
                                },
                            },
                            {
                                key: "chainId",
                                get: function () {
                                    return this.token0.chainId;
                                },
                            },
                            {
                                key: "token0",
                                get: function () {
                                    return this.tokenAmounts[0].token;
                                },
                            },
                            {
                                key: "token1",
                                get: function () {
                                    return this.tokenAmounts[1].token;
                                },
                            },
                            {
                                key: "reserve0",
                                get: function () {
                                    return this.tokenAmounts[0];
                                },
                            },
                            {
                                key: "reserve1",
                                get: function () {
                                    return this.tokenAmounts[1];
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Fo = (function () {
                    function e(e, n, t) {
                        e.length > 0 || Object(Ri.a)(!1),
                            e.every(function (n) {
                                return n.chainId === e[0].chainId;
                            }) || Object(Ri.a)(!1),
                            (n instanceof Co && e[0].involvesToken(n)) || (n === Oo && e[0].involvesToken(Eo[e[0].chainId])) || Object(Ri.a)(!1),
                            "undefined" === typeof t || (t instanceof Co && e[e.length - 1].involvesToken(t)) || (t === Oo && e[e.length - 1].involvesToken(Eo[e[0].chainId])) || Object(Ri.a)(!1);
                        for (var r, a = [n instanceof Co ? n : Eo[e[0].chainId]], i = uo(e.entries()); !(r = i()).done; ) {
                            var o = r.value,
                                c = o[0],
                                s = o[1],
                                l = a[c];
                            l.equals(s.token0) || l.equals(s.token1) || Object(Ri.a)(!1);
                            var u = l.equals(s.token0) ? s.token1 : s.token0;
                            a.push(u);
                        }
                        (this.pairs = e), (this.path = a), (this.midPrice = Uo.fromRoute(this)), (this.input = n), (this.output = null !== t && void 0 !== t ? t : a[a.length - 1]);
                    }
                    return (
                        eo(e, [
                            {
                                key: "chainId",
                                get: function () {
                                    return this.pairs[0].chainId;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                _o = new Ro(Gi),
                zo = (function (e) {
                    function n() {
                        return e.apply(this, arguments) || this;
                    }
                    to(n, e);
                    var t = n.prototype;
                    return (
                        (t.toSignificant = function (e, n, t) {
                            return void 0 === e && (e = 5), this.multiply(_o).toSignificant(e, n, t);
                        }),
                        (t.toFixed = function (e, n, t) {
                            return void 0 === e && (e = 2), this.multiply(_o).toFixed(e, n, t);
                        }),
                        n
                    );
                })(Ro);
            function qo(e, n) {
                var t = (function (e, n) {
                    return (
                        wo(e.inputAmount.currency, n.inputAmount.currency) || Object(Ri.a)(!1),
                        wo(e.outputAmount.currency, n.outputAmount.currency) || Object(Ri.a)(!1),
                        e.outputAmount.equalTo(n.outputAmount) ? (e.inputAmount.equalTo(n.inputAmount) ? 0 : e.inputAmount.lessThan(n.inputAmount) ? -1 : 1) : e.outputAmount.lessThan(n.outputAmount) ? 1 : -1
                    );
                })(e, n);
                return 0 !== t ? t : e.priceImpact.lessThan(n.priceImpact) ? -1 : e.priceImpact.greaterThan(n.priceImpact) ? 1 : e.route.path.length - n.route.path.length;
            }
            function Yo(e, n) {
                return e instanceof Do ? e : e.currency === Oo ? new Do(Eo[n], e.raw) : void Object(Ri.a)(!1);
            }
            function Ho(e, n) {
                return e instanceof Co ? e : e === Oo ? Eo[n] : void Object(Ri.a)(!1);
            }
            var Vo = (function () {
                function e(e, n, t) {
                    var r = new Array(e.path.length),
                        a = new Array(e.pairs.length);
                    if (t === Oi.EXACT_INPUT) {
                        wo(n.currency, e.input) || Object(Ri.a)(!1), (r[0] = Yo(n, e.chainId));
                        for (var i = 0; i < e.path.length - 1; i++) {
                            var o = e.pairs[i].getOutputAmount(r[i]),
                                c = o[0],
                                s = o[1];
                            (r[i + 1] = c), (a[i] = s);
                        }
                    } else {
                        wo(n.currency, e.output) || Object(Ri.a)(!1), (r[r.length - 1] = Yo(n, e.chainId));
                        for (var l = e.path.length - 1; l > 0; l--) {
                            var u = e.pairs[l - 1].getInputAmount(r[l]),
                                d = u[0],
                                p = u[1];
                            (r[l - 1] = d), (a[l - 1] = p);
                        }
                    }
                    (this.route = e),
                        (this.tradeType = t),
                        (this.inputAmount = t === Oi.EXACT_INPUT ? n : e.input === Oo ? Ao.ether(r[0].raw) : r[0]),
                        (this.outputAmount = t === Oi.EXACT_OUTPUT ? n : e.output === Oo ? Ao.ether(r[r.length - 1].raw) : r[r.length - 1]),
                        (this.executionPrice = new Uo(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.raw, this.outputAmount.raw)),
                        (this.nextMidPrice = Uo.fromRoute(new Fo(a, e.input))),
                        (this.priceImpact = (function (e, n, t) {
                            var r = e.raw.multiply(n.raw),
                                a = r.subtract(t.raw).divide(r);
                            return new zo(a.numerator, a.denominator);
                        })(e.midPrice, this.inputAmount, this.outputAmount));
                }
                (e.exactIn = function (n, t) {
                    return new e(n, t, Oi.EXACT_INPUT);
                }),
                    (e.exactOut = function (n, t) {
                        return new e(n, t, Oi.EXACT_OUTPUT);
                    });
                var n = e.prototype;
                return (
                    (n.minimumAmountOut = function (e) {
                        if ((e.lessThan(Yi) && Object(Ri.a)(!1), this.tradeType === Oi.EXACT_OUTPUT)) return this.outputAmount;
                        var n = new Ro(Hi).add(e).invert().multiply(this.outputAmount.raw).quotient;
                        return this.outputAmount instanceof Do ? new Do(this.outputAmount.token, n) : Ao.ether(n);
                    }),
                    (n.maximumAmountIn = function (e) {
                        if ((e.lessThan(Yi) && Object(Ri.a)(!1), this.tradeType === Oi.EXACT_INPUT)) return this.inputAmount;
                        var n = new Ro(Hi).add(e).multiply(this.inputAmount.raw).quotient;
                        return this.inputAmount instanceof Do ? new Do(this.inputAmount.token, n) : Ao.ether(n);
                    }),
                    (e.bestTradeExactIn = function (n, t, r, a, i, o, c) {
                        var s = void 0 === a ? {} : a,
                            l = s.maxNumResults,
                            u = void 0 === l ? 3 : l,
                            d = s.maxHops,
                            p = void 0 === d ? 3 : d;
                        void 0 === i && (i = []), void 0 === o && (o = t), void 0 === c && (c = []), n.length > 0 || Object(Ri.a)(!1), p > 0 || Object(Ri.a)(!1), o === t || i.length > 0 || Object(Ri.a)(!1);
                        var b = t instanceof Do ? t.token.chainId : r instanceof Co ? r.chainId : void 0;
                        void 0 === b && Object(Ri.a)(!1);
                        for (var f = Yo(t, b), m = Ho(r, b), h = 0; h < n.length; h++) {
                            var y = n[h];
                            if ((y.token0.equals(f.token) || y.token1.equals(f.token)) && !y.reserve0.equalTo(Yi) && !y.reserve1.equalTo(Yi)) {
                                var x = void 0;
                                try {
                                    x = y.getOutputAmount(f)[0];
                                } catch (v) {
                                    if (v.isInsufficientInputAmountError) continue;
                                    throw v;
                                }
                                if (x.token.equals(m)) jo(c, new e(new Fo([].concat(i, [y]), o.currency, r), o, Oi.EXACT_INPUT), u, qo);
                                else if (p > 1 && n.length > 1) {
                                    var j = n.slice(0, h).concat(n.slice(h + 1, n.length));
                                    e.bestTradeExactIn(j, x, r, { maxNumResults: u, maxHops: p - 1 }, [].concat(i, [y]), o, c);
                                }
                            }
                        }
                        return c;
                    }),
                    (e.bestTradeExactOut = function (n, t, r, a, i, o, c) {
                        var s = void 0 === a ? {} : a,
                            l = s.maxNumResults,
                            u = void 0 === l ? 3 : l,
                            d = s.maxHops,
                            p = void 0 === d ? 3 : d;
                        void 0 === i && (i = []), void 0 === o && (o = r), void 0 === c && (c = []), n.length > 0 || Object(Ri.a)(!1), p > 0 || Object(Ri.a)(!1), o === r || i.length > 0 || Object(Ri.a)(!1);
                        var b = r instanceof Do ? r.token.chainId : t instanceof Co ? t.chainId : void 0;
                        void 0 === b && Object(Ri.a)(!1);
                        for (var f = Yo(r, b), m = Ho(t, b), h = 0; h < n.length; h++) {
                            var y = n[h];
                            if ((y.token0.equals(f.token) || y.token1.equals(f.token)) && !y.reserve0.equalTo(Yi) && !y.reserve1.equalTo(Yi)) {
                                var x = void 0;
                                try {
                                    x = y.getInputAmount(f)[0];
                                } catch (v) {
                                    if (v.isInsufficientReservesError) continue;
                                    throw v;
                                }
                                if (x.token.equals(m)) jo(c, new e(new Fo([y].concat(i), t, o.currency), o, Oi.EXACT_OUTPUT), u, qo);
                                else if (p > 1 && n.length > 1) {
                                    var j = n.slice(0, h).concat(n.slice(h + 1, n.length));
                                    e.bestTradeExactOut(j, t, x, { maxNumResults: u, maxHops: p - 1 }, [y].concat(i), o, c);
                                }
                            }
                        }
                        return c;
                    }),
                    e
                );
            })();
            function Zo(e) {
                return "0x" + e.raw.toString(16);
            }
            var Wo,
                Qo,
                Go = "0x0",
                Xo = (function () {
                    function e() {}
                    return (
                        (e.swapCallParameters = function (e, n) {
                            var t = e.inputAmount.currency === Oo,
                                r = e.outputAmount.currency === Oo;
                            t && r && Object(Ri.a)(!1), n.ttl > 0 || Object(Ri.a)(!1);
                            var a,
                                i,
                                o,
                                c = ho(n.recipient),
                                s = Zo(e.maximumAmountIn(n.allowedSlippage)),
                                l = Zo(e.minimumAmountOut(n.allowedSlippage)),
                                u = e.route.path.map(function (e) {
                                    return e.address;
                                }),
                                d = "0x" + (Math.floor(new Date().getTime() / 1e3) + n.ttl).toString(16),
                                p = Boolean(n.feeOnTransfer);
                            switch (e.tradeType) {
                                case Oi.EXACT_INPUT:
                                    t
                                        ? ((a = p ? "swapExactETHForTokensSupportingFeeOnTransferTokens" : "swapExactETHForTokens"), (i = [l, u, c, d]), (o = s))
                                        : r
                                        ? ((a = p ? "swapExactTokensForETHSupportingFeeOnTransferTokens" : "swapExactTokensForETH"), (i = [s, l, u, c, d]), (o = Go))
                                        : ((a = p ? "swapExactTokensForTokensSupportingFeeOnTransferTokens" : "swapExactTokensForTokens"), (i = [s, l, u, c, d]), (o = Go));
                                    break;
                                case Oi.EXACT_OUTPUT:
                                    p && Object(Ri.a)(!1),
                                        t
                                            ? ((a = "swapETHForExactTokens"), (i = [l, u, c, d]), (o = s))
                                            : r
                                            ? ((a = "swapTokensForExactETH"), (i = [l, s, u, c, d]), (o = Go))
                                            : ((a = "swapTokensForExactTokens"), (i = [l, s, u, c, d]), (o = Go));
                            }
                            return { methodName: a, args: i, value: o };
                        }),
                        e
                    );
                })(),
                Ko = (((Wo = {})[gi.MAINNET] = { "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A": 9 }), "0x10ED43C718714eb63d5aA57B78B54704E256024E"),
                Jo = new Co(gi.MAINNET, "0x4A76A1eAA365C10bD9b895aCaB5760d52Ff2f7C9", 9, "SWAP", "Dexbuilder"),
                $o = new Co(gi.MAINNET, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB"),
                ec = new Co(gi.MAINNET, "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", 18, "DAI", "Dai Stablecoin"),
                nc = new Co(gi.MAINNET, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18, "BUSD", "Binance USD"),
                tc = new Co(gi.MAINNET, "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18, "BTCB", "Binance BTC"),
                rc = new Co(gi.MAINNET, "0x55d398326f99059fF775485246999027B3197955", 18, "USDT", "Tether USD"),
                ac = new Co(gi.MAINNET, "0x23396cF899Ca06c4472205fC903bDB4de249D6fC", 18, "UST", "Wrapped UST Token"),
                ic = new Co(gi.MAINNET, "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", 18, "ETH", "Binance-Peg Ethereum Token"),
                oc = ((Qo = {}), Object($a.a)(Qo, gi.MAINNET, [Eo[gi.MAINNET]]), Object($a.a)(Qo, gi.BSCTESTNET, [Eo[gi.BSCTESTNET]]), Qo),
                cc = Object(Si.a)(Object(Si.a)({}, oc), {}, Object($a.a)({}, gi.MAINNET, [].concat(Object(Ii.a)(oc[gi.MAINNET]), [ec, nc, tc, rc, ac, ic]))),
                sc = Object($a.a)({}, gi.MAINNET, {}),
                lc = Object(Si.a)(Object(Si.a)({}, oc), {}, Object($a.a)({}, gi.MAINNET, [].concat(Object(Ii.a)(oc[gi.MAINNET]), [ec, nc, rc]))),
                uc = Object(Si.a)(Object(Si.a)({}, oc), {}, Object($a.a)({}, gi.MAINNET, [].concat(Object(Ii.a)(oc[gi.MAINNET]), [ec, nc, tc, rc]))),
                dc = Object($a.a)({}, gi.MAINNET, [
                    [Jo, $o],
                    [nc, rc],
                    [ec, rc],
                ]),
                pc = "NETWORK",
                bc = 80,
                fc = 1200,
                mc = new zo(Li.a.BigInt(1), Li.a.BigInt(1e4)),
                hc = Li.a.BigInt(1e4),
                yc = new zo(Li.a.BigInt(100), hc),
                xc = new zo(Li.a.BigInt(300), hc),
                jc = new zo(Li.a.BigInt(500), hc),
                vc = new zo(Li.a.BigInt(1e3), hc),
                gc = new zo(Li.a.BigInt(1500), hc),
                Oc = Li.a.exponentiate(Li.a.BigInt(10), Li.a.BigInt(16));
            function Cc() {
                var e = Object(Ka.d)(),
                    n = Object(Ka.d)(pc);
                return e.active ? e : n;
            }
            var wc,
                kc,
                Tc,
                Ec = t(23),
                Ic = Object(Ec.b)("app/updateBlockNumber"),
                Sc = Object(Ec.b)("app/toggleWalletModal"),
                Nc = Object(Ec.b)("app/toggleSettingsMenu"),
                Lc = Object(Ec.b)("app/addPopup"),
                Rc = Object(Ec.b)("app/removePopup");
            function Mc() {
                var e = Cc().chainId;
                return Object(Xa.d)(function (n) {
                    return n.application.blockNumber[null !== e && void 0 !== e ? e : -1];
                });
            }
            function Ac() {
                var e = Object(Xa.c)();
                return Object(r.useCallback)(
                    function (n) {
                        e(Rc({ key: n }));
                    },
                    [e]
                );
            }
            var Dc = c.default.div(wc || (wc = Object(qa.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),
                Uc = Object(c.default)(Dc)(kc || (kc = Object(qa.a)(["\n  width: 100%;\n  align-items: center;\n"]))),
                Bc = c.default.div(
                    Tc || (Tc = Object(qa.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"])),
                    function (e) {
                        var n = e.gap;
                        return ("sm" === n ? "8px" : "md" === n && "12px") || ("lg" === n && "24px") || n;
                    },
                    function (e) {
                        var n = e.justify;
                        return n && n;
                    }
                ),
                Pc = Dc,
                Fc = t(582),
                _c = t(103),
                zc = t(70),
                qc = { pending: Object(Ec.b)("lists/fetchTokenList/pending"), fulfilled: Object(Ec.b)("lists/fetchTokenList/fulfilled"), rejected: Object(Ec.b)("lists/fetchTokenList/rejected") },
                Yc = Object(Ec.b)("lists/acceptListUpdate"),
                Hc = Object(Ec.b)("lists/addList"),
                Vc = Object(Ec.b)("lists/removeList"),
                Zc = Object(Ec.b)("lists/selectList");
            Object(Ec.b)("lists/rejectVersionUpdate");
            function Wc(e) {
                return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch);
            }
            var Qc,
                Gc,
                Xc,
                Kc,
                Jc,
                $c = t(304),
                es = Object(c.default)($c.Box)(
                    Qc || (Qc = Object(qa.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])),
                    function (e) {
                        return e.align || "center";
                    },
                    function (e) {
                        return e.padding;
                    },
                    function (e) {
                        return e.border;
                    },
                    function (e) {
                        return e.borderRadius;
                    }
                ),
                ns = Object(c.default)(es)(Gc || (Gc = Object(qa.a)(["\n  justify-content: space-between;\n"]))),
                ts = c.default.div(Xc || (Xc = Object(qa.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),
                rs = Object(c.default)(es)(
                    Kc || (Kc = Object(qa.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"])),
                    function (e) {
                        var n = e.gap;
                        return n && "-".concat(n);
                    },
                    function (e) {
                        var n = e.justify;
                        return n && n;
                    },
                    function (e) {
                        return e.gap;
                    }
                ),
                as = Object(c.default)(es)(Jc || (Jc = Object(qa.a)(["\n  width: fit-content;\n  margin: ", ";\n"])), function (e) {
                    var n = e.gap;
                    return n && "-".concat(n);
                }),
                is = es,
                os = t(1);
            function cs(e) {
                var n = e.popKey,
                    t = e.listUrl,
                    i = e.oldList,
                    o = e.newList,
                    c = e.auto,
                    s = Ac(),
                    l = Object(r.useCallback)(
                        function () {
                            return s(n);
                        },
                        [n, s]
                    ),
                    u = Object(Xa.c)(),
                    d = Object(r.useCallback)(
                        function () {
                            c || (u(Yc(t)), l());
                        },
                        [c, u, t, l]
                    ),
                    p = Object(r.useMemo)(
                        function () {
                            return Object(zc.b)(i.tokens, o.tokens);
                        },
                        [o.tokens, i.tokens]
                    ),
                    b = p.added,
                    f = p.changed,
                    m = p.removed,
                    h = Object(r.useMemo)(
                        function () {
                            return Object.keys(f).reduce(function (e, n) {
                                return e + Object.keys(f[n]).length;
                            }, 0);
                        },
                        [f]
                    );
                return Object(os.jsx)(rs, {
                    children: Object(os.jsx)(Bc, {
                        style: { flex: "1" },
                        gap: "8px",
                        children: c
                            ? Object(os.jsxs)(R, { children: ['The token list "', i.name, '" has been updated to', " ", Object(os.jsx)("strong", { children: Wc(o.version) }), "."] })
                            : Object(os.jsxs)(os.Fragment, {
                                  children: [
                                      Object(os.jsxs)("div", {
                                          children: [
                                              Object(os.jsxs)(R, { fontSize: "14px", children: ['An update is available for the token list "', i.name, '" (', Wc(i.version), " to ", Wc(o.version), ")."] }),
                                              Object(os.jsxs)("ul", {
                                                  children: [
                                                      b.length > 0
                                                          ? Object(os.jsxs)("li", {
                                                                children: [
                                                                    b.map(function (e, n) {
                                                                        return Object(os.jsxs)(
                                                                            a.a.Fragment,
                                                                            { children: [Object(os.jsx)("strong", { title: e.address, children: e.symbol }), n === b.length - 1 ? null : ", "] },
                                                                            "".concat(e.chainId, "-").concat(e.address)
                                                                        );
                                                                    }),
                                                                    " ",
                                                                    "added",
                                                                ],
                                                            })
                                                          : null,
                                                      m.length > 0
                                                          ? Object(os.jsxs)("li", {
                                                                children: [
                                                                    m.map(function (e, n) {
                                                                        return Object(os.jsxs)(
                                                                            a.a.Fragment,
                                                                            { children: [Object(os.jsx)("strong", { title: e.address, children: e.symbol }), n === m.length - 1 ? null : ", "] },
                                                                            "".concat(e.chainId, "-").concat(e.address)
                                                                        );
                                                                    }),
                                                                    " ",
                                                                    "removed",
                                                                ],
                                                            })
                                                          : null,
                                                      h > 0 ? Object(os.jsxs)("li", { children: [h, " tokens updated"] }) : null,
                                                  ],
                                              }),
                                          ],
                                      }),
                                      Object(os.jsxs)(rs, {
                                          children: [
                                              Object(os.jsx)("div", { style: { flexGrow: 1, marginRight: 12 }, children: Object(os.jsx)(X, { onClick: d, children: "Accept update" }) }),
                                              Object(os.jsx)("div", { style: { flexGrow: 1 }, children: Object(os.jsx)(X, { onClick: l, children: "Dismiss" }) }),
                                          ],
                                      }),
                                  ],
                              }),
                    }),
                });
            }
            var ss = t(580),
                ls = t(581),
                us = t(142),
                ds = t(32),
                ps = t(578),
                bs = t(37),
                fs = t(305);
            function ms(e) {
                try {
                    return Object(ds.getAddress)(e);
                } catch (n) {
                    return !1;
                }
            }
            var hs = { 56: "", 97: "testnet." };
            function ys(e, n, t) {
                var r = "https://".concat(hs[e] || hs[gi.MAINNET], "bscscan.com");
                switch (t) {
                    case "transaction":
                        return "".concat(r, "/tx/").concat(n);
                    case "token":
                        return "".concat(r, "/token/").concat(n);
                    case "address":
                    default:
                        return "".concat(r, "/address/").concat(n);
                }
            }
            function xs(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    t = ms(e);
                if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return "".concat(t.substring(0, n + 2), "...").concat(t.substring(42 - n));
            }
            function js(e) {
                return e.mul(bs.a.from(1e4).add(bs.a.from(1e3))).div(bs.a.from(1e4));
            }
            function vs(e, n) {
                if (n < 0 || n > 1e4) throw Error("Unexpected slippage value: ".concat(n));
                return [Li.a.divide(Li.a.multiply(e.raw, Li.a.BigInt(1e4 - n)), Li.a.BigInt(1e4)), Li.a.divide(Li.a.multiply(e.raw, Li.a.BigInt(1e4 + n)), Li.a.BigInt(1e4))];
            }
            function gs(e, n, t, r) {
                if (!ms(e) || e === ps.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new us.a(
                    e,
                    n,
                    (function (e, n) {
                        return n
                            ? (function (e, n) {
                                  return e.getSigner(n).connectUnchecked();
                              })(e, n)
                            : e;
                    })(t, r)
                );
            }
            function Os(e, n, t) {
                return gs(Ko, fs.a, n, t);
            }
            var Cs,
                ws,
                ks,
                Ts,
                Es,
                Is = t(61),
                Ss = c.default.button(
                    Cs ||
                        (Cs = Object(qa.a)([
                            "\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ",
                            ";\n  color: ",
                            ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ",
                            ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ",
                            ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                        ])),
                    function (e) {
                        return e.disabled ? "default" : "pointer";
                    },
                    function (e) {
                        var n = e.theme;
                        return e.disabled ? n.colors.textSubtle : n.colors.primary;
                    },
                    function (e) {
                        return e.disabled ? null : "underline";
                    },
                    function (e) {
                        return e.disabled ? null : "underline";
                    }
                ),
                Ns = Object(c.default)(f.b)(
                    ws ||
                        (ws = Object(qa.a)([
                            "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
                            ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                Ls = c.default.a(
                    ks ||
                        (ks = Object(qa.a)([
                            "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
                            ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.primary;
                    }
                );
            function Rs(e) {
                var n = e.target,
                    t = void 0 === n ? "_blank" : n,
                    a = e.href,
                    i = e.rel,
                    o = void 0 === i ? "noopener noreferrer" : i,
                    c = Object(Is.a)(e, ["target", "href", "rel"]),
                    s = Object(r.useCallback)(
                        function (e) {
                            "_blank" === t || e.ctrlKey || e.metaKey || e.preventDefault();
                        },
                        [t]
                    );
                return Object(os.jsx)(Ls, Object(Si.a)({ target: t, rel: o, href: a, onClick: s }, c));
            }
            var Ms,
                As,
                Ds,
                Us,
                Bs = Object(c.keyframes)(Ts || (Ts = Object(qa.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                Ps = c.default.img(Es || (Es = Object(qa.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"])), Bs),
                Fs = Object(c.default)(rs)(Ms || (Ms = Object(qa.a)(["\n  flex-wrap: nowrap;\n"])));
            function _s(e) {
                var n = e.hash,
                    t = e.success,
                    a = e.summary,
                    i = Cc().chainId,
                    o = Object(r.useContext)(c.ThemeContext);
                return Object(os.jsxs)(Fs, {
                    children: [
                        Object(os.jsx)("div", { style: { paddingRight: 16 }, children: t ? Object(os.jsx)(ss.a, { color: o.colors.success, size: 24 }) : Object(os.jsx)(ls.a, { color: o.colors.failure, size: 24 }) }),
                        Object(os.jsxs)(Bc, {
                            gap: "8px",
                            children: [
                                Object(os.jsx)(R, { children: null !== a && void 0 !== a ? a : "Hash: ".concat(n.slice(0, 8), "...").concat(n.slice(58, 65)) }),
                                i && Object(os.jsx)(Rs, { href: ys(i, n, "transaction"), children: "View on bscscan" }),
                            ],
                        }),
                    ],
                });
            }
            var zs,
                qs,
                Ys,
                Hs = Object(c.default)(Fc.a)(As || (As = Object(qa.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]))),
                Vs = c.default.div(
                    Ds ||
                        (Ds = Object(qa.a)([
                            "\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ",
                            ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ",
                            " {\n    min-width: 290px;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                Zs = c.default.div(Us || (Us = Object(qa.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"])), function (e) {
                    return e.theme.colors.tertiary;
                }),
                Ws = Object(_c.a)(Zs);
            function Qs(e) {
                var n = e.removeAfterMs,
                    t = e.content,
                    a = e.popKey,
                    i = Ac(),
                    o = Object(r.useCallback)(
                        function () {
                            return i(a);
                        },
                        [a, i]
                    );
                Object(r.useEffect)(
                    function () {
                        if (null !== n) {
                            var e = setTimeout(function () {
                                o();
                            }, n);
                            return function () {
                                clearTimeout(e);
                            };
                        }
                    },
                    [n, o]
                );
                var s,
                    l = Object(r.useContext)(c.ThemeContext);
                if ("txn" in t) {
                    var u = t.txn,
                        d = u.hash,
                        p = u.success,
                        b = u.summary;
                    s = Object(os.jsx)(_s, { hash: d, success: p, summary: b });
                } else if ("listUpdate" in t) {
                    var f = t.listUpdate,
                        m = f.listUrl,
                        h = f.oldList,
                        y = f.newList,
                        x = f.auto;
                    s = Object(os.jsx)(cs, { popKey: a, listUrl: m, oldList: h, newList: y, auto: x });
                }
                var j = Object(_c.b)({ from: { width: "100%" }, to: { width: "0%" }, config: { duration: null !== n && void 0 !== n ? n : void 0 } });
                return Object(os.jsxs)(Vs, { children: [Object(os.jsx)(Hs, { color: l.colors.textSubtle, onClick: o }), s, null !== n ? Object(os.jsx)(Ws, { style: j }) : null] });
            }
            var Gs = c.default.div(
                    zs || (zs = Object(qa.a)(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])),
                    function (e) {
                        return e.height;
                    },
                    function (e) {
                        return e.height ? "0 auto;" : 0;
                    },
                    function (e) {
                        return e.height ? "20px" : 0;
                    },
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                Xs = c.default.div(
                    qs ||
                        (qs = Object(qa.a)([
                            "\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n",
                        ]))
                ),
                Ks = Object(c.default)(Bc)(Ys || (Ys = Object(qa.a)(["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ", " {\n    display: none;\n  }\n"])), function (
                    e
                ) {
                    return e.theme.mediaQueries.sm;
                });
            function Js() {
                var e = (function () {
                    var e = Object(Xa.d)(function (e) {
                        return e.application.popupList;
                    });
                    return Object(r.useMemo)(
                        function () {
                            return e.filter(function (e) {
                                return e.show;
                            });
                        },
                        [e]
                    );
                })();
                return Object(os.jsxs)(os.Fragment, {
                    children: [
                        Object(os.jsx)(Ks, {
                            gap: "20px",
                            children: e.map(function (e) {
                                return Object(os.jsx)(Qs, { content: e.content, popKey: e.key, removeAfterMs: e.removeAfterMs }, e.key);
                            }),
                        }),
                        Object(os.jsx)(Gs, {
                            height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0,
                            children: Object(os.jsx)(Xs, {
                                children: e
                                    .slice(0)
                                    .reverse()
                                    .map(function (e) {
                                        return Object(os.jsx)(Qs, { content: e.content, popKey: e.key, removeAfterMs: e.removeAfterMs }, e.key);
                                    }),
                            }),
                        }),
                    ],
                });
            }
            var $s,
                el,
                nl,
                tl,
                rl = t(121),
                al = Object(c.keyframes)($s || ($s = Object(qa.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                il = c.default.svg(
                    el || (el = Object(qa.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])),
                    al,
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        var n = e.stroke,
                            t = e.theme;
                        return null !== n && void 0 !== n ? n : t.colors.primary;
                    }
                );
            function ol(e) {
                var n = e.size,
                    t = void 0 === n ? "16px" : n,
                    r = e.stroke,
                    a = Object(Is.a)(e, ["size", "stroke"]);
                return Object(os.jsx)(
                    il,
                    Object(Si.a)(
                        Object(Si.a)({ viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", size: t, stroke: r }, a),
                        {},
                        {
                            children: Object(os.jsx)("path", {
                                d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        }
                    )
                );
            }
            var cl,
                sl,
                ll,
                ul = c.default.div(nl || (nl = Object(qa.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]))),
                dl = c.default.h2(tl || (tl = Object(qa.a)(["\n  color: ", ";\n"])), function (e) {
                    return e.theme.colors.primaryDark;
                });
            function pl(e) {
                var n = e.children,
                    t = Object(rl.b)().t,
                    a = Object(Ka.d)().active,
                    i = Object(Ka.d)(pc),
                    o = i.active,
                    c = i.error,
                    s = i.activate,
                    l = (function () {
                        var e = Object(Ka.d)(),
                            n = e.activate,
                            t = e.active,
                            a = Object(r.useState)(!1),
                            i = Object(Wa.a)(a, 2),
                            o = i[0],
                            c = i[1];
                        return (
                            Object(r.useEffect)(
                                function () {
                                    wi.isAuthorized().then(function (e) {
                                        var t = window.localStorage.getItem(Qr);
                                        (e && t) || (Ja.isMobile && window.ethereum && t)
                                            ? n(wi, void 0, !0).catch(function () {
                                                  c(!0);
                                              })
                                            : c(!0);
                                    });
                                },
                                [n]
                            ),
                            Object(r.useEffect)(
                                function () {
                                    t && c(!0);
                                },
                                [t]
                            ),
                            o
                        );
                    })();
                Object(r.useEffect)(
                    function () {
                        !l || o || c || a || s(ji);
                    },
                    [l, o, c, s, a]
                ),
                    (function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Object(Ka.d)(),
                            t = n.active,
                            a = n.error,
                            i = n.activate;
                        Object(r.useEffect)(
                            function () {
                                var n = window.ethereum;
                                if (n && n.on && !t && !a && !e) {
                                    var r = function () {
                                            i(wi, void 0, !0).catch(function (e) {
                                                console.error("Failed to activate after chain changed", e);
                                            });
                                        },
                                        o = function (e) {
                                            e.length > 0 &&
                                                i(wi, void 0, !0).catch(function (e) {
                                                    console.error("Failed to activate after accounts changed", e);
                                                });
                                        };
                                    return (
                                        n.on("chainChanged", r),
                                        n.on("accountsChanged", o),
                                        function () {
                                            n.removeListener && (n.removeListener("chainChanged", r), n.removeListener("accountsChanged", o));
                                        }
                                    );
                                }
                            },
                            [t, a, e, i]
                        );
                    })(!l);
                var u = Object(r.useState)(!1),
                    d = Object(Wa.a)(u, 2),
                    p = d[0],
                    b = d[1];
                return (
                    Object(r.useEffect)(function () {
                        var e = setTimeout(function () {
                            b(!0);
                        }, 600);
                        return function () {
                            clearTimeout(e);
                        };
                    }, []),
                    l ? (!a && c ? Object(os.jsx)(ul, { children: Object(os.jsx)(dl, { children: t("unknownError") }) }) : a || o ? n : p ? Object(os.jsx)(ul, { children: Object(os.jsx)(ol, {}) }) : null) : null
                );
            }
            var bl,
                fl,
                ml,
                hl,
                yl,
                xl,
                jl,
                vl,
                gl,
                Ol = c.default.div(
                    cl || (cl = Object(qa.a)(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])),
                    function (e) {
                        return e.padding;
                    },
                    function (e) {
                        return e.border;
                    },
                    function (e) {
                        return e.borderRadius;
                    }
                ),
                Cl = Ol,
                wl = Object(c.default)(Ol)(
                    sl || (sl = Object(qa.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"])),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    }
                ),
                kl = Object(c.default)(Ol)(ll || (ll = Object(qa.a)(["\n  background-color: ", ";\n"])), function (e) {
                    return e.theme.colors.tertiary;
                }),
                Tl = t(206),
                El = (t(456), t(58)),
                Il = Object(_c.a)(Tl.b),
                Sl = Object(c.default)(Il)(
                    bl ||
                        (bl = Object(qa.a)([
                            "\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n",
                        ]))
                ),
                Nl = Object(_c.a)(Tl.a),
                Ll = Object(c.default)(function (e) {
                    e.minHeight, e.maxHeight, e.mobile, e.isOpen;
                    var n = Object(Is.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
                    return Object(os.jsx)(Nl, Object(Si.a)({}, n));
                }).attrs({ "aria-label": "dialog" })(
                    fl ||
                        (fl = Object(qa.a)([
                            "\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ",
                            ";\n    background-color: ",
                            ";\n    box-shadow: 0 4px 8px 0 ",
                            ";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ",
                            ";\n\n    max-width: 420px;\n    ",
                            "\n    ",
                            "\n    display: flex;\n    border-radius: 20px;\n\n    ",
                            " {\n      width: 65vw;\n    }\n    ",
                            " {\n      width: 85vw;\n    }\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    Object(El.b)(0.95, "#44464a"),
                    function (e) {
                        return e.mobile ? "flex-end" : "center";
                    },
                    function (e) {
                        var n = e.maxHeight;
                        return n && Object(c.css)(ml || (ml = Object(qa.a)(["\n        max-height: ", "vh;\n      "])), n);
                    },
                    function (e) {
                        var n = e.minHeight;
                        return n && Object(c.css)(hl || (hl = Object(qa.a)(["\n        min-height: ", "vh;\n      "])), n);
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    },
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                );
            function Rl(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    r = e.minHeight,
                    a = void 0 !== r && r,
                    i = e.maxHeight,
                    o = void 0 === i ? 50 : i,
                    c = e.initialFocusRef,
                    s = e.children,
                    l = Object(_c.c)(n, null, { config: { duration: 200 }, from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } });
                return Object(os.jsx)(os.Fragment, {
                    children: l.map(function (e) {
                        var n = e.item,
                            r = e.key,
                            i = e.props;
                        return (
                            n &&
                            Object(os.jsx)(
                                Sl,
                                {
                                    style: i,
                                    onDismiss: t,
                                    initialFocusRef: c,
                                    children: Object(os.jsxs)(Ll, { "aria-label": "dialog content", minHeight: a, maxHeight: o, mobile: Ja.isMobile, children: [!c && Ja.isMobile ? Object(os.jsx)("div", { tabIndex: 1 }) : null, s] }),
                                },
                                r
                            )
                        );
                    }),
                });
            }
            var Ml,
                Al,
                Dl = c.default.div(yl || (yl = Object(qa.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]))),
                Ul = Object(c.default)(Bc)(xl || (xl = Object(qa.a)(["\n  padding: 24px;\n"]))),
                Bl = Object(c.default)(Uc)(jl || (jl = Object(qa.a)(["\n  padding: 40px 0;\n"]))),
                Pl = Object(c.default)(Ul)(vl || (vl = Object(qa.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"])), function (e) {
                    return e.theme.colors.invertedContrast;
                }),
                Fl = c.default.div(gl || (gl = Object(qa.a)(["\n  align-items: center;\n  display: flex;\n\n  & > ", " {\n    flex: 1;\n  }\n"])), un),
                _l = function (e) {
                    var n = e.children,
                        t = e.onDismiss;
                    return Object(os.jsxs)(Fl, { children: [Object(os.jsx)(un, { children: n }), Object(os.jsx)(ie, { onClick: t, variant: "text", children: Object(os.jsx)(ue, { color: "primary" }) })] });
                },
                zl = Object(c.default)(Ps)(
                    Ml || (Ml = Object(qa.a)(["\n  height: ", ";\n  width: ", ";\n"])),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                ),
                ql = function (e) {
                    var n = e.onDismiss,
                        t = e.pendingText;
                    return Object(os.jsx)(Dl, {
                        children: Object(os.jsxs)(Ul, {
                            children: [
                                Object(os.jsx)(_l, { onDismiss: n, children: "Waiting for confirmation" }),
                                Object(os.jsx)(Bl, { children: Object(os.jsx)(zl, { src: "/images/blue-loader.svg", alt: "loader", size: "90px" }) }),
                                Object(os.jsxs)(Bc, {
                                    gap: "12px",
                                    justify: "center",
                                    children: [
                                        Object(os.jsx)(Bc, { gap: "12px", justify: "center", children: Object(os.jsx)(R, { fontSize: "14px", children: Object(os.jsx)("strong", { children: t }) }) }),
                                        Object(os.jsx)(R, { fontSize: "14px", children: "Confirm this transaction in your wallet" }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                Yl = t(583),
                Hl = function (e) {
                    var n = e.onDismiss,
                        t = e.chainId,
                        a = e.hash,
                        i = Object(r.useContext)(c.ThemeContext);
                    return Object(os.jsx)(Dl, {
                        children: Object(os.jsxs)(Ul, {
                            children: [
                                Object(os.jsx)(_l, { onDismiss: n, children: "Transaction submitted" }),
                                Object(os.jsx)(Bl, { children: Object(os.jsx)(Yl.a, { strokeWidth: 0.5, size: 97, color: i.colors.primary }) }),
                                Object(os.jsxs)(Bc, {
                                    gap: "8px",
                                    justify: "center",
                                    children: [t && a && Object(os.jsx)(Tn, { href: ys(t, a, "transaction"), children: "View on BscScan" }), Object(os.jsx)(X, { onClick: n, mt: "20px", children: "Close" })],
                                }),
                            ],
                        }),
                    });
                },
                Vl = function (e) {
                    var n = e.isOpen,
                        t = e.onDismiss,
                        r = e.attemptingTxn,
                        a = e.hash,
                        i = e.pendingText,
                        o = e.content,
                        c = Cc().chainId;
                    return c ? Object(os.jsx)(Rl, { isOpen: n, onDismiss: t, maxHeight: 90, children: r ? Object(os.jsx)(ql, { onDismiss: t, pendingText: i }) : a ? Object(os.jsx)(Hl, { chainId: c, hash: a, onDismiss: t }) : o() }) : null;
                },
                Zl = function (e) {
                    var n = e.title,
                        t = e.bottomContent,
                        r = e.onDismiss,
                        a = e.topContent;
                    return Object(os.jsxs)(Dl, { children: [Object(os.jsxs)(Ul, { children: [Object(os.jsx)(_l, { onDismiss: r, children: n }), a()] }), Object(os.jsx)(Pl, { gap: "12px", children: t() })] });
                },
                Wl = t(584),
                Ql = function (e) {
                    var n = e.message,
                        t = e.onDismiss,
                        a = Object(r.useContext)(c.ThemeContext);
                    return Object(os.jsxs)(Dl, {
                        children: [
                            Object(os.jsxs)(Ul, {
                                children: [
                                    Object(os.jsx)(_l, { onDismiss: t, children: "Error" }),
                                    Object(os.jsxs)(Bc, {
                                        style: { marginTop: 20, padding: "2rem 0" },
                                        gap: "24px",
                                        justify: "center",
                                        children: [
                                            Object(os.jsx)(Wl.a, { color: a.colors.failure, style: { strokeWidth: 1.5 }, size: 64 }),
                                            Object(os.jsx)(R, { fontSize: "16px", color: "failure", style: { textAlign: "center", width: "85%" }, children: n }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(os.jsx)(Pl, { gap: "12px", children: Object(os.jsx)(X, { onClick: t, children: "Dismiss" }) }),
                        ],
                    });
                },
                Gl = Vl,
                Xl = { translations: [], setTranslations: function () {} },
                Kl = Object(r.createContext)(Xl),
                Jl = /%(.*?)%/,
                $l = function (e, n, t) {
                    var r = e.find(function (e) {
                        return e.data.stringId === n;
                    });
                    if (r) {
                        var a = r.data.text;
                        return a.includes("%")
                            ? (function (e, n) {
                                  var t = Jl.exec(e)[0],
                                      r = e.split(" ").indexOf(t),
                                      a = n.split(" ")[r];
                                  return e.replace(t, a);
                              })(a, t)
                            : a;
                    }
                    return t;
                },
                eu = function (e, n) {
                    var t = Object(r.useContext)(Kl).translations;
                    return "error" === t[0] ? n : t.length > 0 ? $l(t, e, n) : null;
                },
                nu = function () {
                    var e = Object(r.useContext)(Kl).translations;
                    return Object(r.useCallback)(
                        function (n, t) {
                            return "error" === e[0] ? t : e.length > 0 ? $l(e, n, t) : t;
                        },
                        [e]
                    );
                },
                tu = c.default.div(
                    Al ||
                        (Al = Object(qa.a)([
                            "\n  //background: #2a2113;\n  //padding: 4px;\n  margin-bottom: 80px;\n  //border-radius: 16px;\n  //box-shadow: rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px, rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px;\n",
                        ]))
                );
            var ru,
                au = function (e) {
                    return e.activeIndex, nu(), Object(os.jsx)(tu, {});
                },
                iu = t(132),
                ou = t(134),
                cu = t(272),
                su = new iu.b(ou),
                lu = t(177),
                uu = (function (e) {
                    Object(si.a)(t, e);
                    var n = Object(li.a)(t);
                    function t(e, r) {
                        var a;
                        return Object(ci.a)(this, t), ((a = n.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0), (a.tags = void 0), (a.tokenInfo = e), (a.tags = r), a;
                    }
                    return (
                        Object(ii.a)(t, [
                            {
                                key: "logoURI",
                                get: function () {
                                    return this.tokenInfo.logoURI;
                                },
                            },
                        ]),
                        t
                    );
                })(Co),
                du = ((ru = {}), Object($a.a)(ru, gi.MAINNET, {}), Object($a.a)(ru, gi.BSCTESTNET, {}), ru),
                pu = "undefined" !== typeof WeakMap ? new WeakMap() : null;
            function bu(e) {
                var n = Object(Xa.d)(function (e) {
                    return e.lists.byUrl;
                });
                return Object(r.useMemo)(
                    function () {
                        var t;
                        if (!e) return du;
                        var r = null === (t = n[e]) || void 0 === t ? void 0 : t.current;
                        if (!r) return du;
                        try {
                            return (function (e) {
                                var n = null === pu || void 0 === pu ? void 0 : pu.get(e);
                                if (n) return n;
                                var t = e.tokens.reduce(function (n, t) {
                                    var r,
                                        a,
                                        i,
                                        o =
                                            null !==
                                                (r =
                                                    null === (a = t.tags) ||
                                                    void 0 === a ||
                                                    null ===
                                                        (i = a.map(function (n) {
                                                            var t;
                                                            if (null === (t = e.tags) || void 0 === t ? void 0 : t[n]) return Object(Si.a)(Object(Si.a)({}, e.tags[n]), {}, { id: n });
                                                        })) ||
                                                    void 0 === i
                                                        ? void 0
                                                        : i.filter(function (e) {
                                                              return Boolean(e);
                                                          })) && void 0 !== r
                                                ? r
                                                : [],
                                        c = new uu(t, o);
                                    if (void 0 !== n[c.chainId][c.address]) throw Error("Duplicate tokens.");
                                    return Object(Si.a)(Object(Si.a)({}, n), {}, Object($a.a)({}, c.chainId, Object(Si.a)(Object(Si.a)({}, n[c.chainId]), {}, Object($a.a)({}, c.address, c))));
                                }, Object(Si.a)({}, du));
                                return null === pu || void 0 === pu || pu.set(e, t), t;
                            })(r);
                        } catch (a) {
                            return console.error("Could not show token list due to error", a), du;
                        }
                    },
                    [n, e]
                );
            }
            function fu() {
                return Object(Xa.d)(function (e) {
                    return e.lists.selectedListUrl;
                });
            }
            function mu() {
                return bu(fu());
            }
            var hu = /^0x[a-fA-F0-9]{40}$/,
                yu = /^0x[a-f0-9]*$/;
            function xu(e) {
                if (!hu.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
                if (!yu.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
                return "".concat(e.address, "-").concat(e.callData);
            }
            function ju(e) {
                var n = e.split("-");
                if (2 !== n.length) throw new Error("Invalid call key: ".concat(e));
                return { address: n[0], callData: n[1] };
            }
            var vu = Object(Ec.b)("multicall/addMulticallListeners"),
                gu = Object(Ec.b)("multicall/removeMulticallListeners"),
                Ou = Object(Ec.b)("multicall/fetchingMulticallResults"),
                Cu = Object(Ec.b)("multicall/errorFetchingMulticallResults"),
                wu = Object(Ec.b)("multicall/updateMulticallResults");
            function ku(e) {
                return -1 !== ["string", "number"].indexOf(typeof e);
            }
            function Tu(e) {
                return (
                    void 0 === e ||
                    (Array.isArray(e) &&
                        e.every(function (e) {
                            return ku(e) || (Array.isArray(e) && e.every(ku));
                        }))
                );
            }
            var Eu = { valid: !1, blockNumber: void 0, data: void 0 },
                Iu = { blocksPerFetch: 1 / 0 };
            function Su(e, n) {
                var t = Cc().chainId,
                    a = Object(Xa.d)(function (e) {
                        return e.multicall.callResults;
                    }),
                    i = Object(Xa.c)(),
                    o = Object(r.useMemo)(
                        function () {
                            var n, t, r;
                            return JSON.stringify(
                                null !==
                                    (n =
                                        null === e ||
                                        void 0 === e ||
                                        null ===
                                            (t = e.filter(function (e) {
                                                return Boolean(e);
                                            })) ||
                                        void 0 === t ||
                                        null === (r = t.map(xu)) ||
                                        void 0 === r
                                            ? void 0
                                            : r.sort()) && void 0 !== n
                                    ? n
                                    : []
                            );
                        },
                        [e]
                    );
                return (
                    Object(r.useEffect)(
                        function () {
                            var e = JSON.parse(o);
                            if (t && 0 !== e.length) {
                                var r = e.map(function (e) {
                                    return ju(e);
                                });
                                return (
                                    i(vu({ chainId: t, calls: r, options: n })),
                                    function () {
                                        i(gu({ chainId: t, calls: r, options: n }));
                                    }
                                );
                            }
                        },
                        [t, i, n, o]
                    ),
                    Object(r.useMemo)(
                        function () {
                            return e.map(function (e) {
                                var n;
                                if (!t || !e) return Eu;
                                var r = null === (n = a[t]) || void 0 === n ? void 0 : n[xu(e)];
                                return {
                                    valid: !0,
                                    data: (null === r || void 0 === r ? void 0 : r.data) && "0x" !== (null === r || void 0 === r ? void 0 : r.data) ? r.data : null,
                                    blockNumber: null === r || void 0 === r ? void 0 : r.blockNumber,
                                };
                            });
                        },
                        [a, e, t]
                    )
                );
            }
            var Nu = { valid: !1, result: void 0, loading: !1, syncing: !1, error: !1 },
                Lu = { valid: !0, result: void 0, loading: !0, syncing: !0, error: !1 };
            function Ru(e, n, t, r) {
                if (!e) return Nu;
                var a = e.valid,
                    i = e.data,
                    o = e.blockNumber;
                if (!a) return Nu;
                if (a && !o) return Lu;
                if (!n || !t || !r) return Lu;
                var c,
                    s = i && i.length > 2,
                    l = (null !== o && void 0 !== o ? o : 0) < r;
                if (s && i)
                    try {
                        c = n.decodeFunctionResult(t, i);
                    } catch (u) {
                        return console.error("Result data parsing failed", t, i), { valid: !0, loading: !1, error: !0, syncing: l, result: c };
                    }
                return { valid: !0, loading: !1, syncing: l, result: c, error: !s };
            }
            function Mu(e, n, t, a, i) {
                var o = Object(r.useMemo)(
                        function () {
                            return n.getFunction(t);
                        },
                        [n, t]
                    ),
                    c = Object(r.useMemo)(
                        function () {
                            return o && Tu(a) ? n.encodeFunctionData(o, a) : void 0;
                        },
                        [a, n, o]
                    ),
                    s = Su(
                        Object(r.useMemo)(
                            function () {
                                return o && e && e.length > 0 && c
                                    ? e.map(function (e) {
                                          return e && c ? { address: e, callData: c } : void 0;
                                      })
                                    : [];
                            },
                            [e, c, o]
                        ),
                        i
                    ),
                    l = Mc();
                return Object(r.useMemo)(
                    function () {
                        return s.map(function (e) {
                            return Ru(e, n, o, l);
                        });
                    },
                    [o, s, n, l]
                );
            }
            function Au(e, n, t, a) {
                var i = Object(r.useMemo)(
                        function () {
                            var t;
                            return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n);
                        },
                        [e, n]
                    ),
                    o = Su(
                        Object(r.useMemo)(
                            function () {
                                return e && i && Tu(t) ? [{ address: e.address, callData: e.interface.encodeFunctionData(i, t) }] : [];
                            },
                            [e, i, t]
                        ),
                        a
                    )[0],
                    c = Mc();
                return Object(r.useMemo)(
                    function () {
                        return Ru(o, null === e || void 0 === e ? void 0 : e.interface, i, c);
                    },
                    [o, e, i, c]
                );
            }
            var Du = t(162),
                Uu = t.n(Du),
                Bu = Object(Ec.b)("user/updateMatchesDarkMode"),
                Pu = Object(Ec.b)("user/updateUserDarkMode"),
                Fu = Object(Ec.b)("user/updateUserExpertMode"),
                _u = Object(Ec.b)("user/updateUserSlippageTolerance"),
                zu = Object(Ec.b)("user/updateUserDeadline"),
                qu = Object(Ec.b)("user/addSerializedToken"),
                Yu = Object(Ec.b)("user/removeSerializedToken"),
                Hu = Object(Ec.b)("user/addSerializedPair"),
                Vu = Object(Ec.b)("user/removeSerializedPair"),
                Zu = Object(Ec.b)("user/muteAudio"),
                Wu = Object(Ec.b)("user/unmuteAudio"),
                Qu = "IS_DARK";
            function Gu(e) {
                return { chainId: e.chainId, address: e.address, decimals: e.decimals, symbol: e.symbol, name: e.name };
            }
            function Xu(e) {
                return new Co(e.chainId, e.address, e.decimals, e.symbol, e.name);
            }
            function Ku() {
                return Object(Xa.d)(function (e) {
                    return e.user.userExpertMode;
                });
            }
            function Ju() {
                var e = Object(Xa.c)();
                return [
                    Object(Xa.d)(function (e) {
                        return e.user.userSlippageTolerance;
                    }),
                    Object(r.useCallback)(
                        function (n) {
                            e(_u({ userSlippageTolerance: n }));
                        },
                        [e]
                    ),
                ];
            }
            function $u() {
                var e = Object(Xa.c)();
                return [
                    Object(Xa.d)(function (e) {
                        return e.user.userDeadline;
                    }),
                    Object(r.useCallback)(
                        function (n) {
                            e(zu({ userDeadline: n }));
                        },
                        [e]
                    ),
                ];
            }
            function ed() {
                var e = Cc().chainId,
                    n = Object(Xa.d)(function (e) {
                        return e.user.tokens;
                    });
                return Object(r.useMemo)(
                    function () {
                        var t;
                        return e ? Object.values(null !== (t = n[e]) && void 0 !== t ? t : {}).map(Xu) : [];
                    },
                    [n, e]
                );
            }
            function nd(e) {
                return { token0: Gu(e.token0), token1: Gu(e.token1) };
            }
            function td(e) {
                var n = Object(Wa.a)(e, 2),
                    t = n[0],
                    r = n[1];
                return new Co(t.chainId, Po.getAddress(t, r), 18, "Cake-LP", "Pancakeswap LPs");
            }
            var rd,
                ad = t(163),
                id = t(308),
                od = t(309),
                cd = t(310),
                sd = t(273),
                ld = ((rd = {}), Object($a.a)(rd, gi.MAINNET, "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"), Object($a.a)(rd, gi.BSCTESTNET, "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"), rd);
            function ud(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = Cc(),
                    i = a.library,
                    o = a.account;
                return Object(r.useMemo)(
                    function () {
                        if (!e || !n || !i) return null;
                        try {
                            return gs(e, n, i, t && o ? o : void 0);
                        } catch (r) {
                            return console.error("Failed to get contract", r), null;
                        }
                    },
                    [e, n, i, t, o]
                );
            }
            function dd(e, n) {
                return ud(e, ou, n);
            }
            function pd(e) {
                var n = Cc().chainId;
                if (n)
                    switch (n) {
                        case gi.MAINNET:
                        case gi.BSCTESTNET:
                    }
                return ud(undefined, id, e);
            }
            function bd(e, n) {
                return ud(e, od, n);
            }
            function fd() {
                var e = Cc().chainId;
                return ud(e && ld[e], sd, !1);
            }
            function md() {
                var e = Cc().chainId,
                    n = ed(),
                    t = mu();
                return Object(r.useMemo)(
                    function () {
                        return e
                            ? n.reduce(function (e, n) {
                                  return (e[n.address] = n), e;
                              }, Object(Si.a)({}, t[e]))
                            : {};
                    },
                    [e, n, t]
                );
            }
            var hd = /^0x[a-fA-F0-9]{64}$/;
            function yd(e, n, t) {
                return e && e.length > 0 ? e : n && hd.test(n) ? Object(lu.b)(n) : t;
            }
            function xd(e) {
                var n = Cc().chainId,
                    t = md(),
                    a = ms(e),
                    i = dd(a || void 0, !1),
                    o = (function (e, n) {
                        return ud(e, cu, n);
                    })(a || void 0, !1),
                    c = a ? t[a] : void 0,
                    s = Au(c ? void 0 : i, "name", void 0, Iu),
                    l = Au(c ? void 0 : o, "name", void 0, Iu),
                    u = Au(c ? void 0 : i, "symbol", void 0, Iu),
                    d = Au(c ? void 0 : o, "symbol", void 0, Iu),
                    p = Au(c ? void 0 : i, "decimals", void 0, Iu);
                return Object(r.useMemo)(
                    function () {
                        if (c) return c;
                        if (n && a) {
                            if (p.loading || u.loading || s.loading) return null;
                            var e, t, r, i;
                            if (p.result)
                                return new Co(
                                    n,
                                    a,
                                    p.result[0],
                                    yd(null === (e = u.result) || void 0 === e ? void 0 : e[0], null === (t = d.result) || void 0 === t ? void 0 : t[0], "UNKNOWN"),
                                    yd(null === (r = s.result) || void 0 === r ? void 0 : r[0], null === (i = l.result) || void 0 === i ? void 0 : i[0], "Unknown Token")
                                );
                        }
                    },
                    [a, n, p.loading, p.result, u.loading, u.result, d.result, c, s.loading, s.result, l.result]
                );
            }
            function jd(e) {
                var n = "BNB" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    t = xd(n ? void 0 : e);
                return n ? Oo : t;
            }
            function vd(e) {
                var n = fd(),
                    t = Object(r.useMemo)(
                        function () {
                            return e
                                ? e
                                      .map(ms)
                                      .filter(function (e) {
                                          return !1 !== e;
                                      })
                                      .sort()
                                : [];
                        },
                        [e]
                    ),
                    a = (function (e, n, t, a) {
                        var i = Object(r.useMemo)(
                                function () {
                                    var t;
                                    return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n);
                                },
                                [e, n]
                            ),
                            o = Su(
                                Object(r.useMemo)(
                                    function () {
                                        return e && i && t && t.length > 0
                                            ? t.map(function (n) {
                                                  return { address: e.address, callData: e.interface.encodeFunctionData(i, n) };
                                              })
                                            : [];
                                    },
                                    [t, e, i]
                                ),
                                a
                            ),
                            c = Mc();
                        return Object(r.useMemo)(
                            function () {
                                return o.map(function (n) {
                                    return Ru(n, null === e || void 0 === e ? void 0 : e.interface, i, c);
                                });
                            },
                            [i, e, o, c]
                        );
                    })(
                        n,
                        "getEthBalance",
                        t.map(function (e) {
                            return [e];
                        })
                    );
                return Object(r.useMemo)(
                    function () {
                        return t.reduce(function (e, n, t) {
                            var r,
                                i,
                                o = null === a || void 0 === a || null === (r = a[t]) || void 0 === r || null === (i = r.result) || void 0 === i ? void 0 : i[0];
                            return o && (e[n] = Ao.ether(Li.a.BigInt(o.toString()))), e;
                        }, {});
                    },
                    [t, a]
                );
            }
            function gd(e, n) {
                var t = Object(r.useMemo)(
                        function () {
                            var e;
                            return null !==
                                (e =
                                    null === n || void 0 === n
                                        ? void 0
                                        : n.filter(function (e) {
                                              return !1 !== ms(null === e || void 0 === e ? void 0 : e.address);
                                          })) && void 0 !== e
                                ? e
                                : [];
                        },
                        [n]
                    ),
                    a = Mu(
                        Object(r.useMemo)(
                            function () {
                                return t.map(function (e) {
                                    return e.address;
                                });
                            },
                            [t]
                        ),
                        su,
                        "balanceOf",
                        [e]
                    ),
                    i = Object(r.useMemo)(
                        function () {
                            return a.some(function (e) {
                                return e.loading;
                            });
                        },
                        [a]
                    );
                return [
                    Object(r.useMemo)(
                        function () {
                            return e && t.length > 0
                                ? t.reduce(function (e, n, t) {
                                      var r,
                                          i,
                                          o = null === a || void 0 === a || null === (r = a[t]) || void 0 === r || null === (i = r.result) || void 0 === i ? void 0 : i[0],
                                          c = o ? Li.a.BigInt(o.toString()) : void 0;
                                      return c && (e[n.address] = new Do(n, c)), e;
                                  }, {})
                                : {};
                        },
                        [e, t, a]
                    ),
                    i,
                ];
            }
            function Od(e, n) {
                return gd(e, n)[0];
            }
            function Cd(e, n) {
                var t = Od(e, [n]);
                if (n) return t[n.address];
            }
            function wd(e, n) {
                var t = Object(r.useMemo)(
                        function () {
                            var e;
                            return null !==
                                (e =
                                    null === n || void 0 === n
                                        ? void 0
                                        : n.filter(function (e) {
                                              return e instanceof Co;
                                          })) && void 0 !== e
                                ? e
                                : [];
                        },
                        [n]
                    ),
                    a = Od(e, t),
                    i = vd(
                        Object(r.useMemo)(
                            function () {
                                var e;
                                return (
                                    null !==
                                        (e =
                                            null === n || void 0 === n
                                                ? void 0
                                                : n.some(function (e) {
                                                      return e === Oo;
                                                  })) &&
                                    void 0 !== e &&
                                    e
                                );
                            },
                            [n]
                        )
                            ? [e]
                            : []
                    );
                return Object(r.useMemo)(
                    function () {
                        var t;
                        return null !==
                            (t =
                                null === n || void 0 === n
                                    ? void 0
                                    : n.map(function (n) {
                                          if (e && n) return n instanceof Co ? a[n.address] : n === Oo ? i[e] : void 0;
                                      })) && void 0 !== t
                            ? t
                            : [];
                    },
                    [e, n, i, a]
                );
            }
            function kd(e, n) {
                return wd(e, [n])[0];
            }
            function Td(e, n) {
                var t = Object(r.useState)(n && n(e) ? e : void 0),
                    a = Object(Wa.a)(t, 2),
                    i = a[0],
                    o = a[1];
                return (
                    Object(r.useEffect)(
                        function () {
                            o(function (t) {
                                return !n || n(e) ? e : t;
                            });
                        },
                        [n, e]
                    ),
                    i
                );
            }
            function Ed(e) {
                return null !== e && void 0 !== e;
            }
            var Id = t(311),
                Sd = t(204),
                Nd = t.n(Sd),
                Ld = t(168),
                Rd = t(169);
            var Md = new TextDecoder();
            function Ad(e) {
                var n = (function (e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
                        for (var n = new Uint8Array(e.length / 2), t = 0; t < n.length; t++) n[t] = parseInt(e.substr(2 * t, 2), 16);
                        return n;
                    })(e),
                    t = Object(Ld.getCodec)(n);
                switch (t) {
                    case "ipfs-ns":
                        var r = Object(Ld.rmPrefix)(n),
                            a = new Nd.a(r);
                        return "ipfs://".concat(Object(Rd.toB58String)(a.multihash));
                    case "ipns-ns":
                        var i = Object(Ld.rmPrefix)(n),
                            o = new Nd.a(i),
                            c = Object(Rd.decode)(o.multihash);
                        return "identity" === c.name ? "ipns://".concat(Md.decode(c.digest).trim()) : "ipns://".concat(Object(Rd.toB58String)(o.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(t));
                }
            }
            var Dd = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;
            function Ud(e) {
                var n = e.match(Dd);
                if (n) return { ensName: "".concat(n[1].toLowerCase(), "eth"), ensPath: n[3] };
            }
            function Bd(e) {
                var n, t;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https".concat(e.substr(4)), e];
                    case "ipfs":
                        var r = null === (n = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(r, "/"), "https://ipfs.io/ipfs/".concat(r, "/")];
                    case "ipns":
                        var a = null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(a, "/"), "https://ipfs.io/ipns/".concat(a, "/")];
                    default:
                        return [];
                }
            }
            var Pd = t(98);
            function Fd(e) {
                return /^0x0*$/.test(e);
            }
            function _d(e) {
                var n = Object(r.useMemo)(
                        function () {
                            return e ? Ud(e) : void 0;
                        },
                        [e]
                    ),
                    t = (function (e) {
                        var n,
                            t,
                            a,
                            i = Object(r.useMemo)(
                                function () {
                                    if (!e) return [void 0];
                                    try {
                                        return e ? [Object(Pd.namehash)(e)] : [void 0];
                                    } catch (n) {
                                        return [void 0];
                                    }
                                },
                                [e]
                            ),
                            o = Au(pd(!1), "resolver", i),
                            c = null === (n = o.result) || void 0 === n ? void 0 : n[0],
                            s = Au(bd(c && Fd(c) ? void 0 : c, !1), "contenthash", i);
                        return { contenthash: null !== (t = null === (a = s.result) || void 0 === a ? void 0 : a[0]) && void 0 !== t ? t : null, loading: o.loading || s.loading };
                    })(null === n || void 0 === n ? void 0 : n.ensName);
                return Object(r.useMemo)(
                    function () {
                        return n ? (t.contenthash ? Bd(Ad(t.contenthash)) : []) : e ? Bd(e) : [];
                    },
                    [n, t.contenthash, e]
                );
            }
            var zd,
                qd = t(585),
                Yd = {};
            function Hd(e) {
                var n = e.srcs,
                    t = e.alt,
                    a = Object(Is.a)(e, ["srcs", "alt"]),
                    i = Object(r.useState)(0),
                    o = Object(Wa.a)(i, 2)[1],
                    c = n.find(function (e) {
                        return !Yd[e];
                    });
                return c
                    ? Object(os.jsx)(
                          "img",
                          Object(Si.a)(
                              Object(Si.a)({}, a),
                              {},
                              {
                                  alt: t,
                                  src: c,
                                  onError: function () {
                                      c && (Yd[c] = !0),
                                          o(function (e) {
                                              return e + 1;
                                          });
                                  },
                              }
                          )
                      )
                    : Object(os.jsx)(qd.a, Object(Si.a)({}, a));
            }
            var Vd = Object(c.default)(Hd)(
                zd || (zd = Object(qa.a)(["\n  width: ", ";\n  height: ", ";\n"])),
                function (e) {
                    return e.size;
                },
                function (e) {
                    return e.size;
                }
            );
            function Zd(e) {
                var n = e.logoURI,
                    t = e.style,
                    r = e.size,
                    a = void 0 === r ? "24px" : r,
                    i = e.alt,
                    o = _d(n);
                return Object(os.jsx)(Vd, { alt: i, size: a, srcs: o, style: t });
            }
            var Wd,
                Qd,
                Gd,
                Xd = t(161);
            function Kd(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = Object(r.useRef)();
                Object(r.useEffect)(
                    function () {
                        a.current = e;
                    },
                    [e]
                ),
                    Object(r.useEffect)(
                        function () {
                            function e() {
                                var e = a.current;
                                e && e();
                            }
                            if (null !== n) {
                                t && e();
                                var r = setInterval(e, n);
                                return function () {
                                    return clearInterval(r);
                                };
                            }
                        },
                        [n, t]
                    );
            }
            var Jd,
                $d = c.default.div(
                    Wd ||
                        (Wd = Object(qa.a)([
                            "\n  z-index: 9999;\n\n  visibility: ",
                            ";\n  opacity: ",
                            ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ",
                            ";\n  border: 1px solid ",
                            ";\n  box-shadow: 0 4px 8px 0 ",
                            ";\n  color: ",
                            ";\n  border-radius: 8px;\n",
                        ])),
                    function (e) {
                        return e.show ? "visible" : "hidden";
                    },
                    function (e) {
                        return e.show ? 1 : 0;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    Object(El.b)(0.9, "#2F80ED"),
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                ep = c.default.div(Qd || (Qd = Object(qa.a)(["\n  display: inline-block;\n"]))),
                np = c.default.div(
                    Gd ||
                        (Gd = Object(qa.a)([
                            "\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",
                            ";\n    transform: rotate(45deg);\n    background: ",
                            ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    }
                );
            function tp(e) {
                var n,
                    t,
                    a = e.content,
                    i = e.show,
                    o = e.children,
                    c = e.placement,
                    s = void 0 === c ? "auto" : c,
                    l = Object(r.useState)(null),
                    u = Object(Wa.a)(l, 2),
                    p = u[0],
                    b = u[1],
                    f = Object(r.useState)(null),
                    m = Object(Wa.a)(f, 2),
                    h = m[0],
                    y = m[1],
                    x = Object(r.useState)(null),
                    j = Object(Wa.a)(x, 2),
                    v = j[0],
                    g = j[1],
                    O = Object(d.a)(p, h, {
                        placement: s,
                        strategy: "fixed",
                        modifiers: [
                            { name: "offset", options: { offset: [8, 8] } },
                            { name: "arrow", options: { element: v } },
                        ],
                    }),
                    C = O.styles,
                    w = O.update,
                    k = O.attributes;
                return (
                    Kd(
                        Object(r.useCallback)(
                            function () {
                                w && w();
                            },
                            [w]
                        ),
                        i ? 100 : null
                    ),
                    Object(os.jsxs)(os.Fragment, {
                        children: [
                            Object(os.jsx)(ep, { ref: b, children: o }),
                            Object(os.jsx)(Xd.a, {
                                children: Object(os.jsxs)(
                                    $d,
                                    Object(Si.a)(
                                        Object(Si.a)({ show: i, ref: y, style: C.popper }, k.popper),
                                        {},
                                        {
                                            children: [
                                                a,
                                                Object(os.jsx)(
                                                    np,
                                                    Object(Si.a)(
                                                        { className: "arrow-".concat(null !== (n = null === (t = k.popper) || void 0 === t ? void 0 : t["data-popper-placement"]) && void 0 !== n ? n : ""), ref: g, style: C.arrow },
                                                        k.arrow
                                                    )
                                                ),
                                            ],
                                        }
                                    )
                                ),
                            }),
                        ],
                    })
                );
            }
            var rp,
                ap = c.default.div(Jd || (Jd = Object(qa.a)(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"])));
            function ip(e) {
                var n = e.text,
                    t = Object(Is.a)(e, ["text"]);
                return Object(os.jsx)(tp, Object(Si.a)({ content: Object(os.jsx)(ap, { children: n }) }, t));
            }
            function op(e) {
                var n = e.children,
                    t = Object(Is.a)(e, ["children"]),
                    a = Object(r.useState)(!1),
                    i = Object(Wa.a)(a, 2),
                    o = i[0],
                    c = i[1],
                    s = Object(r.useCallback)(
                        function () {
                            return c(!0);
                        },
                        [c]
                    ),
                    l = Object(r.useCallback)(
                        function () {
                            return c(!1);
                        },
                        [c]
                    );
                return Object(os.jsx)(ip, Object(Si.a)(Object(Si.a)({}, t), {}, { show: o, children: Object(os.jsx)("div", { onMouseEnter: s, onMouseLeave: l, children: n }) }));
            }
            var cp,
                sp = c.default.div(
                    rp ||
                        (rp = Object(qa.a)([
                            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                );
            function lp(e) {
                var n = e.text,
                    t = Object(r.useState)(!1),
                    a = Object(Wa.a)(t, 2),
                    i = a[0],
                    o = a[1],
                    c = Object(r.useCallback)(
                        function () {
                            return o(!0);
                        },
                        [o]
                    ),
                    s = Object(r.useCallback)(
                        function () {
                            return o(!1);
                        },
                        [o]
                    );
                return Object(os.jsx)("span", {
                    style: { marginLeft: 4 },
                    children: Object(os.jsx)(ip, { text: n, show: i, children: Object(os.jsx)(sp, { onClick: c, onMouseEnter: c, onMouseLeave: s, children: Object(os.jsx)(qd.a, { size: 16 }) }) }),
                });
            }
            var up,
                dp,
                pp,
                bp = Object(c.default)(Hd)(
                    cp || (cp = Object(qa.a)(["\n  width: ", ";\n  height: ", ";\n"])),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                ),
                fp = function (e) {
                    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(e, "/logo.png");
                },
                mp = c.default.img(
                    up || (up = Object(qa.a)(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"])),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                ),
                hp = Object(c.default)(Hd)(
                    dp || (dp = Object(qa.a)(["\n  width: ", ";\n  height: ", ";\n"])),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                );
            function yp(e) {
                var n,
                    t,
                    a = e.currency,
                    i = e.size,
                    o = void 0 === i ? "24px" : i,
                    c = e.style,
                    s = _d(a instanceof uu ? a.logoURI : void 0);
                console.log(s);
                var l = Object(r.useMemo)(
                    function () {
                        return a === Oo
                            ? []
                            : a instanceof Co
                            ? a instanceof uu
                                ? [].concat(Object(Ii.a)(s), ["images/coins/bnb.png".concat(null !== (n = null === a || void 0 === a ? void 0 : a.address) && void 0 !== n ? n : "token", ".png"), fp(a.address)])
                                : ["images/coins/bnb.png".concat(null !== (e = null === a || void 0 === a ? void 0 : a.address) && void 0 !== e ? e : "token", ".png"), fp(a.address)]
                            : [];
                        var e, n;
                    },
                    [a, s]
                );
                return a === Oo
                    ? Object(os.jsx)(mp, { src: "images/coins/bnb.png", size: o, style: c })
                    : (null === a || void 0 === a ? void 0 : a.symbol)
                    ? Object(os.jsx)(bp, { size: o, srcs: l, alt: "".concat(null !== (n = null === a || void 0 === a ? void 0 : a.symbol) && void 0 !== n ? n : "token", " logo"), style: c })
                    : Object(os.jsx)(hp, { size: o, srcs: l, alt: "".concat(null !== (t = null === a || void 0 === a ? void 0 : a.symbol) && void 0 !== t ? t : "token", " logo"), style: c });
            }
            var xp = c.default.div(
                pp ||
                    (pp = Object(qa.a)([
                        "\n  border: 1px solid ",
                        ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ",
                        ";\n    background-color: ",
                        ";\n  }\n\n  background-color: ",
                        ";\n  opacity: ",
                        ";\n",
                    ])),
                function (e) {
                    var n = e.theme;
                    return e.disable ? "transparent" : n.colors.tertiary;
                },
                function (e) {
                    return !e.disable && "pointer";
                },
                function (e) {
                    var n = e.theme;
                    return !e.disable && n.colors.invertedContrast;
                },
                function (e) {
                    var n = e.theme;
                    return e.disable && n.colors.tertiary;
                },
                function (e) {
                    return e.disable && "0.4";
                }
            );
            function jp(e) {
                var n = e.chainId,
                    t = e.onSelect,
                    r = e.selectedCurrency,
                    a = nu();
                return Object(os.jsxs)(Bc, {
                    gap: "md",
                    children: [
                        Object(os.jsxs)(rs, { children: [Object(os.jsx)(R, { fontSize: "14px", children: "Common bases" }), Object(os.jsx)(lp, { text: a(1204, "These tokens are commonly paired with other tokens.") })] }),
                        Object(os.jsxs)(rs, {
                            gap: "4px",
                            children: [
                                Object(os.jsxs)(xp, {
                                    onClick: function () {
                                        (r && wo(r, Oo)) || t(Oo);
                                    },
                                    disable: r === Oo,
                                    children: [Object(os.jsx)(yp, { currency: Oo, style: { marginRight: 8 } }), Object(os.jsx)(R, { children: "BNB" })],
                                }),
                                (n ? lc[n] : []).map(function (e) {
                                    var n = r instanceof Co && r.address === e.address;
                                    return Object(os.jsxs)(
                                        xp,
                                        {
                                            onClick: function () {
                                                return !n && t(e);
                                            },
                                            disable: n,
                                            children: [Object(os.jsx)(yp, { currency: e, style: { marginRight: 8 } }), Object(os.jsx)(R, { children: e.symbol })],
                                        },
                                        e.address
                                    );
                                }),
                            ],
                        }),
                    ],
                });
            }
            var vp,
                gp,
                Op,
                Cp,
                wp,
                kp,
                Tp,
                Ep,
                Ip,
                Sp = t(320),
                Np = Object(c.default)(as)(vp || (vp = Object(qa.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), function (e) {
                    return e.theme.colors.primary;
                }),
                Lp = Object(c.default)(Bc)(gp || (gp = Object(qa.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]))),
                Rp = Object(c.default)(ns)(
                    Op ||
                        (Op = Object(qa.a)([
                            "\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ",
                            ";\n  pointer-events: ",
                            ";\n  :hover {\n    background-color: ",
                            ";\n  }\n  opacity: ",
                            ";\n",
                        ])),
                    function (e) {
                        return !e.disabled && "pointer";
                    },
                    function (e) {
                        return e.disabled && "none";
                    },
                    function (e) {
                        var n = e.theme;
                        return !e.disabled && n.colors.invertedContrast;
                    },
                    function (e) {
                        var n = e.disabled,
                            t = e.selected;
                        return n || t ? 0.5 : 1;
                    }
                ),
                Mp = c.default.input(
                    Cp ||
                        (Cp = Object(qa.a)([
                            "\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ",
                            ";\n  border-style: solid;\n  border: 1px solid ",
                            ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ",
                            ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ",
                            ";\n    outline: none;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.text;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    },
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                Ap = c.default.div(wp || (wp = Object(qa.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), function (e) {
                    return e.theme.colors.invertedContrast;
                }),
                Dp = c.default.div(kp || (kp = Object(qa.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), function (e) {
                    return e.theme.colors.tertiary;
                });
            function Up(e) {
                return e instanceof Co ? e.address : e === Oo ? "ETHER" : "";
            }
            var Bp = Object(c.default)(R)(Tp || (Tp = Object(qa.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]))),
                Pp = c.default.div(
                    Ep ||
                        (Ep = Object(qa.a)([
                            "\n  background-color: ",
                            ";\n  color: ",
                            ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n",
                        ])),
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                );
            function Fp(e) {
                var n = e.balance;
                return Object(os.jsx)(Bp, { title: n.toExact(), children: n.toSignificant(4) });
            }
            var _p = c.default.div(Ip || (Ip = Object(qa.a)(["\n  display: flex;\n  justify-content: flex-end;\n"])));
            function zp(e) {
                var n = e.currency;
                if (!(n instanceof uu)) return Object(os.jsx)("span", {});
                var t = n.tags;
                if (!t || 0 === t.length) return Object(os.jsx)("span", {});
                var r = t[0];
                return Object(os.jsxs)(_p, {
                    children: [
                        Object(os.jsx)(op, { text: r.description, children: Object(os.jsx)(Pp, { children: r.name }, r.id) }),
                        t.length > 1
                            ? Object(os.jsx)(op, {
                                  text: t
                                      .slice(1)
                                      .map(function (e) {
                                          var n = e.name,
                                              t = e.description;
                                          return "".concat(n, ": ").concat(t);
                                      })
                                      .join("; \n"),
                                  children: Object(os.jsx)(Pp, { children: "..." }),
                              })
                            : null,
                    ],
                });
            }
            function qp(e) {
                var n = e.currency,
                    t = e.onSelect,
                    a = e.isSelected,
                    i = e.otherSelected,
                    o = e.style,
                    c = Cc(),
                    s = c.account,
                    l = c.chainId,
                    u = Up(n),
                    d = (function (e, n) {
                        var t;
                        return n === Oo || Boolean(n instanceof Co && (null === (t = e[n.chainId]) || void 0 === t ? void 0 : t[n.address]));
                    })(mu(), n),
                    p = (function (e) {
                        return !!ed().find(function (n) {
                            return wo(e, n);
                        });
                    })(n),
                    b = kd(null !== s && void 0 !== s ? s : void 0, n),
                    f = (function () {
                        var e = Object(Xa.c)();
                        return Object(r.useCallback)(
                            function (n, t) {
                                e(Yu({ chainId: n, address: t }));
                            },
                            [e]
                        );
                    })(),
                    m = (function () {
                        var e = Object(Xa.c)();
                        return Object(r.useCallback)(
                            function (n) {
                                e(qu({ serializedToken: Gu(n) }));
                            },
                            [e]
                        );
                    })();
                return Object(os.jsxs)(Rp, {
                    style: o,
                    className: "token-item-".concat(u),
                    onClick: function () {
                        return a ? null : t();
                    },
                    disabled: a,
                    selected: i,
                    children: [
                        Object(os.jsx)(yp, { currency: n, size: "24px" }),
                        Object(os.jsxs)(Pc, {
                            children: [
                                Object(os.jsx)(R, { title: n.name, children: n.symbol }),
                                Object(os.jsxs)(Np, {
                                    children: [
                                        d || !p || n instanceof uu
                                            ? null
                                            : Object(os.jsxs)(R, {
                                                  children: [
                                                      "Added by user",
                                                      Object(os.jsx)(Ss, {
                                                          onClick: function (e) {
                                                              e.stopPropagation(), l && n instanceof Co && f(l, n.address);
                                                          },
                                                          children: "(Remove)",
                                                      }),
                                                  ],
                                              }),
                                        d || p || n instanceof uu
                                            ? null
                                            : Object(os.jsxs)(R, {
                                                  children: [
                                                      "Found by address",
                                                      Object(os.jsx)(Ss, {
                                                          onClick: function (e) {
                                                              e.stopPropagation(), n instanceof Co && m(n);
                                                          },
                                                          children: "(Add)",
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        Object(os.jsx)(zp, { currency: n }),
                        Object(os.jsx)(as, { style: { justifySelf: "flex-end" }, children: b ? Object(os.jsx)(Fp, { balance: b }) : s ? Object(os.jsx)(ol, {}) : null }),
                    ],
                });
            }
            function Yp(e) {
                var n = e.height,
                    t = e.currencies,
                    a = e.selectedCurrency,
                    i = e.onCurrencySelect,
                    o = e.otherCurrency,
                    c = e.fixedListRef,
                    s = e.showETH,
                    l = Object(r.useMemo)(
                        function () {
                            return s ? [go.ETHER].concat(Object(Ii.a)(t)) : Object(Ii.a)(t);
                        },
                        [t, s]
                    ),
                    u = Object(r.useCallback)(
                        function (e) {
                            var n = e.data,
                                t = e.index,
                                r = e.style,
                                c = n[t],
                                s = Boolean(a && wo(a, c)),
                                l = Boolean(o && wo(o, c));
                            return Object(os.jsx)(qp, {
                                style: r,
                                currency: c,
                                isSelected: s,
                                onSelect: function () {
                                    return i(c);
                                },
                                otherSelected: l,
                            });
                        },
                        [i, o, a]
                    ),
                    d = Object(r.useCallback)(function (e, n) {
                        return Up(n[e]);
                    }, []);
                return Object(os.jsx)(Sp.a, { height: n, ref: c, width: "100%", itemData: l, itemCount: l.length, itemSize: 56, itemKey: d, children: u });
            }
            function Hp(e, n) {
                if (0 === n.length) return e;
                var t = ms(n);
                if (t)
                    return e.filter(function (e) {
                        return e.address === t;
                    });
                var r = n
                    .toLowerCase()
                    .split(/\s+/)
                    .filter(function (e) {
                        return e.length > 0;
                    });
                if (0 === r.length) return e;
                var a = function (e) {
                    var n = e
                        .toLowerCase()
                        .split(/\s+/)
                        .filter(function (e) {
                            return e.length > 0;
                        });
                    return r.every(function (e) {
                        return (
                            0 === e.length ||
                            n.some(function (n) {
                                return n.startsWith(e) || n.endsWith(e);
                            })
                        );
                    });
                };
                return e.filter(function (e) {
                    var n = e.symbol,
                        t = e.name;
                    return (n && a(n)) || (t && a(t));
                });
            }
            var Vp,
                Zp = Object(c.default)(as)(
                    Vp || (Vp = Object(qa.a)(["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.text;
                    }
                );
            function Wp(e) {
                var n = e.toggleSortOrder,
                    t = e.ascending;
                return Object(os.jsx)(Zp, { onClick: n, children: Object(os.jsx)(R, { fontSize: "14px", children: t ? "\u2191" : "\u2193" }) });
            }
            function Qp(e) {
                var n = (function () {
                        var e = Cc().account,
                            n = md(),
                            t = Od(
                                null !== e && void 0 !== e ? e : void 0,
                                Object(r.useMemo)(
                                    function () {
                                        return Object.values(null !== n && void 0 !== n ? n : {});
                                    },
                                    [n]
                                )
                            );
                        return null !== t && void 0 !== t ? t : {};
                    })(),
                    t = Object(r.useMemo)(
                        function () {
                            return (function (e) {
                                return function (n, t) {
                                    var r,
                                        a,
                                        i = ((r = e[n.address]), (a = e[t.address]), r && a ? (r.greaterThan(a) ? -1 : r.equalTo(a) ? 0 : 1) : r && r.greaterThan("0") ? -1 : a && a.greaterThan("0") ? 1 : 0);
                                    return 0 !== i ? i : n.symbol && t.symbol ? (n.symbol.toLowerCase() < t.symbol.toLowerCase() ? -1 : 1) : n.symbol || t.symbol ? -1 : 0;
                                };
                            })(null !== n && void 0 !== n ? n : {});
                        },
                        [n]
                    );
                return Object(r.useMemo)(
                    function () {
                        return e
                            ? function (e, n) {
                                  return -1 * t(e, n);
                              }
                            : t;
                    },
                    [e, t]
                );
            }
            function Gp(e) {
                var n = e.selectedCurrency,
                    t = e.onCurrencySelect,
                    a = e.otherSelectedCurrency,
                    i = e.showCommonBases,
                    o = e.onDismiss,
                    s = e.isOpen,
                    l = (e.onChangeList, Object(rl.b)().t),
                    u = Cc().chainId,
                    d = (Object(r.useContext)(c.ThemeContext), Object(r.useRef)()),
                    p = Object(r.useState)(""),
                    b = Object(Wa.a)(p, 2),
                    f = b[0],
                    m = b[1],
                    h = Object(r.useState)(!1),
                    y = Object(Wa.a)(h, 2),
                    x = y[0],
                    j = y[1],
                    v = md(),
                    g = ms(f),
                    O = xd(f),
                    C = Object(r.useMemo)(
                        function () {
                            var e = f.toLowerCase().trim();
                            return "" === e || "b" === e || "bn" === e || "bnb" === e;
                        },
                        [f]
                    ),
                    w = Qp(x),
                    k = Object(Xa.d)(function (e) {
                        return e.user.audioPlay;
                    }),
                    T = Object(r.useMemo)(
                        function () {
                            return g ? (O ? [O] : []) : Hp(Object.values(v), f);
                        },
                        [g, O, v, f]
                    ),
                    E = Object(r.useMemo)(
                        function () {
                            if (O) return [O];
                            var e = T.sort(w),
                                n = f
                                    .toLowerCase()
                                    .split(/\s+/)
                                    .filter(function (e) {
                                        return e.length > 0;
                                    });
                            return n.length > 1
                                ? e
                                : [].concat(
                                      Object(Ii.a)(O ? [O] : []),
                                      Object(Ii.a)(
                                          e.filter(function (e) {
                                              var t;
                                              return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) === n[0];
                                          })
                                      ),
                                      Object(Ii.a)(
                                          e.filter(function (e) {
                                              var t;
                                              return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== n[0];
                                          })
                                      )
                                  );
                        },
                        [T, f, O, w]
                    ),
                    I = Object(r.useCallback)(
                        function (e) {
                            if ((t(e), o(), k)) {
                                var n = document.getElementById("bgMusic");
                                n && n.play();
                            }
                        },
                        [o, t, k]
                    );
                Object(r.useEffect)(
                    function () {
                        s && m("");
                    },
                    [s]
                );
                var S = Object(r.useRef)(),
                    N = Object(r.useCallback)(function (e) {
                        var n,
                            t = e.target.value,
                            r = ms(t);
                        m(r || t), null === (n = d.current) || void 0 === n || n.scrollTo(0);
                    }, []),
                    L = Object(r.useCallback)(
                        function (e) {
                            if ("Enter" === e.key)
                                if ("bnb" === f.toLowerCase().trim()) I(Oo);
                                else if (E.length > 0) {
                                    var n;
                                    ((null === (n = E[0].symbol) || void 0 === n ? void 0 : n.toLowerCase()) !== f.trim().toLowerCase() && 1 !== E.length) || I(E[0]);
                                }
                        },
                        [E, I, f]
                    ),
                    M =
                        ((function () {
                            var e,
                                n,
                                t = fu(),
                                r = Object(Xa.d)(function (e) {
                                    return e.lists.byUrl;
                                }),
                                a = t ? r[t] : void 0;
                            (e = null === a || void 0 === a ? void 0 : a.current), (n = null === a || void 0 === a ? void 0 : a.pendingUpdate), null === a || void 0 === a || a.loadingRequestId;
                        })(),
                        nu());
                return Object(os.jsxs)(Pc, {
                    style: { width: "100%", flex: "1 1" },
                    children: [
                        Object(os.jsxs)(Lp, {
                            gap: "14px",
                            children: [
                                Object(os.jsxs)(ns, {
                                    children: [
                                        Object(os.jsxs)(R, { children: [M(82, "Select a token"), Object(os.jsx)(lp, { text: M(128, "Find a token by searching for its name or symbol or by pasting its address below.") })] }),
                                        Object(os.jsx)(ue, { onClick: o }),
                                    ],
                                }),
                                Object(os.jsx)(Mp, { type: "text", id: "token-search-input", placeholder: l("tokenSearchPlaceholder"), value: f, ref: S, onChange: N, onKeyDown: L }),
                                i && Object(os.jsx)(jp, { chainId: u, onSelect: I, selectedCurrency: n }),
                                Object(os.jsxs)(ns, {
                                    children: [
                                        Object(os.jsx)(R, { fontSize: "14px", children: M(126, "Token name") }),
                                        Object(os.jsx)(Wp, {
                                            ascending: x,
                                            toggleSortOrder: function () {
                                                return j(function (e) {
                                                    return !e;
                                                });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(os.jsx)(Ap, {}),
                        Object(os.jsx)("div", {
                            style: { flex: "1" },
                            children: Object(os.jsx)(Id.a, {
                                disableWidth: !0,
                                children: function (e) {
                                    var t = e.height;
                                    return Object(os.jsx)(Yp, { height: t, showETH: C, currencies: E, onCurrencySelect: I, otherCurrency: a, selectedCurrency: n, fixedListRef: d });
                                },
                            }),
                        }),
                        null,
                    ],
                });
            }
            var Xp = t(586),
                Kp = t(313),
                Jp = t(314),
                $p = t.n(Jp),
                eb = "pancakeswap",
                nb = [eb],
                tb = t(165),
                rb = new $p.a({ allErrors: !0 }).compile(Kp);
            function ab(e, n) {
                return ib.apply(this, arguments);
            }
            function ib() {
                return (ib = Object(Za.a)(
                    Va.a.mark(function e(n, t) {
                        var r, a, i, o, c, s, l, u, d, p, b, f, m;
                        return Va.a.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (n !== eb) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt("return", tb);
                                        case 2:
                                            if (!(r = Ud(n))) {
                                                e.next = 25;
                                                break;
                                            }
                                            return (e.prev = 4), (e.next = 7), t(r.ensName);
                                        case 7:
                                            (o = e.sent), (e.next = 14);
                                            break;
                                        case 10:
                                            throw ((e.prev = 10), (e.t0 = e.catch(4)), console.error("Failed to resolve ENS name: ".concat(r.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(r.ensName)));
                                        case 14:
                                            (e.prev = 14), (c = Ad(o)), (e.next = 22);
                                            break;
                                        case 18:
                                            throw ((e.prev = 18), (e.t1 = e.catch(14)), console.error("Failed to translate contenthash to URI", o), new Error("Failed to translate contenthash to URI: ".concat(o)));
                                        case 22:
                                            (a = Bd("".concat(c).concat(null !== (i = r.ensPath) && void 0 !== i ? i : ""))), (e.next = 26);
                                            break;
                                        case 25:
                                            a = Bd(n);
                                        case 26:
                                            s = 0;
                                        case 27:
                                            if (!(s < a.length)) {
                                                e.next = 57;
                                                break;
                                            }
                                            return (l = a[s]), (u = s === a.length - 1), (d = void 0), (e.prev = 31), (e.next = 34), fetch(l);
                                        case 34:
                                            (d = e.sent), (e.next = 43);
                                            break;
                                        case 37:
                                            if (((e.prev = 37), (e.t2 = e.catch(31)), console.error("Failed to fetch list", n, e.t2), !u)) {
                                                e.next = 42;
                                                break;
                                            }
                                            throw new Error("Failed to download list ".concat(n));
                                        case 42:
                                            return e.abrupt("continue", 54);
                                        case 43:
                                            if (d.ok) {
                                                e.next = 47;
                                                break;
                                            }
                                            if (!u) {
                                                e.next = 46;
                                                break;
                                            }
                                            throw new Error("Failed to download list ".concat(n));
                                        case 46:
                                            return e.abrupt("continue", 54);
                                        case 47:
                                            return (e.next = 49), d.json();
                                        case 49:
                                            if (((p = e.sent), rb(p))) {
                                                e.next = 53;
                                                break;
                                            }
                                            throw (
                                                ((m =
                                                    null !==
                                                        (b =
                                                            null === (f = rb.errors) || void 0 === f
                                                                ? void 0
                                                                : f.reduce(function (e, n) {
                                                                      var t,
                                                                          r = "".concat(n.dataPath, " ").concat(null !== (t = n.message) && void 0 !== t ? t : "");
                                                                      return e.length > 0 ? "".concat(e, "; ").concat(r) : "".concat(r);
                                                                  }, "")) && void 0 !== b
                                                        ? b
                                                        : "unknown error"),
                                                new Error("Token list failed validation: ".concat(m)))
                                            );
                                        case 53:
                                            return e.abrupt("return", p);
                                        case 54:
                                            s++, (e.next = 27);
                                            break;
                                        case 57:
                                            throw new Error("Unrecognized list URL protocol.");
                                        case 58:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [
                                [4, 10],
                                [14, 18],
                                [31, 37],
                            ]
                        );
                    })
                )).apply(this, arguments);
            }
            var ob = [{ constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "resolver", outputs: [{ name: "resolverAddress", type: "address" }], payable: !1, stateMutability: "view", type: "function" }],
                cb = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                sb = [
                    {
                        constant: !0,
                        inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
                        name: "contenthash",
                        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                ];
            function lb(e, n) {
                return new us.a(e, sb, n);
            }
            function ub(e, n) {
                return db.apply(this, arguments);
            }
            function db() {
                return (db = Object(Za.a)(
                    Va.a.mark(function e(n, t) {
                        var r, a, i;
                        return Va.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (r = new us.a(cb, ob, t)), (a = Object(Pd.namehash)(n)), (e.next = 4), r.resolver(a);
                                    case 4:
                                        return (i = e.sent), e.abrupt("return", lb(i, t).contenthash(a));
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function pb() {
                var e = Cc(),
                    n = e.chainId,
                    t = e.library,
                    a = Object(Xa.c)(),
                    i = Object(r.useCallback)(
                        function (e) {
                            if (!t || n !== gi.MAINNET) {
                                if (yi === gi.MAINNET) {
                                    var r = (function () {
                                        var e;
                                        return (xi = null !== (e = xi) && void 0 !== e ? e : new ei.a(ji.provider));
                                    })();
                                    if (r) return ub(e, r);
                                }
                                throw new Error("Could not construct mainnet ENS resolver");
                            }
                            return ub(e, t);
                        },
                        [n, t]
                    );
                return Object(r.useCallback)(
                    (function () {
                        var e = Object(Za.a)(
                            Va.a.mark(function e(n) {
                                var t;
                                return Va.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (t = Object(Ec.f)()),
                                                    a(qc.pending({ requestId: t, url: n })),
                                                    e.abrupt(
                                                        "return",
                                                        ab(n, i)
                                                            .then(function (e) {
                                                                return a(qc.fulfilled({ url: n, tokenList: e, requestId: t })), e;
                                                            })
                                                            .catch(function (e) {
                                                                throw (console.error("Failed to get list at url ".concat(n), e), a(qc.rejected({ url: n, requestId: t, errorMessage: e.message })), e);
                                                            })
                                                    )
                                                );
                                            case 3:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (n) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    [a, i]
                );
            }
            function bb(e, n) {
                var t = Object(r.useRef)(n);
                Object(r.useEffect)(
                    function () {
                        t.current = n;
                    },
                    [n]
                ),
                    Object(r.useEffect)(
                        function () {
                            var n = function (n) {
                                var r, a;
                                (null !== (r = null === (a = e.current) || void 0 === a ? void 0 : a.contains(n.target)) && void 0 !== r && r) || (t.current && t.current());
                            };
                            return (
                                document.addEventListener("mousedown", n),
                                function () {
                                    document.removeEventListener("mousedown", n);
                                }
                            );
                        },
                        [e]
                    );
            }
            var fb, mb, hb, yb, xb;
            var jb = Object(c.default)(Ss)(fb || (fb = Object(qa.a)(["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"])), function (e) {
                    return e.disabled ? "0.4" : "1";
                }),
                vb = c.default.div(
                    mb ||
                        (mb = Object(qa.a)([
                            "\n  z-index: 100;\n  visibility: ",
                            ";\n  opacity: ",
                            ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ",
                            ";\n  border: 1px solid ",
                            ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ",
                            ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n",
                        ])),
                    function (e) {
                        return e.show ? "visible" : "hidden";
                    },
                    function (e) {
                        return e.show ? 1 : 0;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                gb = c.default.div(hb || (hb = Object(qa.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"]))),
                Ob = c.default.div(yb || (yb = Object(qa.a)(["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
            function Cb(e) {
                var n = e.listUrl,
                    t = Object(r.useMemo)(
                        function () {
                            var e;
                            return null === (e = Ud(n)) || void 0 === e ? void 0 : e.ensName;
                        },
                        [n]
                    ),
                    a = Object(r.useMemo)(
                        function () {
                            if (!t) {
                                var e = n.toLowerCase();
                                if (e.startsWith("ipfs://") || e.startsWith("ipns://")) return n;
                                try {
                                    return new URL(n).host;
                                } catch (r) {
                                    return;
                                }
                            }
                        },
                        [n, t]
                    );
                return Object(os.jsx)(os.Fragment, { children: null !== t && void 0 !== t ? t : a });
            }
            function wb(e) {
                return "list-row-".concat(e.replace(/\./g, "-"));
            }
            var kb = Object(r.memo)(function (e) {
                    var n = e.listUrl,
                        t = e.onBack,
                        a = Object(Xa.d)(function (e) {
                            return e.lists.byUrl;
                        }),
                        i = fu(),
                        o = Object(Xa.c)(),
                        c = a[n],
                        s = c.current,
                        l = c.pendingUpdate,
                        u = n === i,
                        p = (function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                n = Object(r.useState)(e),
                                t = Object(Wa.a)(n, 2),
                                a = t[0],
                                i = t[1],
                                o = Object(r.useCallback)(function () {
                                    return i(function (e) {
                                        return !e;
                                    });
                                }, []);
                            return [a, o];
                        })(!1),
                        b = Object(Wa.a)(p, 2),
                        f = b[0],
                        m = b[1],
                        h = Object(r.useRef)(),
                        y = Object(r.useState)(),
                        x = Object(Wa.a)(y, 2),
                        j = x[0],
                        v = x[1],
                        g = Object(r.useState)(),
                        O = Object(Wa.a)(g, 2),
                        C = O[0],
                        w = O[1],
                        k = Object(d.a)(j, C, { placement: "auto", strategy: "fixed", modifiers: [{ name: "offset", options: { offset: [8, 8] } }] }),
                        T = k.styles,
                        E = k.attributes;
                    bb(h, f ? m : void 0);
                    var I = Object(r.useCallback)(
                            function () {
                                u || (o(Zc(n)), t());
                            },
                            [o, u, n, t]
                        ),
                        S = Object(r.useCallback)(
                            function () {
                                l && o(Yc(n));
                            },
                            [o, n, l]
                        ),
                        N = Object(r.useCallback)(
                            function () {
                                "REMOVE" === window.prompt("Please confirm you would like to remove this list by typing REMOVE") && o(Vc(n));
                            },
                            [o, n]
                        ),
                        L = nu();
                    return s
                        ? Object(os.jsxs)(
                              is,
                              {
                                  align: "center",
                                  padding: "16px",
                                  id: wb(n),
                                  children: [
                                      s.logoURI
                                          ? Object(os.jsx)(Zd, { style: { marginRight: "1rem" }, logoURI: s.logoURI, alt: "".concat(s.name, " list logo") })
                                          : Object(os.jsx)("div", { style: { width: "24px", height: "24px", marginRight: "1rem" } }),
                                      Object(os.jsxs)(Pc, {
                                          style: { flex: "1" },
                                          children: [
                                              Object(os.jsx)(is, { children: Object(os.jsx)(R, { bold: u, fontSize: "16px", style: { overflow: "hidden", textOverflow: "ellipsis" }, children: s.name }) }),
                                              Object(os.jsx)(is, { style: { marginTop: "4px" }, children: Object(os.jsx)(Ob, { title: n, children: Object(os.jsx)(Cb, { listUrl: n }) }) }),
                                          ],
                                      }),
                                      Object(os.jsxs)(gb, {
                                          ref: h,
                                          children: [
                                              Object(os.jsx)("div", {
                                                  style: { display: "inline-block" },
                                                  ref: v,
                                                  children: Object(os.jsx)(X, { style: { width: "32px", marginRight: "8px" }, onClick: m, variant: "secondary", children: Object(os.jsx)(le, {}) }),
                                              }),
                                              f &&
                                                  Object(os.jsxs)(
                                                      vb,
                                                      Object(Si.a)(
                                                          Object(Si.a)({ show: !0, ref: w, style: T.popper }, E.popper),
                                                          {},
                                                          {
                                                              children: [
                                                                  Object(os.jsx)("div", { children: s && Wc(s.version) }),
                                                                  Object(os.jsx)(Dp, {}),
                                                                  Object(os.jsx)(Rs, { href: "https://tokenlists.org/token-list?url=".concat(n), children: L(1206, "View list") }),
                                                                  Object(os.jsx)(jb, { onClick: N, disabled: 1 === Object.keys(a).length, children: "Remove list" }),
                                                                  l && Object(os.jsx)(jb, { onClick: S, children: "Update list" }),
                                                              ],
                                                          }
                                                      )
                                                  ),
                                          ],
                                      }),
                                      u
                                          ? Object(os.jsx)(X, { disabled: !0, style: { width: "5rem", minWidth: "5rem" }, children: "Selected" })
                                          : Object(os.jsx)(os.Fragment, { children: Object(os.jsx)(X, { className: "select-button", style: { width: "5rem", minWidth: "4.5rem" }, onClick: I, children: "Select" }) }),
                                  ],
                              },
                              n
                          )
                        : null;
                }),
                Tb = c.default.div(xb || (xb = Object(qa.a)(["\n  flex: 1;\n  overflow: auto;\n"])));
            function Eb(e) {
                var n,
                    t = e.onDismiss,
                    a = e.onBack,
                    i = Object(r.useState)(""),
                    o = Object(Wa.a)(i, 2),
                    c = o[0],
                    s = o[1],
                    l = Object(Xa.c)(),
                    u = Object(Xa.d)(function (e) {
                        return e.lists.byUrl;
                    }),
                    d = Boolean(null === (n = u[c]) || void 0 === n ? void 0 : n.loadingRequestId),
                    p = Object(r.useState)(null),
                    b = Object(Wa.a)(p, 2),
                    f = b[0],
                    m = b[1],
                    h = Object(r.useCallback)(function (e) {
                        s(e.target.value), m(null);
                    }, []),
                    y = pb(),
                    x = Object(r.useCallback)(
                        function () {
                            d ||
                                (m(null),
                                y(c)
                                    .then(function () {
                                        s("");
                                    })
                                    .catch(function (e) {
                                        m(e.message), l(Vc(c));
                                    }));
                        },
                        [d, l, y, c]
                    ),
                    j = Object(r.useMemo)(
                        function () {
                            return Bd(c).length > 0 || Boolean(Ud(c));
                        },
                        [c]
                    ),
                    v = Object(r.useCallback)(
                        function (e) {
                            j && "Enter" === e.key && x();
                        },
                        [x, j]
                    ),
                    g = Object(r.useMemo)(
                        function () {
                            return Object.keys(u)
                                .filter(function (e) {
                                    return Boolean(u[e].current);
                                })
                                .sort(function (e, n) {
                                    var t = u[e].current,
                                        r = u[n].current;
                                    return t && r ? (t.name.toLowerCase() < r.name.toLowerCase() ? -1 : t.name.toLowerCase() === r.name.toLowerCase() ? 0 : 1) : t ? -1 : r ? 1 : 0;
                                });
                        },
                        [u]
                    ),
                    O = nu();
                return Object(os.jsxs)(Pc, {
                    style: { width: "100%", flex: "1 1" },
                    children: [
                        Object(os.jsx)(Lp, {
                            children: Object(os.jsxs)(ns, {
                                children: [
                                    Object(os.jsx)("div", { children: Object(os.jsx)(Xp.a, { style: { cursor: "pointer" }, onClick: a }) }),
                                    Object(os.jsx)(R, { fontSize: "20px", children: O(1208, "Manage Lists") }),
                                    Object(os.jsx)(ue, { onClick: t }),
                                ],
                            }),
                        }),
                        Object(os.jsx)(Ap, {}),
                        Object(os.jsxs)(Lp, {
                            gap: "14px",
                            children: [
                                Object(os.jsxs)(R, {
                                    bold: !0,
                                    children: [
                                        "Add a list",
                                        " ",
                                        Object(os.jsx)(lp, {
                                            text: O(
                                                999,
                                                "Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens."
                                            ),
                                        }),
                                    ],
                                }),
                                Object(os.jsxs)(is, {
                                    children: [
                                        Object(os.jsx)(Mp, {
                                            type: "text",
                                            id: "list-add-input",
                                            placeholder: "https:// or ipfs:// or ENS name",
                                            value: c,
                                            onChange: h,
                                            onKeyDown: v,
                                            style: { height: "2.75rem", borderRadius: 12, padding: "12px" },
                                        }),
                                        Object(os.jsx)(X, { onClick: x, style: { maxWidth: "4em", marginLeft: "1em" }, disabled: !j, children: "Add" }),
                                    ],
                                }),
                                f ? Object(os.jsx)(R, { color: "failure", title: f, style: { textOverflow: "ellipsis", overflow: "hidden" }, children: f }) : null,
                            ],
                        }),
                        Object(os.jsx)(Ap, {}),
                        Object(os.jsx)(Tb, {
                            children: g.map(function (e) {
                                return Object(os.jsx)(kb, { listUrl: e, onBack: a }, e);
                            }),
                        }),
                        Object(os.jsx)(Ap, {}),
                        Object(os.jsx)("div", { style: { padding: "16px", textAlign: "center" }, children: Object(os.jsx)(Rs, { href: "https://tokenlists.org", children: "Browse lists" }) }),
                    ],
                });
            }
            var Ib, Sb, Nb;
            function Lb(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    a = e.onCurrencySelect,
                    i = e.selectedCurrency,
                    o = e.otherSelectedCurrency,
                    c = Object(r.useState)(!1),
                    s = Object(Wa.a)(c, 2),
                    l = s[0],
                    u = s[1],
                    d = Td(n);
                Object(r.useEffect)(
                    function () {
                        n && !d && u(!1);
                    },
                    [n, d]
                );
                var p = Object(r.useCallback)(
                        function (e) {
                            a(e), t();
                        },
                        [t, a]
                    ),
                    b = Object(r.useCallback)(function () {
                        u(!0);
                    }, []),
                    f = Object(r.useCallback)(function () {
                        u(!1);
                    }, []),
                    m = !fu();
                return Object(os.jsx)(Rl, {
                    isOpen: n,
                    onDismiss: t,
                    maxHeight: 90,
                    minHeight: l ? 40 : m ? 0 : 80,
                    children: l ? Object(os.jsx)(Eb, { onDismiss: t, onBack: f }) : Object(os.jsx)(Gp, { isOpen: n, onDismiss: t, onCurrencySelect: p, onChangeList: b, selectedCurrency: i, otherSelectedCurrency: o, showCommonBases: !1 }),
                });
            }
            var Rb,
                Mb = c.default.div(Ib || (Ib = Object(qa.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"])), function (e) {
                    var n = e.sizeraw;
                    return e.margin && "".concat((n / 3 + 8).toString(), "px");
                }),
                Ab = Object(c.default)(yp)(Sb || (Sb = Object(qa.a)(["\n  z-index: 2;\n"]))),
                Db = Object(c.default)(yp)(Nb || (Nb = Object(qa.a)(["\n  position: absolute;\n  left: ", ";\n"])), function (e) {
                    var n = e.sizeraw;
                    return "".concat((n / 2).toString(), "px");
                });
            function Ub(e) {
                var n = e.currency0,
                    t = e.currency1,
                    r = e.size,
                    a = void 0 === r ? 16 : r,
                    i = e.margin,
                    o = void 0 !== i && i;
                return Object(os.jsxs)(Mb, {
                    sizeraw: a,
                    margin: o,
                    children: [n && Object(os.jsx)(Ab, { currency: n, size: "".concat(a.toString(), "px") }), t && Object(os.jsx)(Db, { currency: t, size: "".concat(a.toString(), "px"), sizeraw: a })],
                });
            }
            var Bb,
                Pb,
                Fb,
                _b,
                zb,
                qb,
                Yb,
                Hb,
                Vb,
                Zb = c.default.input(
                    Rb ||
                        (Rb = Object(qa.a)([
                            "\n  color: ",
                            ";\n  width: 0;\n  position: relative;\n  font-weight: 600;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 18px;\n  text-align: ",
                            ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
                            ";\n  }\n",
                        ])),
                    function (e) {
                        var n = e.error,
                            t = e.theme;
                        return n ? t.colors.failure : t.colors.text;
                    },
                    function (e) {
                        var n = e.align;
                        return n && n;
                    },
                    function (e) {
                        return e.theme.colors.inputThird;
                    }
                ),
                Wb = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                Qb = a.a.memo(function (e) {
                    var n = e.value,
                        t = e.onUserInput,
                        r = e.placeholder,
                        a = Object(Is.a)(e, ["value", "onUserInput", "placeholder"]);
                    return Object(os.jsx)(
                        Zb,
                        Object(Si.a)(
                            Object(Si.a)({}, a),
                            {},
                            {
                                value: n,
                                onChange: function (e) {
                                    var n;
                                    ("" === (n = e.target.value.replace(/,/g, ".")) || Wb.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && t(n);
                                },
                                inputMode: "decimal",
                                title: "Token Amount",
                                autoComplete: "off",
                                autoCorrect: "off",
                                type: "text",
                                pattern: "^[0-9]*[.,]?[0-9]*$",
                                placeholder: r || "0.0",
                                minLength: 1,
                                maxLength: 79,
                                spellCheck: "false",
                            }
                        )
                    );
                }),
                Gb = c.default.div(Bb || (Bb = Object(qa.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ", ";\n"])), function (e) {
                    return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem";
                }),
                Xb = c.default.button(
                    Pb ||
                        (Pb = Object(qa.a)([
                            "\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 600;\n  background-color: transparent;\n  color: ",
                            ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ",
                            ";\n  }\n",
                        ])),
                    function (e) {
                        var n = e.selected,
                            t = e.theme;
                        return n ? t.colors.text : "#2a2113";
                    },
                    function (e) {
                        var n = e.theme;
                        return Object(El.a)(0.05, n.colors.input);
                    }
                ),
                Kb = c.default.div(
                    Fb ||
                        (Fb = Object(qa.a)([
                            "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",
                            ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",
                            ";\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.text;
                    },
                    function (e) {
                        var n = e.theme;
                        return Object(El.a)(0.2, n.colors.textSubtle);
                    }
                ),
                Jb = c.default.span(_b || (_b = Object(qa.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),
                $b = c.default.div(
                    zb || (zb = Object(qa.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"])),
                    function (e) {
                        return e.hideInput ? "8px" : "20px";
                    },
                    function (e) {
                        return e.theme.colors.background;
                    }
                ),
                ef = c.default.div(
                    qb || (qb = Object(qa.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"])),
                    function (e) {
                        return e.theme.colors.input;
                    },
                    function (e) {
                        return e.theme.shadows.inset;
                    }
                );
            function nf(e) {
                var n = e.value,
                    t = e.onUserInput,
                    a = e.onMax,
                    i = e.showMaxButton,
                    o = e.label,
                    c = e.onCurrencySelect,
                    s = e.currency,
                    l = e.disableCurrencySelect,
                    u = void 0 !== l && l,
                    d = e.hideBalance,
                    p = void 0 !== d && d,
                    b = e.pair,
                    f = void 0 === b ? null : b,
                    m = e.hideInput,
                    h = void 0 !== m && m,
                    y = e.otherCurrency,
                    x = e.id,
                    j = e.showCommonBases,
                    v = Object(r.useState)(!1),
                    g = Object(Wa.a)(v, 2),
                    O = g[0],
                    C = g[1],
                    w = Cc().account,
                    k = kd(null !== w && void 0 !== w ? w : void 0, null !== s && void 0 !== s ? s : void 0),
                    T = nu(),
                    E = o || T(132, "Input"),
                    I = Object(r.useCallback)(
                        function () {
                            C(!1);
                        },
                        [C]
                    );
                return Object(os.jsxs)($b, {
                    id: x,
                    children: [
                        Object(os.jsxs)(ef, {
                            hideInput: h,
                            children: [
                                !h &&
                                    Object(os.jsx)(Kb, {
                                        children: Object(os.jsxs)(ns, {
                                            children: [
                                                Object(os.jsx)(R, { fontSize: "14px", children: E }),
                                                w &&
                                                    Object(os.jsx)(R, {
                                                        onClick: a,
                                                        fontSize: "14px",
                                                        style: { display: "inline", cursor: "pointer" },
                                                        children: !p && s && k ? "Balance: ".concat(null === k || void 0 === k ? void 0 : k.toSignificant(6)) : " -",
                                                    }),
                                            ],
                                        }),
                                    }),
                                Object(os.jsxs)(Gb, {
                                    style: h ? { padding: "0", borderRadius: "8px" } : {},
                                    selected: u,
                                    children: [
                                        !h &&
                                            Object(os.jsxs)(os.Fragment, {
                                                children: [
                                                    Object(os.jsx)(Qb, {
                                                        className: "token-amount-input",
                                                        value: n,
                                                        onUserInput: function (e) {
                                                            t(e);
                                                        },
                                                    }),
                                                    w && s && i && "To" !== o && Object(os.jsx)(X, { onClick: a, scale: "sm", size: "12px", variant: "text", style: { margin: "0 10px" }, children: "MAX" }),
                                                ],
                                            }),
                                        Object(os.jsx)(Xb, {
                                            selected: !!s,
                                            className: "open-currency-select-button",
                                            onClick: function () {
                                                u || C(!0);
                                            },
                                            children: Object(os.jsxs)(Jb, {
                                                children: [
                                                    f ? Object(os.jsx)(Ub, { currency0: f.token0, currency1: f.token1, size: 16, margin: !0 }) : s ? Object(os.jsx)(yp, { currency: s, size: "24px", style: { marginRight: "8px" } }) : null,
                                                    f
                                                        ? Object(os.jsxs)(R, { id: "pair", children: [null === f || void 0 === f ? void 0 : f.token0.symbol, ":", null === f || void 0 === f ? void 0 : f.token1.symbol] })
                                                        : Object(os.jsx)(R, {
                                                              id: "pair",
                                                              children:
                                                                  (s && s.symbol && s.symbol.length > 20
                                                                      ? "".concat(s.symbol.slice(0, 4), "...").concat(s.symbol.slice(s.symbol.length - 5, s.symbol.length))
                                                                      : null === s || void 0 === s
                                                                      ? void 0
                                                                      : s.symbol) || T(1196, "Select a currency"),
                                                          }),
                                                    !u && Object(os.jsx)(le, {}),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        !u && c && Object(os.jsx)(Lb, { isOpen: O, onDismiss: I, onCurrencySelect: c, selectedCurrency: s, otherSelectedCurrency: y, showCommonBases: j }),
                    ],
                });
            }
            var tf = c.default.div(Yb || (Yb = Object(qa.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"]))),
                rf = c.default.div(Hb || (Hb = Object(qa.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]))),
                af = Object(c.default)(Xp.a)(Vb || (Vb = Object(qa.a)(["\n  color: ", ";\n"])), function (e) {
                    return e.theme.colors.text;
                });
            function of() {
                var e = nu();
                return Object(os.jsx)(tf, {
                    children: Object(os.jsxs)(ns, {
                        style: { padding: "1rem" },
                        children: [
                            Object(os.jsx)(f.b, { to: "/pool", children: Object(os.jsx)(af, {}) }),
                            Object(os.jsx)(rf, { children: "Import Pool" }),
                            Object(os.jsx)(lp, { text: e(256, "Use this tool to find pairs that do not automatically appear in the interface.") }),
                        ],
                    }),
                });
            }
            function cf(e) {
                var n = e.adding,
                    t = nu();
                return Object(os.jsx)(tf, {
                    children: Object(os.jsxs)(ns, {
                        style: { padding: "1rem" },
                        children: [
                            Object(os.jsx)(f.b, { to: "/pool", children: Object(os.jsx)(af, {}) }),
                            Object(os.jsxs)(rf, { children: [n ? t(258, "Add") : t(260, "Remove"), " Liquidity"] }),
                            Object(os.jsx)(lp, {
                                text: n
                                    ? t(264, "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.")
                                    : t(266, "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive."),
                            }),
                        ],
                    }),
                });
            }
            var sf = t(587),
                lf = t(588);
            function uf(e) {
                var n,
                    t,
                    r = null === (n = Au(dd(null === e || void 0 === e ? void 0 : e.address, !1), "totalSupply")) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0];
                return e && r ? new Do(e, r.toString()) : void 0;
            }
            function df(e) {
                if (e === Oo) return "BNB";
                if (e instanceof Co) return e.address;
                throw new Error("invalid currency");
            }
            var pf, bf, ff, mf, hf, yf, xf, jf, vf, gf, Of;
            function Cf(e, n) {
                return n && e === Oo ? Eo[n] : e instanceof Co ? e : void 0;
            }
            function wf(e, n) {
                var t = e && n ? Cf(e.currency, n) : void 0;
                return t && e ? new Do(t, e.raw) : void 0;
            }
            function kf(e) {
                return e.equals(Eo[e.chainId]) ? Oo : e;
            }
            var Tf = c.default.div(pf || (pf = Object(qa.a)(["\n  position: relative;\n"]))),
                Ef = c.default.div(bf || (bf = Object(qa.a)(["\n  padding: 2px;\n\n  ", "\n"])), function (e) {
                    return e.clickable ? Object(c.css)(ff || (ff = Object(qa.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null;
                }),
                If = c.default.div(mf || (mf = Object(qa.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"])), function (e) {
                    return e.theme.colors.tertiary;
                }),
                Sf = c.default.div(hf || (hf = Object(qa.a)(["\n  margin-top: 1rem;\n"]))),
                Nf = Object(c.default)(R)(yf || (yf = Object(qa.a)(["\n  color: ", ";\n"])), function (e) {
                    var n = e.theme,
                        t = e.severity;
                    return 3 === t || 4 === t ? n.colors.failure : 2 === t ? n.colors.binance : 1 === t ? n.colors.text : n.colors.success;
                }),
                Lf = c.default.button(
                    xf ||
                        (xf = Object(qa.a)([
                            "\n  height: 22px;\n  width: 22px;\n  background-color: ",
                            ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
                            ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
                            ";\n  }\n  :focus {\n    background-color: ",
                            ";\n    outline: none;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.textSubtle;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    }
                ),
                Rf = c.default.span(
                    jf ||
                        (jf = Object(qa.a)([
                            "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
                        ]))
                ),
                Mf = c.default.div(
                    vf ||
                        (vf = Object(qa.a)([
                            "\n  background-color: ",
                            ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
                            ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n",
                        ])),
                    function (e) {
                        var n = e.theme;
                        return Object(El.b)(0.9, n.colors.failure);
                    },
                    function (e) {
                        return e.theme.colors.failure;
                    }
                ),
                Af = c.default.div(
                    gf || (gf = Object(qa.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"])),
                    function (e) {
                        var n = e.theme;
                        return Object(El.b)(0.9, n.colors.failure);
                    }
                );
            function Df(e) {
                var n = e.error;
                return Object(os.jsxs)(Mf, { children: [Object(os.jsx)(Af, { children: Object(os.jsx)(Wl.a, { size: 24 }) }), Object(os.jsx)("p", { children: n })] });
            }
            var Uf,
                Bf,
                Pf = Object(c.default)(Bc)(
                    Of || (Of = Object(qa.a)(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"])),
                    function (e) {
                        var n = e.theme;
                        return Object(El.b)(0.9, n.colors.primary);
                    },
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                Ff = Object(c.default)(ns)(Uf || (Uf = Object(qa.a)(["\n  height: 24px;\n"]))),
                _f = Object(c.default)(Cl)(
                    Bf || (Bf = Object(qa.a)(["\n  border: 1px solid ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n"])),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        var n = e.theme;
                        return Object(El.a)(0.06, n.colors.invertedContrast);
                    }
                );
            function zf(e) {
                var n = e.pair,
                    t = e.showUnwrapped,
                    a = void 0 !== t && t,
                    i = Cc().account,
                    o = a ? n.token0 : kf(n.token0),
                    c = a ? n.token1 : kf(n.token1),
                    s = Object(r.useState)(!1),
                    l = Object(Wa.a)(s, 2),
                    u = l[0],
                    d = l[1],
                    p = Cd(null !== i && void 0 !== i ? i : void 0, n.liquidityToken),
                    b = uf(n.liquidityToken),
                    f = n && b && p && Li.a.greaterThanOrEqual(b.raw, p.raw) ? [n.getLiquidityValue(n.token0, b, p, !1), n.getLiquidityValue(n.token1, b, p, !1)] : [void 0, void 0],
                    m = Object(Wa.a)(f, 2),
                    h = m[0],
                    y = m[1];
                return Object(os.jsx)(os.Fragment, {
                    children:
                        p &&
                        Object(os.jsx)(Ye, {
                            children: Object(os.jsx)(He, {
                                children: Object(os.jsxs)(Bc, {
                                    gap: "12px",
                                    children: [
                                        Object(os.jsx)(Ff, {
                                            children: Object(os.jsx)(as, {
                                                children: Object(os.jsx)(R, { style: { textTransform: "uppercase", fontWeight: 600 }, fontSize: "14px", color: "textSubtle", children: "LP Tokens in your Wallet" }),
                                            }),
                                        }),
                                        Object(os.jsxs)(Ff, {
                                            onClick: function () {
                                                return d(!u);
                                            },
                                            children: [
                                                Object(os.jsxs)(as, { children: [Object(os.jsx)(Ub, { currency0: o, currency1: c, margin: !0, size: 20 }), Object(os.jsxs)(R, { fontSize: "14px", children: [o.symbol, "/", c.symbol] })] }),
                                                Object(os.jsx)(as, { children: Object(os.jsx)(R, { fontSize: "14px", children: p ? p.toSignificant(4) : "-" }) }),
                                            ],
                                        }),
                                        Object(os.jsxs)(Bc, {
                                            gap: "4px",
                                            children: [
                                                Object(os.jsxs)(Ff, {
                                                    children: [
                                                        Object(os.jsxs)(R, { fontSize: "14px", children: [o.symbol, ":"] }),
                                                        h ? Object(os.jsx)(as, { children: Object(os.jsx)(R, { ml: "6px", fontSize: "14px", children: null === h || void 0 === h ? void 0 : h.toSignificant(6) }) }) : "-",
                                                    ],
                                                }),
                                                Object(os.jsxs)(Ff, {
                                                    children: [
                                                        Object(os.jsxs)(R, { fontSize: "14px", children: [c.symbol, ":"] }),
                                                        y ? Object(os.jsx)(as, { children: Object(os.jsx)(R, { ml: "6px", fontSize: "14px", children: null === y || void 0 === y ? void 0 : y.toSignificant(6) }) }) : "-",
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                });
            }
            function qf(e) {
                var n = e.pair,
                    t = Cc().account,
                    a = kf(n.token0),
                    i = kf(n.token1),
                    o = Object(r.useState)(!1),
                    c = Object(Wa.a)(o, 2),
                    s = c[0],
                    l = c[1],
                    u = Cd(null !== t && void 0 !== t ? t : void 0, n.liquidityToken),
                    d = uf(n.liquidityToken),
                    p = u && d && Li.a.greaterThanOrEqual(d.raw, u.raw) ? new zo(u.raw, d.raw) : void 0,
                    b = n && d && u && Li.a.greaterThanOrEqual(d.raw, u.raw) ? [n.getLiquidityValue(n.token0, d, u, !1), n.getLiquidityValue(n.token1, d, u, !1)] : [void 0, void 0],
                    m = Object(Wa.a)(b, 2),
                    h = m[0],
                    y = m[1];
                return Object(os.jsx)(_f, {
                    children: Object(os.jsxs)(Bc, {
                        gap: "12px",
                        children: [
                            Object(os.jsxs)(Ff, {
                                onClick: function () {
                                    return l(!s);
                                },
                                style: { cursor: "pointer" },
                                children: [
                                    Object(os.jsxs)(as, {
                                        children: [
                                            Object(os.jsx)(Ub, { currency0: a, currency1: i, margin: !0, size: 20 }),
                                            Object(os.jsx)(R, { children: a && i ? "".concat(a.symbol, "/").concat(i.symbol) : Object(os.jsx)(Rf, { children: "Loading" }) }),
                                        ],
                                    }),
                                    Object(os.jsx)(as, { children: s ? Object(os.jsx)(sf.a, { size: "20", style: { marginLeft: "10px" } }) : Object(os.jsx)(lf.a, { size: "20", style: { marginLeft: "10px" } }) }),
                                ],
                            }),
                            s &&
                                Object(os.jsxs)(Bc, {
                                    gap: "8px",
                                    children: [
                                        Object(os.jsxs)(Ff, {
                                            children: [
                                                Object(os.jsx)(as, { children: Object(os.jsxs)(R, { children: ["Pooled ", a.symbol, ":"] }) }),
                                                h
                                                    ? Object(os.jsxs)(as, {
                                                          children: [
                                                              Object(os.jsx)(R, { ml: "6px", children: null === h || void 0 === h ? void 0 : h.toSignificant(6) }),
                                                              Object(os.jsx)(yp, { size: "20px", style: { marginLeft: "8px" }, currency: a }),
                                                          ],
                                                      })
                                                    : "-",
                                            ],
                                        }),
                                        Object(os.jsxs)(Ff, {
                                            children: [
                                                Object(os.jsx)(as, { children: Object(os.jsxs)(R, { children: ["Pooled ", i.symbol, ":"] }) }),
                                                y
                                                    ? Object(os.jsxs)(as, {
                                                          children: [
                                                              Object(os.jsx)(R, { ml: "6px", children: null === y || void 0 === y ? void 0 : y.toSignificant(6) }),
                                                              Object(os.jsx)(yp, { size: "20px", style: { marginLeft: "8px" }, currency: i }),
                                                          ],
                                                      })
                                                    : "-",
                                            ],
                                        }),
                                        Object(os.jsxs)(Ff, { children: [Object(os.jsx)(R, { children: "Your pool tokens:" }), Object(os.jsx)(R, { children: u ? u.toSignificant(4) : "-" })] }),
                                        Object(os.jsxs)(Ff, { children: [Object(os.jsx)(R, { children: "Your pool share:" }), Object(os.jsx)(R, { children: p ? "".concat(p.toFixed(2), "%") : "-" })] }),
                                        Object(os.jsxs)(ns, {
                                            marginTop: "10px",
                                            children: [
                                                Object(os.jsx)(X, { as: f.b, to: "/add/".concat(df(a), "/").concat(df(i)), style: { width: "48%" }, children: "Add" }),
                                                Object(os.jsx)(X, { as: f.b, style: { width: "48%" }, to: "/remove/".concat(df(a), "/").concat(df(i)), children: "Remove" }),
                                            ],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                });
            }
            var Yf,
                Hf = new iu.b(ad.a);
            function Vf(e) {
                var n = Cc().chainId,
                    t = Object(r.useMemo)(
                        function () {
                            return e.map(function (e) {
                                var t = Object(Wa.a)(e, 2),
                                    r = t[0],
                                    a = t[1];
                                return [Cf(r, n), Cf(a, n)];
                            });
                        },
                        [n, e]
                    ),
                    a = Mu(
                        Object(r.useMemo)(
                            function () {
                                return t.map(function (e) {
                                    var n = Object(Wa.a)(e, 2),
                                        t = n[0],
                                        r = n[1];
                                    return t && r && !t.equals(r) ? Po.getAddress(t, r) : void 0;
                                });
                            },
                            [t]
                        ),
                        Hf,
                        "getReserves"
                    );
                return Object(r.useMemo)(
                    function () {
                        return a.map(function (e, n) {
                            var r = e.result,
                                a = e.loading,
                                i = t[n][0],
                                o = t[n][1];
                            if (a) return [Yf.LOADING, null];
                            if (!i || !o || i.equals(o)) return [Yf.INVALID, null];
                            if (!r) return [Yf.NOT_EXISTS, null];
                            var c = r.reserve0,
                                s = r.reserve1,
                                l = i.sortsBefore(o) ? [i, o] : [o, i],
                                u = Object(Wa.a)(l, 2),
                                d = u[0],
                                p = u[1];
                            return [Yf.EXISTS, new Po(new Do(d, c.toString()), new Do(p, s.toString()))];
                        });
                    },
                    [a, t]
                );
            }
            function Zf(e, n) {
                return Vf([[e, n]])[0];
            }
            !(function (e) {
                (e[(e.LOADING = 0)] = "LOADING"), (e[(e.NOT_EXISTS = 1)] = "NOT_EXISTS"), (e[(e.EXISTS = 2)] = "EXISTS"), (e[(e.INVALID = 3)] = "INVALID");
            })(Yf || (Yf = {}));
            var Wf = t(577);
            function Qf(e, n, t) {
                var a = Au(
                    dd(null === e || void 0 === e ? void 0 : e.address, !1),
                    "allowance",
                    Object(r.useMemo)(
                        function () {
                            return [n, t];
                        },
                        [n, t]
                    )
                ).result;
                return Object(r.useMemo)(
                    function () {
                        return e && a ? new Do(e, a.toString()) : void 0;
                    },
                    [e, a]
                );
            }
            var Gf;
            !(function (e) {
                (e.INPUT = "INPUT"), (e.OUTPUT = "OUTPUT");
            })(Gf || (Gf = {}));
            var Xf = Object(Ec.b)("swap/selectCurrency"),
                Kf = Object(Ec.b)("swap/switchCurrencies"),
                Jf = Object(Ec.b)("swap/typeInput"),
                $f = Object(Ec.b)("swap/replaceSwapState"),
                em = Object(Ec.b)("swap/setRecipient"),
                nm = Object(Ec.b)("transactions/addTransaction"),
                tm = Object(Ec.b)("transactions/clearAllTransactions"),
                rm = Object(Ec.b)("transactions/finalizeTransaction"),
                am = Object(Ec.b)("transactions/checkedTransaction");
            function im() {
                var e = Cc(),
                    n = e.chainId,
                    t = e.account,
                    a = Object(Xa.c)();
                return Object(r.useCallback)(
                    function (e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = r.summary,
                            o = r.approval;
                        if (t && n) {
                            var c = e.hash;
                            if (!c) throw Error("No transaction hash found.");
                            a(nm({ hash: c, from: t, chainId: n, approval: o, summary: i }));
                        }
                    },
                    [a, n, t]
                );
            }
            function om() {
                var e,
                    n = Cc().chainId,
                    t = Object(Xa.d)(function (e) {
                        return e.transactions;
                    });
                return n && null !== (e = t[n]) && void 0 !== e ? e : {};
            }
            function cm(e) {
                return new Date().getTime() - e.addedTime < 864e5;
            }
            var sm,
                lm,
                um = new zo(Li.a.BigInt(20), Li.a.BigInt(1e4)),
                dm = new zo(Li.a.BigInt(1e4), Li.a.BigInt(1e4)),
                pm = dm.subtract(um);
            function bm(e) {
                var n = e
                        ? dm.subtract(
                              e.route.pairs.reduce(function (e) {
                                  return e.multiply(pm);
                              }, dm)
                          )
                        : void 0,
                    t = e && n ? e.priceImpact.subtract(n) : void 0;
                return {
                    priceImpactWithoutFee: t ? new zo(null === t || void 0 === t ? void 0 : t.numerator, null === t || void 0 === t ? void 0 : t.denominator) : void 0,
                    realizedLPFee: n && e && (e.inputAmount instanceof Do ? new Do(e.inputAmount.token, n.multiply(e.inputAmount.raw).quotient) : Ao.ether(n.multiply(e.inputAmount.raw).quotient)),
                };
            }
            function fm(e, n) {
                var t,
                    r,
                    a = ((r = n), new zo(Li.a.BigInt(Math.floor(r)), Li.a.BigInt(1e4)));
                return (t = {}), Object($a.a)(t, Gf.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(a)), Object($a.a)(t, Gf.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(a)), t;
            }
            function mm(e) {
                return (null === e || void 0 === e ? void 0 : e.lessThan(gc))
                    ? (null === e || void 0 === e ? void 0 : e.lessThan(jc))
                        ? (null === e || void 0 === e ? void 0 : e.lessThan(xc))
                            ? (null === e || void 0 === e ? void 0 : e.lessThan(yc))
                                ? 0
                                : 1
                            : 2
                        : 3
                    : 4;
            }
            function hm(e, n) {
                return e
                    ? n
                        ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol)
                        : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol)
                    : "";
            }
            function ym(e, n) {
                var t = Cc().account,
                    a = e instanceof Do ? e.token : void 0,
                    i = Qf(a, null !== t && void 0 !== t ? t : void 0, n),
                    o = (function (e, n) {
                        var t = om();
                        return Object(r.useMemo)(
                            function () {
                                return (
                                    "string" === typeof e &&
                                    "string" === typeof n &&
                                    Object.keys(t).some(function (r) {
                                        var a = t[r];
                                        if (!a) return !1;
                                        if (a.receipt) return !1;
                                        var i = a.approval;
                                        return !!i && i.spender === n && i.tokenAddress === e && cm(a);
                                    })
                                );
                            },
                            [t, n, e]
                        );
                    })(null === a || void 0 === a ? void 0 : a.address, n),
                    c = Object(r.useMemo)(
                        function () {
                            return e && n ? (e.currency === Oo ? sm.APPROVED : i ? (i.lessThan(e) ? (o ? sm.PENDING : sm.NOT_APPROVED) : sm.APPROVED) : sm.UNKNOWN) : sm.UNKNOWN;
                        },
                        [e, i, o, n]
                    ),
                    s = dd(null === a || void 0 === a ? void 0 : a.address),
                    l = im(),
                    u = Object(r.useCallback)(
                        Object(Za.a)(
                            Va.a.mark(function t() {
                                var r, i;
                                return Va.a.wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (c === sm.NOT_APPROVED) {
                                                    t.next = 3;
                                                    break;
                                                }
                                                return console.error("approve was called unnecessarily"), t.abrupt("return");
                                            case 3:
                                                if (a) {
                                                    t.next = 6;
                                                    break;
                                                }
                                                return console.error("no token"), t.abrupt("return");
                                            case 6:
                                                if (s) {
                                                    t.next = 9;
                                                    break;
                                                }
                                                return console.error("tokenContract is null"), t.abrupt("return");
                                            case 9:
                                                if (e) {
                                                    t.next = 12;
                                                    break;
                                                }
                                                return console.error("missing amount to approve"), t.abrupt("return");
                                            case 12:
                                                if (n) {
                                                    t.next = 15;
                                                    break;
                                                }
                                                return console.error("no spender"), t.abrupt("return");
                                            case 15:
                                                return (
                                                    (r = !1),
                                                    (t.next = 18),
                                                    s.estimateGas.approve(n, Wf.a).catch(function () {
                                                        return (r = !0), s.estimateGas.approve(n, e.raw.toString());
                                                    })
                                                );
                                            case 18:
                                                return (
                                                    (i = t.sent),
                                                    t.abrupt(
                                                        "return",
                                                        s
                                                            .approve(n, r ? e.raw.toString() : Wf.a, { gasLimit: js(i) })
                                                            .then(function (t) {
                                                                l(t, { summary: "Approve ".concat(e.currency.symbol), approval: { tokenAddress: a.address, spender: n } });
                                                            })
                                                            .catch(function (e) {
                                                                throw (console.error("Failed to approve token", e), e);
                                                            })
                                                    )
                                                );
                                            case 20:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        ),
                        [c, a, s, e, n, l]
                    );
                return [c, u];
            }
            !(function (e) {
                (e[(e.UNKNOWN = 0)] = "UNKNOWN"), (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"), (e[(e.PENDING = 2)] = "PENDING"), (e[(e.APPROVED = 3)] = "APPROVED");
            })(sm || (sm = {})),
                (function (e) {
                    (e.CURRENCY_A = "CURRENCY_A"), (e.CURRENCY_B = "CURRENCY_B");
                })(lm || (lm = {}));
            var xm = Object(Ec.b)("mint/typeInputMint"),
                jm = Object(Ec.b)("mint/resetMintState"),
                vm = t(196);
            function gm(e, n) {
                var t = Object(r.useState)(e),
                    a = Object(Wa.a)(t, 2),
                    i = a[0],
                    o = a[1];
                return (
                    Object(r.useEffect)(
                        function () {
                            var t = setTimeout(function () {
                                o(e);
                            }, n);
                            return function () {
                                clearTimeout(t);
                            };
                        },
                        [e, n]
                    ),
                    i
                );
            }
            function Om(e) {
                var n = ms(e),
                    t = (function (e) {
                        var n,
                            t,
                            a,
                            i = gm(e, 200),
                            o = Object(r.useMemo)(
                                function () {
                                    if (!i || !ms(i)) return [void 0];
                                    try {
                                        return i ? [Object(Pd.namehash)("".concat(i.toLowerCase().substr(2), ".addr.reverse"))] : [void 0];
                                    } catch (e) {
                                        return [void 0];
                                    }
                                },
                                [i]
                            ),
                            c = Au(pd(!1), "resolver", o),
                            s = null === (n = c.result) || void 0 === n ? void 0 : n[0],
                            l = Au(bd(s && !Fd(s) ? s : void 0, !1), "name", o),
                            u = i !== e;
                        return { ENSName: u ? null : null !== (t = null === (a = l.result) || void 0 === a ? void 0 : a[0]) && void 0 !== t ? t : null, loading: u || c.loading || l.loading };
                    })(n || void 0),
                    a = (function (e) {
                        var n,
                            t,
                            a,
                            i = gm(e, 200),
                            o = Object(r.useMemo)(
                                function () {
                                    if (!i) return [void 0];
                                    try {
                                        return i ? [Object(Pd.namehash)(i)] : [void 0];
                                    } catch (e) {
                                        return [void 0];
                                    }
                                },
                                [i]
                            ),
                            c = Au(pd(!1), "resolver", o),
                            s = null === (n = c.result) || void 0 === n ? void 0 : n[0],
                            l = Au(bd(s && !Fd(s) ? s : void 0, !1), "addr", o),
                            u = i !== e;
                        return { address: u ? null : null !== (t = null === (a = l.result) || void 0 === a ? void 0 : a[0]) && void 0 !== t ? t : null, loading: u || c.loading || l.loading };
                    })(e);
                return { loading: t.loading || a.loading, address: n || a.address, name: t.ENSName ? t.ENSName : (!n && a.address && e) || null };
            }
            function Cm(e, n) {
                var t = Cc().chainId,
                    a = Object(r.useMemo)(
                        function () {
                            return t ? cc[t] : [];
                        },
                        [t]
                    ),
                    i = Object(r.useMemo)(
                        function () {
                            return Uu()(a, function (e) {
                                return a.map(function (n) {
                                    return [e, n];
                                });
                            }).filter(function (e) {
                                var n = Object(Wa.a)(e, 2),
                                    t = n[0],
                                    r = n[1];
                                return t.address !== r.address;
                            });
                        },
                        [a]
                    ),
                    o = t ? [Cf(e, t), Cf(n, t)] : [void 0, void 0],
                    c = Object(Wa.a)(o, 2),
                    s = c[0],
                    l = c[1],
                    u = Vf(
                        Object(r.useMemo)(
                            function () {
                                return s && l
                                    ? [[s, l]]
                                          .concat(
                                              Object(Ii.a)(
                                                  a.map(function (e) {
                                                      return [s, e];
                                                  })
                                              ),
                                              Object(Ii.a)(
                                                  a.map(function (e) {
                                                      return [l, e];
                                                  })
                                              ),
                                              Object(Ii.a)(i)
                                          )
                                          .filter(function (e) {
                                              return Boolean(e[0] && e[1]);
                                          })
                                          .filter(function (e) {
                                              var n = Object(Wa.a)(e, 2),
                                                  t = n[0],
                                                  r = n[1];
                                              return t.address !== r.address;
                                          })
                                          .filter(function (e) {
                                              var n = Object(Wa.a)(e, 2),
                                                  r = n[0],
                                                  a = n[1];
                                              if (!t) return !0;
                                              var i = sc[t];
                                              if (!i) return !0;
                                              var o = i[r.address],
                                                  c = i[a.address];
                                              return (
                                                  (!o && !c) ||
                                                  (!(
                                                      o &&
                                                      !o.find(function (e) {
                                                          return a.equals(e);
                                                      })
                                                  ) &&
                                                      !(
                                                          c &&
                                                          !c.find(function (e) {
                                                              return r.equals(e);
                                                          })
                                                      ))
                                              );
                                          })
                                    : [];
                            },
                            [s, l, a, i, t]
                        )
                    );
                return Object(r.useMemo)(
                    function () {
                        return Object.values(
                            u
                                .filter(function (e) {
                                    return Boolean(e[0] === Yf.EXISTS && e[1]);
                                })
                                .reduce(function (e, n) {
                                    var t,
                                        r = Object(Wa.a)(n, 2)[1];
                                    return (e[r.liquidityToken.address] = null !== (t = e[r.liquidityToken.address]) && void 0 !== t ? t : r), e;
                                }, {})
                        );
                    },
                    [u]
                );
            }
            var wm = t(315);
            function km() {
                return Object(Xa.d)(function (e) {
                    return e.swap;
                });
            }
            function Tm(e, n) {
                if (e && n)
                    try {
                        var t = Object(vm.parseUnits)(e, n.decimals).toString();
                        if ("0" !== t) return n instanceof Co ? new Do(n, Li.a.BigInt(t)) : Ao.ether(Li.a.BigInt(t));
                    } catch (r) {
                        console.info('Failed to parse input amount: "'.concat(e, '"'), r);
                    }
            }
            var Em = ["0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", "0x10ED43C718714eb63d5aA57B78B54704E256024E", "0x10ED43C718714eb63d5aA57B78B54704E256024E"];
            function Im(e, n) {
                return (
                    e.route.path.some(function (e) {
                        return e.address === n;
                    }) ||
                    e.route.pairs.some(function (e) {
                        return e.liquidityToken.address === n;
                    })
                );
            }
            function Sm() {
                var e,
                    n,
                    t,
                    a,
                    i,
                    o,
                    c,
                    s = Cc().account,
                    l = km(),
                    u = l.independentField,
                    d = l.typedValue,
                    p = l[Gf.INPUT].currencyId,
                    b = l[Gf.OUTPUT].currencyId,
                    f = l.recipient,
                    m = jd(p),
                    h = jd(b),
                    y = Om(null !== f && void 0 !== f ? f : void 0),
                    x = null !== (e = null === f ? s : y.address) && void 0 !== e ? e : null,
                    j = wd(null !== s && void 0 !== s ? s : void 0, [null !== m && void 0 !== m ? m : void 0, null !== h && void 0 !== h ? h : void 0]),
                    v = u === Gf.INPUT,
                    g = Tm(d, null !== (n = v ? m : h) && void 0 !== n ? n : void 0),
                    O = (function (e, n) {
                        var t = Cm(null === e || void 0 === e ? void 0 : e.currency, n);
                        return Object(r.useMemo)(
                            function () {
                                var r;
                                return e && n && t.length > 0 && null !== (r = Vo.bestTradeExactIn(t, e, n, { maxHops: 3, maxNumResults: 1 })[0]) && void 0 !== r ? r : null;
                            },
                            [t, e, n]
                        );
                    })(v ? g : void 0, null !== h && void 0 !== h ? h : void 0),
                    C = (function (e, n) {
                        var t = Cm(e, null === n || void 0 === n ? void 0 : n.currency);
                        return Object(r.useMemo)(
                            function () {
                                var r;
                                return e && n && t.length > 0 && null !== (r = Vo.bestTradeExactOut(t, e, n, { maxHops: 3, maxNumResults: 1 })[0]) && void 0 !== r ? r : null;
                            },
                            [t, e, n]
                        );
                    })(null !== m && void 0 !== m ? m : void 0, v ? void 0 : g),
                    w = v ? O : C,
                    k = ((t = {}), Object($a.a)(t, Gf.INPUT, j[0]), Object($a.a)(t, Gf.OUTPUT, j[1]), t),
                    T = ((a = {}), Object($a.a)(a, Gf.INPUT, null !== m && void 0 !== m ? m : void 0), Object($a.a)(a, Gf.OUTPUT, null !== h && void 0 !== h ? h : void 0), a);
                (s || (i = "Connect Wallet"), g) || (i = null !== (o = i) && void 0 !== o ? o : "Enter an amount");
                (T[Gf.INPUT] && T[Gf.OUTPUT]) || (i = null !== (c = i) && void 0 !== c ? c : "Select a token");
                var E,
                    I = ms(x);
                if (x && I) {
                    if (-1 !== Em.indexOf(I) || (O && Im(O, I)) || (C && Im(C, I))) {
                        var S;
                        i = null !== (S = i) && void 0 !== S ? S : "Invalid recipient";
                    }
                } else i = null !== (E = i) && void 0 !== E ? E : "Enter a recipient";
                var N = Ju(),
                    L = Object(Wa.a)(N, 1)[0],
                    R = w && L && fm(w, L),
                    M = [k[Gf.INPUT], R ? R[Gf.INPUT] : null],
                    A = M[0],
                    D = M[1];
                return A && D && A.lessThan(D) && (i = "Insufficient ".concat(D.currency.symbol, " balance")), { currencies: T, currencyBalances: k, parsedAmount: g, v2Trade: null !== w && void 0 !== w ? w : void 0, inputError: i };
            }
            function Nm(e) {
                if ("string" === typeof e) {
                    var n = ms(e);
                    if (n) return n;
                    if ("BNB" === e.toUpperCase()) return "BNB";
                    if (!1 === n) return "BNB";
                }
                return null !== "BNB" ? "BNB" : "";
            }
            var Lm = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                Rm = /^0x[a-fA-F0-9]{40}$/;
            function Mm(e) {
                var n,
                    t = Nm(e.inputCurrency),
                    r = Nm(e.outputCurrency);
                t === r && ("string" === typeof e.outputCurrency ? (t = "") : (r = ""));
                var a,
                    i = (function (e) {
                        return "string" !== typeof e ? null : ms(e) || (Lm.test(e) || Rm.test(e) ? e : null);
                    })(e.recipient);
                return (
                    (n = {}),
                    Object($a.a)(n, Gf.INPUT, { currencyId: t }),
                    Object($a.a)(n, Gf.OUTPUT, { currencyId: r }),
                    Object($a.a)(n, "typedValue", "string" !== typeof (a = e.exactAmount) || isNaN(parseFloat(a)) ? "" : a),
                    Object($a.a)(
                        n,
                        "independentField",
                        (function (e) {
                            return "string" === typeof e && "output" === e.toLowerCase() ? Gf.OUTPUT : Gf.INPUT;
                        })(e.exactField)
                    ),
                    Object($a.a)(n, "recipient", i),
                    n
                );
            }
            function Am() {
                var e = Cc().chainId,
                    n = Object(Xa.c)(),
                    t = (function () {
                        var e = Object(Qa.g)().search;
                        return Object(r.useMemo)(
                            function () {
                                return e && e.length > 1 ? Object(wm.parse)(e, { parseArrays: !1, ignoreQueryPrefix: !0 }) : {};
                            },
                            [e]
                        );
                    })(),
                    a = Object(r.useState)(),
                    i = Object(Wa.a)(a, 2),
                    o = i[0],
                    c = i[1];
                return (
                    Object(r.useEffect)(
                        function () {
                            if (e) {
                                var r = Mm(t);
                                n($f({ typedValue: r.typedValue, field: r.independentField, inputCurrencyId: r[Gf.INPUT].currencyId, outputCurrencyId: r[Gf.OUTPUT].currencyId, recipient: r.recipient })),
                                    c({ inputCurrencyId: r[Gf.INPUT].currencyId, outputCurrencyId: r[Gf.OUTPUT].currencyId });
                            }
                        },
                        [n, e]
                    ),
                    o
                );
            }
            var Dm = Li.a.BigInt(0);
            function Um() {
                return Object(Xa.d)(function (e) {
                    return e.mint;
                });
            }
            function Bm(e) {
                if (e) return e.currency === Oo ? (Li.a.greaterThan(e.raw, Oc) ? Ao.ether(Li.a.subtract(e.raw, Oc)) : Ao.ether(Li.a.BigInt(0))) : e;
            }
            var Pm,
                Fm,
                _m,
                zm,
                qm,
                Ym = c.default.div(Pm || (Pm = Object(qa.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n  padding: 16px;\n"])), function (e) {
                    return e.theme.colors.borderColor;
                }),
                Hm = t(143),
                Vm = Object(Ec.d)({
                    name: "toasts",
                    initialState: { data: [] },
                    reducers: {
                        push: function (e, n) {
                            var t = n.payload,
                                r = e.data.findIndex(function (e) {
                                    return e.id === n.payload.id;
                                });
                            r >= 0 && e.data.splice(r, 1), e.data.unshift(t);
                        },
                        remove: function (e, n) {
                            var t = e.data.findIndex(function (e) {
                                return e.id === n.payload;
                            });
                            t >= 0 && e.data.splice(t, 1);
                        },
                        clear: function (e) {
                            e.data = [];
                        },
                    },
                }),
                Zm = Vm.actions,
                Wm = Zm.clear,
                Qm = Zm.remove,
                Gm = Zm.push,
                Xm = Vm.reducer,
                Km = function () {
                    var e = Object(Xa.c)();
                    return Object(r.useMemo)(
                        function () {
                            var n = function (n) {
                                return e(Gm(n));
                            };
                            return {
                                toastError: function (e, t) {
                                    return n({ id: Object(Hm.kebabCase)(e), type: da, title: e, description: t });
                                },
                                toastInfo: function (e, t) {
                                    return n({ id: Object(Hm.kebabCase)(e), type: ba, title: e, description: t });
                                },
                                toastSuccess: function (e, t) {
                                    return n({ id: Object(Hm.kebabCase)(e), type: ua, title: e, description: t });
                                },
                                toastWarning: function (e, t) {
                                    return n({ id: Object(Hm.kebabCase)(e), type: pa, title: e, description: t });
                                },
                                push: n,
                                remove: function (n) {
                                    return e(Qm(n));
                                },
                                clear: function () {
                                    return e(Wm());
                                },
                            };
                        },
                        [e]
                    );
                },
                Jm = function () {
                    var e = Object(Ka.d)(),
                        n = e.activate,
                        t = e.deactivate,
                        a = Km().toastError;
                    return {
                        login: Object(r.useCallback)(function (e) {
                            var t = Ei[e];
                            t
                                ? n(
                                      t,
                                      (function () {
                                          var e = Object(Za.a)(
                                              Va.a.mark(function e(n) {
                                                  return Va.a.wrap(function (e) {
                                                      for (;;)
                                                          switch ((e.prev = e.next)) {
                                                              case 0:
                                                                  window.localStorage.removeItem(Qr),
                                                                      n instanceof Ka.a
                                                                          ? a("Unsupported Chain Id", "Unsupported Chain Id Error. Check your chain Id.")
                                                                          : n instanceof ni.b || n instanceof ai.NoBscProviderError
                                                                          ? a("Provider Error", "No provider was found")
                                                                          : n instanceof ni.c || n instanceof ti.a
                                                                          ? (t instanceof ti.b && (t.walletConnectProvider = null), a("Authorization Error", "Please authorize to access your account"))
                                                                          : a(n.name, n.message);
                                                              case 2:
                                                              case "end":
                                                                  return e.stop();
                                                          }
                                                  }, e);
                                              })
                                          );
                                          return function (n) {
                                              return e.apply(this, arguments);
                                          };
                                      })()
                                  )
                                : a("Can't find connector", "The connector config is wrong");
                        }, []),
                        logout: t,
                    };
                },
                $m = function (e) {
                    var n = nu(),
                        t = Jm(),
                        r = t.login,
                        a = t.logout,
                        i = ta(r, a).onPresentConnectModal;
                    return Object(os.jsx)(X, Object(Si.a)(Object(Si.a)({ onClick: i }, e), {}, { children: n(292, "Unlock Wallet") }));
                },
                eh = Object(c.default)(Ye)(Fm || (Fm = Object(qa.a)(["\n  position: relative;\n  max-width: 432px;\n  width: 100%;\n  z-index: 5;\n"])));
            function nh(e) {
                var n = e.children;
                return Object(os.jsx)(eh, { children: n });
            }
            var th = c.default.div(_m || (_m = Object(qa.a)(["\n  position: relative;\n"]))),
                rh = Object(c.default)(R)(zm || (zm = Object(qa.a)(["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"])), function (e) {
                    return e.theme.colors.primary;
                }),
                ah = c.default.span(
                    qm ||
                        (qm = Object(qa.a)([
                            "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
                        ]))
                );
            function ih(e) {
                var n,
                    t,
                    r,
                    a,
                    i,
                    o,
                    c,
                    s,
                    l = e.noLiquidity,
                    u = e.price,
                    d = e.currencies,
                    p = e.parsedAmounts,
                    b = e.poolTokenPercentage,
                    f = e.onAdd;
                return Object(os.jsxs)(os.Fragment, {
                    children: [
                        Object(os.jsxs)(ns, {
                            children: [
                                Object(os.jsxs)(R, { children: [null === (n = d[lm.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, " Deposited"] }),
                                Object(os.jsxs)(as, {
                                    children: [
                                        Object(os.jsx)(yp, { currency: d[lm.CURRENCY_A], style: { marginRight: "8px" } }),
                                        Object(os.jsx)(R, { children: null === (t = p[lm.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(6) }),
                                    ],
                                }),
                            ],
                        }),
                        Object(os.jsxs)(ns, {
                            children: [
                                Object(os.jsxs)(R, { children: [null === (r = d[lm.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol, " Deposited"] }),
                                Object(os.jsxs)(as, {
                                    children: [
                                        Object(os.jsx)(yp, { currency: d[lm.CURRENCY_B], style: { marginRight: "8px" } }),
                                        Object(os.jsx)(R, { children: null === (a = p[lm.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(6) }),
                                    ],
                                }),
                            ],
                        }),
                        Object(os.jsxs)(ns, {
                            children: [
                                Object(os.jsx)(R, { children: "Rates" }),
                                Object(os.jsx)(R, {
                                    children: "1 "
                                        .concat(null === (i = d[lm.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol, " = ")
                                        .concat(null === u || void 0 === u ? void 0 : u.toSignificant(4), " ")
                                        .concat(null === (o = d[lm.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol),
                                }),
                            ],
                        }),
                        Object(os.jsx)(ns, {
                            style: { justifyContent: "flex-end" },
                            children: Object(os.jsx)(R, {
                                children: "1 "
                                    .concat(null === (c = d[lm.CURRENCY_B]) || void 0 === c ? void 0 : c.symbol, " = ")
                                    .concat(null === u || void 0 === u ? void 0 : u.invert().toSignificant(4), " ")
                                    .concat(null === (s = d[lm.CURRENCY_A]) || void 0 === s ? void 0 : s.symbol),
                            }),
                        }),
                        Object(os.jsxs)(ns, { children: [Object(os.jsx)(R, { children: "Share of Pool:" }), Object(os.jsxs)(R, { children: [l ? "100" : null === b || void 0 === b ? void 0 : b.toSignificant(4), "%"] })] }),
                        Object(os.jsx)(X, { mt: "20px", onClick: f, children: l ? eu(250, "Create Pool & Supply") : eu(252, "Confirm Supply") }),
                    ],
                });
            }
            function oh(e) {
                var n,
                    t,
                    r,
                    a,
                    i,
                    o,
                    c,
                    s,
                    l = e.currencies,
                    u = e.noLiquidity,
                    d = e.poolTokenPercentage,
                    p = e.price;
                return Object(os.jsx)(Bc, {
                    gap: "md",
                    children: Object(os.jsxs)(rs, {
                        justify: "space-around",
                        gap: "4px",
                        children: [
                            Object(os.jsxs)(Bc, {
                                justify: "center",
                                children: [
                                    Object(os.jsx)(R, { children: null !== (n = null === p || void 0 === p ? void 0 : p.toSignificant(6)) && void 0 !== n ? n : "-" }),
                                    Object(os.jsxs)(R, {
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        pt: 1,
                                        children: [null === (t = l[lm.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol, " per ", null === (r = l[lm.CURRENCY_A]) || void 0 === r ? void 0 : r.symbol],
                                    }),
                                ],
                            }),
                            Object(os.jsxs)(Bc, {
                                justify: "center",
                                children: [
                                    Object(os.jsx)(R, { children: null !== (a = null === p || void 0 === p || null === (i = p.invert()) || void 0 === i ? void 0 : i.toSignificant(6)) && void 0 !== a ? a : "-" }),
                                    Object(os.jsxs)(R, {
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        pt: 1,
                                        children: [null === (o = l[lm.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " per ", null === (c = l[lm.CURRENCY_B]) || void 0 === c ? void 0 : c.symbol],
                                    }),
                                ],
                            }),
                            Object(os.jsxs)(Bc, {
                                justify: "center",
                                children: [
                                    Object(os.jsxs)(R, {
                                        children: [u && p ? "100" : null !== (s = (null === d || void 0 === d ? void 0 : d.lessThan(mc)) ? "<0.01" : null === d || void 0 === d ? void 0 : d.toFixed(2)) && void 0 !== s ? s : "0", "%"],
                                    }),
                                    Object(os.jsx)(R, { fontSize: "14px", color: "textSubtle", pt: 1, children: "Share of Pool" }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function ch(e) {
                var n,
                    t,
                    a,
                    i,
                    o,
                    c,
                    s,
                    l,
                    u,
                    d,
                    p,
                    b = e.match.params,
                    f = b.currencyIdA,
                    m = b.currencyIdB,
                    h = e.history,
                    y = Cc(),
                    x = y.account,
                    j = y.chainId,
                    v = y.library,
                    g = jd(f),
                    O = jd(m),
                    C = nu(),
                    w = Boolean(j && ((g && wo(g, Eo[j])) || (O && wo(O, Eo[j])))),
                    k = Ku(),
                    T = Um(),
                    E = T.independentField,
                    I = T.typedValue,
                    S = T.otherTypedValue,
                    N = (function (e, n) {
                        var t,
                            a,
                            i,
                            o,
                            c,
                            s,
                            l,
                            u = Cc(),
                            d = u.account,
                            p = u.chainId,
                            b = Um(),
                            f = b.independentField,
                            m = b.typedValue,
                            h = b.otherTypedValue,
                            y = f === lm.CURRENCY_A ? lm.CURRENCY_B : lm.CURRENCY_A,
                            x = Object(r.useMemo)(
                                function () {
                                    var t;
                                    return (t = {}), Object($a.a)(t, lm.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object($a.a)(t, lm.CURRENCY_B, null !== n && void 0 !== n ? n : void 0), t;
                                },
                                [e, n]
                            ),
                            j = Zf(x[lm.CURRENCY_A], x[lm.CURRENCY_B]),
                            v = Object(Wa.a)(j, 2),
                            g = v[0],
                            O = v[1],
                            C = uf(null === O || void 0 === O ? void 0 : O.liquidityToken),
                            w = g === Yf.NOT_EXISTS || Boolean(C && Li.a.equal(C.raw, Dm)),
                            k = wd(null !== d && void 0 !== d ? d : void 0, [x[lm.CURRENCY_A], x[lm.CURRENCY_B]]),
                            T = ((t = {}), Object($a.a)(t, lm.CURRENCY_A, k[0]), Object($a.a)(t, lm.CURRENCY_B, k[1]), t),
                            E = Tm(m, x[f]),
                            I = Object(r.useMemo)(
                                function () {
                                    if (w) return h && x[y] ? Tm(h, x[y]) : void 0;
                                    if (E) {
                                        var t = wf(E, p),
                                            r = [Cf(e, p), Cf(n, p)],
                                            a = r[0],
                                            i = r[1];
                                        if (a && i && t && O) {
                                            var o = y === lm.CURRENCY_B ? n : e,
                                                c = y === lm.CURRENCY_B ? O.priceOf(a).quote(t) : O.priceOf(i).quote(t);
                                            return o === Oo ? Ao.ether(c.raw) : c;
                                        }
                                    }
                                },
                                [w, h, x, y, E, e, p, n, O]
                            ),
                            S = ((a = {}), Object($a.a)(a, lm.CURRENCY_A, f === lm.CURRENCY_A ? E : I), Object($a.a)(a, lm.CURRENCY_B, f === lm.CURRENCY_A ? I : E), a),
                            N = Object(r.useMemo)(
                                function () {
                                    if (w) {
                                        var n = S[lm.CURRENCY_A],
                                            t = S[lm.CURRENCY_B];
                                        return n && t ? new Uo(n.currency, t.currency, n.raw, t.raw) : void 0;
                                    }
                                    var r = Cf(e, p);
                                    return O && r ? O.priceOf(r) : void 0;
                                },
                                [p, e, w, O, S]
                            ),
                            L = Object(r.useMemo)(
                                function () {
                                    var e = S[lm.CURRENCY_A],
                                        n = S[lm.CURRENCY_B],
                                        t = [wf(e, p), wf(n, p)],
                                        r = t[0],
                                        a = t[1];
                                    if (O && C && r && a) return O.getLiquidityMinted(C, r, a);
                                },
                                [S, p, O, C]
                            ),
                            R = Object(r.useMemo)(
                                function () {
                                    if (L && C) return new zo(L.raw, C.add(L).raw);
                                },
                                [L, C]
                            );
                        d || (c = "Connect Wallet"),
                            g === Yf.INVALID && (c = null !== (s = c) && void 0 !== s ? s : eu(136, "Invalid pair")),
                            (S[lm.CURRENCY_A] && S[lm.CURRENCY_B]) || (c = null !== (l = c) && void 0 !== l ? l : eu(84, "Enter an amount"));
                        var M,
                            A,
                            D = S[lm.CURRENCY_A],
                            U = S[lm.CURRENCY_B];
                        return (
                            D &&
                                (null === T || void 0 === T || null === (i = T[lm.CURRENCY_A]) || void 0 === i ? void 0 : i.lessThan(D)) &&
                                (c = "Insufficient ".concat(null === (M = x[lm.CURRENCY_A]) || void 0 === M ? void 0 : M.symbol, " balance")),
                            U &&
                                (null === T || void 0 === T || null === (o = T[lm.CURRENCY_B]) || void 0 === o ? void 0 : o.lessThan(U)) &&
                                (c = "Insufficient ".concat(null === (A = x[lm.CURRENCY_B]) || void 0 === A ? void 0 : A.symbol, " balance")),
                            { dependentField: y, currencies: x, pair: O, pairState: g, currencyBalances: T, parsedAmounts: S, price: N, noLiquidity: w, liquidityMinted: L, poolTokenPercentage: R, error: c }
                        );
                    })(null !== g && void 0 !== g ? g : void 0, null !== O && void 0 !== O ? O : void 0),
                    L = N.dependentField,
                    M = N.currencies,
                    A = N.pair,
                    D = N.pairState,
                    U = N.currencyBalances,
                    B = N.parsedAmounts,
                    P = N.price,
                    F = N.noLiquidity,
                    _ = N.liquidityMinted,
                    z = N.poolTokenPercentage,
                    q = N.error,
                    Y = (function (e) {
                        var n = Object(Xa.c)();
                        return {
                            onFieldAInput: Object(r.useCallback)(
                                function (t) {
                                    n(xm({ field: lm.CURRENCY_A, typedValue: t, noLiquidity: !0 === e }));
                                },
                                [n, e]
                            ),
                            onFieldBInput: Object(r.useCallback)(
                                function (t) {
                                    n(xm({ field: lm.CURRENCY_B, typedValue: t, noLiquidity: !0 === e }));
                                },
                                [n, e]
                            ),
                        };
                    })(F),
                    H = Y.onFieldAInput,
                    V = Y.onFieldBInput,
                    Z = !q,
                    W = Object(r.useState)(!1),
                    Q = Object(Wa.a)(W, 2),
                    G = Q[0],
                    K = Q[1],
                    J = Object(r.useState)(!1),
                    $ = Object(Wa.a)(J, 2),
                    ee = $[0],
                    ne = $[1],
                    te = $u(),
                    re = Object(Wa.a)(te, 1)[0],
                    ae = Ju(),
                    ie = Object(Wa.a)(ae, 1)[0],
                    ce = Object(r.useState)(""),
                    se = Object(Wa.a)(ce, 2),
                    le = se[0],
                    ue = se[1],
                    de = ((a = {}), Object($a.a)(a, E, I), Object($a.a)(a, L, F ? S : null !== (n = null === (t = B[L]) || void 0 === t ? void 0 : t.toSignificant(6)) && void 0 !== n ? n : ""), a),
                    pe = [lm.CURRENCY_A, lm.CURRENCY_B].reduce(function (e, n) {
                        return Object(Si.a)(Object(Si.a)({}, e), {}, Object($a.a)({}, n, Bm(U[n])));
                    }, {}),
                    be = [lm.CURRENCY_A, lm.CURRENCY_B].reduce(function (e, n) {
                        var t, r;
                        return Object(Si.a)(Object(Si.a)({}, e), {}, Object($a.a)({}, n, null === (t = pe[n]) || void 0 === t ? void 0 : t.equalTo(null !== (r = B[n]) && void 0 !== r ? r : "0")));
                    }, {}),
                    fe = ym(B[lm.CURRENCY_A], Ko),
                    me = Object(Wa.a)(fe, 2),
                    he = me[0],
                    ye = me[1],
                    xe = ym(B[lm.CURRENCY_B], Ko),
                    je = Object(Wa.a)(xe, 2),
                    ve = je[0],
                    ge = je[1],
                    Oe = im();
                function Ce() {
                    return we.apply(this, arguments);
                }
                function we() {
                    return (we = Object(Za.a)(
                        Va.a.mark(function e() {
                            var n, t, r, a, i, o, c, s, l, u, d, p, b, f, m, h, y;
                            return Va.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (j && v && x) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (((t = Os(0, v, x)), (r = B[lm.CURRENCY_A]), (a = B[lm.CURRENCY_B]), r && a && g && O)) {
                                                e.next = 6;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            return (
                                                (n = {}),
                                                Object($a.a)(n, lm.CURRENCY_A, vs(r, F ? 0 : ie)[0]),
                                                Object($a.a)(n, lm.CURRENCY_B, vs(a, F ? 0 : ie)[0]),
                                                (i = n),
                                                (o = Math.ceil(Date.now() / 1e3) + re),
                                                g === Oo || O === Oo
                                                    ? ((b = O === Oo),
                                                      (c = t.estimateGas.addLiquidityETH),
                                                      (s = t.addLiquidityETH),
                                                      (l = [
                                                          null !== (d = null === (p = Cf(b ? g : O, j)) || void 0 === p ? void 0 : p.address) && void 0 !== d ? d : "",
                                                          (b ? r : a).raw.toString(),
                                                          i[b ? lm.CURRENCY_A : lm.CURRENCY_B].toString(),
                                                          i[b ? lm.CURRENCY_B : lm.CURRENCY_A].toString(),
                                                          x,
                                                          o,
                                                      ]),
                                                      (u = bs.a.from((b ? a : r).raw.toString())))
                                                    : ((c = t.estimateGas.addLiquidity),
                                                      (s = t.addLiquidity),
                                                      (l = [
                                                          null !== (f = null === (m = Cf(g, j)) || void 0 === m ? void 0 : m.address) && void 0 !== f ? f : "",
                                                          null !== (h = null === (y = Cf(O, j)) || void 0 === y ? void 0 : y.address) && void 0 !== h ? h : "",
                                                          r.raw.toString(),
                                                          a.raw.toString(),
                                                          i[lm.CURRENCY_A].toString(),
                                                          i[lm.CURRENCY_B].toString(),
                                                          x,
                                                          o,
                                                      ]),
                                                      (u = null)),
                                                ne(!0),
                                                (e.next = 12),
                                                c
                                                    .apply(void 0, Object(Ii.a)(l).concat([u ? { value: u } : {}]))
                                                    .then(function (e) {
                                                        return s.apply(void 0, Object(Ii.a)(l).concat([Object(Si.a)(Object(Si.a)({}, u ? { value: u } : {}), {}, { gasLimit: js(e) })])).then(function (e) {
                                                            var n, t, r, a;
                                                            ne(!1),
                                                                Oe(e, {
                                                                    summary: "Add "
                                                                        .concat(null === (n = B[lm.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(3), " ")
                                                                        .concat(null === (t = M[lm.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " and ")
                                                                        .concat(null === (r = B[lm.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(3), " ")
                                                                        .concat(null === (a = M[lm.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol),
                                                                }),
                                                                ue(e.hash);
                                                        });
                                                    })
                                                    .catch(function (e) {
                                                        ne(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e);
                                                    })
                                            );
                                        case 12:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                var ke = function () {
                        var e, n, t, r;
                        return F
                            ? Object(os.jsx)(Bc, {
                                  gap: "20px",
                                  children: Object(os.jsx)(wl, {
                                      mt: "20px",
                                      borderRadius: "20px",
                                      children: Object(os.jsxs)(ts, {
                                          children: [
                                              Object(os.jsx)(R, {
                                                  fontSize: "48px",
                                                  mr: "8px",
                                                  children: "".concat(null === (e = M[lm.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (n = M[lm.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol),
                                              }),
                                              Object(os.jsx)(Ub, { currency0: M[lm.CURRENCY_A], currency1: M[lm.CURRENCY_B], size: 30 }),
                                          ],
                                      }),
                                  }),
                              })
                            : Object(os.jsxs)(Bc, {
                                  gap: "20px",
                                  children: [
                                      Object(os.jsxs)(ts, {
                                          style: { marginTop: "20px" },
                                          children: [
                                              Object(os.jsx)(R, { fontSize: "48px", mr: "8px", children: null === _ || void 0 === _ ? void 0 : _.toSignificant(6) }),
                                              Object(os.jsx)(Ub, { currency0: M[lm.CURRENCY_A], currency1: M[lm.CURRENCY_B], size: 30 }),
                                          ],
                                      }),
                                      Object(os.jsx)(is, {
                                          children: Object(os.jsx)(R, {
                                              fontSize: "24px",
                                              children: "".concat(null === (t = M[lm.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, "/").concat(null === (r = M[lm.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol, " Pool Tokens"),
                                          }),
                                      }),
                                      Object(os.jsx)(R, {
                                          small: !0,
                                          textAlign: "left",
                                          padding: "8px 0 0 0 ",
                                          style: { fontStyle: "italic" },
                                          children: "Output is estimated. If the price changes by more than ".concat(ie / 100, "% your transaction will revert."),
                                      }),
                                  ],
                              });
                    },
                    Te = function () {
                        return Object(os.jsx)(ih, { price: P, currencies: M, parsedAmounts: B, noLiquidity: F, onAdd: Ce, poolTokenPercentage: z });
                    },
                    Ee = "Supplying "
                        .concat(null === (i = B[lm.CURRENCY_A]) || void 0 === i ? void 0 : i.toSignificant(6), " ")
                        .concat(null === (o = M[lm.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " and ")
                        .concat(null === (c = B[lm.CURRENCY_B]) || void 0 === c ? void 0 : c.toSignificant(6), " ")
                        .concat(null === (s = M[lm.CURRENCY_B]) || void 0 === s ? void 0 : s.symbol),
                    Ie = Object(r.useCallback)(
                        function (e) {
                            var n = df(e);
                            n === m ? h.push("/add/".concat(m, "/").concat(f)) : h.push("/add/".concat(n, "/").concat(m));
                        },
                        [m, h, f]
                    ),
                    Se = Object(r.useCallback)(
                        function (e) {
                            var n = df(e);
                            f === n ? (m ? h.push("/add/".concat(m, "/").concat(n)) : h.push("/add/".concat(n))) : h.push("/add/".concat(f || "BNB", "/").concat(n));
                        },
                        [f, h, m]
                    ),
                    Ne = Object(r.useCallback)(
                        function () {
                            K(!1), le && H(""), ue("");
                        },
                        [H, le]
                    );
                return Object(os.jsxs)(os.Fragment, {
                    children: [
                        Object(os.jsx)(au, { activeIndex: 1 }),
                        Object(os.jsxs)(nh, {
                            children: [
                                Object(os.jsx)(cf, { adding: !0 }),
                                Object(os.jsxs)(th, {
                                    children: [
                                        Object(os.jsx)(Gl, {
                                            isOpen: G,
                                            onDismiss: Ne,
                                            attemptingTxn: ee,
                                            hash: le,
                                            content: function () {
                                                return Object(os.jsx)(Zl, { title: F ? C(1154, "You are creating a pool") : C(1156, "You will receive"), onDismiss: Ne, topContent: ke, bottomContent: Te });
                                            },
                                            pendingText: Ee,
                                        }),
                                        Object(os.jsx)(He, {
                                            children: Object(os.jsxs)(Bc, {
                                                gap: "20px",
                                                children: [
                                                    F &&
                                                        Object(os.jsx)(Uc, {
                                                            children: Object(os.jsx)(Ym, {
                                                                children: Object(os.jsxs)(Bc, {
                                                                    gap: "12px",
                                                                    children: [
                                                                        Object(os.jsx)(R, { children: C(1158, "You are the first liquidity provider.") }),
                                                                        Object(os.jsx)(R, { children: C(1160, "The ratio of tokens you add will set the price of this pool.") }),
                                                                        Object(os.jsx)(R, { children: C(1162, "Once you are happy with the rate click supply to review.") }),
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                    Object(os.jsx)(nf, {
                                                        value: de[lm.CURRENCY_A],
                                                        onUserInput: H,
                                                        onMax: function () {
                                                            var e, n;
                                                            H(null !== (e = null === (n = pe[lm.CURRENCY_A]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "");
                                                        },
                                                        onCurrencySelect: Ie,
                                                        showMaxButton: !be[lm.CURRENCY_A],
                                                        currency: M[lm.CURRENCY_A],
                                                        id: "add-liquidity-input-tokena",
                                                        showCommonBases: !1,
                                                    }),
                                                    Object(os.jsx)(Uc, { children: Object(os.jsx)(oe, { color: "textSubtle" }) }),
                                                    Object(os.jsx)(nf, {
                                                        value: de[lm.CURRENCY_B],
                                                        onUserInput: V,
                                                        onCurrencySelect: Se,
                                                        onMax: function () {
                                                            var e, n;
                                                            V(null !== (e = null === (n = pe[lm.CURRENCY_B]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "");
                                                        },
                                                        showMaxButton: !be[lm.CURRENCY_B],
                                                        currency: M[lm.CURRENCY_B],
                                                        id: "add-liquidity-input-tokenb",
                                                        showCommonBases: !1,
                                                    }),
                                                    M[lm.CURRENCY_A] &&
                                                        M[lm.CURRENCY_B] &&
                                                        D !== Yf.INVALID &&
                                                        Object(os.jsxs)("div", {
                                                            children: [
                                                                Object(os.jsx)(R, {
                                                                    style: { textTransform: "uppercase", fontWeight: 600 },
                                                                    color: "textSubtle",
                                                                    fontSize: "12px",
                                                                    mb: "2px",
                                                                    children: F ? C(1164, "Initial prices and pool share") : C(1166, "Prices and pool share"),
                                                                }),
                                                                Object(os.jsx)(Ym, { children: Object(os.jsx)(oh, { currencies: M, poolTokenPercentage: z, noLiquidity: F, price: P }) }),
                                                            ],
                                                        }),
                                                    x
                                                        ? Object(os.jsxs)(Bc, {
                                                              gap: "md",
                                                              children: [
                                                                  (he === sm.NOT_APPROVED || he === sm.PENDING || ve === sm.NOT_APPROVED || ve === sm.PENDING) &&
                                                                      Z &&
                                                                      Object(os.jsxs)(ns, {
                                                                          children: [
                                                                              he !== sm.APPROVED &&
                                                                                  Object(os.jsx)(X, {
                                                                                      onClick: ye,
                                                                                      disabled: he === sm.PENDING,
                                                                                      style: { width: ve !== sm.APPROVED ? "48%" : "100%" },
                                                                                      children:
                                                                                          he === sm.PENDING
                                                                                              ? Object(os.jsxs)(ah, { children: ["Approving ", null === (l = M[lm.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol] })
                                                                                              : "Approve ".concat(null === (u = M[lm.CURRENCY_A]) || void 0 === u ? void 0 : u.symbol),
                                                                                  }),
                                                                              ve !== sm.APPROVED &&
                                                                                  Object(os.jsx)(X, {
                                                                                      onClick: ge,
                                                                                      disabled: ve === sm.PENDING,
                                                                                      style: { width: he !== sm.APPROVED ? "48%" : "100%" },
                                                                                      children:
                                                                                          ve === sm.PENDING
                                                                                              ? Object(os.jsxs)(ah, { children: ["Approving ", null === (d = M[lm.CURRENCY_B]) || void 0 === d ? void 0 : d.symbol] })
                                                                                              : "Approve ".concat(null === (p = M[lm.CURRENCY_B]) || void 0 === p ? void 0 : p.symbol),
                                                                                  }),
                                                                          ],
                                                                      }),
                                                                  Object(os.jsx)(X, {
                                                                      onClick: function () {
                                                                          k ? Ce() : K(!0);
                                                                      },
                                                                      disabled: !Z || he !== sm.APPROVED || ve !== sm.APPROVED,
                                                                      variant: !Z && B[lm.CURRENCY_A] && B[lm.CURRENCY_B] ? "danger" : "primary",
                                                                      width: "100%",
                                                                      children: null !== q && void 0 !== q ? q : "Supply",
                                                                  }),
                                                              ],
                                                          })
                                                        : Object(os.jsx)($m, { width: "100%" }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        A && !F && D !== Yf.INVALID ? Object(os.jsx)(Bc, { style: { minWidth: "20rem", marginTop: "1rem" }, children: Object(os.jsx)(zf, { showUnwrapped: w, pair: A }) }) : null,
                    ],
                });
            }
            var sh = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
            function lh(e) {
                var n = e.match.params.currencyIdA.match(sh);
                return (null === n || void 0 === n ? void 0 : n.length) ? Object(os.jsx)(Qa.a, { to: "/add/".concat(n[1], "/").concat(n[2]) }) : Object(os.jsx)(ch, Object(Si.a)({}, e));
            }
            function uh(e) {
                var n = e.match.params,
                    t = n.currencyIdA,
                    r = n.currencyIdB;
                return t.toLowerCase() === r.toLowerCase() ? Object(os.jsx)(Qa.a, { to: "/add/".concat(t) }) : Object(os.jsx)(ch, Object(Si.a)({}, e));
            }
            var dh = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
            function ph(e) {
                var n = e.match.params.tokens;
                if (!dh.test(n)) return Object(os.jsx)(Qa.a, { to: "/pool" });
                var t = n.split("-"),
                    r = Object(Wa.a)(t, 2),
                    a = r[0],
                    i = r[1];
                return Object(os.jsx)(Qa.a, { to: "/remove/".concat(a, "/").concat(i) });
            }
            var bh,
                fh,
                mh,
                hh,
                yh,
                xh,
                jh = c.default.div(bh || (bh = Object(qa.a)(["\n  padding: 0 4px;\n"]))),
                vh = c.default.div(
                    fh ||
                        (fh = Object(qa.a)([
                            "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ",
                            ":first-child {\n    padding-left: 0;\n  }\n\n  ",
                            ":last-child {\n    padding-right: 0;\n  }\n\n  ",
                            " {\n    flex-direction: row;\n  }\n",
                        ])),
                    jh,
                    jh,
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                gh = [
                    { label: "0.1%", value: 0.1 },
                    { label: "0.5%", value: 0.5 },
                    { label: "1%", value: 1 },
                ],
                Oh = function (e) {
                    var n = e.translateString,
                        t = Ju(),
                        a = Object(Wa.a)(t, 2),
                        i = a[0],
                        o = a[1],
                        c = Object(r.useState)(i / 100),
                        s = Object(Wa.a)(c, 2),
                        l = s[0],
                        u = s[1],
                        d = Object(r.useState)(null),
                        p = Object(Wa.a)(d, 2),
                        b = p[0],
                        f = p[1];
                    return (
                        Object(r.useEffect)(
                            function () {
                                try {
                                    var e = 100 * l;
                                    !Number.isNaN(e) && e > 0 && e < 100e2 ? (o(e), f(null)) : f(n(1144, "Enter a valid slippage percentage"));
                                } catch (t) {
                                    f(n(1144, "Enter a valid slippage percentage"));
                                }
                            },
                            [l, f, o, n]
                        ),
                        Object(r.useEffect)(
                            function () {
                                i < 50 ? f(n(1146, "Your transaction may fail")) : i > 500 && f(n(1148, "Your transaction may be frontrun"));
                            },
                            [i, f, n]
                        ),
                        Object(os.jsxs)(ye, {
                            mb: "16px",
                            children: [
                                Object(os.jsxs)(xe, {
                                    alignItems: "center",
                                    mb: "8px",
                                    children: [
                                        Object(os.jsx)(R, { bold: !0, children: n(88, "Slippage tolerance") }),
                                        Object(os.jsx)(lp, { text: n(186, "Your transaction will revert if the price changes unfavorably by more than this percentage.") }),
                                    ],
                                }),
                                Object(os.jsxs)(vh, {
                                    children: [
                                        Object(os.jsx)(xe, {
                                            mb: ["8px", "8px", 0],
                                            mr: [0, 0, "8px"],
                                            children: gh.map(function (e) {
                                                var n = e.label,
                                                    t = e.value;
                                                return Object(os.jsx)(
                                                    jh,
                                                    {
                                                        children: Object(os.jsx)(X, {
                                                            scale: "nm",
                                                            variant: l === t ? "primary" : "tertiary",
                                                            onClick: function () {
                                                                return u(t);
                                                            },
                                                            children: n,
                                                        }),
                                                    },
                                                    t
                                                );
                                            }),
                                        }),
                                        Object(os.jsxs)(xe, {
                                            alignItems: "center",
                                            children: [
                                                Object(os.jsx)(jh, {
                                                    children: Object(os.jsx)(Le, {
                                                        type: "number",
                                                        scale: "lg",
                                                        step: 0.1,
                                                        min: 0.1,
                                                        placeholder: "5%",
                                                        value: l,
                                                        onChange: function (e) {
                                                            var n = e.target.value;
                                                            u(parseFloat(n));
                                                        },
                                                        isWarning: null !== b,
                                                    }),
                                                }),
                                                Object(os.jsx)(jh, { children: Object(os.jsx)(R, { fontSize: "18px", children: "%" }) }),
                                            ],
                                        }),
                                    ],
                                }),
                                b && Object(os.jsx)(R, { mt: "8px", color: "failure", children: b }),
                            ],
                        })
                    );
                },
                Ch = c.default.div(mh || (mh = Object(qa.a)(["\n  align-items: center;\n  display: inline-flex;\n\n  & > ", " {\n    max-width: 100px;\n  }\n"])), Le),
                wh = function (e) {
                    var n = e.translateString,
                        t = $u(),
                        a = Object(Wa.a)(t, 2),
                        i = a[0],
                        o = a[1],
                        c = Object(r.useState)(i / 60),
                        s = Object(Wa.a)(c, 2),
                        l = s[0],
                        u = s[1],
                        d = Object(r.useState)(null),
                        p = Object(Wa.a)(d, 2),
                        b = p[0],
                        f = p[1];
                    return (
                        Object(r.useEffect)(
                            function () {
                                try {
                                    var e = 60 * l;
                                    !Number.isNaN(e) && e > 0 ? (o(e), f(null)) : f(n(1150, "Enter a valid deadline"));
                                } catch (t) {
                                    f(n(1150, "Enter a valid deadline"));
                                }
                            },
                            [l, f, o, n]
                        ),
                        Object(os.jsxs)(ye, {
                            mb: "16px",
                            children: [
                                Object(os.jsxs)(xe, {
                                    alignItems: "center",
                                    mb: "8px",
                                    children: [Object(os.jsx)(R, { bold: !0, children: n(90, "Transaction deadline") }), Object(os.jsx)(lp, { text: n(188, "Your transaction will revert if it is pending for more than this long.") })],
                                }),
                                Object(os.jsxs)(Ch, {
                                    children: [
                                        Object(os.jsx)(Le, {
                                            type: "number",
                                            step: "1",
                                            min: "1",
                                            value: l,
                                            onChange: function (e) {
                                                var n = e.target.value;
                                                u(parseInt(n, 10));
                                            },
                                        }),
                                        Object(os.jsx)(R, { fontSize: "14px", ml: "8px", children: "Minutes" }),
                                    ],
                                }),
                                b && Object(os.jsx)(R, { mt: "8px", color: "failure", children: b }),
                            ],
                        })
                    );
                },
                kh = function (e) {
                    var n = e.translateString,
                        t = nr(),
                        a = t.isSm,
                        i = t.isXs,
                        o = (function () {
                            var e = Object(Xa.c)(),
                                n = Object(Xa.d)(function (e) {
                                    return e.user.audioPlay;
                                }),
                                t = Object(r.useCallback)(
                                    function () {
                                        e(n ? Zu() : Wu());
                                    },
                                    [n, e]
                                );
                            return [n, t];
                        })(),
                        c = Object(Wa.a)(o, 2),
                        s = c[0],
                        l = c[1];
                    return Object(os.jsxs)(ye, {
                        mb: "16px",
                        children: [
                            Object(os.jsx)(xe, { alignItems: "center", mb: "8px", children: Object(os.jsx)(R, { bold: !0, children: n(999, "Audio") }) }),
                            Object(os.jsx)(ye, { children: Object(os.jsx)(Wt, { scale: a || i ? "sm" : "md", checked: s, onChange: l }) }),
                        ],
                    });
                },
                Th = function () {
                    return null;
                },
                Eh = function (e) {
                    var n = e.onDismiss,
                        t = void 0 === n ? Th : n,
                        r = e.translateString;
                    return Object(os.jsxs)(fr, { title: r(1200, "Settings"), onDismiss: t, children: [Object(os.jsx)(Oh, { translateString: r }), Object(os.jsx)(wh, { translateString: r }), Object(os.jsx)(kh, { translateString: r })] });
                },
                Ih = function () {
                    return null;
                },
                Sh = function (e, n) {
                    return n.addedTime - e.addedTime;
                },
                Nh = function (e) {
                    var n = e.onDismiss,
                        t = void 0 === n ? Ih : n,
                        a = e.translateString,
                        i = Cc(),
                        o = i.account,
                        c = i.chainId,
                        s = om(),
                        l = Object(r.useMemo)(
                            function () {
                                return Object.values(s).filter(cm).sort(Sh);
                            },
                            [s]
                        );
                    return Object(os.jsxs)(fr, {
                        title: a(1202, "Recent transactions"),
                        onDismiss: t,
                        children: [
                            !o &&
                                Object(os.jsxs)(xe, {
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    children: [
                                        Object(os.jsx)(R, { mb: "8px", bold: !0, children: "Please connect your wallet to view your recent transactions" }),
                                        Object(os.jsx)(X, { variant: "tertiary", scale: "sm", onClick: t, children: "Close" }),
                                    ],
                                }),
                            o &&
                                c &&
                                0 === l.length &&
                                Object(os.jsxs)(xe, {
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    children: [Object(os.jsx)(R, { mb: "8px", bold: !0, children: "No recent transactions" }), Object(os.jsx)(X, { variant: "tertiary", scale: "sm", onClick: t, children: "Close" })],
                                }),
                            o &&
                                c &&
                                l.map(function (e) {
                                    var n = e.hash,
                                        t = e.summary,
                                        r = (function (e) {
                                            var n = e.hash,
                                                t = e.receipt;
                                            return n
                                                ? n && 1 === (null === t || void 0 === t ? void 0 : t.status)
                                                    ? { icon: Object(os.jsx)(I, { color: "success" }), color: "success" }
                                                    : { icon: Object(os.jsx)(S, { color: "failure" }), color: "failure" }
                                                : { icon: Object(os.jsx)(ol, {}), color: "text" };
                                        })(e),
                                        a = r.icon,
                                        i = r.color;
                                    return Object(os.jsx)(os.Fragment, {
                                        children: Object(os.jsxs)(
                                            xe,
                                            { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(os.jsx)(Tn, { href: ys(c, n, "transaction"), color: i, children: null !== t && void 0 !== t ? t : n }), a] },
                                            n
                                        ),
                                    });
                                }),
                        ],
                    });
                },
                Lh = c.default.div(hh || (hh = Object(qa.a)(["\n  // border-bottom: 1px solid ", ";\n  padding: 20px 24px 0 24px;\n"])), function (e) {
                    return e.theme.colors.borderColor;
                }),
                Rh = c.default.div(yh || (yh = Object(qa.a)(["\n  flex: 1;\n"]))),
                Mh = function (e) {
                    var n = e.title,
                        t = (e.description, e.children),
                        r = nu(),
                        a = kr(Object(os.jsx)(Eh, { translateString: r })),
                        i = Object(Wa.a)(a, 1)[0],
                        o = kr(Object(os.jsx)(Nh, { translateString: r })),
                        c = Object(Wa.a)(o, 1)[0];
                    return Object(os.jsxs)(Lh, {
                        children: [
                            Object(os.jsxs)(xe, {
                                alignItems: "center",
                                children: [
                                    Object(os.jsx)(Rh, { children: Object(os.jsx)(un, { mb: "0", children: n }) }),
                                    Object(os.jsx)(ie, { scale: "nm", variant: "text", onClick: i, title: r(1200, "Settings"), children: Object(os.jsx)(me, { width: "24px", color: "currentColor" }) }),
                                    Object(os.jsx)(ie, { scale: "nm", variant: "text", onClick: c, title: r(1202, "Recent transactions"), children: Object(os.jsx)(be, { width: "24px", color: "currentColor" }) }),
                                ],
                            }),
                            t && Object(os.jsx)(R, { mt: "16px", children: t }),
                        ],
                    });
                };
            function Ah() {
                var e = Object(r.useContext)(c.ThemeContext),
                    n = Cc().account,
                    t = nu(),
                    a = (function () {
                        var e = Cc().chainId,
                            n = md(),
                            t = Object(r.useMemo)(
                                function () {
                                    var n;
                                    return e && null !== (n = dc[e]) && void 0 !== n ? n : [];
                                },
                                [e]
                            ),
                            a = Object(r.useMemo)(
                                function () {
                                    return e
                                        ? Uu()(Object.keys(n), function (t) {
                                              var r,
                                                  a = n[t];
                                              return (null !== (r = uc[e]) && void 0 !== r ? r : [])
                                                  .map(function (e) {
                                                      return e.address === a.address ? null : [e, a];
                                                  })
                                                  .filter(function (e) {
                                                      return null !== e;
                                                  });
                                          })
                                        : [];
                                },
                                [n, e]
                            ),
                            i = Object(Xa.d)(function (e) {
                                return e.user.pairs;
                            }),
                            o = Object(r.useMemo)(
                                function () {
                                    if (!e || !i) return [];
                                    var n = i[e];
                                    return n
                                        ? Object.keys(n).map(function (e) {
                                              return [Xu(n[e].token0), Xu(n[e].token1)];
                                          })
                                        : [];
                                },
                                [i, e]
                            ),
                            c = Object(r.useMemo)(
                                function () {
                                    return o.concat(a).concat(t);
                                },
                                [a, t, o]
                            );
                        return Object(r.useMemo)(
                            function () {
                                var e = c.reduce(function (e, n) {
                                    var t = Object(Wa.a)(n, 2),
                                        r = t[0],
                                        a = t[1],
                                        i = r.sortsBefore(a),
                                        o = i ? "".concat(r.address, ":").concat(a.address) : "".concat(a.address, ":").concat(r.address);
                                    return e[o] || (e[o] = i ? [r, a] : [a, r]), e;
                                }, {});
                                return Object.keys(e).map(function (n) {
                                    return e[n];
                                });
                            },
                            [c]
                        );
                    })(),
                    i = Object(r.useMemo)(
                        function () {
                            return a.map(function (e) {
                                return { liquidityToken: td(e), tokens: e };
                            });
                        },
                        [a]
                    ),
                    o = gd(
                        null !== n && void 0 !== n ? n : void 0,
                        Object(r.useMemo)(
                            function () {
                                return i.map(function (e) {
                                    return e.liquidityToken;
                                });
                            },
                            [i]
                        )
                    ),
                    s = Object(Wa.a)(o, 2),
                    l = s[0],
                    u = s[1],
                    d = Object(r.useMemo)(
                        function () {
                            return i.filter(function (e) {
                                var n,
                                    t = e.liquidityToken;
                                return null === (n = l[t.address]) || void 0 === n ? void 0 : n.greaterThan("0");
                            });
                        },
                        [i, l]
                    ),
                    p = Vf(
                        d.map(function (e) {
                            return e.tokens;
                        })
                    ),
                    b =
                        u ||
                        (null === p || void 0 === p ? void 0 : p.length) < d.length ||
                        (null === p || void 0 === p
                            ? void 0
                            : p.some(function (e) {
                                  return !e;
                              })),
                    m = p
                        .map(function (e) {
                            return Object(Wa.a)(e, 2)[1];
                        })
                        .filter(function (e) {
                            return Boolean(e);
                        });
                return Object(os.jsxs)(os.Fragment, {
                    children: [
                        Object(os.jsx)(au, { activeIndex: 1 }),
                        Object(os.jsxs)(nh, {
                            children: [
                                Object(os.jsx)(Mh, {
                                    title: t(262, "Liquidity"),
                                    description: t(1168, "Add liquidity to receive LP tokens"),
                                    children: Object(os.jsx)(X, { id: "join-pool-button", as: f.b, to: "/add/BNB", children: t(168, "Add Liquidity") }),
                                }),
                                Object(os.jsx)(Bc, {
                                    gap: "lg",
                                    justify: "center",
                                    children: Object(os.jsx)(He, {
                                        children: Object(os.jsxs)(Bc, {
                                            gap: "12px",
                                            style: { width: "100%" },
                                            children: [
                                                Object(os.jsxs)(ns, {
                                                    padding: "0 8px",
                                                    children: [
                                                        Object(os.jsx)(R, { color: e.colors.text, children: t(107, "Your Liquidity") }),
                                                        Object(os.jsx)(lp, {
                                                            text: t(1170, "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below."),
                                                        }),
                                                    ],
                                                }),
                                                n
                                                    ? b
                                                        ? Object(os.jsx)(wl, { padding: "40px", children: Object(os.jsx)(R, { color: "textDisabled", textAlign: "center", children: Object(os.jsx)(Rf, { children: "Loading" }) }) })
                                                        : (null === m || void 0 === m ? void 0 : m.length) > 0
                                                        ? Object(os.jsx)(os.Fragment, {
                                                              children: m.map(function (e) {
                                                                  return Object(os.jsx)(qf, { pair: e }, e.liquidityToken.address);
                                                              }),
                                                          })
                                                        : Object(os.jsx)(wl, { padding: "40px", children: Object(os.jsx)(R, { color: "textDisabled", textAlign: "center", children: t(104, "No liquidity found.") }) })
                                                    : Object(os.jsx)(wl, { padding: "40px", children: Object(os.jsx)(R, { color: "textDisabled", textAlign: "center", children: t(156, "Connect to a wallet to view your liquidity.") }) }),
                                                Object(os.jsxs)("div", {
                                                    children: [
                                                        Object(os.jsxs)(R, {
                                                            fontSize: "14px",
                                                            style: { padding: ".5rem 0 .5rem 0" },
                                                            children: [t(106, "Don't see a pool you joined?"), " ", Object(os.jsx)(Ns, { id: "import-pool-link", to: "/find", children: t(108, "Import it.") })],
                                                        }),
                                                        Object(os.jsx)(R, { fontSize: "14px", style: { padding: ".5rem 0 .5rem 0" }, children: t(1172, "Or, if you staked your LP tokens in a farm, unstake them to see them here.") }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            }
            function Dh() {
                var e,
                    n = Cc().account,
                    t = Object(r.useState)(!1),
                    a = Object(Wa.a)(t, 2),
                    i = a[0],
                    o = a[1],
                    c = Object(r.useState)(xh.TOKEN1),
                    s = Object(Wa.a)(c, 2),
                    l = s[0],
                    u = s[1],
                    d = Object(r.useState)(Oo),
                    p = Object(Wa.a)(d, 2),
                    b = p[0],
                    f = p[1],
                    m = Object(r.useState)(null),
                    h = Object(Wa.a)(m, 2),
                    y = h[0],
                    x = h[1],
                    j = Zf(null !== b && void 0 !== b ? b : void 0, null !== y && void 0 !== y ? y : void 0),
                    v = Object(Wa.a)(j, 2),
                    g = v[0],
                    O = v[1],
                    C = (function () {
                        var e = Object(Xa.c)();
                        return Object(r.useCallback)(
                            function (n) {
                                e(Hu({ serializedPair: nd(n) }));
                            },
                            [e]
                        );
                    })(),
                    w = nu();
                Object(r.useEffect)(
                    function () {
                        O && C(O);
                    },
                    [O, C]
                );
                var k = g === Yf.NOT_EXISTS || Boolean(g === Yf.EXISTS && O && Li.a.equal(O.reserve0.raw, Li.a.BigInt(0)) && Li.a.equal(O.reserve1.raw, Li.a.BigInt(0))),
                    T = Cd(null !== n && void 0 !== n ? n : void 0, null === O || void 0 === O ? void 0 : O.liquidityToken),
                    E = Boolean(T && Li.a.greaterThan(T.raw, Li.a.BigInt(0))),
                    I = Object(r.useCallback)(
                        function (e) {
                            l === xh.TOKEN0 ? f(e) : x(e);
                        },
                        [l]
                    ),
                    S = Object(r.useCallback)(
                        function () {
                            o(!1);
                        },
                        [o]
                    ),
                    N = Object(os.jsx)(wl, {
                        padding: "45px 10px",
                        children: Object(os.jsx)(R, { style: { textAlign: "center" }, children: n ? w(208, "Select a token to find your liquidity.") : w(1174, "Connect to a wallet to find pools") }),
                    });
                return Object(os.jsxs)(os.Fragment, {
                    children: [
                        Object(os.jsx)(au, { activeIndex: 1 }),
                        Object(os.jsxs)(nh, {
                            children: [
                                Object(os.jsx)(of, {}),
                                Object(os.jsxs)(He, {
                                    children: [
                                        Object(os.jsxs)(Bc, {
                                            gap: "md",
                                            children: [
                                                Object(os.jsx)(X, {
                                                    onClick: function () {
                                                        o(!0), u(xh.TOKEN0);
                                                    },
                                                    startIcon: b ? Object(os.jsx)(yp, { currency: b, style: { marginRight: ".5rem" } }) : null,
                                                    endIcon: Object(os.jsx)(le, { width: "24px", color: "primary" }),
                                                    width: "100%",
                                                    children: b ? b.symbol : w(82, "Select a Token"),
                                                }),
                                                Object(os.jsx)(Uc, { children: Object(os.jsx)(oe, { color: "textSubtle" }) }),
                                                Object(os.jsx)(X, {
                                                    onClick: function () {
                                                        o(!0), u(xh.TOKEN1);
                                                    },
                                                    startIcon: y ? Object(os.jsx)(yp, { currency: y, style: { marginRight: ".5rem" } }) : null,
                                                    endIcon: Object(os.jsx)(le, { width: "24px", color: "primary" }),
                                                    width: "100%",
                                                    children: y ? y.symbol : w(82, "Select a Token"),
                                                }),
                                                E &&
                                                    Object(os.jsx)(Uc, {
                                                        style: { justifyItems: "center", backgroundColor: "", padding: "12px 0px", borderRadius: "12px" },
                                                        children: Object(os.jsx)(R, { style: { textAlign: "center" }, children: w(210, "Pool found!") }),
                                                    }),
                                                b && y
                                                    ? g === Yf.EXISTS
                                                        ? E && O
                                                            ? Object(os.jsx)(zf, { pair: O })
                                                            : Object(os.jsx)(wl, {
                                                                  padding: "45px 10px",
                                                                  children: Object(os.jsxs)(Bc, {
                                                                      gap: "sm",
                                                                      justify: "center",
                                                                      children: [
                                                                          Object(os.jsx)(R, { style: { textAlign: "center" }, children: w(212, "You don\u2019t have liquidity in this pool yet.") }),
                                                                          Object(os.jsx)(Ns, {
                                                                              to: "/add/".concat(df(b), "/").concat(df(y)),
                                                                              children: Object(os.jsx)(R, { style: { textAlign: "center" }, children: w(168, "Add Liquidity") }),
                                                                          }),
                                                                      ],
                                                                  }),
                                                              })
                                                        : k
                                                        ? Object(os.jsx)(wl, {
                                                              padding: "45px 10px",
                                                              children: Object(os.jsxs)(Bc, {
                                                                  gap: "sm",
                                                                  justify: "center",
                                                                  children: [
                                                                      Object(os.jsx)(R, { style: { textAlign: "center" }, children: w(214, "No pool found.") }),
                                                                      Object(os.jsx)(Ns, { to: "/add/".concat(df(b), "/").concat(df(y)), children: "Create pool." }),
                                                                  ],
                                                              }),
                                                          })
                                                        : g === Yf.INVALID
                                                        ? Object(os.jsx)(wl, {
                                                              padding: "45px 10px",
                                                              children: Object(os.jsx)(Bc, { gap: "sm", justify: "center", children: Object(os.jsx)(R, { style: { textAlign: "center" }, children: w(136, "Invalid pair.") }) }),
                                                          })
                                                        : g === Yf.LOADING
                                                        ? Object(os.jsx)(wl, {
                                                              padding: "45px 10px",
                                                              children: Object(os.jsx)(Bc, { gap: "sm", justify: "center", children: Object(os.jsxs)(R, { style: { textAlign: "center" }, children: ["Loading", Object(os.jsx)(ah, {})] }) }),
                                                          })
                                                        : null
                                                    : N,
                                            ],
                                        }),
                                        Object(os.jsx)(Lb, { isOpen: i, onCurrencySelect: I, onDismiss: S, showCommonBases: !0, selectedCurrency: null !== (e = l === xh.TOKEN0 ? y : b) && void 0 !== e ? e : void 0 }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
            !(function (e) {
                (e[(e.TOKEN0 = 0)] = "TOKEN0"), (e[(e.TOKEN1 = 1)] = "TOKEN1");
            })(xh || (xh = {}));
            var Uh,
                Bh,
                Ph = t(3),
                Fh = t(589),
                _h = t(590),
                zh = c.default.input(
                    Uh ||
                        (Uh = Object(qa.a)([
                            "\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ",
                            "px;\n    width: ",
                            "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ",
                            ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ",
                            "px;\n    width: ",
                            "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ",
                            ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ",
                            "px;\n    width: ",
                            "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ",
                            ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ",
                            ",\n      ",
                            "\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ",
                            ",\n      ",
                            "\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ",
                            ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ",
                            ";\n  }\n  &::-ms-fill-upper {\n    background: ",
                            ";\n  }\n",
                        ])),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    },
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.colors.tertiary;
                    }
                );
            function qh(e) {
                var n = e.value,
                    t = e.onChange,
                    a = e.min,
                    i = void 0 === a ? 0 : a,
                    o = e.step,
                    c = void 0 === o ? 1 : o,
                    s = e.max,
                    l = void 0 === s ? 100 : s,
                    u = e.size,
                    d = void 0 === u ? 28 : u,
                    p = Object(r.useCallback)(
                        function (e) {
                            t(parseInt(e.target.value));
                        },
                        [t]
                    );
                return Object(os.jsx)(zh, { size: d, type: "range", value: n, style: { width: "90%", marginLeft: 15, marginRight: 15, padding: "15px 0" }, onChange: p, "aria-labelledby": "input slider", step: c, min: i, max: l });
            }
            !(function (e) {
                (e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT"), (e.LIQUIDITY = "LIQUIDITY"), (e.CURRENCY_A = "CURRENCY_A"), (e.CURRENCY_B = "CURRENCY_B");
            })(Bh || (Bh = {}));
            var Yh,
                Hh,
                Vh = Object(Ec.b)("burn/typeInputBurn");
            function Zh() {
                return Object(Xa.d)(function (e) {
                    return e.burn;
                });
            }
            var Wh,
                Qh,
                Gh,
                Xh,
                Kh = c.default.div(Yh || (Yh = Object(qa.a)(["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding: 24px;\n"])), function (e) {
                    return e.theme.colors.borderColor;
                }),
                Jh = c.default.div(Hh || (Hh = Object(qa.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n"])));
            function $h(e) {
                var n,
                    t,
                    a,
                    i,
                    o,
                    s,
                    l,
                    u,
                    d,
                    p,
                    b,
                    f,
                    m,
                    h,
                    y = e.history,
                    x = e.match.params,
                    j = x.currencyIdA,
                    v = x.currencyIdB,
                    g = null !== (n = jd(j)) && void 0 !== n ? n : void 0,
                    O = null !== (t = jd(v)) && void 0 !== t ? t : void 0,
                    C = Cc(),
                    w = C.account,
                    k = C.chainId,
                    T = C.library,
                    E = nu(),
                    I = Object(r.useMemo)(
                        function () {
                            return [Cf(g, k), Cf(O, k)];
                        },
                        [g, O, k]
                    ),
                    S = Object(Wa.a)(I, 2),
                    N = S[0],
                    L = S[1],
                    M = Object(r.useContext)(c.ThemeContext),
                    A = Zh(),
                    D = A.independentField,
                    U = A.typedValue,
                    B = (function (e, n) {
                        var t,
                            r,
                            a,
                            i,
                            o,
                            c = Cc(),
                            s = c.account,
                            l = c.chainId,
                            u = Zh(),
                            d = u.independentField,
                            p = u.typedValue,
                            b = Zf(e, n),
                            f = Object(Wa.a)(b, 2)[1],
                            m = Od(null !== s && void 0 !== s ? s : void 0, [null === f || void 0 === f ? void 0 : f.liquidityToken]),
                            h = null === m || void 0 === m ? void 0 : m[null !== (t = null === f || void 0 === f || null === (r = f.liquidityToken) || void 0 === r ? void 0 : r.address) && void 0 !== t ? t : ""],
                            y = [Cf(e, l), Cf(n, l)],
                            x = y[0],
                            j = y[1],
                            v = ((a = {}), Object($a.a)(a, Bh.CURRENCY_A, x), Object($a.a)(a, Bh.CURRENCY_B, j), Object($a.a)(a, Bh.LIQUIDITY, null === f || void 0 === f ? void 0 : f.liquidityToken), a),
                            g = uf(null === f || void 0 === f ? void 0 : f.liquidityToken),
                            O = f && g && h && x && Li.a.greaterThanOrEqual(g.raw, h.raw) ? new Do(x, f.getLiquidityValue(x, g, h, !1).raw) : void 0,
                            C = f && g && h && j && Li.a.greaterThanOrEqual(g.raw, h.raw) ? new Do(j, f.getLiquidityValue(j, g, h, !1).raw) : void 0,
                            w = ((i = {}), Object($a.a)(i, Bh.CURRENCY_A, O), Object($a.a)(i, Bh.CURRENCY_B, C), i),
                            k = new zo("0", "100");
                        if (d === Bh.LIQUIDITY_PERCENT) k = new zo(p, "100");
                        else if (d === Bh.LIQUIDITY) {
                            if (null === f || void 0 === f ? void 0 : f.liquidityToken) {
                                var T = Tm(p, f.liquidityToken);
                                T && h && !T.greaterThan(h) && (k = new zo(T.raw, h.raw));
                            }
                        } else if (v[d]) {
                            var E = Tm(p, v[d]),
                                I = w[d];
                            E && I && !E.greaterThan(I) && (k = new zo(E.raw, I.raw));
                        }
                        var S,
                            N,
                            L =
                                ((o = {}),
                                Object($a.a)(o, Bh.LIQUIDITY_PERCENT, k),
                                Object($a.a)(o, Bh.LIQUIDITY, h && k && k.greaterThan("0") ? new Do(h.token, k.multiply(h.raw).quotient) : void 0),
                                Object($a.a)(o, Bh.CURRENCY_A, x && k && k.greaterThan("0") && O ? new Do(x, k.multiply(O.raw).quotient) : void 0),
                                Object($a.a)(o, Bh.CURRENCY_B, j && k && k.greaterThan("0") && C ? new Do(j, k.multiply(C.raw).quotient) : void 0),
                                o);
                        return s || (S = "Connect Wallet"), (L[Bh.LIQUIDITY] && L[Bh.CURRENCY_A] && L[Bh.CURRENCY_B]) || (S = null !== (N = S) && void 0 !== N ? N : "Enter an amount"), { pair: f, parsedAmounts: L, error: S };
                    })(null !== g && void 0 !== g ? g : void 0, null !== O && void 0 !== O ? O : void 0),
                    P = B.pair,
                    F = B.parsedAmounts,
                    _ = B.error,
                    z = (function () {
                        var e = Object(Xa.c)();
                        return {
                            onUserInput: Object(r.useCallback)(
                                function (n, t) {
                                    e(Vh({ field: n, typedValue: t }));
                                },
                                [e]
                            ),
                        };
                    })().onUserInput,
                    q = !_,
                    Y = Object(r.useState)(!1),
                    H = Object(Wa.a)(Y, 2),
                    V = H[0],
                    Z = H[1],
                    W = Object(r.useState)(!1),
                    Q = Object(Wa.a)(W, 2),
                    G = Q[0],
                    K = Q[1],
                    J = Object(r.useState)(!1),
                    $ = Object(Wa.a)(J, 2),
                    ee = $[0],
                    ne = $[1],
                    te = Object(r.useState)(""),
                    re = Object(Wa.a)(te, 2),
                    ae = re[0],
                    ie = re[1],
                    oe = $u(),
                    ce = Object(Wa.a)(oe, 1)[0],
                    se = Ju(),
                    le = Object(Wa.a)(se, 1)[0],
                    ue =
                        ((d = {}),
                        Object($a.a)(d, Bh.LIQUIDITY_PERCENT, F[Bh.LIQUIDITY_PERCENT].equalTo("0") ? "0" : F[Bh.LIQUIDITY_PERCENT].lessThan(new zo("1", "100")) ? "<1" : F[Bh.LIQUIDITY_PERCENT].toFixed(0)),
                        Object($a.a)(d, Bh.LIQUIDITY, D === Bh.LIQUIDITY ? U : null !== (a = null === (i = F[Bh.LIQUIDITY]) || void 0 === i ? void 0 : i.toSignificant(6)) && void 0 !== a ? a : ""),
                        Object($a.a)(d, Bh.CURRENCY_A, D === Bh.CURRENCY_A ? U : null !== (o = null === (s = F[Bh.CURRENCY_A]) || void 0 === s ? void 0 : s.toSignificant(6)) && void 0 !== o ? o : ""),
                        Object($a.a)(d, Bh.CURRENCY_B, D === Bh.CURRENCY_B ? U : null !== (l = null === (u = F[Bh.CURRENCY_B]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== l ? l : ""),
                        d),
                    de = null === (p = F[Bh.LIQUIDITY_PERCENT]) || void 0 === p ? void 0 : p.equalTo(new zo("1")),
                    pe = ud(null === P || void 0 === P || null === (b = P.liquidityToken) || void 0 === b ? void 0 : b.address, ad.a, h),
                    be = Object(r.useState)(null),
                    fe = Object(Wa.a)(be, 2),
                    me = fe[0],
                    he = fe[1],
                    ye = ym(F[Bh.LIQUIDITY], Ko),
                    je = Object(Wa.a)(ye, 2),
                    ve = je[0],
                    ge = je[1];
                function Oe() {
                    return (Oe = Object(Za.a)(
                        Va.a.mark(function e() {
                            var n, t, r, a, i, o, c, s;
                            return Va.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (pe && P && T) {
                                                e.next = 2;
                                                break;
                                            }
                                            throw new Error("missing dependencies");
                                        case 2:
                                            if ((n = F[Bh.LIQUIDITY])) {
                                                e.next = 5;
                                                break;
                                            }
                                            throw new Error("missing liquidity amount");
                                        case 5:
                                            return (e.next = 7), pe.nonces(w);
                                        case 7:
                                            (t = e.sent),
                                                (r = Math.ceil(Date.now() / 1e3) + ce),
                                                (a = [
                                                    { name: "name", type: "string" },
                                                    { name: "version", type: "string" },
                                                    { name: "chainId", type: "uint256" },
                                                    { name: "verifyingContract", type: "address" },
                                                ]),
                                                (i = { name: "Pancakeswap LPs", version: "1", chainId: k, verifyingContract: P.liquidityToken.address }),
                                                (o = [
                                                    { name: "owner", type: "address" },
                                                    { name: "spender", type: "address" },
                                                    { name: "value", type: "uint256" },
                                                    { name: "nonce", type: "uint256" },
                                                    { name: "deadline", type: "uint256" },
                                                ]),
                                                (c = { owner: w, spender: Ko, value: n.raw.toString(), nonce: t.toHexString(), deadline: r }),
                                                (s = JSON.stringify({ types: { EIP712Domain: a, Permit: o }, domain: i, primaryType: "Permit", message: c })),
                                                T.send("eth_signTypedData_v4", [w, s])
                                                    .then(Ph.splitSignature)
                                                    .then(function (e) {
                                                        he({ v: e.v, r: e.r, s: e.s, deadline: r });
                                                    })
                                                    .catch(function (e) {
                                                        ge();
                                                    });
                                        case 15:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                var Ce = Object(r.useCallback)(
                        function (e, n) {
                            return he(null), z(e, n);
                        },
                        [z]
                    ),
                    we = Object(r.useCallback)(
                        function (e) {
                            return Ce(Bh.LIQUIDITY, e);
                        },
                        [Ce]
                    ),
                    ke = Object(r.useCallback)(
                        function (e) {
                            return Ce(Bh.CURRENCY_A, e);
                        },
                        [Ce]
                    ),
                    Te = Object(r.useCallback)(
                        function (e) {
                            return Ce(Bh.CURRENCY_B, e);
                        },
                        [Ce]
                    ),
                    Ee = im();
                function Ie() {
                    return Se.apply(this, arguments);
                }
                function Se() {
                    return (Se = Object(Za.a)(
                        Va.a.mark(function e() {
                            var n, t, r, a, i, o, c, s, l, u, d, p, b, f, m;
                            return Va.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (k && T && w) {
                                                e.next = 2;
                                                break;
                                            }
                                            throw new Error("missing dependencies");
                                        case 2:
                                            if (((t = F[Bh.CURRENCY_A]), (r = F[Bh.CURRENCY_B]), t && r)) {
                                                e.next = 5;
                                                break;
                                            }
                                            throw new Error("missing currency amounts");
                                        case 5:
                                            if (((a = Os(0, T, w)), (n = {}), Object($a.a)(n, Bh.CURRENCY_A, vs(t, le)[0]), Object($a.a)(n, Bh.CURRENCY_B, vs(r, le)[0]), (i = n), g && O)) {
                                                e.next = 9;
                                                break;
                                            }
                                            throw new Error("missing tokens");
                                        case 9:
                                            if ((o = F[Bh.LIQUIDITY])) {
                                                e.next = 12;
                                                break;
                                            }
                                            throw new Error("missing liquidity amount");
                                        case 12:
                                            if (((c = O === Oo), (s = g === Oo || c), (l = Math.ceil(Date.now() / 1e3) + ce), N && L)) {
                                                e.next = 17;
                                                break;
                                            }
                                            throw new Error("could not wrap");
                                        case 17:
                                            if (ve !== sm.APPROVED) {
                                                e.next = 21;
                                                break;
                                            }
                                            s
                                                ? ((u = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"]),
                                                  (d = [c ? N.address : L.address, o.raw.toString(), i[c ? Bh.CURRENCY_A : Bh.CURRENCY_B].toString(), i[c ? Bh.CURRENCY_B : Bh.CURRENCY_A].toString(), w, l]))
                                                : ((u = ["removeLiquidity"]), (d = [N.address, L.address, o.raw.toString(), i[Bh.CURRENCY_A].toString(), i[Bh.CURRENCY_B].toString(), w, l])),
                                                (e.next = 26);
                                            break;
                                        case 21:
                                            if (null === me) {
                                                e.next = 25;
                                                break;
                                            }
                                            s
                                                ? ((u = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"]),
                                                  (d = [c ? N.address : L.address, o.raw.toString(), i[c ? Bh.CURRENCY_A : Bh.CURRENCY_B].toString(), i[c ? Bh.CURRENCY_B : Bh.CURRENCY_A].toString(), w, me.deadline, !1, me.v, me.r, me.s]))
                                                : ((u = ["removeLiquidityWithPermit"]), (d = [N.address, L.address, o.raw.toString(), i[Bh.CURRENCY_A].toString(), i[Bh.CURRENCY_B].toString(), w, me.deadline, !1, me.v, me.r, me.s])),
                                                (e.next = 26);
                                            break;
                                        case 25:
                                            throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                                        case 26:
                                            return (
                                                (e.next = 28),
                                                Promise.all(
                                                    u.map(function (e, n) {
                                                        var t;
                                                        return (t = a.estimateGas)[e]
                                                            .apply(t, Object(Ii.a)(d))
                                                            .then(js)
                                                            .catch(function (t) {
                                                                console.error("estimateGas failed", n, e, d, t);
                                                            });
                                                    })
                                                )
                                            );
                                        case 28:
                                            if (
                                                ((p = e.sent),
                                                -1 !==
                                                    (b = p.findIndex(function (e) {
                                                        return bs.a.isBigNumber(e);
                                                    })))
                                            ) {
                                                e.next = 34;
                                                break;
                                            }
                                            console.error("This transaction would fail. Please contact support."), (e.next = 39);
                                            break;
                                        case 34:
                                            return (
                                                (f = u[b]),
                                                (m = p[b]),
                                                ne(!0),
                                                (e.next = 39),
                                                a[f]
                                                    .apply(a, Object(Ii.a)(d).concat([{ gasLimit: m }]))
                                                    .then(function (e) {
                                                        var n, t;
                                                        ne(!1),
                                                            Ee(e, {
                                                                summary: "Remove "
                                                                    .concat(null === (n = F[Bh.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(3), " ")
                                                                    .concat(null === g || void 0 === g ? void 0 : g.symbol, " and ")
                                                                    .concat(null === (t = F[Bh.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(3), " ")
                                                                    .concat(null === O || void 0 === O ? void 0 : O.symbol),
                                                            }),
                                                            ie(e.hash);
                                                    })
                                                    .catch(function (e) {
                                                        ne(!1), console.error(e);
                                                    })
                                            );
                                        case 39:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                function Ne() {
                    var e, n;
                    return Object(os.jsxs)(Bc, {
                        gap: "md",
                        style: { marginTop: "20px" },
                        children: [
                            Object(os.jsxs)(ns, {
                                align: "flex-end",
                                children: [
                                    Object(os.jsx)(R, { fontSize: "24px", children: null === (e = F[Bh.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6) }),
                                    Object(os.jsxs)(as, {
                                        gap: "4px",
                                        children: [Object(os.jsx)(yp, { currency: g, size: "24px" }), Object(os.jsx)(R, { fontSize: "24px", style: { marginLeft: "10px" }, children: null === g || void 0 === g ? void 0 : g.symbol })],
                                    }),
                                ],
                            }),
                            Object(os.jsx)(as, { children: Object(os.jsx)(Fh.a, { size: "16", color: M.colors.textSubtle }) }),
                            Object(os.jsxs)(ns, {
                                align: "flex-end",
                                children: [
                                    Object(os.jsx)(R, { fontSize: "24px", children: null === (n = F[Bh.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(6) }),
                                    Object(os.jsxs)(as, {
                                        gap: "4px",
                                        children: [Object(os.jsx)(yp, { currency: O, size: "24px" }), Object(os.jsx)(R, { fontSize: "24px", style: { marginLeft: "10px" }, children: null === O || void 0 === O ? void 0 : O.symbol })],
                                    }),
                                ],
                            }),
                            Object(os.jsx)(R, {
                                small: !0,
                                color: "textSubtle",
                                textAlign: "left",
                                padding: "12px 0 0 0",
                                style: { fontStyle: "italic" },
                                children: "Output is estimated. If the price changes by more than ".concat(le / 100, "% your transaction will revert."),
                            }),
                        ],
                    });
                }
                function Le() {
                    var e;
                    return Object(os.jsxs)(os.Fragment, {
                        children: [
                            Object(os.jsxs)(ns, {
                                children: [
                                    Object(os.jsxs)(R, { color: "textSubtle", children: ["LP ".concat(null === g || void 0 === g ? void 0 : g.symbol, "/").concat(null === O || void 0 === O ? void 0 : O.symbol), " Burned"] }),
                                    Object(os.jsxs)(as, {
                                        children: [Object(os.jsx)(Ub, { currency0: g, currency1: O, margin: !0 }), Object(os.jsx)(R, { children: null === (e = F[Bh.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6) })],
                                    }),
                                ],
                            }),
                            P &&
                                Object(os.jsxs)(os.Fragment, {
                                    children: [
                                        Object(os.jsxs)(ns, {
                                            children: [
                                                Object(os.jsx)(R, { color: "textSubtle", children: E(1182, "Price") }),
                                                Object(os.jsxs)(R, { children: ["1 ", null === g || void 0 === g ? void 0 : g.symbol, " = ", N ? P.priceOf(N).toSignificant(6) : "-", " ", null === O || void 0 === O ? void 0 : O.symbol] }),
                                            ],
                                        }),
                                        Object(os.jsxs)(ns, {
                                            children: [
                                                Object(os.jsx)("div", {}),
                                                Object(os.jsxs)(R, { children: ["1 ", null === O || void 0 === O ? void 0 : O.symbol, " = ", L ? P.priceOf(L).toSignificant(6) : "-", " ", null === g || void 0 === g ? void 0 : g.symbol] }),
                                            ],
                                        }),
                                    ],
                                }),
                            Object(os.jsx)(X, { disabled: !(ve === sm.APPROVED || null !== me), onClick: Ie, children: E(1136, "Confirm") }),
                        ],
                    });
                }
                var Re = "Removing "
                        .concat(null === (f = F[Bh.CURRENCY_A]) || void 0 === f ? void 0 : f.toSignificant(6), " ")
                        .concat(null === g || void 0 === g ? void 0 : g.symbol, " and ")
                        .concat(null === (m = F[Bh.CURRENCY_B]) || void 0 === m ? void 0 : m.toSignificant(6), " ")
                        .concat(null === O || void 0 === O ? void 0 : O.symbol),
                    Me = Object(r.useCallback)(
                        function (e) {
                            Ce(Bh.LIQUIDITY_PERCENT, e.toString());
                        },
                        [Ce]
                    ),
                    Ae = g === Oo || O === Oo,
                    De = Boolean(k && ((g && wo(Eo[k], g)) || (O && wo(Eo[k], O)))),
                    Ue = Object(r.useCallback)(
                        function (e) {
                            v && df(e) === v ? y.push("/remove/".concat(df(e), "/").concat(j)) : y.push("/remove/".concat(df(e), "/").concat(v));
                        },
                        [j, v, y]
                    ),
                    Be = Object(r.useCallback)(
                        function (e) {
                            j && df(e) === j ? y.push("/remove/".concat(v, "/").concat(df(e))) : y.push("/remove/".concat(j, "/").concat(df(e)));
                        },
                        [j, v, y]
                    ),
                    Pe = Object(r.useCallback)(
                        function () {
                            Z(!1), he(null), ae && Ce(Bh.LIQUIDITY_PERCENT, "0"), ie("");
                        },
                        [Ce, ae]
                    ),
                    Fe = (function (e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                            a = Object(r.useState)(function () {
                                return e;
                            }),
                            i = Object(Wa.a)(a, 2),
                            o = i[0],
                            c = i[1],
                            s = Object(r.useRef)(),
                            l = Object(r.useCallback)(
                                function (e) {
                                    c(e),
                                        s.current && clearTimeout(s.current),
                                        (s.current = setTimeout(function () {
                                            n(e), (s.current = void 0);
                                        }, t));
                                },
                                [t, n]
                            );
                        return (
                            Object(r.useEffect)(
                                function () {
                                    s.current && (clearTimeout(s.current), (s.current = void 0)), c(e);
                                },
                                [e]
                            ),
                            [o, l]
                        );
                    })(Number.parseInt(F[Bh.LIQUIDITY_PERCENT].toFixed(0)), Me),
                    _e = Object(Wa.a)(Fe, 2),
                    ze = _e[0],
                    qe = _e[1];
                return Object(os.jsxs)(os.Fragment, {
                    children: [
                        Object(os.jsxs)(nh, {
                            children: [
                                Object(os.jsx)(cf, { adding: !1 }),
                                Object(os.jsxs)(th, {
                                    children: [
                                        Object(os.jsx)(Gl, {
                                            isOpen: V,
                                            onDismiss: Pe,
                                            attemptingTxn: ee,
                                            hash: ae || "",
                                            content: function () {
                                                return Object(os.jsx)(Zl, { title: E(1156, "You will receive"), onDismiss: Pe, topContent: Ne, bottomContent: Le });
                                            },
                                            pendingText: Re,
                                        }),
                                        Object(os.jsxs)(Bc, {
                                            gap: "md",
                                            children: [
                                                Object(os.jsx)(Jh, {
                                                    children: Object(os.jsx)(Kh, {
                                                        children: Object(os.jsxs)(Bc, {
                                                            children: [
                                                                Object(os.jsxs)(ns, {
                                                                    children: [
                                                                        Object(os.jsx)(R, { children: "Amount" }),
                                                                        Object(os.jsx)(rh, {
                                                                            onClick: function () {
                                                                                K(!G);
                                                                            },
                                                                            children: G ? E(1184, "Simple") : E(1186, "Detailed"),
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(os.jsx)(xe, { justifyContent: "start", children: Object(os.jsxs)(R, { fontSize: "64px", children: [ue[Bh.LIQUIDITY_PERCENT], "%"] }) }),
                                                                !G &&
                                                                    Object(os.jsxs)(os.Fragment, {
                                                                        children: [
                                                                            Object(os.jsx)(xe, { mb: "8px", children: Object(os.jsx)(qh, { value: ze, onChange: qe }) }),
                                                                            Object(os.jsxs)(xe, {
                                                                                justifyContent: "space-around",
                                                                                children: [
                                                                                    Object(os.jsx)(X, {
                                                                                        variant: "tertiary",
                                                                                        scale: "sm",
                                                                                        onClick: function () {
                                                                                            return Ce(Bh.LIQUIDITY_PERCENT, "25");
                                                                                        },
                                                                                        children: "25%",
                                                                                    }),
                                                                                    Object(os.jsx)(X, {
                                                                                        variant: "tertiary",
                                                                                        scale: "sm",
                                                                                        onClick: function () {
                                                                                            return Ce(Bh.LIQUIDITY_PERCENT, "50");
                                                                                        },
                                                                                        children: "50%",
                                                                                    }),
                                                                                    Object(os.jsx)(X, {
                                                                                        variant: "tertiary",
                                                                                        scale: "sm",
                                                                                        onClick: function () {
                                                                                            return Ce(Bh.LIQUIDITY_PERCENT, "75");
                                                                                        },
                                                                                        children: "75%",
                                                                                    }),
                                                                                    Object(os.jsx)(X, {
                                                                                        variant: "tertiary",
                                                                                        scale: "sm",
                                                                                        onClick: function () {
                                                                                            return Ce(Bh.LIQUIDITY_PERCENT, "100");
                                                                                        },
                                                                                        children: E(166, "Max"),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                !G &&
                                                    Object(os.jsxs)(os.Fragment, {
                                                        children: [
                                                            Object(os.jsx)(Uc, { children: Object(os.jsx)(_h.a, { size: "16", color: M.colors.textSubtle }) }),
                                                            Object(os.jsx)(Jh, {
                                                                children: Object(os.jsx)(Kh, {
                                                                    children: Object(os.jsxs)(Bc, {
                                                                        gap: "10px",
                                                                        children: [
                                                                            Object(os.jsxs)(ns, {
                                                                                children: [
                                                                                    Object(os.jsx)(R, { fontSize: "24px", children: ue[Bh.CURRENCY_A] || "-" }),
                                                                                    Object(os.jsxs)(as, {
                                                                                        children: [
                                                                                            Object(os.jsx)(yp, { currency: g, style: { marginRight: "12px" } }),
                                                                                            Object(os.jsx)(R, { fontSize: "24px", id: "remove-liquidity-tokena-symbol", children: null === g || void 0 === g ? void 0 : g.symbol }),
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            Object(os.jsxs)(ns, {
                                                                                children: [
                                                                                    Object(os.jsx)(R, { fontSize: "24px", children: ue[Bh.CURRENCY_B] || "-" }),
                                                                                    Object(os.jsxs)(as, {
                                                                                        children: [
                                                                                            Object(os.jsx)(yp, { currency: O, style: { marginRight: "12px" } }),
                                                                                            Object(os.jsx)(R, { fontSize: "24px", id: "remove-liquidity-tokenb-symbol", children: null === O || void 0 === O ? void 0 : O.symbol }),
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            k && (De || Ae)
                                                                                ? Object(os.jsx)(ns, {
                                                                                      style: { justifyContent: "flex-end" },
                                                                                      children: Ae
                                                                                          ? Object(os.jsx)(Ns, {
                                                                                                to: "/remove/".concat(g === Oo ? Eo[k].address : j, "/").concat(O === Oo ? Eo[k].address : v),
                                                                                                children: E(1188, "Receive WBNB"),
                                                                                            })
                                                                                          : De
                                                                                          ? Object(os.jsx)(Ns, {
                                                                                                to: "/remove/".concat(g && wo(g, Eo[k]) ? "BNB" : j, "/").concat(O && wo(O, Eo[k]) ? "BNB" : v),
                                                                                                children: E(1190, "Receive BNB"),
                                                                                            })
                                                                                          : null,
                                                                                  })
                                                                                : null,
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                Object(os.jsxs)(Jh, {
                                                    style: { paddingBottom: "24px" },
                                                    children: [
                                                        G &&
                                                            Object(os.jsxs)(os.Fragment, {
                                                                children: [
                                                                    Object(os.jsx)(nf, {
                                                                        value: ue[Bh.LIQUIDITY],
                                                                        onUserInput: we,
                                                                        onMax: function () {
                                                                            Ce(Bh.LIQUIDITY_PERCENT, "100");
                                                                        },
                                                                        showMaxButton: !de,
                                                                        disableCurrencySelect: !0,
                                                                        currency: null === P || void 0 === P ? void 0 : P.liquidityToken,
                                                                        pair: P,
                                                                        id: "liquidity-amount",
                                                                    }),
                                                                    Object(os.jsx)(Uc, { children: Object(os.jsx)(_h.a, { size: "16", color: M.colors.textSubtle }) }),
                                                                    Object(os.jsx)(nf, {
                                                                        hideBalance: !0,
                                                                        value: ue[Bh.CURRENCY_A],
                                                                        onUserInput: ke,
                                                                        onMax: function () {
                                                                            return Ce(Bh.LIQUIDITY_PERCENT, "100");
                                                                        },
                                                                        showMaxButton: !de,
                                                                        currency: g,
                                                                        label: "Output",
                                                                        onCurrencySelect: Ue,
                                                                        id: "remove-liquidity-tokena",
                                                                    }),
                                                                    Object(os.jsx)(Uc, { children: Object(os.jsx)(Fh.a, { size: "16", color: M.colors.textSubtle }) }),
                                                                    Object(os.jsx)(nf, {
                                                                        hideBalance: !0,
                                                                        value: ue[Bh.CURRENCY_B],
                                                                        onUserInput: Te,
                                                                        onMax: function () {
                                                                            return Ce(Bh.LIQUIDITY_PERCENT, "100");
                                                                        },
                                                                        showMaxButton: !de,
                                                                        currency: O,
                                                                        label: "Output",
                                                                        onCurrencySelect: Be,
                                                                        id: "remove-liquidity-tokenb",
                                                                    }),
                                                                ],
                                                            }),
                                                        P &&
                                                            Object(os.jsxs)("div", {
                                                                style: { padding: "24px" },
                                                                children: [
                                                                    Object(os.jsxs)(xe, {
                                                                        justifyContent: "space-between",
                                                                        mb: "8px",
                                                                        children: [
                                                                            "Price:",
                                                                            Object(os.jsxs)("div", {
                                                                                children: [
                                                                                    "1 ",
                                                                                    null === g || void 0 === g ? void 0 : g.symbol,
                                                                                    " = ",
                                                                                    N ? P.priceOf(N).toSignificant(6) : "-",
                                                                                    " ",
                                                                                    null === O || void 0 === O ? void 0 : O.symbol,
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(os.jsxs)(xe, {
                                                                        justifyContent: "space-between",
                                                                        children: [
                                                                            Object(os.jsx)("div", {}),
                                                                            Object(os.jsxs)("div", {
                                                                                children: [
                                                                                    "1 ",
                                                                                    null === O || void 0 === O ? void 0 : O.symbol,
                                                                                    " = ",
                                                                                    L ? P.priceOf(L).toSignificant(6) : "-",
                                                                                    " ",
                                                                                    null === g || void 0 === g ? void 0 : g.symbol,
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        Object(os.jsx)("div", {
                                                            style: { position: "relative" },
                                                            children: w
                                                                ? Object(os.jsxs)(ns, {
                                                                      children: [
                                                                          Object(os.jsx)(X, {
                                                                              onClick: function () {
                                                                                  return Oe.apply(this, arguments);
                                                                              },
                                                                              variant: ve === sm.APPROVED || null !== me ? "success" : "primary",
                                                                              disabled: ve !== sm.NOT_APPROVED || null !== me,
                                                                              mr: "8px",
                                                                              children: ve === sm.PENDING ? Object(os.jsx)(Rf, { children: "Approving" }) : ve === sm.APPROVED || null !== me ? "Approved" : "Approve",
                                                                          }),
                                                                          Object(os.jsx)(X, {
                                                                              onClick: function () {
                                                                                  Z(!0);
                                                                              },
                                                                              disabled: !q || (null === me && ve !== sm.APPROVED),
                                                                              variant: !q && F[Bh.CURRENCY_A] && F[Bh.CURRENCY_B] ? "danger" : "primary",
                                                                              children: _ || "Remove",
                                                                          }),
                                                                      ],
                                                                  })
                                                                : Object(os.jsx)($m, { width: "100%" }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        P ? Object(os.jsx)(Bc, { style: { minWidth: "20rem", marginTop: "1rem" }, children: Object(os.jsx)(zf, { showUnwrapped: De, pair: P }) }) : null,
                    ],
                });
            }
            var ey = c.default.div(Wh || (Wh = Object(qa.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"])), function (e) {
                    return e.theme.colors.invertedContrast;
                }),
                ny = c.default.div(
                    Qh ||
                        (Qh = Object(qa.a)([
                            "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",
                            ";\n  transition: border-color 300ms ",
                            ",\n    color 500ms ",
                            ";\n  background-color: ",
                            ";\n",
                        ])),
                    function (e) {
                        var n = e.error,
                            t = e.theme;
                        return n ? t.colors.failure : t.colors.invertedContrast;
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    }
                ),
                ty = c.default.div(Gh || (Gh = Object(qa.a)(["\n  flex: 1;\n  padding: 1rem;\n"]))),
                ry = c.default.input(
                    Xh ||
                        (Xh = Object(qa.a)([
                            "\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",
                            ";\n  transition: color 300ms ",
                            ";\n  color: ",
                            ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ",
                            ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
                            ";\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        var n = e.error,
                            t = e.theme;
                        return n ? t.colors.failure : t.colors.primary;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    }
                );
            function ay(e) {
                var n = e.id,
                    t = e.value,
                    a = e.onChange,
                    i = Cc().chainId,
                    o = nu(),
                    c = Om(t),
                    s = c.address,
                    l = c.loading,
                    u = c.name,
                    d = Object(r.useCallback)(
                        function (e) {
                            var n = e.target.value.replace(/\s+/g, "");
                            a(n);
                        },
                        [a]
                    ),
                    p = Boolean(t.length > 0 && !l && !s);
                return Object(os.jsx)(ey, {
                    id: n,
                    children: Object(os.jsx)(ny, {
                        error: p,
                        children: Object(os.jsx)(ty, {
                            children: Object(os.jsxs)(Bc, {
                                gap: "md",
                                children: [
                                    Object(os.jsxs)(ns, {
                                        children: [
                                            Object(os.jsx)(R, { color: "textSubtle", fontWeight: 500, fontSize: "14px", children: o(1138, "Recipient") }),
                                            s && i && Object(os.jsx)(Rs, { href: ys(i, null !== u && void 0 !== u ? u : s, "address"), style: { fontSize: "14px" }, children: o(116, "(View on BscScan)") }),
                                        ],
                                    }),
                                    Object(os.jsx)(ry, {
                                        className: "recipient-address-input",
                                        type: "text",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: "false",
                                        placeholder: o(1140, "Wallet Address or ENS name"),
                                        error: p,
                                        pattern: "^(0x[a-fA-F0-9]{40})$",
                                        onChange: d,
                                        value: t,
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            }
            var iy,
                oy = t(591);
            function cy(e) {
                var n = e.priceImpact;
                return Object(os.jsx)(Nf, { fontSize: "14px", severity: mm(n), children: n ? (n.lessThan(mc) ? "<0.01%" : "".concat(n.toFixed(2), "%")) : "-" });
            }
            function sy(e) {
                var n,
                    t,
                    a,
                    i,
                    o = e.trade,
                    c = e.onConfirm,
                    s = e.allowedSlippage,
                    l = e.swapErrorMessage,
                    u = e.disabledConfirm,
                    d = Object(r.useState)(!1),
                    p = Object(Wa.a)(d, 2),
                    b = p[0],
                    f = p[1],
                    m = Object(r.useMemo)(
                        function () {
                            return fm(o, s);
                        },
                        [s, o]
                    ),
                    h = Object(r.useMemo)(
                        function () {
                            return bm(o);
                        },
                        [o]
                    ),
                    y = h.priceImpactWithoutFee,
                    x = h.realizedLPFee,
                    j = mm(y),
                    v = nu();
                return Object(os.jsxs)(os.Fragment, {
                    children: [
                        Object(os.jsxs)(Bc, {
                            gap: "0px",
                            children: [
                                Object(os.jsxs)(ns, {
                                    align: "center",
                                    children: [
                                        Object(os.jsx)(R, { fontSize: "14px", children: "Price" }),
                                        Object(os.jsxs)(R, {
                                            fontSize: "14px",
                                            style: { justifyContent: "center", alignItems: "center", display: "flex", textAlign: "right", paddingLeft: "8px", fontWeight: 500 },
                                            children: [
                                                hm(o, b),
                                                Object(os.jsx)(Lf, {
                                                    onClick: function () {
                                                        return f(!b);
                                                    },
                                                    children: Object(os.jsx)(oy.a, { size: 14 }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(os.jsxs)(ns, {
                                    children: [
                                        Object(os.jsxs)(as, {
                                            children: [
                                                Object(os.jsx)(R, { fontSize: "14px", children: o.tradeType === Oi.EXACT_INPUT ? v(1210, "Minimum received") : v(220, "Maximum sold") }),
                                                Object(os.jsx)(lp, { text: v(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.") }),
                                            ],
                                        }),
                                        Object(os.jsxs)(as, {
                                            children: [
                                                Object(os.jsx)(R, {
                                                    fontSize: "14px",
                                                    children:
                                                        o.tradeType === Oi.EXACT_INPUT
                                                            ? null !== (n = null === (t = m[Gf.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== n
                                                                ? n
                                                                : "-"
                                                            : null !== (a = null === (i = m[Gf.INPUT]) || void 0 === i ? void 0 : i.toSignificant(4)) && void 0 !== a
                                                            ? a
                                                            : "-",
                                                }),
                                                Object(os.jsx)(R, { fontSize: "14px", marginLeft: "4px", children: o.tradeType === Oi.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(os.jsxs)(ns, {
                                    children: [
                                        Object(os.jsxs)(as, {
                                            children: [
                                                Object(os.jsx)(R, { fontSize: "14px", children: v(226, "Price Impact") }),
                                                Object(os.jsx)(lp, { text: v(224, "The difference between the market price and your price due to trade size.") }),
                                            ],
                                        }),
                                        Object(os.jsx)(cy, { priceImpact: y }),
                                    ],
                                }),
                                Object(os.jsxs)(ns, {
                                    children: [
                                        Object(os.jsxs)(as, {
                                            children: [
                                                Object(os.jsx)(R, { fontSize: "14px", children: v(228, "Liquidity Provider Fee") }),
                                                Object(os.jsx)(lp, { text: v(999, "For each trade a 0.3% fee is paid. 0.25% goes to liquidity providers and 0.05% goes to the SANTA AI Swap treasury.") }),
                                            ],
                                        }),
                                        Object(os.jsx)(R, { fontSize: "14px", children: x ? "".concat(null === x || void 0 === x ? void 0 : x.toSignificant(6), " ").concat(o.inputAmount.currency.symbol) : "-" }),
                                    ],
                                }),
                            ],
                        }),
                        Object(os.jsxs)(rs, {
                            children: [
                                Object(os.jsx)(X, { onClick: c, disabled: u, variant: j > 2 ? "secondary" : "primary", mt: "10px", id: "confirm-swap-or-send", width: "100%", children: j > 2 ? "Swap Anyway" : "Confirm Swap" }),
                                l ? Object(os.jsx)(Df, { error: l }) : null,
                            ],
                        }),
                    ],
                });
            }
            var ly = Object(c.default)(R)(iy || (iy = Object(qa.a)(["\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ", ";\n    font-weight: 600;\n  }\n"])), function (e) {
                return e.theme.colors.primary;
            });
            function uy(e) {
                var n,
                    t,
                    a = e.trade,
                    i = e.allowedSlippage,
                    o = e.recipient,
                    s = e.showAcceptChanges,
                    l = e.onAcceptChanges,
                    u = Object(r.useMemo)(
                        function () {
                            return fm(a, i);
                        },
                        [a, i]
                    ),
                    d = mm(
                        Object(r.useMemo)(
                            function () {
                                return bm(a);
                            },
                            [a]
                        ).priceImpactWithoutFee
                    ),
                    p = Object(r.useContext)(c.ThemeContext);
                return Object(os.jsxs)(Bc, {
                    gap: "md",
                    style: { marginTop: "20px" },
                    children: [
                        Object(os.jsxs)(ns, {
                            align: "flex-end",
                            children: [
                                Object(os.jsxs)(as, {
                                    gap: "0px",
                                    children: [
                                        Object(os.jsx)(yp, { currency: a.inputAmount.currency, size: "24px", style: { marginRight: "12px" } }),
                                        Object(os.jsx)(R, { fontSize: "24px", color: s && a.tradeType === Oi.EXACT_OUTPUT ? p.colors.primary : "text", children: a.inputAmount.toSignificant(6) }),
                                    ],
                                }),
                                Object(os.jsx)(as, { gap: "0px", children: Object(os.jsx)(R, { fontSize: "24px", style: { marginLeft: "10px", fontWeight: 500 }, children: a.inputAmount.currency.symbol }) }),
                            ],
                        }),
                        Object(os.jsx)(as, { children: Object(os.jsx)(_h.a, { size: "16", color: p.colors.textSubtle, style: { marginLeft: "4px", minWidth: "16px" } }) }),
                        Object(os.jsxs)(ns, {
                            align: "flex-end",
                            children: [
                                Object(os.jsxs)(as, {
                                    gap: "0px",
                                    children: [
                                        Object(os.jsx)(yp, { currency: a.outputAmount.currency, size: "24px", style: { marginRight: "12px" } }),
                                        Object(os.jsx)(R, {
                                            fontSize: "24px",
                                            style: { marginLeft: "10px", fontWeight: 500 },
                                            color: d > 2 ? p.colors.failure : s && a.tradeType === Oi.EXACT_INPUT ? p.colors.primary : "text",
                                            children: a.outputAmount.toSignificant(6),
                                        }),
                                    ],
                                }),
                                Object(os.jsx)(as, { gap: "0px", children: Object(os.jsx)(R, { fontSize: "24px", style: { marginLeft: "10px", fontWeight: 500 }, children: a.outputAmount.currency.symbol }) }),
                            ],
                        }),
                        s
                            ? Object(os.jsx)(Pf, {
                                  justify: "flex-start",
                                  gap: "0px",
                                  children: Object(os.jsxs)(ns, {
                                      children: [
                                          Object(os.jsxs)(as, { children: [Object(os.jsx)(Wl.a, { size: 20, style: { marginRight: "8px", minWidth: 24 } }), Object(os.jsx)(R, { color: "primary", children: " Price Updated" })] }),
                                          Object(os.jsx)(X, { onClick: l, children: "Accept" }),
                                      ],
                                  }),
                              })
                            : null,
                        Object(os.jsx)(Bc, {
                            justify: "flex-start",
                            gap: "sm",
                            style: { padding: "16px 0 0" },
                            children:
                                a.tradeType === Oi.EXACT_INPUT
                                    ? Object(os.jsxs)(ly, {
                                          children: [
                                              "Output is estimated. You will receive at least ",
                                              Object(os.jsxs)("span", { children: [null === (n = u[Gf.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(6), " ", a.outputAmount.currency.symbol] }),
                                              " or the transaction will revert.",
                                          ],
                                      })
                                    : Object(os.jsxs)(ly, {
                                          children: [
                                              "Input is estimated. You will sell at most ",
                                              Object(os.jsxs)("span", { children: [null === (t = u[Gf.INPUT]) || void 0 === t ? void 0 : t.toSignificant(6), " ", a.inputAmount.currency.symbol] }),
                                              " or the transaction will revert.",
                                          ],
                                      }),
                        }),
                        null !== o
                            ? Object(os.jsx)(Bc, {
                                  justify: "flex-start",
                                  gap: "sm",
                                  style: { padding: "16px 0 0" },
                                  children: Object(os.jsxs)(R, { children: ["Output will be sent to", " ", Object(os.jsx)("b", { title: o, children: ms(o) ? xs(o) : o })] }),
                              })
                            : null,
                    ],
                });
            }
            function dy(e) {
                var n,
                    t,
                    a,
                    i,
                    o,
                    c,
                    s = e.trade,
                    l = e.originalTrade,
                    u = e.onAcceptChanges,
                    d = e.allowedSlippage,
                    p = e.onConfirm,
                    b = e.onDismiss,
                    f = e.recipient,
                    m = e.swapErrorMessage,
                    h = e.isOpen,
                    y = e.attemptingTxn,
                    x = e.txHash,
                    j = Object(r.useMemo)(
                        function () {
                            return Boolean(
                                s &&
                                    l &&
                                    ((n = l),
                                    (e = s).tradeType !== n.tradeType ||
                                        !wo(e.inputAmount.currency, n.inputAmount.currency) ||
                                        !e.inputAmount.equalTo(n.inputAmount) ||
                                        !wo(e.outputAmount.currency, n.outputAmount.currency) ||
                                        !e.outputAmount.equalTo(n.outputAmount))
                            );
                            var e, n;
                        },
                        [l, s]
                    ),
                    v = Object(r.useCallback)(
                        function () {
                            return s ? Object(os.jsx)(uy, { trade: s, allowedSlippage: d, recipient: f, showAcceptChanges: j, onAcceptChanges: u }) : null;
                        },
                        [d, u, f, j, s]
                    ),
                    g = Object(r.useCallback)(
                        function () {
                            return s ? Object(os.jsx)(sy, { onConfirm: p, trade: s, disabledConfirm: j, swapErrorMessage: m, allowedSlippage: d }) : null;
                        },
                        [d, p, j, m, s]
                    ),
                    O = "Swapping "
                        .concat(null === s || void 0 === s || null === (n = s.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6), " ")
                        .concat(null === s || void 0 === s || null === (t = s.inputAmount) || void 0 === t || null === (a = t.currency) || void 0 === a ? void 0 : a.symbol, " for ")
                        .concat(null === s || void 0 === s || null === (i = s.outputAmount) || void 0 === i ? void 0 : i.toSignificant(6), " ")
                        .concat(null === s || void 0 === s || null === (o = s.outputAmount) || void 0 === o || null === (c = o.currency) || void 0 === c ? void 0 : c.symbol),
                    C = Object(r.useCallback)(
                        function () {
                            return m ? Object(os.jsx)(Ql, { onDismiss: b, message: m }) : Object(os.jsx)(Zl, { title: "Confirm Swap", onDismiss: b, topContent: v, bottomContent: g });
                        },
                        [b, g, v, m]
                    );
                return Object(os.jsx)(Gl, { isOpen: h, onDismiss: b, attemptingTxn: y, hash: x, content: C, pendingText: O });
            }
            var py,
                by = t(592),
                fy = Object(r.memo)(function (e) {
                    var n = e.trade,
                        t = Object(r.useContext)(c.ThemeContext);
                    return Object(os.jsx)(xe, {
                        px: "1rem",
                        py: "0.5rem",
                        my: "0.5rem",
                        style: { border: "1px solid ".concat(t.colors.tertiary), borderRadius: "1rem" },
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        children: n.route.path.map(function (e, n, t) {
                            var a = n === t.length - 1;
                            return Object(os.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        Object(os.jsxs)(xe, {
                                            my: "0.5rem",
                                            alignItems: "center",
                                            style: { flexShrink: 0 },
                                            children: [Object(os.jsx)(yp, { currency: e, size: "1.5rem" }), Object(os.jsx)(R, { fontSize: "14px", color: "text", ml: "0.5rem", children: e.symbol })],
                                        }),
                                        a ? null : Object(os.jsx)(by.a, { color: "textSubtle" }),
                                    ],
                                },
                                n
                            );
                        }),
                    });
                });
            function my(e) {
                var n,
                    t,
                    r,
                    a,
                    i = e.trade,
                    o = e.allowedSlippage,
                    c = bm(i),
                    s = c.priceImpactWithoutFee,
                    l = c.realizedLPFee,
                    u = i.tradeType === Oi.EXACT_INPUT,
                    d = fm(i, o),
                    p = nu();
                return Object(os.jsx)(Ye, {
                    children: Object(os.jsxs)(He, {
                        children: [
                            Object(os.jsxs)(ns, {
                                children: [
                                    Object(os.jsxs)(as, {
                                        children: [
                                            Object(os.jsx)(R, { fontSize: "14px", children: u ? p(1210, "Minimum received") : p(220, "Maximum sold") }),
                                            Object(os.jsx)(lp, { text: p(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.") }),
                                        ],
                                    }),
                                    Object(os.jsx)(as, {
                                        children: Object(os.jsx)(R, {
                                            fontSize: "14px",
                                            children: u
                                                ? null !== (n = "".concat(null === (t = d[Gf.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(4), " ").concat(i.outputAmount.currency.symbol)) && void 0 !== n
                                                    ? n
                                                    : "-"
                                                : null !== (r = "".concat(null === (a = d[Gf.INPUT]) || void 0 === a ? void 0 : a.toSignificant(4), " ").concat(i.inputAmount.currency.symbol)) && void 0 !== r
                                                ? r
                                                : "-",
                                        }),
                                    }),
                                ],
                            }),
                            Object(os.jsxs)(ns, {
                                children: [
                                    Object(os.jsxs)(as, {
                                        children: [
                                            Object(os.jsx)(R, { fontSize: "14px", children: p(226, "Price Impact") }),
                                            Object(os.jsx)(lp, { text: p(224, "The difference between the market price and estimated price due to trade size.") }),
                                        ],
                                    }),
                                    Object(os.jsx)(cy, { priceImpact: s }),
                                ],
                            }),
                            Object(os.jsxs)(ns, {
                                children: [
                                    Object(os.jsxs)(as, {
                                        children: [
                                            Object(os.jsx)(R, { fontSize: "14px", children: p(228, "Liquidity Provider Fee") }),
                                            Object(os.jsx)(lp, { text: p(230, "For each trade a 0.3% fee is paid. 0.25% goes to liquidity providers and 0.05% goes to the Dexbuilder Swap treasury.") }),
                                        ],
                                    }),
                                    Object(os.jsx)(R, { fontSize: "14px", children: l ? "".concat(l.toSignificant(4), " ").concat(i.inputAmount.currency.symbol) : "-" }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function hy(e) {
                var n = e.trade,
                    t = Ju(),
                    r = Object(Wa.a)(t, 1)[0],
                    a = nu(),
                    i = Boolean(n && n.route.path.length > 2);
                return Object(os.jsx)(Bc, {
                    gap: "md",
                    children:
                        n &&
                        Object(os.jsxs)(os.Fragment, {
                            children: [
                                Object(os.jsx)(my, { trade: n, allowedSlippage: r }),
                                i &&
                                    Object(os.jsxs)(os.Fragment, {
                                        children: [
                                            Object(os.jsx)(If, {}),
                                            Object(os.jsxs)(Bc, {
                                                style: { padding: "0 24px" },
                                                children: [
                                                    Object(os.jsxs)(as, {
                                                        children: [Object(os.jsx)(R, { fontSize: "14px", children: "Route" }), Object(os.jsx)(lp, { text: a(999, "Routing through these tokens resulted in the best price for your trade.") })],
                                                    }),
                                                    Object(os.jsx)(fy, { trade: n }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                });
            }
            var yy,
                xy,
                jy,
                vy = c.default.div(
                    py ||
                        (py = Object(qa.a)([
                            "\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",
                            ";\n  z-index: 1;\n\n  transform: ",
                            ";\n  transition: transform 300ms ease-in-out;\n",
                        ])),
                    function (e) {
                        return e.theme.colors.textSubtle;
                    },
                    function (e) {
                        return e.show ? "translateY(0%)" : "translateY(-100%)";
                    }
                );
            function gy(e) {
                var n,
                    t = e.trade,
                    r = Object(Is.a)(e, ["trade"]),
                    a = Td(t, Ed);
                return Object(os.jsx)(vy, { show: Boolean(t), children: Object(os.jsx)(hy, Object(Si.a)(Object(Si.a)({}, r), {}, { trade: null !== (n = null !== t && void 0 !== t ? t : a) && void 0 !== n ? n : void 0 })) });
            }
            function Oy(e) {
                var n,
                    t,
                    r,
                    a,
                    i,
                    o = e.price,
                    c = e.showInverted,
                    s = e.setShowInverted,
                    l = c ? (null === o || void 0 === o ? void 0 : o.toSignificant(6)) : null === o || void 0 === o || null === (n = o.invert()) || void 0 === n ? void 0 : n.toSignificant(6),
                    u = Boolean((null === o || void 0 === o ? void 0 : o.baseCurrency) && (null === o || void 0 === o ? void 0 : o.quoteCurrency)),
                    d = c
                        ? ""
                              .concat(null === o || void 0 === o || null === (t = o.quoteCurrency) || void 0 === t ? void 0 : t.symbol, " per ")
                              .concat(null === o || void 0 === o || null === (r = o.baseCurrency) || void 0 === r ? void 0 : r.symbol)
                        : ""
                              .concat(null === o || void 0 === o || null === (a = o.baseCurrency) || void 0 === a ? void 0 : a.symbol, " per ")
                              .concat(null === o || void 0 === o || null === (i = o.quoteCurrency) || void 0 === i ? void 0 : i.symbol);
                return Object(os.jsx)(R, {
                    fontSize: "14px",
                    style: { justifyContent: "center", alignItems: "center", display: "flex" },
                    children: u
                        ? Object(os.jsxs)(os.Fragment, {
                              children: [
                                  null !== l && void 0 !== l ? l : "-",
                                  " ",
                                  d,
                                  Object(os.jsx)(Lf, {
                                      onClick: function () {
                                          return s(!c);
                                      },
                                      children: Object(os.jsx)(he, { width: "20px", color: "primary" }),
                                  }),
                              ],
                          })
                        : "-",
                });
            }
            var Cy,
                wy,
                ky = c.default.div(yy || (yy = Object(qa.a)(["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"])), function (e) {
                    var n = e.theme;
                    return Object(El.b)(0.6, n.colors.tertiary);
                }),
                Ty = c.default.div(xy || (xy = Object(qa.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]))),
                Ey = Object(c.default)(Wl.a)(jy || (jy = Object(qa.a)(["\n  stroke: ", ";\n"])), function (e) {
                    return e.theme.colors.failure;
                });
            function Iy(e) {
                var n,
                    t,
                    a,
                    i,
                    o = e.token,
                    c = Cc().chainId,
                    s = nu(),
                    l = null !== (n = null === o || void 0 === o || null === (t = o.symbol) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : "",
                    u = null !== (a = null === o || void 0 === o || null === (i = o.name) || void 0 === i ? void 0 : i.toLowerCase()) && void 0 !== a ? a : "",
                    d = md(),
                    p = Object(r.useMemo)(
                        function () {
                            return (
                                !(!o || !c) &&
                                Object.keys(d).some(function (e) {
                                    var n,
                                        t,
                                        r = d[e];
                                    return !r.equals(o) && ((null === (n = r.symbol) || void 0 === n ? void 0 : n.toLowerCase()) === l || (null === (t = r.name) || void 0 === t ? void 0 : t.toLowerCase()) === u);
                                })
                            );
                        },
                        [o, c, d, l, u]
                    );
                return o
                    ? Object(os.jsx)(ky, {
                          error: p,
                          children: Object(os.jsxs)(rs, {
                              gap: "6px",
                              children: [
                                  Object(os.jsxs)(Bc, { gap: "24px", children: [Object(os.jsx)(yp, { currency: o, size: "16px" }), Object(os.jsx)("div", { children: " " })] }),
                                  Object(os.jsxs)(Bc, {
                                      gap: "10px",
                                      justify: "flex-start",
                                      children: [
                                          Object(os.jsxs)(R, { children: [o && o.name && o.symbol && o.name !== o.symbol ? "".concat(o.name, " (").concat(o.symbol, ")") : o.name || o.symbol, " "] }),
                                          c &&
                                              Object(os.jsx)(Rs, {
                                                  style: { fontWeight: 400 },
                                                  href: ys(c, o.address, "token"),
                                                  children: Object(os.jsxs)(R, { title: o.address, children: [xs(o.address), " ", s(116, "(View on BscScan)")] }),
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null;
            }
            function Sy(e) {
                var n = e.isOpen,
                    t = e.tokens,
                    a = e.onConfirm,
                    i = Object(r.useState)(!1),
                    o = Object(Wa.a)(i, 2),
                    c = o[0],
                    s = o[1],
                    l = Object(r.useCallback)(function () {
                        return s(function (e) {
                            return !e;
                        });
                    }, []),
                    u = nu(),
                    d = Object(r.useCallback)(function () {
                        return null;
                    }, []);
                return Object(os.jsx)(Rl, {
                    isOpen: n,
                    onDismiss: d,
                    maxHeight: 90,
                    children: Object(os.jsx)(Ty, {
                        className: "token-warning-container",
                        children: Object(os.jsxs)(Bc, {
                            gap: "lg",
                            children: [
                                Object(os.jsxs)(rs, { gap: "6px", children: [Object(os.jsx)(Ey, {}), Object(os.jsx)(R, { color: "failure", children: u(1128, "Token imported") })] }),
                                Object(os.jsx)(R, {
                                    children: u(1130, "Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."),
                                }),
                                Object(os.jsx)(R, { children: u(1132, "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens.") }),
                                Object(os.jsx)(R, { children: u(1134, "If you purchase an arbitrary token, you may be unable to sell it back.") }),
                                t.map(function (e) {
                                    return Object(os.jsx)(Iy, { token: e }, e.address);
                                }),
                                Object(os.jsxs)(ns, {
                                    children: [
                                        Object(os.jsx)("div", {
                                            children: Object(os.jsxs)("label", {
                                                htmlFor: "understand-checkbox",
                                                style: { cursor: "pointer", userSelect: "none" },
                                                children: [
                                                    Object(os.jsx)("input", { id: "understand-checkbox", type: "checkbox", className: "understand-checkbox", checked: c, onChange: l }),
                                                    " ",
                                                    Object(os.jsx)(R, { as: "span", ml: "4px", children: u(148, "I understand") }),
                                                ],
                                            }),
                                        }),
                                        Object(os.jsx)(X, {
                                            disabled: !c,
                                            variant: "danger",
                                            style: { width: "140px" },
                                            className: "token-dismiss-button",
                                            onClick: function () {
                                                a();
                                            },
                                            children: u(150, "Continue"),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
            var Ny,
                Ly,
                Ry = c.default.div(Cy || (Cy = Object(qa.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]))),
                My = Object(c.default)(Wl.a)(wy || (wy = Object(qa.a)(["\n  stroke: ", ";\n"])), function (e) {
                    return e.theme.colors.failure;
                });
            function Ay(e) {
                var n = e.isOpen,
                    t = e.transactionType,
                    a = e.onConfirm,
                    i = Object(r.useState)(!1),
                    o = Object(Wa.a)(i, 2),
                    c = o[0],
                    s = o[1],
                    l = Object(r.useCallback)(function () {
                        return s(function (e) {
                            return !e;
                        });
                    }, []),
                    u = Object(r.useCallback)(function () {
                        return null;
                    }, []);
                return Object(os.jsx)(Rl, {
                    isOpen: n,
                    onDismiss: u,
                    maxHeight: 90,
                    children: Object(os.jsx)(Ry, {
                        className: "token-warning-container",
                        children: Object(os.jsxs)(Bc, {
                            gap: "lg",
                            children: [
                                Object(os.jsxs)(rs, { gap: "6px", children: [Object(os.jsx)(My, {}), Object(os.jsx)(R, { color: "failure", children: "Syrup Warning" })] }),
                                "" !== t &&
                                    Object(os.jsxs)(os.Fragment, {
                                        children: [
                                            Object(os.jsxs)(R, { color: "failure", children: ["Please be careful when ", Object(os.jsx)("strong", { children: t }), " SYRUP."] }),
                                            Object(os.jsx)(R, {
                                                color: "failure",
                                                children: "Buying" === t ? "You will not receive CAKE rewards for holding purchased SYRUP." : "You will need to buy back the same amount of SYRUP to be able to convert back to CAKE.",
                                            }),
                                        ],
                                    }),
                                Object(os.jsxs)(ns, {
                                    children: [
                                        Object(os.jsx)("div", {
                                            children: Object(os.jsxs)("label", {
                                                htmlFor: "understand-checkbox",
                                                style: { cursor: "pointer", userSelect: "none" },
                                                children: [
                                                    Object(os.jsx)("input", { id: "understand-checkbox", type: "checkbox", className: "understand-checkbox", checked: c, onChange: l }),
                                                    " ",
                                                    Object(os.jsx)(R, { as: "span", children: "I understand" }),
                                                ],
                                            }),
                                        }),
                                        Object(os.jsx)(X, {
                                            disabled: !c,
                                            variant: "danger",
                                            style: { width: "140px" },
                                            onClick: function () {
                                                s(!1), a();
                                            },
                                            children: "Continue",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
            var Dy,
                Uy,
                By,
                Py,
                Fy,
                _y = c.default.div(Ny || (Ny = Object(qa.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]))),
                zy = Object(c.default)(Wl.a)(Ly || (Ly = Object(qa.a)(["\n  stroke: ", ";\n"])), function (e) {
                    return e.theme.colors.binance;
                });
            function qy(e) {
                var n = e.isOpen,
                    t = e.onConfirm,
                    a = Object(r.useState)(!1),
                    i = Object(Wa.a)(a, 2),
                    o = i[0],
                    c = i[1],
                    s = Object(r.useCallback)(function () {
                        return c(function (e) {
                            return !e;
                        });
                    }, []),
                    l = Object(r.useCallback)(function () {
                        return null;
                    }, []);
                return Object(os.jsx)(Rl, {
                    isOpen: n,
                    onDismiss: l,
                    maxHeight: 90,
                    children: Object(os.jsx)(_y, {
                        className: "token-warning-container",
                        children: Object(os.jsxs)(Bc, {
                            gap: "lg",
                            children: [
                                Object(os.jsxs)(rs, { gap: "6px", children: [Object(os.jsx)(zy, {}), Object(os.jsx)(R, { children: "Notice for trading SafeMoon" })] }),
                                Object(os.jsxs)(os.Fragment, {
                                    children: [
                                        Object(os.jsxs)(R, { children: ["To trade SAFEMOON, you must click on the settings icon and", " ", Object(os.jsx)("strong", { children: "set your slippage tolerance to 12%+" })] }),
                                        Object(os.jsx)(R, { children: "This is because SafeMoon taxes a 10% fee on each transaction." }),
                                        Object(os.jsx)(R, { children: "\u2022 5% fee = redistributed to all existing holders" }),
                                        Object(os.jsx)(R, { children: "\u2022 5% fee = used to add liquidity" }),
                                    ],
                                }),
                                Object(os.jsxs)(ns, {
                                    children: [
                                        Object(os.jsx)("div", {
                                            children: Object(os.jsxs)("label", {
                                                htmlFor: "understand-checkbox",
                                                style: { cursor: "pointer", userSelect: "none" },
                                                children: [
                                                    Object(os.jsx)("input", { id: "understand-safeMoonWarning", type: "checkbox", className: "understand-checkbox", checked: o, onChange: s }),
                                                    " ",
                                                    Object(os.jsx)(R, { as: "span", children: "I understand" }),
                                                ],
                                            }),
                                        }),
                                        Object(os.jsx)(X, {
                                            id: "confirm-safeMoonWarning",
                                            disabled: !o,
                                            variant: "danger",
                                            style: { width: "140px" },
                                            onClick: function () {
                                                c(!1), t();
                                            },
                                            children: "Continue",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
            var Yy,
                Hy = Object(c.default)(Bc)(Dy || (Dy = Object(qa.a)(["\n  margin-top: 1.25rem;\n"]))),
                Vy = Object(c.default)(ns)(Uy || (Uy = Object(qa.a)(["\n  width: 50%;\n"]))),
                Zy = c.default.div(
                    By ||
                        (By = Object(qa.a)([
                            "\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",
                            ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ",
                            ";\n",
                        ])),
                    function (e) {
                        var n = e.theme,
                            t = e.confirmed;
                        return e.disabled ? n.colors.backgroundDisabled : t ? n.colors.success : n.colors.primary;
                    },
                    function (e) {
                        var n = e.theme,
                            t = e.confirmed;
                        return e.disabled ? n.colors.text : t ? n.colors.success : "#2a2113";
                    }
                ),
                Wy = c.default.div(Py || (Py = Object(qa.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]))),
                Qy = c.default.div(
                    Fy || (Fy = Object(qa.a)(["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", " 0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"])),
                    function (e) {
                        var n = e.theme,
                            t = e.prevConfirmed;
                        return Object(El.b)(0.5, t ? n.colors.success : n.colors.primary);
                    },
                    function (e) {
                        var n = e.theme;
                        return e.prevConfirmed ? n.colors.primary : n.colors.backgroundDisabled;
                    }
                );
            function Gy(e) {
                var n = e.steps;
                return Object(os.jsx)(Hy, {
                    justify: "center",
                    children: Object(os.jsxs)(Vy, {
                        children: [
                            n.map(function (e, t) {
                                return Object(os.jsxs)(Wy, { children: [Object(os.jsx)(Zy, { confirmed: e, disabled: !n[t - 1] && 0 !== t, children: e ? "\u2713" : t + 1 }), Object(os.jsx)(Qy, { prevConfirmed: e })] }, t);
                            }),
                            Object(os.jsx)(Zy, { disabled: !n[n.length - 1], children: n.length + 1 }),
                        ],
                    }),
                });
            }
            function Xy(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bc,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fc,
                    a = arguments.length > 3 ? arguments[3] : void 0,
                    i = Cc(),
                    o = i.account,
                    c = i.chainId,
                    s = i.library,
                    l = Om(a),
                    u = l.address,
                    d = null === a ? o : u;
                return Object(r.useMemo)(
                    function () {
                        if (!e || !d || !s || !o || !c) return [];
                        var r = Os(0, s, o);
                        if (!r) return [];
                        var a = [];
                        return (
                            a.push(Xo.swapCallParameters(e, { feeOnTransfer: !1, allowedSlippage: new zo(Li.a.BigInt(Math.floor(n)), hc), recipient: d, ttl: t })),
                            e.tradeType === Oi.EXACT_INPUT && a.push(Xo.swapCallParameters(e, { feeOnTransfer: !0, allowedSlippage: new zo(Li.a.BigInt(Math.floor(n)), hc), recipient: d, ttl: t })),
                            a.map(function (e) {
                                return { parameters: e, contract: r };
                            })
                        );
                    },
                    [o, n, c, t, s, d, e]
                );
            }
            function Ky(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bc,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fc,
                    a = arguments.length > 3 ? arguments[3] : void 0,
                    i = Cc(),
                    o = i.account,
                    c = i.chainId,
                    s = i.library,
                    l = Xy(e, n, t, a),
                    u = im(),
                    d = Om(a),
                    p = d.address,
                    b = null === a ? o : p;
                return Object(r.useMemo)(
                    function () {
                        return e && s && o && c
                            ? b
                                ? {
                                      state: Yy.VALID,
                                      callback: (function () {
                                          var n = Object(Za.a)(
                                              Va.a.mark(function n() {
                                                  var t, r, i, c, s, d, p, f, m, h;
                                                  return Va.a.wrap(function (n) {
                                                      for (;;)
                                                          switch ((n.prev = n.next)) {
                                                              case 0:
                                                                  return (
                                                                      (n.next = 2),
                                                                      Promise.all(
                                                                          l.map(function (e) {
                                                                              var n,
                                                                                  t = e.parameters,
                                                                                  r = t.methodName,
                                                                                  a = t.args,
                                                                                  i = t.value,
                                                                                  o = e.contract,
                                                                                  c = !i || Fd(i) ? {} : { value: i };
                                                                              return (n = o.estimateGas)[r]
                                                                                  .apply(n, Object(Ii.a)(a).concat([c]))
                                                                                  .then(function (n) {
                                                                                      return { call: e, gasEstimate: n };
                                                                                  })
                                                                                  .catch(function (n) {
                                                                                      var t;
                                                                                      return (
                                                                                          console.info("Gas estimate failed, trying eth_call to extract error", e),
                                                                                          (t = o.callStatic)[r]
                                                                                              .apply(t, Object(Ii.a)(a).concat([c]))
                                                                                              .then(function (t) {
                                                                                                  return (
                                                                                                      console.info("Unexpected successful call after failed estimate gas", e, n, t),
                                                                                                      { call: e, error: new Error("Unexpected issue with estimating the gas. Please try again.") }
                                                                                                  );
                                                                                              })
                                                                                              .catch(function (n) {
                                                                                                  var t;
                                                                                                  switch ((console.info("Call threw error", e, n), n.reason)) {
                                                                                                      case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                                                                      case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                                                                          t = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                                                                          break;
                                                                                                      default:
                                                                                                          t = "The transaction cannot succeed due to error: ".concat(
                                                                                                              n.reason,
                                                                                                              ". This is probably an issue with one of the tokens you are swapping."
                                                                                                          );
                                                                                                  }
                                                                                                  return { call: e, error: new Error(t) };
                                                                                              })
                                                                                      );
                                                                                  });
                                                                          })
                                                                      )
                                                                  );
                                                              case 2:
                                                                  if (
                                                                      ((t = n.sent),
                                                                      (r = t.find(function (e, n, t) {
                                                                          return "gasEstimate" in e && (n === t.length - 1 || "gasEstimate" in t[n + 1]);
                                                                      })))
                                                                  ) {
                                                                      n.next = 9;
                                                                      break;
                                                                  }
                                                                  if (
                                                                      !(
                                                                          (i = t.filter(function (e) {
                                                                              return "error" in e;
                                                                          })).length > 0
                                                                      )
                                                                  ) {
                                                                      n.next = 8;
                                                                      break;
                                                                  }
                                                                  throw i[i.length - 1].error;
                                                              case 8:
                                                                  throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                                              case 9:
                                                                  return (
                                                                      (c = r.call),
                                                                      (s = c.contract),
                                                                      (d = c.parameters),
                                                                      (p = d.methodName),
                                                                      (f = d.args),
                                                                      (m = d.value),
                                                                      (h = r.gasEstimate),
                                                                      n.abrupt(
                                                                          "return",
                                                                          s[p]
                                                                              .apply(s, Object(Ii.a)(f).concat([Object(Si.a)({ gasLimit: js(h) }, m && !Fd(m) ? { value: m, from: o } : { from: o })]))
                                                                              .then(function (n) {
                                                                                  var t = e.inputAmount.currency.symbol,
                                                                                      r = e.outputAmount.currency.symbol,
                                                                                      i = e.inputAmount.toSignificant(3),
                                                                                      c = e.outputAmount.toSignificant(3),
                                                                                      s = "Swap ".concat(i, " ").concat(t, " for ").concat(c, " ").concat(r),
                                                                                      l = b === o ? s : "".concat(s, " to ").concat(a && ms(a) ? xs(a) : a);
                                                                                  return u(n, { summary: l }), n.hash;
                                                                              })
                                                                              .catch(function (e) {
                                                                                  throw 4001 === (null === e || void 0 === e ? void 0 : e.code)
                                                                                      ? new Error("Transaction rejected.")
                                                                                      : (console.error("Swap failed", e, p, f, m), new Error("Swap failed: ".concat(e.message)));
                                                                              })
                                                                      )
                                                                  );
                                                              case 11:
                                                              case "end":
                                                                  return n.stop();
                                                          }
                                                  }, n);
                                              })
                                          );
                                          return function () {
                                              return n.apply(this, arguments);
                                          };
                                      })(),
                                      error: null,
                                  }
                                : null !== a
                                ? { state: Yy.INVALID, callback: null, error: "Invalid recipient" }
                                : { state: Yy.LOADING, callback: null, error: null }
                            : { state: Yy.INVALID, callback: null, error: "Missing dependencies" };
                    },
                    [e, s, o, c, b, a, l, u]
                );
            }
            !(function (e) {
                (e[(e.INVALID = 0)] = "INVALID"), (e[(e.LOADING = 1)] = "LOADING"), (e[(e.VALID = 2)] = "VALID");
            })(Yy || (Yy = {}));
            var Jy;
            !(function (e) {
                (e[(e.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"), (e[(e.WRAP = 1)] = "WRAP"), (e[(e.UNWRAP = 2)] = "UNWRAP");
            })(Jy || (Jy = {}));
            var $y = { wrapType: Jy.NOT_APPLICABLE };
            function ex(e, n, t) {
                var a = Cc(),
                    i = a.chainId,
                    o = a.account,
                    c = (function (e) {
                        var n = Cc().chainId;
                        return ud(n ? Eo[n].address : void 0, cd, e);
                    })(),
                    s = kd(null !== o && void 0 !== o ? o : void 0, e),
                    l = Object(r.useMemo)(
                        function () {
                            return Tm(t, e);
                        },
                        [e, t]
                    ),
                    u = im();
                return Object(r.useMemo)(
                    function () {
                        if (!c || !i || !e || !n) return $y;
                        var t = l && s && !s.lessThan(l);
                        return e === Oo && wo(Eo[i], n)
                            ? {
                                  wrapType: Jy.WRAP,
                                  execute:
                                      t && l
                                          ? Object(Za.a)(
                                                Va.a.mark(function e() {
                                                    var n;
                                                    return Va.a.wrap(
                                                        function (e) {
                                                            for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        return (e.prev = 0), (e.next = 3), c.deposit({ value: "0x".concat(l.raw.toString(16)) });
                                                                    case 3:
                                                                        (n = e.sent), u(n, { summary: "Wrap ".concat(l.toSignificant(6), " BNB to WBNB") }), (e.next = 10);
                                                                        break;
                                                                    case 7:
                                                                        (e.prev = 7), (e.t0 = e.catch(0)), console.error("Could not deposit", e.t0);
                                                                    case 10:
                                                                    case "end":
                                                                        return e.stop();
                                                                }
                                                        },
                                                        e,
                                                        null,
                                                        [[0, 7]]
                                                    );
                                                })
                                            )
                                          : void 0,
                                  inputError: t ? void 0 : "Insufficient BNB balance",
                              }
                            : wo(Eo[i], e) && n === Oo
                            ? {
                                  wrapType: Jy.UNWRAP,
                                  execute:
                                      t && l
                                          ? Object(Za.a)(
                                                Va.a.mark(function e() {
                                                    var n;
                                                    return Va.a.wrap(
                                                        function (e) {
                                                            for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        return (e.prev = 0), (e.next = 3), c.withdraw("0x".concat(l.raw.toString(16)));
                                                                    case 3:
                                                                        (n = e.sent), u(n, { summary: "Unwrap ".concat(l.toSignificant(6), " WBNB to BNB") }), (e.next = 10);
                                                                        break;
                                                                    case 7:
                                                                        (e.prev = 7), (e.t0 = e.catch(0)), console.error("Could not withdraw", e.t0);
                                                                    case 10:
                                                                    case "end":
                                                                        return e.stop();
                                                                }
                                                        },
                                                        e,
                                                        null,
                                                        [[0, 7]]
                                                    );
                                                })
                                            )
                                          : void 0,
                                  inputError: t ? void 0 : "Insufficient WBNB balance",
                              }
                            : $y;
                    },
                    [c, i, e, n, l, s, u]
                );
            }
            var nx = function () {
                var e,
                    n,
                    t,
                    a,
                    i,
                    o,
                    s,
                    l,
                    u,
                    d,
                    p = Am(),
                    b = nu(),
                    f = [jd(null === p || void 0 === p ? void 0 : p.inputCurrencyId), jd(null === p || void 0 === p ? void 0 : p.outputCurrencyId)],
                    m = f[0],
                    h = f[1],
                    y = Object(r.useState)(!1),
                    x = Object(Wa.a)(y, 2),
                    j = x[0],
                    v = x[1],
                    g = Object(r.useState)({ selectedToken: null, purchaseType: null }),
                    O = Object(Wa.a)(g, 2),
                    C = O[0],
                    w = O[1],
                    k = Object(r.useMemo)(
                        function () {
                            var e, n;
                            return null !==
                                (e =
                                    null === (n = [m, h]) || void 0 === n
                                        ? void 0
                                        : n.filter(function (e) {
                                              return e instanceof Co;
                                          })) && void 0 !== e
                                ? e
                                : [];
                        },
                        [m, h]
                    ),
                    T = Object(r.useCallback)(function () {
                        v(!0);
                    }, []),
                    E = function () {
                        w({ selectedToken: null, purchaseType: null });
                    },
                    I = Cc().account,
                    S = Object(r.useContext)(c.ThemeContext),
                    N = (function () {
                        var e = Object(Xa.c)(),
                            n = Ku(),
                            t = Object(r.useCallback)(
                                function () {
                                    e(Fu({ userExpertMode: !n }));
                                },
                                [n, e]
                            );
                        return [n, t];
                    })(),
                    L = Object(Wa.a)(N, 1)[0],
                    M = $u(),
                    A = Object(Wa.a)(M, 1)[0],
                    D = Ju(),
                    U = Object(Wa.a)(D, 1)[0],
                    B = km(),
                    P = B.independentField,
                    F = B.typedValue,
                    _ = B.recipient,
                    z = Sm(),
                    q = z.v2Trade,
                    Y = z.currencyBalances,
                    H = z.parsedAmount,
                    V = z.currencies,
                    Z = z.inputError,
                    W = ex(V[Gf.INPUT], V[Gf.OUTPUT], F),
                    Q = W.wrapType,
                    G = W.execute,
                    K = W.inputError,
                    J = Q !== Jy.NOT_APPLICABLE,
                    $ = J ? void 0 : q,
                    ee = J
                        ? ((e = {}), Object($a.a)(e, Gf.INPUT, H), Object($a.a)(e, Gf.OUTPUT, H), e)
                        : ((n = {}),
                          Object($a.a)(n, Gf.INPUT, P === Gf.INPUT ? H : null === $ || void 0 === $ ? void 0 : $.inputAmount),
                          Object($a.a)(n, Gf.OUTPUT, P === Gf.OUTPUT ? H : null === $ || void 0 === $ ? void 0 : $.outputAmount),
                          n),
                    ne = (function () {
                        var e = Object(Xa.c)(),
                            n = Object(r.useCallback)(
                                function (n, t) {
                                    e(Xf({ field: n, currencyId: t instanceof Co ? t.address : t === Oo ? "BNB" : "" }));
                                },
                                [e]
                            );
                        return {
                            onSwitchTokens: Object(r.useCallback)(
                                function () {
                                    e(Kf());
                                },
                                [e]
                            ),
                            onCurrencySelection: n,
                            onUserInput: Object(r.useCallback)(
                                function (n, t) {
                                    e(Jf({ field: n, typedValue: t }));
                                },
                                [e]
                            ),
                            onChangeRecipient: Object(r.useCallback)(
                                function (n) {
                                    e(em({ recipient: n }));
                                },
                                [e]
                            ),
                        };
                    })(),
                    te = ne.onSwitchTokens,
                    re = ne.onCurrencySelection,
                    ae = ne.onUserInput,
                    oe = ne.onChangeRecipient,
                    ce = !Z,
                    le = P === Gf.INPUT ? Gf.OUTPUT : Gf.INPUT,
                    ue = Object(r.useCallback)(
                        function (e) {
                            ae(Gf.INPUT, e);
                        },
                        [ae]
                    ),
                    de = Object(r.useCallback)(
                        function (e) {
                            ae(Gf.OUTPUT, e);
                        },
                        [ae]
                    ),
                    pe = Object(r.useState)({ showConfirm: !1, tradeToConfirm: void 0, attemptingTxn: !1, swapErrorMessage: void 0, txHash: void 0 }),
                    be = Object(Wa.a)(pe, 2),
                    fe = be[0],
                    me = fe.showConfirm,
                    he = fe.tradeToConfirm,
                    ye = fe.swapErrorMessage,
                    xe = fe.attemptingTxn,
                    je = fe.txHash,
                    ve = be[1],
                    ge =
                        ((s = {}),
                        Object($a.a)(s, P, F),
                        Object($a.a)(
                            s,
                            le,
                            J
                                ? null !== (t = null === (a = ee[P]) || void 0 === a ? void 0 : a.toExact()) && void 0 !== t
                                    ? t
                                    : ""
                                : null !== (i = null === (o = ee[le]) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== i
                                ? i
                                : ""
                        ),
                        s),
                    Oe = null === $ || void 0 === $ ? void 0 : $.route,
                    Ce = Boolean(V[Gf.INPUT] && V[Gf.OUTPUT] && (null === (l = ee[P]) || void 0 === l ? void 0 : l.greaterThan(Li.a.BigInt(0)))),
                    we = !Oe,
                    ke = (function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return ym(
                            Object(r.useMemo)(
                                function () {
                                    return e ? fm(e, n)[Gf.INPUT] : void 0;
                                },
                                [e, n]
                            ),
                            Ko
                        );
                    })($, U),
                    Te = Object(Wa.a)(ke, 2),
                    Ee = Te[0],
                    Ie = Te[1],
                    Se = Object(r.useState)(!1),
                    Ne = Object(Wa.a)(Se, 2),
                    Le = Ne[0],
                    Re = Ne[1];
                Object(r.useEffect)(
                    function () {
                        Ee === sm.PENDING && Re(!0);
                    },
                    [Ee, Le]
                );
                var Me = Bm(Y[Gf.INPUT]),
                    Ae = Boolean(Me && (null === (u = ee[Gf.INPUT]) || void 0 === u ? void 0 : u.equalTo(Me))),
                    De = Ky($, U, A, _),
                    Ue = De.callback,
                    Be = De.error,
                    Pe = bm($).priceImpactWithoutFee,
                    Fe = Object(r.useCallback)(
                        function () {
                            (Pe &&
                                !(function (e) {
                                    return e.lessThan(vc)
                                        ? !!e.lessThan(jc) || window.confirm("This swap has a price impact of at least ".concat(jc.toFixed(0), "%. Please confirm that you would like to continue with this swap."))
                                        : "confirm" === window.prompt("This swap has a price impact of at least ".concat(vc.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'));
                                })(Pe)) ||
                                (Ue &&
                                    (ve(function (e) {
                                        return Object(Si.a)(Object(Si.a)({}, e), {}, { attemptingTxn: !0, swapErrorMessage: void 0, txHash: void 0 });
                                    }),
                                    Ue()
                                        .then(function (e) {
                                            ve(function (n) {
                                                return Object(Si.a)(Object(Si.a)({}, n), {}, { attemptingTxn: !1, swapErrorMessage: void 0, txHash: e });
                                            });
                                        })
                                        .catch(function (e) {
                                            ve(function (n) {
                                                return Object(Si.a)(Object(Si.a)({}, n), {}, { attemptingTxn: !1, swapErrorMessage: e.message, txHash: void 0 });
                                            });
                                        })));
                        },
                        [Pe, Ue, ve]
                    ),
                    _e = Object(r.useState)(!1),
                    ze = Object(Wa.a)(_e, 2),
                    qe = ze[0],
                    Ye = ze[1],
                    Ve = mm(Pe),
                    Ze = !Z && (Ee === sm.NOT_APPROVED || Ee === sm.PENDING || (Le && Ee === sm.APPROVED)) && !(Ve > 3 && !L),
                    We = Object(r.useCallback)(
                        function () {
                            ve(function (e) {
                                return Object(Si.a)(Object(Si.a)({}, e), {}, { showConfirm: !1 });
                            }),
                                je && ae(Gf.INPUT, "");
                        },
                        [ae, je, ve]
                    ),
                    Qe = Object(r.useCallback)(
                        function () {
                            ve(function (e) {
                                return Object(Si.a)(Object(Si.a)({}, e), {}, { tradeToConfirm: $ });
                            });
                        },
                        [$]
                    ),
                    Ge = Object(r.useCallback)(
                        function (e, n) {
                            ["SYRUP", "SAFEMOON"].includes(e) && w({ selectedToken: e, purchaseType: n });
                        },
                        [w]
                    ),
                    Xe = Object(r.useCallback)(
                        function (e) {
                            Re(!1), re(Gf.INPUT, e), "SYRUP" === e.symbol && Ge(e.symbol, "Selling"), "SAFEMOON" === e.symbol && Ge(e.symbol, "Selling");
                        },
                        [re, Re, Ge]
                    ),
                    Ke = Object(r.useCallback)(
                        function () {
                            Me && ae(Gf.INPUT, Me.toExact());
                        },
                        [Me, ae]
                    ),
                    Je = Object(r.useCallback)(
                        function (e) {
                            re(Gf.OUTPUT, e), "SYRUP" === e.symbol && Ge(e.symbol, "Buying"), "SAFEMOON" === e.symbol && Ge(e.symbol, "Buying");
                        },
                        [re, Ge]
                    );
                return Object(os.jsxs)(os.Fragment, {
                    children: [
                        Object(os.jsx)(Sy, { isOpen: k.length > 0 && !j, tokens: k, onConfirm: T }),
                        Object(os.jsx)(Ay, { isOpen: "SYRUP" === C.selectedToken, transactionType: C.purchaseType, onConfirm: E }),
                        Object(os.jsx)(qy, { isOpen: "SAFEMOON" === C.selectedToken, onConfirm: E }),
                        Object(os.jsx)(au, {}),
                        Object(os.jsx)(nh, {
                            children: Object(os.jsxs)(Tf, {
                                id: "swap-page",
                                children: [
                                    Object(os.jsx)(dy, { isOpen: me, trade: $, originalTrade: he, onAcceptChanges: Qe, attemptingTxn: xe, txHash: je, recipient: _, allowedSlippage: U, onConfirm: Fe, swapErrorMessage: ye, onDismiss: We }),
                                    Object(os.jsx)(Mh, { title: b(8, "Exchange"), description: b(1192, "Trade tokens in an instant") }),
                                    Object(os.jsxs)(He, {
                                        children: [
                                            Object(os.jsxs)(Bc, {
                                                gap: "sm",
                                                children: [
                                                    Object(os.jsx)(nf, {
                                                        label: P === Gf.OUTPUT && !J && $ ? b(194, "From (estimated)") : b(76, "From"),
                                                        value: ge[Gf.INPUT],
                                                        showMaxButton: !Ae,
                                                        currency: V[Gf.INPUT],
                                                        onUserInput: ue,
                                                        onMax: Ke,
                                                        onCurrencySelect: Xe,
                                                        otherCurrency: V[Gf.OUTPUT],
                                                        id: "swap-currency-input",
                                                    }),
                                                    Object(os.jsx)(Bc, {
                                                        justify: "space-between",
                                                        children: Object(os.jsxs)(rs, {
                                                            justify: L ? "space-between" : "center",
                                                            style: { padding: "0 1rem" },
                                                            children: [
                                                                Object(os.jsx)(Ef, {
                                                                    clickable: !0,
                                                                    children: Object(os.jsx)(ie, {
                                                                        variant: "tertiary",
                                                                        onClick: function () {
                                                                            Re(!1), te();
                                                                        },
                                                                        style: { borderRadius: "50%" },
                                                                        scale: "sm",
                                                                        children: Object(os.jsx)(se, { color: "primary", width: "24px" }),
                                                                    }),
                                                                }),
                                                                null === _ && !J && L
                                                                    ? Object(os.jsx)(Ss, {
                                                                          id: "add-recipient-button",
                                                                          onClick: function () {
                                                                              return oe("");
                                                                          },
                                                                          children: "+ Add a send (optional)",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                    }),
                                                    Object(os.jsx)(nf, {
                                                        value: ge[Gf.OUTPUT],
                                                        onUserInput: de,
                                                        label: P === Gf.INPUT && !J && $ ? b(196, "To (estimated)") : b(80, "To"),
                                                        showMaxButton: !1,
                                                        currency: V[Gf.OUTPUT],
                                                        onCurrencySelect: Je,
                                                        otherCurrency: V[Gf.INPUT],
                                                        id: "swap-currency-output",
                                                    }),
                                                    null === _ || J
                                                        ? null
                                                        : Object(os.jsxs)(os.Fragment, {
                                                              children: [
                                                                  Object(os.jsxs)(rs, {
                                                                      justify: "space-between",
                                                                      style: { padding: "0 1rem" },
                                                                      children: [
                                                                          Object(os.jsx)(Ef, { clickable: !1, children: Object(os.jsx)(_h.a, { size: "16", color: S.colors.textSubtle }) }),
                                                                          Object(os.jsx)(Ss, {
                                                                              id: "remove-recipient-button",
                                                                              onClick: function () {
                                                                                  return oe(null);
                                                                              },
                                                                              children: "- Remove send",
                                                                          }),
                                                                      ],
                                                                  }),
                                                                  Object(os.jsx)(ay, { id: "recipient", value: _, onChange: oe }),
                                                              ],
                                                          }),
                                                    J
                                                        ? null
                                                        : Object(os.jsx)(Cl, {
                                                              padding: ".25rem .75rem 0 .75rem",
                                                              borderRadius: "20px",
                                                              children: Object(os.jsxs)(Bc, {
                                                                  gap: "4px",
                                                                  children: [
                                                                      Boolean($) &&
                                                                          Object(os.jsxs)(ns, {
                                                                              align: "center",
                                                                              children: [
                                                                                  Object(os.jsx)(R, { fontSize: "14px", children: b(1182, "Price") }),
                                                                                  Object(os.jsx)(Oy, { price: null === $ || void 0 === $ ? void 0 : $.executionPrice, showInverted: qe, setShowInverted: Ye }),
                                                                              ],
                                                                          }),
                                                                      U !== bc &&
                                                                          Object(os.jsxs)(ns, {
                                                                              align: "center",
                                                                              children: [Object(os.jsx)(R, { fontSize: "14px", children: b(88, "Slippage Tolerance") }), Object(os.jsxs)(R, { fontSize: "14px", children: [U / 100, "%"] })],
                                                                          }),
                                                                  ],
                                                              }),
                                                          }),
                                                ],
                                            }),
                                            Object(os.jsxs)(Sf, {
                                                children: [
                                                    I
                                                        ? J
                                                            ? Object(os.jsx)(X, { disabled: Boolean(K), onClick: G, width: "100%", children: null !== K && void 0 !== K ? K : Q === Jy.WRAP ? "Wrap" : Q === Jy.UNWRAP ? "Unwrap" : null })
                                                            : we && Ce
                                                            ? Object(os.jsx)(kl, { style: { textAlign: "center" }, children: Object(os.jsx)(R, { mb: "4px", children: b(1194, "Insufficient liquidity for this trade.") }) })
                                                            : Ze
                                                            ? Object(os.jsxs)(ns, {
                                                                  children: [
                                                                      Object(os.jsx)(X, {
                                                                          onClick: Ie,
                                                                          disabled: Ee !== sm.NOT_APPROVED || Le,
                                                                          style: { width: "48%" },
                                                                          variant: Ee === sm.APPROVED ? "success" : "primary",
                                                                          children:
                                                                              Ee === sm.PENDING
                                                                                  ? Object(os.jsxs)(rs, { gap: "6px", justify: "center", children: ["Approving ", Object(os.jsx)(ol, { stroke: "white" })] })
                                                                                  : Le && Ee === sm.APPROVED
                                                                                  ? "Approved"
                                                                                  : "Approve ".concat(null === (d = V[Gf.INPUT]) || void 0 === d ? void 0 : d.symbol),
                                                                      }),
                                                                      Object(os.jsx)(X, {
                                                                          onClick: function () {
                                                                              L ? Fe() : ve({ tradeToConfirm: $, attemptingTxn: !1, swapErrorMessage: void 0, showConfirm: !0, txHash: void 0 });
                                                                          },
                                                                          style: { width: "48%" },
                                                                          id: "swap-button",
                                                                          disabled: !ce || Ee !== sm.APPROVED || (Ve > 3 && !L),
                                                                          variant: ce && Ve > 2 ? "danger" : "primary",
                                                                          children: Ve > 3 && !L ? "Price Impact High" : "Swap".concat(Ve > 2 ? " Anyway" : ""),
                                                                      }),
                                                                  ],
                                                              })
                                                            : Object(os.jsx)(X, {
                                                                  onClick: function () {
                                                                      L ? Fe() : ve({ tradeToConfirm: $, attemptingTxn: !1, swapErrorMessage: void 0, showConfirm: !0, txHash: void 0 });
                                                                  },
                                                                  id: "swap-button",
                                                                  disabled: !ce || (Ve > 3 && !L) || !!Be,
                                                                  variant: ce && Ve > 2 && !Be ? "danger" : "primary",
                                                                  width: "100%",
                                                                  children: Z || (Ve > 3 && !L ? "Price Impact Too High" : "Swap".concat(Ve > 2 ? " Anyway" : "")),
                                                              })
                                                        : Object(os.jsx)($m, { width: "100%" }),
                                                    Ze && Object(os.jsx)(Gy, { steps: [Ee === sm.APPROVED] }),
                                                    L && ye ? Object(os.jsx)(Df, { error: ye }) : null,
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        Object(os.jsx)(gy, { trade: $ }),
                    ],
                });
            };
            function tx(e) {
                var n = e.location;
                return Object(os.jsx)(Qa.a, { to: Object(Si.a)(Object(Si.a)({}, n), {}, { pathname: "/swap" }) });
            }
            var rx,
                ax,
                ix,
                ox = { code: "en", language: "English" },
                cx = [
                    ox,
                    { code: "ar", language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
                    { code: "bn", language: "\u09ac\u09be\u0982\u09b2\u09be" },
                    { code: "zh-CN", language: "\u7b80\u4f53\u4e2d\u6587" },
                    { code: "zh-TW", language: "\u7e41\u9ad4\u4e2d\u6587" },
                    { code: "nl", language: "Nederlands" },
                    { code: "fil", language: "Filipino" },
                    { code: "fi", language: "Suomalainen" },
                    { code: "fr", language: "Fran\xe7ais" },
                    { code: "de", language: "Deutsch" },
                    { code: "el", language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac" },
                    { code: "hi", language: "\u0939\u093f\u0902\u0926\u0940" },
                    { code: "hu", language: "Magyar" },
                    { code: "id", language: "Bahasa Indonesia" },
                    { code: "it", language: "Italiano" },
                    { code: "ja", language: "\u65e5\u672c\u8a9e" },
                    { code: "ko", language: "\ud55c\uad6d\uc5b4" },
                    { code: "pl", language: "Polski" },
                    { code: "pt-PT", language: "Portugu\xeas (Portugal)" },
                    { code: "pt-BR", language: "Portugu\xeas (Brasil)" },
                    { code: "ro", language: "Rom\xe2n\u0103" },
                    { code: "ru", language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
                    { code: "es-ES", language: "Espa\xf1ol" },
                    { code: "sv-SE", language: "Svenska" },
                    { code: "ta", language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" },
                    { code: "tr", language: "T\xfcrk\xe7e" },
                    { code: "uk", language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430" },
                    { code: "vi", language: "Ti\u1ebfng Vi\u1ec7t" },
                ],
                sx = { selectedLanguage: { code: "", language: "" }, setSelectedLanguage: function () {}, translatedLanguage: { code: "", language: "" }, setTranslatedLanguage: function () {} },
                lx = Object(r.createContext)(sx),
                ux = "IS_DARK",
                dx = a.a.createContext({
                    isDark: !1,
                    toggleTheme: function () {
                        return null;
                    },
                }),
                px = function (e) {
                    var n = e.children,
                        t = Object(r.useState)(function () {
                            var e = localStorage.getItem(ux);
                            return !!e && JSON.parse(e);
                        }),
                        a = Object(Wa.a)(t, 2),
                        i = a[0],
                        o = a[1];
                    return Object(os.jsx)(dx.Provider, {
                        value: {
                            isDark: i,
                            toggleTheme: function () {
                                o(function (e) {
                                    return localStorage.setItem(ux, JSON.stringify(!e)), !e;
                                });
                            },
                        },
                        children: Object(os.jsx)(c.ThemeProvider, { theme: i ? _a : za, children: n }),
                    });
                },
                bx = function () {
                    var e = Object(r.useContext)(dx);
                    return { isDark: e.isDark, toggleTheme: e.toggleTheme, theme: Object(r.useContext)(c.ThemeContext) };
                },
                fx = function () {
                    var e = Object(r.useState)(null),
                        n = Object(Wa.a)(e, 2),
                        t = n[0],
                        a = n[1];
                    return (
                        Object(r.useEffect)(
                            function () {
                                (function () {
                                    var e = Object(Za.a)(
                                        Va.a.mark(function e() {
                                            var n, t;
                                            return Va.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.prev = 0), (e.next = 3), fetch("https://api.pancakeswap.info/api/tokens");
                                                            case 3:
                                                                return (n = e.sent), (e.next = 6), n.json();
                                                            case 6:
                                                                (t = e.sent), a(t), (e.next = 13);
                                                                break;
                                                            case 10:
                                                                (e.prev = 10), (e.t0 = e.catch(0)), console.error("Unable to fetch price data:", e.t0);
                                                            case 13:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [[0, 10]]
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })()();
                            },
                            [a]
                        ),
                        t
                    );
                },
                mx = t(316),
                hx = t.n(mx),
                yx = { profileLink: "https://pancakeswap.finance/profile", noProfileLink: "https://pancakeswap.finance/profile" },
                xx = function () {
                    var e = Object(r.useState)(yx),
                        n = Object(Wa.a)(e, 2),
                        t = n[0],
                        a = n[1],
                        i = Cc().account;
                    return (
                        Object(r.useEffect)(
                            function () {
                                if (i)
                                    try {
                                        var e = hx.a.get("profile_".concat(i));
                                        if (e) {
                                            var n = JSON.parse(e);
                                            a(function (e) {
                                                return Object(Si.a)(Object(Si.a)({}, e), {}, { username: n.username, image: n.avatar });
                                            });
                                        }
                                    } catch (t) {
                                        a(yx);
                                    }
                                else a(yx);
                            },
                            [i, a]
                        ),
                        t
                    );
                },
                jx = [
                    { label: "Home", icon: "HomeIcon", href: "/" },
                    {
                        label: "Trade",
                        icon: "TradeIcon",
                        initialOpenState: !0,
                        items: [
                            { label: "Exchange", href: "/swap" },
                            { label: "Liquidity", href: "/pool" },
                        ],
                    },
                    {
                        label: "Contact",
                        icon: "MoreIcon",
                        items: [
                            { label: "Telegram", href: "https://t.me/DexBuilder" },
                            { label: "Twitter", href: "https://t.me/DexBuilderBsc" },
                        ],
                    },
                ],
                vx = function (e) {
                    var n,
                        t,
                        a = Object(Ka.d)().account,
                        i = Jm(),
                        o = i.login,
                        c = i.logout,
                        s = Object(r.useContext)(lx),
                        l = s.selectedLanguage,
                        u = s.setSelectedLanguage,
                        d = bx(),
                        p = d.isDark,
                        b = d.toggleTheme,
                        f = fx(),
                        m = f ? Number(null === f || void 0 === f || null === (n = f.data) || void 0 === n || null === (t = n[Jo.address]) || void 0 === t ? void 0 : t.price) : void 0,
                        h = xx();
                    return Object(os.jsx)(
                        sa,
                        Object(Si.a)({ links: jx, account: a, login: o, logout: c, isDark: p, toggleTheme: b, currentLang: (null === l || void 0 === l ? void 0 : l.code) || "", langs: cx, setLang: u, cakePriceUsd: m, profile: h }, e)
                    );
                },
                gx = function () {
                    var e,
                        n,
                        t = fx(),
                        a = t ? parseFloat(null === t || void 0 === t || null === (e = t.data) || void 0 === e || null === (n = e[Jo.address]) || void 0 === n ? void 0 : n.price) : 0,
                        i = Number.isNaN(a) || 0 === a ? "" : " - $".concat(a.toLocaleString(void 0, { minimumFractionDigits: 3, maximumFractionDigits: 3 }));
                    Object(r.useEffect)(function () {}, [i]);
                },
                Ox = c.default.div(rx || (rx = Object(qa.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"]))),
                Cx = c.default.div(
                    ax ||
                        (ax = Object(qa.a)([
                            "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px 16px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n  justify-content: center;\n  background-size: 90%;\n\n  ",
                            " {\n    background-size: auto;\n  }\n\n  ",
                            " {\n    //min-height: 90vh;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.mediaQueries.xs;
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    }
                ),
                wx = c.default.div(ix || (ix = Object(qa.a)(["\n  margin-top: 5rem;\n"]))),
                kx = "pancakeSwapLanguage";
            function Tx() {
                var e = Object(r.useState)(void 0),
                    n = Object(Wa.a)(e, 2),
                    t = n[0],
                    a = n[1],
                    i = Object(r.useState)(void 0),
                    o = Object(Wa.a)(i, 2),
                    c = o[0],
                    s = o[1],
                    l = Object(r.useState)([]),
                    u = Object(Wa.a)(l, 2),
                    d = u[0],
                    p = u[1],
                    b = "".concat(
                        Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: ".",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0,
                            FAST_REFRESH: !0,
                            REACT_APP_NETWORK_URL: "https://bscrpc.com",
                            REACT_APP_CHAIN_ID: "56",
                            REACT_APP_GTAG: "G-DH1BX25VM9",
                        }).REACT_APP_CROWDIN_APIKEY
                    ),
                    m = parseInt(
                        "".concat(
                            Object({
                                NODE_ENV: "production",
                                PUBLIC_URL: ".",
                                WDS_SOCKET_HOST: void 0,
                                WDS_SOCKET_PATH: void 0,
                                WDS_SOCKET_PORT: void 0,
                                FAST_REFRESH: !0,
                                REACT_APP_NETWORK_URL: "https://bscrpc.com",
                                REACT_APP_CHAIN_ID: "56",
                                REACT_APP_GTAG: "G-DH1BX25VM9",
                            }).REACT_APP_CROWDIN_PROJECTID
                        )
                    ),
                    h = { token: b },
                    y = new Ga.StringTranslations(h);
                Object(r.useEffect)(function () {
                    var e = localStorage.getItem(kx);
                    if (e) {
                        var n = (function (e) {
                            return cx.filter(function (n) {
                                return n.code === e;
                            })[0];
                        })(e);
                        a(n);
                    } else a(ox);
                }, []);
                var x = (function () {
                    var e = Object(Za.a)(
                        Va.a.mark(function e() {
                            return Va.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            y.listLanguageTranslations(m, t.code, void 0, 6, 200)
                                                .then(function (e) {
                                                    e.data.length < 1 ? p(["error"]) : p(e.data);
                                                })
                                                .then(function () {
                                                    return s(t);
                                                })
                                                .catch(function (e) {
                                                    p(["error"]), console.error(e);
                                                });
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })();
                Object(r.useEffect)(
                    function () {
                        t && x();
                    },
                    [t]
                );
                return (
                    gx(),
                    Object(os.jsx)(r.Suspense, {
                        fallback: null,
                        children: Object(os.jsx)(f.a, {
                            children: Object(os.jsx)(Ox, {
                                children: Object(os.jsx)(lx.Provider, {
                                    value: {
                                        selectedLanguage: t,
                                        setSelectedLanguage: function (e) {
                                            a(e), localStorage.setItem(kx, e.code);
                                        },
                                        translatedLanguage: c,
                                        setTranslatedLanguage: s,
                                    },
                                    children: Object(os.jsx)(Kl.Provider, {
                                        value: { translations: d, setTranslations: p },
                                        children: Object(os.jsx)(vx, {
                                            children: Object(os.jsxs)(Cx, {
                                                children: [
                                                    Object(os.jsx)(Js, {}),
                                                    Object(os.jsx)(pl, {
                                                        children: Object(os.jsxs)(Qa.d, {
                                                            children: [
                                                                Object(os.jsx)(Qa.b, { exact: !0, strict: !0, path: "/swap", component: nx }),
                                                                Object(os.jsx)(Qa.b, { exact: !0, strict: !0, path: "/find", component: Dh }),
                                                                Object(os.jsx)(Qa.b, { exact: !0, strict: !0, path: "/pool", component: Ah }),
                                                                Object(os.jsx)(Qa.b, { exact: !0, path: "/add", component: ch }),
                                                                Object(os.jsx)(Qa.b, { exact: !0, strict: !0, path: "/remove/:currencyIdA/:currencyIdB", component: $h }),
                                                                Object(os.jsx)(Qa.b, { exact: !0, path: "/add/:currencyIdA", component: lh }),
                                                                Object(os.jsx)(Qa.b, { exact: !0, path: "/add/:currencyIdA/:currencyIdB", component: uh }),
                                                                Object(os.jsx)(Qa.b, { exact: !0, strict: !0, path: "/remove/:tokens", component: ph }),
                                                                Object(os.jsx)(Qa.b, { component: tx }),
                                                            ],
                                                        }),
                                                    }),
                                                    Object(os.jsx)(wx, {}),
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    })
                );
            }
            var Ex = "visibilityState" in document;
            function Ix() {
                return !Ex || "hidden" !== document.visibilityState;
            }
            function Sx() {
                var e = Object(r.useState)(Ix()),
                    n = Object(Wa.a)(e, 2),
                    t = n[0],
                    a = n[1],
                    i = Object(r.useCallback)(
                        function () {
                            a(Ix());
                        },
                        [a]
                    );
                return (
                    Object(r.useEffect)(
                        function () {
                            if (Ex)
                                return (
                                    document.addEventListener("visibilitychange", i),
                                    function () {
                                        document.removeEventListener("visibilitychange", i);
                                    }
                                );
                        },
                        [i]
                    ),
                    t
                );
            }
            function Nx() {
                var e = Cc(),
                    n = e.library,
                    t = e.chainId,
                    a = Object(Xa.c)(),
                    i = Sx(),
                    o = Object(r.useState)({ chainId: t, blockNumber: null }),
                    c = Object(Wa.a)(o, 2),
                    s = c[0],
                    l = c[1],
                    u = Object(r.useCallback)(
                        function (e) {
                            l(function (n) {
                                return t === n.chainId ? ("number" !== typeof n.blockNumber ? { chainId: t, blockNumber: e } : { chainId: t, blockNumber: Math.max(e, n.blockNumber) }) : n;
                            });
                        },
                        [t, l]
                    );
                Object(r.useEffect)(
                    function () {
                        if (n && t && i)
                            return (
                                l({ chainId: t, blockNumber: null }),
                                n
                                    .getBlockNumber()
                                    .then(u)
                                    .catch(function (e) {
                                        return console.error("Failed to get block number for chainId: ".concat(t), e);
                                    }),
                                n.on("block", u),
                                function () {
                                    n.removeListener("block", u);
                                }
                            );
                    },
                    [a, t, n, u, i]
                );
                var d = gm(s, 100);
                return (
                    Object(r.useEffect)(
                        function () {
                            d.chainId && d.blockNumber && i && a(Ic({ chainId: d.chainId, blockNumber: d.blockNumber }));
                        },
                        [i, a, d.blockNumber, d.chainId]
                    ),
                    null
                );
            }
            function Lx() {
                var e = Cc().library,
                    n = Object(Xa.c)(),
                    t = Object(Xa.d)(function (e) {
                        return e.lists.byUrl;
                    }),
                    a = Sx(),
                    i = pb();
                return (
                    Kd(
                        Object(r.useCallback)(
                            function () {
                                a &&
                                    Object.keys(t).forEach(function (e) {
                                        return i(e).catch(function (e) {
                                            return console.error("interval list fetching error", e);
                                        });
                                    });
                            },
                            [i, a, t]
                        ),
                        e ? 6e5 : null
                    ),
                    Object(r.useEffect)(
                        function () {
                            Object.keys(t).forEach(function (e) {
                                var n = t[e];
                                n.current ||
                                    n.loadingRequestId ||
                                    n.error ||
                                    i(e).catch(function (e) {
                                        return console.error("list added fetching error", e);
                                    });
                            });
                        },
                        [n, i, e, t]
                    ),
                    Object(r.useEffect)(
                        function () {
                            Object.keys(t).forEach(function (e) {
                                var r = t[e];
                                if (r.current && r.pendingUpdate) {
                                    var a = Object(zc.c)(r.current.version, r.pendingUpdate.version);
                                    switch (a) {
                                        case zc.a.NONE:
                                            throw new Error("unexpected no version bump");
                                        case zc.a.PATCH:
                                        case zc.a.MINOR:
                                            a >= Object(zc.d)(r.current.tokens, r.pendingUpdate.tokens)
                                                ? (n(Yc(e)), n(Lc({ key: e, content: { listUpdate: { listUrl: e, oldList: r.current, newList: r.pendingUpdate, auto: !0 } } })))
                                                : console.error("List at url ".concat(e, " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"));
                                            break;
                                        case zc.a.MAJOR:
                                            n(Lc({ key: e, content: { listUpdate: { listUrl: e, auto: !1, oldList: r.current, newList: r.pendingUpdate } }, removeAfterMs: null }));
                                    }
                                }
                            });
                        },
                        [n, t]
                    ),
                    null
                );
            }
            function Rx(e, n) {
                return (
                    (t = e + Math.round(Math.random() * Math.max(0, n - e))),
                    new Promise(function (e) {
                        return setTimeout(e, t);
                    })
                );
                var t;
            }
            var Mx = (function (e) {
                    Object(si.a)(t, e);
                    var n = Object(li.a)(t);
                    function t() {
                        return Object(ci.a)(this, t), n.call(this, "Cancelled");
                    }
                    return t;
                })(Object(ui.a)(Error)),
                Ax = (function (e) {
                    Object(si.a)(t, e);
                    var n = Object(li.a)(t);
                    function t() {
                        return Object(ci.a)(this, t), n.apply(this, arguments);
                    }
                    return t;
                })(Object(ui.a)(Error));
            function Dx() {
                return (Dx = Object(Za.a)(
                    Va.a.mark(function e(n, t, r) {
                        var a, i, o, c;
                        return Va.a.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.prev = 0),
                                                (e.next = 3),
                                                n.aggregate(
                                                    t.map(function (e) {
                                                        return [e.address, e.callData];
                                                    })
                                                )
                                            );
                                        case 3:
                                            (o = e.sent), (c = Object(Wa.a)(o, 2)), (a = c[0]), (i = c[1]), (e.next = 13);
                                            break;
                                        case 9:
                                            throw ((e.prev = 9), (e.t0 = e.catch(0)), console.info("Failed to fetch chunk inside retry", e.t0), e.t0);
                                        case 13:
                                            if (!(a.toNumber() < r)) {
                                                e.next = 15;
                                                break;
                                            }
                                            throw new Ax("Fetched for old block number");
                                        case 15:
                                            return e.abrupt("return", { results: i, blockNumber: a.toNumber() });
                                        case 16:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[0, 9]]
                        );
                    })
                )).apply(this, arguments);
            }
            function Ux() {
                var e = Object(Xa.c)(),
                    n = Object(Xa.d)(function (e) {
                        return e.multicall;
                    }),
                    t = gm(n.callListeners, 100),
                    a = Mc(),
                    i = Cc().chainId,
                    o = fd(),
                    c = Object(r.useRef)(),
                    s = Object(r.useMemo)(
                        function () {
                            return (function (e, n) {
                                if (!e || !n) return {};
                                var t = e[n];
                                return t
                                    ? Object.keys(t).reduce(function (e, n) {
                                          var r = t[n];
                                          return (
                                              (e[n] = Object.keys(r)
                                                  .filter(function (e) {
                                                      var n = parseInt(e);
                                                      return !(n <= 0) && r[n] > 0;
                                                  })
                                                  .reduce(function (e, n) {
                                                      return Math.min(e, parseInt(n));
                                                  }, 1 / 0)),
                                              e
                                          );
                                      }, {})
                                    : {};
                            })(t, i);
                        },
                        [t, i]
                    ),
                    l = Object(r.useMemo)(
                        function () {
                            return (function (e, n, t, r) {
                                return t && r
                                    ? e[t]
                                        ? Object.keys(n).filter(function (a) {
                                              var i = n[a],
                                                  o = e[t][a];
                                              if (!o) return !0;
                                              var c = r - (i - 1);
                                              return !(o.fetchingBlockNumber && o.fetchingBlockNumber >= c) && (!o.blockNumber || o.blockNumber < c);
                                          })
                                        : Object.keys(n)
                                    : [];
                            })(n.callResults, s, i, a);
                        },
                        [i, n.callResults, s, a]
                    ),
                    u = Object(r.useMemo)(
                        function () {
                            return JSON.stringify(l.sort());
                        },
                        [l]
                    );
                return (
                    Object(r.useEffect)(
                        function () {
                            var n;
                            if (a && i && o) {
                                var t = JSON.parse(u);
                                if (0 !== t.length) {
                                    var r,
                                        s,
                                        l = t.map(function (e) {
                                            return ju(e);
                                        }),
                                        d = (function (e, n) {
                                            if (n < 1) throw new Error("maxChunkSize must be gte 1");
                                            if (e.length <= n) return [e];
                                            var t = Math.ceil(e.length / n),
                                                r = Math.ceil(e.length / t);
                                            return Object(Ii.a)(Array(t).keys()).map(function (n) {
                                                return e.slice(n * r, n * r + r);
                                            });
                                        })(l, 500);
                                    if ((null === (n = c.current) || void 0 === n ? void 0 : n.blockNumber) !== a)
                                        null === (r = c.current) ||
                                            void 0 === r ||
                                            null === (s = r.cancellations) ||
                                            void 0 === s ||
                                            s.forEach(function (e) {
                                                return e();
                                            });
                                    e(Ou({ calls: l, chainId: i, fetchingBlockNumber: a })),
                                        (c.current = {
                                            blockNumber: a,
                                            cancellations: d.map(function (n, r) {
                                                var s = (function (e, n) {
                                                        var t,
                                                            r = n.n,
                                                            a = n.minWait,
                                                            i = n.maxWait,
                                                            o = !1;
                                                        return {
                                                            promise: new Promise(
                                                                (function () {
                                                                    var n = Object(Za.a)(
                                                                        Va.a.mark(function n(c, s) {
                                                                            var l;
                                                                            return Va.a.wrap(
                                                                                function (n) {
                                                                                    for (;;)
                                                                                        switch ((n.prev = n.next)) {
                                                                                            case 0:
                                                                                                t = s;
                                                                                            case 1:
                                                                                                return (l = void 0), (n.prev = 3), (n.next = 6), e();
                                                                                            case 6:
                                                                                                return (l = n.sent), o || (c(l), (o = !0)), n.abrupt("break", 24);
                                                                                            case 11:
                                                                                                if (((n.prev = 11), (n.t0 = n.catch(3)), !o)) {
                                                                                                    n.next = 15;
                                                                                                    break;
                                                                                                }
                                                                                                return n.abrupt("break", 24);
                                                                                            case 15:
                                                                                                if (!(r <= 0) && n.t0 instanceof Ax) {
                                                                                                    n.next = 19;
                                                                                                    break;
                                                                                                }
                                                                                                return s(n.t0), (o = !0), n.abrupt("break", 24);
                                                                                            case 19:
                                                                                                r--;
                                                                                            case 20:
                                                                                                return (n.next = 22), Rx(a, i);
                                                                                            case 22:
                                                                                                n.next = 1;
                                                                                                break;
                                                                                            case 24:
                                                                                            case "end":
                                                                                                return n.stop();
                                                                                        }
                                                                                },
                                                                                n,
                                                                                null,
                                                                                [[3, 11]]
                                                                            );
                                                                        })
                                                                    );
                                                                    return function (e, t) {
                                                                        return n.apply(this, arguments);
                                                                    };
                                                                })()
                                                            ),
                                                            cancel: function () {
                                                                o || ((o = !0), t(new Mx()));
                                                            },
                                                        };
                                                    })(
                                                        function () {
                                                            return (function (e, n, t) {
                                                                return Dx.apply(this, arguments);
                                                            })(o, n, a);
                                                        },
                                                        { n: 1 / 0, minWait: 2500, maxWait: 3500 }
                                                    ),
                                                    l = s.cancel;
                                                return (
                                                    s.promise
                                                        .then(function (n) {
                                                            var o = n.results,
                                                                s = n.blockNumber;
                                                            c.current = { cancellations: [], blockNumber: a };
                                                            var l = d.slice(0, r).reduce(function (e, n) {
                                                                    return e + n.length;
                                                                }, 0),
                                                                u = l + o.length;
                                                            e(
                                                                wu({
                                                                    chainId: i,
                                                                    results: t.slice(l, u).reduce(function (e, n, t) {
                                                                        var r;
                                                                        return (e[n] = null !== (r = o[t]) && void 0 !== r ? r : null), e;
                                                                    }, {}),
                                                                    blockNumber: s,
                                                                })
                                                            );
                                                        })
                                                        .catch(function (t) {
                                                            t instanceof Mx
                                                                ? console.error("Cancelled fetch for blockNumber", a)
                                                                : (console.error("Failed to fetch multicall chunk", n, i, t), e(Cu({ calls: n, chainId: i, fetchingBlockNumber: a })));
                                                        }),
                                                    l
                                                );
                                            }),
                                        });
                                }
                            }
                        },
                        [i, o, e, u, a]
                    ),
                    null
                );
            }
            function Bx() {
                var e,
                    n = Cc(),
                    t = n.chainId,
                    a = n.library,
                    i = Mc(),
                    o = Object(Xa.c)(),
                    c = Object(Xa.d)(function (e) {
                        return e.transactions;
                    }),
                    s = t && null !== (e = c[t]) && void 0 !== e ? e : {},
                    l = (function () {
                        var e = Object(Xa.c)();
                        return Object(r.useCallback)(
                            function (n, t) {
                                e(Lc({ content: n, key: t }));
                            },
                            [e]
                        );
                    })();
                return (
                    Object(r.useEffect)(
                        function () {
                            t &&
                                a &&
                                i &&
                                Object.keys(s)
                                    .filter(function (e) {
                                        return (function (e, n) {
                                            if (n.receipt) return !1;
                                            if (!n.lastCheckedBlockNumber) return !0;
                                            var t = e - n.lastCheckedBlockNumber;
                                            if (t < 1) return !1;
                                            var r = (new Date().getTime() - n.addedTime) / 1e3 / 60;
                                            return r > 60 ? t > 9 : !(r > 5) || t > 2;
                                        })(i, s[e]);
                                    })
                                    .forEach(function (e) {
                                        a.getTransactionReceipt(e)
                                            .then(function (n) {
                                                var r;
                                                n
                                                    ? (o(
                                                          rm({
                                                              chainId: t,
                                                              hash: e,
                                                              receipt: {
                                                                  blockHash: n.blockHash,
                                                                  blockNumber: n.blockNumber,
                                                                  contractAddress: n.contractAddress,
                                                                  from: n.from,
                                                                  status: n.status,
                                                                  to: n.to,
                                                                  transactionHash: n.transactionHash,
                                                                  transactionIndex: n.transactionIndex,
                                                              },
                                                          })
                                                      ),
                                                      l({ txn: { hash: e, success: 1 === n.status, summary: null === (r = s[e]) || void 0 === r ? void 0 : r.summary } }, e))
                                                    : o(am({ chainId: t, hash: e, blockNumber: i }));
                                            })
                                            .catch(function (n) {
                                                console.error("failed to check transaction hash: ".concat(e), n);
                                            });
                                    });
                        },
                        [t, a, s, i, o, l]
                    ),
                    null
                );
            }
            var Px = function () {
                    var e = Object(Xa.d)(function (e) {
                            return e.toasts.data;
                        }),
                        n = Km().remove;
                    return Object(os.jsx)(xa, {
                        toasts: e,
                        onRemove: function (e) {
                            return n(e);
                        },
                    });
                },
                Fx = t(205),
                _x = Object(Ec.c)({ blockNumber: {}, popupList: [], walletModalOpen: !1, settingsMenuOpen: !1 }, function (e) {
                    return e
                        .addCase(Ic, function (e, n) {
                            var t = n.payload,
                                r = t.chainId,
                                a = t.blockNumber;
                            "number" !== typeof e.blockNumber[r] ? (e.blockNumber[r] = a) : (e.blockNumber[r] = Math.max(a, e.blockNumber[r]));
                        })
                        .addCase(Sc, function (e) {
                            e.walletModalOpen = !e.walletModalOpen;
                        })
                        .addCase(Nc, function (e) {
                            e.settingsMenuOpen = !e.settingsMenuOpen;
                        })
                        .addCase(Lc, function (e, n) {
                            var t = n.payload,
                                r = t.content,
                                a = t.key,
                                i = t.removeAfterMs,
                                o = void 0 === i ? 15e3 : i;
                            e.popupList = (a
                                ? e.popupList.filter(function (e) {
                                      return e.key !== a;
                                  })
                                : e.popupList
                            ).concat([{ key: a || Object(Ec.f)(), show: !0, content: r, removeAfterMs: o }]);
                        })
                        .addCase(Rc, function (e, n) {
                            var t = n.payload.key;
                            e.popupList.forEach(function (e) {
                                e.key === t && (e.show = !1);
                            });
                        });
                }),
                zx = Object(Ec.b)("global/updateVersion"),
                qx =
                    (Ec.b,
                    function () {
                        return new Date().getTime();
                    });
            function Yx(e, n) {
                return "".concat(e, ";").concat(n);
            }
            var Hx,
                Vx = { userDarkMode: null, matchesDarkMode: !1, userExpertMode: !1, userSlippageTolerance: bc, userDeadline: fc, tokens: {}, pairs: {}, timestamp: qx(), audioPlay: !0 },
                Zx = Object(Ec.c)(Vx, function (e) {
                    return e
                        .addCase(zx, function (e) {
                            "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = bc), "number" !== typeof e.userDeadline && (e.userDeadline = fc), (e.lastUpdateVersionTimestamp = qx());
                        })
                        .addCase(Pu, function (e, n) {
                            (e.userDarkMode = n.payload.userDarkMode), (e.timestamp = qx());
                        })
                        .addCase(Bu, function (e, n) {
                            (e.matchesDarkMode = n.payload.matchesDarkMode), (e.timestamp = qx());
                        })
                        .addCase(Fu, function (e, n) {
                            (e.userExpertMode = n.payload.userExpertMode), (e.timestamp = qx());
                        })
                        .addCase(_u, function (e, n) {
                            (e.userSlippageTolerance = n.payload.userSlippageTolerance), (e.timestamp = qx());
                        })
                        .addCase(zu, function (e, n) {
                            (e.userDeadline = n.payload.userDeadline), (e.timestamp = qx());
                        })
                        .addCase(qu, function (e, n) {
                            var t = n.payload.serializedToken;
                            (e.tokens[t.chainId] = e.tokens[t.chainId] || {}), (e.tokens[t.chainId][t.address] = t), (e.timestamp = qx());
                        })
                        .addCase(Yu, function (e, n) {
                            var t = n.payload,
                                r = t.address,
                                a = t.chainId;
                            (e.tokens[a] = e.tokens[a] || {}), delete e.tokens[a][r], (e.timestamp = qx());
                        })
                        .addCase(Hu, function (e, n) {
                            var t = n.payload.serializedPair;
                            if (t.token0.chainId === t.token1.chainId && t.token0.address !== t.token1.address) {
                                var r = t.token0.chainId;
                                (e.pairs[r] = e.pairs[r] || {}), (e.pairs[r][Yx(t.token0.address, t.token1.address)] = t);
                            }
                            e.timestamp = qx();
                        })
                        .addCase(Vu, function (e, n) {
                            var t = n.payload,
                                r = t.chainId,
                                a = t.tokenAAddress,
                                i = t.tokenBAddress;
                            e.pairs[r] && (delete e.pairs[r][Yx(a, i)], delete e.pairs[r][Yx(i, a)]), (e.timestamp = qx());
                        })
                        .addCase(Zu, function (e) {
                            e.audioPlay = !1;
                        })
                        .addCase(Wu, function (e) {
                            e.audioPlay = !0;
                        });
                }),
                Wx = function () {
                    return new Date().getTime();
                },
                Qx = Object(Ec.c)({}, function (e) {
                    return e
                        .addCase(nm, function (e, n) {
                            var t,
                                r,
                                a = n.payload,
                                i = a.chainId,
                                o = a.from,
                                c = a.hash,
                                s = a.approval,
                                l = a.summary;
                            if (null === (t = e[i]) || void 0 === t ? void 0 : t[c]) throw Error("Attempted to add existing transaction.");
                            var u = null !== (r = e[i]) && void 0 !== r ? r : {};
                            (u[c] = { hash: c, approval: s, summary: l, from: o, addedTime: Wx() }), (e[i] = u);
                        })
                        .addCase(tm, function (e, n) {
                            var t = n.payload.chainId;
                            e[t] && (e[t] = {});
                        })
                        .addCase(am, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.chainId,
                                i = r.hash,
                                o = r.blockNumber,
                                c = null === (t = e[a]) || void 0 === t ? void 0 : t[i];
                            c && (c.lastCheckedBlockNumber ? (c.lastCheckedBlockNumber = Math.max(o, c.lastCheckedBlockNumber)) : (c.lastCheckedBlockNumber = o));
                        })
                        .addCase(rm, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.hash,
                                i = r.chainId,
                                o = r.receipt,
                                c = null === (t = e[i]) || void 0 === t ? void 0 : t[a];
                            c && ((c.receipt = o), (c.confirmedTime = Wx()));
                        });
                }),
                Gx = ((Hx = { independentField: Gf.INPUT, typedValue: "" }), Object($a.a)(Hx, Gf.INPUT, { currencyId: "" }), Object($a.a)(Hx, Gf.OUTPUT, { currencyId: "" }), Object($a.a)(Hx, "recipient", null), Hx),
                Xx = Object(Ec.c)(Gx, function (e) {
                    return e
                        .addCase($f, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.typedValue,
                                i = r.recipient,
                                o = r.field,
                                c = r.inputCurrencyId,
                                s = r.outputCurrencyId;
                            return (
                                (t = {}),
                                Object($a.a)(t, Gf.INPUT, { currencyId: c }),
                                Object($a.a)(t, Gf.OUTPUT, { currencyId: s }),
                                Object($a.a)(t, "independentField", o),
                                Object($a.a)(t, "typedValue", a),
                                Object($a.a)(t, "recipient", i),
                                t
                            );
                        })
                        .addCase(Xf, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.currencyId,
                                i = r.field,
                                o = i === Gf.INPUT ? Gf.OUTPUT : Gf.INPUT;
                            return a === e[o].currencyId
                                ? Object(Si.a)(
                                      Object(Si.a)({}, e),
                                      {},
                                      ((t = { independentField: e.independentField === Gf.INPUT ? Gf.OUTPUT : Gf.INPUT }), Object($a.a)(t, i, { currencyId: a }), Object($a.a)(t, o, { currencyId: e[i].currencyId }), t)
                                  )
                                : Object(Si.a)(Object(Si.a)({}, e), {}, Object($a.a)({}, i, { currencyId: a }));
                        })
                        .addCase(Kf, function (e) {
                            var n;
                            return Object(Si.a)(
                                Object(Si.a)({}, e),
                                {},
                                ((n = { independentField: e.independentField === Gf.INPUT ? Gf.OUTPUT : Gf.INPUT }),
                                Object($a.a)(n, Gf.INPUT, { currencyId: e[Gf.OUTPUT].currencyId }),
                                Object($a.a)(n, Gf.OUTPUT, { currencyId: e[Gf.INPUT].currencyId }),
                                n)
                            );
                        })
                        .addCase(Jf, function (e, n) {
                            var t = n.payload,
                                r = t.field,
                                a = t.typedValue;
                            return Object(Si.a)(Object(Si.a)({}, e), {}, { independentField: r, typedValue: a });
                        })
                        .addCase(em, function (e, n) {
                            var t = n.payload.recipient;
                            e.recipient = t;
                        });
                }),
                Kx = { independentField: lm.CURRENCY_A, typedValue: "", otherTypedValue: "" },
                Jx = Object(Ec.c)(Kx, function (e) {
                    return e
                        .addCase(jm, function () {
                            return Kx;
                        })
                        .addCase(xm, function (e, n) {
                            var t = n.payload,
                                r = t.field,
                                a = t.typedValue;
                            return t.noLiquidity
                                ? r === e.independentField
                                    ? Object(Si.a)(Object(Si.a)({}, e), {}, { independentField: r, typedValue: a })
                                    : Object(Si.a)(Object(Si.a)({}, e), {}, { independentField: r, typedValue: a, otherTypedValue: e.typedValue })
                                : Object(Si.a)(Object(Si.a)({}, e), {}, { independentField: r, typedValue: a, otherTypedValue: "" });
                        });
                }),
                $x = { error: null, current: null, loadingRequestId: null, pendingUpdate: null },
                ej = {
                    lastInitializedDefaultListOfLists: nb,
                    byUrl: Object(Si.a)(
                        Object(Si.a)(
                            {},
                            nb.reduce(function (e, n) {
                                return (e[n] = $x), e;
                            }, {})
                        ),
                        {},
                        Object($a.a)({}, eb, { error: null, current: tb, loadingRequestId: null, pendingUpdate: null })
                    ),
                    selectedListUrl: eb,
                },
                nj = Object(Ec.c)(ej, function (e) {
                    return e
                        .addCase(qc.pending, function (e, n) {
                            var t = n.payload,
                                r = t.requestId,
                                a = t.url;
                            e.byUrl[a] = Object(Si.a)(Object(Si.a)({ current: null, pendingUpdate: null }, e.byUrl[a]), {}, { loadingRequestId: r, error: null });
                        })
                        .addCase(qc.fulfilled, function (e, n) {
                            var t,
                                r,
                                a = n.payload,
                                i = a.requestId,
                                o = a.tokenList,
                                c = a.url,
                                s = null === (t = e.byUrl[c]) || void 0 === t ? void 0 : t.current,
                                l = null === (r = e.byUrl[c]) || void 0 === r ? void 0 : r.loadingRequestId;
                            if (s) {
                                if (Object(zc.c)(s.version, o.version) === zc.a.NONE) return;
                                (null !== l && l !== i) || (e.byUrl[c] = Object(Si.a)(Object(Si.a)({}, e.byUrl[c]), {}, { loadingRequestId: null, error: null, current: s, pendingUpdate: o }));
                            } else e.byUrl[c] = Object(Si.a)(Object(Si.a)({}, e.byUrl[c]), {}, { loadingRequestId: null, error: null, current: o, pendingUpdate: null });
                        })
                        .addCase(qc.rejected, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.url,
                                i = r.requestId,
                                o = r.errorMessage;
                            (null === (t = e.byUrl[a]) || void 0 === t ? void 0 : t.loadingRequestId) === i &&
                                (e.byUrl[a] = Object(Si.a)(Object(Si.a)({}, e.byUrl[a]), {}, { loadingRequestId: null, error: o, current: null, pendingUpdate: null }));
                        })
                        .addCase(Zc, function (e, n) {
                            var t = n.payload;
                            (e.selectedListUrl = t), e.byUrl[t] || (e.byUrl[t] = $x);
                        })
                        .addCase(Hc, function (e, n) {
                            var t = n.payload;
                            e.byUrl[t] || (e.byUrl[t] = $x);
                        })
                        .addCase(Vc, function (e, n) {
                            var t = n.payload;
                            e.byUrl[t] && delete e.byUrl[t], e.selectedListUrl === t && (e.selectedListUrl = Object.keys(e.byUrl)[0]);
                        })
                        .addCase(Yc, function (e, n) {
                            var t,
                                r = n.payload;
                            if (!(null === (t = e.byUrl[r]) || void 0 === t ? void 0 : t.pendingUpdate)) throw new Error("accept list update called without pending update");
                            e.byUrl[r] = Object(Si.a)(Object(Si.a)({}, e.byUrl[r]), {}, { pendingUpdate: null, current: e.byUrl[r].pendingUpdate });
                        })
                        .addCase(zx, function (e) {
                            if (e.lastInitializedDefaultListOfLists) {
                                if (e.lastInitializedDefaultListOfLists) {
                                    var n = e.lastInitializedDefaultListOfLists.reduce(function (e, n) {
                                            return e.add(n);
                                        }, new Set()),
                                        t = nb.reduce(function (e, n) {
                                            return e.add(n);
                                        }, new Set());
                                    nb.forEach(function (t) {
                                        n.has(t) || (e.byUrl[t] = $x);
                                    }),
                                        e.lastInitializedDefaultListOfLists.forEach(function (n) {
                                            t.has(n) || delete e.byUrl[n];
                                        });
                                }
                            } else (e.byUrl = ej.byUrl), (e.selectedListUrl = void 0);
                            e.lastInitializedDefaultListOfLists = nb;
                        });
                }),
                tj = { independentField: Bh.LIQUIDITY_PERCENT, typedValue: "0" },
                rj = Object(Ec.c)(tj, function (e) {
                    return e.addCase(Vh, function (e, n) {
                        var t = n.payload,
                            r = t.field,
                            a = t.typedValue;
                        return Object(Si.a)(Object(Si.a)({}, e), {}, { independentField: r, typedValue: a });
                    });
                }),
                aj = Object(Ec.c)({ callResults: {} }, function (e) {
                    return e
                        .addCase(vu, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.calls,
                                i = r.chainId,
                                o = r.options,
                                c = (o = void 0 === o ? {} : o).blocksPerFetch,
                                s = void 0 === c ? 1 : c,
                                l = e.callListeners ? e.callListeners : (e.callListeners = {});
                            (l[i] = null !== (t = l[i]) && void 0 !== t ? t : {}),
                                a.forEach(function (e) {
                                    var n,
                                        t,
                                        r = xu(e);
                                    (l[i][r] = null !== (n = l[i][r]) && void 0 !== n ? n : {}), (l[i][r][s] = (null !== (t = l[i][r][s]) && void 0 !== t ? t : 0) + 1);
                                });
                        })
                        .addCase(gu, function (e, n) {
                            var t = n.payload,
                                r = t.chainId,
                                a = t.calls,
                                i = t.options,
                                o = (i = void 0 === i ? {} : i).blocksPerFetch,
                                c = void 0 === o ? 1 : o,
                                s = e.callListeners ? e.callListeners : (e.callListeners = {});
                            s[r] &&
                                a.forEach(function (e) {
                                    var n = xu(e);
                                    s[r][n] && s[r][n][c] && (1 === s[r][n][c] ? delete s[r][n][c] : s[r][n][c]--);
                                });
                        })
                        .addCase(Ou, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.chainId,
                                i = r.fetchingBlockNumber,
                                o = r.calls;
                            (e.callResults[a] = null !== (t = e.callResults[a]) && void 0 !== t ? t : {}),
                                o.forEach(function (n) {
                                    var t = xu(n),
                                        r = e.callResults[a][t];
                                    if (r) {
                                        var o;
                                        if ((null !== (o = r.fetchingBlockNumber) && void 0 !== o ? o : 0) >= i) return;
                                        e.callResults[a][t].fetchingBlockNumber = i;
                                    } else e.callResults[a][t] = { fetchingBlockNumber: i };
                                });
                        })
                        .addCase(Cu, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.fetchingBlockNumber,
                                i = r.chainId,
                                o = r.calls;
                            (e.callResults[i] = null !== (t = e.callResults[i]) && void 0 !== t ? t : {}),
                                o.forEach(function (n) {
                                    var t = xu(n),
                                        r = e.callResults[i][t];
                                    r && r.fetchingBlockNumber === a && (delete r.fetchingBlockNumber, (r.data = null), (r.blockNumber = a));
                                });
                        })
                        .addCase(wu, function (e, n) {
                            var t,
                                r = n.payload,
                                a = r.chainId,
                                i = r.results,
                                o = r.blockNumber;
                            (e.callResults[a] = null !== (t = e.callResults[a]) && void 0 !== t ? t : {}),
                                Object.keys(i).forEach(function (n) {
                                    var t,
                                        r = e.callResults[a][n];
                                    (null !== (t = null === r || void 0 === r ? void 0 : r.blockNumber) && void 0 !== t ? t : 0) > o || (e.callResults[a][n] = { data: i[n], blockNumber: o });
                                });
                        });
                }),
                ij = ["user", "transactions"],
                oj = Object(Fx.load)({ states: ij });
            oj.user &&
                (oj.user.userDarkMode = (function () {
                    var e = null;
                    try {
                        var n = localStorage.getItem(Qu);
                        n && (e = JSON.parse(n));
                    } catch (t) {
                        console.error(t);
                    }
                    return e;
                })());
            var cj = Object(Ec.a)({
                reducer: { application: _x, user: Zx, transactions: Qx, swap: Xx, mint: Jx, burn: rj, multicall: aj, lists: nj, toasts: Xm },
                middleware: [].concat(Object(Ii.a)(Object(Ec.e)({ thunk: !1 })), [Object(Fx.save)({ states: ij })]),
                preloadedState: oj,
            });
            cj.dispatch(zx());
            var sj = cj;
            function lj(e) {
                var n = new ei.a(e);
                return (n.pollingInterval = 15e3), n;
            }
            var uj = Object(Ka.c)(pc),
                dj = function (e) {
                    var n = e.children;
                    return Object(os.jsx)(Ka.b, {
                        getLibrary: lj,
                        children: Object(os.jsx)(uj, { getLibrary: lj, children: Object(os.jsx)(Xa.a, { store: sj, children: Object(os.jsx)(px, { children: Object(os.jsx)(wr, { children: n }) }) }) }),
                    });
                },
                pj = (t(542), t(209)),
                bj = t(318),
                fj = t.n(bj),
                mj = t(319),
                hj = t.n(mj);
            pj.a
                .use(fj.a)
                .use(hj.a)
                .use(rl.a)
                .init({ backend: { loadPath: "./locales/{{lng}}.json" }, react: { useSuspense: !0 }, fallbackLng: "en", preload: ["en"], keySeparator: !1, interpolation: { escapeValue: !1 } });
            pj.a;
            "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1),
                window.addEventListener("error", function () {
                    var e;
                    null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists");
                }),
                o.a.render(
                    Object(os.jsx)(r.StrictMode, {
                        children: Object(os.jsxs)(dj, {
                            children: [
                                Object(os.jsxs)(os.Fragment, { children: [Object(os.jsx)(Lx, {}), Object(os.jsx)(Nx, {}), Object(os.jsx)(Bx, {}), Object(os.jsx)(Ux, {}), Object(os.jsx)(Px, {})] }),
                                Object(os.jsx)(ja, {}),
                                Object(os.jsx)(Ya, {}),
                                Object(os.jsx)(Tx, {}),
                            ],
                        }),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [[559, 2, 3]],
]);
