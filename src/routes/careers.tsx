import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { z } from "zod";
import * as Icons from "lucide-react";
import { SiteChrome } from "@/components/SiteChrome";
import { whatsappLink } from "@/lib/contact";
import {
  CAREER_CATEGORIES,
  CAREER_STEPS,
  EXPERIENCE_LEVELS,
  WORK_TYPES,
} from "@/lib/career-data";

const title = "Career & Team Joining | Himadri Creation";
const description =
  "Join the Himadri Creation team in Bankura. Apply as a photographer, cinematographer, editor, drone pilot, designer, content creator or intern.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CareersPage,
});

const optionalUrl = z
  .string()
  .trim()
  .max(300, "Link is too long")
  .refine((v) => v === "" || /^https?:\/\/[^\s.]+\.[^\s]{2,}$/i.test(v), "Enter a valid URL")
  .optional();

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80, "Name is too long"),
  whatsapp: z
    .string()
    .trim()
    .refine(
      (v) => /^\+?\d[\d\s-]{8,14}$/.test(v) && v.replace(/\D/g, "").length >= 10,
      "Enter a valid WhatsApp number (10–15 digits)",
    ),
  email: z
    .string()
    .trim()
    .max(255)
    .refine((v) => v === "" || z.string().email().safeParse(v).success, "Enter a valid email")
    .optional(),
  city: z.string().trim().min(2, "Please enter your current city").max(80),
  category: z.string().min(1, "Please select a category"),
  position: z.string().min(1, "Please select a position"),
  workType: z.string().min(1, "Please select a work type"),
  experience: z.string().min(1, "Please select your experience"),
  skills: z.string().trim().min(3, "Please describe your skills").max(500),
  equipment: z.string().trim().max(300).optional(),
  software: z.string().trim().max(300).optional(),
  portfolio: optionalUrl,
  instagram: optionalUrl,
  youtube: optionalUrl,
  resume: optionalUrl,
  rate: z.string().trim().max(120).optional(),
  availability: z.string().trim().max(120).optional(),
  intro: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = {
  fullName: "",
  whatsapp: "",
  email: "",
  city: "",
  category: "",
  position: "",
  workType: "",
  experience: "",
  skills: "",
  equipment: "",
  software: "",
  portfolio: "",
  instagram: "",
  youtube: "",
  resume: "",
  rate: "",
  availability: "",
  intro: "",
};

function buildMessage(v: FormValues): string {
  const line = (label: string, value?: string) => (value ? `${label}: ${value}\n` : "");
  return (
    `Hello Himadri Creation 👋\n\n` +
    `I would like to join the Himadri Creation team.\n\n` +
    `Name: ${v.fullName}\n` +
    `WhatsApp: ${v.whatsapp}\n` +
    line("Email", v.email) +
    `City: ${v.city}\n` +
    `Category: ${v.category}\n` +
    `Position: ${v.position}\n` +
    `Work Type: ${v.workType}\n` +
    `Experience: ${v.experience}\n` +
    `Skills: ${v.skills}\n` +
    line("Equipment", v.equipment) +
    line("Software", v.software) +
    line("Portfolio", v.portfolio) +
    line("Resume", v.resume) +
    line("Instagram", v.instagram) +
    line("YouTube", v.youtube) +
    line("Expected Rate", v.rate) +
    line("Availability", v.availability) +
    (v.intro ? `\nShort Introduction:\n${v.intro}\n` : "") +
    `\nI have submitted my application through the Himadri Creation Career page. Please let me know about the next steps.\n\n` +
    `Thank you,\n${v.fullName}`
  );
}

const labelCls = "mb-2 block text-xs font-semibold tracking-[0.14em] text-primary-dark uppercase";
const fieldCls =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

