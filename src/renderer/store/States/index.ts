import { ActiveTasksState, StoppedTasksState, WaitingTasksState } from './DownloadTaskStates';

export interface ProgramState{
    activeTaskState: ActiveTasksState;
    stoppedTasksState: StoppedTasksState;
    waitingTasksState: WaitingTasksState;
}
