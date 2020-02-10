import Exporter, { isNodeEnv } from './exporter';
import createTemplate from './template';

let sql;

if (isNodeEnv()) {
  sql = require('sql.js');
} else {
  require('script-loader!sql.js');
  sql = window.SQL;
}

export { Exporter };

export default function(deckName, template) {
  return new Exporter(deckName, {
    template: createTemplate(template),
    sql
  });
}
