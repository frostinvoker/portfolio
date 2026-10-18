import SocialsBar from "./atoms/socialsBar";
import Image from "next/image";

export default function ProfileCard() {
   return (
    <div className="w-3/5 h-7/8 max-h-144 bg-white flex flex-col items-center text-left p-8 rounded-2xl gap-2">
        <div className="w-4/5 h-72 rounded-2xl overflow-hidden">
            <Image src="/imgs/avatar.jpg" width={300} height={300} alt="Nicholas avatar" loading="eager" className="w-full h-full object-cover" />
        </div>
        <h2>Nicholas Gabriel Gonzales</h2>
        <p className="mt-auto">A Software Developer who wants to pave its way to the top.</p>
        <SocialsBar/>
    </div>
   ); 
}