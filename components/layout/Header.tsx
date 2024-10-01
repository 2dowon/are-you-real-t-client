import Link from "next/link";
import TextLogo from "../icon/TextLogo";
import StickyWrapper from "../wrapper/StickyWrapper.client";

const Header = () => {
  return (
    <StickyWrapper>
      <header className="p-[2.4rem] border-b border-gray-25 flex items-center bg-gray-0">
        <Link href="/">
          <TextLogo className="w-[12rem] h-[2rem]" />
        </Link>
      </header>
    </StickyWrapper>
  );
};

export default Header;
