import { NextFunction, Request, Response } from "express";

const validate =
  (resourceSchema: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const resource = req.body;
    try {
      // throws an error if not valid
      await resourceSchema.validate(resource);
      next();
    } catch (e: any) {
      console.error(e);
      res.status(400).json({ error: e.errors.join(", ") });
    }
  };

export default validate;
