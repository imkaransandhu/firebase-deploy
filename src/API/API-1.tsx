import axios from "axios";
import API2 from "./API-2";

function API1(carName: string, carYear: number,
  setCarValue: (arg0: number) => void,
  claimHistory: string,
  setApiError: (arg0: { message: string; name: string; }) => void,
  setRiskRating: (arg0: number) => void) {

  let data: {
    carName: string,
    year: number
  }

  let config: {
    method: string,
    url: string,
    headers: {
      'Content-Type': string
    },
    data: {
      carName: string,
      year: number
    }
  }

  data = {
    carName: carName,
    year: carYear
  };

  config = {
    method: 'post',
    url: 'https://turner-quotes.azurewebsites.net/getcarvalue',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then((response: { data: number; }) => {
      setCarValue(JSON.parse(JSON.stringify(response.data)));
      API2(claimHistory, setRiskRating, setApiError)
    })
    .catch((error: { message: string, name: string }) => {
      setApiError({ message: error.message, name: error.name });
      throw new Error(error.message)
    });
}

export default API1;