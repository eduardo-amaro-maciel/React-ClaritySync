import { Player } from "@lottiefiles/react-lottie-player";
import AppointmentBooking from "../../assets/lottie/animation_lkwsb4sf.json";

export default function AppointmentBookingAnimation() {
   return <Player src={AppointmentBooking} loop autoplay className="max-w-xl w-full" />;
}
