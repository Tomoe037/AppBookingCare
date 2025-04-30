import db from "../models/index.js";
const getAllCodeService = (typeInput) => {
    console.log(">> Service received type:", typeInput);
    return new Promise(async (resolve, reject) => {
      try {
        if (!typeInput) {
          resolve({
            errCode: 1,
            errMessage: "missing required parameter",
          });
        } else {
          let res = {};
          let allcode = await db.Allcode.findAll({
            where: { type: typeInput },
          });
          res.errCode = 0;
          res.data = allcode;
          resolve(res);
        }
      } catch (e) {
        reject(e);
      }
    });
  };
  export {
    getAllCodeService
  }