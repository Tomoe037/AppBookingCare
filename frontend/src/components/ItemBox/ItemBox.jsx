import "./ItemBox.scss";

const ItemBox = (props) => {
  const {
    image,
    subtitle,
    description,
    imageShape = "square",
    hasDescription = false,
    onClick 
  } = props;

  return (
    <div className="itembox"  onClick={onClick}>
      <div className="itembox-container">
        <div className="box-img-container">
          <div
            className={`box-img ${imageShape}`}
            style={{ backgroundImage: image ? `url(${image})` : "none" }}
          
          />
        </div>
  
        <div className="box-subTitle">{subtitle}</div>

        {hasDescription && description && (
          <div className="box-des">{description}</div>
        )}
      </div>
    </div>
  );
};

export default ItemBox;
