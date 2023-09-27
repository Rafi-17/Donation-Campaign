import PropTypes from "prop-types";

const DonatedCards = ({ card }) => {

  const {  image, title, category, card_color, category_color, text_color,price } =card;
  return (
    <div className="max-w-xs md:max-w-[330px] lg:min-w-full mx-auto">
      <div style={{ backgroundColor: card_color }} className="lg:flex gap-6 rounded-lg">
        <img className="w-[60vw] lg:w-[13vw] h-[170px] md:h-[200px] lg:h-[190px]" src={image} alt="" />
        <div className="py-6">
          <span
            style={{ backgroundColor: category_color, color: text_color }}
            className="mx-auto md:mx-0 w-max py-1 px-2 rounded font-medium text-sm"
          >
            {category}
          </span>
          <p
              className="font-semibold mx-auto md:mx-0 text-black text-lg lg:text-2xl my-1"
              
            >
              {title}
            </p>
            <p className="font-semibold mb-2" style={{ color: text_color }}>${price}</p>
            <button style={{backgroundColor:text_color}} className="py-1 lg:py-2 px-2 lg:px-4 rounded font-semibold text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};


DonatedCards.propTypes = {
    card: PropTypes.object,
  };

export default DonatedCards;
