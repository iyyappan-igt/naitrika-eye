import { Award, Badge, Calendar, Check, GraduationCap, GraduationCapIcon, Heart, Phone, Star, Users } from "lucide-react";
import styles from "./styles.module.css"
import Badges from "@/Common/Badge";

const EyeCareSpecialist = () => {
    return (
        <section className={`${styles.mainContainer} container-fluid`}>
            <div className={styles.container}>
                <div className={styles.mainImageContainer}>
                    <div className={styles.containerImage}>
                        <img src="assets/eyecareSpecialist.jpeg" alt="" />
                        <p className={styles.tag}>
                            AIIMS Trained
                        </p>
                    </div>
                </div>
                <div className={styles.containerContent}>
                    <h2 className={styles.title}>Meet <span className={styles.span1}>Dr. Aswini Kumar Behera </span> — Your Trusted Eye Care Specialist</h2>
                    <p className={styles.description}>With extensive training from AIIMS New Delhi and years of surgical excellence, Dr. Behera brings world-class ophthalmology expertise directly to Berhampur. His commitment to compassionate care and cutting-edge technology ensures every patient receives the best possible treatment.</p>
                    <div className={styles.bannerDetails}>
                        <div className={styles.detailItem}>
                            <div className={styles.itemIcon}>
                                <GraduationCapIcon color="#3b73ed" size={25} strokeWidth={2} />
                            </div>
                            <div className={styles.itemContent}>
                                <h5>AIIMS New Delhi</h5>
                                <p>Former Senior Resident at India's premier medical institute</p>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <div className={styles.itemIcon}>
                                <Award color="#3b73ed" size={25} strokeWidth={2} />
                            </div>
                            <div className={styles.itemContent}>
                                <h5>Advanced Surgical Experience</h5>
                                <p>Expert in FLACS, glaucoma, and pediatric eye care procedures</p>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <div className={styles.itemIcon}>
                                <Users color="#3b73ed" size={25} strokeWidth={2} />
                            </div>
                            <div className={styles.itemContent}>
                                <h5>Thousands of Patients</h5>
                                <p>Successfully treated patients across ophthalmology specialties</p>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <div className={styles.itemIcon}>
                                <Heart color="#3b73ed" size={25} strokeWidth={2} />
                            </div>
                            <div className={styles.itemContent}>
                                <h5>Community Focused</h5>
                                <p>Bringing world-class eye care to Southern Odisha</p>
                            </div>
                        </div>
                    </div>
                    <hr style={{ border: "1px solid #c7c3c3ff", width: "100%" }} />
                    <div className={styles.badgeContainer}>
                        <Badges name={"✓ AIIMS Certified"} bgcolor="#eff6ff" color="#2554d9" />
                         <Badges name={"✓ 15+ Years Experience"} bgcolor="#f0fdf4" color="#1e8545" />
                          <Badges name={"✓ Advanced FLACS Training"} bgcolor="#faf5ff" color="#9042d5" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EyeCareSpecialist;
