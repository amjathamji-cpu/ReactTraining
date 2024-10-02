import React, { useState } from 'react'
interface Props{
    drivers :string[],
    heading: string
}
function List({drivers, heading}:Props) {
  
   //let selectedIndex = 1;
  var [selectedIndex,SetSelectedIndex] = useState(-1);
   if(drivers.length==0){
    return <p>No items found in the array</p>
  }
  
   
  return (
    <div>
        <h1>{heading}</h1>
        <ul className="list-group" >
        {drivers.map((driver,index) => 
        <li className={selectedIndex === index ? "list-group-item active":"list-group-item "}
         key={driver} onClick={()=>SetSelectedIndex(index)}>
            {driver}
        </li>)
        }
      
</ul>


    </div>
  )
}

export default List