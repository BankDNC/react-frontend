import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AccountRequestModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose  = () => setShow(false);

  function requestAccount(accountType){

    const config = {
      method: "post",
      url: import.meta.env.VITE_API_URI + "/account/create/"+ accountType,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      
    };

    axios(config)
      .then((res) => {
        location.reload();
      })
      .catch((err) => {
        alert(err);
      });

      setShow(false);
  }

  return (
    <>
      <Button className='requestAccount' variant="primary" onClick={handleShow}>
        Solicitar Cuenta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Solicitud de Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>Que tipo de cuenta desea solicitar?</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => requestAccount('corriente')}>
            Corriente
          </Button>
          <Button variant="dark" onClick={() => requestAccount('ahorro')}>
            Ahorros
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AccountRequestModal;