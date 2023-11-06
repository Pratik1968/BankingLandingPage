import { ReactNode } from "react";

export default function NavigationOption({setPageIndex,PageVar,className,PageIndex}:{setPageIndex:Function,PageVar:any,className:string,PageIndex:Number}):ReactNode{
    return(
        <ul className={className}>
            <li className={`cursor-pointer ${PageIndex==PageVar.HOME?"bg-grey-15 transition duration-700 ease-in-out px-3 py-2 rounded-2xl":""}`} onClick={function(){setPageIndex(PageVar.HOME); }
            }>Home</li>
            <li className={`cursor-pointer ${PageIndex==PageVar.CARRER?"bg-grey-15 transition duration-700 ease-in-out  px-3 py-2 rounded-2xl":""}`} onClick={function(){setPageIndex(PageVar.CARRER)}}>Carrer</li>
            <li className={`cursor-pointer ${PageIndex==PageVar.ABOUT?"bg-grey-15 transition duration-700 ease-in-out px-3 py-2 rounded-2xl":""}`} onClick={function(){setPageIndex(PageVar.ABOUT)}}>About</li>
            <li className={`cursor-pointer ${PageIndex==PageVar.SECURITY?"bg-grey-15  transition duration-700 ease-in-out px-3 py-2 rounded-2xl":""}`} onClick={function(){setPageIndex(PageVar.SECURITY)}}>Security</li>
        </ul>
    );
}