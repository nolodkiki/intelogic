import { MapContainer, TileLayer } from 'react-leaflet'
import L from "leaflet";
import { decode } from "@googlemaps/polyline-codec";
import 'leaflet/dist/leaflet.css'
import { useAppSelector } from '../hooks';
import { useEffect, useRef } from 'react';
import Polyline from './Polyline';
import Markers from './Markers';

function Map() {
    const { geometry, err } = useAppSelector(state => state.geometry)
    const { activeRoute } = useAppSelector(state => state.routes)

    const mapRef = useRef<L.Map | null>(null);


    useEffect(() => {
        if (geometry && activeRoute.points && mapRef.current) {
            const polyline = decode(geometry);
            const latlngs = polyline.map(point => (
                L.latLng(point[0], point[1])
            ));
            const bounds = L.latLngBounds(latlngs.flat());
            mapRef.current.fitBounds(bounds);
        }
    }, [geometry, activeRoute.points]);


    return (
        <>
            {err ? err : <MapContainer
                ref={mapRef}
                center={[54.55, 25.19]}
                zoom={5}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Markers activeRoute={activeRoute} />
                <Polyline positions={decode(geometry)} />
            </MapContainer>}
        </>
    )
}

export default Map