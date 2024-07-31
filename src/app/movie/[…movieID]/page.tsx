"use client";

import HallSetup from "@/components/HallSetup";
import MovieBanner from "@/components/MovieBanner";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

interface IMovieDetails {
  id: string;
}

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState<any>();
  const [movieID, setMovieID] = useState<string | string[]>("");

  // const params = useParams<{ movieID: string }>();
  // console.log(params);

  // if (params?.movieID) {
  //   setMovieID(params.movieID);

  //   console.log(movieID, "here ");
  // }

  useEffect(() => {
    console.log("working");

    (async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          },
        }
      )
        .then((res) => res.json())
        .then((response) => {
          if (response) {
            if (response.success === false) {
              console.log("not working");
            } else {
              setSelectedMovie(response);
              console.log(response);
              console.log(selectedMovie);
            }
          }
        });
    })();
  }, [movieID]);

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-full lg:col-span-8">
        {selectedMovie && (
          <MovieBanner
            image={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
            movieName={selectedMovie.title}
          />
        )}
      </div>
      <div className="col-span-full lg:col-span-4">
        <HallSetup
          availableSeats={20}
          date="10-July"
          hallName="Scope CInema"
          numberOfSeats={50}
          time="10.30AM"
          bookedSeats={new Set([1, 3, 5, 11])}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
