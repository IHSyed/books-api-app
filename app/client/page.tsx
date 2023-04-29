"use client";

import React from "react";
import useSWR from "swr";

// Here instead of using the URL of books from POSTMAN, we will use the API
// ENDPOINT from Mr. Zia Khan's Github "https://api.quotable.io/random ? tags = technology"

const url = "https://api.quotable.io/random?tags = technology";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// You either use "url" or the complete https path
// Here FETCHER is a syntax and "res" is the RESPONSE
// res.json will make the json response usable to us

export default function clientPage() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  {
    /* Now that we have all the data, depending on it's state, whether DATA, ERROR or LOADING
      , we can render it to the Client accordingly */
  }

  if (error) return <div> ERROR</div>;
  //if (isLoading) return <div> LOADING</div>;

  {
    /* If both the above cases are not returned, it means that the DATA has been accessed
    
       We can Access the DATA as follows :*/
  }

  if (isLoading)
    return (
      <div>
        <h1>This is an Example of a Client Page </h1>
        <h2>
          The COLLECTION is used here from page.tsx of Step02 Fetching Data
          Server Static of Zia Khan's Gitub
        </h2>
        <br></br>
        Data is Loading
        <br></br>
      </div>
    );

  return (
    <div>
      <h1> Client Page</h1>
      <br></br>
      {data.content}
    </div>
  );
}
