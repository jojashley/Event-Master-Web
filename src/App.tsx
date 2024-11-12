import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";  
function App() {
  return (
    <div className="MyPage">     
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
