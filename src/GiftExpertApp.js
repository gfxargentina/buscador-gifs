import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {

    //const categories = ['one punch', 'samurai x', 'dragon ball']
    const [categories, setCategories] = useState(['robotech']);

   // const handleAdd = () => {
     //   setCategories(['X-men', ...categories]);
    //}
    
    return (
        <> 
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />
        

        <ol>
            {
                categories.map( category => (
                  <GiftGrid 
                      key={ category }                       
                      category={ category } />
                  ) )
            }
        </ol>

        </>
     );
}
 
export default GiftExpertApp;