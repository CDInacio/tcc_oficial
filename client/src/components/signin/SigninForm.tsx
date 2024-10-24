import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input.tsx";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const userFormSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(4, { message: "Senha inválida" }),
});

type UserFormData = z.infer<typeof userFormSchema>;

const SigninForm = () => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    // signin(data)
  };

  return (
    <>
      <Form {...form}>
        <h2 className="text-4xl font-bold mb-6">Login</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </Form>
      <p className="text-center mt-5 text-neutral-600">
        Não possui uma conta?{" "}
        <Link to="/cadastro" className="text-neutral-800 font-bold">
          Cadastre-se aqui
        </Link>
      </p>
    </>
  );
};

export default SigninForm;
