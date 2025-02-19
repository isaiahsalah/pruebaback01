import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findOne({
      where: { id }, // Buscar por el id proporcionado
    });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el usuario", error: error });
  }
};

// Función para editar un usuario
export const editUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // ID del usuario a editar
    const updatedUser = await UserModel.update(req.body, {
      where: { id },
      returning: true, // Devuelve el usuario actualizado
    });

    if (updatedUser[0] === 0) {
      // Si no se actualizó ninguna fila
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    res.status(200).json(updatedUser[1][0]); // Usuario actualizado
  } catch (error) {
    res.status(500).json({ message: "Error al editar el usuario" });
  }
};

// Función para eliminar un usuario
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // ID del usuario a eliminar
    const rowsDeleted = await UserModel.destroy({
      where: { id },
    });

    if (rowsDeleted === 0) {
      // Si no se eliminó ninguna fila
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};
