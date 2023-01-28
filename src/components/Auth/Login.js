import Input from "../../atoms/Input";
import Form from "react-bootstrap/Form";
import CustomButton from "../../atoms/Button";
import { colorButton, colorButtonCreate } from "../../styles";
import React, { useState } from "react";

import { styleForm } from "../../styles";
import TextFiled from "../../atoms/textFiled";
import { styleTextFilead } from "../../styles";

function Login() {
  const [{ email, password }, setUser] = useState({
    email: null,
    password: null,
  });
  const handleClick = () => {};
  const handleChange = (e) => {};
  return (
    <Form
      className="w-25 p-3 container text-start fw-bold shadow-inner"
      style={styleForm}
    >
      <Input
        className="text-bold"
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
      <TextFiled
        textFiled="forget password"
        className="text-uppercase"
        style={styleTextFilead}
      />

      <CustomButton type="submit" style={colorButton} field={"Sign in"} />
      <br />
      <CustomButton
        type="submit"
        field={"Create An Account"}
        style={colorButtonCreate}
      />
    </Form>
  );
}

export default Login;
