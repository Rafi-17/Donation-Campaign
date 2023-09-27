import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";
import {  useEffect, useState } from "react";

const Home = () => {

    const cards=useLoaderData();
    
    const [searchText,setSearchText] = useState('');
    const [displayJobs,setDisplayJobs] = useState([])


      
    const handleSubmit=e=>{
      
        e.preventDefault();
        setSearchText(e.target.search.value);
        const category=['health','education','clothing','food'];
        if(category[0]===searchText.toLowerCase()){
            const healthCards=cards.filter(card=>card.category==='Health')
            setDisplayJobs(healthCards)
        }
        else if(category[1]===searchText.toLowerCase()){
            const healthCards=cards.filter(card=>card.category==='Education')
            setDisplayJobs(healthCards)
        }
        else if(category[2]===searchText.toLowerCase()){
            const healthCards=cards.filter(card=>card.category==='Clothing')
            setDisplayJobs(healthCards)
        }
        else if(category[3]===searchText.toLowerCase()){
            const healthCards=cards.filter(card=>card.category==='Food')
            setDisplayJobs(healthCards)
        }
        
    }

    useEffect(()=>{
      setDisplayJobs(cards) 
    },[cards,searchText])

    

  return (
    <div>
      <Banner handleSubmit={handleSubmit}></Banner>
      <div className="max-w-[1350px] mx-auto my-24">
        <Cards displayJobs={displayJobs} searchText={searchText}></Cards>
      </div>
    </div>
  );
};

export default Home;
