import React, { useState } from "react";
import Input from "../../atoms/Input";
import Form from "react-bootstrap/Form";
import CustomButton from "../../atoms/Button";
import { colorButton } from "../../styles";
import { styleForm } from "../../styles";
import TextFiled from "../../atoms/textFiled";
import { styleTextFilead } from "../../styles/index";
import { lineStyle } from "../../styles";
import { useNavigate } from "react-router-dom";

function CustomFormSignUp() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: null,
    phone: null,
    email: null,
    password: null,
    confirmationPassword: null,
    company: null,
    domain: null,
    adress: null,
    zone: null,
    code: null,
  });
  const {
    name,
    phone,
    email,
    password,
    confirmationPassword,
    company,
    domain,
    adress,
    zone,
    code,
  } = userInfo;
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="w-25 p-3 container text-start fw-bold"
        style={styleForm}
      >
        <div>
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
          />
        </div>

        <hr style={lineStyle} />

        <Input
          value={name}
          placeholder="Enter Name"
          field="Name"
          type="text"
          handleChange={handleChange}
        />
        <Input
          value={phone}
          placeholder="Enter Phone Number"
          field="Phone Number"
          type="text"
          handleChange={handleChange}
        />
        <Input
          value={email}
          placeholder="Enter Email"
          field="Email"
          type="text"
          handleChange={handleChange}
        />
        <Input
          value={password}
          placeholder="Enter password"
          field="password"
          type="password"
          handleChange={handleChange}
        />
        <Input
          value={confirmationPassword}
          placeholder=" Enter Confirmation Password"
          field="Confirmation Password"
          type="password"
          handleChange={handleChange}
        />
        <Input
          value={company}
          placeholder=" Enter  company"
          field="company"
          type="text"
          handleChange={handleChange}
        />
        <Input
          value={domain}
          placeholder=" Enter domain"
          field="domain"
          type="text"
          handleChange={handleChange}
        />
        <Input
          value={code}
          placeholder=" Enter code"
          field="code"
          type="text"
          handleChange={handleChange}
        />
        <Input
          value={adress}
          placeholder=" Enter adress"
          field="adress"
          type="text"
          handleChange={handleChange}
        />
        <Input
          value={zone}
          placeholder="Enter zone"
          field="Zone"
          type="text"
          handleChange={handleChange}
        />
        <CustomButton
          type="submit"
          style={colorButton}
          field={"Create Account"}
        />
      </Form>
    </>
  );
}

export default CustomFormSignUp;
