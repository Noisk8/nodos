'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Avatar } from "@nextui-org/react";
import Image from "next/image";
import SkeletonCoinGeko from "../Skeletons/SKeletonCoingeko";

// Definición de la interfaz para las propiedades del componente CoinGecko
interface CoinGeckoProps {
  marketCapRank: number;

  currentPrice: {
    usd: number;
  };

  image: string;

  description: string;
}

// Componente CoinGecko que muestra información de la criptomoneda Nym
export default function CoinGecko() {
  // Estado para almacenar los datos de la criptomoneda
  const [data, setData] = useState<CoinGeckoProps | null>(null);

  // Función asíncrona para obtener el precio y el rango de capitalización de mercado de la criptomoneda
  const apiPrice = async () => {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/nym"
    );
    // Establecer los datos obtenidos en el estado
    setData({
      marketCapRank: result.data.market_cap_rank,
      currentPrice: { usd: result.data.market_data.current_price.usd },
      image: result.data.image.large,
      description: result.data.description.en,
    });
  };

  // Efecto para llamar a la función apiPrice cuando el componente se monta
  useEffect(() => {
    apiPrice();
  }, []);

  // Renderizar un mensaje de carga si los datos aún no están disponibles
  if (!data) {
    return <SkeletonCoinGeko  />;
  }

  // Renderizar la interfaz de usuario con los datos de la criptomoneda
  return (
    <div className="bg-gray-900 p-5 rounded-lg shadow-xl text-white flex flex-col items-center mt-16" style={{boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)"}}>
      <Image width="80" height="80" src={data.image} alt="Nym" className="w-24 h-24 rounded-full border-2 mb-4" />
      <div className="text-center">
      <h2 className="text-2xl font-semibold">
        1 Nym = {data.currentPrice.usd} USD
      </h2>
   
      </div>
      <div className="flex justify-center w-full pt-8">
      {/* <Avatar
        src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
      /> */}
      </div>
    </div>
    
  );
}
