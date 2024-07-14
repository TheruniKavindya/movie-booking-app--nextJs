import { IoIosStar, IoIosStarHalf } from "react-icons/io";

interface IRating {
  value: number;
}

const Rating = ({ value }: IRating) => {
  const totalStars = 5;
  const filledStars = Math.floor(value);
  const halfStars = value % 1 !== 0 ? 0.5 : 0;

  const emptyStars = Math.max(
    0,
    totalStars - filledStars - Math.ceil(halfStars)
  );

  console.log(filledStars, halfStars, emptyStars, totalStars);
  console.log("working");

  return (
    <div className="flex gap-1">
      {Array.from({ length: filledStars }, (_, i) => i).map((_, index) => (
        <span key={index} className="text-movie-secondary ">
          <IoIosStar />
        </span>
      ))}

      {halfStars > 0 && (
        <span key={"half"} className="text-movie-secondary">
          <IoIosStarHalf />
        </span>
      )}

      {Array.from({ length: emptyStars }, (_, i) => i).map((_, index) => (
        <span
          key={index + filledStars + Math.ceil(halfStars)}
          className="text-movie-gray"
        >
          <IoIosStar />
        </span>
      ))}
    </div>
  );
};

export default Rating;
