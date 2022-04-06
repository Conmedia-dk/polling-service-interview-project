import fs from 'node:fs/promises'
import { read, STORAGE_FILE_PATH, update } from './storage'

// IMPORTANT: This is not meant to be an example of good testing...

const clean = async () => {
    try {
        await fs.rm(STORAGE_FILE_PATH)
    } catch (e) {}
}

beforeEach(clean)
afterEach(clean)

it('works', async () => {
    const data1 = {
        test: 'test',
    }

    await update('test', data1)
    expect(await read('test')).toEqual(data1)

    const data2 = 'test'

    await update('test', data2)
    expect(await read('test')).toEqual(data2)
})