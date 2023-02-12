import React, { useState } from "react";
import Input from "../../atoms/Input";
import Form from "react-bootstrap/Form";
import { styleForm } from "../../styles";
import CustomButton from "../../atoms/Button";
import { colorButtonCreate } from "../../styles/index";
import { colorButton } from "../../styles";
import { useNavigate } from "react-router-dom";
import TextFiled from "../../atoms/textFiled";
import { styleTextFilead } from "../../styles/index";
import { useAuthClient } from "../../hooks/useAuth.js";
import { notConfirmedSPasswrdStyle } from "../../styles";
import PhoneTextInput from "../../atoms/phoneInput";
import { phoneINputValidator } from "./../../styles/index";
function ClientFormSignup() {
  const navigate = useNavigate();
  const {
    useInfoClient,
    onChange,
    onSubmit,
    confirmation,
    messageConfirmation,
  } = useAuthClient();
  const { name, phone, email, password, confirmationPassword } = useInfoClient;
  return (
    <Form
      style={styleForm}
      className="w-25 p-3 container text-start fw-bold mt-5"
      onSubmit={(e) => onSubmit(e)}
    >
      <TextFiled
        textFiled="Choose your Account"
        className="text-uppercase"
        style={{ styleTextFilead }}
      />
      <CustomButton
        type="submit"
        style={colorButton}
        field={"Client"}
        handleClick={() => navigate("/create-account-client")}
      />
      <CustomButton
        type="submit"
        style={colorButton}
        field={"Company"}
        handleClick={() => navigate("/create-account")}
        onChange={(e) => onChange(e)}
      />
      <Input
        value={name}
        placeholder="Enter Name"
        field="Name"
        type="text"
        handleChange={(e) => onChange(e)}
        name="name"
      />
      <Input
        name="phone"
        value={phone}
        placeholder="Enter Phone Number"
        field="Phone Number"
        type="text"
        handleChange={(e) => onChange(e)}
      />
      <Input
        value={email}
        placeholder="Enter Email"
        field="Email"
        type="email"
        handleChange={(e) => onChange(e)}
        name={"email"}
      />
      <Input
        name="password"
        value={password}
        placeholder="Enter password"
        field="password"
        type="password"
        handleChange={(e) => onChange(e)}
      />
      <Input
        value={confirmationPassword}
        placeholder="Confirm your password"
        field="confirmation password"
        type="password"
        handleChange={(e) => onChange(e)}
        name={"confirmationPassword"}
      />
      {messageConfirmation && (
        <TextFiled
          textFiled={messageConfirmation}
          className="text-uppercase"
          style={notConfirmedSPasswrdStyle}
        />
      )}
      <CustomButton
        type="submit"
        field={"Create An Account"}
        style={colorButtonCreate}
      />
     {/*  <PhoneTextInput
        value={phone}
        placeholder="Enter Phone Number"
        field="Phone Number"
        type="text"
        style={phoneINputValidator}
      /> */}
    </Form>
  );
}

export default ClientFormSignup;
