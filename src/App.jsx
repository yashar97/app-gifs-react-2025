import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const App = () => {

  const [categories, setcategories] = useState([]);

  const onAddCategorie = (valor) => {
    if (categories.includes(valor)) return;
    setcategories(c => [valor, ...c]);
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={e => onAddCategorie(e)} />
      {
        categories.map(category => <GifGrid key={category} category={category} />)
      }
    </>
  )
}

export default App