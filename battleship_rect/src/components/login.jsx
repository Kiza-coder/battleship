import React from 'react'



const Login = () => 
	 (
         <main class="container-fluid">
             <div class="card">
                 <div class="card-footer">
                     <p>Welcome please enter your nickname and enjoy the game !</p>
                </div>
                <div class="card-body">
                    <form action="./game" method="get"> 
                             <div class="form-group">
                             <label for="nickname">Nickname *:</label>
                             <input type="text" class="form-control"></input>
                             </div>
                             <div class="form-group">
                             <label for="1">1 Player* :</label>
                                 <input type="radio" name="number-player" value="1"></input>
                            </div>
                            <div class="form-group">
                            <label for="2">2 Player* :  </label>
                                 <input type="radio" name="number-player"></input>
                            </div>
                             <button type="submit" class="btn btn-primary">Submit</button>                    
                    </form>
                </div>
                </div>
        
        </main>
	);


export default Login;