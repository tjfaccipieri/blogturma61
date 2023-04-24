import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import { Postagem } from '../../../models/Postagem';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../../../service/Service';
import './ListaPostagens.css'

function ListaPostagens() {
  const [token, setToken] = useLocalStorage('token');
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const history = useNavigate();

  useEffect(() => {
    if (token === '') {
      alert('Sem token, não pode ficar aqui não');
      history('/login');
    }
  }, [token]);

  async function getAllPostagens() {
    await getAll('/postagens', setPostagens, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllPostagens();
  }, [postagens.length]);

  return (
    <div className='listaPost'>
      {postagens.map((post) => (
        <Box m={4} >
          <Card variant='outlined' style={{padding: '8px'}}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {post.titulo}
              </Typography>
              <Typography variant="h5" component="h2">
                {post.texto}
              </Typography>
              <Typography variant="body1" component="p">
                Tema: {post.tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="primary" variant="contained" size="small" fullWidth>
                Editar
              </Button>
              <Button color="error" variant="contained" size="small" fullWidth>
                Deletar
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </div>
  );
}

export default ListaPostagens;
