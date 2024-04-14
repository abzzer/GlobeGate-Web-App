// // pages/transfer.js
// import React, { useState } from 'react';

// export default function Transfer() {
//     const [input, setInput] = useState('');
//     const [balance, setBalance] = useState(58.40);

//     const handleInput = (num) => {
//         setInput(input + num);
//     };

//     const handleBackspace = () => {
//         setInput(input.slice(0, -1));
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//             <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md">
//                 <div className="flex items-center space-x-4">
//                     <div className="rounded-full h-12 w-12 bg-gray-200 flex items-center justify-center font-bold">G</div>
//                     <div>
//                         <h2 className="text-lg font-semibold">Funds Transferred to: Gareth</h2>
//                         <p className="text-sm text-gray-600">Available balance: ${balance.toFixed(2)}</p>
//                     </div>
//                 </div>

//                 <div className="mt-8">
//                     <div className="bg-gray-100 rounded-lg p-4 mb-4 text-right font-mono text-lg">
//                         {input || '0.00'}
//                     </div>
//                     <div className="grid grid-cols-3 gap-4">
//                         {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '←'].map((item, index) => (
//                             <button
//                                 key={index}
//                                 className="bg-gray-200 rounded-lg p-4 font-bold"
//                                 onClick={() => item === '←' ? handleBackspace() : handleInput(item.toString())}
//                             >
//                                 {item}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex justify-between mt-8">
//                     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//                         Cancel
//                     </button>
//                     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                         Confirm
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
