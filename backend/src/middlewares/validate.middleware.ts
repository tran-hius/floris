import { Request, Response, NextFunction } from 'express'
import { ZodObject, ZodError } from 'zod'

export const validate = (schema: ZodObject<any>) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params
    })

    return next()
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        status: 'error',
        message: 'Dữ liệu không hợp lệ',
        errors: error.issues.map((err) => ({
          path: err.path.join('.'),
          message: err.message
        }))
      })
    }

    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    })
  }
}
