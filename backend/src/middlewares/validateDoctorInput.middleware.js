export const validateDoctorInput = (req, res, next) => {
  const { doctorId, contentMarkdown, contentHTML, description } = req.body;

  if (!doctorId || !contentMarkdown || !contentHTML || !description) {
    return res.status(400).json({
      success: false,
      message: "Thiếu thông tin: tất cả các trường là bắt buộc.",
    });
  }

  next();
};
