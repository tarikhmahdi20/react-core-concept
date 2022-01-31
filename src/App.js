import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const developers =['Tarikh','Reaj','Faisal']
  const produtcs =[{name: 'Photoshop', price:'$90.99'},
  {name: 'Illustrator', price:'$60.99'},
  {name: 'PDF Reader', price:'$6.99'},
  {name: 'Premier pro', price:'$249.99'},

]
const productNames = produtcs.map(product=>product)
console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a React Person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          developers.map(developer =><li>{developer}</li>)
        }
        {
          produtcs.map(product=><li>{product.name}</li>)
        }
      </ul>
      {
        produtcs.map(product=><Product product={product}></Product>)
      }
      <Product product={produtcs[0]}></Product>
      <Product product={produtcs[1]}></Product>
      <Product product={produtcs[2]}></Product>
      
      </header>
    </div>
  );
}
function Users(){
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease =()=>{
    const newCount = count+1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
export default App;
