import React, { useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function AccordionCategory({selectedCategories,setSelectedCategories }) {
  const [categoryName, setCategoryName] = useState([]);
  const params = useParams()
  

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCategories(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  

  // Accordion
  useEffect(() => {
    setSelectedCategories([params.name])
    axios.get('http://localhost:5000/api/categories')
    .then(res => setCategoryName(res.data))
  }, [params.name]);
  
  // console.log(selectedCategories)

  return (
      <FormControl sx={{ minWidth: 160, maxWidth: '100%'}}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedCategories}
          onChange={handleChange}  
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
        {
          categoryName && categoryName.map((category, i) => (
            <MenuItem key={i} value={category.name} >
              <Checkbox checked={selectedCategories.indexOf(category.name) > -1} value={category.name} className='acc-category-name-checkbox' type="checkbox"/>
              <ListItemText primary={category.name} />
            </MenuItem>  
          ))
        }
        </Select>
      </FormControl>
  )
}

export default AccordionCategory;