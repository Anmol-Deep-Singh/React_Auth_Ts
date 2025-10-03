type FetchProps = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  URL: string;
  headers?: Record<string, string>;
  body?: Record<string, any>;
};

export const fetchdata=async({method,URL,headers,body}: FetchProps)=>{
    try {
        const response = await fetch(URL, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data, error: null };
    } catch (error: any) {
        return { data: null, error: error.message || "Something went wrong" };        
    }
}