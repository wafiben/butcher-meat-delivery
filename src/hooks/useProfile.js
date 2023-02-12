import { useNavigate } from "react-router-dom";
export const useProfile = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };
  return { handleNavigate };
};
