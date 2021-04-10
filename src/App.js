
import "./App.css";
import MouviesLists from './components/Mouvieslists';
import{ Route , Switch } from "react-router-dom";
import Trailer from './components/Trailer'
  

function App() {
  return (
    <div >

     
     <Switch>
      

       <Route path="/Trailer/:info" component={Trailer}/>
       
       <Route exact path="/" component={MouviesLists}/>
      
     </Switch>

    </div>
  );
}

export default App;
