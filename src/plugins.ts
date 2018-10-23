import { t as defaultPlugin } from "./plugins/default"
import { t as ASHSQL } from "./plugins/ash-sql"
import { ASToMA } from "./tempalte";

const templates = [ASHSQL]

const PS = new Map<string, ASToMA>();

templates.map(st => { st.name, st.template })

export { PS as plugins, defaultPlugin }