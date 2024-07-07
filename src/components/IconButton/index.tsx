import React from "react";

interface IIconButton {
  icon: JSX.Element;
  onClickHandler?: () => void;
  extraTailwindCss?: string;
}

const IconButton = ({
  icon,
  onClickHandler,
  extraTailwindCss,
}: IIconButton) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={`text-xl text-movie-secondary p-3 rounded-md bg-movie-primary/100 shadow-md border border-movie-gray hover:bg-movie-primary/10 ${extraTailwindCss}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
