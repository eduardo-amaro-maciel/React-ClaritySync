import { Player } from "@lottiefiles/react-lottie-player";
import PeopleCall from "../../assets/lottie/animation_lkwsffei.json";

export default function PeopleCallAnimation() {
   return <Player src={PeopleCall} loop autoplay className="max-w-xl w-full" />;
}
