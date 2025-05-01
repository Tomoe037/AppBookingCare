import db from "../models/index.js";
import hashPassword from "../utils/hashPassword.js";
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

const createUserService = async (data) => {
  const {
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    address,
    gender,
    position,
    role,
    image,
  } = data;

  const hashedPassword = await hashPassword(password);

  const newUser = await db.User.create({
    email: email,
    password: hashedPassword,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    address: address,
    gender: gender,
    positionId: position,
    roleId: role,
    avatar: image || null,
  });

  return newUser;
};
export { getAllCodeService, createUserService };
