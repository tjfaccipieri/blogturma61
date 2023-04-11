import { Grid } from '@mui/material';
import './Navbar.css';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <>
      <Grid 
        container 
        gap={2} justifyContent='space-between' alignItems='center'
        style={{ background: '#131515', color: '#fcfcfc' }}
        >
        <Grid>
          <h2>Blog Pessoal</h2>
        </Grid>
        <Grid>
          <span>item 1</span>
          <span>item 2</span>
          <span>item 3</span>
          <span>item 4</span>
        </Grid>
        <Grid>
          <Button variant="contained" color='success' >Contained</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
