import {
  CodeBlock,
  Column,
  Container,
  dracula,
  Heading,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function Email() {
  const code = `export default async (req, res) => {
    try {
      const html = await renderAsync(
        EmailTemplate({ firstName: 'John' })
      );
      return NextResponse.json({ html });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }`;
  return (
    <Html>
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
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/msLogo.png`}
            alt="Cat"
            width="300"
            height="auto"
            style={logo}
          />
          <Heading style={primary}>Welcome to mentorskool</Heading>

          <Hr />
          <Section style={{ padding: "10px", background: "#808080" }}>
            <Text style={secondary}>
              We started off like any other training company who believed we can
              up-skill corporate learners and make them project ready. Realized
              very soon how far we were from reality. And then COVID happened!
            </Text>
          </Section>

          <Section
            style={{
              padding: "10px",
              background: "#808080",
              marginTop: "10px",
            }}
          >
            <Text style={secondary}>
              We are now proud to open up these tools for L&D teams everywhere,
              It's a fresh new approach to learning for busy corporate employees
            </Text>
          </Section>
          <Section
            style={{
              padding: "10px",
              background: "#808080",
              marginTop: "10px",
            }}
          >
            <CodeBlock
              code={code}
              lineNumbers
              theme={dracula}
              language="javascript"
            />
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
}

const logo = {
  margin: "0 auto",
};

const container = {
  backgroundColor: "#1b1b1b",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  margin: "0 auto",
  padding: "68px 0 130px",
};

const primary = {
  color: "#fff",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  textAlign: "center" as const,
};

const secondary = {
  color: "#ffa31a",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  textAlign: "center" as const,
};
