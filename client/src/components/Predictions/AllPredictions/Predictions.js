import { Button } from "react-bootstrap";
import CreatePredictionButton from "../CreatePrediction/CreatePredictionButton";
import PredictionsPage from "../AllPredictions/PredictionsPage";

const Predictions = () => {
  return (
    <div>
      <PredictionsPage />
      <CreatePredictionButton />
    </div>
  );
};

export default Predictions;
