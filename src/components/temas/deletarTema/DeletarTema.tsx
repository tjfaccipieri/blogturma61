import { Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Tema } from '../../../models/Tema';
import { deleteId, getId } from '../../../service/Service';

function DeletarTema() {
  const history = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const {id} = useParams<{id: string}>()

  const [tema, setTema] = useState<Tema>()

  useEffect(() => {
    if (token === '') {
      alert('Sem token não né meu bom');
      history('/login');
    } 
  }, []);

  async function getTemaById(id: string) {
    await getId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    if (id !== undefined){
      getTemaById(id)
    }
  })

  function deletarTema() {
    deleteId(`/temas/${id}`, {
      headers: {
        Authorization: token
      }
    })
    alert('Tema deletado com sucesso, eu acho')
    history('/temas')
  }

  return (
    <>
      <Grid container justifyContent={'center'}>
        <Grid item xs={6}>
          <Typography>Deletar tema</Typography>
          <Typography>Voceê tem certeza de que deseja deletar o tema: {tema?.descricao} </Typography>

          <Button variant='contained' color='primary'>Não</Button>
          <Button variant='contained' color='error' onClick={deletarTema} >Sim</Button>

        </Grid>
      </Grid>
    </>
  )
}

export default DeletarTema