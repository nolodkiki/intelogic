import { Polyline } from "react-leaflet"
import { LatLngTuple } from 'leaflet'

interface IPolylineProps {
    positions: LatLngTuple[]
}


function PolylineComponent({ positions }: IPolylineProps) {
    return (
        <Polyline color={'black'} positions={positions} />
    )
}

export default PolylineComponent