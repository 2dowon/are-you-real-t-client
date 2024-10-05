import Link from "next/link";
import Home from "../icon/Home";
import StickyWrapper from "../wrapper/StickyWrapper.client";

const Header = () => {
  return (
    <StickyWrapper>
      <header className="flex w-full items-center justify-center border-b border-gray-800 bg-black py-[0.6rem]">
        <Link href="/">
          <Home className="h-[4.4rem] w-[4.4rem] p-[1rem]" />
        </Link>
      </header>
    </StickyWrapper>
  );
};

export default Header;
