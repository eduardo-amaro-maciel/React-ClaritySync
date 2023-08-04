import Card from "./Card";

export default function Plans() {
   return (
      <section className="w-full my-24" data-aos="fade-right">
         <div className="max-w-[1050px] m-auto">
            <div className="mb-3 max-w-[850px] m-auto flex items-center flex-col">
               <h1 className="text-cor-preto tracking-wide text-6xl font-semibold mb-3 leading-[62px]">
                  Nossos pacotes
               </h1>
               <span className="tracking-wide text-4xl text-cor-verde font-semibold leading-[52px] font-mono">
                  Sempre tem algum que se encaixa com você.
               </span>
            </div>
            <div className="container-card-pacotes" data-aos="fade-up">
               {[0, 1, 2, 3].map((i) => (
                  <Card key={i} />
               ))}
            </div>
         </div>
      </section>
   );
}
