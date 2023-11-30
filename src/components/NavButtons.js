import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const navButtons = () => {
  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>|
      <button onClick={() => navigate("/")}>home</button>
    </div>
  );
};
