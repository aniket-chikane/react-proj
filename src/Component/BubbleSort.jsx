import React, { useState, useEffect } from 'react';
import './BubbleSort.css';
import SortType from './SortType';

function BubbleSort() {
    const [arr, setArr] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [highlight, setHighlight] = useState({i: -1, j: -1});

    function add_Element() {
        var num = parseInt(document.getElementById('numInput').value);
        if(document.getElementById('numInput').value===''){
            document.getElementById("label1").style.color="red";
            document.getElementById("label1").innerHTML = "Null input";
            document.getElementById('numInput').focus();
            document.getElementById('numInput').select();
            
        }
        else{ 
            setSorted(false);
            document.getElementById("label1").innerHTML = "";
            document.getElementById('numInput').value = '';
            setArr([...arr, num]);
            document.getElementById('numInput').focus();
            document.getElementById('numInput').select();
        }

        
    }
    function Sort_elements() {
        
        if (sorting ){
            return; }
            if (sorted ){
                document.getElementById("label1").innerHTML = "Already Sorted";
                return; }  
        setSorting(true);
        document.getElementById("label1").style.color="aqua";
        document.getElementById("label1").innerHTML = "Sorting";
        let ar = [...arr];
        let n = ar.length;
        let i = 0;
        let j = 0;

        const interval = setInterval(() => {
            if (i < n - 1) {
                if (j < n - i - 1) {
                    setHighlight({i: j, j: j + 1});
                    if (ar[j] > ar[j + 1]) {
                        let t = ar[j];
                        ar[j] = ar[j + 1];
                        ar[j + 1] = t;
                        setArr([...ar]);
                    }
                    j++;
                } else {
                    j = 0;
                    i++;
                }
            } else {
                clearInterval(interval);
                setSorting(false);
                setSorted(true);
                document.getElementById("label1").style.color="lime";
                document.getElementById("label1").innerHTML = "Sorted";
                setHighlight({i: -1, j: -1});
            }
        }, 1000);
        
    }
   

    return (
        <div className='Data'>
            <div>
                <h5 className='msg' id = 'label1'></h5>
                <SortType className="sort-type" type={"Bubble sort"}/>
                <div className='tab'>
                    <table>
                        <tbody>
                            <tr className='tableRow'>
                                {arr.map((num, index) => (
                                    <td key={index} className={highlight.i === index || highlight.j === index ? 'highlight' : ''}>
                                        {num}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='inputbox'>
                    <input type='text' id='numInput' placeholder='Enter Element to add'></input>
                </div>
                <button className='add' onClick={add_Element} disabled={sorting}>
                    Add
                </button>
                <button className='sort' onClick={Sort_elements} disabled={sorting}>
                    Sort
                </button>
            </div>
        </div>
    );
}

export default BubbleSort;
