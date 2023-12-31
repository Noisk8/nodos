import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@nextui-org/react";

interface Nodo1Props {
  mixId: number;
  location: {
    two_letter_iso_country_code: string;
    three_letter_iso_country_code: string;
    country_name: string;
  };
  status: string;
  pledge_amount: {
    denom: string;
    amount: string;
  };
  total_delegation: {
    denom: string;
    amount: string;
  };
  owner: string;
  layer: number;
  mix_node: {
    host: string;
    mix_port: number;
    verloc_port: number;
    http_api_port: number;
    sphinx_key: string;
    identity_key: string;
    version: string;
  };
  stake_saturation: number;
  uncapped_saturation: number;
  avg_uptime: number;
  node_performance: {
    most_recent: string;
    last_hour: string;
    last_24h: string;
  };
  estimated_operator_apy: number;
  estimated_delegators_apy: number;
  operating_cost: {
    denom: string;
    amount: string;
  };
  profit_margin_percent: string;
}

export default function Nodo1() {
  const [data, setData] = useState<Nodo1Props | null>(null);

  useEffect(() => {
    axios
      .get("https://explorer.nymtech.net/api/v1/mix-node/915")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  if (!data) {
    return <div className="animate-pulse">🕸️</div>;
  }

  return (
    <Card >
        <div className="max-w-1xl mx-auto mt-8 " style={{boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)"}}>
      <div className="shadow-lg rounded-lg overflow-hidden text-purple-300 bg-gray-900 mt-8 mr-4">
  <h1 className="text-xl pb-4 bg-gray-800 px-4 py-2 font-bold text-center">
    Nodo Cypherplatxs 🇦🇷
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    <div >
      <h3 className="text-xl">Mix ID: </h3>
      <p className="">915</p>{" "}
    </div>
    <div>
      <h3 className="text-xl">Host: </h3>{" "}
      <p className=""> {data.mix_node.host}</p>{" "}
    </div>

    <div>
      {" "}
      <h3 className="text-xl">Version: </h3>{" "}
      <p className=""> {data.mix_node.version}</p>
    </div>
    <div>
      <h3 className="text-xl">Country: </h3>{" "}
      <p className=""> {data.location.country_name}</p>{" "}
    </div>
    <div>
      <h3 className="text-xl">Status:</h3>{" "}
      <p className=""> {data.status}</p>
    </div>
    <a href="https://mixnet.explorers.guru/mixnode/4CXwTxgoDoeUcrX4HYH9cFTegRNUTCij9eLugaymiyGf"  target="_blank"   className="bg-gray-800 hover:bg-purple-300 text-white font-bold py-4 px-4 rounded">
  Ver en Explorer
</a>

  </div>
</div>
</div>
    </Card>
  );
}
