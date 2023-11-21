import React, { useEffect, useState } from "react";
import axios from 'axios';

interface NodoProps {
    mixId: number;
    host: string;
    layer: number;
    version: string;
    sphinxKey: string;
    totalDelegation: number;
    operatingCost: number;
    probabilityInActive: string;
    probabilityInReserve: string;
}

export default function Nodo() {
    const [data, setData] = useState<NodoProps | null>(null);

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
        <div>
            <h2>Información Técnica</h2>
            <p>Mix ID: {data.mixId}</p>
            <p>Host: {data.host}</p>
            <p>Layer: {data.layer}</p>
            <p>Version: {data.version}</p>
            <p>Sphinx Key: {data.sphinxKey}</p>
            <p>Total Delegation: {data.totalDelegation}</p>
            <p>Operating Cost: {data.operatingCost}</p>
            <p>Probability in Active: {data.probabilityInActive}</p>
            <p>Probability in Reserve: {data.probabilityInReserve}</p>
        </div>
    );
}
