"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
export default function LoginPage() {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(6).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md flex flex-col p-6 bg-white rounded-lg shadow-md">
        <Image
          src={"/dkpharmalogo.png"}
          alt="Logo"
          width={200}
          height={200}
          className="m-auto p-4"
        />
        <h1 className="text-2xl font-bold mb-4 text-center">
          Đăng Nhập Vào DKPharma
        </h1>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Username"
                      className="mb-4 p-2 border border-gray-300 rounded"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Password"
                      type="password"
                      className="mb-4 p-2 border border-gray-300 rounded"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
            >
              Đăng Nhập
            </Button>
          </form>
        </Form>
        {/* Add your login form or components here */}
        <div>
          <h3 className="text-center p-4 pb-0">
            Bạn chưa có tài khoản?
            <a href="/register" className="text-blue-500 px-2">Đăng ký</a>
          </h3>
        </div>
        <div className="text-center">
          <a href="/forgot-password" className="text-blue-500 hover:underline ">Lấy lại mật khẩu</a>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4">
          Đăng nhập đồng nghĩa với đã đồng ý 
          <a href="/terms" className="text-blue-500 hover:underline px-2 ">
          Điều khoản và chính sách 
          </a>
           của chúng tôi
        </div>
      </div>
    </div>
  );
}
