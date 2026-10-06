"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().min(1, "Please enter your company."),
  message: z.string().min(10, "Please write at least 10 characters."),
});

type FormValues = z.infer<typeof schema>;

const input =
  "w-full border-0 border-b border-ink/70 bg-transparent py-3 text-base text-ink placeholder:text-ink/60 focus-visible:border-b-2 focus-visible:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="caption block">
        {label} *
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-xs font-semibold"
        >
          — {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900)); // demo only: nothing is sent
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="py-8">
        <p className="heading">Thank you.</p>
        <p className="mt-4 max-w-sm text-sm">
          This form is a demo, so nothing was actually sent.
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSent(false);
          }}
          className="mt-8 text-sm font-bold uppercase tracking-wider underline underline-offset-4"
        >
          Send another +
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mt-12 grid gap-x-6 gap-y-8 md:grid-cols-2"
    >
      <Field id="name" label="Name" error={errors.name?.message}>
        <input
          id="name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={input}
          {...register("name")}
        />
      </Field>
      <Field id="email" label="Email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={input}
          {...register("email")}
        />
      </Field>
      <div className="md:col-span-2">
        <Field id="company" label="Company" error={errors.company?.message}>
          <input
            id="company"
            autoComplete="organization"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={input}
            {...register("company")}
          />
        </Field>
      </div>
      <div className="md:col-span-2">
        <Field id="message" label="Message" error={errors.message?.message}>
          <textarea
            id="message"
            rows={3}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={input}
            {...register("message")}
          />
        </Field>
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider disabled:opacity-60"
        >
          {isSubmitting ? "Sending" : "Send"}
          <span
            aria-hidden="true"
            className="text-3xl font-light transition-transform duration-300 group-hover:rotate-90"
          >
            +
          </span>
        </button>
        <p className="mt-4 text-xs">
          Demo form: submissions are not stored or sent anywhere.
        </p>
      </div>
    </form>
  );
}
