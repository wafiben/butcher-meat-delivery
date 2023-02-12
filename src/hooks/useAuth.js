import { authClient } from "./../services/authSevice";
import { useEffect, useState } from "react";
import { Auth } from "./../services/authSevice";
export const useAuthClient = () => {
  const { loginClient, signUpClient } = authClient();
  const [useInfoClient, setUserInfoClient] = useState({
    name: null,
    phone: null,
    email: null,
    password: null,
    confirmationPassword: null,
  });
  const [messageConfirmation, setMessageConfirmation] = useState("");
  const { password, confirmationPassword } = useInfoClient;
  const onChange = (e) => {
    setUserInfoClient({ ...useInfoClient, [e.target.name]: e.target.value });
  };
  const setTimeShow = () => {
    setTimeout(() => setMessageConfirmation(""), 3000);
  };
  const fetch = async () => {
    try {
      const { data } = await signUpClient(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(data);
    } catch (error) {
      console.log("ther is an error"); 
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmationPassword) {
      setMessageConfirmation("check your password passwords are not confirmed");
      setTimeShow();
    }
    if (password === confirmationPassword) {
      if (password.length < 4) {
        setMessageConfirmation("your password must be at least 4 caracter");
        setTimeShow();
      }
    }
    fetch();
  };

  return {
    useInfoClient,
    onChange,
    onSubmit,
    messageConfirmation,
  };
};
