'use client'
import Image from 'next/image'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import NavBar from './components/NavBar';
import Tarjeta from './components/Card';
import Header from './components/Header';
import Nodo2 from './components/Nodo2';
import Nodo1 from './components/Nodo';
import CoinGecko from './components/Coingeko';

export default function Home() {
  return ( <NextUIProvider>
    <NavBar />
<Header parrafo="Cypherplatxs" imageAlt="esta foto" imageSrc="https://raw.githubusercontent.com/cypherplatxs/cypherplatxs.github.io/main/public/logo-cypherplatxs-unscreen.gif"/>



    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <CoinGecko />
     
    <Nodo1 />
     <Tarjeta imageSrc='https://raw.githubusercontent.com/cypherplatxs/Achura/main/frontend/public/achura.jpg'
     imageAlt='perrr'
     title='Peroo'
     subtitle='perooo'
     />

     <Nodo2 />
     
     
    </main>
    </NextUIProvider>
  )
}
