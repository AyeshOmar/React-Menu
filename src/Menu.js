import React, { useState } from 'react';
import data from './data'; // Vous importez les données depuis le fichier sans extension
import Categorie from './Categorie';
import MenuList from './MenuList';

const Menu = () => {

const Allcategori=['All',... new Set(data.map((x)=>x.category))]; 


  const [menu, setMenu] = useState(data);
  const [categoriee,setCategorie]=useState(Allcategori);



const filterCategori=(categorie)=>{
if(categorie==='All'){
setMenu(data);
return;
}
const newList=data.filter((x)=>x.category==categorie)
setMenu(newList);

}


  return (
   
   <section>
<Categorie filtercatego={filterCategori} Allcategorii={categoriee}/>
    <div className='container'>



      {menu.map((x) => (
        <MenuList key={x.id} menu={x} />
      ))}
    </div>
    </section>
  );
}

export default Menu;
