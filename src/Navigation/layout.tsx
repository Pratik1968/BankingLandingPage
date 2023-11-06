//import PagesInterface from "../interface/Page"

import { ReactNode,useState } from "react";
import NavigationOption from "./NavigationOption";
import Logo from "./Logo";
import SignUpAndLoginButtonContainer from "./SignUpAndLoginButtonContainer";
import Menu from "./Menu/layout";
import PopMenu from "./PopMenu/layout";


export default function Navigation({setPageIndex,PageVar,PageIndex}:{setPageIndex:Function,PageVar:any,PageIndex:number}):ReactNode{
    const [PopState,setPopState] = useState(false);

return(
<>
    <div  className="self-center  bg-grey-11 lg:w-[90%] md:w-[95%] w-[98%] px-6 py-5  mt-7 rounded-[6.25rem] flex flex-row justify-between md:items-center z-[2]">
<Logo className=""/>
<NavigationOption  className="hidden w-full h-full md:flex flex-row items-center gap-5 justify-center" setPageIndex ={setPageIndex} PageVar = {PageVar} PageIndex={PageIndex}/>
<SignUpAndLoginButtonContainer className="hidden md:flex flex-row w-fit h-fit gap-3 items-center"/>
<Menu className = "flex items-center justify-center md:hidden" setPopState={setPopState} PopState={PopState}/>
    </div>
{ PopState == true?
<PopMenu className="animate-fadeIn w-full flex justify-center mt-4 rounded-xl z-[2] " setPageIndex={setPageIndex} PageVar={PageVar} PageIndex={PageIndex}/>:""
}
</>
);
}


