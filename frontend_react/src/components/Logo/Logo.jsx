import { Link } from "react-router-dom";
import images from "../../constants/images";
import ProtoType from "prop-types";

function Logo({ onClick, width }) {
  return (
    <Link to="/" className="logo" onClick={onClick}>
      <img
        src={images.logoLight}
        width={width}
        loading="lazy"
        alt="Sikharthy Infotech"
      />
    </Link>
  );
}

export default Logo;

Logo.ProtoType = {
  width: ProtoType.string,
  onClick: ProtoType.func,
};

Logo.defaultProps = {
  width: "150px",
  onClick: () => console.log("clicked"),
};
