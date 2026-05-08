"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const registerSchema = z.object({
  name: z.string().min(2, "Họ tên phải tối thiểu 2 ký tự"),

  email: z
    .string()
    .min(1, "Email không được để trống")
    .email("Email không hợp lệ"),

  phone: z
    .string()
    .min(10, "Số điện thoại không hợp lệ")
    .regex(
      /(03|05|07|08|09)+([0-9]{8})\b/,
      "Số điện thoại Việt Nam không hợp lệ",
    ),

  password: z
    .string()
    .min(6, "Mật khẩu phải tối thiểu 6 ký tự")
    .max(32, "Mật khẩu tối đa 32 ký tự"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data);

    // call api register here
  };

  return (
    <main className="min-h-[90vh] flex items-center justify-center p-4 my-8">
      <Card className="w-full max-w-md border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-2">
            <span className="text-3xl font-serif italic text-primary">
              Floris
            </span>
          </div>

          <CardTitle className="text-2xl font-serif font-medium text-primary">
            Tạo tài khoản mới
          </CardTitle>

          <CardDescription className="text-muted-foreground italic">
            Gửi gắm yêu thương qua từng cánh hoa cùng Floris
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>

              <Input
                id="name"
                type="text"
                placeholder="Nguyễn Văn A"
                {...register("name")}
              />

              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="hoa@example.com"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại</Label>

              <Input
                id="phone"
                type="tel"
                placeholder="0901234567"
                {...register("phone")}
              />

              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Đang đăng ký..." : "Đăng ký thành viên"}
              </Button>
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground italic">
                Hoặc tham gia bằng
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-border hover:bg-accent/10"
          >
            Đăng ký với Google
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Bằng cách đăng ký, bạn đồng ý với{" "}
            <Link
              href="/terms"
              className="underline hover:text-primary transition-colors"
            >
              Điều khoản dịch vụ
            </Link>
          </div>

          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Đã có tài khoản?</span>

            <Link
              href="/login"
              className="text-secondary font-medium hover:underline"
            >
              Đăng nhập ngay
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default RegisterPage;
