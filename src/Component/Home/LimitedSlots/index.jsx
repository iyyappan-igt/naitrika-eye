import { Award, Badge, Calendar, Check, Clock, Clock1, GraduationCap, GraduationCapIcon, Heart, Phone, Star, Users, Zap } from "lucide-react";
import styles from "./styles.module.css"
import Badges from "@/Common/Badge";
import Button from "@/Common/Button";

const LimitedSlots = () => {
    return (
        <section className={`${styles.mainContainer} container-fluid`}>
            <div className={styles.container}>
                <div className={styles.mainCard}>
                    <div className={styles.slotAvailable}>
                        <div className={styles.clockIcon}>
                            <Clock color="#ea5b10" size={24} strokeWidth={2.25} />
                        </div>
                        <div className={styles.slotsContent}>
                            <h2><span>Limited Slots Available</span> for FLACS Cataract Surgery</h2>
                            <p>Advanced Femtosecond Laser-Assisted Cataract Surgery allows full recovery in as little as 1 day</p>
                        </div>
                    </div>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <Zap size={25} strokeWidth={2.25} />
                            <div className={styles.cardContent}>
                                <h6>No-Stitch Surgery</h6>
                                <p>Minimally invasive</p>
                            </div>

                        </div>
                        <div className={styles.card}>
                            <Clock size={24} strokeWidth={2.25} />
                            <div className={styles.cardContent}>
                                <h6>Quick Recovery</h6>
                                <p>Resume normal activities</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Calendar size={25} strokeWidth={2.25} />
                            <div className={styles.cardContent}>
                                <h6>Same-Day Discharge</h6>
                                <p>
                                    Go home the same day</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.onlySlots}>
                        <div className={styles.slotsTitle}><div className={styles.circle}></div><h5>Only 8 slots remaining this month</h5></div>
                        <p>Due to high demand for our advanced FLACS technology, appointment slots are filling quickly. Book now to secure your preferred date and avoid waiting.</p>
                    </div>
                    <div className={styles.secureSlot}>
                        <Button icon={"arrow-right"} name="Secure Your Slot Now" isbtn2={true} bgcolor={"#ea580c"}></Button>
                        <p><span><Clock1 size={20} strokeWidth={2.25} style={{paddingRight:"3px"}} /> Fast booking: </span> Get confirmation within 2 hours</p>
                        <p>call <span>9810087878 </span>for immediate assistance</p>
                    </div>
                </div>
                <div className={styles.subCards}>
                    <div className={styles.subCard1}>
                        <h5>Don't Wait - Vision Problems Worsen</h5>
                        <p>Delaying treatment can lead to complications. Early intervention ensures better outcomes.</p>
                    </div>
                    <div className={styles.subCard2}>
                  <h5>Weekend & Evening Slots Available</h5>
                        <p>Flexible scheduling to accommodate your busy lifestyle. Book the time that works for you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LimitedSlots;
