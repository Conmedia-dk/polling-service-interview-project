// Feel free to change in any way you like. Just remember to change the example source in sources/example.ts if you do.
export type Source<DataType> = {
    id: string,
    pollingFrequency: number, // Milliseconds.
    getData(): Promise<DataType>
}