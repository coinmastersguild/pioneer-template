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
import { useOnStartApp } from "../utils/onStart";

export default function App() {
  const onStartApp = useOnStartApp();
  const { state } = usePioneer();
  const { api, app, assets, context } = state;
  const [intent, setIntent] = useState('basic');
  const [tabIndex, setTabIndex] = useState(1);
  const [txHash, setTxHash] = useState(SAMPLE_SWAP_TXID);
  const [selectedAsset, setSelectedAsset] = useState({ });


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
      // case 'sign':
      //   return <SignTransaction usePioneer={usePioneer} setTxHash={setTxHash} onClose={onClose} quote={SAMPLE_DATA[0]}/>;
      //   break;
      case 'portfolio':
        return <Portfolio usePioneer={usePioneer} />;
        break;
      // case 'track':
      //   return <Track txHash={SAMPLE_SWAP_TXID}/>;
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
