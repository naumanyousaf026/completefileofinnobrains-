import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blog");

        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blog data", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="py-10 bg-[#F9FAFB]">
      <div className="container px-4 w-5/6 mx-auto">
        {/* Blog Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 will-change-transform"
            >
              <img
                className="w-full h-48 object-cover"
                src="http://localhost:5000/images/web3.png" // Absolute URL for testing
                alt="Web 3 Image"
                onError={(e) => {
                  e.target.src = "/images/default-image.jpg"; // Fallback in case of error
                }}
              />

              <div className="p-6 bg-[#FDFDFD]">
                <div className="text-sm font-semibold text-[#103153] mb-2">
                  <span className="bg-[#EEEEEE] p-1">{blog.category}</span>{" "}
                  <span className="ms-2">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog.name}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                  aria-label={`Read more about ${blog.name}`}
                >
                  Read more
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ms-2 text-sm"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Button */}
        <div className="mt-8 text-center">
          <button
            className="px-6 py-2 bg-[#F8AF2A] text-white rounded-full hover:bg-orange-600 transition duration-300"
            aria-label="Read all blog posts"
          >
            Read All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
