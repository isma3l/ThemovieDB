const BASE_URL = import.meta.env.VITE_API_URL;
const CORS_URL = import.meta.env.VITE_CORS_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function get<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}/${url}&api_key=${API_KEY}`);
    return processResponse<T>(response);
}

export async function getWithOutParams<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}/${url}?api_key=${API_KEY}`);
    return processResponse<T>(response);
}

export const post = async <S, T>(url: string, body: S): Promise<T> => {
    const response = await fetch(`${CORS_URL}${BASE_URL}/${url}&api_key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
    });
    return processResponse<T>(response);
}

async function processResponse<T>(response: Response): Promise<T> {
    if (!response.ok)  {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}