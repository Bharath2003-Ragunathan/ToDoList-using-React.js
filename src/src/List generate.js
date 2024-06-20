import React from "react";

function List({list,handletoggle,index}){
    return (
        <div onClick={() => handletoggle(index)} className ={list.complete ? 'strike' : ''}>
            {list.task}
        </div>
        )
    
}

function Listgenerate({listgenerate,handletoggle,ClaerCompleted})
{
    return(
    <div>
        {listgenerate.map((list,i)  => <List index={i} handletoggle ={handletoggle}  list={list}/>)}
        <button style={{margin:'20px'}} onClick={ClaerCompleted} >Clear completed</button>
    </div>
    )
}

export default Listgenerate;
