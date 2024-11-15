'use client';

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from '@nextui-org/react';
import dynamic from "next/dynamic";
import SkeletonLoader from "../Skeletons/SkeletonLoader";

const DynamicMap = dynamic(() => import("../Mapa/Map"), { ssr: false });


interface Nodo1Props {
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

const Nodo1: React.FC = () => {
    const [data, setData] = useState<Nodo1Props | null>(null);

    useEffect(() => {
        axios.get('https://explorer.nymtech.net/api/v1/mix-node/915')
            .then(response => {
                setData(response.data);
            });
    }, []);

    if (!data) {
        return <SkeletonLoader />;
      }

    return (
        <Card>
            <div className="max-w-1xl mx-auto mt-8" style={{ boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)" }}>
                <div className="shadow-lg rounded-lg overflow-hidden bg-gray-900 mt-8">
                    <h1 className="textoplay text-2xl pb-4 bg-gray-800 px-4 py-2 font-bold text-center">
                        Nodo Cypherplatxs 🇦🇷
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                        {[
                            { label: "Mix ID", value: data.mix_id },
                            { label: "Host", value: data.mix_node.host },
                            { label: "Version", value: data.mix_node.version },
                            { label: "Country", value: `${data.location.country_name} (${data.location.three_letter_iso_country_code})` },
                            { label: "Status", value: data.status === 'active' ? 'Active 🟢' : ' Inactive 🔴', className: data.status === 'active' ? 'text-green-500' : 'text-red-500' },
                            { label: "Pledge Amount", value: ( <div className="break-all"> {data.pledge_amount.amount}  </div> )},
                            { label: "Total Delegation", value: data.total_delegation.amount },
                            { label: "Stake Saturation", value: data.stake_saturation },
                            { label: "Uncapped Saturation", value: data.uncapped_saturation },
                            { label: "Average Uptime", value: data.avg_uptime },
                            { label: "Performance (Last Hour)", value: data.node_performance.last_hour },
                            { label: "Estimated Operator ", value: ( <div className="break-all">{ data.estimated_operator_apy } </div>)},
                            { label: "Estimated Delegators ", value: ( <div className="break-all">{data.estimated_delegators_apy } </div>)},
                            { label: "Operating Cost", value: data.operating_cost.amount },
                            { label: "Profit Margin Percent", value: data.profit_margin_percent },
                        ].map((item, index) => (
                            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">{item.label}:</h3>
                                <p className={item.className || ''}>{item.value}</p>
                            </div>
                        ))}
                        <div className="col-span-full text-center pb-4 pt-8">
                            <a href="https://harbourmaster.nymtech.net/mixnode/915" target="_blank" className="bg-gray-800 hover:bg-purple-300 text-white font-bold py-4 px-4 rounded">
                                Ver en Explorer
                            </a>
                        </div>
                    </div>
                    <DynamicMap latitude={data.location.latitude} longitude={data.location.longitude} />
                </div>
            </div>
        </Card>
    );
};

export default Nodo1;
