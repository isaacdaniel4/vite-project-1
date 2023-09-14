function Main(props) {
    return(
        // <div className="grid-row items-center justify-center w-[16rem] mt-4 border-2 border-orange-500 p-4 bg-teal-700">
          <div className="flex flex-row items-center justify-center mt-10 bg-teal-500 p-4 border-2 border-orange-500 w-[16rem]"> 
            <div><img src={props.img} alt={props.alt} className="w-[16rem] h-[19rem]" />
            <p>Description: {props.description}</p>
            </div>
        </div>
    )
}
export default Main;