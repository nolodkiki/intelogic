export const separator = (arr: number[][]) => {
    return arr.map(item => item.join(',')).join(';')
}