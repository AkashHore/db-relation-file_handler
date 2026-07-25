import z from "zod";

export const teacherFormSchema = z.object({
  name: z
    .string()
    .min(2, { error: "Too short. Enter at least 2 characters" })
    .max(12, { error: "Limit reached: 12 characters max" }),
  subject: z.string().min(1, { error: "Please Assign a Subject for You" }),
});

export type TeacherFormType = z.infer<typeof teacherFormSchema>;

export const studentFormSchema = z.object({
  name: z
    .string()
    .min(2, { error: "Too short. Enter at least 2 characters" })
    .max(12, { error: "Limit reached: 12 characters max" }),
  teacherId: z.string().min(1, { error: "Please Assign a Teacher for You" }),
});

export type StudentFormType = z.infer<typeof studentFormSchema>;
