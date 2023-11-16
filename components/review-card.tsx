// Card for the customer reviews

import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ReviewCardProps {
    imgURL: StaticImageData;
    customerName: string;
    rating: number;
    feedback: string;
};


const ReviewCard:React.FC<ReviewCardProps> = ({ imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <Image 
        src={imgURL} 
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] "
        />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <Star className="w-6 h-6" />
        </div>
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard