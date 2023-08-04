import "./style.css";
import DownloadButton from "../../DownloadButton";

export default function Card() {
   return (
      <div className="card">
         <span className="font-sans font-semibold text-cor-preto">Free</span>
         <ul className="lista-pacotes">
            <li>
               Item 1 <i className="fa-solid fa-xmark"></i>
            </li>
            <li>
               Item 2 <i className="fa-solid fa-check"></i>
            </li>
            <li>
               Item 3 <i className="fa-solid fa-check"></i>
            </li>
            <li>
               Item 4 <i className="fa-solid fa-check"></i>
            </li>
            <li>
               Item 5 <i className="fa-solid fa-xmark"></i>
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
