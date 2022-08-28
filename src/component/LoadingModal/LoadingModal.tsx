import LoadingModalContainer from "./LoadingModalContainer";

const LoadingModal = (): JSX.Element => {
  return (
    <LoadingModalContainer>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingModalContainer>
  );
};

export default LoadingModal;
