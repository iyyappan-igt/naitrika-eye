import BestDeserve from "@/Component/Home/BestDeserve";
import EyeCareSpecialist from "@/Component/Home/EyeCareSpecialist";
import LimitedSlots from "@/Component/Home/LimitedSlots";
import VisitEyeCare from "@/Component/Home/VisitEyeCare";
import HomePageComponent from "@/pagecomponent/Home";

export default function Home() {
  return (
    <>
      <HomePageComponent />
      <EyeCareSpecialist />
      <LimitedSlots />
      <VisitEyeCare />
      <BestDeserve />
    </>
  );
}
