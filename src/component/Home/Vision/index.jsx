import Title from "@/common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import Button from "@/common/Button";
import BadgeIcon from "@/common/BadgeIcon";

const Vision = ({ visionData }) => {
  return (
    <section className={styles.visionsec}>
      <div className="container-fluid">
        <Title
          title={
            "Your Vision is Priceless — But Many Delay Treatment Due to Lack of"
          }
          spantitle={"Trusted, Advanced Care Nearby"}
          titlecolor={"#000"}
          spantitlecolor={"#2563eb"}
        />

        <div className="visiontype my-md-5 my-4 d-flex justify-content-center  gap-4 flex-wrap">
          {visionData?.map((data, i) => (
            <div
              className={`text-center ${styles.visioncard} commonshadow my-3 mx-3 mx-md-0`}
              key={i}
            >
              <div className="d-flex justify-content-center">
                <BadgeIcon icon={data?.icons} />
              </div>
              <h4>{data?.title}</h4>
              <p>{data?.content}</p>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <div className={`${styles.advancecare} commonshadow`}>
            <h4>
              Get the Same Advanced Care in Berhampur —{" "}
              <span>Without the Travel</span>
            </h4>
            <Button
              name={"Schedule Your Consultation"}
              icon={"arrow-right"}
              iconcolor={"#fff"}
              bgcolor={"#16a34a"}
              isbtn2={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
