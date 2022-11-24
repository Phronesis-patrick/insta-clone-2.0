import {getProviders,signIn as signIntoProvider} from "next-auth/react";
import Header from "../../components/Header";

function signIn ({providers}) {
    return (
         <>

       <Header />

        <div class="flex flex-col items-center justify-center min-h-screen py-2 -mt-50 px-14 text-center">
          <img class="w-80 " src="https://links.papareact.com/ocw"  />
        <p class="font-xs italic">
          This site is not in any way,connected to instagram,built by Patrick phronesis 

        </p>

        <div class="mt-40">
         {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button class="p-3 rounded-full bg-blue-300 text-white" onClick={() => signIntoProvider(provider.id,{callbackUrl:"/"})}>
           Sign in with {provider.name}
          </button>
          </div>
         
        
         
        ))}
         </div>
         </div>
         
         </>
    );
  }

 export async function getServerSideProps(){
    const providers = await getProviders();
    return {
         props:{
            providers
         },
    }
 }
export default signIn;