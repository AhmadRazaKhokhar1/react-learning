"use client";
import { useEffect, useState } from "react";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
export default function page() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: 0,
    isAdult: false,
    gender: Gender.FEMALE,
    email: "",
    dob: `${new Date().getFullYear()}-${new Date().toLocaleDateString("en-US", { month: "2-digit" })}-${new Date().getDate()}`,
  });

  const handleSubmit = () => {};

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    console.log("******", e);
    if (name === "dob") {
      const date = new Date(value).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const dateArr = date.split("/");
      const formattedDate = [dateArr[2], dateArr[0], dateArr[1]];
      const formattedDateString = formattedDate.join("-");
      setForm((prev) => ({
        ...prev,
        [name]: formattedDateString,
      }));
    } else if (name === "isAdult") {
      console.log(value, "VALUE FROM IS ADULT CHANGE EVENT");
      setForm((prev) => ({
        ...prev,
        [name]: value === "false" ? true : false,
      }));
    } else if (name === "gender") {
      setForm((prev) => ({
        ...prev,
        [name]: value === "MALE" ? Gender.MALE : Gender.FEMALE,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    console.log(
      "value from input handle change: =====> %s, with name: %s",
      value,
      name,
    );
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <div>
      <form>
        <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
          <label htmlFor="firstName" className="font-bold text-gray-800">
            First Name
          </label>
          <input
            type="text"
            className="border"
            name="firstName"
            id="firstName"
            aria-autocomplete="list"
            value={form.firstName}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
          <label htmlFor="lastName" className="font-bold text-gray-800">
            Last Name
          </label>
          <input
            type="text"
            className="border"
            name="lastName"
            id="lastName"
            aria-autocomplete="list"
            value={form.lastName}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
          <label htmlFor="email" className="font-bold text-gray-800">
            Email
          </label>
          <input
            type="email"
            className="border"
            name="email"
            id="email"
            aria-autocomplete="list"
            value={form.email}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
          <label htmlFor="phoneNumber" className="font-bold text-gray-800">
            Phone Number
          </label>
          <input
            type="tel"
            className="border"
            name="phoneNumber"
            id="phoneNumber"
            aria-autocomplete="list"
            value={form.phoneNumber}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
          <label htmlFor="dob" className="font-bold text-gray-800">
            DOB
          </label>
          <input
            type="date"
            className="border"
            name="dob"
            id="dob"
            aria-autocomplete="list"
            value={form.dob}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
          <label htmlFor="age" className="font-bold text-gray-800">
            Age
          </label>
          <input
            type="number"
            className="border"
            name="age"
            id="age"
            aria-autocomplete="list"
            value={form.age}
            onChange={handleFormChange}
          />
        </div>
        <fieldset className="flex items-center-justify-between w-full h-auto p-2 gap-2 border">
          <legend>Gender</legend>
          <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
            <label htmlFor="male" className="font-bold text-gray-800">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="male"
              value={Gender.MALE}
              checked={form.gender === Gender.MALE}
              onChange={handleFormChange}
              title="male"
            />
          </div>
          <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
            <label htmlFor="female" className="font-bold text-gray-800">
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              value={Gender.FEMALE}
              checked={form.gender === Gender.FEMALE}
              onChange={handleFormChange}
              title="female"
            />
          </div>
        </fieldset>
        <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
          <label htmlFor="isAdult" className="font-bold text-gray-800">
            Is Adult
          </label>
          <input
            type="checkbox"
            name="isAdult"
            id="isAdult"
            checked={form.isAdult}
            value={form.isAdult.toString()}
            onChange={handleFormChange}
          />
        </div>
        <button className="bg-green-500 p-3 border-green-800 rounded-2xl cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
