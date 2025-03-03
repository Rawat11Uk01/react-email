import {
  Column,
  Container,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";

import React from "react";

export default function TemplateFooter() {
  return (
    <Container>
      <Section>
        <Text style={primary}>Sent with ❤️ from Enqurious by Mentorskool</Text>
        <Text style={primary}>
          Contact us at{" "}
          <Link href="notifications@mentorskool.com">
            notifications@mentorskool.com
          </Link>
        </Text>
        <Text style={primary}>
          visit us at{" "}
          <Link href="https://www.enqurious.com/">www.enqurious.com</Link>
        </Text>
      </Section>
      <Section style={{ padding: "24px 0" }}>
        <Row>
          <Column align="right">
            <Link href="https://in.linkedin.com/company/enqurious">
              <Img
                alt="LinkedIn logo"
                src={`/static/linkedin.svg`}
                width={24}
                style={cursorPointer}
              />
            </Link>
          </Column>
          <Column style={{ width: "8px" }} />
          <Column align="left">
            <Link href="https://www.youtube.com/@Enqurious_Learning">
              <Img
                alt="youtube logo"
                src={`/static/youtube.svg`}
                width={24}
                style={{ ...cursorPointer, marginTop: "4px" }}
              />
            </Link>
          </Column>
        </Row>
      </Section>
    </Container>
  );
}

const primary = {
  color: "#64748B",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  textAlign: "center" as const,
};

const cursorPointer = {
  cursor: "pointer",
};
