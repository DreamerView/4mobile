"use client";
import YouTube from "react-youtube";

const getYoutubeVideoId = (url) => {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : null;
};

const VideoPlayer = ({ url }) => {
  if(!url) {
    return "";
  }
  const videoId = getYoutubeVideoId(url);
  if (!videoId) return <p>❌ Неверная ссылка на видео</p>;

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  return (
    <div className="col-lg-6 px-md-5">
      <div
        className="rounded-4 mx-auto skeleton overflow-hidden"
        style={{
          maxWidth:1000,
          width:"100%",
          position: "relative",
          backgroundColor: "#000",
        }}
      >
          <YouTube videoId={videoId} opts={opts} style={{width:"100%",height:"auto",aspectRatio:"16/9"}} iframeClassName="rounded-4 border" loading="lazy" />
      </div>
    </div>
  );
};

export default VideoPlayer;
