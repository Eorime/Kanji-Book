import React from "react";
import {
  Container,
  RESOURCES,
  Resource,
  ResourceContainer,
  ResourceName,
  ResourceNameContainer,
  ResourceText,
  ResourcesContainer,
  ResourcesTitle,
} from "./style";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <Container>
      <Navbar />
      <ResourcesTitle>Resources for self-study 🌸</ResourcesTitle>
      <ResourcesContainer>
        <ResourceContainer>
          <ResourceText>
            学習教材 <br></br>
            <br></br>
            学習教材
          </ResourceText>

          <ResourceNameContainer>
            <Link
              as="a"
              target="_blank"
              to="https://mfadhillah.wordpress.com/wp-content/uploads/2012/12/basic-kanji-book-1.pdf"
              style={{ textDecoration: "none" }}
            >
              <ResourceName>Basic Kanji I</ResourceName>
            </Link>
          </ResourceNameContainer>
        </ResourceContainer>
        <ResourceContainer>
          <ResourceText>
            学習教材 <br></br>
            <br></br>
            学習教材
          </ResourceText>
          <ResourceNameContainer>
            <Link
              as="a"
              target="_blank"
              to="https://mfadhillah.wordpress.com/wp-content/uploads/2012/12/basic-kanji-book-2_.pdf"
              style={{ textDecoration: "none" }}
            >
              <ResourceName>Basic Kanji II</ResourceName>
            </Link>
          </ResourceNameContainer>
        </ResourceContainer>
        <ResourceContainer>
          <ResourceText>
            学習教材 <br></br>
            <br></br>
            学習教材
          </ResourceText>

          <ResourceNameContainer>
            <Link
              as="a"
              target="_blank"
              to="https://jlptstudy.net"
              style={{ textDecoration: "none" }}
            >
              <ResourceName>JLPT Study</ResourceName>
            </Link>
          </ResourceNameContainer>
        </ResourceContainer>
        <ResourceContainer>
          <ResourceText>
            学習教材 <br></br>
            <br></br>
            学習教材
          </ResourceText>

          <ResourceNameContainer>
            <Link
              as="a"
              target="_blank"
              to="https://www.japanesepod101.com"
              style={{ textDecoration: "none" }}
            >
              <ResourceName>JapanesePod101</ResourceName>
            </Link>
          </ResourceNameContainer>
        </ResourceContainer>
      </ResourcesContainer>
      <RESOURCES>リソース</RESOURCES>
    </Container>
  );
};

export default Resources;
