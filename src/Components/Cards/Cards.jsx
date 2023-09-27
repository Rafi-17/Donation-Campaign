import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Cards = ({displayJobs}) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 lg:px-0'>
            {
                displayJobs.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};


Cards.propTypes={
    displayJobs:PropTypes.array
}

export default Cards;