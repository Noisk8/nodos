import React from "react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";


export default function App() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none   max-w-[610px] mt-20 bg-gray-900 p-5 rounded-lg shadow-xl text-purple-300"
      style={{boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)"}}
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="/3.jpeg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h1 className="text-7xl font-semibold text-foreground/90 text-purple-300">Staking</h1>
              
                <a href="#" target="_blank"> <h1 className="text-3xl  mt-8 mb-4">Cómo hacer Staking?</h1></a>
                <a href="/nodos" target="_blank"><h2 className="text-2xl text-foreground/80 text-purple-300 mt-4 ">🌐 PLATOHEDRO</h2></a>
                <a href="#" target="_blank"><h2 className="text-2xl text-foreground/80 text-purple-300 mt-4">🌐 CYPHERPLATXS</h2></a>
              </div>
         
            </div>

        
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
