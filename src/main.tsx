import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
