"use client";
import { Select, Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import * as React from 'react';
import { usePioneer } from "@coinmasters/pioneer-react"
import { availableChainsByWallet, WalletOption } from '@coinmasters/types';
import { useState, useEffect } from 'react';
//components
import {
  Pioneer,
  Basic,
  Portfolio,
  Transfer,
  Assets,
  Asset,
  Amount,
  Quote,
  Quotes,
  Swap,
  Track,
  SignTransaction
} from '@coinmasters/pioneer-lib';
import Image from 'next/image';

let SAMPLE_DATA: any = [
  {
    "integration": "thorswap",
    "quote": {
      "id": "3f0b8b16-bce9-4a0f-aa80-989b8767b94b",
      "meta": {
        "hasStreamingSwap": false,
        "slippagePercentage": 3,
        "sellChain": "ETH",
        "sellChainGasRate": "30",
        "buyChain": "BCH",
        "buyChainGasRate": "3",
        "priceProtectionRequired": false,
        "priceProtectionDetected": false,
        "quoteMode": "TC-TC",
        "thornodeMeta": {
          "expectedAmountOut": {
            "assetAmount": "0.27185388",
            "baseAmount": "27185388",
            "decimal": 8,
            "asset": {
              "chain": "BCH",
              "symbol": "BCH",
              "ticker": "BCH",
              "type": "Native",
              "network": "Bitcoin Cash",
              "name": "BCH",
              "decimal": 8,
              "isSynth": false
            },
            "amount": {
              "assetAmount": "0.27185388",
              "baseAmount": "27185388",
              "decimal": 8
            }
          },
          "expectedAmountOutStreaming": {
            "assetAmount": "0.27185388",
            "baseAmount": "27185388",
            "decimal": 8,
            "asset": {
              "chain": "BCH",
              "symbol": "BCH",
              "ticker": "BCH",
              "type": "Native",
              "network": "Bitcoin Cash",
              "name": "BCH",
              "decimal": 8,
              "isSynth": false
            },
            "amount": {
              "assetAmount": "0.27185388",
              "baseAmount": "27185388",
              "decimal": 8
            }
          },
          "expiry": 1711329602,
          "fees": {
            "affiliate": {
              "assetAmount": "0.00082421",
              "baseAmount": "82421",
              "decimal": 8
            },
            "asset": {
              "chain": "BCH",
              "symbol": "BCH",
              "ticker": "BCH",
              "type": "Native",
              "network": "Bitcoin Cash",
              "name": "BCH",
              "decimal": 8,
              "isSynth": false
            },
            "outbound": {
              "assetAmount": "0.00204851",
              "baseAmount": "204851",
              "decimal": 8
            },
            "liquidity": {
              "assetAmount": "0.00000425",
              "baseAmount": "425",
              "decimal": 8
            },
            "slippageBps": 0,
            "total": {
              "assetAmount": "0.00287697",
              "baseAmount": "287697",
              "decimal": 8
            },
            "totalBps": 103
          },
          "inboundAddress": "0x65c2036a5606179f9eb52ff97ff474e5d24891e5",
          "inboundConfirmationBlocks": 2,
          "inboundConfirmationSeconds": 24,
          "maxStreamingQuantity": 1,
          "memo": "=:BCH.BCH:bitcoincash:qzfzukmpry8y4mdp6xz7cy65eagtwhajzvj749257p:0/20/1:t:30",
          "notes": "Base Asset: Send the inbound_address the asset with the memo encoded in hex in the data field. Tokens: First approve router to spend tokens from user: asset.approve(router, amount). Then call router.depositWithExpiry(inbound_address, asset, amount, memo, expiry). Asset is the token contract address. Amount should be in native asset decimals (eg 1e18 for most tokens). Do not send to or from contract addresses.",
          "outboundDelayBlocks": 0,
          "outboundDelaySeconds": 0,
          "recommendedMinAmountIn": "3375029",
          "router": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146",
          "slippageBps": 0,
          "streamingSlippageBps": 0,
          "streamingSwapBlocks": 0,
          "streamingSwapSeconds": 0,
          "totalSwapSeconds": 24,
          "warning": "Do not cache this response. Do not send funds after the expiry."
        },
        "recommendedSlippage": 3,
        "warnings": [
          {
            "warningCode": "1003",
            "warningMessage": "Swap size is small. No limit is set for this swap to avoid partial refunds."
          }
        ]
      },
      "amountOut": "0.27185388",
      "txs": {
        "from": "0x141D9959cAe3853b035000490C03991eB70Fc4aC",
        "to": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146",
        "value": "0x8aa8f87dae4800",
        "data": "0x44bc937b00000000000000000000000065c2036a5606179f9eb52ff97ff474e5d24891e50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008aa8f87dae480000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000006600dbcf00000000000000000000000000000000000000000000000000000000000000403d3a633a626974636f696e636173683a717a667a756b6d7072793879346d647036787a3763793635656167747768616a7a766a373439323537703a3a743a3330",
        "gas": "0xad1c",
        "gasPrice": 13
      },
      "complete": true,
      "inboundAddress": "0x65c2036a5606179f9eb52ff97ff474e5d24891e5",
      "timeEstimates": {
        "inboundMs": 24000,
        "outboundMs": 0,
        "streamingMs": 0,
        "swapMs": 6000
      },
      "route": {
        "path": "ETH.ETH -> BCH.BCH",
        "providers": [
          "THORCHAIN"
        ],
        "subProviders": [
          "THORCHAIN"
        ],
        "swaps": {
          "THORCHAIN": [
            [
              {
                "from": "ETH.ETH",
                "to": "BCH.BCH",
                "parts": [
                  {
                    "provider": "THORCHAIN",
                    "percentage": 100
                  }
                ]
              }
            ]
          ]
        },
        "expectedOutput": "0.27185388",
        "expectedOutputMaxSlippage": "0.26393580582524271845",
        "expectedOutputUSD": "131.3863423488821",
        "expectedOutputMaxSlippageUSD": "127.55955567852631",
        "transaction": {
          "from": "0x141D9959cAe3853b035000490C03991eB70Fc4aC",
          "to": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146",
          "value": "0x8aa8f87dae4800",
          "data": "0x44bc937b00000000000000000000000065c2036a5606179f9eb52ff97ff474e5d24891e50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008aa8f87dae480000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000006600dbcf00000000000000000000000000000000000000000000000000000000000000403d3a633a626974636f696e636173683a717a667a756b6d7072793879346d647036787a3763793635656167747768616a7a766a373439323537703a3a743a3330",
          "gas": "0xad1c",
          "gasPrice": 13
        },
        "optimal": true,
        "complete": true,
        "fees": {
          "THOR": [
            {
              "type": "inbound",
              "asset": "ETH.ETH",
              "networkFee": 0.000581672,
              "networkFeeUSD": 1.9942915356,
              "affiliateFee": 0,
              "affiliateFeeUSD": 0,
              "totalFee": 0.000581672,
              "totalFeeUSD": 1.9942915356,
              "isOutOfPocket": true
            },
            {
              "type": "outbound",
              "asset": "BCH.BCH",
              "networkFee": 0.00204691,
              "networkFeeUSD": 1.0004464251093113,
              "affiliateFee": 0.0008343140296563985,
              "affiliateFeeUSD": 0.40322201296855115,
              "isOutOfPocket": false,
              "slipFee": 0.00000425,
              "slipFeeUSD": 0.00205401502815685,
              "totalFee": 0.0028854740296563983,
              "totalFeeUSD": 1.4057224531060193
            }
          ]
        },
        "meta": {
          "hasStreamingSwap": false,
          "slippagePercentage": 3,
          "sellChain": "ETH",
          "sellChainGasRate": "30",
          "buyChain": "BCH",
          "buyChainGasRate": "3",
          "priceProtectionRequired": false,
          "priceProtectionDetected": false,
          "quoteMode": "TC-TC",
          "thornodeMeta": {
            "expectedAmountOut": {
              "assetAmount": "0.27185388",
              "baseAmount": "27185388",
              "decimal": 8,
              "asset": {
                "chain": "BCH",
                "symbol": "BCH",
                "ticker": "BCH",
                "type": "Native",
                "network": "Bitcoin Cash",
                "name": "BCH",
                "decimal": 8,
                "isSynth": false
              },
              "amount": {
                "assetAmount": "0.27185388",
                "baseAmount": "27185388",
                "decimal": 8
              }
            },
            "expectedAmountOutStreaming": {
              "assetAmount": "0.27185388",
              "baseAmount": "27185388",
              "decimal": 8,
              "asset": {
                "chain": "BCH",
                "symbol": "BCH",
                "ticker": "BCH",
                "type": "Native",
                "network": "Bitcoin Cash",
                "name": "BCH",
                "decimal": 8,
                "isSynth": false
              },
              "amount": {
                "assetAmount": "0.27185388",
                "baseAmount": "27185388",
                "decimal": 8
              }
            },
            "expiry": 1711329602,
            "fees": {
              "affiliate": {
                "assetAmount": "0.00082421",
                "baseAmount": "82421",
                "decimal": 8
              },
              "asset": {
                "chain": "BCH",
                "symbol": "BCH",
                "ticker": "BCH",
                "type": "Native",
                "network": "Bitcoin Cash",
                "name": "BCH",
                "decimal": 8,
                "isSynth": false
              },
              "outbound": {
                "assetAmount": "0.00204851",
                "baseAmount": "204851",
                "decimal": 8
              },
              "liquidity": {
                "assetAmount": "0.00000425",
                "baseAmount": "425",
                "decimal": 8
              },
              "slippageBps": 0,
              "total": {
                "assetAmount": "0.00287697",
                "baseAmount": "287697",
                "decimal": 8
              },
              "totalBps": 103
            },
            "inboundAddress": "0x65c2036a5606179f9eb52ff97ff474e5d24891e5",
            "inboundConfirmationBlocks": 2,
            "inboundConfirmationSeconds": 24,
            "maxStreamingQuantity": 1,
            "memo": "=:BCH.BCH:bitcoincash:qzfzukmpry8y4mdp6xz7cy65eagtwhajzvj749257p:0/20/1:t:30",
            "notes": "Base Asset: Send the inbound_address the asset with the memo encoded in hex in the data field. Tokens: First approve router to spend tokens from user: asset.approve(router, amount). Then call router.depositWithExpiry(inbound_address, asset, amount, memo, expiry). Asset is the token contract address. Amount should be in native asset decimals (eg 1e18 for most tokens). Do not send to or from contract addresses.",
            "outboundDelayBlocks": 0,
            "outboundDelaySeconds": 0,
            "recommendedMinAmountIn": "3375029",
            "router": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146",
            "slippageBps": 0,
            "streamingSlippageBps": 0,
            "streamingSwapBlocks": 0,
            "streamingSwapSeconds": 0,
            "totalSwapSeconds": 24,
            "warning": "Do not cache this response. Do not send funds after the expiry."
          },
          "recommendedSlippage": 3,
          "warnings": [
            {
              "warningCode": "1003",
              "warningMessage": "Swap size is small. No limit is set for this swap to avoid partial refunds."
            }
          ]
        },
        "inboundAddress": "0x65c2036a5606179f9eb52ff97ff474e5d24891e5",
        "targetAddress": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146",
        "estimatedTime": 24,
        "calldata": {
          "depositWithExpiry": "0.039029332",
          "vault": "0x65c2036a5606179f9eb52ff97ff474e5d24891e5",
          "asset": "ETH.ETH",
          "amount": "39029332000000000",
          "memo": "=:c:bitcoincash:qzfzukmpry8y4mdp6xz7cy65eagtwhajzvj749257p::t:30",
          "memoStreamingSwap": "",
          "expiration": "1711332303",
          "fromAsset": "ETH.ETH",
          "amountIn": "39029332000000000"
        },
        "contract": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146",
        "contractMethod": "depositWithExpiry",
        "approvalTarget": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146",
        "approvalToken": null,
        "evmTransactionDetails": {
          "contractAddress": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146",
          "contractMethod": "depositWithExpiry",
          "contractParams": [
            "0.039029332",
            "0x65c2036a5606179f9eb52ff97ff474e5d24891e5",
            "ETH.ETH",
            "39029332000000000",
            "=:c:bitcoincash:qzfzukmpry8y4mdp6xz7cy65eagtwhajzvj749257p::t:30",
            "1711332303"
          ],
          "contractParamsStreaming": [],
          "contractParamsNames": [
            "depositWithExpiry",
            "vault",
            "asset",
            "amount",
            "memo",
            "expiration"
          ],
          "approvalToken": null,
          "approvalSpender": "0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146"
        },
        "timeEstimates": {
          "inboundMs": 24000,
          "outboundMs": 0,
          "streamingMs": 0,
          "swapMs": 6000
        },
        "index": 0
      },
      "sellAsset": "eip155:1/slip44:60",
      "sellAmount": "0.039029332",
      "buyAsset": "bip122:000000000000000000651ef99cb9fcbe/slip44:145",
      "buyAmount": "0.27185388",
      "proTokenEarned": 13.415044907044,
      "proTokenEarnedUsd": 13.415044907044,
      "sellAssetValueUsd": 134.15044907044,
      "buyAssetValueUsd": 132.025836822
    }
  }
]

let SAMPLE_SWAP_TXID = '793156d36e0ea7789b6f048c6e6bda8a9ef09602aa2b8f571319cccfda1bec23'

export default function App() {
  const { onStart, state } = usePioneer();
  const { api, app, assets, context } = state;
  const [intent, setIntent] = useState('basic');
  const [tabIndex, setTabIndex] = useState(1);
  const [txHash, setTxHash] = useState(SAMPLE_SWAP_TXID);
  const [selectedAsset, setSelectedAsset] = useState({ });

  let onStartApp = async function(){
    try{
      let walletsVerbose = []
      const { keepkeyWallet } = await import("@coinmasters/wallet-keepkey");
      //console.log('keepkeyWallet: ', keepkeyWallet);

      const pioneerSetup: any = {
        appName: "Pioneer Template",
        appIcon: "https://pioneers.dev/coins/pioneerMan.png",
      };
      const walletKeepKey = {
        type: WalletOption.KEEPKEY,
        icon: "https://pioneers.dev/coins/keepkey.png",
        chains: availableChainsByWallet[WalletOption.KEEPKEY],
        wallet: keepkeyWallet,
        status: "offline",
        isConnected: false,
      };
      //console.log('walletKeepKey: ', walletKeepKey);
      walletsVerbose.push(walletKeepKey);
      //console.log('walletsVerbose: ', walletsVerbose);
      onStart(walletsVerbose, pioneerSetup);
    }catch(e){
      console.error("Failed to start app!")
    }
  }
  useEffect(() => {
    onStartApp();
  }, []);

  useEffect(() => {
    if(app && app.assetContext) setSelectedAsset(app.assetContext)
  }, [app, app?.assetContext]);

  const handleTabsChange = (index: any) => {
    setTabIndex(index);
  };

  const onClose = () => {
    //console.log("onClose")
  };

  const onSelect = (asset: any) => {
    //console.log("onSelect: ", asset)
  }

  const onAcceptSign = (tx: any) => {
    //console.log("onAcceptSign: ", tx)
  }

  const setInputAmount = (amount: any) => {
    console.log("setInputAmount: ", amount)
  }

  // Function to determine which component to render based on intent
  const renderComponent = () => {
    // Your switch case logic here, similar to the original
    switch (intent) {
      case 'basic':
        return <Basic usePioneer={usePioneer}/>;
        break;
      case 'asset':
        return <Asset usePioneer={usePioneer} onClose={onClose} onSelect={onSelect} asset={selectedAsset}/>;
        break;
      case 'amount':
        return <Amount usePioneer={usePioneer} onClose={onClose} asset={selectedAsset} setInputAmount={setInputAmount}/>;
        break;
      case 'assets':
        return <Assets usePioneer={usePioneer} onClose={onClose} onSelect={onSelect} filters={{onlyOwned: false, noTokens: false, hasPubkey:true }}/>;
        break;
      case 'transfer':
        return <Transfer usePioneer={usePioneer} />;
        break;
      case 'sign':
        return <SignTransaction usePioneer={usePioneer} setTxHash={setTxHash} onClose={onClose} quote={SAMPLE_DATA[0]}/>;
        break;
      case 'portfolio':
        return <Portfolio usePioneer={usePioneer} />;
        break;
      case 'quote':
        return <Quote quote={SAMPLE_DATA[0]} onAcceptSign={onAcceptSign}/>;
        break;
      case 'quotes':
        return <Quotes onClose={onClose} onSelectQuote={onSelect} Quotes={SAMPLE_DATA}/>;
        break;
      case 'track':
        return <Track txHash={SAMPLE_SWAP_TXID}/>;
      case 'swap':
        return <Swap usePioneer={usePioneer}/>;
        break;
      // Handle other cases as needed
      default:
        return <div>No valid intent selected</div>;
    }
  };

  const handleIntentChange = (event: any) => {
    setIntent(event.target.value);
  };


  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center w-full px-10 py-5 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          {/* Avatar logo */}
          <Image src="/png/pioneerMan.png" alt="Logo" width={180} height={150} className="rounded-full" />
          {/* Website title */}
          <span className="text-xl font-bold">Pioneer SDK</span>
          <Select onChange={handleIntentChange} placeholder="Select Component" width="auto">
            <option value="basic">Basic</option>
            <option value="transfer">Transfer</option>
            <option value="quote">Quote</option>
            <option value="asset">Asset</option>
            <option value="amount">amount</option>
            <option value="sign">sign</option>
            <option value="assets">Assets</option>
            <option value="track">Track</option>
            <option value="swap">Swap</option>
          </Select>
        </div>
        <Pioneer usePioneer={usePioneer}/>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderComponent()}
      </main>

      {/* Footer */}
      <footer className="w-full px-10 py-5 bg-gray-200 dark:bg-gray-900 text-center">
        Powered by <a href="https://pioneers.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500">Pioneers</a>
      </footer>
    </>
  );
}
