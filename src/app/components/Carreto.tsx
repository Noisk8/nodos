import { useEffect } from 'react';
import {Link} from "@nextui-org/react";



export default function Carreto() {
  return (
    <div className="bg-gray-900 p-6 mt-10 rounded-lg shadow-xl text-white max-w-md mx-auto" style={{boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)"}}>
    <div className="flex justify-center items-center">
      <div className="text-neon">
        <p>🌐  Cypherplatxs es un programa de{' '}
        
          <a href="#" className="text-fuchsia-500 hover:underline">Platohedro </a>
        
          que se encarga del área de investigación y desarrollo de tecnología web 3 y blockchain.</p>
<br  />
         <p> 🧑‍💻  Administramos dos nodos de nym los cuales son de  <a href="#" className="text-fuchsia-500 hover:underline">DAOariwas</a>, de los cuales destinamos un 10% de la operación en casusas sociales en Latinoamerica.</p>
         <br  />
         <p>🫂 Con el staking en nuestro nodo estas apoyando a personas de comunidades de las difrentes periferias de este hermoso continente</p>
      </div>
    </div>
  </div>
  );
}
