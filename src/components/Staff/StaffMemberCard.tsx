import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';

const placeholder = require('./img/placeholder.png').default;

export type StaffMemberProps = {
  firstName: string;
  lastName: string;
  titleOfAddress?: string;
  subject: string;
  officeHours: string;
  imagePath?: string;
};

export default function StaffMemberCard({
  firstName,
  lastName,
  titleOfAddress,
  subject,
  officeHours,
  imagePath,
}: StaffMemberProps) {
  const fullName = [titleOfAddress, firstName, lastName].join(' ');
  return (
    <Card
      sx={{ padding: 1.5, display: 'grid', gridTemplateColumns: '1fr 2fr' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img alt="" src={imagePath || placeholder} />
      </Box>
      <Box>
        <CardHeader title={fullName} subheader={subject} />
        <CardContent>
          <Typography variant="subtitle2" component="div">
            Konsultacje:
          </Typography>
          <Typography>{officeHours}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
