import "./ServiceItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
const ServiceItem = (props) => {
  const { icon, nameService } = props;

  return (
    <div className="service-item-container">
      <div className="service-item-icon">
        <FontAwesomeIcon className="icon" icon={icon} />
      </div>
      <div className="service-item-name">
        {nameService}
      </div>
    </div>
  );
};

export default ServiceItem;
