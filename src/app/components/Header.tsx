'use client';

import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect } from "react";

interface HeaderProps {
  parrafo: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Header({ parrafo, imageSrc, imageAlt }: HeaderProps) {
  
 
  return (
    <div className="flex justify-center items-center flex-wrap ">
        <Link href="/">
        <h1 className="animate-pulse text-center text-4xl font-semibold leading-8 text-purple-300 pt-4 pb-10 mb-2">
        {parrafo}
      </h1>
      </Link>
      <div className="flex flex-col items-center ">
      <Link href="/">
        <Image
          isZoomed
          width={240}
          alt={imageAlt}
          className="animate-pulse object-cover"
          src={imageSrc}
        />
        </Link>
      </div>
    </div>
  );
}
