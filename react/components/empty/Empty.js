import React, { Component } from "react";
import { OrderFormProvider, useOrderForm } from "vtex.order-manager/OrderForm";
import Iframe from "react-iframe";
import styles from "./Vision360.css";

const Empty = () => {
  const { orderForm, setOrderForm } = useOrderForm();
  //console.log(orderForm.userProfileId);
  return (
    <>
      <h3>Mi perfil Lo Pido </h3>
      <p>Hola, desde aquí puedes actualizar tus datos personales.</p>
      <Iframe
        url="https://b2b.lopido.com/auth/cuenta?client_id=166ad9a8-b746-4c19-91c6-462d77a8d0ca&policy=2&userId=0aeceddc-820d-11eb-82ac-0e96e53f60f9"
        width="100%"
        height="700"
        id="Vision360"
        className={styles.vision}
        display="initial"
        position="relative"
      />
    </>
  );
};

export default Empty;
