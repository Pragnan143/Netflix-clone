import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {};
  const slideRight = () => {};

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        {/* <MdChevronLeft className="text-white absolute  text-6xl" /> */}
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>{" "}
        {/* <MdChevronRight className="text-white absolute  text-6xl" /> */}
      </div>
    </>
  );
};

export default Row;
