import styles from "./styles.module.css";

const Badges = ({
    name,
    icon,
    imgSrc,
    bgcolor,
    color,
}) => {
    return (
        <div className={styles.bannerTag} style={{backgroundColor:bgcolor}}>
            {imgSrc && <img src={imgSrc} width="15px" height="15px" alt="" />}
            {icon}
            <p style={{ color}}>
                {name}</p>
        </div>
    );
};

export default Badges;