import { Marker } from "react-leaflet"
import { Route } from "../Redux/slices/routesSlice";


interface MarkersProps {
    activeRoute: Route
}

function Markers({ activeRoute }: MarkersProps) {
    return (
        <>
            {activeRoute.points.map(item => (
                <Marker key={item.lat + item.lng} position={[item.lat, item.lng]} />
            ))}
        </>
    )
}

export default Markers