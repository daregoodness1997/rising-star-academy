import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features3 = () => {
   return (
     <>
       <Box
         css={{
           px: "$6",
           pb: "$14",
         }}
       >
         <Flex
           direction={"column"}
           justify={"center"}
           align={"center"}
           css={{
             pt: "$20",
           }}
         >
           <Text span css={{ color: "$primary" }}>
             About Us
           </Text>
           <Text h3>What to know about us</Text>
         </Flex>
         <Flex
           align={"center"}
           justify={"center"}
           wrap={"wrap"}
           css={{
             gap: "1rem",
             pt: "$14",
           }}
         >
           <Card css={{ mw: "500px",  }}>
             <Card.Body>
               <Flex css={{ gap: "0.5rem" }}>
                 <BoxIcon />
                 <Flex direction={"column"}>
                   <Text h5>Mission Statement</Text>
                   <Text span>
                     At Nistre, our mission is to provide a nurturing
                     environment that welcomes children from all backgrounds and
                     walks of life. We aim to create an inclusive platform where
                     young players, regardless of their socio-economic status,
                     can discover their football talent and develop critical
                     life skills. Through expert coaching, mentorship, and
                     holistic development programs, we empower these children to
                     cultivate leadership, teamwork, and resilience, fostering
                     personal growth both on and off the field. Our unwavering
                     commitment is to prepare these players to make a positive
                     impact in their communities and beyond, whether they pursue
                     a professional football career or contribute to society in
                     various meaningful ways.
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>
           <Card css={{ mw: "500px",  }}>
             <Card.Body>
               <Flex css={{ gap: "0.5rem" }}>
                 <BoxIcon />
                 <Flex direction={"column"}>
                   <Text h5>Vision Statement</Text>
                   <Text span>
                     Our vision is to be a catalyst for positive change,
                     embracing diversity and inclusivity within our football
                     community. We aspire to create an environment that
                     celebrates the uniqueness of each child, transcending
                     barriers and uniting young players from all backgrounds.
                     Through the powerful medium of football, we aim to instill
                     the core values of respect, empathy, and compassion,
                     empowering our players to become well-rounded leaders and
                     role models. We envision a future where our players,
                     enriched by their experiences with us, take on active roles
                     in fostering and driving positive social impact. By
                     providing an equal opportunity for growth and advancement,
                     we strive to nurture a generation of young changemakers who
                     contribute meaningfully to society
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>
         </Flex>
       </Box>

       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
