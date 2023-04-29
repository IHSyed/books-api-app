import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

// The fetch uses the URL of books from POSTMAN
async function getFiction() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",

    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

async function getNonfiction() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

export default async function Parallel() {
  const fictionBooks = getFiction();
  const nonfictionBooks = getNonfiction();

  const [fiction, nonfiction] = await Promise.all([
    fictionBooks,
    nonfictionBooks,
  ]);

  return (
    <div>
      <h1>This is an Example of Parallel Data Fetching </h1>
      <h2> The COLLECTION related to Books is used here from POSTMAN</h2>
      <br></br>

      <h1> FICTION BOOKS</h1>
      <br></br>
      <ul>
        {fiction.map((books: Book) => (
          <li key={books.id}>{books.name}</li>
        ))}
      </ul>
      <br></br>

      <h1> NON-FICTION BOOKS</h1>
      <br></br>
      <ul>
        {nonfiction.map((books: Book) => (
          <li key={books.id}>{books.name}</li>
        ))}
      </ul>
    </div>
  );
}
