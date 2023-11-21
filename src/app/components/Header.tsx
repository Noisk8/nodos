import React from "react";
import {Image} from "@nextui-org/react";


interface HeaderProps {
    parrafo : string;
    imageSrc: string;
    imageAlt: string;
}

export default function Header ({parrafo, imageSrc, imageAlt}: HeaderProps){

return (
<div className="flex justify-center items-center mt-16"> 

<h1 className="animate-pulse text-center text-4xl font-semibold leading-8 text-blue-900 pt-20 pb-10">{parrafo}</h1>

<div className="flex flex-col items-center ml-8">
  <Image
    isZoomed
    width={240}
    alt={imageAlt}
    className="object-cover rounded-xl opacity-50"
    src={imageSrc}
  />

</div>
</div>
)
}