import Nodo3 from "../components/Nodo3";
import Nodo2 from "../components/Nodo2";
import Nodo1 from "../components/Nodo";


export default function NodosPage() {

  if (typeof window !== "undefined") {
    const height =  window.innerHeight;
  }
 

  return (
    <div>
      <Nodo1 />
      <Nodo2 />
      <Nodo3 />
    </div>
  );
}
