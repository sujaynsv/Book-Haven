import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PurchasePage() {
  const { name } = useParams(); 

  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch book details based on the name
    axios.get(`/api/books/${name}`)
      .then((response) => {
        setBookDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 mt-5">
        <br />
        <br />
      <h1 className="text-3xl font-semibold mb-4">Purchase Details</h1>
      {bookDetails && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Book Details</h2>
            <p>Name: {bookDetails.name}</p>
            <p>Author: {bookDetails.author}</p>
            <p>Description: {bookDetails.description}</p>
            <p>Price: {bookDetails.price}</p>
          </div>
          <div>
            {/* You can add more information or functionality here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default PurchasePage;
