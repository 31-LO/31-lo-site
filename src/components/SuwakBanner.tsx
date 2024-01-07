import Box from '@mui/material/Box';
import React, { ImgHTMLAttributes } from 'react';

const images: ImgHTMLAttributes<HTMLImageElement>[] = [
  {
    src: require('@site/static/img/projekty/su-wak.webp').default,
    alt: 'szkoła realizuje projekt samorządowy w ramach programu wsparcia samorządów uczniowskich su-w-ak',
  },
  {
    src: require('@site/static/img/projekty/su-wak-uczestniczy.jpg').default,
    alt: 'szkoła uczestniczy w programie wsparcia Samorządów uczniowskich su-w-ak',
  },
];

export default function SuwakBanner() {
  return (
    <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr'}
    }}>
      {images.map((props) => (
        <img {...props} />
      ))}
    </Box>
  );
}
