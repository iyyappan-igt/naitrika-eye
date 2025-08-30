import Checkup from "@/component/Home/Checkup";
import Consultation from "@/component/Home/Consultation";
import Testimonal from "@/component/Home/Testimonal";
import Vision from "@/component/Home/Vision";
import { CheckupData } from "@/constant/checkup";
import { consultationData } from "@/constant/consultation";
import { TestimonalData } from "@/constant/testimonal";
import { VisionData } from "@/constant/vision";

const HomePageComponent = () => {
  return (
    <>
      <Vision visionData={VisionData} />

      <Checkup checkupData={CheckupData}/>

      <Testimonal testimonalData={TestimonalData}/>

      <Consultation consultationData={consultationData}/>
    </>
  );
};

export default HomePageComponent;
