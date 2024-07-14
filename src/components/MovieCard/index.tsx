import Image from "next/image";
import Rating from "../Rating";
import SecondaryButton from "../SecondaryButton";

interface IMovieCard {
  movieTitle: string;
  company: string;
  rate: number;
  image: string;
  onButtonClickHandler?: () => void;
}

const MovieCard = ({
  movieTitle,
  company,
  image,
  rate,
  onButtonClickHandler,
}: IMovieCard) => {
  return (
    <div className="flex flex-col w-40 bg-movie-primary p-2 rounded-md text-movie-white shadow-lg space-y-3 font-lato-regular">
      <Image
        src={image}
        alt={image}
        width={200}
        height={100}
        className="rounded-md"
      />
      <div className="min-h-32">
        <div className="flex flex-col">
          <p className="text-base font-lato-regular">{movieTitle}</p>
          <p className="text-sm font-lato-light text-movie-gray">{company}</p>
        </div>

        <Rating value={rate} />
      </div>
      <SecondaryButton title="Book Now" onClickHandler={onButtonClickHandler} />
    </div>
  );
};

export default MovieCard;
