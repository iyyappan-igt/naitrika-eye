import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";
import Button from "../Button";
import { useEffect, useState } from "react";

const Footer = () => {
  const [stable, setstable] = useState(false);

  useEffect(() => {
    // document.getElementById("stable").style.display = "block";
    setstable(true);
  }, []);

  return (
    <>
      <section className={styles.footersec}>
        <div className={styles.footertop}>
          <h4>Naitrika Eye Care</h4>
          <p>
            Advanced Eye Care You Can Trust • Led by Dr. Aswini Kumar Behera
            (AIIMS New Delhi)
          </p>
        </div>

        <div className={styles.footerbottom}>
          <p>
            © 2025 Naitrika Eye Care. All rights reserved. |1st Floor, Opp.
            Tahasildar Office, Komapalli, Berhampur, Odisha – 760004
          </p>
        </div>
      </section>

      {stable ? (
        <div className={`${styles.stablediv} d-md-none d-block `}>
          <div className={`d-flex justify-content-between ${styles.stabletop}`}>
            <p>Book Your Eye Consultation</p>
            <DynamicIcon
              name="x"
              size={16}
              onClick={() => {
                setstable(false);
              }}
            />
          </div>

          <div
            className={`d-flex justify-content-center gap-3 my-3  ${styles.stablebottom}`}
          >
            <Button
              name={"Book Online"}
              icon={"calendar"}
              isbtn1={true}
              bgcolor={"#2563eb"}
            />
            <Button
              name={"Call Now"}
              icon={"phone"}
              isbtn1={true}
              bgcolor={"#16a34a"}
            />
          </div>

          <p>AIIMS-trained specialist • Advanced FLACS technology</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
