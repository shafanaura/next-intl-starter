import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "@/variables/locale";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localeDetection: false,
});
