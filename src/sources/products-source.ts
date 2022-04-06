import { Source } from '../types/source'

type Product = {
    name: string,
    price: number,
}

type ProductCollection = {
    [id: string]: Product
}

const products1: ProductCollection = {
    'lam': {
        name: 'Laminator',
        price: 100,
    },
    'rad': {
        name: 'Radiatorskjuler',
        price: 9999999999999,
    },
}

const products2: ProductCollection = {
    'lam': {
        name: 'Laminator',
        price: 100,
    },
    'rad': {
        name: 'Radiatorskjuler',
        price: 9999999999999,
    },
    'rub': {
        name: 'Rubber duck',
        price: 42,
    },
}

const products3: ProductCollection = {
    'lam': {
        name: 'Laminator',
        price: 123,
    },
    'rub': {
        name: 'Rubber duck',
        price: 42,
    },
}

const data = [products1, products2, products3]

export const productsSource: Source<ProductCollection> = {
    id: 'products',
    pollingFrequency: 5000,
    getData: async (): Promise<ProductCollection> => {
        return data[Math.floor(Math.random() * data.length)]
    }
}