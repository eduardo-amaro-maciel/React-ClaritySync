import FiveStarAnimation from "../../LottieAnimations/FiveStarAnimation";

type CardProps = {
   name: string;
   image: string;
   note: string;
   description: string;
};

export default function Card({ name, description, image, note }: CardProps) {
   return (
      <div className="w-full flex items-center justify-center gap-16">
         <div className="">
            <img src={image} alt="imagem de usuario" className="" />
         </div>
         <div className="flex flex-col gap-5 flex-1">
            <span className="text-5xl text-cor-preto font-sans font-semibold">{name}</span>
            <p className="text-xl text-cor-preto font-mono font-medium">{description}</p>
            <div className="flex ml-[-20px] items-center">
               <FiveStarAnimation />
               <strong className="text-2xl ml-5 text-cor-laranja">{note}</strong>
            </div>
         </div>
      </div>
   );
}
