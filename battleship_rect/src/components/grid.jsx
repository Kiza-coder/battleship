import React, { useState } from 'react';
import Cell from "./cell"



/*Display the Grid*/
const Grid = ({gridId,statusGrid}) => {


    const[isBusy,setIsBusy] = useState(0);
    /*Table contain the position of each boats */
    const tabRandomBoat = []
    /*Table contain the grid */
    const table = []
    
/*Create unique id for each cells */
    const generateId = (xAxis,yAxis) =>{
        xAxis =  xAxis.toString()
        yAxis =  yAxis.toString()  
        const id = xAxis + '-' + yAxis
        return id
    }



/*Generate tab of 2 random number and push it in tabRandom*/
    const generateRandomNumber = (tabRandomBoat) => {
        let isGenerate = false
        while(isGenerate === false )
        {
            let xAxisNumber = Math.floor(Math.random() * 10)
            let yAxisNumber = Math.floor(Math.random() * 10)
            if(tabRandomBoat.length === 0)
            {
                tabRandomBoat.push([xAxisNumber,yAxisNumber]); 
            }
            else{
                tabRandomBoat.forEach(element => {
                    if(xAxisNumber !== element[0] || yAxisNumber !== element[1])
                    {
                        tabRandomBoat.push([xAxisNumber,yAxisNumber])
                        
                        if(tabRandomBoat.length >= 2)
                        {
                            isGenerate = true
                        }
                    }
                })
            }
        }
    }

   

    

    /*Function who create row for the table */
    const rows = (xAxis) => {
        const tableRows = []
        let id;
        for(let yAxis=0; yAxis<10; yAxis++)
        {
            id = generateId(xAxis,yAxis);
            tableRows.push(<Cell key={id} id={id} isBusy={isBusy}  />)
        }
        return tableRows
    }


    /*Create the table here*/ 
    for(let xAxis=0; xAxis < 10; xAxis++){
        table.push(React.createElement(
            'tr',{key: xAxis },rows(xAxis)
        ))
    }
    /* Will try to put a  */
    if(statusGrid === 1){
        generateRandomNumber(tabRandomBoat);
        console.log(tabRandomBoat);
        tabRandomBoat.forEach(element => {
        document.getElementById(generateId(element[0],element[1])).innerHTML = "OK"
        })
    }
    
    

    return(
      <div>  
    <table key={gridId} id={gridId} name={gridId} >
        <tbody>
            {table}
        </tbody>
    </table>
    </div>
    )
}


export default Grid;