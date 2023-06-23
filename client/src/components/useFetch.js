import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [blogs, setBlogs] = useState([])
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error("Failed to fetch data");
          } else {
            return res.json();
          }
        })
        .then(data => {
          setBlogs(data);
          setPending(false);
          setError(false);
        })
        .catch(err => {
          setError(err.message);
          setPending(false);
        });
    
    }, [url]);    

    return {blogs, pending, error};
}
 
export default useFetch;