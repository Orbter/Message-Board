import express, { Request, Response } from 'express';

export const handleLogin = (req: Request, res: Response) => {
  const { name } = req.body;

  console.log('Saving to DB:', name);
  res.status(200).json({ message: 'Success' });
};
