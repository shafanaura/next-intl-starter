import HomeScreen from "@/screens/home";
import { getMessages } from "next-intl/server";

type Params = Promise<{ locale: string }>;

export async function generateMetadata(props: { params: Params }) {
  const { locale } = await props.params;

  const messages: any = await getMessages({ locale });
  const title = messages.Metadata.title;
  return { title };
}

export default function Home() {
  return <HomeScreen />;
}
