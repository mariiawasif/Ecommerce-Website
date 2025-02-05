import React from "react";
// import sofa from './sofa (2).png';
import "./Featured.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faMagnifyingGlassPlus   } from '@fortawesome/free-solid-svg-icons';
import chair from './chair.png';

function Featured() {
  return (
    <div className="featured">
      <h1 className="featured-heading"> Featured Products </h1>
      <div className="grid">
      <div className="featured-grid">

      <div className="card">
        <div className="card-row3">
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faHeart}  style={{ color: '#1A9BF6', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faMagnifyingGlassPlus}  style={{ color: '#1A9BF6' }} />
        </div>
        <div className="card-row1">
            <img src={chair} alt="card" className="chair" />
        </div>
        <div className="card-row2">
            <h3>Cantilever Chair <br/>
            </h3>  
            <h4>Code - Y23201 <br/>
            $42.00
            </h4>
            
        </div> 
     </div>

     <div className="card">
        <div className="card-row3">
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faHeart}  style={{ color: '#1A9BF6', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faMagnifyingGlassPlus}  style={{ color: '#1A9BF6' }} />
        </div>
        <div className="card-row1">
            
        </div>
        <div className="card-row2">Content for row 2</div>
     </div>
     
     <div className="card">
        <div className="card-row3">
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faHeart}  style={{ color: '#1A9BF6', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faMagnifyingGlassPlus}  style={{ color: '#1A9BF6' }} />
        </div>
        <div className="card-row1">Content for row 1</div>
        <div className="card-row2">Content for row 2</div>
     </div>

     <div className="card">
        <div className="card-row3">
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faHeart}  style={{ color: '#1A9BF6', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faMagnifyingGlassPlus}  style={{ color: '#1A9BF6' }} />
        </div>
        <div className="card-row1">Content for row 1</div>
        <div className="card-row2">Content for row 2</div>
      </div>
      </div>  
      </div>
      
    </div>
  );
}

export default Featured;
