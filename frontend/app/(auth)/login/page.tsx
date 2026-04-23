import React from "react";
import Link from "next/link";
import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Đăng nhập | Floris - Tiệm Hoa Thủ Công",
  description:
    "Chào mừng bạn quay trở lại với Floris. Đăng nhập để quản lý đơn hàng và nhận ưu đãi hoa tươi mỗi ngày.",
};

const LoginPage = () => {
  return (
    // Sử dụng thẻ <main> để chuẩn SEO, min-h-screen để căn giữa màn hình
    <main className="min-h-[80vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
        <CardHeader className="space-y-2 text-center">
          {/* Logo hoặc tên thương hiệu */}
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
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80">
                Email của bạn
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="bg-background/50 border-border focus:ring-primary/30"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password text-foreground/80">Mật khẩu</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-secondary hover:underline transition-colors"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                className="bg-background/50 border-border focus:ring-primary/30"
                required
              />
            </div>
            <Button className="w-full text-white font-medium hover:opacity-90 transition-all">
              Đăng nhập ngay
            </Button>
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

          <Button
            variant="outline"
            className="w-full border-border hover:bg-accent/10"
          >
            Tiếp tục với Google
          </Button>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>Bạn chưa có tài khoản?</span>
          <Link
            href="/register"
            className="text-secondary font-medium hover:underline transition-colors decoration-secondary/30"
          >
            Đăng ký thành viên
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default LoginPage;
