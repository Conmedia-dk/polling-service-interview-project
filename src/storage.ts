import fs from 'node:fs/promises'

export const STORAGE_FILE_PATH = './storage.json'

export const update = async (key: string, value: unknown): Promise<void> => {
    let content: Record<string, unknown>
    try {
        content = JSON.parse((await fs.readFile(STORAGE_FILE_PATH)).toString())
    } catch (e) {
        // Assume this happens because the file does not exist. Ideally, we'd handle other errors.
        content = {}
    }

    content[key] = value

    await fs.writeFile(STORAGE_FILE_PATH, JSON.stringify(content))
}


export const read = async <ReturnType>(key: string): Promise<ReturnType | null> => {
    try {
        // Read and parse the storage file.
        const content = JSON.parse((await fs.readFile(STORAGE_FILE_PATH)).toString())

        return content[key] ?? null
    } catch (e) {
        // Assume this happens because the file does not exist and return null.
        return null
    }
}