import React from "react";
import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ContactMain from "../components/contact";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const index = ({ chief, settings }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"Kontak"} />
      <ContactMain chief={chief} settings={settings} />
    </Wrapper>
  );
};

export default index;

export async function getStaticProps(context) {
  let chief, settings;

  const resChief = await fetch(`${ROOT_API}/${API_VERSION}/members/chief`);
  chief = await resChief.json();
  chief = chief.data;

  const resSettings = await fetch(`${ROOT_API}/${API_VERSION}/settings`);
  settings = await resSettings.json();
  settings = settings.data;
  settings = settings.find((setting) => setting.key == "site_email");

  return { props: { chief, settings }, revalidate: 60 };
}
