import React from 'react';
import Box from '@material-ui/core/Box';
import ParallaxCarousel from './ParallaxCarousel';

const data = [
  {
    id: 1,
    title: 'ТЕХНИКА С ПРОБЕГОМ',
    subtitle: `Все автомобили прошли сервисное обслуживание и
    полностью готовы к эксплуатации
    Гаранития`,
    background: 'https://res.cloudinary.com/dpiuthi6q/image/upload/v1594127270/my-keystone-app/sneg21_h0pylm.webp',
    image: 'https://res.cloudinary.com/dpiuthi6q/image/upload/v1594127249/my-keystone-app/sneg1_f0movj.webp',
  },
  {
    id: 2,
    title: 'ТЕХНИКА С ПРОБЕГОМ',
    subtitle: `Все автомобили прошли сервисное обслуживание и
    полностью готовы к эксплуатации
    Гаранития`,
    background: 'https://res.cloudinary.com/dpiuthi6q/image/upload/v1594127270/my-keystone-app/sneg21_h0pylm.webp',
    image: 'https://res.cloudinary.com/dpiuthi6q/image/upload/v1594127249/my-keystone-app/sneg1_f0movj.webp',
  },
  {
    id: 3,
    title: 'ТЕХНИКА С ПРОБЕГОМ',
    subtitle: `Все автомобили прошли сервисное обслуживание и
    полностью готовы к эксплуатации
    Гаранития`,
    background: 'https://res.cloudinary.com/dpiuthi6q/image/upload/v1594127270/my-keystone-app/sneg21_h0pylm.webp',
    image: 'https://res.cloudinary.com/dpiuthi6q/image/upload/v1594127249/my-keystone-app/sneg1_f0movj.webp',
  },
  {
    id: 4,
    title: 'ТЕХНИКА С ПРОБЕГОМ',
    subtitle: `Все автомобили прошли сервисное обслуживание и
    полностью готовы к эксплуатации
    Гаранития`,
    background: 'https://res.cloudinary.com/dpiuthi6q/image/upload/v1594127270/my-keystone-app/sneg21_h0pylm.webp',
    image: 'https://res.cloudinary.com/dpiuthi6q/image/upload/v1594127249/my-keystone-app/sneg1_f0movj.webp',
  },
];

const Demo = () => (
  <Box width={'100%'} maxWidth={'100%'} mx={'auto'}>
    <ParallaxCarousel data={data} />
  </Box>
);

export default Demo;
