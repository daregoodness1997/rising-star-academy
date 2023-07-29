import {
  Button,
  Dropdown,
  Link,
  Navbar,
  Switch,
  Text,
} from "@nextui-org/react";
import React from "react";
import { ModalLogin } from "../modal";
import { icons } from "./icons";
import { NistreLogo } from "./logo";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { GithubIcon } from "../icons/GithubIcon";

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = [
    "Programs",
    "Location",
    "About Us",
    "Blog",
    "Events",
    "Staffs",
  ];
  return (
    <Navbar
      isBordered
      css={{
        overflow: "hidden",
        "& .nextui-navbar-container": {
          background: "$background",
          borderBottom: "none",
          "@sm": {
            background: "transparent",
          },
        },
      }}
    >
      <Navbar.Brand
        css={{
          background: "$background",
          borderBottom: "none",
          "@sm": {
            background: "transparent",
          },
        }}
      >
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <NistreLogo />
        <Text b color="inherit" hideIn="xs">
          Nistre Academy
        </Text>
        <Navbar.Content
          hideIn="sm"
          css={{
            pl: "6rem",
          }}
        >
          <Dropdown>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Programs
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  svg: {
                    color: "$primary",
                    mr: "$4",
                  },
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="ACME scales apps to meet user demand, automagically, based on load."
                icon={icons.scale}
              >
                Performance Academy
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                icon={icons.activity}
              >
                Team Training
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="ACME runs on ACME, join us and others serving requests at web scale."
                icon={icons.flash}
              >
                Summer Soccer Camp
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                description="Applications stay on the grid with high availability and high uptime guarantees."
                icon={icons.server}
              >
                Youth Team
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link isActive href="#">
            Location
          </Navbar.Link>
          <Navbar.Link href="#">About Us</Navbar.Link>
          <Navbar.Link href="#">Blog</Navbar.Link>
          <Navbar.Link href="#">Events</Navbar.Link>
          <Navbar.Link href="#">Staffs</Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="$primary"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}

        {/* <Navbar.CollapseItem>
          <Switch
            checked={isDark}
            onChange={(e: any) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.CollapseItem> */}
      </Navbar.Collapse>
      <Navbar.Content>
        {/* <ModalLogin /> */}

        <Navbar.Item>
          <Button auto href="#">
            Contact Us
          </Button>
        </Navbar.Item>
        {/* <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item> */}
        {/* <Navbar.Item hideIn={"xs"}>
          <Switch
            checked={isDark}
            onChange={(e: any) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item> */}
      </Navbar.Content>
    </Navbar>
  );
};
