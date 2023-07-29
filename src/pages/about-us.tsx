import type { NextPage } from "next";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";
import { Box } from "../components/styles/box";

import { Footer } from "../components/footer";

const AboutUs: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main">
        {/* <Trusted /> */}
        {/* <Features1 /> */}
        
      </Box>
    </Layout>
  );
};

export default AboutUs;
