import { AlertSchema } from "../schema";
import { MakeSlackTemplate, ASToMA } from "../tempalte"

const template: ASToMA = (as: AlertSchema) => {
  return {
    text: as.annotations.description,
    color: "danger",
    fields: [
      { title: "DBNAME", value: as.labels["db_name"], short: true },
      { title: "INST", value: as.labels["inst"], short: true },
      { title: "EVENT", value: as.labels["event"], short: true },
      { title: "SQLID", value: as.labels["sql_id"], short: true },
      { title: "VALUE", value: as.annotations.value, short: false },
    ]
  }
}

export const t = MakeSlackTemplate("ash-sql", template)