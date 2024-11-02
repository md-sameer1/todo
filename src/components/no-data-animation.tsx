import { FC, ReactElement } from "react";
import Lottie from "lottie-react";
import NoDataAnimationFile from "../lotties/no-data-animation-preview.json";

interface NoDataAnimationProps {
  text?: ReactElement<any, any>;
  button?: ReactElement<any, any>;
}

const NoDataAnimation: FC<NoDataAnimationProps> = ({ text, button }) => {
  return (
    <>
      {text}
      <Lottie
        animationData={NoDataAnimationFile}
        style={{ height: 275, marginTop: -50, marginBottom: -70 }}
      />
      {button}
    </>
  );
};

export default NoDataAnimation;
