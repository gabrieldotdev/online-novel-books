import * as z from "zod";

export const loginSchema = z.object({
	email: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters.",
	}),
});

export const registerSchema = z.object({});
export const profileSchema = z.object({});
