import { separator } from './../helpers/separator';
import { reversedCoords } from '../helpers/reversArray';


export const fetchGeometryApi = (points: { lat: number, lng: number }[]) => {
    const coordinates = separator(reversedCoords(points))
    return fetch(`https://router.project-osrm.org/route/v1/driving/${coordinates}`)
}