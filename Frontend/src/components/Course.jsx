import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">
          Welcome, Luv! We're delighted to have you{" "}
          <span className="text-violet-500"> Here! :)</span>
        </h1>
        <p className="mt-12">
          Explore the enchanting world of literature at Book Haven! Delve
          into captivating tales, embrace diverse perspectives, and ignite your
          imagination with our curated collection. Whether you crave adventure,
          wisdom, or a moment of escape, our bookstore offers a sanctuary for
          all bibliophiles. Discover new horizons and embark on a journey of
          self-discovery with each page turned. Visit us today and let the magic
          of books enrich your life!
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/">
          <button className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Course;
