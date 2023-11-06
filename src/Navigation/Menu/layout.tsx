import { ReactNode,useState } from "react";
export default function Menu({className,PopState,setPopState}:{className:string,PopState:boolean,setPopState:Function}):ReactNode{
    return(
        <div className={`${className}`} onClick={function(){onClicked(setPopState,PopState);}}>
{ PopState ==false ?
 <span className="material-symbols-outlined animate-reverseRotateClose">
menu
 </span>
:
<span className="material-symbols-outlined animate-RotateClose">
close
</span>
}
        </div>
    );
}
function onClicked(setPopState:Function,PopState:boolean){
setPopState(!PopState);

}