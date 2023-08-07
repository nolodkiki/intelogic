import { Marker } from "react-leaflet"
import { icon } from "leaflet"
import { Route } from "../Redux/slices/routesSlice";

interface MarkersProps {
    activeRoute: Route
}


function Markers({ activeRoute }: MarkersProps) {
    const markerIcon = icon({
        iconUrl: "/intelogic/marker.png",
        iconSize: [40, 40],
    })
    return (
        <>
            {activeRoute.points.map(item => (
                <Marker icon={markerIcon} key={item.lat + item.lng} position={[item.lat, item.lng]} />
            ))}
        </>
    )
}

export default Markers