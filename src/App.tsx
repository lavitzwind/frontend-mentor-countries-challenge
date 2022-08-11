import styled from "styled-components";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
