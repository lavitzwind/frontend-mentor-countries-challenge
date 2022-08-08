import styled from "styled-components";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div``;

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
