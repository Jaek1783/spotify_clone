'use client';

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Button from "./Button";
interface HeaderProps {
    children : React.ReactNode;
    className? : string;
}
const Header:React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();
    const handleLogout = ()=>{
        //later logout
    }
    return ( 
        <div className={twMerge(`
             h-fit
             bg-gradient-to-b
             from-emerald-800
             p-6
        `, className)}>
             <div className="
                w-full
                mb-4
                flex
                items-center
                justify-between
             ">
                <div className="
                    hidden
                    md:flex
                    gap-x-2
                    items-center
                ">
                    <button 
                    onClick={()=>router.back()}
                    className="
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                        transition
                        hover:opacity-75
                    ">
                        <RxCaretLeft size={30} className="text-white"/>
                    </button>
                    <button 
                    onClick={()=>router.forward()}                    
                    className="
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                        transition
                        hover:opacity-75
                    ">
                        <RxCaretRight size={30} className="text-white"/>
                    </button>
                </div>
                <div className="
                    flex
                    md:hidden
                    gap-x-2
                    items-center
                ">
                    <button 
                        onClick={()=>router.forward()}                    
                        className="
                            rounded-full
                            p-2
                            bg-black
                            flex
                            items-center
                            justify-center
                            transition
                            hover:opacity-75
                        ">
                            <HiHome size={20}/> 
                    </button>
                    <button 
                        onClick={()=>router.forward()}                    
                        className="
                            rounded-full
                            p-2
                            bg-black
                            flex
                            items-center
                            justify-center
                            transition
                            hover:opacity-75
                        ">
                            <BiSearch size={20}/> 
                    </button>
                </div>
                <div className="
                    flex
                    justify-between
                    tems-center
                    gap-x-4
                ">
                    <>
                        <div>
                            <Button
                                className="
                                    bg-transparent
                                    text-neutral-300
                                    font-medium
                                "
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="
                                    bg-white
                                    px-6
                                    py-2
                                "
                            >
                                Login
                            </Button>
                        </div>
                    </>
                </div>
             </div>
             {children}
        </div>
     );
}
 
export default Header;