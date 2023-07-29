import { Button, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Hero = () => {
  return (
    <Box
      css={{
        position: "absolute",
        top: "0",
        width: "100vw",
        height: "66vh",
        "@sm": {
          height: "65vh",
        },
      }}
    >
      <video autoPlay loop muted className="background-video">
        <source type="video/mp4" src="assets/video/hero-video.mp4" />
      </video>
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          mt: "$20",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          position: "relative",
          zIndex: 10,
          "@sm": {
            flexDirection: "row",
            mt: "$20",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            pt: "$13",

            display: "flex",
            flexDirection: "column",
            gap: "$5",
            textAlign: "center",
          }}
        >
          <Box
            css={{
              maxWidth: "800px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
                fontSize: "48px",
                lineHeight: "1.25",
                "@sm": {
                  fontSize: "96px",
                  lineHeight: "1.25",
                },
              }}
            >
              Want to join{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
                fontSize: "48px",
                lineHeight: "1.25",

                "@sm": {
                  fontSize: "96px",
                  lineHeight: "1.25",
                },
              }}
            >
              for{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
                fontSize: "48px",
                lineHeight: "1.25",

                "@sm": {
                  fontSize: "96px",
                  lineHeight: "1.25",
                },
              }}
              color="primary"
            >
              Nistre Academy
            </Text>
          </Box>

          <Text
            css={{
              color: "$accents8",
              textAlign: "center",
              maxWidth: "800px",
            }}
            size={"$lg"}
            span
          >
            Our passion is developing young stars to fufilling their potential
            in footabll
          </Text>

          <Flex
            css={{
              gap: "$8",
              pt: "$4",
              maxWidth: "800px",
              justifyContent: "center",
              flexDirection: "column",
              "@sm": {
                flexDirection: "row",
              },
            }}
            // wrap={"wrap"}
          >
            <Input
              placeholder="Enter your full name"
              size="lg"
              css={{
                width: "100%",
                "@sm": {
                  width: "240px",
                },
              }}
            />
            <Input
              placeholder="Enter your email address"
              size="lg"
              css={{
                width: "100%",
                "@sm": {
                  width: "240px",
                },
              }}
            />
            <Button color="primary" auto>
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
      />
    </Box>
  );
};
