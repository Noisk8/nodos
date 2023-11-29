import { useEffect } from 'react';
import {Link} from "@nextui-org/react";



export default function Carreto() {
  return (
<div className="bg-gray-900 p-6 mt-10 rounded-lg shadow-xl text-white mx-auto max-w-2xl mb-8 md:mb-0" style={{ boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)" }}>
  <div className="text-neon">
    <p className="md:text-lg">
      🧑‍💻 Administramos dos nodos de nym los cuales son de{" "}
      <a href="#" className="text-fuchsia-500 hover:underline">
        DAOariwas
      </a>
      , destinamos un 10% de la operación en causas sociales en Latinoamérica.
    </p>
    <br />
    <p className="md:text-lg">
      🫂 Con el staking en nuestro nodo estás apoyando a personas de comunidades
      de las diferentes periferias de este hermoso continente
    </p>
  </div>
</div>
  );
}
