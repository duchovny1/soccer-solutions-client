import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import * as ps from "../../../services/predictionsService";
import PredictionCard from "./PredictionCard";

const prediction1 =
  "For Manchester City, Sunday’s clash with Liverpool could prove a pivotal point in their Premier League season. Even though we are still in the early exchanges of the 2020/21 campaign, the Citizens, who trail the league leading Reds by five points, can ill afford to let their rivals widen the gap.";
const pred1Short =
  prediction1.length < 250 ? prediction1.substring(0, 249) : "";
const prediction2 =
  "For Manchester City, Sunday’s clash with Liverpool could prove a pivotal point in their Premier League season. Even though we are still in the early exchanges of the 2020/21 campaign, the Citizens, who trail the league leading Reds by five points, can ill afford to let their rivals widen the gap.A run of six wins and two draws from their last eight matches in all competitions sets Man City up nicely for Sunday’s heavyweight encounter, though Pep Guardiola – who has been beaten more times by Jurgen Klopp than any other manager in his career – will know his team need to play at an even higher level to claim the points.City thumped Liverpool 4-0 the last time the recently crowned champions visited the home of the team they deposed, though Sunday’s encounter promises to be a much closer run thing.";
const pred2Short =
  prediction2.length < 250 ? prediction2.substring(0, 249) : "";

const gamePredictions = [
  {
    homeTeamName: "Manchester City",
    awayTeamName: "Liverpool",
    homeTeamImgURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    awayTeamImgURL:
      "https://logoeps.com/wp-content/uploads/2011/08/liverpool-logo-vector.png",
    prediction: "Over 2.5",
    content: prediction1,
    shortContent: pred1Short,
  },
  {
    homeTeamName: "Manchester City",
    awayTeamName: "Liverpool",
    homeTeamImgURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    awayTeamImgURL:
      "https://logoeps.com/wp-content/uploads/2011/08/liverpool-logo-vector.png",
    prediction: "Over 2.5",
    content: prediction1,
    shortContent: pred2Short,
  },
  {
    homeTeamName: "Manchester City",
    awayTeamName: "Liverpool",
    homeTeamImgURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    awayTeamImgURL:
      "https://logoeps.com/wp-content/uploads/2011/08/liverpool-logo-vector.png",
    prediction: "Over 2.5",
    content: prediction1,
    shortContent: pred2Short,
  },
];

const PredictionsPage = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    ps.getAllPredictions().then((predictionsRes) =>
      setPredictions(predictionsRes)
    );
  }, []);

  return (
    <Container>
      {gamePredictions &&
        gamePredictions.map((x) => {
          return <PredictionCard prediction={x} />;
        })}
    </Container>
  );
};

export default PredictionsPage;
