import { Wrapper } from "../layout";
import HomeMain from '../components/homes';
import SEO from "../components/seo";

export default function index() {
  
  return (
    <Wrapper>
      <SEO pageTitle={''} />
      <HomeMain />
    </Wrapper>
  )
}
