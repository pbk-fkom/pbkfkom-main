import { Wrapper } from "../layout";
import HomeMain from "../components/homes";
import SEO from "../components/seo";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export default function index({
  settings,
  blogs,
  structurals,
  members,
  quotes,
}) {
  return (
    <Wrapper>
      <SEO pageTitle={""} />
      <HomeMain
        settings={settings}
        blogs={blogs}
        structurals={structurals}
        members={members}
        quotes={quotes}
      />
    </Wrapper>
  );
}

export async function getStaticProps(context) {
  let settings, blogs, structurals, members, quotes;

  const resSettings = await fetch(`${ROOT_API}/${API_VERSION}/settings`);
  settings = await resSettings.json();
  settings = settings.data;
  settings = {
    site_instagram_account: settings.find(
      (setting) => setting.key == "site_instagram_account"
    ).value,
    site_youtube_channel: settings.find(
      (setting) => setting.key == "site_youtube_channel"
    ).value,
    site_introduce_video_id: settings.find(
      (setting) => setting.key == "site_introduce_video_id"
    ).value,
  };

  const resBlogs = await fetch(`${ROOT_API}/${API_VERSION}/posts`);
  blogs = await resBlogs.json();
  blogs = blogs.data;

  const resStructurals = await fetch(`${ROOT_API}/${API_VERSION}/structurals`);
  structurals = await resStructurals.json();
  structurals = structurals.data;
  structurals = structurals.filter(
    (structural) =>
      !structural.name.includes("Pengembangan Sumber Daya Manusia")
  );

  const resMembers = await fetch(`${ROOT_API}/${API_VERSION}/members/active`);
  members = await resMembers.json();
  members = members.data;
  members = members.filter((member) =>
    member.structuralId.name.includes("Badan Pengurus Harian")
  );

  const resQuotes = await fetch(`${ROOT_API}/${API_VERSION}/quotes`);
  quotes = await resQuotes.json();
  quotes = quotes.data;

  return {
    props: { settings, blogs, structurals, members, quotes },
    revalidate: 60,
  };
}
