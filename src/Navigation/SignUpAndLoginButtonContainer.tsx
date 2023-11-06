import { ReactNode } from "react";

export default function SignUpAndLoginButtonContainer({className}:{className:string}):ReactNode{
    return(
        <div className={` ${className}`}>

<SignUpButton/>
<LoginButton/>

        </div>
    );
}
function SignUpButton():ReactNode {
    return(
        <button className="flex-1 bg-transparent font-normal px-3 py-2 text-sm whitespace-nowrap" onClick={()=>console.log("sign up ")}>Sign Up</button>
    );
}
function LoginButton():ReactNode{
    return(
        <button className=" flex-1 bg-green-60 text-grey-11 text-sm px-3 py-2 font-normal rounded-[5.125rem]" onClick={()=>console.log("sign in ")}>Login</button>
    );
}