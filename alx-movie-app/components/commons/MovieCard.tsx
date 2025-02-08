// components/commons/MovieCard.tsx
import { MovieProps } from "@/interfaces";
import Image from "next/image";

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="h-[563px]">
      <div className="relative h-[430px] w-full">
        <Image 
          className="rounded-md hover:cursor-pointer object-cover"
          src={posterImage || '/placeholder.jpg'} 
          fill
          alt={title}
        />
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold truncate">{title}</p>
        <p className="text-xl text-[#E2D609] ml-2">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;