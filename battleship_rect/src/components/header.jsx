import React from 'react';
import anchor from './static/img/anchor_cover.png'
import "./header.css"


const Header = () => 
	 (
        <header className="container-fluid jumbotron col-12 text-center">
            <div className="row justify-content-between">
            <img className="col-3 img-logo-fit" src={anchor} alt="logo_anchor"></img>
            <h3 className="col-3" >BattleShip</h3>
            <img className="col-3 img-logo-fit" src={anchor} alt="logo_anchor"></img>
            </div>
        </header>
	);


export default Header;