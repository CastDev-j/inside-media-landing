import { type FC } from "react";
import { Button } from "@components/Button";
import { IoIosPhonePortrait } from "react-icons/io";

export const Navigation: FC = () => {
  return (
    <nav className="md:flex  md:grow">
      {/* Desktop sign in links */}
      <div className="flex items-center justify-end flex-wrap grow gap-2 lg:gap-5">
        <a
          href="#"
          className="flex items-center gap-2 bg-[#4F46E5] text-neutral-50 px-3 py-2 rounded-full hover:bg-primary font-semibold hover:text-neutral-950 transition duration-150 ease-in-out"
        >
          <IoIosPhonePortrait />
          <span>+ 52 55 5555 5555</span>
        </a>
      </div>
    </nav>
  );
};
