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
   {console.log('la data',data)}
        <h1 className="text-xl pb-4">Coingeko</h1>
        <p>id: {data.marketCapRank}</p>
        <p>Usd: {data.currentPrice.usd}</p>
      
        </>
  );
  }

