import { defaultLocale } from "@/variables/locale";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const locale =
    (await cookies()).get("NEXT_APP_LOCALE")?.value || defaultLocale;

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default,
  };
});
