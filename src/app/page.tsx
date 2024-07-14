"use client";
import HallSetup from "@/components/HallSetup";
import MovieBanner from "@/components/MovieBanner";
import MovieCard from "@/components/MovieCard";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

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
            Authorization: `Bearer ${process.env.VITE_APP_ACCESS_TOKEN}`,
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
          Authorization: `Bearer ${process.env.VITE_APP_ACCESS_TOKEN}`,
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
  }, []);

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
      {/* <PrimaryButton title="Watch" icon={<FaPlay />} />
      <SecondaryButton title="Book Now" />

      <MovieCard
        movieTitle="Avatar 2"
        company="Hollywood"
        rate={4}
        image="data:image/jpeg;base64,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"
      /> */}

      {/* <MovieBanner image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2h428qNLCTe8IMamnvUvLzT3yOq_n4RIIaK26eSFRyA&s" /> */}

      {/* <svg
        width="267"
        height="31"
        viewBox="0 0 267 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 29.5C107.256 -8.54951 165.09 -5.96507 266 29.5"
          stroke="#F6A120"
          stroke-width="3"
        />
      </svg> */}

      {/* <svg
        width="28"
        height="22"
        viewBox="0 0 28 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.49998 8V4C3.49998 2.34315 4.84313 1 6.49998 1H21.5C23.1568 1 24.5 2.34315 24.5 4V8C25.8807 8 27 9.11929 27 10.5V19L22 19H6L1 19V10.5C1 9.11929 2.11927 8 3.49998 8Z"
          fill="#F6A120"
        />
        <path
          d="M3.49998 8V4C3.49998 2.34315 4.84313 1 6.49998 1H21.5C23.1568 1 24.5 2.34315 24.5 4V8M3.49998 8C2.11927 8 1 9.11929 1 10.5V19L6 19M3.49998 8C4.88069 8 6 9.11929 6 10.5V14H22V10.5C22 9.11929 23.1193 8 24.5 8M24.5 8C25.8807 8 27 9.11929 27 10.5V19L22 19M22 19H6M22 19V21M6 19V21"
          stroke="#3D2F1B"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg> */}

      {/* <HallSetup
        hallName="Scope Cinema"
        availableSeats={20}
        date="10-May"
        numberOfSeats={40}
        time="10.30AM"
      /> */}
    </div>
  );
}
