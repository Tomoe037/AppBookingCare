import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import "./Section.scss"
import { faHospital, faStethoscope, faMicroscope } from "@fortawesome/free-solid-svg-icons";

const Section2 = () => {
  const serviceItems = [
    { icon: faHospital, nameService: "Khám chuyên khoa" },
    { icon: faStethoscope, nameService: "Khám tổng quát" },
    { icon: faMicroscope, nameService: "Xét nghiệm y học" },
  ];
  return (
    <div className="section2">
  <div>
      <SectionWrapper isSlider={false} items={serviceItems} />
    </div>
    </div>
  );
};
export default Section2;
