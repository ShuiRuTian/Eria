// src/store/chat/types.ts
export const ACTIVE = 'ACTIVE';
export const STOPPED = 'STOPPED';
export const WAITING = 'WAITING';

interface AddActiveTaskAction {
    type: typeof ACTIVE;
    behaviour: 'add';
    gid: string;
}

interface RemoveActiveTaskAction {
    type: typeof ACTIVE;
    behaviour: 'remove';
    gid: string;
}

type ActiveTaskChangeActions = AddActiveTaskAction | RemoveActiveTaskAction;

interface AddStoppedTaskAction {
    type: typeof STOPPED;
    behaviour: 'add';
    gid: string;
}

interface RemoveStoppedTaskAction {
    type: typeof STOPPED;
    behaviour: 'remove';
    gid: string;
}

type StoppedTaskChangeActions = AddStoppedTaskAction | RemoveStoppedTaskAction;

interface AddWaittingTaskAction {
    type: typeof WAITING;
    gid: string;
    behaviour: 'add';
}

interface RemoveWaitingTaskAction {
    type: typeof WAITING;
    behaviour: 'remove';
    gid: string;
}

type WaittingTaskChangeActions = AddWaittingTaskAction | RemoveWaitingTaskAction;

export type DownloadStateChangedAction = ActiveTaskChangeActions | StoppedTaskChangeActions | WaittingTaskChangeActions
