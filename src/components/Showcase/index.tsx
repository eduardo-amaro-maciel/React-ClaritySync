import DownloadButton from "../DownloadButton";
import SearchingThroughListAnimation from "../LottieAnimations/SearchingThroughListAnimation";

export default function Showcase() {
   return (
      <section className="w-full">
         <div className="max-w-[1050px] m-auto flex gap-2">
            <div className="w-2/4 mt-2">
               <SearchingThroughListAnimation />
            </div>
            <div className="pt-20 w-2/4 flex flex-col gap-2">
               <span className="text-cor-preto tracking-wide text-6xl font-semibold mb-3 leading-[62px]">
                  Sem anúncios, sem cartão.
               </span>
               <small className="tracking-wide text-4xl text-cor-verde font-semibold leading-[52px] font-mono">
                  Totalmente grátis para uso pessoal.
               </small>
               <DownloadButton />
            </div>
         </div>
      </section>
   );
}
