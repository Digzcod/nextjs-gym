import {
  Card,
  Grid,
  Paper,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import React, { useState } from "react";

interface ToursProps {
  name: string;
  id: string;
  image: string;
  price: string;
  info: string;
  removeTours: (id: string) => void;
}

export default function Tours({
  id,
  name,
  image,
  price,
  info,
  removeTours,
}: ToursProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <Paper elevation={2} className="min-h-[25rem] w-[25rem] rounded-sm">
      <div className="relative">
        <p
          className="
          absolute
          rounded-sm
          text-white
          bg-green-500 
          px-[1.5rem] 
          py-2 
          w-[auto]
          top-0
          right-0
          font-medium
        "
        >
          ${price}
        </p>
      </div>
      <div className="h-[15rem] w-[auto] object-cover">
        <CardMedia
          component="img"
          title={name}
          image={image}
          className="h-full w-full shadow-sm"
        />
      </div>
      <div className="m-[1.3rem] pb-[1rem]">
        <Typography variant="h6" color="initial">
          {name}
        </Typography>

        <Typography variant="body1">
          {showMore ? info : `${info.substring(0, 200)}`}
          <span className="text-gray-500 text-2xl">....</span>
          <button
            className="font-semibold text-green-600"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </Typography>

        <div className="my-[2rem]">
          <Button
            fullWidth
            variant="outlined"
            className="border-green-500 text-green-500"
            onClick={() => removeTours(id)}
          >
            Not Interested
          </Button>
        </div>
      </div>
    </Paper>
    //   <Grid sx={{display: "flex"}}>
    // </Grid>
  );
}
