import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { useSignup } from "@/features/users/mutations/useSignup";
import { Link } from "react-router-dom";

const userFormSchema = z.object({
  fullname: z.string().min(3, { message: "Campo obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(4, { message: "Senha inválida" })
    .refine(
      (value) => {
        const pwdRagex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        return pwdRagex.test(value);
      },
      { message: "Senha inválida" }
    ),
  role: z.string().min(3).optional(),
});

type UserFormData = z.infer<typeof userFormSchema>;

const SignupForm = () => {
  const { mutate: signup } = useSignup();
  const form = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    signup(data);
  };

  return (
    <div>
      <Form {...form}>
        <div className="">
          <h2 className="text-2xl font-bold mb-6">Criar Conta</h2>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
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
                  <FormDescription>
                    A senha deve conter uma letra maiúscula, uma letra
                    minúscula, um número e um caractere especial (ex: @, $, !,
                    %, *, ? ou &)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-white text-base"
            >
              Cadastrar
            </Button>
          </form>
        </div>
      </Form>
      <p className="text-center mt-5 text-neutral-600">
        Já possui uma conta?{" "}
        <Link to="/login" className="text-neutral-800 font-bold">
          Entre aqui
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
