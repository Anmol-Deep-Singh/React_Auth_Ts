import { useState,useEffect} from "react"
type UseFetchProps={
    method: "GET" | "POST" | "PUT" | "DELETE";
    URL: string;
    headers?: Record<string, string>;
    body?: Record<string, any>;
    dep?: any[];
}
const useFetch= ({method,URL,headers,body,dep = []}: UseFetchProps)=>{
    const [data,Setdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchdata= async()=>{
        try {
            setLoading(true);
            const response = await fetch(URL,{method,headers,body: body ? JSON.stringify(body) : undefined,})
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            Setdata(data);
        } catch (error: any) {
            setError(error.message || "Something went wrong");
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchdata();
    },[method, URL, JSON.stringify(body), JSON.stringify(headers),...dep])
    return {data,loading,error};
};

export default useFetch;
