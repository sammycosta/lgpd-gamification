export interface Module {
  id: string | number
  name: string
  icon?: React.ReactNode
  points: number
  maxPoints: number
  locked: boolean
}

export enum ActivityType {
  QEA
}

export enum ActivityStatus {
  TODO,
  WRONG,
  RIGHT
}

export interface BaseActivity {
  id: number
  name: string
  status: ActivityStatus
}

export interface QEA {
  question: string
  options: {
    id: number
    text: string
  }[]
  answer: number
}

// Passo 3: A união discriminada que une tudo
export type Activity = BaseActivity & {
  type: ActivityType.QEA
  data: QEA
}
// | BaseActivity & {
//   type: ActivityType.Video;
//   data: VideoData;
// } | BaseActivity & {
//   type: ActivityType.Text;
//   data: TextData;
// };
