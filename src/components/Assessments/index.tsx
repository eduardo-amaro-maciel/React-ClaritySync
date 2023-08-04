import Card from "./Card";
import usersAssessments from "./usersAssessments";

export default function Assessments() {
   return (
      <section className="w-full" data-aos="fade-left">
         <div className="max-w-[850px] m-auto flex items-center flex-col">
            <h1 className="text-cor-preto tracking-wide text-6xl font-semibold mb-3 leading-[62px]">
               Nossas Avaliações
            </h1>
            <span className="tracking-wide text-4xl text-cor-verde font-semibold leading-[52px] font-mono">
               Conte conosco para lhe ajudar
            </span>
            <div className="w-full flex flex-col gap-14 mt-20">
               {usersAssessments.map((e, i) => (
                  <Card {...e} key={i} />
               ))}
            </div>
         </div>
      </section>
   );
}
