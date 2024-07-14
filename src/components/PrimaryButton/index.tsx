interface IPrimaryButton {
  title: string;
  icon?: JSX.Element;
  onClickHandler?: () => void;
  type?: "submit" | "reset" | "button";
}

const PrimaryButton = ({
  title,
  icon,
  onClickHandler,
  type = "button",
}: IPrimaryButton) => {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      className="flex items-center justify-center bg-movie-secondary px-7 py-3 rounded-md text-movie-white gap-2 hover:bg-movie-secondary/50"
    >
      <p className="font-lato-thin text-base">{title}</p>
      <span className="text-base">{icon}</span>
    </button>
  );
};

export default PrimaryButton;
