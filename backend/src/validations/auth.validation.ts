import { z } from 'zod'

export const registerSchema = z.object({
  body: z.object({
    fullName: z
      .string({ error: 'Họ và tên phải là chuỗi' })
      .trim()
      .min(1, 'Họ và tên là bắt buộc')
      .min(2, 'Họ và tên phải có ít nhất 2 ký tự')
      .max(50, 'Họ và tên không được vượt quá 50 ký tự'),

    userName: z
      .string({ error: 'Tên người dùng phải là chuỗi' })
      .trim()
      .min(1, 'Tên người dùng là bắt buộc')
      .min(6, 'Tên người dùng phải có ít nhất 6 ký tự')
      .max(20, 'Tên người dùng không được vượt quá 20 ký tự')
      .regex(/^[a-zA-Z0-9_]+$/, 'Tên người dùng chỉ được chứa chữ cái, số và dấu gạch dưới'),

    email: z
      .string({ error: 'Email phải là chuỗi' })
      .trim()
      .toLowerCase()
      .min(1, 'Email là bắt buộc')
      .email('Email không đúng định dạng'),

    password: z
      .string({ error: 'Mật khẩu phải là chuỗi' })
      .min(1, 'Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .max(32, 'Mật khẩu không được vượt quá 32 ký tự')
      .regex(/[A-Z]/, 'Mật khẩu phải chứa ít nhất 1 chữ in hoa')
      .regex(/[a-z]/, 'Mật khẩu phải chứa ít nhất 1 chữ thường')
      .regex(/[0-9]/, 'Mật khẩu phải chứa ít nhất 1 chữ số')
      .regex(/[^A-Za-z0-9]/, 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt')
  })
})

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({ error: 'Email phải là chuỗi' })
      .trim()
      .toLowerCase()
      .min(1, 'Email là bắt buộc')
      .email('Email không đúng định dạng'),

    password: z
      .string({ error: 'Mật khẩu phải là chuỗi' })
      .min(1, 'Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .max(32, 'Mật khẩu không được vượt quá 32 ký tự')
  })
})
