"use client";

import { Button } from "@/components/ui/button";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import Link from "next/link";

const MbtiTestLinkButton = () => {
  const isLogin = useAuthenticationStore((state) => state.isLogin);

  return (
    <Button asChild variant="primary" size="lg">
      <Link
        href={
          isLogin
            ? "/test"
            : `/login?redirectURI=${encodeURIComponent("/test")}`
        }
      >
        MBTI 검증해보기
      </Link>
    </Button>
  );
};

export default MbtiTestLinkButton;
