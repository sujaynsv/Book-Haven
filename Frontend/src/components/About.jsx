import React from "react";

function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 mt-5">
      <br />
      <br />
      <h1 className="text-3xl font-semibold mb-6 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6 text-white-700">
            We are committed to fostering a love for reading and learning within our community by providing a curated selection of high-quality books that cater to every taste and interest. Our goal is to create a welcoming space where book enthusiasts of all ages can explore, discover, and connect with the world of literature.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <p className="text-lg leading-relaxed mb-6 text-white-700">
            At Book Haven, we are driven by our passion for literature and our dedication to diversity and inclusion. We celebrate the rich tapestry of voices and perspectives represented in literature and strive to exceed our customers' expectations by providing personalized service and exceptional experiences.
          </p>
        </div>
      </div>
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
        <p className="text-lg leading-relaxed mb-6 text-white-700">
          We invite you to visit Book Haven and embark on a literary journey with us. Immerse yourself in our curated selection of books, explore our cozy reading nooks, and experience the magic of our bookstore. Thank you for choosing Book Haven as your destination for all things literary. We look forward to welcoming you into our community of book lovers!
        </p>
      </div>
    </div>
  );
}

export default About;
