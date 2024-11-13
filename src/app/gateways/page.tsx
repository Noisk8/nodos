import Platohedrito from "@/app/components/Gateways/Platohedrito";
import Diogenes from "@/app/components/Gateways/Diogenes";
import Euclides from "../components/Gateways/Euclides";
import Cumbia from "../components/Gateways/Cumbia";
import Bambino from "../components/Gateways/Bambino";
import Wasi from "../components/Gateways/Wasi";

export default function Gateways() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Platohedrito />
      <Diogenes />
      <Euclides />
      <Cumbia />
      <Bambino />
      <Wasi />
    </div>
  );
}
