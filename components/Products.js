import React from "react";
import ProductCard from './ProductCard';
import { Grid } from "@material-ui/core";

const Products = (props) => {
  const books = props.books;
  const getBookCard = book => {
    return (
      <Grid item xs={6} sm={4} md={3}>
        <ProductCard {...book} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {books.map(book => getBookCard(book))}
    </Grid>
  );
};
export default Products;