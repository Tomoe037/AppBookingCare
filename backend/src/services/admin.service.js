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
    positionId,
    roleId,
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
    positionId: positionId,
    roleId: roleId,
    image: image || null,
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
    attributes: { exclude: ["password"] },
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

const deleteUserService = async (id) => {
  try {
    const user = await db.User.findByPk(id);
    if (!user) {
      return { errCode: 1, message: "Không tìm thấy người dùng" };
    }

    await user.destroy();
    return { errCode: 0 };
  } catch (error) {
    throw error;
  }
};

// doctor manager service
const getAllDoctorsService = async () => {
  try {
    const doctors = await db.User.findAll({
      where: { roleId: "R2" },
      attributes: { exclude: ["password", "image"] },
      include: [
        {
          model: db.Allcode,
          as: "positionData",
          attributes: ["valueVi"],
        },
        {
          model: db.Allcode,
          as: "genderData",
          attributes: ["valueVi"],
        },
      ],
    });

    return {
      status: 200,
      body: {
        success: true,
        data: doctors,
      },
    };
  } catch (error) {
    console.error(" Lỗi trong getAllDoctorsService:", error);
    return {
      status: 500,
      body: {
        success: false,
        message: "Lỗi server khi lấy danh sách bác sĩ",
      },
    };
  }
};

const saveDoctorInfoService = async (data) => {
  const { doctorId, contentMarkdown, contentHTML, description } = data;

  try {
    const doctor = await db.User.findOne({
      where: { id: doctorId, roleId: "R2" },
    });

    if (!doctor) {
      return {
        status: 404,
        body: {
          success: false,
          message: "Không tìm thấy bác sĩ với ID đã cho.",
        },
      };
    }

    const existing = await db.Markdown.findOne({ where: { doctorId } });

    if (existing) {
      // ✅ Cập nhật bài viết
      existing.contentMarkdown = contentMarkdown;
      existing.contentHTML = contentHTML;
      existing.description = description;
      await existing.save();

      return {
        status: 200,
        body: {
          success: true,
          message: "Cập nhật thông tin bác sĩ thành công.",
        },
      };
    } else {
      // ✅ Thêm mới bài viết
      await db.Markdown.create({
        doctorId,
        contentMarkdown,
        contentHTML,
        description,
      });


      return {
        status: 201,
        body: {
          success: true,
          message: "Thêm mới thông tin bác sĩ thành công.",
        },
      };
    }
  } catch (err) {
    console.error("❌ Lỗi khi lưu thông tin bác sĩ:", err);
    return {
      status: 500,
      body: {
        success: false,
        message: "Lỗi server khi lưu thông tin bác sĩ.",
      },
    };
  }
};

const getDoctorInfoService = async (doctorId) => {
  try {
    // Kiểm tra tồn tại bác sĩ
    const doctor = await db.User.findOne({
      where: { id: doctorId, roleId: "R2" },
      include: [
        {
          model: db.Allcode,
          as: "positionData",
          attributes: ["valueVi"],
        },
      ],
      attributes: ["id", "firstName", "lastName", "image", "positionId"],
    });
    if (!doctor) {
      return {
        status: 404,
        body: {
          success: false,
          message: "Không tìm thấy bác sĩ với ID đã cho.",
        },
      };
    }

    // Tìm bài viết Markdown
    const markdown = await db.Markdown.findOne({
      where: { doctorId },
      attributes: ["contentMarkdown", "contentHTML", "description"],
    });

    if (!markdown) {
      return {
        status: 200,
        body: {
          success: true,
          hasData: false,
          data: {
            firstName: doctor.firstName,
            lastName: doctor.lastName,
            image: doctor.image,
            position: doctor.positionData?.valueVi || "", 
          },
          message: "Bác sĩ chưa có bài viết nào.",
        },
      };
    }

    return {
      status: 200,
      body: {
        success: true,
        hasData: true,
        data: {
          firstName: doctor.firstName,
          lastName: doctor.lastName,
          image: doctor.image,
          description: markdown.description,
          contentMarkdown: markdown.contentMarkdown,
          contentHTML: markdown.contentHTML,
          position: doctor.positionData?.valueVi || "",
        },
      },
    };
  } catch (err) {
    console.error("Lỗi getDoctorInfoService:", err);
    return {
      status: 500,
      body: {
        success: false,
        message: "Lỗi server khi lấy thông tin bác sĩ.",
      },
    };
  }
};

export {
  getAllCodeService,
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
  getAllDoctorsService,
  saveDoctorInfoService,getDoctorInfoService
};
