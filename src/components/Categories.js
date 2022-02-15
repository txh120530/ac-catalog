import React from 'react';
import {useCategory, useCategoryUpdate} from '../store/ThemeContext.js';


const Categories = ({ className }) => {

  const category = useCategory();
  const updateCategory = useCategoryUpdate();
    return (
        
        <>

    <div className="categories block lg:flex shadow mb-3 tracking-wide">
      <button onClick={updateCategory} className={`block w-full uppercase tracking-widest font-bold ${(category === 'category-fish' ? 'active' : null)}`} id="category-fish">Fish</button>
      <button onClick={updateCategory} className={`border-t-2 lg:border-t-0 lg:border-l-2 block w-full uppercase tracking-widest font-bold ${(category === 'category-sea' ? 'active' : null)}`} id="category-sea">Sea Creatures</button>
      <button onClick={updateCategory} className={`border-t-2 lg:border-t-0 lg:border-l-2 block w-full uppercase tracking-widest font-bold ${(category === 'category-bugs' ? 'active' : null)}`} id="category-bugs">Bugs</button>
      <button onClick={updateCategory} className={`border-t-2 lg:border-t-0 lg:border-l-2 block w-full uppercase tracking-widest font-bold ${(category === 'category-fossils' ? 'active' : null)}`} id="category-fossils">Fossils</button>
      <button onClick={updateCategory} className={`border-t-2 lg:border-t-0 lg:border-l-2 block w-full uppercase tracking-widest font-bold ${(category === 'category-art' ? 'active' : null)}`} id="category-art">Art</button>
    </div>
        </>
    );
};

Categories.displayName = 'Categories';


export default Categories;
