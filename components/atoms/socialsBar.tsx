import Link from "next/link"

export default function SocialsBar() {
    return(
        <div className="w-full flex flex-row flex-wrap justify-center gap-1 sm:gap-3">
            <Link href="https://www.linkedin.com/in/nicholas-gabriel-gonzales" className="p-1 hover:bg-(--iconhover) transition-colors duration-300 ease-in rounded-2xl">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.125 16.875C30.1141 16.875 32.0218 17.6956 33.4283 19.1562C34.8348 20.6168 35.625 22.5978 35.625 24.6635V33.75H30.625V24.6635C30.625 23.9749 30.3616 23.3146 29.8928 22.8277C29.4239 22.3408 28.788 22.0673 28.125 22.0673C27.462 22.0673 26.8261 22.3408 26.3572 22.8277C25.8884 23.3146 25.625 23.9749 25.625 24.6635V33.75H20.625V24.6635C20.625 22.5978 21.4152 20.6168 22.8217 19.1562C24.2282 17.6956 26.1359 16.875 28.125 16.875Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                    <path d="M9.375 18.75H15V33.75H9.375V18.75Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                    <path d="M15 12.1875C15 13.7408 13.7408 15 12.1875 15C10.6342 15 9.375 13.7408 9.375 12.1875C9.375 10.6342 10.6342 9.375 12.1875 9.375C13.7408 9.375 15 10.6342 15 12.1875Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                    <path d="M13.125 3.75H31.875C37.0527 3.75 41.25 7.94733 41.25 13.125V31.875C41.25 37.0527 37.0527 41.25 31.875 41.25H13.125C7.94733 41.25 3.75 37.0527 3.75 31.875V13.125C3.75 7.94733 7.94733 3.75 13.125 3.75Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                </svg>
            </Link>
            <Link href="https://github.com/frostinvoker/" className="p-1 hover:bg-(--iconhover) transition-colors duration-300 ease-in rounded-2xl ">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7981 33.4873C12.0673 35.4936 12.0673 30.1433 9.375 29.4745M18.7981 33.4873V32.3236C18.7534 31.6923 18.843 31.0588 19.061 30.4642C19.279 29.8697 19.6206 29.3274 20.0635 28.8726C15.8365 28.351 11.3942 26.7592 11.3942 19.5096C11.3842 17.6282 12.1079 15.8161 13.4135 14.4535C12.7998 12.8197 12.8432 11.0137 13.5346 9.41084C13.5346 9.41084 15.1231 8.94269 18.7981 11.3905C21.8834 10.5596 25.1358 10.5596 28.2212 11.3905C31.8962 8.94269 33.4846 9.41084 33.4846 9.41084C34.176 11.0137 34.2194 12.8197 33.6058 14.4535C34.9017 15.8061 35.6247 17.6019 35.625 19.4694C35.625 26.7726 31.1827 28.3643 26.9558 28.8325C27.4039 29.2918 27.7486 29.8407 27.9668 30.4427C28.1849 31.0446 28.2717 31.6858 28.2212 32.3236V37.5M18.7981 33.4873V37.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                    <path d="M13.125 3.75H31.875C37.0527 3.75 41.25 7.94733 41.25 13.125V31.875C41.25 37.0527 37.0527 41.25 31.875 41.25H13.125C7.94733 41.25 3.75 37.0527 3.75 31.875V13.125C3.75 7.94733 7.94733 3.75 13.125 3.75Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                </svg>
            </Link>
            <Link href="https://www.facebook.com/nicholasgabrielgonzales" className="p-1 hover:bg-(--iconhover) transition-colors duration-300 ease-in rounded-2xl">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 9.375H25.3977C23.3634 9.375 21.4124 10.0664 19.9739 11.2971C18.5354 12.5278 17.7273 14.197 17.7273 15.9375V19.875H13.125V25.125H17.7273V35.625H23.8636V25.125H28.4659L30 19.875H23.8636V15.9375C23.8636 15.5894 24.0253 15.2556 24.313 15.0094C24.6007 14.7633 24.9909 14.625 25.3977 14.625H30V9.375Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                    <path d="M13.125 3.75H31.875C37.0527 3.75 41.25 7.94733 41.25 13.125V31.875C41.25 37.0527 37.0527 41.25 31.875 41.25H13.125C7.94733 41.25 3.75 37.0527 3.75 31.875V13.125C3.75 7.94733 7.94733 3.75 13.125 3.75Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                </svg>
            </Link>
            <Link href="https://www.instagram.com/nikofox_5/" className="p-1 hover:bg-(--iconhover) transition-colors duration-300 ease-in rounded-2xl ">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.125 3.75H31.875C37.0527 3.75 41.25 7.94733 41.25 13.125V31.875C41.25 37.0527 37.0527 41.25 31.875 41.25H13.125C7.94733 41.25 3.75 37.0527 3.75 31.875V13.125C3.75 7.94733 7.94733 3.75 13.125 3.75Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                    <path d="M30 21.3188C30.2314 22.8792 29.9649 24.4729 29.2383 25.8732C28.5117 27.2734 27.3621 28.4089 25.953 29.1182C24.5439 29.8274 22.9471 30.0743 21.3896 29.8236C19.8321 29.573 18.3933 28.8377 17.2778 27.7222C16.1623 26.6067 15.427 25.1679 15.1764 23.6104C14.9258 22.0529 15.1726 20.4561 15.8819 19.047C16.5911 17.6379 17.7266 16.4883 19.1268 15.7617C20.5271 15.0352 22.1208 14.7686 23.6813 15C25.273 15.236 26.7466 15.9778 27.8844 17.1156C29.0223 18.2534 29.764 19.727 30 21.3188Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                    <path d="M32.8125 12.1875H32.8304" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#1797FF"/>
                </svg>
            </Link> 
        </div>
    );
}
