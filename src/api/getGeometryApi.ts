export const getGeometryApi = (points: number[][]) => {
    const reversArr = points.map(cord => [cord[1], cord[0]])
    const coordinates = reversArr.map(coord => coord.map(c => c.toString()).join(',')).join(';');
    return fetch(`https://router.project-osrm.org/route/v1/driving/${coordinates}`)
}