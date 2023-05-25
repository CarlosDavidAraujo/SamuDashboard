const sql = require("../config/db");

function execSQLQuery(sqlQuery) {
  return new Promise((resolve, reject) => {
    const request = new sql.Request();

    request
      .query(sqlQuery)
      .then((result) => {
        const data = result.recordset;
        resolve(data);
      })
      .catch((err) => {
        console.error("Error executing SQL query:", err);
        reject("Internal Server Error");
      });
  });
}

module.exports = execSQLQuery;
