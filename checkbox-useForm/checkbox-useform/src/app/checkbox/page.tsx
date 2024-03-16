// ref:https://tech.andpad.co.jp/entry/2022/12/22/100000
"use client";
import type { NextPage } from "next";
import { useState } from "react";

interface MyFavoriteFoods {
  id: string;
  name: string;
  checked: boolean;
  disabled: boolean;
}

const MultipleCheckBox: NextPage = () => {
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
      <form>
        <div>
          {MyFavoriteFoods.map((item) => {
            return (
              <div key={item.id}>
                <input
                  id={item.id}
                  type="checkbox"
                  defaultChecked={item.checked}
                  disabled={item.disabled}
                ></input>
                <label htmlFor={item.id}>{item.name}</label>
                {/* <label>{item.name}</label> */}
              </div>
            );
          })}
        </div>
        <button type="submit">[Submit]</button>
      </form>
    </>
  );
};

export default MultipleCheckBox;
