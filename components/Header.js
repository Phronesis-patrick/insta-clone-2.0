import Image from "next/image";
import { useRouter } from 'next/router'
import {
         MagnifyingGlassIcon,
         PlusCircleIcon,
         UserGroupIcon,
         HeartIcon,
         PaperAirplaneIcon,
         QueueListIcon,
         
} from "@heroicons/react/24/outline";
  import {HomeIcon} from "@heroicons/react/24/solid"
import { signOut,signIn,useSession } from "next-auth/react";
import  {useRecoilState } from "recoil";
import { modalState } from "../atoms/moduleAtom";
   function Header () {
   const {data: session} = useSession(); 
   const router = useRouter();
   const[clue,setClue] = useRecoilState(modalState)
   
   

   
    return ( 
       
        <div class="shadow-sm border-b bg-white sticky top-1 z-50">
         <div class="flex justify-between max-w-6xl mx-5 lg:mx-auto" >

        <div onClick={()=>router.push("/")} class="hidden lg:inline-grid  cursor-pointer">
        <Image
          src= "https://links.papareact.com/ocw"
          alt="Picture of the author"
          width={100}
          height={100}
          priority
        />
       </div>
       <div onClick={()=>router.push("/")} class="lg:hidden flex-shrink-0 cursor-pointer">
       <Image
          src="https://links.papareact.com/jjm"
          alt="Picture of the author"
          width={100}
          height={100}
          priority
          />
          </div>
          {/*middle component search */}
          <div class="max-w-xs">
          <div class="relative mt-1 p-3 rounded-md">
          <div class="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon class='h-3 w-3 text-grey-500 hidden sm:inline-grid '/>
          </div>
          <input class="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black
           focus:border-black"  type="text" placeholder="Search" />
          
           
         </div>
         </div>

           {/**right hand side */}
           <div class="flex items-center justify-end space-x-4">
           <HomeIcon onClick={()=>router.push("/")} class="navBtn"/>
           <QueueListIcon class="h-6 md:hidden cursor-pointer"/>

           {session ? (
            <>
            <div class ="relative navBtn">
            <PaperAirplaneIcon class="navBtn rotate-45"/>
             <div class ="absolute -top-2 -right-2 w-5 h-5 bg-red-500
              rounded-full flex items-center justify-center animate-pulse text-white">3</div>
             </div>

             <PlusCircleIcon onClick={()=>setClue(true)} class="navBtn"/>
             <UserGroupIcon class="navBtn"/>
             <HeartIcon class="navBtn"/>
             
             <img onClick={signOut} src={session?.user?.image} alt="profile pic" class="navBtn rounded-full h-10 cursor-pointer"
            />
          </>
           ): (
                <button  onClick={signIn}>Sign In</button>
           )}
           </div>

          </div>
       
          </div>
     
     );
}
 
export default Header;