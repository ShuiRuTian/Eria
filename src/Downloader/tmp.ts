/* eslint-disable @typescript-eslint/no-var-requires */
import { exec } from 'shelljs';

import { aria2DownloadHelper } from 'aria2ts';

aria2DownloadHelper('./');

exec('aria2c.exe --conf-path="./src/Downloader/aria2Config/aria2.conf"', { async: true });
