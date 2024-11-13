import Nodo3 from "../components/Nodes/Nodo3";
import Nodo2 from "../components/Nodes/Nodo2";
import Nodo1 from "../components/Nodes/Nodo";


export default function NodosPage() {

  if (typeof window !== "undefined") {
    const height =  window.innerHeight;
  }
 

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Nodo1 />
      <Nodo2 />
      <Nodo3 />
    </div>
  );
}
