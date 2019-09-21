export class Alert {

  constructor(
    public readonly alertType: AlertType,
    public readonly message: string
  ){}
}

export enum AlertType {
  SUCCESS = 'success',
  WARNNING = 'warnning',
  DANGER = 'danger',
  INFO = 'info'
}