import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button variant={"ghost"} >
                    <Image 
                    src={"/flag_france.png"} 
                    height={24} 
                    width={32} 
                    alt="French Flag" 
                    className="mr-4 rounded-md"/>
                    French
                </Button>
                <Button variant={"ghost"}>
                    <Image 
                    src={"/flag_uk.png"} 
                    height={24} 
                    width={32} 
                    alt="UK Flag" 
                    className="mr-4 rounded-md"/>
                    English
                </Button>
                <Button variant={"ghost"}>
                    <Image 
                    src={"/flag_spain.png"} 
                    height={24} 
                    width={32} 
                    alt="Spain Flag" 
                    className="mr-4 rounded-md"/>
                    Spanish
                </Button>
            </div>
        </footer>
    );
}