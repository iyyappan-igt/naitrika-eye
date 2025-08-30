import styles from "./styles.module.css";

const Title = ({
  title,
  subtitle,
  spantitle,
  titlecolor,
  spantitlecolor,
  subtitlecolor,
}) => {
  return (
    <div className={styles.commntitle}>
      <div
        className={`text-center d-flex justify-content-center ${styles.title}`}
      >
        <h2 style={{ color: titlecolor }}>
          {`${title} `}
          <span style={{ color: spantitlecolor }}>{spantitle}</span>
        </h2>
      </div>

      {subtitle ? (
        <div
          className={` text-center d-flex justify-content-center  mt-3 ${styles.subtitle}`}
          style={{ color: subtitlecolor }}
        >
          <p>{subtitle}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Title;
