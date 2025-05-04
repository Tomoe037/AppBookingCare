import db from "../models/index.js";

const getTopDocTorHomeService = async (limit) => {
  try {
    const doctors = await db.User.findAll({
      limit,
      where: { roleId: "R2" },
      order: [["createdAt", "DESC"]],
      attributes: {
        exclude: ["password"],
      },
      include: [
        { model: db.Allcode, as: "positionData", attributes: ["valueVi"] },
        { model: db.Allcode, as: "genderData", attributes: ["valueVi"] },
      ],
    });
   
    return doctors;
  } catch (error) {
    console.error("❌ Lỗi tại getTopDocTorHomeService:", error);
    throw new Error("Có lỗi xảy ra khi truy vấn dữ liệu bác sĩ từ database.");
  }
};

export { getTopDocTorHomeService };
