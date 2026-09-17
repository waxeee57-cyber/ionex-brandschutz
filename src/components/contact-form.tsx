"use client";

import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/components/locale-provider";

type Status = "idle" | "submitting" | "success" | "error";

type Fields = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  country: string;
  mw: string;
  mwh: string;
  phase: string;
  message: string;
};

const emptyFields: Fields = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  country: "",
  mw: "",
  mwh: "",
  phase: "",
  message: "",
};

const fieldClass = "h-11 min-h-11 rounded-sm bg-raised text-base md:text-sm";

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  if (status === "success") {
    return (
      <Alert className="rounded-sm border-ok/40 bg-ok/10 px-5 py-6">
        <AlertTitle className="text-base text-foreground">
          {t.contactPage.successTitle}
        </AlertTitle>
        <AlertDescription className="mt-2 text-muted-foreground">
          {t.contactPage.successBody}
        </AlertDescription>
        <Button
          type="button"
          variant="outline"
          className="mt-5 h-11 min-h-11 rounded-sm"
          onClick={() => {
            setStatus("idle");
            setFields(emptyFields);
            setErrors({});
          }}
        >
          {t.contactPage.another}
        </Button>
      </Alert>
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const nextErrors: Partial<Record<keyof Fields, string>> = {};
    for (const key of ["name", "company", "email", "country", "message"] as const) {
      if (!fields[key].trim()) nextErrors[key] = t.form.required;
    }
    if (!fields.role) nextErrors.role = t.form.required;
    if (!fields.phase) nextErrors.phase = t.form.required;
    if (
      fields.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())
    ) {
      nextErrors.email = t.form.emailInvalid;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          name: fields.name.trim(),
          company: fields.company.trim(),
          email: fields.email.trim(),
          phone: fields.phone.trim(),
          country: fields.country.trim(),
          message: fields.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("bad");
      setFields(emptyFields);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {status === "error" && Object.keys(errors).length === 0 ? (
        <Alert variant="destructive" className="rounded-sm px-4 py-3">
          <AlertTitle>{t.contactPage.errorTitle}</AlertTitle>
          <AlertDescription>{t.contactPage.errorBody}</AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={t.form.name} error={errors.name} required>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field
          id="company"
          label={t.form.company}
          error={errors.company}
          required
        >
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            className={fieldClass}
            value={fields.company}
            onChange={(e) => update("company", e.target.value)}
            aria-invalid={Boolean(errors.company)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="role" label={t.form.role} error={errors.role} required>
          <Select
            value={fields.role || undefined}
            onValueChange={(value) => update("role", value)}
          >
            <SelectTrigger
              id="role"
              className="h-11 min-h-11 w-full rounded-sm bg-raised"
              aria-invalid={Boolean(errors.role)}
            >
              <SelectValue placeholder={t.form.role} />
            </SelectTrigger>
            <SelectContent>
              {t.form.roles.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field id="phase" label={t.form.phase} error={errors.phase} required>
          <Select
            value={fields.phase || undefined}
            onValueChange={(value) => update("phase", value)}
          >
            <SelectTrigger
              id="phase"
              className="h-11 min-h-11 w-full rounded-sm bg-raised"
              aria-invalid={Boolean(errors.phase)}
            >
              <SelectValue placeholder={t.form.phase} />
            </SelectTrigger>
            <SelectContent>
              {t.form.phases.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label={t.form.email} error={errors.email} required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field id="phone" label={t.form.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
      </div>

      <Field
        id="country"
        label={t.form.country}
        error={errors.country}
        required
      >
        <Input
          id="country"
          name="country"
          className={fieldClass}
          value={fields.country}
          onChange={(e) => update("country", e.target.value)}
          aria-invalid={Boolean(errors.country)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="mw" label={t.form.mw}>
          <Input
            id="mw"
            name="mw"
            inputMode="decimal"
            className={fieldClass}
            value={fields.mw}
            onChange={(e) => update("mw", e.target.value)}
          />
        </Field>
        <Field id="mwh" label={t.form.mwh}>
          <Input
            id="mwh"
            name="mwh"
            inputMode="decimal"
            className={fieldClass}
            value={fields.mwh}
            onChange={(e) => update("mwh", e.target.value)}
          />
        </Field>
      </div>

      <Field
        id="message"
        label={t.form.message}
        error={errors.message}
        required
      >
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder={t.form.messagePh}
          className="min-h-32 rounded-sm bg-raised text-base md:text-sm"
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>

      <p className="text-xs leading-relaxed text-muted-foreground">
        {t.contactPage.privacyNote}
      </p>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 min-h-11 w-full rounded-sm px-6 sm:w-auto"
      >
        {status === "submitting" ? t.form.sending : t.form.submit}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
        {required ? <span className="text-ember"> *</span> : null}
      </Label>
      {children}
      {error ? (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
