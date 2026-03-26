"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogInFormSchema } from "@/schemas/login-form";

const socialLogin = [
  {
    key: 1,
    title: "Log In with Google",
    icon: "",
  },
  {
    key: 2,
    title: "Log In with Apple",
    icon: "",
  },
];

export function LogInForm() {
  const form = useForm<z.infer<typeof LogInFormSchema>>({
    resolver: zodResolver(LogInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LogInFormSchema>) {
    console.log(data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-login" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Email Input */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input 
                    {...field} 
                    placeholder="Enter your email" 
                    type="email"
                    />
                </Field>
              )}
            />
            {/* Password Input */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input {...field} placeholder="Enter your password" />
                </Field>
              )}
            />
            {/* Submit Button */}
            <Button type="submit">Login</Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
