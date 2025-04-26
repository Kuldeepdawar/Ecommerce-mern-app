import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    // Get token from Authorization header
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid token. Please login again",
      });
    }

    // Decode and verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Optional: check if decoded email/password matches admin credentials
    if (
      decoded.email !== process.env.ADMIN_EMAIL ||
      decoded.password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized. Please login again.",
      });
    }

    // Attach decoded user to request if needed
    req.admin = decoded;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default adminAuth;
