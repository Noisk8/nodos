import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from '@nextui-org/react';

interface Nodo2Props {
    mixId: number;
    host: string;
    layer: number;
    version: string;
    sphinxKey: string;
    totalDelegation: number;
    operatingCost: number;
    countryName: string;
    latitude: number;
    longitude: number;
}

export default function Nodo2() {
    const [data, setData] = useState<Nodo2Props | null>(null);

    useEffect(() => {
        axios.get('https://explorer.nymtech.net/api/v1/mix-node/869')
            .then(response => {
                setData(response.data.mix_node);
            });
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }

    return (
        <Card >
            <h2>Información Técnica</h2>
            <p>Mix ID: {data.mixId}</p>
            <p>Host: {data.host}</p>
            <p>Layer: {data.layer}</p>
            <p>Version: {data.version}</p>
            <p>Sphinx Key: {data.sphinxKey}</p>
            <p>Country Name: {data.countryName}</p>
            <p>Latitude: {data.latitude}</p>
            <p>Longitude: {data.longitude}</p>
        </Card>
    );
}
