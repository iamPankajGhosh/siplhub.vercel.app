import "./Button.css";
import ProtoType from "prop-types";
import { useNavigate } from "react-router-dom";

function Button({ goto, children, type }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(goto)}
      className={`btn btn-${type.toLowerCase()} has-before has-after`}
    >
      {children}
    </button>
  );
}

export default Button;

Button.ProtoType = {
  goto: ProtoType.string.isRequired,
  children: ProtoType.string.isRequired,
  type: ProtoType.string.isRequired,
};

Button.defaultProps = {
  goto: "/",
  children: "Button",
  type: "primary",
};
