import React from "react";
import { Table } from "react-bootstrap";

export default function Transactions() {

  let data = []

  return (
    <>
      <div>
        <label htmlFor="movementType">Tipo de Movimiento:</label>
        <select name="movementType" id="">
          <option value="recharge">Recargar</option>
          <option value="withdraw">Retirar</option>
          <option value="transference">Transferir a otros</option>
        </select>
      </div>

      <Table className="accountTable" striped bordered hover>
        <thead>
          <tr>
            <th>Nro. Cuenta</th>
            <th>Tipo de Cuenta</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((account, index) => (
            <tr key={index}>
              <td> <input type="checkbox" name="account" id="index" value={account.id} /> </td>
              <td>{account.typeAccount}</td>
              <td>{account.balance}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </>
  );
}
