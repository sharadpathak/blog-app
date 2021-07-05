import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    let abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not load the Data, Try Again");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
          console.log(data);
        })
        .catch((err) => {
          if(err.name === 'AbortError'){
            abortCont.abort();
          } else {
            setError(err.message);
          setIsPending(false);
          }          
        });
    }, 5000);
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error};
};

export default useFetch;