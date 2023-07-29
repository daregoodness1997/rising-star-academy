import { Button, Divider, Text, Collapse } from "@nextui-org/react";
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
     <>
       <Flex
         css={{
           py: "$20",
           gap: "$18",
           px: "$6",
         }}
         direction={"column"}
       >
         <Flex align={"center"} direction={"column"}>
           <Text span css={{ color: "$primary" }}>
             FAQ
           </Text>
           <Text h2>You Have Questions?</Text>
           <Text
             span
             css={{
               maxWidth: "700px",
               color: "$accents8",
               textAlign: "center",
             }}
           >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
             condimentum, nisl ut aliquam lacinia, nisl nisl aliquet aliquet
           </Text>
         </Flex>

         <Flex
           css={{
             gap: "$10",
             "@lg": {
               px: "$64",
             },
           }}
           direction={"column"}
         >
           <Collapse.Group>
             <Collapse title="What is Nistre Academy">
               <Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat.
               </Text>
             </Collapse>
             <Collapse title="How do you enroll">
               <Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat.
               </Text>
             </Collapse>
             <Collapse title="What's our mission">
               <Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat.
               </Text>
             </Collapse>
             <Collapse title="Where are we located">
               <Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat.
               </Text>
             </Collapse>
             <Collapse title="How do you contact us">
               <Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat.
               </Text>
             </Collapse>
             
           </Collapse.Group>
         </Flex>
       </Flex>

       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
