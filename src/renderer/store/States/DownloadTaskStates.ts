
interface Task {
    gids: string[];
}

export interface ActiveTasksState extends Task {
    waste?: string;
}

export interface WaitingTasksState extends Task {
    waste?: string;
}

export interface StoppedTasksState extends Task {
    waste?: string;
}

export interface SuspensionWindowState {
    isOpen: boolean;
}
