// src/utils/onStartApp.tsx
import { usePioneer } from "@coinmasters/pioneer-react";
import { WalletOption, availableChainsByWallet } from '@coinmasters/types';

export const useOnStartApp = () => {
    console.log('usePioneer:', usePioneer);
    const { onStart } = usePioneer();

    const onStartApp = async () => {
        try {
            let walletsVerbose = [];
            const { keepkeyWallet } = await import("@coinmasters/wallet-keepkey");

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

            //ShapeShift metamask wallet
            // const { metamaskWallet } = await import("@coinmasters/wallet-metamask");
            // const walletMetaMask = {
            //   type: WalletOption.METAMASK,
            //   icon: "https://pioneers.dev/coins/metamask.png",
            //   chains: availableChainsByWallet[WalletOption.METAMASK],
            //   wallet: metamaskWallet,
            //   status: "offline",
            //   isConnected: false,
            // };
            // walletsVerbose.push(walletMetaMask);

            const { evmWallet } = await import("@coinmasters/wallet-evm-extensions");
            const walletMetamask = {
                type: "METAMASK", // TODO
                icon: "https://pioneers.dev/coins/evm.png",
                chains: availableChainsByWallet[WalletOption.METAMASK], // TODO
                wallet: evmWallet,
                status: "offline",
                isConnected: false,
            };
            walletsVerbose.push(walletMetamask);

            // const walletKeplr = {
            //   type: WalletOption.KEPLR,
            //   icon: "https://pioneers.dev/coins/keplr.png",
            //   chains: availableChainsByWallet[WalletOption.KEPLR],
            //   wallet: keplrWallet,
            //   status: "offline",
            //   isConnected: false,
            // };
            // walletsVerbose.push(walletKeplr);
            // const walletKeystore = {
            //   type: WalletOption.KEYSTORE,
            //   icon: "https://pioneers.dev/coins/keystore.png",
            //   chains: availableChainsByWallet[WalletOption.KEYSTORE],
            //   wallet: keystoreWallet,
            //   status: "offline",
            //   isConnected: false,
            // };
            // walletsVerbose.push(walletKeystore);
            // const walletLedger = {
            //   type: WalletOption.LEDGER,
            //   icon: "https://pioneers.dev/coins/ledger.png",
            //   chains: availableChainsByWallet[WalletOption.LEDGER],
            //   wallet: ledgerWallet,
            //   status: "offline",
            //   isConnected: false,
            // };
            // walletsVerbose.push(walletLedger);
            // const walletOKX = {
            //   type: WalletOption.OKX,
            //   icon: "https://pioneers.dev/coins/okx.png",
            //   chains: availableChainsByWallet[WalletOption.OKX],
            //   wallet: okxWallet,
            //   status: "offline",
            //   isConnected: false,
            // };
            // walletsVerbose.push(walletOKX);
            // const walletTrezor = {
            //   type: WalletOption.TREZOR,
            //   icon: "https://pioneers.dev/coins/trezor.png",
            //   chains: availableChainsByWallet[WalletOption.TREZOR],
            //   wallet: trezorWallet,
            //   status: "offline",
            //   isConnected: false,
            // };
            // walletsVerbose.push(walletTrezor);

            const { walletconnectWallet } = await import("@coinmasters/wallet-wc");
            const walletWalletConnect = {
                type: WalletOption.WALLETCONNECT,
                icon: "https://pioneers.dev/coins/walletconnect.png",
                chains: availableChainsByWallet[WalletOption.WALLETCONNECT],
                wallet: walletconnectWallet,
                status: "offline",
                isConnected: false,
            };
            walletsVerbose.push(walletWalletConnect);

            // const walletXDefi = {
            //   type: WalletOption.XDEFI,
            //   icon: "https://pioneers.dev/coins/xdefi.png",
            //   chains: availableChainsByWallet[WalletOption.XDEFI],
            //   wallet: xdefiWallet,
            //   status: "offline",
            //   isConnected: false,
            // };
            // walletsVerbose.push(walletXDefi);

            walletsVerbose.push(walletKeepKey);
            onStart(walletsVerbose, pioneerSetup);
        } catch (e) {
            console.error("Failed to start app!", e);
        }
    };

    return onStartApp;
};
