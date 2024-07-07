import React from "react";
import Rating from "../Rating";
import SecondaryButton from "../SecondaryButton";
import Image from "next/image";

interface IMovieCard {
  movieTitle: string;
  company: string;
  rate: number;
  image: string;
}

const MovieCard = ({ movieTitle, company, image, rate }: IMovieCard) => {
  return (
    <div className="flex flex-col w-40 bg-movie-primary p-2 rounded-md text-movie-white shadow-lg space-y-3 font-lato-regular">
      <Image
        src={image}
        alt={image}
        width={200}
        height={100}
        className="rounded-md"
      />
      <div className="flex flex-col">
        <p className="text-base font-lato-regular">{movieTitle}</p>
        <p className="text-sm font-lato-light text-movie-gray">{company}</p>
      </div>

      <Rating value={rate} />
      <SecondaryButton title="Book Now" />
    </div>
  );
};

export default MovieCard;
