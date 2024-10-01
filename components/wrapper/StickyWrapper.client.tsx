"use client";

import Sticky from "react-stickynode";

const StickyWrapper = ({
  children,
  top = 0,
}: {
  children: JSX.Element;
  top?: number;
}) => {
  return (
    <Sticky enabled innerZ={10} top={top}>
      {children}
    </Sticky>
  );
};

export default StickyWrapper;
