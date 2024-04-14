'use client'

import React from 'react';
import useBalanceStore from '@/components/useBalanceStore';
import BottomNavigationBar from '@/components/ui/BottomNavigationBar';

const UserPage = () => {
    const { balance, addTransaction } = useBalanceStore();


    return (
        <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-black via-black to-blue-900 text-white">
            <div className="flex flex-1 flex-col items-center justify-center px-4 py-10">
                <div className="flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gray-300"> {/* Larger profile picture */}
                    </div>
                </div>
                <div className="text-center text-3xl font-semibold mt-2">Abdel Lemamsha</div>
                <div className="text-center text-xl mt-1">@Abzzer</div>
                <div className="flex justify-center items-center mt-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-blue-500 mr-2"></div>
                    <div className="text-lg font-medium flex items-center space-x-1">
                        <span className="font-bold text-xl"></span>
                        <span className="font-bold text-3xl">€{balance.toFixed(2)}</span>
                        <span className="text-xl">EUROC</span>
                    </div>
                </div>
                <a href="/user/contacts"
                    className="px-8 py-4 bg-green-500 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out">
                    Send Money Instantly
                </a>
            </div>
            {/* Transactions panel */}
            <div className="absolute bottom-0 left-0 w-full bg-white text-black">
                <div className="p-4">
                    <h3 className="text-lg font-semibold">Recent Transactions</h3>
                    <button onClick={() => addTransaction(10)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Add €10
                    </button>
                    <div className="mt-2">
                        <p>+€{balance.toFixed(2)} EUROC - Topped Up</p>
                    </div>
                </div>
            </div>
            <BottomNavigationBar />
        </div>
    );
}

export default UserPage;
