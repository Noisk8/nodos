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
                <div className="p-4 space-y-2 flex flex-wrap justify-between">
                   
                   
                    <div><h3 className="text-xl">Mix ID:  </h3><p className="border-b"> 915</p>     </div>
                    <div><h3 className="text-xl">Host: </h3> <p className="border-b"> {data.mix_node.host}</p> </div>
                    
                    <p className="border-b">Layer: {data.layer}</p>
                    <p className="border-b">Version: {data.mix_node.version}</p>
                    <p className="border-b">Sphinx Key: {data.mix_node.sphinx_key}</p>
                    <p className="border-b">Country Name: {data.location.country_name}</p>
               
                    <p className="border-b">Status: {data.status}</p>
                   
                    <p className="border-b">Total Delegation: {data.total_delegation.amount} {data.total_delegation.denom}</p>
                    <p className="border-b">Owner: {data.owner}</p>
                    <p className="border-b">Stake Saturation: {data.stake_saturation}</p>
                    <p className="border-b">Uncapped Saturation: {data.uncapped_saturation}</p>
                    <p className="border-b">Average Uptime: {data.avg_uptime}</p>
                    <p className="border-b">Node Performance: {data.node_performance.most_recent}/{data.node_performance.last_hour}/{data.node_performance.last_24h}</p>
                    <p className="border-b">Estimated Operator APY: {data.estimated_operator_apy}</p>
                    <p className="border-b">Estimated Delegators APY: {data.estimated_delegators_apy}</p>
                    <p className="border-b">Operating Cost: {data.operating_cost.amount} {data.operating_cost.denom}</p>
                    <p className="border-b">Profit Margin Percent: {data.profit_margin_percent}</p>
                 
                </div>
            </div>
        </Card>
    );
}
