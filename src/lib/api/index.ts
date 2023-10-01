const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function get<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}/${url}&api_key=${API_KEY}`);
    return await processFetch<T>(response);
}

export const post = async <S, T>(url: string, body: S): Promise<T> => {
    const response = await fetch(`${BASE_URL}/${url}`, { method: 'POST', body: JSON.stringify(body)});

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

async function processFetch<T>(response: Response): Promise<T> {
    if (!response.ok)  {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}