import logo from "../../assets/images/logo-preta.png";

export default function Header() {
   return (
      <div
         data-aos="fade-down"
         className="shadow-xl px-5 border-black bg-white z-20 border-2 rounded-full flex justify-between max-w-[1050px] m-auto sticky top-4 w-full py-3 items-center"
      >
         <img src={logo} alt="logo" className="h-6" />
         <ul className="flex gap-6 text-black font-medium items-center">
            <li>Sobre</li>
            <li>Preços</li>
            <li>Contato</li>
            <li>Login</li>
            <li className="bg-cor-verde py-1 px-6 rounded-full">Cadastre-se</li>
         </ul>
      </div>
   );
}
