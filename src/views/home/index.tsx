// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { notify } from 'utils/notifications';


export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const TEST_PLATFORM_FEE_AND_ACCOUNTS = {
  referralAccount: 'HVBPohWWZjPTDo11zqwdC4Ft7qWZCr6dzc89XhZf9n5y',
  feeBps: 100,
};
  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])
  useEffect(() => {
    window.Jupiter.init({
    displayMode: "integrated",
    integratedTargetId: "integrated-terminal",

    platformFeeAndAccounts: TEST_PLATFORM_FEE_AND_ACCOUNTS,
    endpoint: "https://magical-green-waterfall.solana-mainnet.quiknode.pro/6f16d775c4d9d34ad73608fe18606facb657ff56/",
  });
}, []);

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
          <div id="integrated-terminal">


          </div>

        
  );
};
