import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';

const placeholder = require('./img/placeholder.png').default;

export type StaffMemberProps = {
  name: string;
  subject: string;
  officeHours?: string;
  imagePath?: string;
  children?: React.ReactNode;
};

export default function StaffMemberCard({
  name,
  subject,
  officeHours,
  imagePath,
  children,
}: StaffMemberProps) {
  return (
    <Box
      sx={{
        padding: 1.5,
        display: 'grid',
        gridTemplateColumns: { md: '145px 2fr', sm: '1fr' },
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <img alt="" src={imagePath || placeholder} />
      </Box>
      <Box>
        <CardHeader title={name} subheader={subject} />
        <CardContent>
          {officeHours && (
            <>
              <Typography variant="subtitle2" component="div">
                Konsultacje:
              </Typography>
              <Typography>{officeHours}</Typography>
            </>
          )}
          {children && <Typography>{children}</Typography>}
        </CardContent>
      </Box>
    </Box>
  );
}
