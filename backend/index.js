// index.js
import app from "./src/app.js";
import connectDB from "./src/config/connectDB.js";

const port = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB(); // Kết nối database
    app.listen(port, () => {
      console.log(`✅ backend is running on port ${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect DB:", err);
  }
})();
