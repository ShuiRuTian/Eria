import React from 'react';

import { Button } from '@material-ui/core';

interface DownloadItemProp{
    gid: string;
}

export const DownloadItem: React.FC<DownloadItemProp> = (props: DownloadItemProp) => {
  const { gid } = props;
  return (
    <Button variant="contained" color="primary">
      Hello World
      {' '}
      {gid}
    </Button>
  );
};
