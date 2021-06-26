import LoadingGif from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h1>Loading....</h1>
      <img src={LoadingGif} alt="loading" />
    </div>
  );
};

export default Loading;
