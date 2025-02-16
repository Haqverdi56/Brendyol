import React from 'react';
import { Link } from 'react-router-dom';

function MegaMenu({handleMouseLeave, categoryName}) {
  return (
    <div className="mega-menu" onMouseLeave={handleMouseLeave}>
      {
        categoryName && categoryName.map((category,i) => (
          <div key={i} className="mega-menu-column">
            <Link to={`category/${category.name}`} className='mega-menu-links' onClick={handleMouseLeave}>
              <h4>{category.name}</h4>
            </Link>
            {
              category.children?.map((child,i) => (
                <Link to={`category/${child.name}`} key={i} className='mega-menu-links' onClick={handleMouseLeave}>
                  <p >{child.name}</p>
                </Link>
              ))
            }
          </div>
        )) 
      }
    </div>
  );
}

export default MegaMenu;