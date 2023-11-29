import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from '@nextui-org/react';

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
        axios.get('https://explorer.nymtech.net/api/v1/mix-node/915')
            .then(response => {
                setData(response.data);
            });
    }, []);

    if (!data) {
        return <div className="animate-pulse">🕸️</div>;
    }

    return (
        <Card >
            <div className="shadow-lg rounded-lg overflow-hidden">
                <h1 className="text-xl pb-4 bg-gray-100 px-4 py-2 font-bold">Nodo Cypherplatxs</h1>
                <div className="p-8 space-y-2 flex flex-wrap justify-between">
                   
                   
                    <div><h3 className="text-xl">Mix ID:  </h3><p className=""> 915</p>     </div>
                    <div><h3 className="text-xl">Host: </h3> <p className=""> {data.mix_node.host}</p> </div>
                    <div> <h3 className="text-xl">Layer: </h3>   <p className="">{data.layer}</p></div>
                  <div> <h3 className="text-xl">Version: </h3> <p className=""> {data.mix_node.version}</p></div>
                    <div> <h3 className="text-xl">Sphinx Key:</h3>  <p className="b"> {data.mix_node.sphinx_key}</p></div>
                    <div ><h3 className="text-xl">Country: </h3> <p className="">  {data.location.country_name}</p> </div>
                   
                    <div><h3 className="text-xl">Status:</h3> <p className=""> {data.status}</p></div>
               
                
                
                    
                    
                    
                    
                   
                    
                    
                  
                 
                </div>
            </div>
        </Card>
    );
}
