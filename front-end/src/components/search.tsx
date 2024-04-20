import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./card";

const Search: React.FC = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={8} p="4" w="full">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default Search;
