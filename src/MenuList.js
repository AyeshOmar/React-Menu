import React from 'react';



const MenuList = ({menu}) => {


  return (

    <article className='block'>
      
      <img src={menu.img} alt={menu.title}/>

<div className='info'>

<div className='header'>
<p className='titly'>{menu.title}</p>

<h3 className='pricy'>${menu.price}</h3>

</div>

<p className='text'>{menu.desc}</p>


</div>


    </article>
  );
}

export default MenuList;
