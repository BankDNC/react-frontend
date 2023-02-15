import axios from "axios";
import React, { useEffect } from "react";

export default function Overview() {

  let data=''
  
  useEffect(() => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_API_URI}/account`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  

  return <div>Overview</div>;
}
