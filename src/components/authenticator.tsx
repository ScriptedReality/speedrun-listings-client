import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "./ui/button";
 
const formSchema = z.object({
  username: z.string().min(1).max(50),
  password: z.string().min(7).max(255),
  emailAddress: z.string().email(),
})

function Authenticator() {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      emailAddress: ""
    }
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {

    try {

      // Try to create the account.
      const response = await fetch("https://speedrun-listings-server.onrender.com/accounts", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          emailAddress: values.emailAddress,
          username: values.username,
          password: values.password
        })
      });

      const responseJSON = await response.json();

      if (!response.ok) {

        throw new Error(responseJSON.message ?? "Unknown error.");

      }

    } catch (err) {

      alert(err);

    }

    setIsSubmitting(false);

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input required type="email" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input required {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input required type="password" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>Create account</Button>
      </form>
    </Form>
  );

}

export default Authenticator;