// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

function Home() {
 return(
    <>
   <Navbar/>
   <Main img='https://imgv3.fotor.com/images/blog-cover-image/8-Tips-on-How-to-Take-Good-Pictures-of-Yourself-2020-Updated.jpg' alt='camera' description='a picture of a camera'/>

   <Main img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvx8gmebgADhQh0-d0Zf5E8wHbVeUtnfIACepaYQfQRA&s' alt='paris' description='a picture'/>

    <div>
   
</div>

    {/* <div className="flex flex-row items-center justify-center mt-10 bg-teal-500 p-4 border-2 border-orange-500 w-[16rem]"> 
 <img src='https://www.alwaysonpurpose.com/wp-content/uploads/2019/11/happypeople-1024x679.jpg' alt='HAPPY PEOPLE' description='group of happy people jumping' />

<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQTn3liQYQzwV-OAT4HXvgzS7-rCrgganLQ&usqp=CAU' alt='HAPPY PEOPLE' description='A happy emoji' />

            <div><img src={props.img} alt={props.alt} className="w-[16rem] h-[19rem]" />
            <p>Description: {props.description}</p>
            </div> */}
        {/* </div> */}
    </>
 )

}
export default Home