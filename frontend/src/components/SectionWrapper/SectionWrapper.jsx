import React from "react";
import ItemBox from "../ItemBox/ItemBox";
import Slider from "../Slider/Slider";
import ServiceItem from "../ServiceItem/ServiceItem"
import "./SectionWrapper.scss"; // giả sử bạn có scss riêng

const SectionWrapper = (props) => {
  const { isSlider, items = [] } = props;

  return (
    <div className="section-wrapper">
      <div className="wrapper-container">
        <div className="wrapper-header">
          <div className="mainTitle">Tiêu đề Section</div>
          <div className="btn-see-more">
            <button>Xem thêm</button>
          </div>
        </div>

        <div className="wrapper-content">
          {isSlider ? (
            // Nếu isSlider = true => Hiển thị Slider
            <Slider items={items} />
          ) : (
            // Nếu isSlider = false => Hiển thị ServiceItem
            <div className="wrapper-group-boxs">
              {items.map((item, index) => (
                <div className="box" key={index}>
                 <ServiceItem
                   icon={item.icon} 
                   nameService={item.nameService} 
                 />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
