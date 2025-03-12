import { Container } from "@mantine/core";
import Home from "./pages/Home";
import Opensource from "./pages/OpenSource";

export default function App() {
  return (
    <>
      <Container size={"sm"} py="xl">
        <Home />
        <Opensource />
      </Container>
    </>
  );
}
