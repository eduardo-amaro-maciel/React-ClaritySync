import PeopleCallAnimation from "../LottieAnimations/PeopleCallAnimation";
import DownloadButton from "../DownloadButton";

export default function Management() {
   return (
      <section className="w-full" data-aos="fade-left">
         <div className="max-w-[1050px] m-auto flex gap-2">
            <div className="w-2/3 flex flex-col gap-2">
               <span className="text-cor-preto tracking-wide text-6xl font-semibold mb-3 leading-[62px]">
                  Otimize suas tarefas com eficiência.
               </span>
               <small className="tracking-wide text-4xl text-cor-verde font-semibold leading-[52px] font-mono">
                  Isso não é magia, é tecnologia.
               </small>
               <DownloadButton />
            </div>
            <div className="w-2/4 mt-2">
               <PeopleCallAnimation />
            </div>
         </div>
      </section>
   );
}
