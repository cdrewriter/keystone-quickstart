/* eslint-disable react/prop-types */
import React from 'react';
import Formdata from '../components/Formdata';
import { Paper, Box, Container, Typography } from '@material-ui/core';
import Demo from '../components/Demo';
import Carous from '../components/sections/carousel';

export async function getServerSideProps() {
  const res = await fetch(`${process.browser ? '' : 'https://keystone-quickstart.cdrewriter.vercel.app'}/api/carsapi`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export default function Home({ data }) {
  return (
    <React.Fragment>
      <Box>
        <Demo />
      </Box>
      <Box>
        <Carous props={data} key="carousel" />
      </Box>
      <Box my={12}>
        <Typography variant="h3" component="h3" align="center">
          Вы не нашли интересующую Вас технику?
        </Typography>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Paper css={{ padding: '2rem' }} elevation={12}>
            <Formdata key="form" />
          </Paper>
        </Container>
      </Box>
    </React.Fragment>
  );
}
