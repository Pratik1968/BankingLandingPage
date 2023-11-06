import { ReactNode } from "react";
import Logo_desktop from "../assets/Logo_Desktop.svg";
import Logo_laptop from "../assets/Logo_Laptop.svg";
import Logo_mobile from "../assets/Logo_Mobile.svg";

export default function Logo({className}:{className:string}):ReactNode{
    return(
<picture className={`${className}`} >
    <source media="(min-width: 1280px)" srcSet={Logo_desktop}/>
    <source media="(min-width: 768px)" srcSet={Logo_laptop}/>
    <img src={Logo_mobile}/>

</picture>
        );
}