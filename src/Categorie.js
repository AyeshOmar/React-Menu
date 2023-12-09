import React from 'react';

const Categorie = ({filtercatego,Allcategorii}) => {
  return (
    <section>

        
<div className='blockButton'>

{
   Allcategorii.map((catego,index)=>{
 
return <button type='button'className='btn' key={index} onClick={()=>filtercatego(catego)}>{catego}</button>


   })
}



</div>
      
    </section>
  );
}

export default Categorie;
