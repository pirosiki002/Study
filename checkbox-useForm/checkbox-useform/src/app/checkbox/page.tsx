// ref:https://tech.andpad.co.jp/entry/2022/12/22/100000
"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface MyFavoriteFoods {
  id: string;
  name: string;
  checked: boolean;
  disabled: boolean;
}

interface SubmitData {
  myFavoriteFoods: string[];
}

const MultipleCheckBox: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SubmitData>({ mode: "onChange" });

  const onSubmit: SubmitHandler<SubmitData> = (data: SubmitData) => {
    console.log("send API data");
  };

  const [MyFavoriteFoods, setMyFavoriteFoods] = useState<MyFavoriteFoods[]>([
    {
      id: "sushi",
      name: "寿司",
      checked: false,
      disabled: false,
    },
    {
      id: "yakiniku",
      name: "焼肉",
      checked: false,
      disabled: false,
    },
    {
      id: "khao_mangai",
      name: "カオマンガイ",
      checked: false,
      disabled: false,
    },
  ]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {MyFavoriteFoods.map((item) => {
            return (
              <div key={item.id}>
                <input
                  id={item.id}
                  type="checkbox"
                  defaultChecked={item.checked}
                  disabled={item.disabled}
                  {...register("myFavoriteFoods", {
                    validate: {
                      atLeastOneRequired: (value) =>
                        value.length >= 1 ||
                        "At least one checkbox must be selected",
                    },
                  })}
                ></input>
                <label htmlFor={item.id}>{item.name}</label>
                {/* <label>{item.name}</label> */}
              </div>
            );
          })}
        </div>
        {errors.myFavoriteFoods && (
          <p>
            {errors.myFavoriteFoods.type} : {errors.myFavoriteFoods.message}
          </p>
        )}
        <button type="submit">[Submit]</button>
      </form>
    </>
  );
};

export default MultipleCheckBox;
