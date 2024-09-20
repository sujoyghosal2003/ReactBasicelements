import Item from "./Item";
import { items } from "../utils/MockData";
import { useState } from "react";
function PackingList(props){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(true);
    function handleClick(){
        alert("Clicked!");
    }
    const item = items[index];
    return(
        <>
            <h1>My Packing Items For Exam</h1>
            {
                items.map(item => {return( <Item key={item.id} data = {item}/>)})
            }
            <button onClick={handleClick}>Click Here</button>
            <button onClick={()=>{alert("Hello!")}}>Hii</button>
            <button onClick={function handleClick1(){alert("I'm Fine")}}>How're You?</button>
            {/* We can also read the props in event handlers like these way */}
            <button onClick={() => alert(props.message)}>
                 What're You doing now?
            </button>
            {/* <Item name = "Pen" isPacked = {true}/>
            <Item name = "Pencil" isPacked = {true}/>
            <Item name = "WaterBottle" isPacked = {true}/>
            <Item name = "Scale" isPacked = {true}/>
            <Item name = "Compus" isPacked = {true}/>
            <Item name = "Sharpner" isPacked = {true}/>
            <Item name = "Mirror" isPacked = {false}/>
            <Item name = "Shampoo" isPacked = {false}/>
            <Item name = "Conditionar" isPacked = {false}/>
            <Item name = "Makeup box" isPacked = {false}/> */}
            <h2>{item.name}</h2>
            <img src={item.url} alt="image" width="240px" height="120px"/><br></br><br></br>
            <p>{!showMore && item.description}</p>
            <button onClick={()=>{
                
                index === items.length-1 ? setIndex(0) : setIndex(index + 1);
                console.log("Index: " + index);
            }}>Next</button>
            <button onClick={()=>{
                setShowMore(!showMore);
            }}>
                {showMore ? "Show " : "Hide "} Description</button>
        </>
    )
}
export default PackingList;