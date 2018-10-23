export interface MessageSchema {
  version: string
  groupKey?: string
  status: "resolved" | "firing"
  receiver?: string
  groupLabels?: { [s: string]: string }
  commonLabels?: { [s: string]: string }
  commonAnnotations?: { [s: string]: string }
  externalURL?: string
  alerts: AlertSchema[]
}

export interface AlertSchema {
  status: "resolved" | "firing";
  labels: { [s: string]: string }
  annotations: AlertAnnotationsSchema;
  startsAt: number;
  endsAt: number;
  generatorURL: string;
}

export interface AlertAnnotationsSchema {
  value: string | "";
  description?: string;
}