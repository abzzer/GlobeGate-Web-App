'use client'
// pages/TransferPage.tsx
import React, { useState } from 'react';
import useBalanceStore from '@/components/useBalanceStore';  // Adjust the path as necessary
import Image from 'next/image';

const TransferPage = () => {
    const { balance, addTransaction } = useBalanceStore();
    const [amount, setAmount] = useState(0);

    const handleTransfer = () => {
        if (amount > 0 && amount <= balance) {
            addTransaction(-amount);
            alert(`Successfully transferred €${amount} to Carl.`);
            setAmount(0);  // Reset amount after transfer
        } else {
            alert('Invalid amount.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white flex flex-col items-center py-10">
            <div className="bg-white text-black rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow">
                        <Image src="/images/team-member-04.jpg" alt="Carl" width={96} height={96} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Carl</h2>
                        <p>@carl</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Available Balance: €{balance.toFixed(2)}</h3>
                </div>
                <div className="mt-6">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value)))}
                        className="input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        placeholder="Enter amount to transfer"
                    />
                    <button
                        onClick={handleTransfer}
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Transfer to Carl
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransferPage;
