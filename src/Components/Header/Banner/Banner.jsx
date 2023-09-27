import background from '../../../../public/images/background.jpg'
import PropTypes from 'prop-types';
const Banner = ({handleSubmit}) => {

  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            `url(${background})`,
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-10">I Grow By Helping People In Need</h1>
            <form onSubmit={handleSubmit}>
            <input name='search' className='p-2 text-black md:p-4 md:w-96 border border-[#DEDEDE] ' placeholder='Search here....' type="text" />
            <input type='submit' value={'Search'} className="bg-[#FF444A] rounded-r-lg p-2 text-white md:py-4 md:px-6"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes={
  handleSubmit:PropTypes.func
}

export default Banner;
