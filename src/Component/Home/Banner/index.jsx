import { Calendar, Phone, Star } from "lucide-react";
import styles from "./styles.module.css"
import Button from "@/Common/Button";

const Banner = () => {
    return (
        <section className={`${styles.mainContainer} container-fluid`}>
            <div className={styles.container}>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerTag}>
                        <img src="assets/star.png" width="15px" height="15px" alt="" />
                        <p>
                            AIIMS Trained • Advanced Care</p>
                    </div>
                    <h2 className={styles.title}>From<span className={styles.span1}> AIIMS </span> to Berhampur — <span className={styles.span2}> Advanced Eye Care </span>You Can Trust</h2>
                    <p className={styles.description}>Led by <span>Dr. Aswini Kumar Behera</span> (AIIMS New Delhi), Naitrika Eye Care delivers world-class cataract, glaucoma, laser, and pediatric ophthalmology treatments with compassion and precision.</p>
                    <div className={styles.buttonGroup}>
                         <Button name="Book Your Appointment Now" isbtn1={true} icon={"calendar"} bgcolor=" #2563eb" />
                        <button className={styles.button2}><Phone size={20} />Call Now</button>
                    </div>
                    <hr style={{ border: "1px solid #c7c3c3ff", width: "90%" }} />
                    <div className={styles.bannerDetails}>
                        <div className={styles.detailItem}>
                            <h5>1000+</h5>
                            <p>Surgeries</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h5>15+</h5>
                            <p>Years Experience</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h5>100%</h5>
                            <p>Success Rate</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bannerImage}>
                    <img src="assets/bannerImage.webp" alt="" />
                    <div className={styles.doctorCard}>
                        <h3>Dr. Aswini Kumar Behera</h3>
                        <p>AIIMS New Delhi • Senior Resident</p>
                        <div className={styles.doctorSpecialties}>
                            <span>• FLACS Specialist</span>
                            <span>• Glaucoma Expert</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
