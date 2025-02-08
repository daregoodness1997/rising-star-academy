import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { NistreLogo } from "../navbar/logo";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Footer = () => {
  return (
    <Flex
      css={{
        px: "$6",
      }}
    >
      <Box as={"footer"} css={{ width: "100%", p: "$16" }}>
        <Box
          css={{
            px: "$4",
            "@md": {
              px: "$56",
            },
          }}
        >
          <Flex
            //   justify={'between'}
            align={"center"}
            wrap={"wrap"}
            css={{
              pt: "$8",
              gap: "$10",
              justifyContent: "center",
              "@md": {
                justifyContent: "space-between",
              },
            }}
          >
            <Flex
              css={{
                gap: "$6",
              }}
              wrap={"wrap"}
              align={"center"}
            >
              <NistreLogo />
              <Text b color="inherit" hideIn="xs">
                Rising Academy
              </Text>
            </Flex>
            <Flex
              css={{
                gap: "$6",
              }}
            >
              <Text span css={{ color: "$accents8" }}>
                Terms of Service
              </Text>
              <Text span css={{ color: "$accents8" }}>
                Privacy Policy
              </Text>
            </Flex>
            <Flex
              css={{
                gap: "$6",
              }}
            >
              <Text span css={{ color: "$accents8" }}>
                © Copyright 2023 Nistre Academy.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
