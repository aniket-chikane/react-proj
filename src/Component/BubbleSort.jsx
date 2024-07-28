import React, { useState } from 'react'

function BubbleSort() {
    const [arr,setArr]=useState([]);
    function add_Element(){
      var num = parseInt(document.getElementById("numInput").value);


      document.getElementById("numInput").value="";
      setArr([...arr,num]);
      

    }
    function Sort_elements(){
     let ar=arr;
      for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length;j++){
          if(ar[i]<ar[j]){
            let t=ar[i];
            ar[i]=ar[j];
            ar[j]=t;
          }
        }
        
      }
      setArr(ar);
      setArr([...arr]);

    }

  return (
    <div>
        <table>
          <tr>
            {arr.map((arr,index)=><td key={index}>{arr}</td>)}
          </tr>
        </table>
        <input type="text" id="numInput" placeholder='Enter Element to add'></input>
        <button onClick={add_Element}>Add</button>
        <button onClick={Sort_elements}>Sort</button>
    </div>
  )
}

export default BubbleSort