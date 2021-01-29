export interface ConfigOption {
  key: string,
  value: string,
}

export interface ConfigSection {
  name: string,
  options: ConfigOption[],
}

export interface Config {
  sections: ConfigSection[],
}

export interface DagTag {
  name: string,
}

interface TimeDelta {
  days: number,
  microseconds: number,
  seconds: number,
  type: string,
}

interface CronExpression {
  type: string,
  value: string,
}

export interface Dag {
  dagId: string,
  rootDagId: string,
  isPaused: boolean,
  isSubdag: boolean,
  fileloc: string,
  fileToken: string,
  owners: Array<string>,
  description: string,
  scheduleInterval?: TimeDelta | CronExpression,
  tags: DagTag[],
}

enum DagRunState {
  'success',
  // TODO: add all enums
}

export interface DagRun {
  dagRunId: string,
  dagId: Dag['dagId'],
  executionDate: Date,
  startDate: Date,
  endDate: Date,
  state: DagRunState,
  externalTrigger: boolean,
  conf: JSON,
}

export interface EventLog {
  dagId: string,
  event: string,
  eventLogId: string,
  executionDate: Date,
  extra: string,
  owner: string,
  taskId: string,
  when: Date,
}

export interface Connection {
  connectionId: string,
  connType: string,
  host: string,
  login: string,
  schema: string,
  port: number,
  password: string,
  extra: string,
}

export interface Pool {
  name: string,
  slots: number,
  occupiedSlots: number,
  usedSlots: number,
  queuedSlots: number,
  openSlots: number
}

export interface Task {
  taskId: string,
  owner: string,
  startDate: Date,
  endDate: Date,
}

export interface TaskInstance {
  taskId: Task['taskId'],
  dagId: Dag['dagId'],
  executionDate: Date,
  startDate: Date,
  endDate: Date,
  duration: number,
  state: string, // TODO: create enum
  tryNumber: number,
  maxTries: number,
  hostname: string,
  unixname: string,
  pool: string,
  poolSlots: number,
  queue: string,
  priorityWeight: number,
  operator: string,
  queuedWhen: string,
  pid: number
  executorConfig: string,
  slaMiss: {
    taskId: Task['taskId'],
    dagId: Dag['dagId'],
    executionDate: Date,
    emailSent: boolean,
    timestamp: Date,
    description: string,
    notification_sent: boolean,
  },
}

export interface Variable {
  key: string,
  value: string,
}

export interface Version {
  version: string,
  gitVersion: string,
}

export interface XCom {
  key: string,
  timestamp: Date,
  executionDate: Date,
  taskId: Task['taskId'],
  dagId: Dag['dagId'],
  value: string,
}
