interface ISecondaryButton {
  title: string;
  icon?: JSX.Element;
  onClickHandler?: () => void;
  type?: "submit" | "reset" | "button";
}

const SecondaryButton = ({
  title,
  icon,
  onClickHandler,
  type = "button",
}: ISecondaryButton) => {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      className="flex items-center justify-center w-full border border-movie-secondary text-movie-secondary hover:text-movie-white hover:bg-movie-secondary px-7 py-3 rounded-md gap-2 active:scale-95 transform transition-all duration-300"
    >
      <p className="font-lato-thin text-mase">{title}</p>
      <span className="text-base">{icon}</span>
    </button>
  );
};

export default SecondaryButton;
