import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
export default function InvitationEmail() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Enqurious!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <Body className="bg-white font-sans">
          <Container className="max-w-[513px] mx-auto px-6  shadow-lg">
            <Section className="text-center h-[78px]">
              <Img
                src={`/static/enqurious-logo.png`}
                alt="Enqurious Logo"
                width={194}
                height={30}
                className=" mx-auto object-contain"
              />
            </Section>

            <Section className="text-center">
              <Heading className="text-2xl font-bold text-slate-800 m-0">
                👋 Welcome Aboard!
              </Heading>
              <Text className="text-base text-slate-500 m-1">
                We’re glad to have you here
              </Text>
            </Section>

            <Section className="flex justify-center py-5">
              <Img
                src="/static/welcome.png"
                alt="Welcome Illustration"
                className="object-contain"
                width={258}
                height={158}
              />
            </Section>

            <Section>
              <Text className="text-center text-base text-slate-800">
                It brings us immense pleasure to welcome you.
                <br /> Please complete the onboarding process by accepting this
                invite.
              </Text>

              <Section className="bg-yellow-50  p-4 rounded-lg ">
                <Text className="text-yellow-800 text-sm font-medium">
                  Attention needed
                </Text>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700 text-sm ml-5">
                  <li>The invite will expire in 24 hours.</li>
                  <li>
                    The invite can only be clicked once. Please complete the
                    process in one go.
                  </li>
                </ul>
              </Section>

              <Row className="text-center my-5">
                <Column>
                  <Button className=" bg-[#005ECC] text-white px-5 py-2 rounded hover:bg-blue-600 transition-all mx-auto text-lg">
                    Accept invite
                  </Button>
                </Column>
              </Row>

              <Text className="text-center  text-slate-600  text-sm">
                Please click{" "}
                <Link href="#" className="text-[#005ECC] underline">
                  here
                </Link>{" "}
                if the button is not working.
              </Text>
            </Section>
            <Hr />
            <Section className="text-center  ">
              <Text className="text-base text-slate-500">
                Sent with ❤️ from Enqurious by Mentorskool
              </Text>
              <Text className="text-base text-slate-500">
                Contact us at{" "}
                <Link
                  href="mailto:notifications@mentorskool.com"
                  className="text-[#005ECC] underline"
                >
                  notifications@mentorskool.com
                </Link>
              </Text>
              <Text className="text-base text-slate-500">
                Visit us at{" "}
                <Link
                  href="https://www.enqurious.com"
                  className="text-[#005ECC] underline"
                >
                  www.enqurious.com
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
