import Title from "@/common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import BadgeIcon from "@/common/BadgeIcon";
import Button from "@/common/Button";
const Consultation = ({ consultationData }) => {
  return (
    <section className={styles.consultsec}>
      <div className="container">
        <Title
          title={"From Consultation to Clear Vision —"}
          spantitle={" In 3 Simple Steps"}
          spantitlecolor={"#2563eb"}
          subtitle={
            "Our streamlined process ensures you receive the best care with minimal hassle"
          }
        />

        <div className="my-md-5 my-4 d-flex  justify-content-center  gap-4 flex-wrap">
          {consultationData?.map((data, i) => (
            <div
              className={`${styles.consultcard} commonshadow my-3 mx-4 mx-md-0`}
            >
              <BadgeIcon icon={data?.icons} />
              <h4>{data?.name}</h4>
              <p>{data?.content}</p>

              {data?.points?.map((point, i) => (
                <div className="d-flex align-items-center my-3 gap-2">
                  <div className={styles.greenpoint}></div>
                  <h6>{point}</h6>
                </div>
              ))}

              <div className={`${styles.markpoint} position-absolute `}>{`0${
                i + 1
              }`}</div>
            </div>
          ))}
        </div>

        <div className={`text-center commonshadow ${styles.stories}`}>
          <h4>Ready to Start Your Journey to Better Vision?</h4>
          <p>Take the first step towards clearer sight with our expert care</p>
          <Button name={"Begin Your Treatment Today"} bgcolor={"#2563eb"} />
        </div>
      </div>
    </section>
  );
};

export default Consultation;
