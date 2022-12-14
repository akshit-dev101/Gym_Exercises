import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from "@mui/material";


const SearchExercises = () => {
const [search,setSearch]=useState("")

const handleSearch=async()=>{
if(search){
  // const exerciseData=await fetchData();
  
}


}


  return (


    <Stack alignItems="center" mt="37px"
      justifyContent="center" p="20px"
    >
      <Typography fontWeight={700}
        textAlign="center"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative"
        mb="72px"
      >

        <TextField
          sx={{

            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px"
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "4px"
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase())
          }}
          placeholder="Search Exercises"
          type="text"

        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: 0
          }}
          onClick={()=>{
            handleSearch()
          }}

        >
          Search
        </Button>

      </Box>



    </Stack>
  )
}

export default SearchExercises