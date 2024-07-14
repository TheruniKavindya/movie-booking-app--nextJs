"use client";
import HallSetup from "@/components/HallSetup";
import MovieBanner from "@/components/MovieBanner";
import MovieCard from "@/components/MovieCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [movieData, setMovieData] = useState<any[]>([]);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<any>();

  useEffect(() => {
    (async () => {
      await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
          if (response.success === false) {
            console.log("not working");
          } else if (response.page === 1) {
            setMovieData(response.results);
            console.log(movieData);
          } else {
            console.log("something went wrong");
          }
        });
    })();
  }, []);

  const handleBookNowButtonClick = () => {
    setIsButtonClicked(true);
  };

  useEffect(() => {
    (async () => {
      await fetch("https://api.themoviedb.org/3/movie/278?language=en-US", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response) {
            if (response.success === false) {
              console.log("not working");
            } else {
              setSelectedMovie(response);
            }
          }
        });
    })();
  }, [isButtonClicked]);

  return (
    <div className="flex flex-col w-full bg-movie-background p-5">
      <div className="flex h-24 items-center">
        <p className="text-movie-white font-lato-regular text-4xl">MOVIE BOX</p>
      </div>

      {isButtonClicked && selectedMovie && (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <MovieBanner
              image={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
            />
          </div>
          <div className="col-span-4">
            <HallSetup
              availableSeats={20}
              date="10-July"
              hallName="Scope CInema"
              numberOfSeats={50}
              time="10.30AM"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col mt-5">
        <p className="font-lato-thin text-movie-white text-lg">
          Popular Movies
        </p>
        <div className="flex md:flex-row gap-y-10 gap-5 flex-wrap mt-5">
          {Array.isArray(movieData) &&
            movieData.map((movie: any) => (
              <MovieCard
                key={movie.id}
                movieTitle={movie.title}
                company={movie.original_title}
                image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                rate={4}
                onButtonClickHandler={handleBookNowButtonClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
