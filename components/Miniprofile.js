   import{signOut,useSession} from "next-auth/react";
   
   
   function Miniprofile() {
    const {data:session} = useSession();
    
    return ( 
        
        <div class="flex items-center justify-between mt-14 ml-10" >
          
          <div>
          
          <img class="w-16 h-16 rounded-full border p-[2px] cursor-pointer" 
           src={session?.user?.image}
          alt=""/>
          
          </div>
          
        <div class='flex-1 mx-4'>
            <h2 class='font-bold'>{session?.user?.username}</h2>
            <h3 class = "text-sm text-gray-400">Welcome to my Faceapp Instagram</h3>
        </div>
        <button onClick={signOut} class='text-blue-400 text-sm font-semibold'>Sign out  </button>
        </div>
    
     ); 
}
 
export default Miniprofile; 