import { Award, Badge, Calendar, Check, Clock, Clock1, GraduationCap, GraduationCapIcon, Heart, Mail, MapPin, Phone, Star, Users, Zap } from "lucide-react";
import styles from "./styles.module.css"
import Badges from "@/Common/Badge";
import Button from "@/Common/Button";

const VisitEyeCare = () => {
    return (
        <section className={`${styles.mainContainer} container-fluid`}>
            <h5 className={styles.title}>Visit <span>Naitrika Eye Care</span></h5>
            <p className={styles.description}>Conveniently located in the heart of Berhampur with easy access and ample parking</p>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.icon}><MapPin size={24} /></div>
                        <div className={styles.cardContent}>
                            <h5>Clinic Address</h5>
                            <p>1st Floor, Opp. Tahasildar Office,
                            </p>
                            <p>Komapalli, Berhampur,</p>
                            <p>Odisha – 760004</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><Phone size={24} /></div>
                        <div className={styles.cardContent}>
                            <h5>Contact Numbers</h5>
                            <p>
                                📱 9810087878 (Primary)</p>
                            <p>
                                📱 6372234590 (Secondary)</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><Mail size={24} /></div>
                        <div className={styles.cardContent}>
                            <h5>Email</h5>
                            <p>
                                naitrikaeyecare@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><Clock size={24} /></div>
                        <div className={styles.cardContent}>
                            <h5>Clinic Hours</h5>
                            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                            <p>Sunday: 10:00 AM - 2:00 PM</p>
                            <p>Emergency consultations available</p>
                        </div>
                    </div>
                </div>
                <div className={styles.location}>
                    <iframe
                        src="https://www.google.com/maps?q=1st+Floor,+Opp.+Tahasildar+Office,+Komapalli,+Berhampur,+Odisha+760004&output=embed"
                        width="600"
                        height="350"
                        style={{ border: "0", borderRadius: "10px" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className={styles.buttonGroup}>
                        <Button name="Get Directions" bgcolor={"#2563eb"} isbtn1={true} icon={"navigation"} />
                        <Button name="Parking Info" bgcolor="#16a34a" icon={"car"} isbtn1={true}  />
                    </div>
                    <div className={styles.gettingFree}>
                        <h5>Getting Here</h5>
                        <p>🚗 Free parking available on-site</p>
                        <p>🚌 Well connected by public transport</p>
                        <p>🏥 Near Tahasildar Office (easy landmark)</p>
                        <p>♿ Wheelchair accessible entrance</p>
                    </div>
                </div>
            </div>
            <div className={styles.emergency}>
                <h5>Emergency Eye Care</h5>
                <p>For urgent eye emergencies, call us immediately</p>
                <Button name="Emergency Hotline: 9810087878" bgcolor="#fff"  />
            </div>
        </section>
    );;
}

export default VisitEyeCare;
