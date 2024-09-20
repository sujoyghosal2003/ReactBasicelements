import ChildComponent from "./childComponent";

function ParentComponent(){
    return(

        <>
            <h1>This is parent Component</h1>
            <ChildComponent lunchBox="Roti" with="Sabji" drink="Juice"/>
        </>
    )
}
export default ParentComponent;