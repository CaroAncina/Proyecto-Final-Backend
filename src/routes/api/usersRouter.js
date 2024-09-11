import { Router } from "express";
import { isAuthenticated } from "../../middleware/auth.js";
import {
  getUserByEmail,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  changeUserRole,
} from "../../controllers/usersController.js";
import upload from "../../middleware/multer.js";
import { uploadProfileImage } from "../../controllers/usersController.js";
import { uploadDocuments } from "../../controllers/usersController.js";

const router = Router();

router.get("/:email", isAuthenticated, getUserByEmail);
router.get("/", isAuthenticated, getAllUsers);
router.post("/", createUser);
router.put("/:uid", isAuthenticated, updateUser);
router.delete("/:uid", isAuthenticated, deleteUser);
router.post("/premium/:uid", isAuthenticated, changeUserRole);
router.post(
  "/upload/profiles/:uid",
  isAuthenticated,
  upload.single("profile"),
  uploadProfileImage
);
router.post(
  "/:uid/documents",
  isAuthenticated,
  upload.array("documents", 5),
  uploadDocuments
);

export default router;
