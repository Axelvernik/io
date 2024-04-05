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
        <h1>Ganymede Swap</h1>
        <div className='mt-6'>

          <div id="integrated-terminal">


          </div>


        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">

        </h1>
        </div>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">

        </h4>


      </div>
    </div>
  );
};
