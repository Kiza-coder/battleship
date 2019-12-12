import React, {useState} from 'react'
import Grid from './grid'


const Main = () => {
   /*useState() [status,setStatus]  param*/ 
    const [status,setStatus] = useState(0)
   
    const loadGrid = () =>
    {
      setStatus(status => status +1)
    }
    
	 return(
        <main className="container-fluid jumbotron col-12 text-center">
           <div className="card">
              <div className="card-header">
                 Battle ship Game
              </div>
              <div className="row flex-row">
                  <div className="card-body col-6">
                     <Grid gridId="table-1" statusGrid={status}/>
                  </div>
                  <div className="card-body col-6">
                     <Grid gridId="table-2"/>
                  </div>  
               </div>
               <div className="card-footer">
                  <button type="send" onClick={loadGrid}>LOAD</button>   
               </div>
              </div>
           
        </main>
   )};
export default Main;