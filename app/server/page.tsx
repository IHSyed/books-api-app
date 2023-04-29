import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

// The fetch uses the URL of books from POSTMAN
async function getBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data = response.json();
  return data;
}

export default async function staticPage() {
  const books = await getBooks();
  //console.log(books);
  return (
    <div>
      <h1>This is an Example of a Dynamic Page </h1>
      <h2> The COLLECTION related to Books is used here from POSTMAN</h2>
      <br></br>
      {books.map((books: Book) => (
        <ul key={books.id}>
          <li>
            {books.name}-{books.type}
          </li>
        </ul>
      ))}
    </div>
  );
}
