import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api";
import { Spinner } from "../../../GlobalStyle";
import SeeKanji from "../../seeKanji/SeeKanji";
import {
  AllJoyoContainer,
  Container,
  JoyoContainer,
  JoyoText,
  JoyoTitle,
  Kanji,
  PageNavButton,
  PaginationContainer,
  TextContainer,
} from "./style";
import { useNavigate } from "react-router-dom";

const JoyoKanji = () => {
  const [joyoData, setJoyoData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const kanjiPerPage = 100;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchJoyo = async () => {
      try {
        const response = await fetchData("https://kanjiapi.dev/v1/kanji/joyo");
        setJoyoData(response);
      } catch (error) {
        setError("couldn't fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchJoyo();
  }, []);

  const totalPages = Math.ceil(joyoData.length / kanjiPerPage);

  const handleKanjiClick = (kanji) => {
    if (kanji) {
      navigate(`/kanjiDetails/${kanji}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * kanjiPerPage;
  const currentKanjiData = joyoData.slice(
    startIndex,
    startIndex + kanjiPerPage
  );

  const joyoRowSize = 20;
  const joyoKanjiRow = Array.from(
    { length: Math.ceil(currentKanjiData.length / joyoRowSize) },
    (_, index) =>
      currentKanjiData.slice(
        index * joyoRowSize,
        index * joyoRowSize + joyoRowSize
      )
  );

  return (
    <Container>
      <SeeKanji />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : (
        <>
          <AllJoyoContainer>
            {joyoKanjiRow.map((row, index) => (
              <JoyoContainer key={index}>
                {row.map((kanji, subIndex) => (
                  <Kanji key={subIndex} onClick={() => handleKanjiClick(kanji)}>
                    {kanji}
                  </Kanji>
                ))}
              </JoyoContainer>
            ))}
          </AllJoyoContainer>
          <PaginationContainer>
            <PageNavButton
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              🢀
            </PageNavButton>
            <PageNavButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              🢂
            </PageNavButton>
          </PaginationContainer>
        </>
      )}
      <JoyoTitle>What are the Jōyō Kanji?</JoyoTitle>
      <TextContainer>
        <JoyoText>
          Joyo Kanji, or "Kanji for General Use," is a list of 2,136 kanji
          characters that the Japanese government has chosen as the standard set
          for everyday use. This list was first introduced in 1981 and got a
          major update in 2010 to better match the kanji people commonly use
          today. The Joyo Kanji list is organized by grade levels, with each
          grade adding new kanji characters for students to learn as they move
          through their schooling, from elementary to high school.
        </JoyoText>
        <JoyoText>
          The Joyo Kanji list is meant to help students learn kanji in a
          structured way, building up their knowledge step by step. The kanji in
          this list are picked based on how often they appear and how useful
          they are in daily life. Learning these kanji is important for Japanese
          students, not just for school, but also for getting by in everyday
          life. This list covers a wide range of kanji used in different places
          like books, newspapers, magazines, textbooks, and official documents.
          For people learning Japanese as a second language, knowing these kanji
          is key to becoming literate and fluent. The Joyo Kanji list is a
          helpful guide for both native speakers and learners of Japanese,
          showing them which kanji they need to know.
        </JoyoText>
        <JoyoText>
          Besides its use in education, the Joyo Kanji list helps keep written
          Japanese consistent and clear. By setting a standard set of kanji that
          everyone recognizes, the list makes sure that written communication is
          understandable across different media and platforms. This is
          especially important in official documents and formal writing, where
          clear communication is crucial.
        </JoyoText>
      </TextContainer>
    </Container>
  );
};

export default JoyoKanji;
