import React from 'react';

import { Button, LinearProgress } from '@material-ui/core';

interface DownloadItemProp{
    // each downloading task has an unique gid.
    gid: string;
    // Downloaded / Total
    percentage: number;
    // Download speed, bytes/sec.
    downloadSpeed: number;
    // some information should not display when task is not begin.
    isDownloading?: boolean;
}

export const DownloadItem: React.FC<DownloadItemProp> = (props: DownloadItemProp) => {
  const { gid, percentage } = props;
  return (
    <>
      <Button variant="contained" color="primary">
        Hello World
        {' '}
        {gid}
      </Button>
      <LinearProgress variant="determinate" value={percentage} />
    </>
  );
};
