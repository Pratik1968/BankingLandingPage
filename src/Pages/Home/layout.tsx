import { ReactNode } from "react";
import Top_abstract_design from "../../assets/Dot_Top.svg"
export default function Home({className}:{className:string}):ReactNode{

    return(
        <div className={className}>
            <Top_abstract/>
            
        </div>
    );
}
function Top_abstract():ReactNode{
    return(
        <img className="top-0 left-0" src={Top_abstract_design}/>
    );
}