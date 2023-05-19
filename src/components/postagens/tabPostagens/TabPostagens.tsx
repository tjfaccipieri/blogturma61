import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ListaPostagens from '../listaPostagens/ListaPostagens';
import './TabPostagens.css'
import Carousel from '../../estaticos/carousel/Carousel';
import { Typography } from '@mui/material';

function TabPostagens() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  // TabIndicatorProps={{style: {display: 'none'}}}
  return (
    <TabContext value={value}>
        <AppBar position="static" className='barrinha'>
          <TabList centered indicatorColor='primary' onChange={handleChange}  aria-label="simple tabs example">
            <Tab  label="Postagens" value="1"  />
            <Tab label="Sobre o projeto" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <ListaPostagens />
        </TabPanel>
        <TabPanel value="2">
          <Typography variant='body1'>
          Hoje iremos apresentar uma receita fácil e prática para um lanche da tarde ou para reuniões com amigos e família.
          </Typography>
          <ul>
            <li>1 pacote de miojo de qualquer sabor (você não vai usar o sachê)</li>
            <li>4-5 dentes de alho</li>
            <li>3 colheres de sopa de manteiga</li>
            <li>sal e pimenta-do-reino a gosto</li>
          </ul>
          <Typography variant='body1'>Viu como é prática?, além de ter um fácil preparo ainda vai fazer muito sucesso com a criançada e com a galera reunida.</Typography>
        </TabPanel>
      </TabContext>
  )
}

export default TabPostagens