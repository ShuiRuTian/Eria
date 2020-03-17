import React from 'react';
import { DownloadItem } from '@components/DownloadItem';

export default {
  title: 'Welcome',
};

export const ToStorybook = () => <DownloadItem gid="123123" />;

ToStorybook.story = {
  name: 'to Storybook',
};
