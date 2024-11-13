import Platohedrito from "@/app/components/Gateways/Platohedrito";
import Diogenes from "@/app/components/Gateways/Diogenes";
import Euclides from "../components/Gateways/Euclides";
import Cumbia from "../components/Gateways/Cumbia";
import Bambino from "../components/Gateways/Bambino";
import Wasi from "../components/Gateways/Wasi";

export default function Gateways() {
  return (
    <div>
      <Platohedrito />
      <Diogenes />
      <Euclides />
      <Cumbia />
      <Bambino />
      <Wasi />
    </div>
  );
}
