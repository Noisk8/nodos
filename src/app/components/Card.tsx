import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Tarjeta({ title, subtitle, imageSrc, imageAlt }: CardProps) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{subtitle}</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={imageAlt}
          className="object-cover rounded-xl"
          src={imageSrc}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
