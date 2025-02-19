import { Router } from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
