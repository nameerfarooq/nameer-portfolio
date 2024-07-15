import { useState, useEffect, useRef } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const VideoComponent = ({ hero }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("canplaythrough", handleCanPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("canplaythrough", handleCanPlay);
      }
    };
  }, []);

  return (
    <div className="video-container">
      {isLoading && (
        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          <Skeleton variant="rounded" width={250} height={80} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          <Skeleton variant="rounded" width={250} height={80} />
        </Stack>
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className={`flip-horizontal ${isLoading ? "hidden" : ""}`}
      >
        <source src={hero} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
