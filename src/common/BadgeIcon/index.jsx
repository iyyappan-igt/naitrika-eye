import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const BadgeIcon = ({ icon,size,color }) => {
  return (
    <h3 className={styles.dynamicicon}>
      <DynamicIcon name={icon} size={size} color={color} />
    </h3>
  );
};

export default BadgeIcon;
