import React from "react";
import SEO from "../components/seo";
import { Wrapper } from "../layout";
import AchievementMain from "../components/achievements";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const index = ({ achievements }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"Prestasi"} />
      <AchievementMain achievements={achievements} />
    </Wrapper>
  );
};

export default index;

export async function getStaticProps(context) {
  let achievements;

  const res = await fetch(`${ROOT_API}/${API_VERSION}/achievements`);
  achievements = await res.json();
  achievements = achievements.data;

  return { props: { achievements }, revalidate: 60 };
}
