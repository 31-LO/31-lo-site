import React from 'react';

const Layout: React.FC<{ children: React.ReactNode; title?: string; description?: string }> = ({ 
  children, 
  title, 
  description 
}) => (
  <div data-layout="layout" data-title={title} data-description={description}>
    {children}
  </div>
);

export default Layout;