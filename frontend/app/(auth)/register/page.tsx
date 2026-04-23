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
  title: "Tham gia cộng đồng Floris | Đăng ký tài khoản",
  description:
    "Trở thành thành viên của Floris để nhận bản tin về các mẫu hoa mới nhất và ưu đãi đặc quyền.",
};

const RegisterPage = () => {
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
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/80">
                Họ và tên
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Nguyễn Văn A"
                className="bg-background/50 border-border focus:ring-primary/30"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="hoa@example.com"
                className="bg-background/50 border-border focus:ring-primary/30"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground/80">
                Số điện thoại
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0901 234 567"
                className="bg-background/50 border-border focus:ring-primary/30"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground/80">
                Mật khẩu
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-background/50 border-border focus:ring-primary/30"
                required
              />
            </div>

            <div className="pt-2">
              <Button className="w-full text-white font-medium hover:opacity-90 transition-all bg-primary">
                Đăng ký thành viên
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
              className="text-secondary font-medium hover:underline transition-colors decoration-secondary/30"
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
