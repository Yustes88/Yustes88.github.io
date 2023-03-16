import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Title, Button, useMantineTheme } from '@mantine/core';
import { bakeryMenuData } from '../../data/data';
import { createRef, useState } from 'react';
import MenuList from '../bakery-menu/MenuList';

const useStyles = createStyles((theme) => ({
  card: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  id: string;
}

function Card({ image, title }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant='filled' color='green'>
        Подробнее
      </Button>
    </Paper>
  );
}



export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const refs:{[key: string]: any} = bakeryMenuData.reduce((acc: {[key: string]: any}, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});

  const handleClick = (id: string) => {    
  return refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });}


  const slides = bakeryMenuData.map((item) => (
    <Carousel.Slide key={item.title} ref={refs[item.id]}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (

    <>
    
  <MenuList handleClick= {handleClick}/>

  <div className="mx-auto max-w-3xl">
    <Carousel
      slideSize="51%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      loop 
      dragFree
      >
      {slides}
    </Carousel>
    </div>
      </>
  );
}