

function Item(props){
    // if(props.isPacked){
    //     return(
    //         <>
    //             <li>{props.name} ✓ </li>
    //         </>
    //     )
    // } else{
    //     return(
    //         <>
    //             <li>{props.name} 𐤕 </li>
    //         </>
    //     )
    // }
    

    // Using Turnary Operator 
    // return(
    //     <><li>{props.isPacked ? props.name + "✓" :  props.name + "𐤕"}</li></>
    // )


    // Using AND(&&) Operator 
    return (
        <>
            <li>
                {props.data.name}
                {props.data.isPacked  && "✓"}
                {!props.data.isPacked && "𐤕"}
            </li>
        </>
    )
}
export default Item;