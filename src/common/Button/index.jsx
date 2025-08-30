import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const Button = ({
  name,
  icon,
  isbtn1,
  isbtn2,
  bgcolor,
  iconcolor,
}) => {
  return (
    <button
      style={{ backgroundColor: bgcolor }}
      className={styles.commonbutton}
    >
      {isbtn1 ? (
        <div className="d-flex justify-content-center align-items-center gap-3">
          <DynamicIcon name={icon} color={iconcolor} />
          <h6>{name}</h6>
        </div>
      ) : isbtn2 ? (
        <div className="d-flex justify-content-center align-items-center gap-3">
          <h6>{name}</h6>
          <DynamicIcon name={icon} color={iconcolor} />
        </div>
      ) : (
        <div className="text-center">
          <h6>{name}</h6>
        </div>
      )}
    </button>
  );
};

export default Button;
