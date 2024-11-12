"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import CoinGecko from "./components/Coingeko";
import NavBar from "./components/NavBar";


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
      </main>
    </NextUIProvider>
  );
}