function CareersPage() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [ready, setReady] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const positions = useMemo(
    () => CAREER_CATEGORIES.find((c) => c.name === values.category)?.positions ?? [],
    [values.category],
  );

  const set = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const scrollToForm = (category?: string, position?: string) => {
    if (category) {
      setValues((prev) => ({ ...prev, category, position: position ?? "" }));
    }
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (submitting) return;
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    setReady(whatsappLink(buildMessage(parsed.data)));
    window.setTimeout(() => setSubmitting(false), 400);
    window.setTimeout(
      () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  };

  return (
    <SiteChrome active="Career">
      <main className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <section className="rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground shadow-lift sm:px-12 sm:py-20">
          <p className="text-[0.7rem] font-semibold tracking-[0.32em] text-accent uppercase">
            Career & Team Joining
          </p>
          <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            JOIN THE HIMADRI CREATION TEAM
          </h1>
          <p className="mt-4 text-base font-semibold tracking-wide text-primary-foreground/90">
            Create. Capture. Collaborate. Grow with Himadri Creation.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            We are always looking for talented photographers, cinematographers, editors, designers,
            creators and event professionals to join our growing creative team.
          </p>
          <button
            type="button"
            onClick={() => scrollToForm()}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 text-sm font-bold tracking-[0.18em] text-accent-foreground uppercase transition hover:-translate-y-0.5 hover:brightness-95"
          >
            Apply Now <Icons.ArrowRight className="h-4 w-4" />
          </button>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl text-primary-dark sm:text-4xl">
            Available career categories
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Choose the role that matches your craft — tap any position to start your application.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAREER_CATEGORIES.map((cat) => {
              const Icon = (Icons[cat.icon as keyof typeof Icons] ??
                Icons.Sparkles) as typeof Icons.Camera;
              return (
                <article
                  key={cat.id}
                  className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-4 text-xl text-primary-dark">{cat.name}</h3>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {cat.positions.map((pos) => (
                      <li key={pos}>
                        <button
                          type="button"
                          onClick={() => scrollToForm(cat.name, pos)}
                          className="w-full rounded-xl px-3 py-2 text-left text-sm text-muted-foreground transition hover:bg-secondary hover:text-primary"
                        >
                          {pos}
                        </button>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-border bg-secondary/60 p-6 sm:p-10">
          <h2 className="font-display text-2xl text-primary-dark sm:text-3xl">
            How the process works
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {CAREER_STEPS.map((step) => (
              <li key={step.no} className="rounded-2xl bg-card p-5 shadow-soft">
                <p className="text-2xl font-black text-accent">{step.no}</p>
                <p className="mt-2 font-semibold text-primary-dark">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section ref={formRef} id="apply" className="mt-16 scroll-mt-28">
          {ready ? (
            <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-lift sm:p-12">
              <h2 className="font-display text-3xl text-primary-dark">Application Ready! 🎉</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Your application details have been prepared. Continue to WhatsApp to send your
                application to the Himadri Creation team.
              </p>
              <a
                href={ready}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-[0.16em] text-primary-foreground uppercase transition hover:-translate-y-0.5"
              >
                Continue to WhatsApp →
              </a>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setReady(null)}
                  className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase hover:text-primary"
                >
                  Edit my application
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10"
            >
              <h2 className="font-display text-3xl text-primary-dark">Career application form</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked * are required. We reply on WhatsApp.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Field label="Full Name *" error={errors.fullName}>
                  <input
                    className={fieldCls}
                    value={values.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="WhatsApp Number *" error={errors.whatsapp}>
                  <input
                    className={fieldCls}
                    inputMode="tel"
                    value={values.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input
                    className={fieldCls}
                    type="email"
                    value={values.email ?? ""}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Current City *" error={errors.city}>
                  <input
                    className={fieldCls}
                    value={values.city ?? ""}
                    onChange={(e) => set("city", e.target.value)}
                    placeholder="Bankura"
                  />
                </Field>
                <Field label="Select Category *" error={errors.category}>
                  <select
                    className={fieldCls}
                    value={values.category}
                    onChange={(e) => {
                      set("category", e.target.value);
                      set("position", "");
                    }}
                  >
                    <option value="">Choose a category</option>
                    {CAREER_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Select Position *" error={errors.position}>
                  <select
                    className={fieldCls}
                    value={values.position}
                    onChange={(e) => set("position", e.target.value)}
                    disabled={positions.length === 0}
                  >
                    <option value="">
                      {positions.length ? "Choose a position" : "Select a category first"}
                    </option>
                    {positions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Work Type *" error={errors.workType}>
                  <select
                    className={fieldCls}
                    value={values.workType}
                    onChange={(e) => set("workType", e.target.value)}
                  >
                    <option value="">Choose work type</option>
                    {WORK_TYPES.map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Experience *" error={errors.experience}>
                  <select
                    className={fieldCls}
                    value={values.experience}
                    onChange={(e) => set("experience", e.target.value)}
                  >
                    <option value="">Choose experience</option>
                    {EXPERIENCE_LEVELS.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Camera / Equipment Available" error={errors.equipment}>
                  <input
                    className={fieldCls}
                    value={values.equipment ?? ""}
                    onChange={(e) => set("equipment", e.target.value)}
                    placeholder="Canon R6, 24-70mm, gimbal…"
                  />
                </Field>
                <Field label="Editing Software / Tools" error={errors.software}>
                  <input
                    className={fieldCls}
                    value={values.software ?? ""}
                    onChange={(e) => set("software", e.target.value)}
                    placeholder="Premiere Pro, Lightroom…"
                  />
                </Field>
                <Field label="Portfolio Link" error={errors.portfolio}>
                  <input
                    className={fieldCls}
                    value={values.portfolio ?? ""}
                    onChange={(e) => set("portfolio", e.target.value)}
                    placeholder="https://…"
                  />
                </Field>
                <Field
                  label="Resume / Portfolio File Link"
                  error={errors.resume}
                  hint="Share a Google Drive link — files can also be sent on WhatsApp."
                >
                  <input
                    className={fieldCls}
                    value={values.resume ?? ""}
                    onChange={(e) => set("resume", e.target.value)}
                    placeholder="https://drive.google.com/…"
                  />
                </Field>
                <Field label="Instagram Link" error={errors.instagram}>
                  <input
                    className={fieldCls}
                    value={values.instagram ?? ""}
                    onChange={(e) => set("instagram", e.target.value)}
                    placeholder="https://instagram.com/…"
                  />
                </Field>
                <Field label="YouTube Link" error={errors.youtube}>
                  <input
                    className={fieldCls}
                    value={values.youtube ?? ""}
                    onChange={(e) => set("youtube", e.target.value)}
                    placeholder="https://youtube.com/…"
                  />
                </Field>
                <Field label="Expected Salary / Per-Day Rate" error={errors.rate}>
                  <input
                    className={fieldCls}
                    value={values.rate ?? ""}
                    onChange={(e) => set("rate", e.target.value)}
                    placeholder="₹ per day / per month"
                  />
                </Field>
                <Field label="Availability" error={errors.availability}>
                  <input
                    className={fieldCls}
                    value={values.availability ?? ""}
                    onChange={(e) => set("availability", e.target.value)}
                    placeholder="Weekends, immediate, from next month…"
                  />
                </Field>
              </div>

              <div className="mt-6 grid gap-6">
                <Field label="Skills / Specialization *" error={errors.skills}>
                  <textarea
                    className={`${fieldCls} min-h-24`}
                    value={values.skills}
                    onChange={(e) => set("skills", e.target.value)}
                    placeholder="Candid wedding photography, colour grading, reels editing…"
                  />
                </Field>
                <Field
                  label="Short Introduction / Why do you want to join Himadri Creation?"
                  error={errors.intro}
                >
                  <textarea
                    className={`${fieldCls} min-h-32`}
                    value={values.intro ?? ""}
                    onChange={(e) => set("intro", e.target.value)}
                    placeholder="Tell us about yourself and your work."
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-bold tracking-[0.18em] text-primary-foreground uppercase transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Preparing…" : "Submit Application"}
              </button>
            </form>
          )}
        </section>
      </main>
    </SiteChrome>
  );
}

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string | undefined;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block" data-invalid={error ? "true" : undefined}>
      <span className={labelCls}>{label}</span>
      {children}
      {hint && !error ? <span className="mt-1 block text-xs text-muted-foreground">{hint}</span> : null}
      {error ? <span className="mt-1 block text-xs font-medium text-destructive">{error}</span> : null}
    </label>
  );
}