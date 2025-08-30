import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const BadgeIcon = ({ icon }) => {
  return (
    <h3 className={styles.dynamicicon}>
      <DynamicIcon name={icon} size={32} />
    </h3>
  );
};

export default BadgeIcon;
