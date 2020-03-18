import React from 'react';
import { DownloadItem } from '../src/renderer/components/DownloadItem';

export default {
  title: 'Welcome',
};

export const ToStorybook = () => <DownloadItem percentage={12} gid="123123" />;

ToStorybook.story = {
  name: 'to Storybook',
};
