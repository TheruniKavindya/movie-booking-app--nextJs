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
      className="flex items-center justify-center bg-movie-secondary px-7 py-1 rounded-md text-movie-white gap-2 hover:bg-amber-400"
    >
      <p className="font-lato-thin text-mase">{title}</p>
      <span className="text-base">{icon}</span>
    </button>
  );
};

export default SecondaryButton;
