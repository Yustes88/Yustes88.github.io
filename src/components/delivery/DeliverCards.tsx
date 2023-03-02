import { BanknotesIcon, ClockIcon, PhoneArrowDownLeftIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core';

const mockdata = [
  {
    title: 'Время доставки',
    description:
      'Доставка в день заказа, если она оформлена до 15:00. После 15:00 доставка на следующий день',
    icon: ClockIcon,
  },
  {
    title: 'Связь',
    description:
      'После оформления заказа  с вами свяжется наш специалист и подробно проконсультирует по вопросам доставки',
    icon: PhoneArrowDownLeftIcon,
  },
  {
    title: 'Самовывоз',
    description:
      'Вы можете забрать заказ самостоятельно из пекарни',
    icon: ShoppingBagIcon,
  },
  {
    title: 'Оплата',
    description:
      'Доставка курьером оплачивается дополнительно. Минимальная сумма доставки - 1000',
    icon: BanknotesIcon,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.colors.brown,
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    transition: 'all 0.3s',
    ':hover': {
      transform: 'scale(1.1)'
    }
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.colors.brown,
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function DeliveryCards() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
      <feature.icon color='brown' className="h-5 w-5 text-white" aria-hidden="true"/>
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="xl" py="xl" className='relative before:bg-clip'>
      {/* <Group position="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group> */}

      <Title order={2} className={classes.title} align="center" mt="sm">
            Доставка
      </Title>

      <Text color='black' className={classes.description} align="center" mt="md">
        Какой-то короткий текст про доставку. Можно чуть подлиннее
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}