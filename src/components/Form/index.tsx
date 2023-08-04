export default function Form() {
   return (
      <section className="flex items-center justify-center bg-form pb-24">
         <div className="max-w-[1050px] w-full m-auto flex flex-col items-center">
            <h1 className="text-cor-preto tracking-wide text-6xl font-semibold mb-3 leading-[62px]">
               Entre em contato
            </h1>
            <span className="tracking-wide text-4xl text-cor-verde font-semibold leading-[52px] font-mono">
               Tire suas duvidas com a nossa equipe
            </span>
            <form className="mx-auto w-full max-w-[550px] mt-14">
               <div className="mb-5">
                  <label htmlFor="name" className="mb-3 block text-base font-medium text-cor-preta">
                     Full Name
                  </label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     placeholder="Full Name"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cor-laranja focus:shadow-md"
                  />
               </div>
               <div className="mb-5">
                  <label
                     htmlFor="email"
                     className="mb-3 block text-base font-medium text-cor-preta"
                  >
                     Email Address
                  </label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="example@domain.com"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cor-laranja focus:shadow-md"
                  />
               </div>
               <div className="mb-5">
                  <label
                     htmlFor="subject"
                     className="mb-3 block text-base font-medium text-cor-preta"
                  >
                     Subject
                  </label>
                  <input
                     type="text"
                     name="subject"
                     id="subject"
                     placeholder="Enter your subject"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cor-laranja focus:shadow-md"
                  />
               </div>
               <div className="mb-5">
                  <label
                     htmlFor="message"
                     className="mb-3 block text-base font-medium text-cor-preta"
                  >
                     Message
                  </label>
                  <textarea
                     rows={4}
                     name="message"
                     id="message"
                     placeholder="Type your message"
                     className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cor-laranja focus:shadow-md"
                  ></textarea>
               </div>
               <div>
                  <button className="hover:shadow-form rounded-md bg-cor-laranja py-3 px-8 text-base font-semibold text-white outline-none">
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </section>
   );
}
