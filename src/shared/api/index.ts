export const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:3000/api";
console.log("Base URL: ", BASE_URL);
class ApiFetcher {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const url = `${this.prefix}${endpoint}`;
    console.log("url", url);
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  }

  // GET request
  public async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "GET",
    });
  }

  // POST request
  public async post<T, TBODY>(
    endpoint: string,
    body: TBODY,
    options: RequestInit = {},
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(body),
    });
  }

  // PUT request
  public async put<T, TBODY>(
    endpoint: string,
    body: TBODY,
    options: RequestInit = {},
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(body),
    });
  }

  // DELETE request
  public async delete<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}

const api = new ApiFetcher(BASE_URL);

export default api;
