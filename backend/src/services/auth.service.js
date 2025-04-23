import db from "../models/index.js";
import hashPassword from "../utils/hashPassword.js";
import generateToken from "../utils/jwt.js";

const registerUser = async (data) => {
  const transaction = await db.sequelize.transaction();
  try {
    const existingUser = await db.User.findOne({
      where: { email: data.email },
      transaction,
    });

    if (existingUser) {
      return {
        errCode: 1,
        errMessage: "Email đã tồn tại.",
      };
    }

    const hashedPassword = await hashPassword(data.password);

    const newUser = await db.User.create(
      {
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        address: data.address,
        gender: data.gender,
        roleId: data.roleId,
      },
      { transaction }
    );

    const token = generateToken({ id: newUser.id, email: newUser.email });
    await transaction.commit();
    return {
      errCode: 0,
      message: "Đăng ký thành công!",
      user: { id: newUser.id, email: newUser.email },
      token,
    };
  } catch (error) {
    await transaction.rollback(); // Rollback nếu có bất kỳ lỗi nào
    throw error;
  }
};

export { registerUser };
