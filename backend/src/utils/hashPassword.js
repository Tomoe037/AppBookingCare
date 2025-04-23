import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashUserPassword = await bcrypt.hashSync(password, salt);
      resolve(hashUserPassword);
    } catch (e) {
      reject(e);
    }
  });
};
export default hashPassword;
