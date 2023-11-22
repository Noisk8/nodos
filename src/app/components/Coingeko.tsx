import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from '@nextui-org/react';

interface CoinGeckoProps {
 

marketCapRank: number;

    currentPrice: {
      usd: number;
    };
  };


export default function CoinGecko() {
  const [data, setData] = useState<CoinGeckoProps | null>(null);

  const apiPrice = async()=>{
    
    
    const result = await axios.get('https://api.coingecko.com/api/v3/coins/nym')
    setData({
      marketCapRank: result.data.market_cap_rank,
      currentPrice: {usd: result.data.market_data.current_price.usd}
    });

    
  }

  useEffect(() => {
     apiPrice();
    /* axios.get('https://api.coingecko.com/api/v3/coins/nym')
    .then(response => {
      setData(response.data);
      
    });*/
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
   <>
   <div className="bg-gray-900 p-5 rounded-lg shadow-xl text-purple-300">
        <h1 className="text-3xl font-bold pb-4 border-b border-purple-700">Coingeko</h1>
        <h2 className="text-2xl font-semibold pt-4">1 Nym = {data.currentPrice.usd} USD</h2>
        <p className="text-lg pt-2">Rango de Capitalización de Mercado: {data.marketCapRank}</p>
   </div>
        </>
  );
  }

