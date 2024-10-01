import TextLogo from "../icon/TextLogo";
import StickyWrapper from "../wrapper/StickyWrapper.client";

const Header = () => {
  return (
    <StickyWrapper>
      <header className="py-[2rem] border-b border-gray-25 flex justify-center items-center bg-gray-0">
        <TextLogo className="w-[12rem] h-[2rem]" />
      </header>
    </StickyWrapper>
  );
};

export default Header;
