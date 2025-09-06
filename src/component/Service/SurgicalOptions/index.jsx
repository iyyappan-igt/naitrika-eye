import Title from "@/common/Title";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import BadgeIcon from "@/common/BadgeIcon";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";

const SurgicalOptions = ({ data }) => {
  return (
    <section className={styles.visionsec}>
      <div className="container-lg">
        <Title
          title={
            data?.title
          }
          spantitle={data?.titlebold}
          titlecolor={"#000"}
          spantitlecolor={"#2563eb"}
        />

        <div className={`${styles.itemsContainer} my-md-5 my-4 d-flex justify-content-xxl-between align-items-stretch justify-content-center h-auto  gap-4 flex-wrap`}>
        {
            data?.points?.map((item,index)=>(
                <div className={`${styles.itemContent} d-flex justify-content-start align-items-start gap-3`}>
                    <div className="mt-1">
                        <h4>{item?.title}</h4>
                    <DynamicIcon name="circle-check-big" size={24} color="#2563eb" />
                    </div>
                    <p>{item?.description}</p>
                </div> 
            ))
        }
      </div>
              </div>
    </section>
  );
};

export default SurgicalOptions;
