import Stories from "./Stories";
import Posts from "./Posts";
import Miniprofile from "./Miniprofile";
import Sugestions from "./Sugestions";
import{useSession} from "next-auth/react";
   
   
   
       


function Feed () {
    const {data:session} = useSession(); 
    return ( 
        
        <>
        <main class={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
        xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 max-w-3xl"}`}>
         



         <section class="col-span-2">
        
        <Stories />
        
        <Posts/>
        </section>
                        
        {session && (
            <section class="hidden xl:inline-grid md:col-span-1">
            <div class="fixed top-20">
            <Miniprofile/>
            <Sugestions/>
            </div>
            
            </section>
        )}
       
       
       
                    

        </main>
        </>
     );
}
 
export default Feed;