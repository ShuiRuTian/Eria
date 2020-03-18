/* eslint-disable no-underscore-dangle */
/**
 * -1. download aria2 if not found in assiment folder. This work should be better if it belongs to installer.
 * 0. start aria2 according to platform with config.
 * 1. set one static/singleton downloader
 */
import { JsonRpcClient, aria2DownloadHelper, getAria2BinName } from 'aria2ts';
import fs from 'fs';
import { exec } from 'shelljs';

let _aria2RpcDownloader: JsonRpcClient|undefined;
const isAria2Running = false;
const _aria2BinName = getAria2BinName();

function getAria2RpcClient(): JsonRpcClient {
  if (!isAria2Running) {
    if (!fs.existsSync(_aria2BinName)) {
      aria2DownloadHelper('./');
      // TODO: generate config file.
    }
    // TODO: start aria2
    exec(`${_aria2BinName} --conf-path="./src/Downloader/aria2Config/aria2.conf"`, { async: true });

    throw new Error('aria2 is not running');
  }
  if (_aria2RpcDownloader === undefined) {
    // might future we will have one powerful function: you can use hash code to share link, you can use it to find another program in the computer and let download begin!
    // TODO: read port from config?
    const port = 6008;
    _aria2RpcDownloader = new JsonRpcClient(`'ws://localhost:${port}/jsonrpc'`);
    // TODO: what would happen if aria2 crash? How to deal with it?
    // 1. How to judge aria2 is crashed, will it send back an event or websocket would tell us about it?
    // 2. How to restart aria2?

    // TODO: addeventlistener to dispatch event.
    _aria2RpcDownloader.addEventListenerForWebSocket('open', (tmp) => console.log(tmp));
    _aria2RpcDownloader.addEventListenerForWebSocket('message', (tmp) => console.log(tmp));
    _aria2RpcDownloader.addEventListenerForWebSocket('error', (tmp) => console.log(tmp));
    _aria2RpcDownloader.addEventListenerForWebSocket('close', (tmp) => console.log(tmp));
  }
  return _aria2RpcDownloader;
}

export const downloader = getAria2RpcClient();
