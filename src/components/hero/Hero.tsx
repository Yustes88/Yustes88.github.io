import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';
import { AppRoute } from '../../const';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage:
      'url(/bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontSize: 100,
    fontWeight: 200,
    letterSpacing: -4,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colors.brown[0],
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: `{theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: Number(theme.spacing.xl) * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    padding: '0 2.6rem',
    fontFamily: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(133, 142, 105, 0.4) !important',
    height: 42,
    fontSize: theme.fontSizes.md,
    color: theme.white,
    borderRadius: '3px',

    '&:hover': {
      backgroundColor: 'rgba(133, 142, 105, 0.7) !important',
    },

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Мама Волга{' '}
          <Text component="span" inherit className={classes.highlight}>
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Лучшая традиционная татарская выпечка
          </Text>
        </Container>

        <div className={classes.controls}>
          <a href = {AppRoute.Menu} className={classes.control}>
            Меню
          </a>
          <a href = '/' className={classes.control}>
            Доставка
          </a>
        </div>
      </div>
    </div>
  );
}