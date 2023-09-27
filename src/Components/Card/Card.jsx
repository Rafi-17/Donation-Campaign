import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, image, title, category, card_color, category_color, text_color } = card;

  return (
    <div>
      <Link to={`card/${id}`}>
        <div
          style={{ backgroundColor: card_color }}
          className="card-compact md:rounded-lg"
        >
          <figure>
            <img
              className="w-full h-[280px] md:h-[240px] lg:h-[200px] md:rounded-t-lg	"
              src={image}
              alt=""
            />
          </figure>
          <div className="card-body">
            <span
              style={{ backgroundColor: category_color, color: text_color }}
              className="mx-auto md:mx-0 w-max py-1 px-2 rounded font-medium"
            >
              {category}
            </span>
            <p
              className="font-semibold mx-auto md:mx-0"
              style={{ color: text_color }}
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};
export default Card;
