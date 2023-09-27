import { useEffect, useState } from "react";
import DonatedCards from "./DonatedCards";


const Donation = () => {

    const [donation,setDonation]=useState([]);
    const [notFound,setNotFound] = useState("")
    const [open,setOpen]=useState(false)

    useEffect(()=>{
        const donatedCards=JSON.parse(localStorage.getItem('donate'))
        if(donatedCards){
            setDonation(donatedCards)
        }
        else{
            setNotFound("No data found!")
        }
    },[])

    return (
        <div className="max-w-[1300px] mx-auto my-10">
            {
                notFound? <p className="h-[60vh] flex justify-center items-center text-5xl font-extrabold text-red-600">No data found!!!</p> : <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            open? donation.map(card=><DonatedCards card={card} key={card.id}></DonatedCards>) : donation.slice(0,4).map(card=><DonatedCards card={card} key={card.id}></DonatedCards>)
                        }
                    </div>
                    <div className="text-center">
                    <button className={`${open? 'hidden' : ''} ${donation.length>4? 'bg-[#009444] text-white font-semibold py-3 px-7 rounded-lg mt-10' : ''} `} onClick={()=>setOpen(!open)}>{donation.length>4? 'See all' : ''}</button> 
                    </div>
                         
                    
                </div>
            }
        </div>
    );
};

export default Donation;