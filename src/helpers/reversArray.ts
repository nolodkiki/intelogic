interface Coordinates {
    lat: number;
    lng: number;
}

type ReversedCoordinates = (arr: Coordinates[]) => [number, number][];

export const reversedCoords: ReversedCoordinates = (arr) => (
    arr.map(item => [item.lng, item.lat])
);