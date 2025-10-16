import { Request, Response } from "express";
import { prisma, Prisma } from "@repo/product-db";

export const createCategory = async (req: Request, res: Response) => {
  const data: Prisma.CategoryCreateInput = req.body;

  const existingCategory = await prisma.category.findUnique({
    where: {
      slug: data.slug,
    },

    
  });

  if (existingCategory) {
    return res.status(400).json({ message: "Category already exists" });
  }
  const category = await prisma.category.create({ data });
  return res.status(201).json(category);
};
export const updateCategory = async (req: Request, res: Response) => {};

export const deleteCategory = async (req: Request, res: Response) => {};

export const getCategory = async (req: Request, res: Response) => {};

export const getCategories = async (req: Request, res: Response) => {};
