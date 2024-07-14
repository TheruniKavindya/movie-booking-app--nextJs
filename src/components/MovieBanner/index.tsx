import { FaHeart, FaPlay, FaPlus } from "react-icons/fa";
import IconButton from "../IconButton";
import PrimaryButton from "../PrimaryButton";

interface IMovieBanner {
  image: string;
}

const MovieBanner = ({ image }: IMovieBanner) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="banner"
        className="w-full h-[60vh] object-fill rounded-lg"
      />

      {/* bottom buttons  */}
      <div className="absolute bottom-0 left-0 p-2 bg-movie-background flex items-center justify-center gap-2 rounded-tr-lg">
        <PrimaryButton title="Watch Now" icon={<FaPlay />} />
        <IconButton icon={<FaPlus />} />
      </div>

      {/* right upper button  */}
      <div className="absolute top-0 right-0 p-2 bg-movie-background flex items-center justify-center rounded-bl-lg ">
        {/* <SecondaryButton title="now" /> */}
        <IconButton
          icon={<FaHeart />}
          extraTailwindCss="bg-movie-secondary/30 hover:bg-movie-secondary/60"
        />
      </div>
    </div>
  );
};

export default MovieBanner;
