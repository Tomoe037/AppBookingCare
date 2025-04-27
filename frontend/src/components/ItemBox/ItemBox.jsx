import "./ItemBox.scss";

const ItemBox = (props) => {
  const {
    image,
    subtitle,
    description,
    imageShape = "square",
    hasDescription = false
  } = props;

  return (
    <div className="itembox">
      <div className="itembox-container">
        <div className="box-img-container">
          <div
            className={`box-img ${imageShape}`}
            style={{ backgroundImage: `url(${image})` }}
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
