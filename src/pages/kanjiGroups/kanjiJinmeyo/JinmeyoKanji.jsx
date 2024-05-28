import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api";
import { Spinner } from "../../../GlobalStyle";
import SeeKanji from "../../seeKanji/SeeKanji";
import {
  AllJinmeyoContainer,
  Container,
  JinmeyoContainer,
  JinmeyoTitle,
  Kanji,
} from "./style";
import { useNavigate } from "react-router-dom";

const JinmeyoKanji = () => {
  const [jinmeyoData, setJinmeyoData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJinmeyo = async () => {
      try {
        const response = await fetchData(
          "https://kanjiapi.dev/v1/kanji/jinmeiyo"
        );
        setJinmeyoData(response);
      } catch (error) {
        setError("couldn't fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchJinmeyo();
  }, []);

  const jinmeyoSliced = jinmeyoData ? jinmeyoData.slice(0, 100) : [];
  const jinmeyoRowSize = 20;
  const jinmeyoKanjiRow = Array.from(
    { length: Math.ceil(jinmeyoSliced.length / jinmeyoRowSize) },
    (_, index) =>
      jinmeyoSliced.slice(
        index * jinmeyoRowSize,
        index * jinmeyoRowSize + jinmeyoRowSize
      )
  );

  const handleKanjiClick = (kanji) => {
    if (kanji) {
      navigate(`/kanjiDetails/${kanji}`);
    }
  };

  return (
    <Container>
      <SeeKanji />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : (
        <AllJinmeyoContainer>
          {jinmeyoKanjiRow.map((row, index) => (
            <JinmeyoContainer key={index}>
              {row.map((kanji, subIndex) => (
                <Kanji key={subIndex} onClick={() => handleKanjiClick(kanji)}>
                  {kanji}
                </Kanji>
              ))}
            </JinmeyoContainer>
          ))}
        </AllJinmeyoContainer>
      )}
      <JinmeyoTitle>What are the Jinmeiyō Kanji?</JinmeyoTitle>
    </Container>
  );
};

export default JinmeyoKanji;
