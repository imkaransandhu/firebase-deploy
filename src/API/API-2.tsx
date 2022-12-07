
import axios from "axios";


export default function API2(claim: string, setRiskRating: (arg0: any) => void, setApiError: (arg0: { message: string; name: string; }) => void) {

  let data: {
    claimHistory: string
  }

  let config: {
    method: string, url: string, headers: {
      'Content-Type': string
    }, data: {
      claimHistory: string
    }
  }

  data = {
    claimHistory: claim
  }

  config = {
    method: 'post',
    url: 'http://localhost:4000/api2',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then((response: { data: number }) => {
      setRiskRating(JSON.parse((JSON.stringify(response.data))));
    })
    .catch((error: { message: string, name: string }) => {
      setApiError({ message: error.message, name: error.name });
      throw new Error(error.message)
    });

}

