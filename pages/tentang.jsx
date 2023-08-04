import React from "react";
import SEO from "../components/seo";
import { Wrapper } from "../layout";
import AboutMain from "../components/about";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const index = ({ settings, structurals, members, quote }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"About"} />
      <AboutMain
        settings={settings}
        structurals={structurals}
        members={members}
        quote={quote}
      />
    </Wrapper>
  );
};

export default index;

export async function getStaticProps(context) {
  let settings, structurals, members, quote;

  const resSettings = await fetch(`${ROOT_API}/${API_VERSION}/settings`);
  settings = await resSettings.json();
  settings = settings.data;
  settings = {
    site_about_photo: settings.find(
      (setting) => setting.key == "site_about_photo"
    ).value,
    site_introduce_video_id: settings.find(
      (setting) => setting.key == "site_introduce_video_id"
    ).value,
  };

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

  const resQuote = await fetch(`${ROOT_API}/${API_VERSION}/quotes/chief`);
  quote = await resQuote.json();
  quote = quote.data;

  return { props: { settings, structurals, members, quote }, revalidate: 60 };
}
