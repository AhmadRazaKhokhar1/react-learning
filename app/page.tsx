"use client";
import { SubmitEvent, useEffect, useState } from "react";

enum Gender {
  MALE="male",
  FEMALE="female"
}
export default function Home() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [dob, setDob] = useState<string>(`${new Date().getFullYear()}-${new Date().toLocaleDateString("en-US", {month:"2-digit"})}-${new Date().getDate()}`);
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<Gender>(Gender.FEMALE);
  const [isAdult, setIsAdult] = useState<boolean>(false);

  useEffect(() => {
    console.log(
      "firstName:%s,\n lastName:%s,\n email:%s,\n phoneNumber:%s,\n dob:%s,\n age:%s,\n gender:%s,\n isAdult:%s\n",
      firstName,
      lastName,
      email,
      phoneNumber,
      dob,
      age,
      gender,
      isAdult,
    );
  }, [firstName, lastName, email, phoneNumber, dob, age, gender, isAdult]);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form onSubmit={handleSubmit}>
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
            value={firstName}
            onChange={(e) => {
              const value = e.target.value;
              setFirstName(value);
            }}
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
            value={lastName}
            onChange={(e) => {
              const value = e.target.value;
              setLastName(value);
            }}
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
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
            }}
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
            value={phoneNumber}
            onChange={(e) => {
              const value = e.target.value;
              setPhoneNumber(value);
            }}
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
            value={dob}
            onChange={(e) => {
              const value = e.target.value;
              const date = new Date(value).toLocaleDateString("en-US", {day:"2-digit", month:"2-digit", year:"numeric"});
              const dateArr = date.split("/");
              const formattedDate = [dateArr[2],dateArr[0], dateArr[1]];
              const formattedDateString = formattedDate.join("-");
              setDob(formattedDateString);
            }}
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
             value={age}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setAge(value);
            }}
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
              value={gender}
              checked={gender === Gender.MALE}
              onChange={()=>setGender(Gender.MALE)}
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
              value={gender}
              checked={gender === Gender.FEMALE}
              onChange={()=>setGender(Gender.FEMALE)}
              title="female"
            />
          </div>
        </fieldset>
        <div className="flex items-center-justify-between w-full h-auto p-2 gap-2">
          <label htmlFor="isAdult" className="font-bold text-gray-800">
            Is Adult
          </label>
          <input type="checkbox" name="isAdult" id="isAdult" checked={isAdult} onChange={()=>setIsAdult(prev=>!prev)} />
        </div>
        <button
          type="submit"
          className="bg-green-500 p-3 border-green-800 rounded-2xl cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
