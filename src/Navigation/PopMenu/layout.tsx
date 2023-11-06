import { ReactNode } from "react";
import NavigationOption from "../NavigationOption";
import SignUpAndLoginButtonContainer from "../SignUpAndLoginButtonContainer";
export default function PopMenu({className,setPageIndex,PageVar,PageIndex}:{className:string,setPageIndex:Function,PageVar:any,PageIndex:Number}):ReactNode{
return(
    <div className={className}>
        <div className=" w-[90%]">
<NavigationOption className="flex flex-col gap-3" setPageIndex ={setPageIndex} PageVar = {PageVar} PageIndex={PageIndex}/>
 <div className="h-[2rem]"></div>
 <SignUpAndLoginButtonContainer className="flex flex-col  gap-3 [&>*]:mx-20 [&>*]:py-4"/>       
        </div>

</div>
);
}