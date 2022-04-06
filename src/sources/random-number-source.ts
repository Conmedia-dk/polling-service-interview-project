import { Source } from '../types/source'

export const randomNumberSource: Source<number> = {
    id: 'random-number',
    pollingFrequency: 1000,
    getData: async (): Promise<number> => {
        return Math.random()
    },
}