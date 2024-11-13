"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Shared/Header";
import CoinGecko from "./components/Shared/Coingeko";
import NavBar from "./components/Shared/NavBar";
import Staking from "./components/Staking";


export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center  p-24">
        <Header
          parrafo="Monitor de Nodos"
          imageAlt="esta foto"
          imageSrc="https://raw.githubusercontent.com/cypherplatxs/cypherplatxs.github.io/main/public/logo-cypherplatxs-unscreen.gif"
        />
        <NavBar />
        <CoinGecko />
       {/* <Staking />   */}
      </main>
    </NextUIProvider>
  );
}
