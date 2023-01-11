import {useState, useCallback, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])

  const url ='https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const fetchCocktailHandler = useCallback(()=>{
      setLoading(true);

      axios
      .get(url)
      .then(res=>{
        console.log (res.data)
        setData(res.data.drinks)

      }).catch(e=>console.log(e))
      .finally(()=>setLoading(false))
    },[])
    useEffect(()=>{
     fetchCocktailHandler()
    },[fetchCocktailHandler])
    if (loading) {
      return <h2>Loading...</h2>;
    }
  return (
    <div className="App">
       {data.map ((cocktail)=>{
        <div key={cocktail.idDrink}className="cocktail-container">
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt="#"/>
          <button onClick={fetchCocktailHandler}>Get another cocktail</button>

        </div>
      })}
    </div>
  );
}

export default App;
