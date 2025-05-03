import { getTopDocTorHomeService } from "../services/user.service.js";

const getTopDocTorHome = async (req, res) => {
  let limit = parseInt(req.query.limit) || 10;
  try {
    let doctors = await getTopDocTorHomeService(limit);
    return res.status(200).json({
      errCode: 0,
      message: "OK",
      data: doctors,
    });
  } catch (e) {
    console.error("❌ Lỗi getTopDocTorHome:", e);
    return res.status(500).json({
      errCode: -1,
      message: "Lỗi từ server (getTopDocTorHome)",
    });
  }
};

export { getTopDocTorHome };
