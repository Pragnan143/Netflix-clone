import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
const Row = ({ title, fetchURL, RowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + RowId);
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider" + RowId);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full hover:opacity-100 group-hover:block opacity-50 left-4  z-[100] cursor-pointer absolute hidden"
          size={40}
        />
        <div
          id={"slider" + RowId}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full hover:opacity-100 group-hover:block opacity-50 right-4  z-[99] cursor-pointer absolute hidden"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
