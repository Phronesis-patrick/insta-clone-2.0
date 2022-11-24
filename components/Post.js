import {
         BookmarkSquareIcon,
         ChatBubbleBottomCenterTextIcon,
         EllipsisHorizontalIcon,
         FaceSmileIcon,
         HeartIcon,
         PaperAirplaneIcon,

} from "@heroicons/react/24/solid";

import {HeartIcon as HeartIconFilled} from "@heroicons/react/24/solid";
import { collection,onSnapshot,findIndex, orderBy, query,addDoc,serverTimestamp, setDoc, deleteDoc,doc} from "firebase/firestore";


import {useSession} from "next-auth/react"
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";



function Post ({ id, username, userImg, img, caption})  {
const {data:session} = useSession();
const [comment,setComment] =useState("");
const [comments,setComments] =useState([]);
const [likes,setLikes] =useState([]);
const [hasLiked,setHasLiked] = useState(false);

useEffect(()=> onSnapshot(query(collection(db,'posts',id,'comments'),
orderBy('timestamp','desc')),
(snapshot)=>setComments(snapshot.docs))

,[db]);
       
useEffect(()=> onSnapshot(collection(db,'posts',id,'likes'),
(snapshot)=>setLikes(snapshot.docs))
,
[db,id]);

useEffect(()=>{
setHasLiked(likes.
findIndex((like)=>like.id===session?.user?.uid)!== -1
)},[likes])

const likepost = async () =>{
  if(hasLiked){
    await deleteDoc(doc(db,'posts',id,'likes',session.user.uid));
  }else{
    await setDoc(doc(db,'posts',id,"likes",session.user.uid),{
      username:session.user.username,
  });
}
}



const sendComment = async (e) => {
    e.preventDefault();
     const commentToSend = comment;
     setComment('');
     await addDoc(collection(db,'posts',id,'comments'),{
        comment : commentToSend,
        username : session.user.username,
        userImage: session.user.image,
        timestamp: serverTimestamp(),

     });
}
 
    return ( 
           
           <div class="bg-white my-7 border rounded-sm">
        
           
          
            <div class="flex items-center p-5">
              
             <img src={userImg} class="rounded-full h-12 w-12 object-contain border p-1 mr-3"  alt=""  />
               <p class="flex-1 font-bold">{username}</p>
               <EllipsisHorizontalIcon className="h-5"/>
            </div>
           
             
             
           <img src={img} class="object-cover w-full"  alt=""/>

        {session && (<div class="flex justify-between px-4 pt-4">
            <div class="flex space-x-4"> 
                 {
                     hasLiked ? <HeartIconFilled onClick={likepost} className ="Btn text-red-500"/> : <HeartIcon onClick={likepost} className ="Btn"/>
                 }
 
               
                <ChatBubbleBottomCenterTextIcon class="Btn" />
                <PaperAirplaneIcon class="Btn"/>
            </div>
                <BookmarkSquareIcon class="Btn"/>
            </div> )}

           
            <div>
                <p class="p-5 truncate">

         {likes.length>0 && <p>{likes.length} likes </p> }       

                <span class="font-bold mr-1">{username} </span>
                {caption}
                </p>
                 {/**comments */}
                 
                  {comments.length > 0 && 
                    <div className="mt-10 h-20 overflow-x-scroll scrollbar-thin scrollbar-thumb-black "> 
                    
                      {comments.map((word) =>(
                          
                          
                        <div key={word.id} className='flex items-center space-x-2 mb-3'>
                          
                        <img class="h-7 rounded-full" src={word.data().userImage} alt="" />
                        
                 <p className="text-sm flex-1">
                  <span className="font-bold">{word.data().username}
                 </span> {""}
                 
                 {word.data().comment}
                 </p>
                 <>
                 <Moment fromNow className='pr-5 text-xs'>
                      {word.data().timestamp?.toDate()}
                 </Moment>
                 </>
                        </div>
                      
                      ))};
                    </div>
                    
                    }
                 {/**input field */}

                 {session && <form class="flex items-center p-4">
                   <FaceSmileIcon class="h-7"/>
                   
                   <input type= "text"
                   value={comment}
                   onChange={(e)=> setComment(e.target.value)}
                     
                  
                placeholder="Add a comment"
                 class="border-none flex-1 
                 focus:right-0 outline-none "/>
                 
                 <button type='submit'onClick={sendComment} disabled={!comment.trim() } 
                 class="font-semibold text-blue-400">post</button>
                </form> 
};

                
               
            </div>
            
        </div>
        
     );
}
 
export default Post;