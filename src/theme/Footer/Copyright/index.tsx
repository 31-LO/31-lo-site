import React, { useEffect, useState } from 'react';
import Copyright from '@theme-original/Footer/Copyright';
import type CopyrightType from '@theme/Footer/Copyright';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof CopyrightType>;

export default function CopyrightWrapper(props: Props): JSX.Element {
  const [address, setAddress] = useState('');

  useEffect(() => {
    setAddress('inspektor5@mjo.krakow.pl');
  }, []);

  return (
    <>
      <Copyright {...props} />
      <div>
        Dane kontaktowe Inspektora Ochrony Danych: Agnieszka Sowa, e-mail:{' '}
        <a href={`mailto:${address}`} style={{ color: 'white' }}>
          {address}
        </a>
      </div>
    </>
  );
}
