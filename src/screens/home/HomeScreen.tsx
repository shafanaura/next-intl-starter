"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

function HomeScreen() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const { refresh } = useRouter();

  const changeLocale = (locale: string) => {
    document.cookie = `NEXT_APP_LOCALE=${locale}; path=/`;
    refresh();
  };

  return (
    <div className={styles.page}>
      <div>
        <h1 style={{ marginBottom: 12, textAlign: "center" }}>
          locale: {locale}
        </h1>
        <div className={styles.ctas}>
          <a
            style={{ minWidth: 140 }}
            rel="noopener noreferrer"
            onClick={() => changeLocale("en")}
            className={locale === "en" ? styles.primary : styles.secondary}
          >
            English
          </a>
          <a
            style={{ minWidth: 140 }}
            rel="noopener noreferrer"
            onClick={() => changeLocale("id")}
            className={locale === "id" ? styles.primary : styles.secondary}
          >
            Indonesia
          </a>
        </div>
      </div>
      <main className={styles.main}>
        <hr />
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            {t("started")} <code>src/app/page.tsx</code>.
          </li>
          <li>{t("save")}</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            {t("deploy")}
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            {t("docs")}
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {t("learn")}
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          {t("examples")}
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          {t("navigate")} nextjs.org →
        </a>
      </footer>
    </div>
  );
}

export default HomeScreen;
