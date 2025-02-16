import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filter({ products, setProducts }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  const priceSortExpensive = () => {
    const sortPrice = [...products].sort((a,b) => b.price - a.price)
    setProducts(sortPrice);
  } 
  const priceSortCheap = () => {
    const sortPrice = [...products].sort((a,b) => a.price - b.price)
    setProducts(sortPrice);
  } 
  const priceSortA = () => {
    const sortPrice = [...products].sort((a,b) => a.title.localeCompare(b.title))
    setProducts(sortPrice);
  } 
  const priceSortZ = () => {
    const sortPrice = [...products].sort((a,b) => b.title.localeCompare(a.title))
    setProducts(sortPrice);
  } 
  return (
    <div >
      <Box sx={{ minWidth: 160, maxWidth: '100%' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort out</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10} onClick={priceSortExpensive}>
              Ən bahadan ucuza
            </MenuItem>
            <MenuItem value={20} onClick={priceSortCheap}>
                Ən ucuzdan bahaya
            </MenuItem>
            <MenuItem value={30} onClick={priceSortA}>
                Əlifba sırası ilə A
            </MenuItem>
            <MenuItem value={40} onClick={priceSortZ}>
                Əlifba sırası ilə Z
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Filter;
