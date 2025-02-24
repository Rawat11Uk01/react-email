import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const WelcomeEmail = () => {
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
          <Container
            className="max-w-xl mx-auto p-6  shadow-lg"
            style={{ borderTop: "8px solid blue" }}
          >
            <Section className="text-center mb-6 mt-2">
              <Img
                src={`/static/enqurious.png`}
                alt="Enqurious Logo"
                width="200"
                className=" mx-auto"
              />
            </Section>

            <Section className="text-center">
              <Heading className="text-2xl font-bold text-gray-800">
                👋 Welcome Aboard!
              </Heading>
              <Text className="text-lg text-gray-600 ">
                We’re glad to have you here
              </Text>
            </Section>

            <Section className="flex justify-center py-6">
              <Img
                src="/static/unnamed.png"
                alt="Welcome Illustration"
                width={300}
              />
            </Section>

            <Section className="text-black text-base ">
              <Text className="text-center text-lg">
                It brings us immense pleasure to welcome you.
                <br /> Please complete the onboarding process by accepting this
                invite.
              </Text>

              <Section className="bg-yellow-100 text-[#D58D0E] p-4 rounded-lg ">
                <Text >Attention needed</Text>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The invite will expire in 24 hours.</li>
                  <li>
                    The invite can only be clicked once. Please complete the
                    process in one go.
                  </li>
                </ul>
              </Section>

              <Section className="flex justify-center mt-5">
                <Button className=" bg-[#005ECC] text-white px-5 py-2 rounded hover:bg-blue-600 transition-all mx-auto text-lg">
                  Accept invite
                </Button>
              </Section>

              <Text className="text-center  text-gray-600 mt-6 text-base">
                Please click{" "}
                <Link href="#" className="text-blue-500 underline">
                  here
                </Link>{" "}
                if the button is not working.
              </Text>
            </Section>
            <Hr />
            <Section className="text-center  text-gray-500  mt-2 space-y-2">
              <Text>Sent with ❤️ from Enqurious by Mentorskool</Text>
              <Text className="text-base">
                Contact us at{" "}
                <Link
                  href="mailto:notifications@mentorskool.com"
                  className="text-blue-500 underline"
                >
                  notifications@mentorskool.com
                </Link>
              </Text>

              <Text className="text-base">
                Visit us at{" "}
                <Link
                  href="https://www.enqurious.com"
                  className="text-blue-500 underline"
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
};

export default WelcomeEmail;
