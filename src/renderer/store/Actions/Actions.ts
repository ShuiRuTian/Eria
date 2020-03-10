import {
  ACTIVE, STOPPED, WAITING, DownloadStateChangedAction,
} from './ActionDefination';

export function AddActiveTaskAction(gid: string): DownloadStateChangedAction {
  return {
    type: ACTIVE,
    behaviour: 'add',
    gid,
  };
}
export function RemoveActiveTaskAction(gid: string): DownloadStateChangedAction {
  return {
    type: ACTIVE,
    behaviour: 'remove',
    gid,
  };
}
export function AddStoppedTaskAction(gid: string): DownloadStateChangedAction {
  return {
    type: STOPPED,
    behaviour: 'add',
    gid,
  };
}
export function RemoveStoppedTaskAction(gid: string): DownloadStateChangedAction {
  return {
    type: STOPPED,
    behaviour: 'remove',
    gid,
  };
}
export function AddWaittingTaskAction(gid: string): DownloadStateChangedAction {
  return {
    type: WAITING,
    behaviour: 'add',
    gid,
  };
}
export function RemoveWaitingTaskAction(gid: string): DownloadStateChangedAction {
  return {
    type: WAITING,
    behaviour: 'remove',
    gid,
  };
}
