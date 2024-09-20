function ChildComponent(props){
    return(

        <>
            <h1>This is child Component</h1>
            <h3>{props.lunchBox}</h3>
            <h3>{props.with}</h3>
            <h3>{props.drink}</h3>
        </>
    )
}
export default ChildComponent;