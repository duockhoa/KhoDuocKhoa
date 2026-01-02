"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "@/services/auth";
import { setCookie } from "@/services/setcookie";

export default function LoginForm() {
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await login(values.username, values.password);
      const { accessToken, refreshToken } = response;
      await setCookie({ accessToken, refreshToken });
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  function onError(errors: object) {
    console.log("Form Errors:");
    console.log(errors);
  }

  return (
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
          onClick={form.handleSubmit(onSubmit, onError)}
        >
          Đăng Nhập
        </Button>
      </form>
    </Form>
  );
}
