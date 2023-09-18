import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import { Box, Grid } from "@mui/material";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

async function fetchData(): Promise<DataToursType[]> {
  const res = await fetch("https://course-api.com/react-tours-project");
  return await res.json();
}

export default function ToursApp() {
  const [tours, setTours] = useState<DataToursType[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchTours() {
    setLoading(true);
    try {
      const data = await fetchData();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

 

  const handleDelete = (id: string) => {
    // Filter out the item with the specified ID
    const updatedTours = tours.filter((item) => item.id !== id);
    setTours(updatedTours);
  };

  return (
    <>
      <Box className="mx-[auto] px-[auto] max-w-lg">
        <Grid
          container
          spacing={5}
          sx={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "1fr",
            "@media(max-width: 850px)": {
              gridTemplateColumns: "1fr",
              mx: "auto",
            },
            "@media(min-width: 851px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            "@media(min-width: 1231px)": {
              gridTemplateColumns: "repeat(3, 1fr)",
            },
          }}
        >
          {tours.map((item) => (
            <Grid item xs={8} className="w-[auto]" key={item.id}>
              <Tours removeTours={handleDelete} {...item} />
            </Grid>
          ))}
        </Grid>
        {!loading ? (
          <>
            {tours.length === 0  && (
              <main className="text-center">
                <p className="text-white text-lg">Their is no tours left!</p>
                <button
                  className="bg-blue-500 text-white py-[.5rem] px-[2rem] rounded-md"
                  onClick={fetchTours}
                >
                 Refresh <RefreshRoundedIcon />
                </button>
              </main>
            )}
          </>
        ): <h2 className="text-center text-blue-400 mt-[10rem]">Loading...</h2>}
      </Box>
    </>
  );
}

// minWidth: "100%",

// mt: "1.5rem",
// marginRight: "auto",
// padding: "1rem 2.5rem",
// display: "grid",
// justifyContent: "center",
// gridTemplateColumns: "repeat(3, 1fr)",
// gridGap: "2rem",
// "@media (max-width: 1310px)": {
//   gridTemplateColumns: "repeat(2, 1fr)", // Switch to 2 columns for screen width up to 960px
// },
// "@media (max-width: 710px)": {
//   gridTemplateColumns: "repeat(1, 1fr)", // Switch to 2 columns for screen width up to 960px
// },
