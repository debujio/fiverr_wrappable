(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
	{
			"constant": true,
			"inputs": [],
			"name": "name",
			"outputs": [
					{
							"name": "",
							"type": "string"
					}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
			"constant": false,
			"inputs": [
					{
							"name": "_spender",
							"type": "address"
					},
					{
							"name": "_value",
							"type": "uint256"
					}
			],
			"name": "approve",
			"outputs": [
					{
							"name": "",
							"type": "bool"
					}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"constant": true,
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
					{
							"name": "",
							"type": "uint256"
					}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
			"constant": false,
			"inputs": [
					{
							"name": "_from",
							"type": "address"
					},
					{
							"name": "_to",
							"type": "address"
					},
					{
							"name": "_value",
							"type": "uint256"
					}
			],
			"name": "transferFrom",
			"outputs": [
					{
							"name": "",
							"type": "bool"
					}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"constant": true,
			"inputs": [],
			"name": "decimals",
			"outputs": [
					{
							"name": "",
							"type": "uint8"
					}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
			"constant": true,
			"inputs": [
					{
							"name": "_owner",
							"type": "address"
					}
			],
			"name": "balanceOf",
			"outputs": [
					{
							"name": "balance",
							"type": "uint256"
					}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
			"constant": true,
			"inputs": [],
			"name": "symbol",
			"outputs": [
					{
							"name": "",
							"type": "string"
					}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
			"constant": false,
			"inputs": [
					{
							"name": "_to",
							"type": "address"
					},
					{
							"name": "_value",
							"type": "uint256"
					}
			],
			"name": "transfer",
			"outputs": [
					{
							"name": "",
							"type": "bool"
					}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"constant": true,
			"inputs": [
					{
							"name": "_owner",
							"type": "address"
					},
					{
							"name": "_spender",
							"type": "address"
					}
			],
			"name": "allowance",
			"outputs": [
					{
							"name": "",
							"type": "uint256"
					}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
			"payable": true,
			"stateMutability": "payable",
			"type": "fallback"
	},
	{
			"anonymous": false,
			"inputs": [
					{
							"indexed": true,
							"name": "owner",
							"type": "address"
					},
					{
							"indexed": true,
							"name": "spender",
							"type": "address"
					},
					{
							"indexed": false,
							"name": "value",
							"type": "uint256"
					}
			],
			"name": "Approval",
			"type": "event"
	},
	{
			"anonymous": false,
			"inputs": [
					{
							"indexed": true,
							"name": "from",
							"type": "address"
					},
					{
							"indexed": true,
							"name": "to",
							"type": "address"
					},
					{
							"indexed": false,
							"name": "value",
							"type": "uint256"
					}
			],
			"name": "Transfer",
			"type": "event"
	}
]
},{}],2:[function(require,module,exports){
module.exports={
  "myTokenAddress": "0x074a524b4a00Ef6a967148a5784e27a645B3E8e6",
  "otherTokenAddress": "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"
}
},{}],3:[function(require,module,exports){
module.exports={
  "contractName": "MyToken",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "AuthorizedOperator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Burned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Minted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "RevokedOperator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Sent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "authorizeOperator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "defaultOperators",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "granularity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "isOperatorFor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "operatorBurn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "operatorSend",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "revokeOperator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "send",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "swap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.10+commit.fc410830\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"AuthorizedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Burned\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"RevokedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Sent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"authorizeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultOperators\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"granularity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"isOperatorFor\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorSend\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"revokeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"send\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"swap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}. Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Note that accounts cannot have allowance issued by their operators.\"},\"authorizeOperator(address)\":{\"details\":\"See {IERC777-authorizeOperator}.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by an account (`tokenHolder`).\"},\"burn(uint256,bytes)\":{\"details\":\"See {IERC777-burn}. Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"decimals()\":{\"details\":\"See {ERC20-decimals}. Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility).\"},\"defaultOperators()\":{\"details\":\"See {IERC777-defaultOperators}.\"},\"granularity()\":{\"details\":\"See {IERC777-granularity}. This implementation always returns `1`.\"},\"isOperatorFor(address,address)\":{\"details\":\"See {IERC777-isOperatorFor}.\"},\"name()\":{\"details\":\"See {IERC777-name}.\"},\"operatorBurn(address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorBurn}. Emits {Burned} and {IERC20-Transfer} events.\"},\"operatorSend(address,address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorSend}. Emits {Sent} and {IERC20-Transfer} events.\"},\"revokeOperator(address)\":{\"details\":\"See {IERC777-revokeOperator}.\"},\"send(address,uint256,bytes)\":{\"details\":\"See {IERC777-send}. Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"symbol()\":{\"details\":\"See {IERC777-symbol}.\"},\"totalSupply()\":{\"details\":\"See {IERC777-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract. Also emits a {Sent} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators). Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MyToken.sol\":\"MyToken\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xbbc8ac883ac3c0078ce5ad3e288fbb3ffcc8a30c3a98c0fda0114d64fc44fca2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87a7a5d2f6f63f84598af02b8c50ca2df2631cb8ba2453e8d95fcb17e4be9824\",\"dweb:/ipfs/QmR76hqtAcRqoFj33tmNjcWTLrgNsAaakYwnKZ8zoJtKei\"]},\"@openzeppelin/contracts/token/ERC777/ERC777.sol\":{\"keccak256\":\"0x300d0814e420e06dc58a68721de7d0d974d39ca1c8dda3f6a8c75944f6939fec\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a15bc2f4e6c862385116993be306a8260bf31692656155dcd03164e2af82669e\",\"dweb:/ipfs/QmYqtJ7pWwC2Lv5hQECWBWa6odxoK2XxZTZbhsttVxpquc\"]},\"@openzeppelin/contracts/token/ERC777/IERC777.sol\":{\"keccak256\":\"0xe4e0b7e3f0265ffaa565d26acd2d45f2633f19127ed625e5a05a9f201a87a667\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1762b5bc15a009b5f092ccf547b81e0827c8705884f18e0623e497658514a7ed\",\"dweb:/ipfs/QmTtmVQYuynan3j2uVjdjjRJS1mr7LPRgxSZNnfqC7oxkz\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol\":{\"keccak256\":\"0x1a5d61db2733202ba361e6d6741cd2e662380e22b80e987eacfc91973f2267dc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://04c0cd697050a6516b7779aa2343ad2d0e5217d8915ac2382681dfdf4e445be3\",\"dweb:/ipfs/QmPCBCZgm7pHBwwogE2F9NCN3UfTdLNhqc8UDEvw8kDzyA\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Sender.sol\":{\"keccak256\":\"0x742e51d63b108240759794360637468d9fcbf072cbd357744790d356a87bb382\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://23912910ce2bb68e49ff83f43fcfa864210ee44580491e876db14922f8aecc18\",\"dweb:/ipfs/QmU6GnRQ51xvY8D57kPCV47oGeYozaz5AQZUCHxFfXdFZ4\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x2ccf9d2313a313d41a791505f2b5abfdc62191b5d4334f7f7a82691c088a1c87\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3a57d0854b2fdce6ebff933a48dca2445643d1eccfc27f00292e937f26c6a58\",\"dweb:/ipfs/QmW45rZooS9TqR4YXUbjRbtf2Bpb5ouSarBvfW1LdGprvV\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/introspection/IERC1820Registry.sol\":{\"keccak256\":\"0x6e306f9ab28416a9e5931f0b6e264676e8ac68fad184f9a9d8bb125c6ec23bc3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd7fe961c914caa1fcc8223d446c1582aec4f2a32d2f06cf09c938b72cf8ce11\",\"dweb:/ipfs/QmPfEfqtUh9SA86br28HfmMyVSBe22B3oPwF8iACCF4evY\"]},\"project:/contracts/MyToken.sol\":{\"keccak256\":\"0x97738355677d53bd2840f911aa4b196e5dd4e1a3a915f1f79ca1ab498f1645eb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ac52374cffb566fdc0e33e83b13b2494727fbfd8b7138554b0d1b2ccd0fc0964\",\"dweb:/ipfs/QmUcu9wKNxMQcqYZPxxWTuApWAXGyes8gZJsmzgGCoujSe\"]}},\"version\":1}",
  "bytecode": "0x608060405260098054600160a060020a03191673fe4f5145f6e09952a5ba9e956ed0c25e3fa4c7f11790553480156200003757600080fd5b50604080518082018252600781527f4d79546f6b656e0000000000000000000000000000000000000000000000000060208083019182528351808501855260028082527f4d54000000000000000000000000000000000000000000000000000000000000828401528551600081529283019095528351939490939192620000be92620002cf565b508151620000d4906003906020850190620002cf565b508051620000ea9060049060208401906200035e565b5060005b81518110156200015a57600160056000848481518110620001135762000113620003cd565b602090810291909101810151600160a060020a03168252810191909152604001600020805460ff1916911515919091179055806200015181620003fc565b915050620000ee565b506040517f29965a1d00000000000000000000000000000000000000000000000000000000815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b158015620001ee57600080fd5b505af115801562000203573d6000803e3d6000fd5b50506040517f29965a1d00000000000000000000000000000000000000000000000000000000815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b1580156200029a57600080fd5b505af1158015620002af573d6000803e3d6000fd5b5050600a8054600160a060020a0319163317905550620004959350505050565b828054620002dd906200043f565b90600052602060002090601f0160209004810192826200030157600085556200034c565b82601f106200031c57805160ff19168380011785556200034c565b828001600101855582156200034c579182015b828111156200034c5782518255916020019190600101906200032f565b506200035a929150620003b6565b5090565b8280548282559060005260206000209081019282156200034c579160200282015b828111156200034c5782518254600160a060020a031916600160a060020a039091161782556020909201916001909101906200037f565b5b808211156200035a5760008155600101620003b7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060001982141562000438577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6002810460018216806200045457607f821691505b602082108114156200048f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b611ed980620004a56000396000f3fe608060405234801561001057600080fd5b5060043610610154576000357c010000000000000000000000000000000000000000000000000000000090048063853828b6116100d5578063a9059cbb11610099578063a9059cbb14610284578063d95b637114610297578063dd62ed3e146102aa578063fad8b32a146102e3578063fc673c4f146102f6578063fe9d93031461030957600080fd5b8063853828b61461023b57806394b918de14610243578063959b8c3f1461025657806395d89b41146102695780639bd9bbc61461027157600080fd5b80632e1a7d4d1161011c5780632e1a7d4d146101d4578063313ce567146101e9578063556f0dc7146101f857806362ad1b83146101ff57806370a082311461021257600080fd5b806306e485381461015957806306fdde0314610177578063095ea7b31461018c57806318160ddd146101af57806323b872dd146101c1575b600080fd5b61016161031c565b60405161016e9190611844565b60405180910390f35b61017f61037e565b60405161016e91906118de565b61019f61019a366004611906565b610407565b604051901515815260200161016e565b6001545b60405190815260200161016e565b61019f6101cf366004611932565b61041f565b6101e76101e2366004611973565b610573565b005b6040516012815260200161016e565b60016101b3565b6101e761020d366004611a48565b610666565b6101b3610220366004611adb565b600160a060020a031660009081526020819052604090205490565b6101e76106a5565b6101e7610251366004611973565b61081d565b6101e7610264366004611adb565b6108dc565b61017f610a16565b6101e761027f366004611af8565b610a25565b61019f610292366004611906565b610a48565b61019f6102a5366004611b51565b610afe565b6101b36102b8366004611b51565b600160a060020a03918216600090815260086020908152604080832093909416825291909152205490565b6101e76102f1366004611adb565b610ba0565b6101e7610304366004611b8a565b610cdb565b6101e7610317366004611c0a565b610d16565b6060600480548060200260200160405190810160405280929190818152602001828054801561037457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610356575b5050505050905090565b60606002805461038d90611c51565b80601f01602080910402602001604051908101604052809291908181526020018280546103b990611c51565b80156103745780601f106103db57610100808354040283529160200191610374565b820191906000526020600020905b8154815290600101906020018083116103e957509395945050505050565b600033610415818585610d31565b5060019392505050565b6000600160a060020a0383166104535760405160e560020a62461bcd02815260040161044a90611ca5565b60405180910390fd5b600160a060020a0384166104d25760405160e560020a62461bcd02815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161044a565b6000339050610503818686866040518060200160405280600081525060405180602001604052806000815250610e90565b61050e858285610fea565b61053a818686866040518060200160405280600081525060405180602001604052806000815250611079565b61056881868686604051806020016040528060008152506040518060200160405280600081525060006111f8565b506001949350505050565b600a54600160a060020a031633146105d05760405160e560020a62461bcd02815260206004820152600d60248201527f4163636573732044656e69656400000000000000000000000000000000000000604482015260640161044a565b600954600a546040517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af115801561063e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106629190611d02565b5050565b6106703386610afe565b61068f5760405160e560020a62461bcd02815260040161044a90611d24565b61069e85858585856001611402565b5050505050565b600a54600160a060020a031633146107025760405160e560020a62461bcd02815260206004820152600d60248201527f4163636573732044656e69656400000000000000000000000000000000000000604482015260640161044a565b600954600a546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600160a060020a039283169263a9059cbb92169083906370a0823190602401602060405180830381865afa158015610770573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107949190611d81565b6040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a03909216600483015260248201526044016020604051808303816000875af11580156107f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081a9190611d02565b50565b6009546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052600160a060020a03909116906323b872dd906064016020604051808303816000875af115801561088d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b19190611d02565b5061081a33826040518060200160405280600081525060405180602001604052806000815250611506565b33600160a060020a038216141561095d5760405160e560020a62461bcd028152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201527f61746f7200000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a03811660009081526005602052604090205460ff16156109ae57336000908152600760209081526040808320600160a060020a03851684529091529020805460ff191690556109dd565b336000908152600660209081526040808320600160a060020a03851684529091529020805460ff191660011790555b6040513390600160a060020a038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60606003805461038d90611c51565b610a4333848484604051806020016040528060008152506001611402565b505050565b6000600160a060020a038316610a735760405160e560020a62461bcd02815260040161044a90611ca5565b6000339050610aa4818286866040518060200160405280600081525060405180602001604052806000815250610e90565b610ad0818286866040518060200160405280600081525060405180602001604052806000815250611079565b61041581828686604051806020016040528060008152506040518060200160405280600081525060006111f8565b600081600160a060020a031683600160a060020a03161480610b695750600160a060020a03831660009081526005602052604090205460ff168015610b695750600160a060020a0380831660009081526007602090815260408083209387168352929052205460ff16155b80610b995750600160a060020a0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b600160a060020a038116331415610c225760405160e560020a62461bcd02815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f60448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a03811660009081526005602052604090205460ff1615610c7657336000908152600760209081526040808320600160a060020a03851684529091529020805460ff19166001179055610ca2565b336000908152600660209081526040808320600160a060020a03851684529091529020805460ff191690555b6040513390600160a060020a038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b610ce53385610afe565b610d045760405160e560020a62461bcd02815260040161044a90611d24565b610d1084848484611514565b50505050565b61066233838360405180602001604052806000815250611514565b600160a060020a038316610db05760405160e560020a62461bcd02815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a038216610e2f5760405160e560020a62461bcd02815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600160a060020a03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015610f2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4e9190611d9a565b9050600160a060020a03811615610fe1576040517f75ab9782000000000000000000000000000000000000000000000000000000008152600160a060020a038216906375ab978290610fae908a908a908a908a908a908a90600401611db7565b600060405180830381600087803b158015610fc857600080fd5b505af1158015610fdc573d6000803e3d6000fd5b505050505b50505050505050565b600160a060020a038381166000908152600860209081526040808320938616835292905220546000198114610d10578181101561106c5760405160e560020a62461bcd02815260206004820152601e60248201527f4552433737373a20696e73756666696369656e7420616c6c6f77616e63650000604482015260640161044a565b610d108484848403610d31565b600160a060020a0385166000908152602081905260409020548381101561110b5760405160e560020a62461bcd02815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201527f62616c616e636500000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a03808716600090815260208190526040808220878503905591871681529081208054869290611142908490611e3f565b9250508190555084600160a060020a031686600160a060020a031688600160a060020a03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc8261467798787878760405161119a93929190611e57565b60405180910390a484600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516111e791815260200190565b60405180910390a350505050505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600160a060020a03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015611292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b69190611d9a565b9050600160a060020a0381161561134b576040517e23de29000000000000000000000000000000000000000000000000000000008152600160a060020a038216906223de2990611314908b908b908b908b908b908b90600401611db7565b600060405180830381600087803b15801561132e57600080fd5b505af1158015611342573d6000803e3d6000fd5b505050506113f8565b81156113f857600160a060020a0386163b156113f85760405160e560020a62461bcd02815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201527f6b656e73526563697069656e7400000000000000000000000000000000000000608482015260a40161044a565b5050505050505050565b600160a060020a0386166114815760405160e560020a62461bcd02815260206004820152602260248201527f4552433737373a2073656e642066726f6d20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a0385166114da5760405160e560020a62461bcd02815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373604482015260640161044a565b336114e9818888888888610e90565b6114f7818888888888611079565b610fe1818888888888886111f8565b610d10848484846001611704565b600160a060020a0384166115935760405160e560020a62461bcd02815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161044a565b336115a381866000878787610e90565b600160a060020a038516600090815260208190526040902054848110156116355760405160e560020a62461bcd02815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c6160448201527f6e63650000000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a0386166000908152602081905260408120868303905560018054879290611664908490611e8c565b9250508190555085600160a060020a031682600160a060020a03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516116b293929190611e57565b60405180910390a3604051858152600090600160a060020a038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050505050565b600160a060020a03851661175d5760405160e560020a62461bcd02815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015260640161044a565b600033905084600160008282546117749190611e3f565b9091555050600160a060020a038616600090815260208190526040812080548792906117a1908490611e3f565b909155506117b7905081600088888888886111f8565b85600160a060020a031681600160a060020a03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d8787876040516117fe93929190611e57565b60405180910390a3604051858152600160a060020a038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016116f4565b6020808252825182820181905260009190848201906040850190845b81811015611885578351600160a060020a031683529284019291840191600101611860565b50909695505050505050565b6000815180845260005b818110156118b75760208185018101518683018201520161189b565b818111156118c9576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610b996020830184611891565b600160a060020a038116811461081a57600080fd5b6000806040838503121561191957600080fd5b8235611924816118f1565b946020939093013593505050565b60008060006060848603121561194757600080fd5b8335611952816118f1565b92506020840135611962816118f1565b929592945050506040919091013590565b60006020828403121561198557600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126119cc57600080fd5b813567ffffffffffffffff808211156119e7576119e761198c565b604051601f8301601f19908116603f01168101908282118183101715611a0f57611a0f61198c565b81604052838152866020858801011115611a2857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a08688031215611a6057600080fd5b8535611a6b816118f1565b94506020860135611a7b816118f1565b935060408601359250606086013567ffffffffffffffff80821115611a9f57600080fd5b611aab89838a016119bb565b93506080880135915080821115611ac157600080fd5b50611ace888289016119bb565b9150509295509295909350565b600060208284031215611aed57600080fd5b8135610b99816118f1565b600080600060608486031215611b0d57600080fd5b8335611b18816118f1565b925060208401359150604084013567ffffffffffffffff811115611b3b57600080fd5b611b47868287016119bb565b9150509250925092565b60008060408385031215611b6457600080fd5b8235611b6f816118f1565b91506020830135611b7f816118f1565b809150509250929050565b60008060008060808587031215611ba057600080fd5b8435611bab816118f1565b935060208501359250604085013567ffffffffffffffff80821115611bcf57600080fd5b611bdb888389016119bb565b93506060870135915080821115611bf157600080fd5b50611bfe878288016119bb565b91505092959194509250565b60008060408385031215611c1d57600080fd5b82359150602083013567ffffffffffffffff811115611c3b57600080fd5b611c47858286016119bb565b9150509250929050565b600281046001821680611c6557607f821691505b60208210811415611c9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60208082526024908201527f4552433737373a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b600060208284031215611d1457600080fd5b81518015158114610b9957600080fd5b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201527f7220666f7220686f6c6465720000000000000000000000000000000000000000606082015260800190565b600060208284031215611d9357600080fd5b5051919050565b600060208284031215611dac57600080fd5b8151610b99816118f1565b6000600160a060020a038089168352808816602084015280871660408401525084606083015260c06080830152611df160c0830185611891565b82810360a0840152611e038185611891565b9998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611e5257611e52611e10565b500190565b838152606060208201526000611e706060830185611891565b8281036040840152611e828185611891565b9695505050505050565b600082821015611e9e57611e9e611e10565b50039056fea2646970667358221220d25a7bcddd08d309bf68d76f4744650605d3f8b8724a718bd170de6ec6e8717564736f6c634300080a0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b5060043610610154576000357c010000000000000000000000000000000000000000000000000000000090048063853828b6116100d5578063a9059cbb11610099578063a9059cbb14610284578063d95b637114610297578063dd62ed3e146102aa578063fad8b32a146102e3578063fc673c4f146102f6578063fe9d93031461030957600080fd5b8063853828b61461023b57806394b918de14610243578063959b8c3f1461025657806395d89b41146102695780639bd9bbc61461027157600080fd5b80632e1a7d4d1161011c5780632e1a7d4d146101d4578063313ce567146101e9578063556f0dc7146101f857806362ad1b83146101ff57806370a082311461021257600080fd5b806306e485381461015957806306fdde0314610177578063095ea7b31461018c57806318160ddd146101af57806323b872dd146101c1575b600080fd5b61016161031c565b60405161016e9190611844565b60405180910390f35b61017f61037e565b60405161016e91906118de565b61019f61019a366004611906565b610407565b604051901515815260200161016e565b6001545b60405190815260200161016e565b61019f6101cf366004611932565b61041f565b6101e76101e2366004611973565b610573565b005b6040516012815260200161016e565b60016101b3565b6101e761020d366004611a48565b610666565b6101b3610220366004611adb565b600160a060020a031660009081526020819052604090205490565b6101e76106a5565b6101e7610251366004611973565b61081d565b6101e7610264366004611adb565b6108dc565b61017f610a16565b6101e761027f366004611af8565b610a25565b61019f610292366004611906565b610a48565b61019f6102a5366004611b51565b610afe565b6101b36102b8366004611b51565b600160a060020a03918216600090815260086020908152604080832093909416825291909152205490565b6101e76102f1366004611adb565b610ba0565b6101e7610304366004611b8a565b610cdb565b6101e7610317366004611c0a565b610d16565b6060600480548060200260200160405190810160405280929190818152602001828054801561037457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610356575b5050505050905090565b60606002805461038d90611c51565b80601f01602080910402602001604051908101604052809291908181526020018280546103b990611c51565b80156103745780601f106103db57610100808354040283529160200191610374565b820191906000526020600020905b8154815290600101906020018083116103e957509395945050505050565b600033610415818585610d31565b5060019392505050565b6000600160a060020a0383166104535760405160e560020a62461bcd02815260040161044a90611ca5565b60405180910390fd5b600160a060020a0384166104d25760405160e560020a62461bcd02815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161044a565b6000339050610503818686866040518060200160405280600081525060405180602001604052806000815250610e90565b61050e858285610fea565b61053a818686866040518060200160405280600081525060405180602001604052806000815250611079565b61056881868686604051806020016040528060008152506040518060200160405280600081525060006111f8565b506001949350505050565b600a54600160a060020a031633146105d05760405160e560020a62461bcd02815260206004820152600d60248201527f4163636573732044656e69656400000000000000000000000000000000000000604482015260640161044a565b600954600a546040517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af115801561063e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106629190611d02565b5050565b6106703386610afe565b61068f5760405160e560020a62461bcd02815260040161044a90611d24565b61069e85858585856001611402565b5050505050565b600a54600160a060020a031633146107025760405160e560020a62461bcd02815260206004820152600d60248201527f4163636573732044656e69656400000000000000000000000000000000000000604482015260640161044a565b600954600a546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600160a060020a039283169263a9059cbb92169083906370a0823190602401602060405180830381865afa158015610770573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107949190611d81565b6040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a03909216600483015260248201526044016020604051808303816000875af11580156107f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081a9190611d02565b50565b6009546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052600160a060020a03909116906323b872dd906064016020604051808303816000875af115801561088d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b19190611d02565b5061081a33826040518060200160405280600081525060405180602001604052806000815250611506565b33600160a060020a038216141561095d5760405160e560020a62461bcd028152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201527f61746f7200000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a03811660009081526005602052604090205460ff16156109ae57336000908152600760209081526040808320600160a060020a03851684529091529020805460ff191690556109dd565b336000908152600660209081526040808320600160a060020a03851684529091529020805460ff191660011790555b6040513390600160a060020a038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60606003805461038d90611c51565b610a4333848484604051806020016040528060008152506001611402565b505050565b6000600160a060020a038316610a735760405160e560020a62461bcd02815260040161044a90611ca5565b6000339050610aa4818286866040518060200160405280600081525060405180602001604052806000815250610e90565b610ad0818286866040518060200160405280600081525060405180602001604052806000815250611079565b61041581828686604051806020016040528060008152506040518060200160405280600081525060006111f8565b600081600160a060020a031683600160a060020a03161480610b695750600160a060020a03831660009081526005602052604090205460ff168015610b695750600160a060020a0380831660009081526007602090815260408083209387168352929052205460ff16155b80610b995750600160a060020a0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b600160a060020a038116331415610c225760405160e560020a62461bcd02815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f60448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a03811660009081526005602052604090205460ff1615610c7657336000908152600760209081526040808320600160a060020a03851684529091529020805460ff19166001179055610ca2565b336000908152600660209081526040808320600160a060020a03851684529091529020805460ff191690555b6040513390600160a060020a038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b610ce53385610afe565b610d045760405160e560020a62461bcd02815260040161044a90611d24565b610d1084848484611514565b50505050565b61066233838360405180602001604052806000815250611514565b600160a060020a038316610db05760405160e560020a62461bcd02815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a038216610e2f5760405160e560020a62461bcd02815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600160a060020a03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015610f2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4e9190611d9a565b9050600160a060020a03811615610fe1576040517f75ab9782000000000000000000000000000000000000000000000000000000008152600160a060020a038216906375ab978290610fae908a908a908a908a908a908a90600401611db7565b600060405180830381600087803b158015610fc857600080fd5b505af1158015610fdc573d6000803e3d6000fd5b505050505b50505050505050565b600160a060020a038381166000908152600860209081526040808320938616835292905220546000198114610d10578181101561106c5760405160e560020a62461bcd02815260206004820152601e60248201527f4552433737373a20696e73756666696369656e7420616c6c6f77616e63650000604482015260640161044a565b610d108484848403610d31565b600160a060020a0385166000908152602081905260409020548381101561110b5760405160e560020a62461bcd02815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201527f62616c616e636500000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a03808716600090815260208190526040808220878503905591871681529081208054869290611142908490611e3f565b9250508190555084600160a060020a031686600160a060020a031688600160a060020a03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc8261467798787878760405161119a93929190611e57565b60405180910390a484600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516111e791815260200190565b60405180910390a350505050505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600160a060020a03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015611292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b69190611d9a565b9050600160a060020a0381161561134b576040517e23de29000000000000000000000000000000000000000000000000000000008152600160a060020a038216906223de2990611314908b908b908b908b908b908b90600401611db7565b600060405180830381600087803b15801561132e57600080fd5b505af1158015611342573d6000803e3d6000fd5b505050506113f8565b81156113f857600160a060020a0386163b156113f85760405160e560020a62461bcd02815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201527f6b656e73526563697069656e7400000000000000000000000000000000000000608482015260a40161044a565b5050505050505050565b600160a060020a0386166114815760405160e560020a62461bcd02815260206004820152602260248201527f4552433737373a2073656e642066726f6d20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a0385166114da5760405160e560020a62461bcd02815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373604482015260640161044a565b336114e9818888888888610e90565b6114f7818888888888611079565b610fe1818888888888886111f8565b610d10848484846001611704565b600160a060020a0384166115935760405160e560020a62461bcd02815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161044a565b336115a381866000878787610e90565b600160a060020a038516600090815260208190526040902054848110156116355760405160e560020a62461bcd02815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c6160448201527f6e63650000000000000000000000000000000000000000000000000000000000606482015260840161044a565b600160a060020a0386166000908152602081905260408120868303905560018054879290611664908490611e8c565b9250508190555085600160a060020a031682600160a060020a03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516116b293929190611e57565b60405180910390a3604051858152600090600160a060020a038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050505050565b600160a060020a03851661175d5760405160e560020a62461bcd02815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015260640161044a565b600033905084600160008282546117749190611e3f565b9091555050600160a060020a038616600090815260208190526040812080548792906117a1908490611e3f565b909155506117b7905081600088888888886111f8565b85600160a060020a031681600160a060020a03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d8787876040516117fe93929190611e57565b60405180910390a3604051858152600160a060020a038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016116f4565b6020808252825182820181905260009190848201906040850190845b81811015611885578351600160a060020a031683529284019291840191600101611860565b50909695505050505050565b6000815180845260005b818110156118b75760208185018101518683018201520161189b565b818111156118c9576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610b996020830184611891565b600160a060020a038116811461081a57600080fd5b6000806040838503121561191957600080fd5b8235611924816118f1565b946020939093013593505050565b60008060006060848603121561194757600080fd5b8335611952816118f1565b92506020840135611962816118f1565b929592945050506040919091013590565b60006020828403121561198557600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126119cc57600080fd5b813567ffffffffffffffff808211156119e7576119e761198c565b604051601f8301601f19908116603f01168101908282118183101715611a0f57611a0f61198c565b81604052838152866020858801011115611a2857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a08688031215611a6057600080fd5b8535611a6b816118f1565b94506020860135611a7b816118f1565b935060408601359250606086013567ffffffffffffffff80821115611a9f57600080fd5b611aab89838a016119bb565b93506080880135915080821115611ac157600080fd5b50611ace888289016119bb565b9150509295509295909350565b600060208284031215611aed57600080fd5b8135610b99816118f1565b600080600060608486031215611b0d57600080fd5b8335611b18816118f1565b925060208401359150604084013567ffffffffffffffff811115611b3b57600080fd5b611b47868287016119bb565b9150509250925092565b60008060408385031215611b6457600080fd5b8235611b6f816118f1565b91506020830135611b7f816118f1565b809150509250929050565b60008060008060808587031215611ba057600080fd5b8435611bab816118f1565b935060208501359250604085013567ffffffffffffffff80821115611bcf57600080fd5b611bdb888389016119bb565b93506060870135915080821115611bf157600080fd5b50611bfe878288016119bb565b91505092959194509250565b60008060408385031215611c1d57600080fd5b82359150602083013567ffffffffffffffff811115611c3b57600080fd5b611c47858286016119bb565b9150509250929050565b600281046001821680611c6557607f821691505b60208210811415611c9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60208082526024908201527f4552433737373a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b600060208284031215611d1457600080fd5b81518015158114610b9957600080fd5b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201527f7220666f7220686f6c6465720000000000000000000000000000000000000000606082015260800190565b600060208284031215611d9357600080fd5b5051919050565b600060208284031215611dac57600080fd5b8151610b99816118f1565b6000600160a060020a038089168352808816602084015280871660408401525084606083015260c06080830152611df160c0830185611891565b82810360a0840152611e038185611891565b9998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611e5257611e52611e10565b500190565b838152606060208201526000611e706060830185611891565b8281036040840152611e828185611891565b9695505050505050565b600082821015611e9e57611e9e611e10565b50039056fea2646970667358221220d25a7bcddd08d309bf68d76f4744650605d3f8b8724a718bd170de6ec6e8717564736f6c634300080a0033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1505:10",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:10",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "46:152:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "63:1:10",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "66:77:10",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "56:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "56:88:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "56:88:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "160:1:10",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "163:4:10",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "153:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "153:15:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "153:15:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "184:1:10",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "187:4:10",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "177:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "177:15:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "177:15:10"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "14:184:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "235:152:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "252:1:10",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "255:77:10",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "245:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "245:88:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "245:88:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "349:1:10",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "352:4:10",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "342:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "342:15:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "342:15:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "373:1:10",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "376:4:10",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "366:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "366:15:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "366:15:10"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "203:184:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "439:242:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "478:168:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "499:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "502:77:10",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "492:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "492:88:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "492:88:10"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "600:1:10",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "603:4:10",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "593:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "593:15:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "593:15:10"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "628:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "631:4:10",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "621:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "621:15:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "621:15:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "455:5:10"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "466:1:10",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "462:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "462:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "452:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "452:17:10"
                  },
                  "nodeType": "YulIf",
                  "src": "449:197:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "655:20:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "666:5:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "673:1:10",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "662:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "662:13:10"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "655:3:10"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "421:5:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "431:3:10",
                "type": ""
              }
            ],
            "src": "392:289:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "843:218:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "853:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "865:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "876:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "861:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "861:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "853:4:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "888:29:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "906:1:10",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "909:3:10",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "exp",
                          "nodeType": "YulIdentifier",
                          "src": "902:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "902:11:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "915:1:10",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "898:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "898:19:10"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "892:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "933:9:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "948:6:10"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "956:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "944:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "944:15:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "926:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "926:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "926:34:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "980:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "991:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "976:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "976:18:10"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "996:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "969:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "969:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "969:34:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1023:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1034:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1019:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1019:18:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1043:6:10"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "1051:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1039:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1039:15:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1012:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1012:43:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1012:43:10"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_bytes32_t_address__to_t_address_t_bytes32_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "796:9:10",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "807:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "815:6:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "823:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "834:4:10",
                "type": ""
              }
            ],
            "src": "686:375:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1121:382:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1131:22:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "1145:4:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1151:1:10",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "1141:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1141:12:10"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1131:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1162:38:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "1192:4:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1198:1:10",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1188:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1188:12:10"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "1166:18:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1239:31:10",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1241:27:10",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1255:6:10"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1263:4:10",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1251:3:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1251:17:10"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1241:6:10"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "1219:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1212:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1212:26:10"
                  },
                  "nodeType": "YulIf",
                  "src": "1209:61:10"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1329:168:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1350:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1353:77:10",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1343:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1343:88:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1343:88:10"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1451:1:10",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1454:4:10",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1444:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1444:15:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1444:15:10"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1479:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1482:4:10",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1472:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1472:15:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1472:15:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "1285:18:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1308:6:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1316:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1305:2:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1305:14:10"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "1282:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1282:38:10"
                  },
                  "nodeType": "YulIf",
                  "src": "1279:218:10"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "1101:4:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1110:6:10",
                "type": ""
              }
            ],
            "src": "1066:437:10"
          }
        ]
      },
      "contents": "{\n    { }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_address_t_bytes32_t_address__to_t_address_t_bytes32_t_address__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := sub(exp(2, 160), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), and(value2, _1))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n}",
      "id": 10,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:17646:10",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:10",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "165:530:10",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "175:12:10",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "185:2:10",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "179:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "196:32:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "214:9:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "225:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "210:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "210:18:10"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "200:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "244:9:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "255:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "237:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "237:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "237:21:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "267:17:10",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "278:6:10"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "271:3:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "293:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "313:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "307:5:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "307:13:10"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "297:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "336:6:10"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "344:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "329:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "329:22:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "329:22:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "360:25:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "371:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "382:2:10",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "367:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "367:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "360:3:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "394:29:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "412:6:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "420:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "408:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "408:15:10"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "398:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "432:10:10",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "441:1:10",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "436:1:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "500:169:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "521:3:10"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "srcPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "536:6:10"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "530:5:10"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "530:13:10"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "545:42:10",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "526:3:10"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "526:62:10"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "514:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "514:75:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "514:75:10"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "602:19:10",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "613:3:10"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "618:2:10"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "609:3:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "609:12:10"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "602:3:10"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "634:25:10",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "648:6:10"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "656:2:10"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "644:3:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "644:15:10"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "634:6:10"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "462:1:10"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "465:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "459:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "459:13:10"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "473:18:10",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "475:14:10",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "484:1:10"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "487:1:10",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "480:3:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "480:9:10"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "475:1:10"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "455:3:10",
                    "statements": []
                  },
                  "src": "451:218:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "678:11:10",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "686:3:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "678:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "134:9:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "145:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "156:4:10",
                "type": ""
              }
            ],
            "src": "14:681:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "750:422:10",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "760:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "780:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "774:5:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "774:12:10"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "764:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "802:3:10"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "807:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "795:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "795:19:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "795:19:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "823:10:10",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "832:1:10",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "827:1:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "894:110:10",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "908:14:10",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "918:4:10",
                          "type": "",
                          "value": "0x20"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "912:2:10",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "950:3:10"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "955:1:10"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "946:3:10"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "946:11:10"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "959:2:10"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "942:3:10"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "942:20:10"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "978:5:10"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "985:1:10"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "974:3:10"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "974:13:10"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "989:2:10"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "970:3:10"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "970:22:10"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "964:5:10"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "964:29:10"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "935:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "935:59:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "935:59:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "853:1:10"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "856:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "850:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "850:13:10"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "864:21:10",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "866:17:10",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "875:1:10"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "878:4:10",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "871:3:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "871:12:10"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "866:1:10"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "846:3:10",
                    "statements": []
                  },
                  "src": "842:162:10"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1038:62:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "1067:3:10"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "1072:6:10"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1063:3:10"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1063:16:10"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1081:4:10",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1059:3:10"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1059:27:10"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1088:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1052:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1052:38:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1052:38:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1019:1:10"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1022:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1016:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1016:13:10"
                  },
                  "nodeType": "YulIf",
                  "src": "1013:87:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1109:57:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1124:3:10"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "1137:6:10"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1145:2:10",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1133:3:10"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1133:15:10"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1154:2:10",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "1150:3:10"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1150:7:10"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1129:3:10"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1129:29:10"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1120:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1120:39:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1161:4:10",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1116:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1116:50:10"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "1109:3:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_string",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "727:5:10",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "734:3:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "742:3:10",
                "type": ""
              }
            ],
            "src": "700:472:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1298:99:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1315:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1326:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1308:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1308:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1308:21:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1338:53:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1364:6:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1376:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1387:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1372:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1372:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "1346:17:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1346:45:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1338:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1267:9:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1278:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1289:4:10",
                "type": ""
              }
            ],
            "src": "1177:220:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1447:109:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1534:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1543:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1546:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1536:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1536:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1536:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1470:5:10"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1481:5:10"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1488:42:10",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1477:3:10"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1477:54:10"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1467:2:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1467:65:10"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1460:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1460:73:10"
                  },
                  "nodeType": "YulIf",
                  "src": "1457:93:10"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1436:5:10",
                "type": ""
              }
            ],
            "src": "1402:154:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1648:228:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1694:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1703:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1706:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1696:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1696:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1696:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1669:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1678:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1665:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1665:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1690:2:10",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1661:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1661:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "1658:52:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1719:36:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1745:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1732:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1732:23:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1723:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1789:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1764:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1764:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1764:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1804:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1814:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1804:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1828:42:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1855:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1866:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1851:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1851:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1838:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1838:32:10"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1828:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1606:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1617:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1629:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1637:6:10",
                "type": ""
              }
            ],
            "src": "1561:315:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1976:92:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1986:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1998:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2009:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1994:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1994:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1986:4:10"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2028:9:10"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "2053:6:10"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "2046:6:10"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2046:14:10"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "2039:6:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2039:22:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2021:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2021:41:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2021:41:10"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1945:9:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1956:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1967:4:10",
                "type": ""
              }
            ],
            "src": "1881:187:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2174:76:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2184:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2196:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2207:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2192:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2192:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2184:4:10"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2226:9:10"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2237:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2219:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2219:25:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2219:25:10"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2143:9:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2154:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2165:4:10",
                "type": ""
              }
            ],
            "src": "2073:177:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2359:352:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2405:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2414:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2417:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2407:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2407:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2407:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2380:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2389:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2376:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2376:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2401:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2372:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2372:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "2369:52:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2430:36:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2456:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2443:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2443:23:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2434:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2500:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "2475:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2475:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2475:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2515:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2525:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2515:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2539:47:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2571:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2582:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2567:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2567:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2554:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2554:32:10"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "2543:7:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "2620:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "2595:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2595:33:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2595:33:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2637:17:10",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "2647:7:10"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2637:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2663:42:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2690:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2701:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2686:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2686:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2673:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2673:32:10"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "2663:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2309:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2320:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2332:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2340:6:10",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2348:6:10",
                "type": ""
              }
            ],
            "src": "2255:456:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2786:110:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2832:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2841:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2844:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2834:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2834:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2834:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2807:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2816:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2803:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2803:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2828:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2799:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2799:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "2796:52:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2857:33:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2880:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2867:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2867:23:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2857:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2752:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2763:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2775:6:10",
                "type": ""
              }
            ],
            "src": "2716:180:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2998:87:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3008:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3020:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3031:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3016:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3016:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3008:4:10"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3050:9:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "3065:6:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3073:4:10",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "3061:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3061:17:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3043:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3043:36:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3043:36:10"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2967:9:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2978:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2989:4:10",
                "type": ""
              }
            ],
            "src": "2901:184:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3122:152:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3139:1:10",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3142:77:10",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3132:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3132:88:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3132:88:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3236:1:10",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3239:4:10",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3229:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3229:15:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3229:15:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3260:1:10",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3263:4:10",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3253:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3253:15:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3253:15:10"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "3090:184:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3331:666:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3380:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3389:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3392:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3382:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3382:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3382:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3359:6:10"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3367:4:10",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3355:3:10"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3355:17:10"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "3374:3:10"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "3351:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3351:27:10"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3344:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3344:35:10"
                  },
                  "nodeType": "YulIf",
                  "src": "3341:55:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3405:30:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3428:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3415:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3415:20:10"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "3409:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3444:28:10",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "3454:18:10",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "3448:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3495:22:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3497:16:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3497:18:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3497:18:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3487:2:10"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3491:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3484:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3484:10:10"
                  },
                  "nodeType": "YulIf",
                  "src": "3481:36:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3526:17:10",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3540:2:10",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "3536:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3536:7:10"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "3530:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3552:23:10",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3572:2:10",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "3566:5:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3566:9:10"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "3556:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3584:71:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "3606:6:10"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "3630:2:10"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3634:4:10",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3626:3:10"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3626:13:10"
                                  },
                                  {
                                    "name": "_3",
                                    "nodeType": "YulIdentifier",
                                    "src": "3641:2:10"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "3622:3:10"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3622:22:10"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3646:2:10",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3618:3:10"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3618:31:10"
                          },
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "3651:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "3614:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3614:40:10"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3602:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3602:53:10"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "3588:10:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3714:22:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3716:16:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3716:18:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3716:18:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "3673:10:10"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "3685:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3670:2:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3670:18:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "3693:10:10"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "3705:6:10"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "3690:2:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3690:22:10"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "3667:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3667:46:10"
                  },
                  "nodeType": "YulIf",
                  "src": "3664:72:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3752:2:10",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "3756:10:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3745:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3745:22:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3745:22:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "3783:6:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3791:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3776:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3776:18:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3776:18:10"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3842:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3851:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3854:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3844:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3844:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3844:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3817:6:10"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "3825:2:10"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3813:3:10"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3813:15:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3830:4:10",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3809:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3809:26:10"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3837:3:10"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3806:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3806:35:10"
                  },
                  "nodeType": "YulIf",
                  "src": "3803:55:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "3884:6:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3892:4:10",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3880:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3880:17:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3903:6:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3911:4:10",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3899:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3899:17:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3918:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "3867:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3867:54:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3867:54:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nodeType": "YulIdentifier",
                                "src": "3945:6:10"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "3953:2:10"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3941:3:10"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3941:15:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3958:4:10",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3937:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3937:26:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3965:1:10",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3930:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3930:37:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3930:37:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3976:15:10",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "3985:6:10"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "3976:5:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_bytes",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3305:6:10",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3313:3:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "3321:5:10",
                "type": ""
              }
            ],
            "src": "3279:718:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4158:729:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4205:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4214:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4217:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4207:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4207:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4207:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4179:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4188:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4175:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4175:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4200:3:10",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4171:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4171:33:10"
                  },
                  "nodeType": "YulIf",
                  "src": "4168:53:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4230:36:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4256:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4243:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4243:23:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4234:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4300:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "4275:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4275:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4275:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4315:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4325:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "4315:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4339:47:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4371:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4382:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4367:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4367:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4354:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4354:32:10"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "4343:7:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "4420:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "4395:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4395:33:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4395:33:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4437:17:10",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "4447:7:10"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "4437:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4463:42:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4490:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4501:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4486:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4486:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4473:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4473:32:10"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "4463:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4514:46:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4545:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4556:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4541:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4541:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4528:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4528:32:10"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "4518:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4569:28:10",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4579:18:10",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "4573:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4624:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4633:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4636:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4626:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4626:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4626:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4612:6:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4620:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4609:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4609:14:10"
                  },
                  "nodeType": "YulIf",
                  "src": "4606:34:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4649:59:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4680:9:10"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "4691:6:10"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4676:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4676:22:10"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4700:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "4659:16:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4659:49:10"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "4649:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4717:49:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4750:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4761:3:10",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4746:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4746:19:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4733:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4733:33:10"
                  },
                  "variables": [
                    {
                      "name": "offset_1",
                      "nodeType": "YulTypedName",
                      "src": "4721:8:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4795:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4804:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4807:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4797:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4797:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4797:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulIdentifier",
                        "src": "4781:8:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4791:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4778:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4778:16:10"
                  },
                  "nodeType": "YulIf",
                  "src": "4775:36:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4820:61:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4851:9:10"
                          },
                          {
                            "name": "offset_1",
                            "nodeType": "YulIdentifier",
                            "src": "4862:8:10"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4847:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4847:24:10"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4873:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "4830:16:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4830:51:10"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "4820:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptrt_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4092:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4103:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4115:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4123:6:10",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "4131:6:10",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "4139:6:10",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "4147:6:10",
                "type": ""
              }
            ],
            "src": "4002:885:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4962:177:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5008:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5017:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5020:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5010:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5010:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5010:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4983:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4992:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4979:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4979:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5004:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4975:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4975:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "4972:52:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5033:36:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5059:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5046:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5046:23:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5037:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5103:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5078:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5078:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5078:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5118:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "5128:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "5118:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4928:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4939:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4951:6:10",
                "type": ""
              }
            ],
            "src": "4892:247:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5257:410:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5303:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5312:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5315:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5305:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5305:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5305:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5278:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5287:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5274:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5274:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5299:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5270:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5270:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "5267:52:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5328:36:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5354:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5341:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5341:23:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5332:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5398:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5373:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5373:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5373:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5413:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "5423:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "5413:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5437:42:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5464:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5475:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5460:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5460:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5447:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5447:32:10"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "5437:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5488:46:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5519:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5530:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5515:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5515:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5502:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5502:32:10"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "5492:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5577:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5586:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5589:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5579:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5579:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5579:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "5549:6:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5557:18:10",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5546:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5546:30:10"
                  },
                  "nodeType": "YulIf",
                  "src": "5543:50:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5602:59:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5633:9:10"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "5644:6:10"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5629:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5629:22:10"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "5653:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "5612:16:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5612:49:10"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "5602:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5207:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5218:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5230:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5238:6:10",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "5246:6:10",
                "type": ""
              }
            ],
            "src": "5144:523:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5759:301:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5805:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5814:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5817:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5807:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5807:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5807:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5780:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5789:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5776:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5776:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5801:2:10",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5772:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5772:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "5769:52:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5830:36:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5856:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5843:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5843:23:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5834:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5900:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5875:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5875:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5875:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5915:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "5925:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "5915:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5939:47:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5971:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5982:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5967:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5967:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5954:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5954:32:10"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "5943:7:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "6020:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5995:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5995:33:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5995:33:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6037:17:10",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "6047:7:10"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "6037:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5717:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5728:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5740:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5748:6:10",
                "type": ""
              }
            ],
            "src": "5672:388:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6204:604:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6251:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6260:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6263:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6253:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6253:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6253:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6225:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6234:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6221:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6221:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6246:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6217:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6217:33:10"
                  },
                  "nodeType": "YulIf",
                  "src": "6214:53:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6276:36:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6302:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6289:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6289:23:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6280:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6346:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6321:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6321:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6321:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6361:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "6371:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6361:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6385:42:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6412:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6423:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6408:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6408:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6395:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6395:32:10"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "6385:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6436:46:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6467:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6478:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6463:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6463:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6450:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6450:32:10"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "6440:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6491:28:10",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "6501:18:10",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "6495:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6546:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6555:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6558:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6548:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6548:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6548:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "6534:6:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6542:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6531:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6531:14:10"
                  },
                  "nodeType": "YulIf",
                  "src": "6528:34:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6571:59:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6602:9:10"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "6613:6:10"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6598:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6598:22:10"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "6622:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "6581:16:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6581:49:10"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "6571:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6639:48:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6672:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6683:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6668:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6668:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6655:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6655:32:10"
                  },
                  "variables": [
                    {
                      "name": "offset_1",
                      "nodeType": "YulTypedName",
                      "src": "6643:8:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6716:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6725:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6728:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6718:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6718:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6718:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulIdentifier",
                        "src": "6702:8:10"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6712:2:10"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6699:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6699:16:10"
                  },
                  "nodeType": "YulIf",
                  "src": "6696:36:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6741:61:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6772:9:10"
                          },
                          {
                            "name": "offset_1",
                            "nodeType": "YulIdentifier",
                            "src": "6783:8:10"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6768:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6768:24:10"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "6794:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "6751:16:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6751:51:10"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "6741:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256t_bytes_memory_ptrt_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6146:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6157:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6169:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6177:6:10",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "6185:6:10",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "6193:6:10",
                "type": ""
              }
            ],
            "src": "6065:743:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6909:292:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6955:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6964:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6967:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6957:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6957:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6957:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6930:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6939:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6926:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6926:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6951:2:10",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6922:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6922:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "6919:52:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6980:33:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7003:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6990:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6990:23:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6980:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7022:46:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7053:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7064:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7049:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7049:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "7036:12:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7036:32:10"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "7026:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7111:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7120:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7123:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7113:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7113:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7113:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "7083:6:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7091:18:10",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7080:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7080:30:10"
                  },
                  "nodeType": "YulIf",
                  "src": "7077:50:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7136:59:10",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7167:9:10"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "7178:6:10"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7163:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7163:22:10"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "7187:7:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "7146:16:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7146:49:10"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "7136:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6867:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6878:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6890:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6898:6:10",
                "type": ""
              }
            ],
            "src": "6813:388:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7261:382:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7271:22:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "7285:4:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7291:1:10",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "7281:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7281:12:10"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "7271:6:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7302:38:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "7332:4:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7338:1:10",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "7328:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7328:12:10"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "7306:18:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7379:31:10",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7381:27:10",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "7395:6:10"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7403:4:10",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "7391:3:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7391:17:10"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "7381:6:10"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "7359:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "7352:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7352:26:10"
                  },
                  "nodeType": "YulIf",
                  "src": "7349:61:10"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7469:168:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7490:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7493:77:10",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7483:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7483:88:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7483:88:10"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7591:1:10",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7594:4:10",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7584:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7584:15:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7584:15:10"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7619:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7622:4:10",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7612:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7612:15:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7612:15:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "7425:18:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "7448:6:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7456:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "7445:2:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7445:14:10"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "7422:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7422:38:10"
                  },
                  "nodeType": "YulIf",
                  "src": "7419:218:10"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "7241:4:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7250:6:10",
                "type": ""
              }
            ],
            "src": "7206:437:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7822:226:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7839:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7850:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7832:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7832:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7832:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7873:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7884:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7869:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7869:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7889:2:10",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7862:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7862:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7862:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7912:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7923:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7908:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7908:18:10"
                      },
                      {
                        "hexValue": "4552433737373a207472616e7366657220746f20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7928:34:10",
                        "type": "",
                        "value": "ERC777: transfer to the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7901:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7901:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7901:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7983:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7994:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7979:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7979:18:10"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7999:6:10",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7972:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7972:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7972:34:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8015:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8027:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8038:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8023:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8023:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8015:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_ad1e0a820fe2a50167f341463ad5f6754fad4cf77d809141bc408c516e69c59a__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7799:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7813:4:10",
                "type": ""
              }
            ],
            "src": "7648:400:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8227:228:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8244:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8255:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8237:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8237:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8237:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8278:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8289:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8274:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8274:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8294:2:10",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8267:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8267:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8267:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8317:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8328:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8313:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8313:18:10"
                      },
                      {
                        "hexValue": "4552433737373a207472616e736665722066726f6d20746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8333:34:10",
                        "type": "",
                        "value": "ERC777: transfer from the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8306:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8306:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8306:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8388:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8399:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8384:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8384:18:10"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8404:8:10",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8377:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8377:36:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8377:36:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8422:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8434:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8445:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8430:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8430:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8422:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_e354b0408f2a1e89707ec9f6aaa5427ceb97704ace0785924c7421e8f577dc7a__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8204:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8218:4:10",
                "type": ""
              }
            ],
            "src": "8053:402:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8634:163:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8651:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8662:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8644:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8644:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8644:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8685:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8696:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8681:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8681:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8701:2:10",
                        "type": "",
                        "value": "13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8674:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8674:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8674:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8724:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8735:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8720:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8720:18:10"
                      },
                      {
                        "hexValue": "4163636573732044656e696564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8740:15:10",
                        "type": "",
                        "value": "Access Denied"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8713:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8713:43:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8713:43:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8765:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8777:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8788:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8773:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8773:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8765:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8611:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8625:4:10",
                "type": ""
              }
            ],
            "src": "8460:337:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8931:168:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8941:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8953:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8964:2:10",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8949:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8949:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8941:4:10"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8983:9:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "8998:6:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9006:42:10",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "8994:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8994:55:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8976:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8976:74:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8976:74:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9070:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9081:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9066:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9066:18:10"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "9086:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9059:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9059:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9059:34:10"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8892:9:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "8903:6:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8911:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8922:4:10",
                "type": ""
              }
            ],
            "src": "8802:297:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9182:199:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9228:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9237:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9240:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "9230:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9230:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9230:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9203:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9212:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9199:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9199:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9224:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "9195:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9195:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "9192:52:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9253:29:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9272:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "9266:5:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9266:16:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "9257:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9335:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9344:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9347:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "9337:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9337:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9337:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "9304:5:10"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "9325:5:10"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "9318:6:10"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "9318:13:10"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "9311:6:10"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9311:21:10"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "9301:2:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9301:32:10"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "9294:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9294:40:10"
                  },
                  "nodeType": "YulIf",
                  "src": "9291:60:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9360:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "9370:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "9360:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bool_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9148:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "9159:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9171:6:10",
                "type": ""
              }
            ],
            "src": "9104:277:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9560:234:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9577:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9588:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9570:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9570:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9570:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9611:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9622:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9607:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9607:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9627:2:10",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9600:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9600:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9600:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9650:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9661:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9646:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9646:18:10"
                      },
                      {
                        "hexValue": "4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9666:34:10",
                        "type": "",
                        "value": "ERC777: caller is not an operato"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9639:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9639:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9639:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9721:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9732:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9717:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9717:18:10"
                      },
                      {
                        "hexValue": "7220666f7220686f6c646572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9737:14:10",
                        "type": "",
                        "value": "r for holder"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9710:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9710:42:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9710:42:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9761:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9773:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9784:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9769:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9769:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9761:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_d0e912496dc7a0050c7f3e14272d4929a90a242e3fdaef730410cdf35f965235__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9537:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9551:4:10",
                "type": ""
              }
            ],
            "src": "9386:408:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9900:125:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9910:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9922:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9933:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9918:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9918:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9910:4:10"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9952:9:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "9967:6:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9975:42:10",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "9963:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9963:55:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9945:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9945:74:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9945:74:10"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9869:9:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9880:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9891:4:10",
                "type": ""
              }
            ],
            "src": "9799:226:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10111:103:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10157:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10166:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10169:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10159:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10159:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10159:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "10132:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10141:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10128:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10128:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10153:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "10124:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10124:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "10121:52:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10182:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10198:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "10192:5:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10192:16:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "10182:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10077:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "10088:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10100:6:10",
                "type": ""
              }
            ],
            "src": "10030:184:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10376:241:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10386:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10398:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10409:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10394:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10394:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10386:4:10"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "10421:52:10",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "10431:42:10",
                    "type": "",
                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "10425:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10489:9:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "10504:6:10"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "10512:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "10500:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10500:15:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10482:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10482:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10482:34:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10536:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10547:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10532:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10532:18:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "10556:6:10"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "10564:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "10552:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10552:15:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10525:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10525:43:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10525:43:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10588:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10599:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10584:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10584:18:10"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "10604:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10577:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10577:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10577:34:10"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10329:9:10",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "10340:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10348:6:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10356:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10367:4:10",
                "type": ""
              }
            ],
            "src": "10219:398:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10796:226:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10813:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10824:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10806:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10806:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10806:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10847:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10858:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10843:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10843:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10863:2:10",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10836:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10836:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10836:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10886:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10897:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10882:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10882:18:10"
                      },
                      {
                        "hexValue": "4552433737373a20617574686f72697a696e672073656c66206173206f706572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10902:34:10",
                        "type": "",
                        "value": "ERC777: authorizing self as oper"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10875:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10875:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10875:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10957:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10968:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10953:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10953:18:10"
                      },
                      {
                        "hexValue": "61746f72",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10973:6:10",
                        "type": "",
                        "value": "ator"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10946:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10946:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10946:34:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10989:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11001:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11012:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10997:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10997:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10989:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_4682b297c30e70ba17ae545f9c27f948e3607c0cc7dd469250dfcf8daa94218c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10773:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10787:4:10",
                "type": ""
              }
            ],
            "src": "10622:400:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11201:223:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11218:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11229:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11211:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11211:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11211:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11252:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11263:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11248:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11248:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11268:2:10",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11241:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11241:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11241:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11291:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11302:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11287:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11287:18:10"
                      },
                      {
                        "hexValue": "4552433737373a207265766f6b696e672073656c66206173206f70657261746f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11307:34:10",
                        "type": "",
                        "value": "ERC777: revoking self as operato"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11280:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11280:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11280:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11362:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11373:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11358:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11358:18:10"
                      },
                      {
                        "hexValue": "72",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11378:3:10",
                        "type": "",
                        "value": "r"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11351:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11351:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11351:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11391:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11403:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11414:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11399:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11399:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11391:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_67ce503bd3a359eb530c6f3a909afa9e71899e0352d883198e721fd5fceefab5__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11178:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11192:4:10",
                "type": ""
              }
            ],
            "src": "11027:397:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11603:227:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11620:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11631:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11613:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11613:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11613:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11654:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11665:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11650:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11650:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11670:2:10",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11643:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11643:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11643:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11693:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11704:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11689:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11689:18:10"
                      },
                      {
                        "hexValue": "4552433737373a20617070726f76652066726f6d20746865207a65726f206164",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11709:34:10",
                        "type": "",
                        "value": "ERC777: approve from the zero ad"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11682:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11682:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11682:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11764:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11775:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11760:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11760:18:10"
                      },
                      {
                        "hexValue": "6472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11780:7:10",
                        "type": "",
                        "value": "dress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11753:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11753:35:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11753:35:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11797:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11809:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11820:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11805:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11805:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11797:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0e27915827f7e9aa1f9e706fa48897705bd51fdbb8c4e17f0dcc074873455ca7__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11580:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11594:4:10",
                "type": ""
              }
            ],
            "src": "11429:401:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12009:225:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12026:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12037:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12019:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12019:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12019:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12060:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12071:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12056:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12056:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12076:2:10",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12049:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12049:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12049:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12099:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12110:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12095:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12095:18:10"
                      },
                      {
                        "hexValue": "4552433737373a20617070726f766520746f20746865207a65726f2061646472",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12115:34:10",
                        "type": "",
                        "value": "ERC777: approve to the zero addr"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12088:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12088:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12088:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12170:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12181:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12166:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12166:18:10"
                      },
                      {
                        "hexValue": "657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12186:5:10",
                        "type": "",
                        "value": "ess"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12159:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12159:33:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12159:33:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12201:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12213:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12224:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12209:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12209:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12201:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f96aab14690ac2986315360e71dcbe877ff7fb69d13c692db6f39f8c2c01f20d__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11986:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12000:4:10",
                "type": ""
              }
            ],
            "src": "11835:399:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12368:168:10",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12378:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12390:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12401:2:10",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12386:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12386:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12378:4:10"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12420:9:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "12435:6:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12443:42:10",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "12431:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12431:55:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12413:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12413:74:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12413:74:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12507:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12518:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12503:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12503:18:10"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "12523:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12496:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12496:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12496:34:10"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_bytes32__to_t_address_t_bytes32__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12329:9:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "12340:6:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12348:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12359:4:10",
                "type": ""
              }
            ],
            "src": "12239:297:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12622:170:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12668:16:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12677:1:10",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12680:1:10",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "12670:6:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12670:12:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12670:12:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "12643:7:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12652:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12639:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12639:23:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12664:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "12635:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12635:32:10"
                  },
                  "nodeType": "YulIf",
                  "src": "12632:52:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "12693:29:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12712:9:10"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "12706:5:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12706:16:10"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "12697:5:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "12756:5:10"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "12731:24:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12731:31:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12731:31:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12771:15:10",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "12781:5:10"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "12771:6:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12588:9:10",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "12599:7:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12611:6:10",
                "type": ""
              }
            ],
            "src": "12541:251:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13074:478:10",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "13084:52:10",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "13094:42:10",
                    "type": "",
                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "13088:2:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13152:9:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "13167:6:10"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "13175:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "13163:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13163:15:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13145:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13145:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13145:34:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13199:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13210:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13195:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13195:18:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "13219:6:10"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "13227:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "13215:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13215:15:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13188:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13188:43:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13188:43:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13251:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13262:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13247:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13247:18:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "13271:6:10"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "13279:2:10"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "13267:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13267:15:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13240:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13240:43:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13240:43:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13303:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13314:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13299:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13299:18:10"
                      },
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "13319:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13292:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13292:34:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13292:34:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13346:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13357:3:10",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13342:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13342:19:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13363:3:10",
                        "type": "",
                        "value": "192"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13335:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13335:32:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13335:32:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "13376:60:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "13408:6:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13420:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13431:3:10",
                            "type": "",
                            "value": "192"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13416:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13416:19:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "13390:17:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13390:46:10"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "13380:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13456:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13467:3:10",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13452:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13452:19:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail_1",
                            "nodeType": "YulIdentifier",
                            "src": "13477:6:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13485:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13473:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13473:22:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13445:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13445:51:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13445:51:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13505:41:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value5",
                        "nodeType": "YulIdentifier",
                        "src": "13531:6:10"
                      },
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "13539:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "13513:17:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13513:33:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13505:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_address_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__to_t_address_t_address_t_address_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13003:9:10",
                "type": ""
              },
              {
                "name": "value5",
                "nodeType": "YulTypedName",
                "src": "13014:6:10",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "13022:6:10",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "13030:6:10",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "13038:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "13046:6:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13054:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13065:4:10",
                "type": ""
              }
            ],
            "src": "12797:755:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13731:180:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13748:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13759:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13741:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13741:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13741:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13782:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13793:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13778:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13778:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13798:2:10",
                        "type": "",
                        "value": "30"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13771:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13771:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13771:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13821:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13832:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13817:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13817:18:10"
                      },
                      {
                        "hexValue": "4552433737373a20696e73756666696369656e7420616c6c6f77616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13837:32:10",
                        "type": "",
                        "value": "ERC777: insufficient allowance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13810:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13810:60:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13810:60:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13879:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13891:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13902:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13887:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13887:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13879:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_43a72b1be6b1964d60860b54d1c331016464b9d17c1d10dbea6a002344132abb__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13708:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13722:4:10",
                "type": ""
              }
            ],
            "src": "13557:354:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14090:229:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14107:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14118:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14100:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14100:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14100:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14141:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14152:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14137:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14137:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14157:2:10",
                        "type": "",
                        "value": "39"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14130:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14130:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14130:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14180:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14191:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14176:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14176:18:10"
                      },
                      {
                        "hexValue": "4552433737373a207472616e7366657220616d6f756e74206578636565647320",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14196:34:10",
                        "type": "",
                        "value": "ERC777: transfer amount exceeds "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14169:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14169:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14169:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14251:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14262:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14247:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14247:18:10"
                      },
                      {
                        "hexValue": "62616c616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14267:9:10",
                        "type": "",
                        "value": "balance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14240:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14240:37:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14240:37:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14286:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14298:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14309:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14294:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14294:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14286:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1f1c21f7056055b190ca6c77528b11af9437bed324def87929bb64fac4d57e6b__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14067:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14081:4:10",
                "type": ""
              }
            ],
            "src": "13916:403:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14356:152:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14373:1:10",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14376:77:10",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14366:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14366:88:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14366:88:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14470:1:10",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14473:4:10",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14463:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14463:15:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14463:15:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14494:1:10",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14497:4:10",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "14487:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14487:15:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14487:15:10"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "14324:184:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14561:80:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14588:22:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "14590:16:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14590:18:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14590:18:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "14577:1:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "14584:1:10"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "14580:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14580:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "14574:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14574:13:10"
                  },
                  "nodeType": "YulIf",
                  "src": "14571:39:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14619:16:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "14630:1:10"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "14633:1:10"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14626:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14626:9:10"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "14619:3:10"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "14544:1:10",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "14547:1:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "14553:3:10",
                "type": ""
              }
            ],
            "src": "14513:128:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14839:257:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14856:9:10"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "14867:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14849:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14849:25:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14849:25:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14894:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14905:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14890:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14890:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14910:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14883:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14883:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14883:30:10"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "14922:59:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "14954:6:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14966:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14977:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14962:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14962:18:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "14936:17:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14936:45:10"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "14926:6:10",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15001:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15012:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14997:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14997:18:10"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail_1",
                            "nodeType": "YulIdentifier",
                            "src": "15021:6:10"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15029:9:10"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15017:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15017:22:10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14990:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14990:50:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14990:50:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15049:41:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "15075:6:10"
                      },
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "15083:6:10"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "15057:17:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15057:33:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15049:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__to_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14792:9:10",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "14803:6:10",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "14811:6:10",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "14819:6:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14830:4:10",
                "type": ""
              }
            ],
            "src": "14646:450:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15275:307:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15292:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15303:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15285:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15285:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15285:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15326:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15337:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15322:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15322:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15342:2:10",
                        "type": "",
                        "value": "77"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15315:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15315:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15315:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15365:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15376:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15361:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15361:18:10"
                      },
                      {
                        "hexValue": "4552433737373a20746f6b656e20726563697069656e7420636f6e7472616374",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15381:34:10",
                        "type": "",
                        "value": "ERC777: token recipient contract"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15354:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15354:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15354:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15436:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15447:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15432:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15432:18:10"
                      },
                      {
                        "hexValue": "20686173206e6f20696d706c656d656e74657220666f7220455243373737546f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15452:34:10",
                        "type": "",
                        "value": " has no implementer for ERC777To"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15425:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15425:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15425:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15507:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15518:3:10",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15503:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15503:19:10"
                      },
                      {
                        "hexValue": "6b656e73526563697069656e74",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15524:15:10",
                        "type": "",
                        "value": "kensRecipient"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15496:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15496:44:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15496:44:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15549:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15561:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15572:3:10",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15557:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15557:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15549:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9ee9d43e266ccfb7408c78038627d2c5b376a4a82e9fcfbfea2a9c63dc07fa80__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15252:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15266:4:10",
                "type": ""
              }
            ],
            "src": "15101:481:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15761:224:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15778:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15789:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15771:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15771:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15771:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15812:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15823:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15808:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15808:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15828:2:10",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15801:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15801:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15801:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15851:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15862:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15847:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15847:18:10"
                      },
                      {
                        "hexValue": "4552433737373a2073656e642066726f6d20746865207a65726f206164647265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15867:34:10",
                        "type": "",
                        "value": "ERC777: send from the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15840:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15840:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15840:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15922:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15933:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15918:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15918:18:10"
                      },
                      {
                        "hexValue": "7373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15938:4:10",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15911:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15911:32:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15911:32:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15952:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15964:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15975:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15960:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15960:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15952:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_14f76295ace7a8386ec01140ee9cd688544ad4113a371d47f5a5fb46ac01c401__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15738:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15752:4:10",
                "type": ""
              }
            ],
            "src": "15587:398:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16164:182:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16181:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16192:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16174:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16174:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16174:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16215:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16226:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16211:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16211:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16231:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16204:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16204:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16204:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16254:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16265:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16250:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16250:18:10"
                      },
                      {
                        "hexValue": "4552433737373a2073656e6420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16270:34:10",
                        "type": "",
                        "value": "ERC777: send to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16243:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16243:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16243:62:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16314:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16326:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16337:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16322:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16322:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16314:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_ed80ea5132cda6a72ccf7da466e28cf5f3b5c217583b1b7e92c137a9f3d6b4c3__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16141:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16155:4:10",
                "type": ""
              }
            ],
            "src": "15990:356:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16525:224:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16542:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16553:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16535:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16535:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16535:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16576:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16587:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16572:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16572:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16592:2:10",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16565:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16565:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16565:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16615:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16626:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16611:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16611:18:10"
                      },
                      {
                        "hexValue": "4552433737373a206275726e2066726f6d20746865207a65726f206164647265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16631:34:10",
                        "type": "",
                        "value": "ERC777: burn from the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16604:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16604:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16604:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16686:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16697:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16682:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16682:18:10"
                      },
                      {
                        "hexValue": "7373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16702:4:10",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16675:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16675:32:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16675:32:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16716:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16728:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16739:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16724:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16724:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16716:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_37e8d125f24ef45023ef8033e82467f588cec434263b3a6b98bcdb3eca4b768c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16502:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16516:4:10",
                "type": ""
              }
            ],
            "src": "16351:398:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16928:225:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16945:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16956:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16938:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16938:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16938:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16979:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16990:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16975:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16975:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16995:2:10",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16968:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16968:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16968:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17018:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17029:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17014:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17014:18:10"
                      },
                      {
                        "hexValue": "4552433737373a206275726e20616d6f756e7420657863656564732062616c61",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17034:34:10",
                        "type": "",
                        "value": "ERC777: burn amount exceeds bala"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17007:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17007:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17007:62:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17089:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17100:2:10",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17085:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17085:18:10"
                      },
                      {
                        "hexValue": "6e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17105:5:10",
                        "type": "",
                        "value": "nce"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17078:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17078:33:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17078:33:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17120:27:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17132:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17143:3:10",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17128:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17128:19:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17120:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_ecdeb627d2306b8b9bb34685df56bbf05cde6b7bc6e45e0248ca50c1b0bd3ebe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16905:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16919:4:10",
                "type": ""
              }
            ],
            "src": "16754:399:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17207:76:10",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17229:22:10",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "17231:16:10"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17231:18:10"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17231:18:10"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "17223:1:10"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "17226:1:10"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "17220:2:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17220:8:10"
                  },
                  "nodeType": "YulIf",
                  "src": "17217:34:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17260:17:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "17272:1:10"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "17275:1:10"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "17268:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17268:9:10"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "17260:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "17189:1:10",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "17192:1:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "17198:4:10",
                "type": ""
              }
            ],
            "src": "17158:125:10"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17462:182:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17479:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17490:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17472:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17472:21:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17472:21:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17513:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17524:2:10",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17509:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17509:18:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17529:2:10",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17502:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17502:30:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17502:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17552:9:10"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17563:2:10",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17548:3:10"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17548:18:10"
                      },
                      {
                        "hexValue": "4552433737373a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17568:34:10",
                        "type": "",
                        "value": "ERC777: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17541:6:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17541:62:10"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17541:62:10"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17612:26:10",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17624:9:10"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17635:2:10",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17620:3:10"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17620:18:10"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17612:4:10"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8ce4f759423d0a519cbdf8529f47ad13e03ab9baec6702bc39e1fd5147c7e080__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17439:9:10",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17453:4:10",
                "type": ""
              }
            ],
            "src": "17288:356:10"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, and(mload(srcPtr), 0xffffffffffffffffffffffffffffffffffffffff))\n            pos := add(pos, _1)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_string(value, pos) -> end\n    {\n        let length := mload(value)\n        mstore(pos, length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 0x20) }\n        {\n            let _1 := 0x20\n            mstore(add(add(pos, i), _1), mload(add(add(value, i), _1)))\n        }\n        if gt(i, length)\n        {\n            mstore(add(add(pos, length), 0x20), 0)\n        }\n        end := add(add(pos, and(add(length, 31), not(31))), 0x20)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        tail := abi_encode_string(value0, add(headStart, 32))\n    }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_bytes(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        let _2 := 0xffffffffffffffff\n        if gt(_1, _2) { panic_error_0x41() }\n        let _3 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_1, 0x1f), _3), 63), _3))\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _1)\n        if gt(add(add(offset, _1), 0x20), end) { revert(0, 0) }\n        calldatacopy(add(memPtr, 0x20), add(offset, 0x20), _1)\n        mstore(add(add(memPtr, _1), 0x20), 0)\n        array := memPtr\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        value3 := abi_decode_bytes(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 128))\n        if gt(offset_1, _1) { revert(0, 0) }\n        value4 := abi_decode_bytes(add(headStart, offset_1), dataEnd)\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n        let offset := calldataload(add(headStart, 64))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value2 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n    }\n    function abi_decode_tuple_t_addresst_uint256t_bytes_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n        let offset := calldataload(add(headStart, 64))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        value2 := abi_decode_bytes(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 96))\n        if gt(offset_1, _1) { revert(0, 0) }\n        value3 := abi_decode_bytes(add(headStart, offset_1), dataEnd)\n    }\n    function abi_decode_tuple_t_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := calldataload(headStart)\n        let offset := calldataload(add(headStart, 32))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value1 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_ad1e0a820fe2a50167f341463ad5f6754fad4cf77d809141bc408c516e69c59a__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC777: transfer to the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_e354b0408f2a1e89707ec9f6aaa5427ceb97704ace0785924c7421e8f577dc7a__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"ERC777: transfer from the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"Access Denied\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_d0e912496dc7a0050c7f3e14272d4929a90a242e3fdaef730410cdf35f965235__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 44)\n        mstore(add(headStart, 64), \"ERC777: caller is not an operato\")\n        mstore(add(headStart, 96), \"r for holder\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_encode_tuple_t_stringliteral_4682b297c30e70ba17ae545f9c27f948e3607c0cc7dd469250dfcf8daa94218c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC777: authorizing self as oper\")\n        mstore(add(headStart, 96), \"ator\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_67ce503bd3a359eb530c6f3a909afa9e71899e0352d883198e721fd5fceefab5__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC777: revoking self as operato\")\n        mstore(add(headStart, 96), \"r\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0e27915827f7e9aa1f9e706fa48897705bd51fdbb8c4e17f0dcc074873455ca7__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC777: approve from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_f96aab14690ac2986315360e71dcbe877ff7fb69d13c692db6f39f8c2c01f20d__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC777: approve to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_address_t_bytes32__to_t_address_t_bytes32__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address_t_address_t_address_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__to_t_address_t_address_t_address_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__fromStack_reversed(headStart, value5, value4, value3, value2, value1, value0) -> tail\n    {\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), and(value2, _1))\n        mstore(add(headStart, 96), value3)\n        mstore(add(headStart, 128), 192)\n        let tail_1 := abi_encode_string(value4, add(headStart, 192))\n        mstore(add(headStart, 160), sub(tail_1, headStart))\n        tail := abi_encode_string(value5, tail_1)\n    }\n    function abi_encode_tuple_t_stringliteral_43a72b1be6b1964d60860b54d1c331016464b9d17c1d10dbea6a002344132abb__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 30)\n        mstore(add(headStart, 64), \"ERC777: insufficient allowance\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_1f1c21f7056055b190ca6c77528b11af9437bed324def87929bb64fac4d57e6b__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 39)\n        mstore(add(headStart, 64), \"ERC777: transfer amount exceeds \")\n        mstore(add(headStart, 96), \"balance\")\n        tail := add(headStart, 128)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function abi_encode_tuple_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__to_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), 96)\n        let tail_1 := abi_encode_string(value1, add(headStart, 96))\n        mstore(add(headStart, 64), sub(tail_1, headStart))\n        tail := abi_encode_string(value2, tail_1)\n    }\n    function abi_encode_tuple_t_stringliteral_9ee9d43e266ccfb7408c78038627d2c5b376a4a82e9fcfbfea2a9c63dc07fa80__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 77)\n        mstore(add(headStart, 64), \"ERC777: token recipient contract\")\n        mstore(add(headStart, 96), \" has no implementer for ERC777To\")\n        mstore(add(headStart, 128), \"kensRecipient\")\n        tail := add(headStart, 160)\n    }\n    function abi_encode_tuple_t_stringliteral_14f76295ace7a8386ec01140ee9cd688544ad4113a371d47f5a5fb46ac01c401__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC777: send from the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_ed80ea5132cda6a72ccf7da466e28cf5f3b5c217583b1b7e92c137a9f3d6b4c3__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"ERC777: send to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_37e8d125f24ef45023ef8033e82467f588cec434263b3a6b98bcdb3eca4b768c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC777: burn from the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_ecdeb627d2306b8b9bb34685df56bbf05cde6b7bc6e45e0248ca50c1b0bd3ebe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC777: burn amount exceeds bala\")\n        mstore(add(headStart, 96), \"nce\")\n        tail := add(headStart, 128)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y) { panic_error_0x11() }\n        diff := sub(x, y)\n    }\n    function abi_encode_tuple_t_stringliteral_8ce4f759423d0a519cbdf8529f47ad13e03ab9baec6702bc39e1fd5147c7e080__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"ERC777: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 10,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "173:1524:9:-:0;;;351:79;;;-1:-1:-1;;;;;;351:79:9;386:42;351:79;;;525:148;;;;;;;;;-1:-1:-1;2316:612:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;563:16:9;;-1:-1:-1;563:16:9;;;;;;;;2448:13:1;;2316:612;;;;563:16:9;;2448:13:1;;;:::i;:::-;-1:-1:-1;2471:17:1;;;;:7;;:17;;;;;:::i;:::-;-1:-1:-1;2499:42:1;;;;:22;;:42;;;;;:::i;:::-;;2556:9;2551:126;2575:17;:24;2571:1;:28;2551:126;;;2662:4;2620:17;:39;2638:17;2656:1;2638:20;;;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;2620:39:1;;;;;;;;;;;-1:-1:-1;2620:39:1;:46;;-1:-1:-1;;2620:46:1;;;;;;;;;;2601:3;;;;:::i;:::-;;;;2551:126;;;-1:-1:-1;2718:97:1;;;;;2768:4;2718:97;;;926:34:10;;;2775:24:1;976:18:10;;;969:34;1019:18;;;1012:43;1242:42:1;;2718:41;;861:18:10;;2718:97:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2825:96:1;;;;;2875:4;2825:96;;;926:34:10;;;2882:23:1;976:18:10;;;969:34;1019:18;;;1012:43;1242:42:1;;-1:-1:-1;2825:41:1;;-1:-1:-1;861:18:10;;2825:96:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;585:5:9::1;:18:::0;;-1:-1:-1;;;;;;585:18:9::1;593:10;585:18;::::0;;-1:-1:-1;173:1524:9;;-1:-1:-1;;;;173:1524:9;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;173:1524:9;;;-1:-1:-1;173:1524:9;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;173:1524:9;-1:-1:-1;;;;;173:1524:9;;;;;;;;;;;-1:-1:-1;173:1524:9;;;;;;;;;;;;;;;;;;;;;203:184:10;255:77;252:1;245:88;352:4;349:1;342:15;376:4;373:1;366:15;392:289;431:3;-1:-1:-1;;452:17:10;;449:197;;;502:77;499:1;492:88;603:4;600:1;593:15;631:4;628:1;621:15;449:197;-1:-1:-1;673:1:10;662:13;;392:289::o;1066:437::-;1151:1;1141:12;;1198:1;1188:12;;;1209:61;;1263:4;1255:6;1251:17;1241:27;;1209:61;1316:2;1308:6;1305:14;1285:18;1282:38;1279:218;;;1353:77;1350:1;1343:88;1454:4;1451:1;1444:15;1482:4;1479:1;1472:15;1279:218;;1066:437;;;:::o;:::-;173:1524:9;;;;;;",
  "deployedSourceMap": "173:1524:9:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6784:130:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2982:98;;;:::i;:::-;;;;;;;:::i;8542:197::-;;;;;;:::i;:::-;;:::i;:::-;;;2046:14:10;;2039:22;2021:41;;2009:2;1994:18;8542:197:1;1881:187:10;3775:123:1;3879:12;;3775:123;;;2219:25:10;;;2207:2;2192:18;3775:123:1;2073:177:10;9221:639:1;;;;;;:::i;:::-;;:::i;1193:151:9:-;;;;;;:::i;:::-;;:::i;:::-;;3422:82:1;;;3495:2;3043:36:10;;3031:2;3016:18;3422:82:1;2901:184:10;3619:95:1;3706:1;3619:95;;7033:366;;;;;;:::i;:::-;;:::i;3998:150::-;;;;;;:::i;:::-;-1:-1:-1;;;;;4119:22:1;4093:7;4119:22;;;;;;;;;;;;3998:150;1519:176:9;;;:::i;721:243::-;;;;;;:::i;:::-;;:::i;5839:412:1:-;;;;;;:::i;:::-;;:::i;3136:102::-;;;:::i;4278:193::-;;;;;;:::i;:::-;;:::i;4702:439::-;;;;;;:::i;:::-;;:::i;5461:311::-;;;;;;:::i;:::-;;:::i;8084:151::-;;;;;;:::i;:::-;-1:-1:-1;;;;;8200:19:1;;;8174:7;8200:19;;;:11;:19;;;;;;;;:28;;;;;;;;;;;;;8084:151;6315:403;;;;;;:::i;:::-;;:::i;7520:325::-;;;;;;:::i;:::-;;:::i;5271:127::-;;;;;;:::i;:::-;;:::i;6784:130::-;6850:16;6885:22;6878:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6878:29:1;;;;;;;;;;;;;;;;;;;;;;;6784:130;:::o;2982:98::-;3036:13;3068:5;3061:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3061:12:1;;2982:98;-1:-1:-1;;;;;2982:98:1:o;8542:197::-;8624:4;719:10:6;8679:32:1;719:10:6;8696:7:1;8705:5;8679:8;:32::i;:::-;-1:-1:-1;8728:4:1;;8542:197;-1:-1:-1;;;8542:197:1:o;9221:639::-;9357:4;-1:-1:-1;;;;;9381:23:1;;9373:72;;;;-1:-1:-1;;;;;9373:72:1;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;;;;;9463:20:1;;9455:71;;;;-1:-1:-1;;;;;9455:71:1;;8255:2:10;9455:71:1;;;8237:21:10;8294:2;8274:18;;;8267:30;8333:34;8313:18;;;8306:62;8404:8;8384:18;;;8377:36;8430:19;;9455:71:1;8053:402:10;9455:71:1;9537:15;719:10:6;9537:30:1;;9578:61;9596:7;9605:6;9613:9;9624:6;9578:61;;;;;;;;;;;;;;;;;;;;;;;;:17;:61::i;:::-;9650:40;9666:6;9674:7;9683:6;9650:15;:40::i;:::-;9701:49;9707:7;9716:6;9724:9;9735:6;9701:49;;;;;;;;;;;;;;;;;;;;;;;;:5;:49::i;:::-;9761:70;9781:7;9790:6;9798:9;9809:6;9761:70;;;;;;;;;;;;;;;;;;;;;;;;9825:5;9761:19;:70::i;:::-;-1:-1:-1;9849:4:1;;9221:639;-1:-1:-1;;;;9221:639:1:o;1193:151:9:-;1055:5;;-1:-1:-1;;;;;1055:5:9;1041:10;:19;1033:45;;;;-1:-1:-1;;;;;1033:45:9;;8662:2:10;1033:45:9;;;8644:21:10;8701:2;8681:18;;;8674:30;8740:15;8720:18;;;8713:43;8773:18;;1033:45:9;8460:337:10;1033:45:9;1245:10:::1;::::0;1265:5:::1;::::0;1245:34:::1;::::0;;;;-1:-1:-1;;;;;1265:5:9;;::::1;1245:34;::::0;::::1;8976:74:10::0;9066:18;;;9059:34;;;1245:10:9;::::1;::::0;:19:::1;::::0;8949:18:10;;1245:34:9::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1193:151:::0;:::o;7033:366:1:-;7240:35;719:10:6;7268:6:1;7240:13;:35::i;:::-;7232:92;;;;-1:-1:-1;;;;;7232:92:1;;;;;;;:::i;:::-;7334:58;7340:6;7348:9;7359:6;7367:4;7373:12;7387:4;7334:5;:58::i;:::-;7033:366;;;;;:::o;1519:176:9:-;1055:5;;-1:-1:-1;;;;;1055:5:9;1041:10;:19;1033:45;;;;-1:-1:-1;;;;;1033:45:9;;8662:2:10;1033:45:9;;;8644:21:10;8701:2;8681:18;;;8674:30;8740:15;8720:18;;;8713:43;8773:18;;1033:45:9;8460:337:10;1033:45:9;1563:10:::1;::::0;1583:5:::1;::::0;1590:35:::1;::::0;;;;1619:4:::1;1590:35;::::0;::::1;9945:74:10::0;-1:-1:-1;;;;;1563:10:9;;::::1;::::0;:19:::1;::::0;1583:5:::1;::::0;1563:10;;1590:20:::1;::::0;9918:18:10;;1590:35:9::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1563:63;::::0;::::1;;::::0;::::1;;::::0;;-1:-1:-1;;;;;8994:55:10;;;1563:63:9::1;::::0;::::1;8976:74:10::0;9066:18;;;9059:34;8949:18;;1563:63:9::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1519:176::o:0;721:243::-;759:10;;:58;;;;;783:10;759:58;;;10482:34:10;803:4:9;10532:18:10;;;10525:43;10584:18;;;10577:34;;;-1:-1:-1;;;;;759:10:9;;;;:23;;10394:18:10;;759:58:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;886:33;892:10;904:6;886:33;;;;;;;;;;;;;;;;;;;;;;;;:5;:33::i;5839:412:1:-;719:10:6;-1:-1:-1;;;;;5926:24:1;;;;5918:73;;;;-1:-1:-1;;;;;5918:73:1;;10824:2:10;5918:73:1;;;10806:21:10;10863:2;10843:18;;;10836:30;10902:34;10882:18;;;10875:62;10973:6;10953:18;;;10946:34;10997:19;;5918:73:1;10622:400:10;5918:73:1;-1:-1:-1;;;;;6006:27:1;;;;;;:17;:27;;;;;;;;6002:185;;;719:10:6;6056:38:1;;;;:24;:38;;;;;;;;-1:-1:-1;;;;;6056:48:1;;;;;;;;;6049:55;;-1:-1:-1;;6049:55:1;;;6002:185;;;719:10:6;6135:24:1;;;;:10;:24;;;;;;;;-1:-1:-1;;;;;6135:34:1;;;;;;;;;:41;;-1:-1:-1;;6135:41:1;6172:4;6135:41;;;6002:185;6202:42;;719:10:6;;-1:-1:-1;;;;;6202:42:1;;;;;;;;5839:412;:::o;3136:102::-;3192:13;3224:7;3217:14;;;;;:::i;4278:193::-;4410:54;719:10:6;4430:9:1;4441:6;4449:4;4410:54;;;;;;;;;;;;4459:4;4410:5;:54::i;:::-;4278:193;;;:::o;4702:439::-;4788:4;-1:-1:-1;;;;;4812:23:1;;4804:72;;;;-1:-1:-1;;;;;4804:72:1;;;;;;;:::i;:::-;4887:12;719:10:6;4887:27:1;;4925:56;4943:4;4949;4955:9;4966:6;4925:56;;;;;;;;;;;;;;;;;;;;;;;;:17;:56::i;:::-;4992:44;4998:4;5004;5010:9;5021:6;4992:44;;;;;;;;;;;;;;;;;;;;;;;;:5;:44::i;:::-;5047:65;5067:4;5073;5079:9;5090:6;5047:65;;;;;;;;;;;;;;;;;;;;;;;;5106:5;5047:19;:65::i;5461:311::-;5561:4;5608:11;-1:-1:-1;;;;;5596:23:1;:8;-1:-1:-1;;;;;5596:23:1;;:120;;;-1:-1:-1;;;;;;5636:27:1;;;;;;:17;:27;;;;;;;;:79;;;;-1:-1:-1;;;;;;5668:37:1;;;;;;;:24;:37;;;;;;;;:47;;;;;;;;;;;;5667:48;5636:79;5596:169;;;-1:-1:-1;;;;;;5732:23:1;;;;;;;:10;:23;;;;;;;;:33;;;;;;;;;;;;5596:169;5577:188;5461:311;-1:-1:-1;;;5461:311:1:o;6315:403::-;-1:-1:-1;;;;;6399:24:1;;719:10:6;6399:24:1;;6391:70;;;;-1:-1:-1;;;;;6391:70:1;;11229:2:10;6391:70:1;;;11211:21:10;11268:2;11248:18;;;11241:30;11307:34;11287:18;;;11280:62;11378:3;11358:18;;;11351:31;11399:19;;6391:70:1;11027:397:10;6391:70:1;-1:-1:-1;;;;;6476:27:1;;;;;;:17;:27;;;;;;;;6472:185;;;719:10:6;6519:38:1;;;;:24;:38;;;;;;;;-1:-1:-1;;;;;6519:48:1;;;;;;;;;:55;;-1:-1:-1;;6519:55:1;6570:4;6519:55;;;6472:185;;;719:10:6;6612:24:1;;;;:10;:24;;;;;;;;-1:-1:-1;;;;;6612:34:1;;;;;;;;;6605:41;;-1:-1:-1;;6605:41:1;;;6472:185;6672:39;;719:10:6;;-1:-1:-1;;;;;6672:39:1;;;;;;;;6315:403;:::o;7520:325::-;7701:36;719:10:6;7729:7:1;7701:13;:36::i;:::-;7693:93;;;;-1:-1:-1;;;;;7693:93:1;;;;;;;:::i;:::-;7796:42;7802:7;7811:6;7819:4;7825:12;7796:5;:42::i;:::-;7520:325;;;;:::o;5271:127::-;5354:37;719:10:6;5374:6:1;5382:4;5354:37;;;;;;;;;;;;:5;:37::i;14997:373::-;-1:-1:-1;;;;;15128:20:1;;15120:70;;;;-1:-1:-1;;;;;15120:70:1;;11631:2:10;15120:70:1;;;11613:21:10;11670:2;11650:18;;;11643:30;11709:34;11689:18;;;11682:62;11780:7;11760:18;;;11753:35;11805:19;;15120:70:1;11429:401:10;15120:70:1;-1:-1:-1;;;;;15208:21:1;;15200:69;;;;-1:-1:-1;;;;;15200:69:1;;12037:2:10;15200:69:1;;;12019:21:10;12076:2;12056:18;;;12049:30;12115:34;12095:18;;;12088:62;12186:5;12166:18;;;12159:33;12209:19;;15200:69:1;11835:399:10;15200:69:1;-1:-1:-1;;;;;15280:19:1;;;;;;;:11;:19;;;;;;;;:28;;;;;;;;;;;;;:36;;;15331:32;;2219:25:10;;;15331:32:1;;2192:18:10;15331:32:1;;;;;;;14997:373;;;:::o;15843:472::-;16074:78;;;;;-1:-1:-1;;;;;8994:55:10;;16074:78:1;;;8976:74:10;1491:31:1;9066:18:10;;;9059:34;16052:19:1;;1242:42;;16074:41;;8949:18:10;;16074:78:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;16052:100;-1:-1:-1;;;;;;16166:25:1;;;16162:147;;16207:91;;;;;-1:-1:-1;;;;;16207:39:1;;;;;:91;;16247:8;;16257:4;;16263:2;;16267:6;;16275:8;;16285:12;;16207:91;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16162:147;16042:273;15843:472;;;;;;:::o;17957:442::-;-1:-1:-1;;;;;8200:19:1;;;18087:24;8200:19;;;:11;:19;;;;;;;;:28;;;;;;;;;;-1:-1:-1;;18153:37:1;;18149:244;;18234:6;18214:16;:26;;18206:69;;;;-1:-1:-1;;;;;18206:69:1;;13759:2:10;18206:69:1;;;13741:21:10;13798:2;13778:18;;;13771:30;13837:32;13817:18;;;13810:60;13887:18;;18206:69:1;13557:354:10;18206:69:1;18317:51;18326:5;18333:7;18361:6;18342:16;:25;18317:8;:51::i;14248:611::-;-1:-1:-1;;;;;14526:15:1;;14504:19;14526:15;;;;;;;;;;;14559:21;;;;14551:73;;;;-1:-1:-1;;;;;14551:73:1;;14118:2:10;14551:73:1;;;14100:21:10;14157:2;14137:18;;;14130:30;14196:34;14176:18;;;14169:62;14267:9;14247:18;;;14240:37;14294:19;;14551:73:1;13916:403:10;14551:73:1;-1:-1:-1;;;;;14658:15:1;;;:9;:15;;;;;;;;;;;14676:20;;;14658:38;;14716:13;;;;;;;;:23;;14690:6;;14658:9;14716:23;;14690:6;;14716:23;:::i;:::-;;;;;;;;14776:2;-1:-1:-1;;;;;14755:56:1;14770:4;-1:-1:-1;;;;;14755:56:1;14760:8;-1:-1:-1;;;;;14755:56:1;;14780:6;14788:8;14798:12;14755:56;;;;;;;;:::i;:::-;;;;;;;;14841:2;-1:-1:-1;;;;;14826:26:1;14835:4;-1:-1:-1;;;;;14826:26:1;;14845:6;14826:26;;;;2219:25:10;;2207:2;2192:18;;2073:177;14826:26:1;;;;;;;;14435:424;14248:611;;;;;;:::o;17004:676::-;17271:79;;;;;-1:-1:-1;;;;;8994:55:10;;17271:79:1;;;8976:74:10;1588:34:1;9066:18:10;;;9059:34;17249:19:1;;1242:42;;17271:41;;8949:18:10;;17271:79:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;17249:101;-1:-1:-1;;;;;;17364:25:1;;;17360:314;;17405:96;;;;;-1:-1:-1;;;;;17405:44:1;;;;;:96;;17450:8;;17460:4;;17466:2;;17470:6;;17478:8;;17488:12;;17405:96;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17360:314;;;17522:19;17518:156;;;-1:-1:-1;;;;;17566:13:1;;1465:19:5;:23;17557:106:1;;;;-1:-1:-1;;;;;17557:106:1;;15303:2:10;17557:106:1;;;15285:21:10;15342:2;15322:18;;;15315:30;15381:34;15361:18;;;15354:62;15452:34;15432:18;;;15425:62;15524:15;15503:19;;;15496:44;15557:19;;17557:106:1;15101:481:10;17557:106:1;17239:441;17004:676;;;;;;;:::o;12476:650::-;-1:-1:-1;;;;;12698:18:1;;12690:65;;;;-1:-1:-1;;;;;12690:65:1;;15789:2:10;12690:65:1;;;15771:21:10;15828:2;15808:18;;;15801:30;15867:34;15847:18;;;15840:62;15938:4;15918:18;;;15911:32;15960:19;;12690:65:1;15587:398:10;12690:65:1;-1:-1:-1;;;;;12773:16:1;;12765:61;;;;-1:-1:-1;;;;;12765:61:1;;16192:2:10;12765:61:1;;;16174:21:10;;;16211:18;;;16204:30;16270:34;16250:18;;;16243:62;16322:18;;12765:61:1;15990:356:10;12765:61:1;719:10:6;12879:69:1;719:10:6;12907:4:1;12913:2;12917:6;12925:8;12935:12;12879:17;:69::i;:::-;12959:57;12965:8;12975:4;12981:2;12985:6;12993:8;13003:12;12959:5;:57::i;:::-;13027:92;13047:8;13057:4;13063:2;13067:6;13075:8;13085:12;13099:19;13027;:92::i;10430:222::-;10593:52;10599:7;10608:6;10616:8;10626:12;10640:4;10593:5;:52::i;13431:811::-;-1:-1:-1;;;;;13595:18:1;;13587:65;;;;-1:-1:-1;;;;;13587:65:1;;16553:2:10;13587:65:1;;;16535:21:10;16592:2;16572:18;;;16565:30;16631:34;16611:18;;;16604:62;16702:4;16682:18;;;16675:32;16724:19;;13587:65:1;16351:398:10;13587:65:1;719:10:6;13705:73:1;719:10:6;13733:4:1;13663:16;13751:6;13759:4;13765:12;13705:17;:73::i;:::-;-1:-1:-1;;;;;13912:15:1;;13890:19;13912:15;;;;;;;;;;;13945:21;;;;13937:69;;;;-1:-1:-1;;;;;13937:69:1;;16956:2:10;13937:69:1;;;16938:21:10;16995:2;16975:18;;;16968:30;17034:34;17014:18;;;17007:62;17105:5;17085:18;;;17078:33;17128:19;;13937:69:1;16754:399:10;13937:69:1;-1:-1:-1;;;;;14040:15:1;;:9;:15;;;;;;;;;;14058:20;;;14040:38;;14098:12;:22;;14072:6;;14040:9;14098:22;;14072:6;;14098:22;:::i;:::-;;;;;;;;14153:4;-1:-1:-1;;;;;14136:50:1;14143:8;-1:-1:-1;;;;;14136:50:1;;14159:6;14167:4;14173:12;14136:50;;;;;;;;:::i;:::-;;;;;;;;14201:34;;2219:25:10;;;14224:1:1;;-1:-1:-1;;;;;14201:34:1;;;;;2207:2:10;2192:18;14201:34:1;;;;;;;;13577:665;;13431:811;;;;:::o;11274:726::-;-1:-1:-1;;;;;11479:21:1;;11471:66;;;;-1:-1:-1;;;;;11471:66:1;;17490:2:10;11471:66:1;;;17472:21:10;;;17509:18;;;17502:30;17568:34;17548:18;;;17541:62;17620:18;;11471:66:1;17288:356:10;11471:66:1;11548:16;719:10:6;11548:31:1;;11710:6;11694:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;11726:18:1;;:9;:18;;;;;;;;;;:28;;11748:6;;11726:9;:28;;11748:6;;11726:28;:::i;:::-;;;;-1:-1:-1;11765:103:1;;-1:-1:-1;11785:8:1;11803:1;11807:7;11816:6;11824:8;11834:12;11848:19;11765;:103::i;:::-;11901:7;-1:-1:-1;;;;;11884:57:1;11891:8;-1:-1:-1;;;;;11884:57:1;;11910:6;11918:8;11928:12;11884:57;;;;;;;;:::i;:::-;;;;;;;;11956:37;;2219:25:10;;;-1:-1:-1;;;;;11956:37:1;;;11973:1;;11956:37;;2207:2:10;2192:18;11956:37:1;2073:177:10;14:681;185:2;237:21;;;307:13;;210:18;;;329:22;;;156:4;;185:2;408:15;;;;382:2;367:18;;;156:4;451:218;465:6;462:1;459:13;451:218;;;530:13;;-1:-1:-1;;;;;526:62:10;514:75;;644:15;;;;609:12;;;;487:1;480:9;451:218;;;-1:-1:-1;686:3:10;;14:681;-1:-1:-1;;;;;;14:681:10:o;700:472::-;742:3;780:5;774:12;807:6;802:3;795:19;832:1;842:162;856:6;853:1;850:13;842:162;;;918:4;974:13;;;970:22;;964:29;946:11;;;942:20;;935:59;871:12;842:162;;;1022:6;1019:1;1016:13;1013:87;;;1088:1;1081:4;1072:6;1067:3;1063:16;1059:27;1052:38;1013:87;-1:-1:-1;1154:2:10;1133:15;-1:-1:-1;;1129:29:10;1120:39;;;;1161:4;1116:50;;700:472;-1:-1:-1;;700:472:10:o;1177:220::-;1326:2;1315:9;1308:21;1289:4;1346:45;1387:2;1376:9;1372:18;1364:6;1346:45;:::i;1402:154::-;-1:-1:-1;;;;;1481:5:10;1477:54;1470:5;1467:65;1457:93;;1546:1;1543;1536:12;1561:315;1629:6;1637;1690:2;1678:9;1669:7;1665:23;1661:32;1658:52;;;1706:1;1703;1696:12;1658:52;1745:9;1732:23;1764:31;1789:5;1764:31;:::i;:::-;1814:5;1866:2;1851:18;;;;1838:32;;-1:-1:-1;;;1561:315:10:o;2255:456::-;2332:6;2340;2348;2401:2;2389:9;2380:7;2376:23;2372:32;2369:52;;;2417:1;2414;2407:12;2369:52;2456:9;2443:23;2475:31;2500:5;2475:31;:::i;:::-;2525:5;-1:-1:-1;2582:2:10;2567:18;;2554:32;2595:33;2554:32;2595:33;:::i;:::-;2255:456;;2647:7;;-1:-1:-1;;;2701:2:10;2686:18;;;;2673:32;;2255:456::o;2716:180::-;2775:6;2828:2;2816:9;2807:7;2803:23;2799:32;2796:52;;;2844:1;2841;2834:12;2796:52;-1:-1:-1;2867:23:10;;2716:180;-1:-1:-1;2716:180:10:o;3090:184::-;3142:77;3139:1;3132:88;3239:4;3236:1;3229:15;3263:4;3260:1;3253:15;3279:718;3321:5;3374:3;3367:4;3359:6;3355:17;3351:27;3341:55;;3392:1;3389;3382:12;3341:55;3428:6;3415:20;3454:18;3491:2;3487;3484:10;3481:36;;;3497:18;;:::i;:::-;3572:2;3566:9;3540:2;3626:13;;-1:-1:-1;;3622:22:10;;;3646:2;3618:31;3614:40;3602:53;;;3670:18;;;3690:22;;;3667:46;3664:72;;;3716:18;;:::i;:::-;3756:10;3752:2;3745:22;3791:2;3783:6;3776:18;3837:3;3830:4;3825:2;3817:6;3813:15;3809:26;3806:35;3803:55;;;3854:1;3851;3844:12;3803:55;3918:2;3911:4;3903:6;3899:17;3892:4;3884:6;3880:17;3867:54;3965:1;3958:4;3953:2;3945:6;3941:15;3937:26;3930:37;3985:6;3976:15;;;;;;3279:718;;;;:::o;4002:885::-;4115:6;4123;4131;4139;4147;4200:3;4188:9;4179:7;4175:23;4171:33;4168:53;;;4217:1;4214;4207:12;4168:53;4256:9;4243:23;4275:31;4300:5;4275:31;:::i;:::-;4325:5;-1:-1:-1;4382:2:10;4367:18;;4354:32;4395:33;4354:32;4395:33;:::i;:::-;4447:7;-1:-1:-1;4501:2:10;4486:18;;4473:32;;-1:-1:-1;4556:2:10;4541:18;;4528:32;4579:18;4609:14;;;4606:34;;;4636:1;4633;4626:12;4606:34;4659:49;4700:7;4691:6;4680:9;4676:22;4659:49;:::i;:::-;4649:59;;4761:3;4750:9;4746:19;4733:33;4717:49;;4791:2;4781:8;4778:16;4775:36;;;4807:1;4804;4797:12;4775:36;;4830:51;4873:7;4862:8;4851:9;4847:24;4830:51;:::i;:::-;4820:61;;;4002:885;;;;;;;;:::o;4892:247::-;4951:6;5004:2;4992:9;4983:7;4979:23;4975:32;4972:52;;;5020:1;5017;5010:12;4972:52;5059:9;5046:23;5078:31;5103:5;5078:31;:::i;5144:523::-;5230:6;5238;5246;5299:2;5287:9;5278:7;5274:23;5270:32;5267:52;;;5315:1;5312;5305:12;5267:52;5354:9;5341:23;5373:31;5398:5;5373:31;:::i;:::-;5423:5;-1:-1:-1;5475:2:10;5460:18;;5447:32;;-1:-1:-1;5530:2:10;5515:18;;5502:32;5557:18;5546:30;;5543:50;;;5589:1;5586;5579:12;5543:50;5612:49;5653:7;5644:6;5633:9;5629:22;5612:49;:::i;:::-;5602:59;;;5144:523;;;;;:::o;5672:388::-;5740:6;5748;5801:2;5789:9;5780:7;5776:23;5772:32;5769:52;;;5817:1;5814;5807:12;5769:52;5856:9;5843:23;5875:31;5900:5;5875:31;:::i;:::-;5925:5;-1:-1:-1;5982:2:10;5967:18;;5954:32;5995:33;5954:32;5995:33;:::i;:::-;6047:7;6037:17;;;5672:388;;;;;:::o;6065:743::-;6169:6;6177;6185;6193;6246:3;6234:9;6225:7;6221:23;6217:33;6214:53;;;6263:1;6260;6253:12;6214:53;6302:9;6289:23;6321:31;6346:5;6321:31;:::i;:::-;6371:5;-1:-1:-1;6423:2:10;6408:18;;6395:32;;-1:-1:-1;6478:2:10;6463:18;;6450:32;6501:18;6531:14;;;6528:34;;;6558:1;6555;6548:12;6528:34;6581:49;6622:7;6613:6;6602:9;6598:22;6581:49;:::i;:::-;6571:59;;6683:2;6672:9;6668:18;6655:32;6639:48;;6712:2;6702:8;6699:16;6696:36;;;6728:1;6725;6718:12;6696:36;;6751:51;6794:7;6783:8;6772:9;6768:24;6751:51;:::i;:::-;6741:61;;;6065:743;;;;;;;:::o;6813:388::-;6890:6;6898;6951:2;6939:9;6930:7;6926:23;6922:32;6919:52;;;6967:1;6964;6957:12;6919:52;7003:9;6990:23;6980:33;;7064:2;7053:9;7049:18;7036:32;7091:18;7083:6;7080:30;7077:50;;;7123:1;7120;7113:12;7077:50;7146:49;7187:7;7178:6;7167:9;7163:22;7146:49;:::i;:::-;7136:59;;;6813:388;;;;;:::o;7206:437::-;7291:1;7281:12;;7338:1;7328:12;;;7349:61;;7403:4;7395:6;7391:17;7381:27;;7349:61;7456:2;7448:6;7445:14;7425:18;7422:38;7419:218;;;7493:77;7490:1;7483:88;7594:4;7591:1;7584:15;7622:4;7619:1;7612:15;7419:218;;7206:437;;;:::o;7648:400::-;7850:2;7832:21;;;7889:2;7869:18;;;7862:30;7928:34;7923:2;7908:18;;7901:62;7999:6;7994:2;7979:18;;7972:34;8038:3;8023:19;;7648:400::o;9104:277::-;9171:6;9224:2;9212:9;9203:7;9199:23;9195:32;9192:52;;;9240:1;9237;9230:12;9192:52;9272:9;9266:16;9325:5;9318:13;9311:21;9304:5;9301:32;9291:60;;9347:1;9344;9337:12;9386:408;9588:2;9570:21;;;9627:2;9607:18;;;9600:30;9666:34;9661:2;9646:18;;9639:62;9737:14;9732:2;9717:18;;9710:42;9784:3;9769:19;;9386:408::o;10030:184::-;10100:6;10153:2;10141:9;10132:7;10128:23;10124:32;10121:52;;;10169:1;10166;10159:12;10121:52;-1:-1:-1;10192:16:10;;10030:184;-1:-1:-1;10030:184:10:o;12541:251::-;12611:6;12664:2;12652:9;12643:7;12639:23;12635:32;12632:52;;;12680:1;12677;12670:12;12632:52;12712:9;12706:16;12731:31;12756:5;12731:31;:::i;12797:755::-;13065:4;-1:-1:-1;;;;;13175:2:10;13167:6;13163:15;13152:9;13145:34;13227:2;13219:6;13215:15;13210:2;13199:9;13195:18;13188:43;13279:2;13271:6;13267:15;13262:2;13251:9;13247:18;13240:43;;13319:6;13314:2;13303:9;13299:18;13292:34;13363:3;13357;13346:9;13342:19;13335:32;13390:46;13431:3;13420:9;13416:19;13408:6;13390:46;:::i;:::-;13485:9;13477:6;13473:22;13467:3;13456:9;13452:19;13445:51;13513:33;13539:6;13531;13513:33;:::i;:::-;13505:41;12797:755;-1:-1:-1;;;;;;;;;12797:755:10:o;14324:184::-;14376:77;14373:1;14366:88;14473:4;14470:1;14463:15;14497:4;14494:1;14487:15;14513:128;14553:3;14584:1;14580:6;14577:1;14574:13;14571:39;;;14590:18;;:::i;:::-;-1:-1:-1;14626:9:10;;14513:128::o;14646:450::-;14867:6;14856:9;14849:25;14910:2;14905;14894:9;14890:18;14883:30;14830:4;14936:45;14977:2;14966:9;14962:18;14954:6;14936:45;:::i;:::-;15029:9;15021:6;15017:22;15012:2;15001:9;14997:18;14990:50;15057:33;15083:6;15075;15057:33;:::i;:::-;15049:41;14646:450;-1:-1:-1;;;;;;14646:450:10:o;17158:125::-;17198:4;17226:1;17223;17220:8;17217:34;;;17231:18;;:::i;:::-;-1:-1:-1;17268:9:10;;17158:125::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC777/ERC777.sol\";\nimport \"@openzeppelin/contracts/token/ERC20/IERC20.sol\";\n\ncontract MyToken is ERC777 {\n\t// IERC20 Interface lets us call IERC20 functions in other ERC20 contracts\n\t// TODO: Replace Address here with the token address you're targetting\n\tIERC20 otherToken = IERC20(address(0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1));\n\n\t// Owner of the contract\n\taddress private owner;\n\n\t// TODO: Replace Token Name and Symbol\n\tconstructor() ERC777(\"MyToken\", \"MT\", new address[](0)) {\n\t\towner = msg.sender; \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// Set Deployer Address as the Owner\n\t}\n\n\tmapping(address => uint) private deposited;\n\tfunction swap(uint amount) public {\n\t\totherToken.transferFrom(msg.sender, address(this), amount); \t\t\t\t\t\t\t\t\t// Transfer tokens from caller account to THIS Contract\n\t\t_mint(msg.sender, amount, \"\", \"\"); \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// Mint New Tokens\n\t}\n\n\t// Modifier to restrict access to Owner\n\tmodifier onlyOwner() {\n\t\trequire(msg.sender == owner, \"Access Denied\");\n\t\t_;\n\t}\n\n\t// Function to withdraw\n\t// Only Owner can call it\n\t// Transfers a specific amount to Owner's account\n\tfunction withdraw(uint amount) public onlyOwner {\n\t\totherToken.transfer(owner, amount);\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// Transfer from THIS Contract to Owner\n\t}\n\n\t// Function to withdraw entire token balance\n\t// Only Owner can call it\n\t// address(this) returns the Contract Address\n\t// Transfers the entire balance to Owner's account\n\tfunction withdrawAll() public onlyOwner {\n\t\totherToken.transfer(owner, otherToken.balanceOf(address(this)));\t\t\t\t\t\t\t// Transfer entire token balance of THIS Contract to Owner\n\t}\n}",
  "sourcePath": "C:\\Users\\debuj\\Desktop\\projects\\fiverr_wrappable\\onchain\\contracts\\MyToken.sol",
  "ast": {
    "absolutePath": "project:/contracts/MyToken.sol",
    "exportedSymbols": {
      "Address": [
        1734
      ],
      "Context": [
        1756
      ],
      "ERC777": [
        1240
      ],
      "IERC1820Registry": [
        1846
      ],
      "IERC20": [
        77
      ],
      "IERC777": [
        1399
      ],
      "IERC777Recipient": [
        1419
      ],
      "IERC777Sender": [
        1439
      ],
      "MyToken": [
        1991
      ]
    },
    "id": 1992,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1881,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:9"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "id": 1882,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1992,
        "sourceUnit": 1241,
        "src": "57:57:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "id": 1883,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1992,
        "sourceUnit": 78,
        "src": "115:56:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 1884,
              "name": "ERC777",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1240,
              "src": "193:6:9"
            },
            "id": 1885,
            "nodeType": "InheritanceSpecifier",
            "src": "193:6:9"
          }
        ],
        "canonicalName": "MyToken",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1991,
        "linearizedBaseContracts": [
          1991,
          1240,
          77,
          1399,
          1756
        ],
        "name": "MyToken",
        "nameLocation": "182:7:9",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1894,
            "mutability": "mutable",
            "name": "otherToken",
            "nameLocation": "358:10:9",
            "nodeType": "VariableDeclaration",
            "scope": 1991,
            "src": "351:79:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$77",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 1887,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 1886,
                "name": "IERC20",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 77,
                "src": "351:6:9"
              },
              "referencedDeclaration": 77,
              "src": "351:6:9",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$77",
                "typeString": "contract IERC20"
              }
            },
            "value": {
              "arguments": [
                {
                  "arguments": [
                    {
                      "hexValue": "307866653446353134356636653039393532613562613965393536454430433235653346613463374631",
                      "id": 1891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "386:42:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "value": "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    ],
                    "id": 1890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "378:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 1889,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "378:7:9",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 1892,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "378:51:9",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                ],
                "id": 1888,
                "name": "IERC20",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 77,
                "src": "371:6:9",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                  "typeString": "type(contract IERC20)"
                }
              },
              "id": 1893,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "371:59:9",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$77",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1896,
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "476:5:9",
            "nodeType": "VariableDeclaration",
            "scope": 1991,
            "src": "460:21:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1895,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "460:7:9",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1913,
              "nodeType": "Block",
              "src": "581:92:9",
              "statements": [
                {
                  "expression": {
                    "id": 1911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1908,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1896,
                      "src": "585:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1909,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "593:3:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "593:10:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "585:18:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1912,
                  "nodeType": "ExpressionStatement",
                  "src": "585:18:9"
                }
              ]
            },
            "id": 1914,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4d79546f6b656e",
                    "id": 1899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "546:9:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_245c734e6d4ec044daf7beffa09d54d4bafba490113c199734d790b04a7390e5",
                      "typeString": "literal_string \"MyToken\""
                    },
                    "value": "MyToken"
                  },
                  {
                    "hexValue": "4d54",
                    "id": 1900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "557:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_5b3fa69ad8a0666e5be827c0e18983e3cd29364bca2f1d8ae5b20eac8ce61c0d",
                      "typeString": "literal_string \"MT\""
                    },
                    "value": "MT"
                  },
                  {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 1904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "577:1:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 1903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "563:13:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 1901,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "567:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1902,
                        "nodeType": "ArrayTypeName",
                        "src": "567:9:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 1905,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "563:16:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  }
                ],
                "id": 1906,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 1898,
                  "name": "ERC777",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1240,
                  "src": "539:6:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "539:41:9"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1897,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "536:2:9"
            },
            "returnParameters": {
              "id": 1907,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "581:0:9"
            },
            "scope": 1991,
            "src": "525:148:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1918,
            "mutability": "mutable",
            "name": "deposited",
            "nameLocation": "709:9:9",
            "nodeType": "VariableDeclaration",
            "scope": 1991,
            "src": "676:42:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 1917,
              "keyType": {
                "id": 1915,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "684:7:9",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "676:24:9",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 1916,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "695:4:9",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1943,
              "nodeType": "Block",
              "src": "755:209:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1926,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "783:3:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1927,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "783:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 1930,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "803:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MyToken_$1991",
                              "typeString": "contract MyToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MyToken_$1991",
                              "typeString": "contract MyToken"
                            }
                          ],
                          "id": 1929,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "795:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1928,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "795:7:9",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "795:13:9",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1932,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1920,
                        "src": "810:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 1923,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1894,
                        "src": "759:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 1925,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58,
                      "src": "759:23:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "759:58:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1934,
                  "nodeType": "ExpressionStatement",
                  "src": "759:58:9"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1936,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "892:3:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1937,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "892:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1938,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1920,
                        "src": "904:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 1939,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "912:2:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "hexValue": "",
                        "id": 1940,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "916:2:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 1935,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        726,
                        806
                      ],
                      "referencedDeclaration": 726,
                      "src": "886:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 1941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "886:33:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1942,
                  "nodeType": "ExpressionStatement",
                  "src": "886:33:9"
                }
              ]
            },
            "functionSelector": "94b918de",
            "id": 1944,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "swap",
            "nameLocation": "730:4:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1920,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "740:6:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 1944,
                  "src": "735:11:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1919,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "734:13:9"
            },
            "returnParameters": {
              "id": 1922,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "755:0:9"
            },
            "scope": 1991,
            "src": "721:243:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1955,
              "nodeType": "Block",
              "src": "1029:58:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 1947,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1041:3:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1041:10:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 1949,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1896,
                          "src": "1055:5:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1041:19:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4163636573732044656e696564",
                        "id": 1951,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1062:15:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226",
                          "typeString": "literal_string \"Access Denied\""
                        },
                        "value": "Access Denied"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226",
                          "typeString": "literal_string \"Access Denied\""
                        }
                      ],
                      "id": 1946,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1033:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1033:45:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1953,
                  "nodeType": "ExpressionStatement",
                  "src": "1033:45:9"
                },
                {
                  "id": 1954,
                  "nodeType": "PlaceholderStatement",
                  "src": "1082:1:9"
                }
              ]
            },
            "id": 1956,
            "name": "onlyOwner",
            "nameLocation": "1017:9:9",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1026:2:9"
            },
            "src": "1008:79:9",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1970,
              "nodeType": "Block",
              "src": "1241:103:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1966,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1896,
                        "src": "1265:5:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1967,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1958,
                        "src": "1272:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 1963,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1894,
                        "src": "1245:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 1965,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26,
                      "src": "1245:19:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1245:34:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1969,
                  "nodeType": "ExpressionStatement",
                  "src": "1245:34:9"
                }
              ]
            },
            "functionSelector": "2e1a7d4d",
            "id": 1971,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1961,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1960,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1956,
                  "src": "1231:9:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "1231:9:9"
              }
            ],
            "name": "withdraw",
            "nameLocation": "1202:8:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1958,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1216:6:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 1971,
                  "src": "1211:11:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1957,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1211:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1210:13:9"
            },
            "returnParameters": {
              "id": 1962,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:9"
            },
            "scope": 1991,
            "src": "1193:151:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1989,
              "nodeType": "Block",
              "src": "1559:136:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1979,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1896,
                        "src": "1583:5:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 1984,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "1619:4:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MyToken_$1991",
                                  "typeString": "contract MyToken"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MyToken_$1991",
                                  "typeString": "contract MyToken"
                                }
                              ],
                              "id": 1983,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1611:7:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1982,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1611:7:9",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1985,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1611:13:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 1980,
                            "name": "otherToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1894,
                            "src": "1590:10:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$77",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 1981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16,
                          "src": "1590:20:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 1986,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1590:35:9",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 1976,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1894,
                        "src": "1563:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 1978,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26,
                      "src": "1563:19:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1987,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1563:63:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1988,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:63:9"
                }
              ]
            },
            "functionSelector": "853828b6",
            "id": 1990,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1974,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1973,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1956,
                  "src": "1549:9:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "1549:9:9"
              }
            ],
            "name": "withdrawAll",
            "nameLocation": "1528:11:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1972,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1539:2:9"
            },
            "returnParameters": {
              "id": 1975,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1559:0:9"
            },
            "scope": 1991,
            "src": "1519:176:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1992,
        "src": "173:1524:9",
        "usedErrors": []
      }
    ],
    "src": "32:1665:9"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/MyToken.sol",
    "exportedSymbols": {
      "Address": [
        1734
      ],
      "Context": [
        1756
      ],
      "ERC777": [
        1240
      ],
      "IERC1820Registry": [
        1846
      ],
      "IERC20": [
        77
      ],
      "IERC777": [
        1399
      ],
      "IERC777Recipient": [
        1419
      ],
      "IERC777Sender": [
        1439
      ],
      "MyToken": [
        1991
      ]
    },
    "id": 1992,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1881,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:9"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "id": 1882,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1992,
        "sourceUnit": 1241,
        "src": "57:57:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "id": 1883,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1992,
        "sourceUnit": 78,
        "src": "115:56:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 1884,
              "name": "ERC777",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1240,
              "src": "193:6:9"
            },
            "id": 1885,
            "nodeType": "InheritanceSpecifier",
            "src": "193:6:9"
          }
        ],
        "canonicalName": "MyToken",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1991,
        "linearizedBaseContracts": [
          1991,
          1240,
          77,
          1399,
          1756
        ],
        "name": "MyToken",
        "nameLocation": "182:7:9",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1894,
            "mutability": "mutable",
            "name": "otherToken",
            "nameLocation": "358:10:9",
            "nodeType": "VariableDeclaration",
            "scope": 1991,
            "src": "351:79:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$77",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 1887,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 1886,
                "name": "IERC20",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 77,
                "src": "351:6:9"
              },
              "referencedDeclaration": 77,
              "src": "351:6:9",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$77",
                "typeString": "contract IERC20"
              }
            },
            "value": {
              "arguments": [
                {
                  "arguments": [
                    {
                      "hexValue": "307866653446353134356636653039393532613562613965393536454430433235653346613463374631",
                      "id": 1891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "386:42:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "value": "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    ],
                    "id": 1890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "378:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 1889,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "378:7:9",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 1892,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "378:51:9",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                ],
                "id": 1888,
                "name": "IERC20",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 77,
                "src": "371:6:9",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                  "typeString": "type(contract IERC20)"
                }
              },
              "id": 1893,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "371:59:9",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$77",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1896,
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "476:5:9",
            "nodeType": "VariableDeclaration",
            "scope": 1991,
            "src": "460:21:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1895,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "460:7:9",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1913,
              "nodeType": "Block",
              "src": "581:92:9",
              "statements": [
                {
                  "expression": {
                    "id": 1911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1908,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1896,
                      "src": "585:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1909,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "593:3:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "593:10:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "585:18:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1912,
                  "nodeType": "ExpressionStatement",
                  "src": "585:18:9"
                }
              ]
            },
            "id": 1914,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4d79546f6b656e",
                    "id": 1899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "546:9:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_245c734e6d4ec044daf7beffa09d54d4bafba490113c199734d790b04a7390e5",
                      "typeString": "literal_string \"MyToken\""
                    },
                    "value": "MyToken"
                  },
                  {
                    "hexValue": "4d54",
                    "id": 1900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "557:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_5b3fa69ad8a0666e5be827c0e18983e3cd29364bca2f1d8ae5b20eac8ce61c0d",
                      "typeString": "literal_string \"MT\""
                    },
                    "value": "MT"
                  },
                  {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 1904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "577:1:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 1903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "563:13:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 1901,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "567:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1902,
                        "nodeType": "ArrayTypeName",
                        "src": "567:9:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 1905,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "563:16:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  }
                ],
                "id": 1906,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 1898,
                  "name": "ERC777",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1240,
                  "src": "539:6:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "539:41:9"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1897,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "536:2:9"
            },
            "returnParameters": {
              "id": 1907,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "581:0:9"
            },
            "scope": 1991,
            "src": "525:148:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1918,
            "mutability": "mutable",
            "name": "deposited",
            "nameLocation": "709:9:9",
            "nodeType": "VariableDeclaration",
            "scope": 1991,
            "src": "676:42:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 1917,
              "keyType": {
                "id": 1915,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "684:7:9",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "676:24:9",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 1916,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "695:4:9",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1943,
              "nodeType": "Block",
              "src": "755:209:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1926,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "783:3:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1927,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "783:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 1930,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "803:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MyToken_$1991",
                              "typeString": "contract MyToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MyToken_$1991",
                              "typeString": "contract MyToken"
                            }
                          ],
                          "id": 1929,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "795:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1928,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "795:7:9",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "795:13:9",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1932,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1920,
                        "src": "810:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 1923,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1894,
                        "src": "759:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 1925,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58,
                      "src": "759:23:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "759:58:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1934,
                  "nodeType": "ExpressionStatement",
                  "src": "759:58:9"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1936,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "892:3:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1937,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "892:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1938,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1920,
                        "src": "904:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 1939,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "912:2:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "hexValue": "",
                        "id": 1940,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "916:2:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 1935,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        726,
                        806
                      ],
                      "referencedDeclaration": 726,
                      "src": "886:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 1941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "886:33:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1942,
                  "nodeType": "ExpressionStatement",
                  "src": "886:33:9"
                }
              ]
            },
            "functionSelector": "94b918de",
            "id": 1944,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "swap",
            "nameLocation": "730:4:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1920,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "740:6:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 1944,
                  "src": "735:11:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1919,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "734:13:9"
            },
            "returnParameters": {
              "id": 1922,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "755:0:9"
            },
            "scope": 1991,
            "src": "721:243:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1955,
              "nodeType": "Block",
              "src": "1029:58:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 1947,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1041:3:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1041:10:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 1949,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1896,
                          "src": "1055:5:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1041:19:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4163636573732044656e696564",
                        "id": 1951,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1062:15:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226",
                          "typeString": "literal_string \"Access Denied\""
                        },
                        "value": "Access Denied"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226",
                          "typeString": "literal_string \"Access Denied\""
                        }
                      ],
                      "id": 1946,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1033:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1033:45:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1953,
                  "nodeType": "ExpressionStatement",
                  "src": "1033:45:9"
                },
                {
                  "id": 1954,
                  "nodeType": "PlaceholderStatement",
                  "src": "1082:1:9"
                }
              ]
            },
            "id": 1956,
            "name": "onlyOwner",
            "nameLocation": "1017:9:9",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1026:2:9"
            },
            "src": "1008:79:9",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1970,
              "nodeType": "Block",
              "src": "1241:103:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1966,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1896,
                        "src": "1265:5:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1967,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1958,
                        "src": "1272:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 1963,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1894,
                        "src": "1245:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 1965,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26,
                      "src": "1245:19:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1245:34:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1969,
                  "nodeType": "ExpressionStatement",
                  "src": "1245:34:9"
                }
              ]
            },
            "functionSelector": "2e1a7d4d",
            "id": 1971,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1961,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1960,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1956,
                  "src": "1231:9:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "1231:9:9"
              }
            ],
            "name": "withdraw",
            "nameLocation": "1202:8:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1958,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1216:6:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 1971,
                  "src": "1211:11:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1957,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1211:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1210:13:9"
            },
            "returnParameters": {
              "id": 1962,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:9"
            },
            "scope": 1991,
            "src": "1193:151:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1989,
              "nodeType": "Block",
              "src": "1559:136:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1979,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1896,
                        "src": "1583:5:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 1984,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "1619:4:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MyToken_$1991",
                                  "typeString": "contract MyToken"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MyToken_$1991",
                                  "typeString": "contract MyToken"
                                }
                              ],
                              "id": 1983,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1611:7:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1982,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1611:7:9",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1985,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1611:13:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 1980,
                            "name": "otherToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1894,
                            "src": "1590:10:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$77",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 1981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16,
                          "src": "1590:20:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 1986,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1590:35:9",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 1976,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1894,
                        "src": "1563:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 1978,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26,
                      "src": "1563:19:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1987,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1563:63:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1988,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:63:9"
                }
              ]
            },
            "functionSelector": "853828b6",
            "id": 1990,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1974,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1973,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1956,
                  "src": "1549:9:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "1549:9:9"
              }
            ],
            "name": "withdrawAll",
            "nameLocation": "1528:11:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1972,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1539:2:9"
            },
            "returnParameters": {
              "id": 1975,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1559:0:9"
            },
            "scope": 1991,
            "src": "1519:176:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1992,
        "src": "173:1524:9",
        "usedErrors": []
      }
    ],
    "src": "32:1665:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.10+commit.fc410830.Emscripten.clang"
  },
  "networks": {
    "80001": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "tokenHolder",
              "type": "address"
            }
          ],
          "name": "AuthorizedOperator",
          "type": "event"
        },
        "0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "operatorData",
              "type": "bytes"
            }
          ],
          "name": "Burned",
          "type": "event"
        },
        "0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "operatorData",
              "type": "bytes"
            }
          ],
          "name": "Minted",
          "type": "event"
        },
        "0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "tokenHolder",
              "type": "address"
            }
          ],
          "name": "RevokedOperator",
          "type": "event"
        },
        "0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "operatorData",
              "type": "bytes"
            }
          ],
          "name": "Sent",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x074a524b4a00Ef6a967148a5784e27a645B3E8e6",
      "transactionHash": "0xd98c90486556e1c80dcd2258d928ee4482f31bddf5a22ed84a0fd36db3ed35ef"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2022-02-26T09:07:15.448Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}. Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Note that accounts cannot have allowance issued by their operators."
      },
      "authorizeOperator(address)": {
        "details": "See {IERC777-authorizeOperator}."
      },
      "balanceOf(address)": {
        "details": "Returns the amount of tokens owned by an account (`tokenHolder`)."
      },
      "burn(uint256,bytes)": {
        "details": "See {IERC777-burn}. Also emits a {IERC20-Transfer} event for ERC20 compatibility."
      },
      "decimals()": {
        "details": "See {ERC20-decimals}. Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility)."
      },
      "defaultOperators()": {
        "details": "See {IERC777-defaultOperators}."
      },
      "granularity()": {
        "details": "See {IERC777-granularity}. This implementation always returns `1`."
      },
      "isOperatorFor(address,address)": {
        "details": "See {IERC777-isOperatorFor}."
      },
      "name()": {
        "details": "See {IERC777-name}."
      },
      "operatorBurn(address,uint256,bytes,bytes)": {
        "details": "See {IERC777-operatorBurn}. Emits {Burned} and {IERC20-Transfer} events."
      },
      "operatorSend(address,address,uint256,bytes,bytes)": {
        "details": "See {IERC777-operatorSend}. Emits {Sent} and {IERC20-Transfer} events."
      },
      "revokeOperator(address)": {
        "details": "See {IERC777-revokeOperator}."
      },
      "send(address,uint256,bytes)": {
        "details": "See {IERC777-send}. Also emits a {IERC20-Transfer} event for ERC20 compatibility."
      },
      "symbol()": {
        "details": "See {IERC777-symbol}."
      },
      "totalSupply()": {
        "details": "See {IERC777-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract. Also emits a {Sent} event."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators). Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
},{}],4:[function(require,module,exports){
"use strict";

var _abi = _interopRequireDefault(require("./abi.json"));

var _MyToken = _interopRequireDefault(require("./build/contracts/MyToken.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addresses = require('./addresses.json');

module.exports = {
  contracts: {
    OtherToken: _abi.default,
    MyToken: _MyToken.default.abi
  },
  addresses: {
    otherToken: addresses.otherTokenAddress,
    myToken: addresses.myTokenAddress
  }
};

},{"./abi.json":1,"./addresses.json":2,"./build/contracts/MyToken.json":3}]},{},[4])(4)
});
