"use client";

import { Button } from "@/components/ui/button";
import { useAuthenticationStoreActions } from "@/store/useAuthenticationStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TEnergyType = "E" | "I";
type TInformationType = "S" | "N";
type TDecisionType = "T" | "F";
type TLifeStyleType = "J" | "P";

const TesterLoginPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const redirectURI = params.get("redirectURI");

  const { setTesterMBTI, setTesterId } = useAuthenticationStoreActions();

  const [energyType, setEnergyType] = useState<TEnergyType | null>(null);
  const [informationType, setInformationType] =
    useState<TInformationType | null>(null);
  const [decisionType, setDecisionType] = useState<TDecisionType | null>(null);
  const [lifeStyleType, setLifeStyleType] = useState<TLifeStyleType | null>(
    null
  );

  const handleButtonClick = () => {
    setTesterMBTI(
      `${energyType}${informationType}${decisionType}${lifeStyleType}`
    );
    setTesterId(uuidv4());

    if (redirectURI) {
      router.replace(redirectURI);
    }
  };

  return (
    <div className="px-[2rem]">
      <p className="text-gray-100 font-semibold mb-[0.8rem] text-label">
        MBTI를 선택해 주세요!
      </p>

      <div className="grid grid-cols-4 gap-x-[1.6rem]">
        {[
          {
            key: "energy",
            typeList: ["I", "E"],
            onClick: (type: string) => {
              setEnergyType(type as TEnergyType);
            },
          },
          {
            key: "information",
            typeList: ["N", "S"],
            onClick: (type: string) => {
              setInformationType(type as TInformationType);
            },
          },
          {
            key: "decision",
            typeList: ["F", "T"],
            onClick: (type: string) => {
              setDecisionType(type as TDecisionType);
            },
          },
          {
            key: "lifeStyle",
            typeList: ["P", "J"],
            onClick: (type: string) => {
              setLifeStyleType(type as TLifeStyleType);
            },
          },
        ].map(({ key, typeList, onClick }) => {
          return (
            <div key={`mbti_${key}`} className="bg-gray-25 rounded-[1rem]">
              {typeList.map((type) => {
                let isSelected = false;
                if (key === "energy") {
                  isSelected = type === energyType;
                } else if (key === "information") {
                  isSelected = type === informationType;
                } else if (key === "decision") {
                  isSelected = type === decisionType;
                } else if (key === "lifeStyle") {
                  isSelected = type === lifeStyleType;
                }

                return (
                  <div
                    key={`mbti_type_${type}`}
                    className={`text-detail font-semibold text-center py-[2rem] rounded-[1rem] cursor-pointer ${
                      isSelected
                        ? "bg-gray-60 text-gray-100 font-bold"
                        : "bg-gray-25 text-gray-60"
                    }`}
                    onClick={() => {
                      onClick(type);
                    }}
                  >
                    {type}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <Button
        variant="primary"
        size="lg"
        className="absolute bottom-[2rem] w-[calc(100%-4rem)]"
        disabled={
          !energyType || !informationType || !decisionType || !lifeStyleType
        }
        onClick={handleButtonClick}
      >
        입력하기
      </Button>
    </div>
  );
};

export default TesterLoginPage;
