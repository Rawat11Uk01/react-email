import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Row,
  Column,
  Button,
} from "@react-email/components";
import * as React from "react";
const CourseAnnouncementEmail = () => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Logo Section */}
          <Section style={logoSection}>
            <Img
              src="https://www.enqurious.com/logo.png"
              alt="Enqurious Logo"
              width="150"
            />
          </Section>

          {/* Greeting */}
          <Section>
            <Text style={greeting}>👋 Monalisha</Text>
            <Text style={message}>
              Great news! We've just added an exciting new [content type] to
              your learning portal.
            </Text>
          </Section>

          {/* Course Information */}
          <Section style={card}>
            <Img
              src="https://your-image-source.com/course-image.png"
              alt="Course Image"
              style={courseImage}
            />
            <Text style={courseTitle}>
              Zero to Hero in Python for Machine Learning - Beginner to Advance
            </Text>

            <Row>
              <Column style={dateColumn}>
                <Text style={dateLabel}>Start date</Text>
                <Text style={dateValue}>Feb 10 2024 10:00 AM</Text>
              </Column>
              <Column style={dateColumn}>
                <Text style={dateLabel}>End date</Text>
                <Text style={dateValue}>Feb 20 2024 12:00 PM</Text>
              </Column>
            </Row>
          </Section>

          {/* Important Note Section */}
          <Section style={noteSection}>
            <Text style={noteTitle}>⚠ Important note</Text>
            <Text style={noteContent}>
              This is an assessment designed to challenge and validate your
              skills. You have [X] minutes to complete this assessment. The
              clock starts ticking as soon as you begin!
            </Text>
          </Section>

          {/* Encouragement & CTA */}
          <Section>
            <Text style={encouragement}>
              Stay focused, stay curious, and keep going strong! 🚀
            </Text>
            <Button pX={20} pY={12} style={button} href="https://your-link.com">
              Get Started
            </Button>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text>Please click here if the button is not working</Text>
            <Text style={footerText}>
              Sent with ❤️ from Enqurious by Mentorskool
              <br />
              Contact us at{" "}
              <a href="mailto:notifications@mentorskool.com">
                notifications@mentorskool.com
              </a>
              <br />
              Visit us at{" "}
              <a href="https://www.enqurious.com">www.enqurious.com</a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CourseAnnouncementEmail;

// Styles
const main = {
  backgroundColor: "#f4f4f4",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
};

const logoSection = {
  textAlign: "center",
  marginBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const message = {
  fontSize: "16px",
  color: "#333",
  marginBottom: "20px",
};

const card = {
  backgroundColor: "#F8FAFC",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
  textAlign: "center",
};

const courseImage = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "15px",
};

const courseTitle = {
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#1E40AF",
};

const dateColumn = {
  width: "50%",
  padding: "0 10px",
};

const dateLabel = {
  fontSize: "14px",
  color: "#64748B",
  marginBottom: "5px",
};

const dateValue = {
  fontSize: "14px",
  color: "#475569",
};

const noteSection = {
  backgroundColor: "#FEF3C7",
  padding: "15px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const noteTitle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#D97706",
  marginBottom: "5px",
};

const noteContent = {
  fontSize: "14px",
  color: "#B45309",
};

const encouragement = {
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const button = {
  backgroundColor: "#3B82F6",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
};

const footer = {
  textAlign: "center",
  padding: "20px 0",
  borderTop: "1px solid #e5e7eb",
  marginTop: "20px",
};

const footerText = {
  fontSize: "12px",
  color: "#9CA3AF",
};
