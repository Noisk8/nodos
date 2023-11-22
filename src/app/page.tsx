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
import Carreto from './components/Carreto';
import Tarjetas from './components/Nodxs';

export default function Home() {
  return ( <NextUIProvider>
    <NavBar />
<Header parrafo="Cypherplatxs" imageAlt="esta foto" imageSrc="https://raw.githubusercontent.com/cypherplatxs/cypherplatxs.github.io/main/public/logo-cypherplatxs-unscreen.gif"/>

<Carreto />

    <main className="flex min-h-screen flex-col items-center  p-24">
    <CoinGecko />

    <div className='flex flex-wrap justify-around w-full mt-20' style={{maxWidth: '800px', gap: '10px'}}>
        <Tarjeta imageSrc='https://raw.githubusercontent.com/cypherplatxs/Achura/main/frontend/public/achura.jpg'
        imageAlt='perrr'
        title='Peroo'
        subtitle='perooo'
        titulo='NODO CYPHERPLATXS'
        hyperlink='https://www.southpark.lat/episodios/welysd/south-park-el-secuestro-infantil-no-tiene-gracia-temporada-6-ep-11'
        />

   
        <Tarjeta imageSrc='https://raw.githubusercontent.com/cypherplatxs/Achura/main/frontend/public/achura.jpg'
        imageAlt='perrr'
        title='Peroo'
        subtitle='perooo'
        titulo='NODO PLATOHEDRO'
        hyperlink='https://www.southpark.lat/episodios/welysd/south-park-el-secuestro-infantil-no-tiene-gracia-temporada-6-ep-11'
        
        />
        
    
   </div>
    </main>
    </NextUIProvider>
  )
}
