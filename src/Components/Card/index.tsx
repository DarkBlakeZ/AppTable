import Dialog from '../Dialog'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Props from "../../Interface/Props";

import { useState } from "react";

import './index.css'

export default function CardComponent({
  title = "Sin titulo",
  description = "Sin descripcion",
  price = 0,
  img = "",
}: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className='miniImg'
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          onClick={handleOpen}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"$ " + price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>

      <Dialog open={open} img={img} title={title} setOpen={setOpen} />
    </>
  );
}
