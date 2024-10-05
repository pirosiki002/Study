// import { FC, ChangeEvent, useState } from "react";
// import "./styles.css";
"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  comment: string;
  submit: any;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className="wrapper">
        <h1>React Form</h1>
        <section className="section">
          <h2>useState Form</h2>
          <p>This is a React Hook Form example</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-item">
              <label>
                <span className="label required">required</span>
                <span>Last name</span>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "input your Last name",
                    minLength: {
                      value: 2,
                      message: "2文字以上で入力してください",
                    },
                    // maxLength: {
                    //   value: 10,
                    //   message: "10文字以下で入力してください",
                    // },
                    onBlur: (e) => {
                      trigger("lastName");
                    },
                  })}
                />
              </label>
              {errors.lastName?.message && (
                <p className="error-message">{errors.lastName?.message}</p>
              )}
            </div>
            <div className="submit-button">
              <button type="submit">Submit button</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
