import Stack from '@mui/material/Stack';
import React from 'react';
import banner from '@site/static/img/dzien-2.png';
import Link from '@docusaurus/Link';

export default function Announcement() {
  return (
    <Stack
      className="container"
      alignItems="center"
      gap={4}
      sx={{ padding: '2rem 1rem' }}
    >
      <img
        src={banner}
        alt=""
        width="700px"
        style={{
          maxWidth: '100%',
        }}
      />
      <Stack
        component="section"
        alignItems="center"
        sx={{ textAlign: 'center' }}
      >
        <h2>Dzień otwarty w naszym liceum już DZIŚ!</h2>
        <Link href="https://fb.me/e/1fWdJOYBo">
          Więcej informacji i zapisy na warsztaty w wydarzeniu na Facebooku
        </Link>
      </Stack>
    </Stack>
  );
}
