import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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
        display: 'grid',
        gridTemplateColumns: { md: '145px 2fr', sm: '1fr' },
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Zoom>
          <img alt="" src={imagePath || placeholder} />
        </Zoom>
      </Box>
      <Box>
        <CardHeader
          title={name}
          subheader={subject}
          sx={{
            '.MuiCardHeader-title': {
              fontSize: 16,
            },
            '.MuiCardHeader-subheader': {
              fontSize: 13,
              color: 'var(--ifm-font-color-base)',
            },
          }}
        />
        <CardContent>
          {officeHours && (
            <>
              <Typography variant="subtitle2" component="div">
                Konsultacje:
              </Typography>
              <Typography component="div">{officeHours}</Typography>
            </>
          )}
          {children && <Typography component="div">{children}</Typography>}
        </CardContent>
      </Box>
      <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
    </Box>
  );
}
