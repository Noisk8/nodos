'use client';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from '@nextui-org/react';

interface Nodo2Props {
  mix_id: number;

  location: {
    two_letter_iso_country_code: string;
    three_letter_iso_country_code: string;
    country_name: string;
    latitude: number;
    longitude: number;
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
    amount: number;
};
  profit_margin_percent: string;
  family_id: null | string;
  blacklisted: boolean;
}
export default function Nodo3() {
    const [data, setData] = useState<Nodo2Props | null>(null);

    useEffect(() => {
        axios.get('https://explorer.nymtech.net/api/v1/mix-node/869')
            .then(response => {
                setData(response.data);
            });
    }, []);

    if (!data) {
        return <div className="animate-pulse">🕸️</div>;
    }

    return (
        <Card>
            <div className="max-w-1xl mx-auto mt-8" style={{ boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)" }}>
                <div className="shadow-lg rounded-lg overflow-hidden text-purple-300 bg-gray-900 mt-8">
                    <h1 className="text-2xl pb-4 bg-gray-800 px-4 py-2 font-bold text-center">
                        Nodo Privacy 🇨🇭
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                        <div>
                            <h3 className="text-xl font-semibold">Mix ID:</h3>
                            <p>{data.mix_id}</p>
                           
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Host:</h3>
                            <p>{data.mix_node.host}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Version:</h3>
                            <p>{data.mix_node.version}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Country:</h3>
                            <p>{data.location.country_name}</p>
                        
                            <p> {data.location.three_letter_iso_country_code}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Status:</h3>
                            <p className={data.status === 'active' ? 'text-green-500' : 'text-red-500'}>{data.status}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Pledge Amount:</h3>
                            <p>{data.pledge_amount.amount} </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Total Delegation:</h3>
                            <p>{data.total_delegation.amount} </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Stake Saturation:</h3>
                            <p>{data.stake_saturation}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Uncapped Saturation:</h3>
                            <p>{data.uncapped_saturation}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Average Uptime:</h3>
                            <p>{data.avg_uptime}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Node Performance (Most Recent):</h3>
                            <p>{data.node_performance.most_recent}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Node Performance (Last Hour):</h3>
                            <p>{data.node_performance.last_hour}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Node Performance (Last 24h):</h3>
                            <p>{data.node_performance.last_24h}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Estimated Operator APY:</h3>
                            <p>{data.estimated_operator_apy}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Estimated Delegators APY:</h3>
                            <p>{data.estimated_delegators_apy}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Operating Cost:</h3>
                            <p>{data.operating_cost.amount} </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Profit Margin Percent:</h3>
                            <p>{data.profit_margin_percent}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Blacklisted:</h3>
                            <p>{data.blacklisted ? "Yes" : "No"}</p>
                        </div>
                        <div className="col-span-full text-center pb-4 pt-8">  <a href="https://harbourmaster.nymtech.net/mixnode/915" target="_blank" className="bg-gray-800 hover:bg-purple-300 text-white font-bold py-4 px-4 rounded">
                                Ver en Explorer
                            </a></div>
                          
                        </div>
                    </div>
                </div>
            
        </Card>
    );
}
