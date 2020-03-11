import { ProgramState } from './States';
import {
  DownloadStateChangedAction, ActiveTaskChangeActions, StoppedTaskChangeActions, WaitingTaskChangeActions,
} from './Actions/ActionDefination';
import { ActiveTasksState, StoppedTasksState, WaitingTasksState } from './States/DownloadTaskStates';

const initialProgramState: ProgramState = {
  activeTaskState: { gids: [] },
  stoppedTasksState: { gids: [] },
  waitingTasksState: { gids: [] },
};

function activeActionReducer(state: ActiveTasksState, action: ActiveTaskChangeActions): ActiveTasksState {
  switch (action.behaviour) {
    case 'add': {
      const newGids = [...state.gids, action.gid];
      return { ...state, gids: newGids };
    }
    case 'remove': {
      const newGids = state.gids.filter((gid) => gid !== action.gid);
      return { ...state, gids: newGids };
    }
    default: throw new Error('');
  }
}

function stoppedActionReducer(state: StoppedTasksState, action: StoppedTaskChangeActions): StoppedTasksState {
  switch (action.behaviour) {
    case 'add': {
      const newGids = [...state.gids, action.gid];
      return { ...state, gids: newGids };
    }
    case 'remove': {
      const newGids = state.gids.filter((gid) => gid !== action.gid);
      return { ...state, gids: newGids };
    }
    default: throw new Error('');
  }
}

function waitingActionReducer(state: WaitingTasksState, action: WaitingTaskChangeActions): WaitingTasksState {
  switch (action.behaviour) {
    case 'add': {
      const newGids = [...state.gids, action.gid];
      return { ...state, gids: newGids };
    }
    case 'remove': {
      const newGids = state.gids.filter((gid) => gid !== action.gid);
      return { ...state, gids: newGids };
    }
    default: throw new Error('');
  }
}

export function reducers(state = initialProgramState, action: DownloadStateChangedAction): ProgramState {
  switch (action.type) {
    case 'ACTIVE':
      return {
        ...state, activeTaskState: activeActionReducer(state.activeTaskState, action),
      };
    case 'STOPPED':
      return {
        ...state, stoppedTasksState: stoppedActionReducer(state.activeTaskState, action),
      };
    case 'WAITING':
      return {
        ...state, waitingTasksState: waitingActionReducer(state.activeTaskState, action),
      };
    default: throw new Error('');
  }
}
