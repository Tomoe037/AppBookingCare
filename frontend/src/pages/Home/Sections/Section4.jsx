import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
const Section4 = () => {
  const groupItems = [
    { image: "https://cdn.bookingcare.vn/fo/w384/2024/03/17/195721-ban-da-hieu-ve-tiem-meso.jpg", subtitle: "Hỏi bác sĩ miễn phí"},
    { image: "https://cdn.bookingcare.vn/fo/w384/2024/03/17/195721-ban-da-hieu-ve-tiem-meso.jpg", subtitle: "Hỏi bác sĩ miễn phí"},
    { image: "https://cdn.bookingcare.vn/fo/w384/2024/03/17/195721-ban-da-hieu-ve-tiem-meso.jpg", subtitle: "Hỏi bác sĩ miễn phí 3" },
    { image: "https://cdn.bookingcare.vn/fo/w384/2024/03/17/195721-ban-da-hieu-ve-tiem-meso.jpg", subtitle: "Hỏi bác sĩ miễn phí 3" },
    { image: "https://cdn.bookingcare.vn/fo/w384/2024/03/17/195721-ban-da-hieu-ve-tiem-meso.jpg", subtitle: "Hỏi bác sĩ miễn phí 3" },
    { image: "https://cdn.bookingcare.vn/fo/w384/2024/03/17/195721-ban-da-hieu-ve-tiem-meso.jpg", subtitle: "Hỏi bác sĩ miễn phí 3" },
    { image: "https://cdn.bookingcare.vn/fo/w384/2024/03/17/195721-ban-da-hieu-ve-tiem-meso.jpg", subtitle: "Hỏi bác sĩ miễn phí 3" },
  ];
  return (
    <div className="section4">
     <SectionWrapper isSlider={true} items={groupItems} />
    </div>
  );
};
export default Section4;
