"use client";

import { TESTER_DATA } from "@/components/Authentication.client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, Suspense, useRef, useState } from "react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

type TEnergyType = "E" | "I";
type TInformationType = "S" | "N";
type TDecisionType = "T" | "F";
type TLifeStyleType = "J" | "P";

const TesterLoginPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const redirectURI = params.get("redirectURI");

  const nickNameInputRef = useRef<HTMLInputElement>(null);
  const [nickName, setNickName] = useState("");

  const [energyType, setEnergyType] = useState<TEnergyType | null>(null);
  const [informationType, setInformationType] =
    useState<TInformationType | null>(null);
  const [decisionType, setDecisionType] = useState<TDecisionType | null>(null);
  const [lifeStyleType, setLifeStyleType] = useState<TLifeStyleType | null>(
    null
  );

  const handleButtonClick = async () => {
    // TODO: testerId 관련 로직 생각 필요
    await cookies.set(
      TESTER_DATA,
      JSON.stringify({
        nickName,
        mbti: `${energyType}${informationType}${decisionType}${lifeStyleType}`,
        testerId: 1,
      }),
      { maxAge: 3600 }
    );

    if (redirectURI) {
      router.replace(redirectURI);
    }
  };

  return (
    <Suspense>
      <div className="mx-[2rem] space-y-[3.2rem] my-[4rem]">
        <div>
          <p className="text-gray-100 text-label font-semibold mb-[0.8rem]">
            닉네임
          </p>
          <Input
            ref={nickNameInputRef}
            className="w-full px-[2rem] py-[1.8rem] text-detail"
            value={nickName}
            placeholder="닉네임을 입력해주세요 (최대 8글자)"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              if (value.length > 8) {
                return;
              }
              setNickName(value);
            }}
          />
        </div>

        <div>
          <p className="text-gray-100 font-semibold mb-[0.8rem] text-label">
            MBTI
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
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          disabled={
            nickName === "" ||
            !energyType ||
            !informationType ||
            !decisionType ||
            !lifeStyleType
          }
          onClick={handleButtonClick}
        >
          입력하기
        </Button>
      </div>
    </Suspense>
  );
};

export default TesterLoginPage;
