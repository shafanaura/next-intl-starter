import HomeScreen from "@/screens/home";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.Metadata.title;
  return { title };
}

export default function Home() {
  return <HomeScreen />;
}
