import Banner from "@/component/Home/Banner";
import BestDeserve from "@/component/Home/BestDeserve";
import Checkup from "@/component/Home/Checkup";
import Consultation from "@/component/Home/Consultation";
import EyeCareSpecialist from "@/component/Home/EyeCareSpecialist";
import LimitedSlots from "@/component/Home/LimitedSlots";
import Testimonal from "@/component/Home/Testimonal";
import Vision from "@/component/Home/Vision";
import VisitEyeCare from "@/component/Home/VisitEyeCare";
import { bannerData } from "@/constant/banner";
import { CheckupData } from "@/constant/checkup";
import { consultationData } from "@/constant/consultation";
import { eyecareSpecialistData } from "@/constant/eyecareSpecialist";
import { TestimonalData } from "@/constant/testimonal";
import { VisionData } from "@/constant/vision";

const HomePageComponent = () => {
  return (
    <>
      <Banner bannerData={bannerData} />

      <Vision visionData={VisionData} />

      <EyeCareSpecialist specialistData={eyecareSpecialistData} />

      <Checkup checkupData={CheckupData} />

      <Testimonal testimonalData={TestimonalData} />

      <Consultation consultationData={consultationData} />

      <LimitedSlots />

      <VisitEyeCare />

      <BestDeserve />
    </>
  );
};

export default HomePageComponent;
