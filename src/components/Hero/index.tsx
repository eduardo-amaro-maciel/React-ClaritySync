import AppointmentBookingAnimation from "../LottieAnimations/AppointmentBookingAnimation";
import DownloadButton from "../DownloadButton";

export default function Hero() {
   return (
      <section className="w-full mb-16" data-aos="fade-right">
         <div className="max-w-[1050px] m-auto flex gap-2">
            <div className="w-2/4 mt-2">
               <AppointmentBookingAnimation />
            </div>
            <div className="pt-20 w-2/4 flex flex-col gap-2">
               <span className="text-cor-preto tracking-wide text-6xl font-semibold mb-3 leading-[62px]">
                  A primeira tarefa do dia é se organizar.
               </span>
               <small className="tracking-wide text-4xl text-cor-verde font-semibold leading-[52px] font-mono">
                  Simplifique seu dia com ClaritySync.
               </small>
               <DownloadButton />
            </div>
         </div>
      </section>
   );
}
