
'use client'
import React, { useState } from 'react';
import Overview from '../../components/overview';
import { useRouter } from 'next/navigation';


export default function Home() {
  
  const [searchText, setSearchText] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [playerData, setPlayerData] = useState({});
  const router = useRouter()

  return (
    <>

      <div className="flex flex-col items-center p-3">
        <>
          <div className="flex flex-row space-x-2">
            <input 
              type="text" 
              className="py-5 px-4 rounded bg-[#25234a] text-white focus:outline-none w-80 h-12" // Set height with h-12
              placeholder="Enter Summoner Name"
              onChange={(e) => {
                setSearchText(e.target.value);
                console.log(searchText); 
              }}
            />

            <input 
              type="text" 
              className="py-2 px-4 rounded bg-[#25234a] text-white focus:outline-none w-40 h-12" // Set height with h-12
              placeholder="Tagline #"
              onChange={e => setTagLine(e.target.value)}
            />
            
            <button 
              className="py-2 px-4 rounded bg-[#25234a] text-white hover:bg-[#444087] focus:outline-none h-12" // Set height with h-12
              onClick={e => router.push(`/player/${searchText}-${tagLine}`)}
            >
              Search for player
            </button>
          </div>
        </>   
      </div>

    </>
  )
}
