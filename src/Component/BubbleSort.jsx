import React, { useState, useEffect } from 'react';
import './BubbleSort.css';

function BubbleSort() {
    const [arr, setArr] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [highlight, setHighlight] = useState({i: -1, j: -1});

    function add_Element() {
        var num = parseInt(document.getElementById('numInput').value);
        document.getElementById('numInput').value = '';
        setArr([...arr, num]);
    }

    function Sort_elements() {
        if (sorting) return; // Prevent starting another sort while already sorting
        setSorting(true);
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
                setHighlight({i: -1, j: -1});
            }
        }, 500);
    }

    return (
        <div className='Data'>
            <div>
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
