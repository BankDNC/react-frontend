import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AccountRequestModal from './AccountRequestModal'

export default function Overview() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_API_URI}/account`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
        
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (loading === true) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      {data.length === 0 && (
        <>
          <h1 className="centerText">No tiene cuentas Registradas</h1>
          <h2 className="centerText">Solicite una cuenta</h2>
        </>
      )}

      {data.length > 0 && (
        <Table className="accountTable" striped bordered hover>
          <thead>
            <tr>
              <th>Nro. Cuenta</th>
              <th>Tipo de Cuenta</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((account, index) => (
              <tr key={index}>
                <td>{account.id}</td>
                <td>{account.typeAccount}</td>
                <td>{account.balance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <AccountRequestModal/>
    </>
  );
}
