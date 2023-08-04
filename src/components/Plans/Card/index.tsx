import "./style.css";
import DownloadButton from "../../DownloadButton";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Card() {
   return (
      <div className="card">
         <span className="font-sans font-semibold text-cor-preto">Free</span>
         <ul className="list-disc flex pl-3 text-cor-preto font-semibold gap-2 flex-col">
            <li className="flex justify-between pr-2">
               <p>Item 1</p>
               <BsCheckCircleFill />
            </li>
            <li className="flex justify-between pr-2">
               <p>Item 1</p>
               <BsCheckCircleFill />
            </li>
            <li className="flex justify-between pr-2">
               <p>Item 1</p>
               <BsCheckCircleFill />
            </li>
            <li className="flex justify-between pr-2">
               <p>Item 1</p>
               <BsCheckCircleFill />
            </li>
            <li className="flex justify-between pr-2">
               <p>Item 1</p>
               <BsCheckCircleFill />
            </li>
         </ul>
         <span className="font-sans font-semibold text-cor-preto">
            <small>R$</small>0<small>/mês</small>
         </span>
         <div className="flex w-full items-center justify-center">
            <DownloadButton />
         </div>
      </div>
   );
}
