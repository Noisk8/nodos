import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function App() {
  const defaultContent =
    ", quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="pb-20 pt-10" >
        <h1 className="text-4xl font-bold pb-10" style={{ textShadow: "2px 2px 4px #FF00FF", color: "#FF00FF" }}> 🌐 NODOS</h1>
        <Accordion>
      <AccordionItem key="1" aria-label="nodo platohedro" subtitle="Press to expand" title="🌐 nodo platohedro 🌐">
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle={
          <span>
            Press to expand <strong>key 2</strong>
          </span>
        }
        title="Accordion 2"
      >
        {defaultContent}
      </AccordionItem>
     
    </Accordion>
    </div>
  );
}
