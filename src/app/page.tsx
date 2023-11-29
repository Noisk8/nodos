'use client'
import Image from 'next/image'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import NavBar from './components/NavBar';
import Tarjeta from './components/Card';
import Header from './components/Header';
import CoinGecko from './components/Coingeko';
import Carreto from './components/Carreto';
import Staking from './components/Staking';
import Nodo1 from './components/Nodo';
import Nodo2 from './components/Nodo2';


export default function Home() {
  return ( <NextUIProvider>
    <NavBar />


    <main className="flex min-h-screen flex-col items-center  p-24">
    <Header parrafo="Cypherplatxs" imageAlt="esta foto" imageSrc="https://raw.githubusercontent.com/cypherplatxs/cypherplatxs.github.io/main/public/logo-cypherplatxs-unscreen.gif"/>


    <Carreto />

    <Nodo1 />
    <Nodo2  />
    <CoinGecko />
    <div className='flex flex-wrap justify-around w-full mt-20' style={{maxWidth: '800px', gap: '10px'}}>
    

   
       
        <Staking />
  
   </div>
    </main>
    </NextUIProvider>
  )
}
