import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {

    const cards=useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[1350px] mx-auto my-24">
        <Cards cards={cards}></Cards>
      </div>
    </div>
  );
};

export default Home;
