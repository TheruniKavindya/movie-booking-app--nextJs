import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <PrimaryButton title="Watch" icon={<FaPlay />} />
      <SecondaryButton title="Book Now" />
    </div>
  );
}
