import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import { useUserContext} from "./context/userContext";
// import './App.css';



function App() {
  const { loading, error, user} = useUserContext()
  return ( 
  <div className="App">
    {error && <p className="error">{error}</p>}
    {loading ? <h2>Loading...</h2> : <>{user ? <Dashboard/> : <Auth />} </>}
    </div>
  
  );
}

export default App;
