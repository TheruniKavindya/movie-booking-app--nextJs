/* eslint-disable react/jsx-key */
import React from "react";
import { SlCalender } from "react-icons/sl";

interface IHallSetup {
  hallName: string;
  availableSeats: number;
  date: string;
  time: string;
  numberOfSeats: number;
}

const HallSetup = ({
  hallName,
  availableSeats,
  date,
  numberOfSeats,
  time,
}: IHallSetup) => {
  return (
    <div className="w-full bg-movie-secondary/5 backdrop-blur-md rounded-md font-lato-regular text-movie-white p-3 shadow-lg border border-movie-gray/60">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-sm">{hallName}</p>
          <p className="text-xs text-movie-gray mt-2">
            {availableSeats} seats available
          </p>
        </div>

        <div className="flex items-center gap-2">
          <SlCalender className="text-movie-secondary text-xl" />
          <div className="flex flex-col">
            <p className="text-xs">{date}</p>
            <p className="text-xs text-movie-gray">{time}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 ">
        <svg
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
        </svg>
      </div>

      <div className="flex items-center">
        {Array.from({ length: numberOfSeats / 2 }, (_, i) => i).map(
          (_, index) => (
            <svg
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
            </svg>
          )
        )}
      </div>
    </div>
  );
};

export default HallSetup;
