import raza from "../../public/raza.jpg"
import Image from "next/image";
export default function HeroSvg() {
    return (
       <main>
       <Image src={raza} alt="raza" className="-mt-10 h-80 w-72 object-cover"  />
       </main>
    );
  }