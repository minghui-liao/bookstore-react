import React from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";

const ProductCard = (props) => {
  const { title, description, price, rating, imageUrl } = props;
  return (
    <Card>
      <CardMedia style={{ height: "500px"}} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          ${price}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
    </Card>
  );
}
export default ProductCard;