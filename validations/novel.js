import * as z from "zod";

export const checkNovelSchema = z.object({
  originalName: z.string().min(1, {
    message: "Tên tác phẩm không được để trống",
  }),
  originalLink: z.string().url({
    message: "Link tác phẩm không hợp lệ",
  }),
});
