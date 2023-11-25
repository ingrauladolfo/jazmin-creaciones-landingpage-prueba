import { useState } from "react";
import GlobalStyle from "./components/global/GlobalStyle";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <MainRoutes />
    </>
  );
}

export default App;
