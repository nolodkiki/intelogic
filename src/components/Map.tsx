import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { decode } from "@googlemaps/polyline-codec";
import 'leaflet/dist/leaflet.css'
import { useAppSelector } from '../hooks';

function Map() {

    const { geometry } = useAppSelector(state => state.counter)

    interface DataType {
        geocode: number[]
        point: string
    }
    const markers: DataType[] = [
        {
            geocode: [59.84660399, 30.29496392],
            point: 'point 1'
        },
        {
            geocode: [59.82934196, 30.42423701],
            point: 'point 2'
        },
        {
            geocode: [59.83567701, 30.38064206],
            point: 'point 3'
        },
    ]

    console.log(decode(geometry))

    const limeOptions = { color: 'black' }

    return (
        <MapContainer center={[59.83567701, 30.38064206]} zoom={13}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {markers.map(marker => (
                <Marker position={marker.geocode}>
                    <Popup>
                        <p>{marker.point}</p>
                    </Popup>
                </Marker>
            ))}
            <Polyline pathOptions={limeOptions} positions={decode(geometry)} />
        </MapContainer>
    )
}

export default Map