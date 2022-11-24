import { useEffect,useState} from "react";
import { faker } from '@faker-js/faker';


function Sugestions () {

const [suggestions, setsuggestions] = useState([]);


useEffect(
    () => {
        const suggestions = [...Array(5)].map((_, i) => ({
          userId: faker.datatype.uuid(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
          password: faker.internet.password(),
          birthdate: faker.date.birthdate(),
          registeredAt: faker.date.past(),
        }));
        setsuggestions(suggestions);
        }, []

);


    return ( 
      
        <div class ='mt-4 ml-10'>
        <div class='flex justify-between text-sm mb-5'>
        <h3 class ='text-sm font-bold text-gray-400'> suggestions for you </h3> 
        <button class ='text-gray-600 font-semibold'>See All</button>
        </div>


        {
            suggestions.map((profile) =>(
                  <div key={profile.userId} class ='flex items-center justify-between mt-3'>
                    <img class='w-10 h-10 rounded-full border p-[2px]' src={profile.avatar}/>

                   <div class='flex-1 ml-4'>
                    <h2 class='font-semibold text-sm'>{profile.username}</h2>
                    <h3 class='text-xs text-gray-400'> My mail :{profile.email}</h3>
                   </div>

                <button class='text-blue-400 font-bold'>follow</button>
                  </div>
            )) }
        

     </div>



        
           
    );
                
                }
  
export default Sugestions;
