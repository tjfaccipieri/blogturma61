import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Tema } from '../../../models/Tema';
import { post } from '../../../service/Service';

function CadastroTema() {
  const history = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if (token === '') {
      alert('Sem token não né meu bom');
      history('/login');
    }
  }, []);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await post('/temas', tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert('Tema cadastrado com sucesso');
    } catch (error) {
      alert('Deu ruim');
    }
  }

  useEffect(() => {
    if (tema.id !== 0) {
      history('/temas');
    }
  }, [tema.id]);

  return (
    <>
      <Grid container justifyContent={'center'} mt={4}>
        <Grid item xs={6}>
          <Typography
            align="center"
            variant="h3"
            gutterBottom
            fontWeight={'bold'}
          >
            Cadastrar tema
          </Typography>
          <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection={'column'} gap={2}>
              <TextField
                label="Descrição do tema"
                name="descricao"
                value={tema.descricao}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <Button
                type="submit"
                variant="contained"
                disabled={tema.descricao.length < 3}
              >
                Cadastrar
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default CadastroTema;
