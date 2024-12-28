// Banner.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Original from '../images/file.png';

function Banner() {
  const [userName, setUserName] = useState(""); // State to store the user's name

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <div className="banner-container">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
          <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
            <div className="space-y-8">
              <h1 className="text-2xl md:text-4xl font-bold">
                Hello, Welcome To{" "}
                <span className="text-violet-500">Book Haven!!!</span>
              </h1>
              <p className="text-sm md:text-xl">
                Even an ice cream parlour – a definite advantage – does not
                alleviate the sorrow I feel for a town lacking a bookstore.
                <br />
                ~Natalie Goldberg
              </p>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor" 
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a.5.5 0 0 1-.5-.5V2.706l-3.146 3.147a.5.5 0 1 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 1 1-.708.708L10.5 2.706V17.5a.5.5 0 0 1-.5.5zm-8 0a.5.5 0 0 1-.5-.5V6.706l3.646 3.647a.5.5 0 0 0 .708 0l3.646-3.647V17.5a.5.5 0 0 1-.5.5h-6z"
                  />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Hello I Am Sujay, How May I Call You?"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <Link to={{ pathname: "/course", state: { userName: userName } }}>
              <button className="btn mt-6 bg-cyan-400 text-zinc-300">Get Started</button>
            </Link>
          </div>
          <div className="order-1 w-full mt-20 md:w-1/2">
            <img
              src={Original}
              className="md:w-[550px] md:h-[460px] md:ml-12"
              alt="Didn't arrive yet."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
