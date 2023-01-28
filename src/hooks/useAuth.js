import { useEffect, useState } from "react";
export const useAuthClient = () => {
  const [useInfoClient, setUserInfoClient] = useState({
    role: "client",
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
  };
  return {
    useInfoClient,
    onChange,
    onSubmit,
    messageConfirmation,
  };
};
