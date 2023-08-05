import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import MemberDeatilssMain from "../../components/member-details";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const MemberDynamicDetails = ({ member }) => {
  return (
    <Wrapper>
      <SEO pageTitle={member.name} />
      <MemberDeatilssMain member={member} />
    </Wrapper>
  );
};

export default MemberDynamicDetails;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const res = await fetch(`${ROOT_API}/${API_VERSION}/members/${id}`);
  const member = await res.json();

  return { props: { member } };
}
