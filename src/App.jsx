import { BrowserRouter ,Routes , Route } from "react-router-dom";


import Navbar from "./Navbar";
import Profile from "./Profile";
import Login from "./Login";
import Body from "./Body";
function App() {
 

  return (
            <>
            <BrowserRouter basename="/">
              <Routes>
                <Route path="/" element={<Body/>} >
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />

                </Route>
                
              </Routes>
             
            
            </BrowserRouter>
            

            </>
  );
}

export default App;
