"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { login } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

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

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống")
    .email("Email không hợp lệ"),

  password: z.string().min(6, "Mật khẩu phải tối thiểu 6 ký tự"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();

  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await login(data);

      console.log(response);

      setUser(response.user);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-2">
            <span className="text-3xl font-serif italic text-primary">
              Floris
            </span>
          </div>

          <CardTitle className="text-2xl font-serif font-medium text-primary">
            Chào mừng bạn trở lại
          </CardTitle>

          <CardDescription className="text-muted-foreground italic">
            Nơi những đóa hoa kể câu chuyện của riêng bạn
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              handleSubmit(onSubmit)(e);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email của bạn</Label>

              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mật khẩu</Label>

                <Link
                  href="/forgot-password"
                  className="text-xs text-secondary hover:underline"
                >
                  Quên mật khẩu?
                </Link>
              </div>

              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password")}
              />

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập ngay"}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground italic">
                Hoặc tiếp tục với
              </span>
            </div>
          </div>

          <Button type="button" variant="outline" className="w-full">
            Tiếp tục với Google
          </Button>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>Bạn chưa có tài khoản?</span>

          <Link
            href="/register"
            className="text-secondary font-medium hover:underline"
          >
            Đăng ký thành viên
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default LoginPage;
