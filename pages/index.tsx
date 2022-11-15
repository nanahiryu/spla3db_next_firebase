import type { NextPage } from "next";
import { Button, Container, Stack } from "@mantine/core";
import axios from "axios";

const Home: NextPage = () => {
  const insertUser = async () => {
    await axios.post("/api/user");
  };

  return (
    <Stack spacing="lg">
      <Container size={800} my={10}>
        <Button variant="light" onClick={() => insertUser()}>
          Insert User
        </Button>
      </Container>
    </Stack>
  );
};

export default Home;
