'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
 // Asegúrate de que la ruta sea correcta

interface MapProps {
    latitude: number;
    longitude: number;
}

// Definir un nuevo icono personalizado
const customIcon = new L.Icon({
    iconUrl: '/punto2.svg',
    iconSize: [50, 60], // Tamaño del icono
    iconAnchor: [12, 41], // Punto del icono que corresponde a la posición del marcador
    popupAnchor: [1, -34], // Punto desde el cual se abrirá el popup relativo al icono
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41], // Tamaño de la sombra
});

const MapComponent: React.FC<MapProps> = ({ latitude, longitude }) => {
    const position = [latitude, longitude] as [number, number];
const height = window.innerHeight;
    return (
        <MapContainer center={position} zoom={5} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    Nodo Cypherplatxs 🇦🇷 <br /> {latitude}, {longitude}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;