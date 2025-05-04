import React from "react";

import Slider from "../Slider/Slider.jsx";
import ServiceItem from "../ServiceItem/ServiceItem"
import "./SectionWrapper.scss"; // giả sử bạn có scss riêng

const SectionWrapper = (props) => {
  const { isSlider, items = [], title = "Tiêu đề Section", 
    buttonText = "Xem thêm",  
    onButtonClick,onClickItem  } = props;

  return (
    <div className="section-wrapper">
      <div className="wrapper-container">
        <div className="wrapper-header">
          <div className="mainTitle">{title}</div>
          <div className="btn-see-more">
            <button onClick={onButtonClick}>{buttonText}</button>
          </div>
        </div>

        <div className="wrapper-content">
          {isSlider ? (
            // Nếu isSlider = true => Hiển thị Slider
            <Slider items={items} onClickItem={onClickItem}/>
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
