import { getAllCodeService ,createUserService,getAllUsersService,getUserByIdService,updateUserService,deleteUserService} from "../services/admin.service.js";

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
  
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        message: error.message || 'Lỗi server',
      });
    }
  };

  const getAllUsers = async (req, res) => {
    try {
      const users = await getAllUsersService();
      return res.status(200).json({
        errCode: 0,
        data: users,
      });
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        message: error.message || 'Lỗi server khi lấy danh sách user',
      });
    }
  };

  const getUserById = async (req, res) => {
    try {
      const user = await getUserByIdService(req.params.id);
  
      if (!user) {
        return res.status(404).json({ message: "Không tìm thấy người dùng" });
      }
  
      return res.status(200).json(user);
    } catch (err) {
      console.error(" Lỗi tại getUserById:", err);
      return res.status(500).json({ message: "Lỗi server" });
    }
  };

  const updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const result = await updateUserService(id, updatedData);
  
      if (result.errCode === 0) {
        return res.status(200).json({ message: 'Cập nhật thành công' });
      } else {
        return res.status(400).json(result);
      }
    } catch (err) {
      console.error(' Lỗi khi cập nhật user:', err);
      return res.status(500).json({ message: err.message || 'Lỗi server' });
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await deleteUserService(userId);
  
      if (result.errCode === 0) {
        return res.status(200).json({ message: 'Xoá người dùng thành công' });
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.error("❌ Lỗi tại deleteUser:", error);
      return res.status(500).json({ message: 'Lỗi server' });
    }
  };

  export {
    getAllCode,createUser ,getUserById,getAllUsers,updateUser,deleteUser
  }