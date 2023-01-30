import Routes from "./routes";
import { GlobalProvider } from "./context/globalContext/globalContext";
// css
import "./styles/index.css";
// carousel css
import "react-multi-carousel/lib/styles.css";

const App = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
