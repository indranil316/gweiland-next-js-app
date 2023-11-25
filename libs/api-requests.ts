const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

async function handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get("Content-Type") || "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await response.json() : await response.text();
  
    if (!response.ok) {
      const message = isJson
        ? data.message || response.statusText
        : response.statusText;
      throw new Error(message);
    }
  
    return data as T;
}

  
export async function getNavLinks() : Promise<any>{
    const response = await fetch(
        `${SERVER_ENDPOINT}/api/navigation`,
        { cache: 'no-store'}
    );
    return handleResponse<NavLink>(response).then(
        (data)=> data
    )
}