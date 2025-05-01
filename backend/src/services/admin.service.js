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

const getAllUsersService = async () => {
  const users = await db.User.findAll({
    attributes: ["id", "email", "firstName", "lastName", "address"],
    order: [["createdAt", "DESC"]],
  });
  return users;
};

const getUserByIdService = async (id) => {
  const user = await db.User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  return user;
};

const updateUserService = async (id, updatedData) => {
  try {
    const user = await db.User.findByPk(id);
    if (!user) {
      return { errCode: 1, message: "Không tìm thấy người dùng" };
    }

    delete updatedData.password;
    delete updatedData.email;

    await user.update(updatedData);
    return { errCode: 0 };
  } catch (err) {
    throw err;
  }
};

export {
  getAllCodeService,
  createUserService,
  getAllUsersService,getUserByIdService,
  updateUserService,
};
