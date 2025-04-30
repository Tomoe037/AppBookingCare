import { getAllCodeService } from "../services/user.service.js";

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

  export {
    getAllCode
  }