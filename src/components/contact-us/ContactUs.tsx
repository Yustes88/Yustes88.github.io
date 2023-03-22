import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.brown[1]} 0%, ${
      theme.colors.brown[3]
    } 100%)`,
    // borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: `calc(${theme.spacing.xl} * 2.5)`,
    color: theme.white,
  },

  subtitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors.brown[8],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.brown[2],
    color: theme.black,

    '&:focus': {
      borderColor: theme.colors.brown[8],
    },

    '&::placeholder': {
      color: theme.colors.brown[5],
    },
    
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors.green[4],
  },
}));


export function ContactUs() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Title className={classes.title} size='h1'>Остались вопросы? Свяжитесь с нами!</Title>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.subtitle}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          {/* <ContactIconsList variant="white" /> */}

          <Group mt="xl">
          <ActionIcon size="lg" variant="default" radius="xl">
          <a target='_blank' rel="noreferrer" href="https://vk.com/club59468601">
                        VK
          </a>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
          </Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Имя"
            placeholder="Имя"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Тема вопроса"
            placeholder="Доставка"
            minRows={1}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Ваш вопрос"
            placeholder="У меня вопрос по доставке: ..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button className={classes.control} color='green'>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}