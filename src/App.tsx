import { ReactComponentElement, ReactElement, ReactNode, useState } from 'react'

import './App.css'
import Navigation from './Navigation/layout'
import Carrer from './Pages/Carrer/layout'
import Home from './Pages/Home/layout'
import About from './Pages/About/layout'
import Secuity from './Pages/Security/layout'


export default function App() {
  interface PageVar{

  }
  let PageVar = {HOME:0,CARRER:1,ABOUT:2,SECURITY:3};
let PageAnimation = "animate-fadeIn";
let Pages:ReactNode= [<Home className={PageAnimation}/>,<Carrer className={PageAnimation}/>,<About className={PageAnimation}/>,<Secuity className={PageAnimation}/>];
const [PageIndex,setPageIndex]= useState(PageVar.HOME as keyof ReactNode);
return (
<div className='h-full w-full bg-grey-10 relative text-white flex flex-col '>
<Navigation setPageIndex ={setPageIndex} PageVar = {PageVar} PageIndex={PageIndex} />
<div className='absolute top-0 left-0 right-0 bottom-0'>

{Pages[PageIndex as keyof ReactNode]}
</div>
</div>
  )
}



