import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/searchTerm/${searchTerm}`);

            setSearchTerm('');
        }
    }

  return (
      <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
              borderRadius: 30,
              border: '2px solid #968618',
              pl: 2,
              mr:{sm:5}
          }}
      >
          <input className="search-bar"
              placeholder="search now.."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value)}}
          />
          <IconButton type="submit" 
              sx={{
                  p: '10px', color: 'black'
              }}>
              <Search />
            </IconButton>
      </Paper>
  )
}

export default SearchBar