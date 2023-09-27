import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find((card) => card.id == id);
    const { image,  title, description, price, text_color } = card;

    const handleAddDonate=()=>{
        const addedDonated=[];
        const donatedCards=JSON.parse(localStorage.getItem('donate'))
        if(!donatedCards){
            addedDonated.push(card)
            localStorage.setItem('donate', JSON.stringify(addedDonated))
            swal("Good job!", "Donated Successfully!", "success");
        }
        else{
            const isExist=donatedCards.find(donateCard=>donateCard.id===card.id)
            if(!isExist){
                addedDonated.push(...donatedCards,card);
                localStorage.setItem('donate', JSON.stringify(addedDonated))
                swal("Good job!", "Donated Successfully!", "success");
            }
            else{
                swal("Sorry!", "Already Donated!", "error");
            }

        }
    }
    
  return (
    <div className="max-w-[1300px] mx-auto my-10">
      <div
        className="hero place-items-baseline min-h-[100vh]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay col-start-1 row-start-5 bg-black bg-opacity-60 flex "></div>
      </div>
      <div className="absolute top-[670px] lg:top-[825px] left-[20px] lg:left-36">
        <button onClick={handleAddDonate} style={{ backgroundColor: text_color }} className="py-4 px-6 rounded text-white font-semibold">Donate ${price}</button>
        </div>
      
      <h3 className="text-black font-bold text-4xl mt-14 px-2 lg:px-0">{title}</h3>
      <p className="text-[#0B0B0B] mt-6 px-2 lg:px-0">{description}</p>
    </div>
  );
};

export default CardDetails;
