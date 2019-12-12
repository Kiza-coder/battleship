import React from 'react';
import "./cell.css"



const Cell = ({id,isBusy}) => 
    (
            <td className="cell" id={id} data-isbusy={isBusy}>
            </td>
    )   



export default Cell;