import React, { useState } from 'react'

function List() {
    let drivers = [
        "Hamilton",
        "Max",
        "Charles",
        "Michael",
        "Daniel"
    ]
   //let selectedIndex = 1;
  var [selectedIndex,SetSelectedIndex] = useState(-1);
   if(drivers.length==0){
    return <p>No items found in the array</p>
  }
  
   
  return (
    <div>
        <ul className="list-group">
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