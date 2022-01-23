
import HomeComponent from '../components/homeComponent'

import { getPagesData } from '../lib/links'

export async function getStaticProps() {
  const allLinks = getPagesData();
  const siteTitle = 'Space Tourism'
  return { 
    props: {
      allLinks,
      siteTitle
    },
  };
}
export default function Home({ allLinks, siteTitle}) {
  return (
    <Layout allLinks={allLinks} siteTitle={siteTitle}> 
      <HomeComponent/>
    </Layout>
  );
}