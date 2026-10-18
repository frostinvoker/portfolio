import Link from "next/link";

export default function Navbar() {
    return (
        <nav className=" bg-(--navbackground) flex flex-row justify-center gap-5 pl-15 pr-15 pt-1 pb-1 rounded-2xl">
            <Link href="#home" aria-label="Home" className="p-1 text-(--paltcolor) hover:bg-(--navhover) hover:text-(--naviconhover) transition-colors duration-300 ease-in rounded-2xl">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 11.25L15 2.5L26.25 11.25V25C26.25 25.663 25.9866 26.2989 25.5178 26.7678C25.0489 27.2366 24.413 27.5 23.75 27.5H6.25C5.58696 27.5 4.95107 27.2366 4.48223 26.7678C4.01339 26.2989 3.75 25.663 3.75 25V11.25Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
                    <path d="M11.25 27.5V15H18.75V27.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
                </svg>
            </Link>
            <Link href="#projects" aria-label="Projects" className="p-1 text-(--paltcolor) hover:bg-(--navhover) hover:text-(--naviconhover) transition-colors duration-300 ease-in rounded-2xl ">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 23.75C27.5 24.413 27.2366 25.0489 26.7678 25.5178C26.2989 25.9866 25.663 26.25 25 26.25H5C4.33696 26.25 3.70107 25.9866 3.23223 25.5178C2.76339 25.0489 2.5 24.413 2.5 23.75V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H11.25L13.75 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V23.75Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
                </svg>
            </Link>
            <Link href="#tools" aria-label="Tools" className="p-1 text-(--paltcolor) hover:bg-(--navhover) hover:text-(--naviconhover) transition-colors duration-300 ease-in rounded-2xl ">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3749 7.87504C18.1459 8.1087 18.0176 8.42285 18.0176 8.75004C18.0176 9.07723 18.1459 9.39137 18.3749 9.62504L20.3749 11.625C20.6086 11.8541 20.9227 11.9824 21.2499 11.9824C21.5771 11.9824 21.8913 11.8541 22.1249 11.625L26.8374 6.91254C27.466 8.30152 27.6563 9.84908 27.383 11.349C27.1097 12.8489 26.3858 14.2298 25.3078 15.3079C24.2297 16.3859 22.8488 17.1098 21.3489 17.3831C19.849 17.6564 18.3014 17.4661 16.9124 16.8375L8.27494 25.475C7.77766 25.9723 7.1032 26.2517 6.39994 26.2517C5.69668 26.2517 5.02222 25.9723 4.52494 25.475C4.02766 24.9778 3.74829 24.3033 3.74829 23.6C3.74829 22.8968 4.02766 22.2223 4.52494 21.725L13.1624 13.0875C12.5339 11.6985 12.3436 10.151 12.6169 8.6511C12.8902 7.15122 13.614 5.77023 14.6921 4.69219C15.7701 3.61415 17.1511 2.89025 18.651 2.61696C20.1509 2.34368 21.6985 2.53399 23.0874 3.16254L18.3874 7.86254L18.3749 7.87504Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
                </svg>
            </Link>
            <Link href="#contacts" aria-label="Contacts" className="p-1 text-(--paltcolor) hover:bg-(--navhover) hover:text-(--naviconhover) transition-colors duration-300 ease-in rounded-2xl ">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 2.5L13.75 16.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
                    <path d="M27.5 2.5L18.75 27.5L13.75 16.25L2.5 11.25L27.5 2.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
                </svg>
            </Link>
        </nav>
    );
}