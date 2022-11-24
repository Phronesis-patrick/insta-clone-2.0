function Story ({img,username}) {
    return ( 
        <div>
         
         <img class="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 
          object-contain cursor-pointer transition  ease-out 
          hover:scale-110  scrollbar-thin scrollbar-thumb-black transition-duration:500ms scroll-mt-8" 
          src={img} alt='' /> 
           
         <p class="text-sm w-14 truncate text-center">{username}</p>
        </div>
     );
}
 
export default Story;