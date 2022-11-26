import Image from "next/image";
import Logo from "../public/logo.png";
import Time from "../public/time.svg";
import Awards from "../public/awards.svg";
import Money_bag from "../public/money_bag.svg";
import User from "../public/user.svg";

function Header() {
  return (
    <header dir="rtl" className="z-50">
      <nav className=" bg-nav flex h-20 gap-2 items-center sm:gap-6 sm:h-24 justify-around sm:justify-center">
        {/* Logo */}
        <div className="relative w-14 h-12 sm:w-24 sm:h-20 cursor-pointer outline-none">
          <Image
          className="object-[0_-7px]"
            src={Logo}
            alt="logo"
            fill
          />
        </div>
        {/* Timer */}
        <div className="relative flex items-center justify-between cursor-pointer outline-none">
            <span 
              className="font-bold text-xs sm:text-base absolute left-1/2 text-[#3ECEEA]"
            >5:59</span>
            <div className="relative w-11 h-11 sm:w-20 sm:h-16">
              <Image
              className="object-[-10px] sm:object-[-20px]"
                src={Time}
                alt="time"
                fill
              />
            </div>
        </div>
        {/* Awards */}
        <div className="relative w-14 h-14 sm:w-24 sm:h-20 cursor-pointer outline-none">
          <Image
            src={Awards}
            alt="awards"
            fill
          />
        </div>
        {/* Money Pag */}
        <div className="relative w-11 h-11 sm:w-20 sm:h-16 cursor-pointer outline-none">
          <Image
            src={Money_bag}
            alt="money_bag"
            fill
          />
          <span
            className="font-bold text-xs sm:text-base text-[#fbc531] bg-[#11A4C0]
            sm:w-6 sm:h-6 rounded-full block text-center absolute left-[60%] top-1">25</span>
        </div>
        {/* User */}
        <div className="cursor-pointer outline-none select-none">
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 mx-auto">
            <Image
              src={User}
              alt="user"
              fill
            />
          </div>
          <span className="font-bold w-14 text-xs sm:text-base sm:w-20 whitespace-nowrap overflow-hidden text-[#11A4C0] block">mohamed</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
