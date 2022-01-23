

import DestinationsComponent from '../components/destinationsComponent'
import Layout from "../components/layout";
import { getPagesData } from "../lib/links";
import { getData } from "../lib/getData";
import useSlider from "../lib/customHooks/useSlider"; 

export async function getServerSideProps() {
  const data = await getData('destinations')
  const allLinks = getPagesData();
  const siteTitle = "Space Tourism || Destinations";
  return {
    props: {
      allLinks,
      data,
      siteTitle,
    },
  };
}
export default function Destinations({allLinks, data, siteTitle }) {
  const [all, toggleCurrent, current] = useSlider(data); 
  return (
    <Layout siteTitle={siteTitle} allLinks={allLinks}>
      <DestinationsComponent
        toggleDestination={toggleCurrent} 
        destination={current}
        destinations={all}
      />
    </Layout>
  );
}
