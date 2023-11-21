import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from '@nextui-org/react';

interface Nodo2Props {
    mixId: number;
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
        denom: string;
        amount: string;
    };
    profit_margin_percent: string;
    family_id: null | string;
    blacklisted: boolean;
}

export default function Nodo2() {
    const [data, setData] = useState<Nodo2Props | null>(null);

    useEffect(() => {
        axios.get('https://explorer.nymtech.net/api/v1/mix-node/869')
            .then(response => {
                setData(response.data);
            });
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }

    return (
        <Card >
            <h1 className="text-xl pb-4">Nodo Platohedro</h1>
            <p>Mix ID: 869</p>
            <p>Host: {data.mix_node.host}</p>
            <p>Layer: {data.layer}</p>
            <p>Version: {data.mix_node.version}</p>
            <p>Sphinx Key: {data.mix_node.sphinx_key}</p>
            <p>Country Name: {data.location.country_name}</p>
            <p>Latitude: {data.location.latitude}</p>
            <p>Longitude: {data.location.longitude}</p>
            <p>Status: {data.status}</p>
            <p>Pledge Amount: {data.pledge_amount.amount} {data.pledge_amount.denom}</p>
            <p>Total Delegation: {data.total_delegation.amount} {data.total_delegation.denom}</p>
            <p>Owner: {data.owner}</p>
            <p>Stake Saturation: {data.stake_saturation}</p>
            <p>Uncapped Saturation: {data.uncapped_saturation}</p>
            <p>Average Uptime: {data.avg_uptime}</p>
            <p>Node Performance: {data.node_performance.most_recent}/{data.node_performance.last_hour}/{data.node_performance.last_24h}</p>
            <p>Estimated Operator APY: {data.estimated_operator_apy}</p>
            <p>Estimated Delegators APY: {data.estimated_delegators_apy}</p>
            <p>Operating Cost: {data.operating_cost.amount} {data.operating_cost.denom}</p>
            <p>Profit Margin Percent: {data.profit_margin_percent}</p>
            <p>Family ID: {data.family_id}</p>
            <p>Blacklisted: {data.blacklisted.toString()}</p>
        </Card>
    );
}
