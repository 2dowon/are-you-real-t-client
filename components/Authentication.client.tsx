"use client";

import { useAuthenticationStoreActions } from "@/store/useAuthenticationStore";
import { memo } from "react";
import { Cookies } from "react-cookie";

export const TESTER_DATA = "testerData";

const cookies = new Cookies();

const Authentication = () => {
  const testerData = cookies.get(TESTER_DATA);

  const { setIsLogin, setTesterId } = useAuthenticationStoreActions();
  setIsLogin(!!testerData);
  setTesterId(testerData?.testerId);

  return null;
};

export default memo(Authentication);
