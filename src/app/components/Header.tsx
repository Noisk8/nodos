import React from "react";
import { Image } from "@nextui-org/react";

interface HeaderProps {
  parrafo: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Header({ parrafo, imageSrc, imageAlt }: HeaderProps) {
  return (
    <div className="flex justify-center items-center flex-wrap ">
      <h1 className="animate-pulse text-center text-4xl font-semibold leading-8 text-rose-200 pt-4 pb-10 mb-2">
        {parrafo}
      </h1>

      <div className="flex flex-col items-center ">
        <Image
          isZoomed
          width={240}
          alt={imageAlt}
          className="animate-pulse object-cover"
          src={imageSrc}
        />
      </div>
    </div>
  );
}
