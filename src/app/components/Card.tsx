import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  titulo: string;
  hyperlink:string;
}

export default function Tarjeta({ title, subtitle, imageSrc, imageAlt,titulo, hyperlink }: CardProps) {
  return (
    <Card className="py-4 bg-gray-900 p-5 rounded-lg shadow-xl text-purple-300 flex flex-wrap " style={{boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)"}}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col ">
      <h4 className="font-bold text-large">{titulo}</h4>
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{subtitle}</small>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
       <a href={hyperlink} target="_blank" >
         <Image
           alt={imageAlt}
           className="object-cover rounded-xl"
           src={imageSrc}
           width={270}
         />
       </a>
     </CardBody>
    </Card>
  );
}
