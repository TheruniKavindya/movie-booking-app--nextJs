import Image from "next/image";
import Rating from "../Rating";
import SecondaryButton from "../SecondaryButton";
import Link from "next/link";

interface IMovieCard {
  movieTitle: string;
  company: string;
  rate: number;
  image: string;
  id: number;
  onButtonClickHandler?: () => void;
}

const MovieCard = ({
  movieTitle,
  company,
  image,
  rate,
  id,
  onButtonClickHandler,
}: IMovieCard) => {
  return (
    <div className="flex flex-col w-full bg-movie-primary p-2 rounded-md text-movie-white shadow-lg space-y-3 font-lato-regular">
      <Image
        src={image}
        alt={image}
        width={0}
        height={0}
        sizes="100vw"
        className="rounded-md w-full aspect-video"
      />
      <div className="min-h-32">
        <div className="flex flex-col  mb-2">
          <p className="text-2xl font-lato-regular text-nowrap text-ellipsis overflow-hidden max-w-[25ch]">
            {movieTitle}
          </p>
          <p className="text-sm font-lato-light text-movie-gray">{company}</p>
        </div>

        <Rating value={rate} />
      </div>
      <Link href={`/movie/${id}`} className="flex w-full">
        <SecondaryButton
          title="Book Now"
          onClickHandler={onButtonClickHandler}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
