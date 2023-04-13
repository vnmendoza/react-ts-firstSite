import React=require("react");
import { Fragment } from "react"
export default function ListGroup() {
  const items = ["new York", "san francisco", "los angeles", "tokyo"]
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item)=> (
        <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment> 
  
     
  );
}



/*
function ListGroup() {
  return <h1>Hello StackBlitz!</h1>;
}
export default ListGroup;

*/