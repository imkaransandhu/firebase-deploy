import { SetStateAction, useState } from "react";
import { ReactElement } from "react";
import Field from "./Field";
import API1 from "../API/API-1";




const FormGroup = (): ReactElement => {
  const [carName, setCarName] = useState<string>("");
  const [carYear, setCarYear] = useState<number>(0);
  const [claimHistory, setClaimHistory] = useState<string>("");
  const [carValue, setCarValue] = useState<number>();
  const [riskRating, setRiskRating] = useState<number>();
  const [apiError, setApiError] = useState<{ message: string, name: string }>({ message: "", name: "" });

  function handleCarName(e: { target: { value: SetStateAction<string>; }; }) {
    setCarName(e.target.value)
  }
  function handleCarYear(e: { target: { value: SetStateAction<number>; }; }) {
    setCarYear(e.target.value)
  }
  function handleClaimHistory(e: { target: { value: SetStateAction<string>; }; }) {
    setClaimHistory(e.target.value)
  }


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // API One
    API1(carName, carYear,
      setCarValue,
      claimHistory,
      setApiError,
      setRiskRating,)
  }


  return (
    <form onSubmit={handleSubmit} className="w-full py-4 flex flex-col gap-y-4 text-center">
      <Field ciType="text" inputName="Car Name" phText="Enter your Car Name" fs={handleCarName} />
      <Field ciType="number" inputName="Car Year" phText="Enter your Car Name" fs={handleCarYear} />
      <Field ciType="text" inputName="Claim" phText="Enter your claim history" fs={handleClaimHistory} />
      <button type="submit" className="bg-black font-bold p-2 text-xl text-slate-300 w-20 mx-auto">Go</button>

      <div>
        <h1 className="text-xl font-bold">Car Value: {carValue}</h1>
        <h1 className="text-xl font-bold">Risk Rating: {riskRating}</h1>
      </div>


      {apiError &&
        (<div>
          <h1 className="text-xl font-bold">{`Error Message: ${apiError.message} `}</h1>
          <h1 className="text-xl font-bold">{`Error Type: ${apiError.name}`}</h1>
        </div>)}
    </form>
  );
};

export default FormGroup; 