import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import MemberMain from "../../components/members";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const index = ({ members, structurals, periode, latestPeriode }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"Pengurus"} />
      <MemberMain
        members={members}
        structurals={structurals}
        periode={periode}
        latestPeriode={latestPeriode}
      />
    </Wrapper>
  );
};

export default index;

export async function getStaticProps(context) {
  let members, structurals, periode, latestPeriode;

  const resMembers = await fetch(`${ROOT_API}/${API_VERSION}/members`);
  members = await resMembers.json();
  members = members.data;

  const resStructurals = await fetch(`${ROOT_API}/${API_VERSION}/structurals`);
  structurals = await resStructurals.json();
  structurals = structurals.data;

  const resPeriode = await fetch(`${ROOT_API}/${API_VERSION}/periode`);
  periode = await resPeriode.json();
  periode = periode.data;

  const resLatestPeriode = await fetch(
    `${ROOT_API}/${API_VERSION}/periode/latest`
  );
  latestPeriode = await resLatestPeriode.json();
  latestPeriode = latestPeriode.data;

  return {
    props: { members, structurals, periode, latestPeriode },
    revalidate: 60,
  };
}
