import { getAllCodeService ,createUserService} from "../services/admin.service.js";

const getAllCode = async (req, res) => {
    try {
      let data = await getAllCodeService(req.query.type);
       console.log(">>> query:", req.query);
      return res.status(200).json(data);
    } catch (e) {
      console.log("get all code err ", e);
      return res.status(200).json({
        errCode: -1,
        errMessage: "err from server",
      });
    }
  };

  const createUser = async (req, res) => {
    try {
      const userData = req.body;
  
      const newUser = await createUserService(userData);
  
      return res.status(200).json({
        errCode: 0,
        message: 'Tạo người dùng thành công!',
        user: newUser,
      });
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        message: error.message || 'Lỗi server',
      });
    }
  };

  export {
    getAllCode,createUser 
  }