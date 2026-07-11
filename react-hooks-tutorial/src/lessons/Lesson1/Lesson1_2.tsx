'use client';
import { ChangeEvent, useState } from 'react';

const Lesson1_2 = () => {
  const [form, setForm] = useState({
    firstName: 'Code',
    lastName: 'Shin',
    email: 'shincode@gmail.com',
  });

  // const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, firstName: e.target.value });
  // };

  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          {/* <input
            type="text"
            className="border border-slate-500"
            onChange={handleFirstName}
          /> */}
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // setForm({
              //   firstName: e.target.value,
              //   lastName: form.lastName,
              //   email: form.email,
              // });
              setForm({
                ...form,
                firstName: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setForm({
                ...form,
                lastName: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;
