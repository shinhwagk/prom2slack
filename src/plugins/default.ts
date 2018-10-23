import { AlertSchema } from "../schema";
import { MakeSlackTemplate, ASToMA } from "../tempalte"

const template = (as: AlertSchema) => {
  return {
    text: "<@> 111",
    // text: as.annotations.description,
    color: "danger",
    // actions: [{ name: "chart-db_time", text: "Chart", type: "button", value: "zfjs" }],
    // callback_id: "chart-db_time"
  }
}

export const t = MakeSlackTemplate("default", template)