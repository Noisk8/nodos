import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from '@nextui-org/react';

interface CoinGeckoProps {
  id: string;
  description: {
    es: string;
  };
  image: string;
  marketData: {
    currentPrice: {
      usd: number;
    };
  };
}

export default function CoinGecko() {
  const [data, setData] = useState<CoinGeckoProps | null>(null);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/nym')
    .then(response => {
      setData(response.data);
    });
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <Card >
        <h1 className="text-xl pb-4">Coingeko</h1>
        <p>id: {data.id}</p>

        <p>Descripción: {data.description.es}</p>
    </Card>
  );
}
