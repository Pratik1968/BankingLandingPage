//import PagesInterface from "../interface/Page"

import { ReactNode } from "react";
import NavigationOption from "./NavigationOption";
import Logo from "./Logo";
import SignUpAndLoginButtonContainer from "./SignUpAndLoginButtonContainer";


export default function Navigation({setPageIndex,PageVar,PageIndex}:{setPageIndex:Function,PageVar:any,PageIndex:number}):ReactNode{
return(

    <div  className="self-center  bg-grey-11 lg:w-[90%] md:w-[95%] w-[98%] px-6 py-5  mt-7 rounded-[6.25rem] flex flex-row items-center z-[2]">
<Logo className=""/>
<NavigationOption  className="w-full h-full flex flex-row items-center gap-5 justify-center" setPageIndex ={setPageIndex} PageVar = {PageVar} PageIndex={PageIndex}/>
<SignUpAndLoginButtonContainer className="flex flex-row w-fit h-fit gap-3 items-center"/>
    </div>

);
}


