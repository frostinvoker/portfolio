import SocialsBar from "./atoms/socialsBar";
import Image from "next/image";

export default function ProfileCard() {
   return (
    <div className="w-full max-w-88 bg-white flex flex-col items-center text-left p-5 sm:p-8 rounded-2xl gap-4">
        <div className="w-4/5 max-w-64 aspect-square rounded-2xl overflow-hidden shrink-0">
            <Image src="/imgs/avatar.jpg" width={300} height={300} sizes="(max-width: 639px) 240px, 256px" alt="Nicholas avatar" loading="eager" className="w-full h-full object-cover" />
        </div>
        <h2>Nicholas Gabriel Gonzales</h2>
        <p className="mt-auto">A Software Developer who wants to pave its way to the top.</p>
        <SocialsBar/>
    </div>
   ); 
}
