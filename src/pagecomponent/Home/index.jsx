import Banner from "@/component/Home/Banner";
import BestDeserve from "@/component/Home/BestDeserve";
import Checkup from "@/component/Home/Checkup";
import Consultation from "@/component/Home/Consultation";
import EyeCareSpecialist from "@/component/Home/EyeCareSpecialist";
import LimitedSlots from "@/component/Home/LimitedSlots";
import Testimonal from "@/component/Home/Testimonal";
import Vision from "@/component/Home/Vision";
import VisitEyeCare from "@/component/Home/VisitEyeCare";
import { bannerData } from "@/constant/Home/banner";
import { CheckupData } from "@/constant/Home/checkup";
import { consultationData } from "@/constant/Home/consultation";
import { eyecareSpecialistData } from "@/constant/Home/eyecareSpecialist";
import { TestimonalData } from "@/constant/Home/testimonal";
import { VisionData } from "@/constant/Home/vision";

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
