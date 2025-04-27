import './Banner.scss'


const Banner = ({ imgUrl }) => {
    return (
      <div className="banner">
        <div className="banner-container">
          <div
            className="banner-img"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  