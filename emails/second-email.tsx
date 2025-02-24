import React from "react";
import {
  Button,
  Container,
  Font,
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

const SecondEmail = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>My email title</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Preview email</Preview>
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
        <Container
          className="p-4 bg-gray-100 max-w-3xl"
          style={{ border: "1px solid red" }}
        >
          <Section className=" mb-6">
            <Img
              src={`/static/enqurious.png`}
              alt="Company Logo"
              className="mx-auto"
              style={{ width: "200px", height: "auto", borderRadius: "4px" }}
            />
          </Section>

          <Section className="bg-white p-6 rounded-lg shadow-md">
            <Heading className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to Our Service!
            </Heading>
            <Text className="text-gray-700 mb-4">Hello,</Text>
            <Text className="text-gray-700 mb-6">
              We're excited to have you with us. To get started, please click
              the button below:
            </Text>
            <Button
              href="https://www.enqurious.com/lets-connect"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
            >
              Get Started
            </Button>
            <Hr className="my-6 border-t border-gray-200" />
            <Text className="text-gray-700 mb-4">
              If you have any questions, feel free to reply to this email.
            </Text>
            <Text className="text-gray-700">
              Best regards,
              <br />
              The Team
            </Text>
          </Section>

          <Section className="text-center mt-8">
            <Link
              href="https://www.enqurious.com/"
              className="text-blue-500 hover:underline mb-4 block"
            >
              Visit our website
            </Link>
            <Text className="text-gray-500 text-sm">
              © 2024 Your Company. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
};

// SecondEmail.PreviewProps = {
//   source: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
// };

export default SecondEmail;
