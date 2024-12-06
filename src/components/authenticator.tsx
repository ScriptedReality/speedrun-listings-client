import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const accountCreationSchema = z.object({
  username: z.string().min(1).max(50),
  password: z.string().min(7).max(255),
  emailAddress: z.string().email(),
});

const sessionCreationSchema = z.object({
  username: z.string().min(1).max(50),
  password: z.string().min(7).max(255),
});

type Mode = "signin" | "register";

function Authenticator({
  mode,
  onClose,
  onModeChange,
}: {
  mode: Mode;
  onClose: () => void;
  onModeChange: (mode: Mode) => void;
}) {
  const form = useForm({
    resolver: zodResolver(
      mode === "register" ? accountCreationSchema : sessionCreationSchema
    ),
    defaultValues: {
      username: "",
      password: "",
      emailAddress: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  async function onSubmit(
    values: z.infer<typeof accountCreationSchema | typeof sessionCreationSchema>
  ) {
    setIsSubmitting(true);

    try {
      if (mode === "register" && "emailAddress" in values) {
        // Try to create the account.
        const accountCreationResponse = await fetch(
          "https://speedrun-listings-server.onrender.com/accounts",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              emailAddress: values.emailAddress,
              username: values.username,
              password: values.password,
            }),
          }
        );

        const accountCreationResponseJSON =
          await accountCreationResponse.json();

        if (!accountCreationResponse.ok) {
          throw new Error(
            accountCreationResponseJSON.message ?? "Unknown error."
          );
        }

        onModeChange("signin");
      }

      // Create a new session.
      const sessionCreationResponse = await fetch(
        "https://speedrun-listings-server.onrender.com/account/sessions",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        }
      );

      const sessionCreationResponseJSON = await sessionCreationResponse.json();

      if (!sessionCreationResponse.ok) {
        throw new Error(
          sessionCreationResponseJSON.message ?? "Unknown error."
        );
      }

      // Save the session token and account ID to the cookies.
      document.cookie = `accountID=${
        sessionCreationResponseJSON.accountID
      }; SameSite=Strict; Secure; Path=/; Expires=${new Date(
        sessionCreationResponseJSON.expirationDate
      )}`;
      document.cookie = `sessionToken=${
        sessionCreationResponseJSON.token
      }; SameSite=Strict; Secure; Path=/; Expires=${new Date(
        sessionCreationResponseJSON.expirationDate
      )}`;
      document.cookie = `sessionID=${
        sessionCreationResponseJSON.sessionID
      }; SameSite=Strict; Secure; Path=/; Expires=${new Date(
        sessionCreationResponseJSON.expirationDate
      )}`;

      onClose();
    } catch (err) {
      alert(err);
    }

    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <Tabs
        value={mode}
        onValueChange={(newValue) =>
          onModeChange(newValue as "signin" | "register")
        }
      >
        <TabsList>
          <TabsTrigger value="signin">Sign in</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
      </Tabs>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {mode === "register" ? (
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input required type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : undefined}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input required {...field} />
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
                <Input required type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="ghost" disabled={isSubmitting}>
          {mode === "register" ? "Create account" : "Sign in"}
        </Button>
      </form>
    </Form>
  );
}

export default Authenticator;
