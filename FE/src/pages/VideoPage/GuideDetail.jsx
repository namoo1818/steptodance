import React, { useRef, useEffect, useState } from "react";
import styles from "./GuideDetail.module.css";
// import * as bodyPix from "@tensorflow-models/body-pix";
// import "@tensorflow/tfjs-backend-webgl";
import testVideo from "../../assets/PerfectNight_르세라핌.mp4";
// import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'

const GuideDetail = () => {
  const [isWindow, setIsWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  const handleBtn = () => {
    setIsPlaying(!isPlaying);
  };

  // const videoRef = useRef(null);
  // const canvasRef = useRef(null);
  // const opacityRef = useRef(100); // useRef를 사용하여 opacity 값을 저장
  // const [opacity, setOpacity] = useState(100); // 상태로 opacity 관리
  // const navigate = useNavigate(); // Use the useNavigate hook here

  // useEffect(() => {
  //   opacityRef.current = opacity; // 상태가 변경될 때마다 ref를 업데이트
  //   let animationFrameId;
  //   async function loadAndApplyModel() {
  //     const net = await bodyPix.load({
  //       architecture: "MobileNetV1",
  //       outputStride: 16,
  //       multiplier: 0.5,
  //       quantBytes: 2,
  //     });

  //     const video = videoRef.current;
  //     const canvas = canvasRef.current;
  //     let frameCount = 0;
  //     const skipFrames = 2;

  //     function updateCanvas() {
  //       if (++frameCount % skipFrames === 0) {
  //         net
  //           .segmentPerson(video, {
  //             flipHorizontal: false,
  //             internalResolution: "medium",
  //             segmentationThreshold: 0.5,
  //           })
  //           .then((segmentation) => {
  //             const foregroundColor = {
  //               r: 255,
  //               g: 255,
  //               b: 255,
  //               a: opacityRef.current,
  //             };
  //             const backgroundColor = { r: 0, g: 0, b: 0, a: 0 };
  //             const mask = bodyPix.toMask(
  //               segmentation,
  //               foregroundColor,
  //               backgroundColor
  //             );
  //             bodyPix.drawMask(canvas, video, mask, 1, 2, false);
  //           });
  //       }
  //       animationFrameId = requestAnimationFrame(updateCanvas);
  //     }

  //     video.addEventListener("loadeddata", () => {
  //       video.play();
  //       updateCanvas();
  //     });

  //     return () => {
  //       if (animationFrameId) {
  //         cancelAnimationFrame(animationFrameId);
  //       }
  //       video.removeEventListener("loadeddata", updateCanvas);
  //       net.dispose();
  //     };
  //   }

  //   if (videoRef.current && canvasRef.current) {
  //     loadAndApplyModel();
  //   }
  // }, [opacity]); // opacity를 의존성 배열에 포함시켜서 변경 감지

  // const handlePlayVideo = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.play();
  //   }
  // };

  // const handlePauseVideo = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.pause();
  //   }
  // };
  // const handleSeek = (e) => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.currentTime = e.target.value;
  //   }
  // };
  // const handleRecordVideo = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     navigate("/record", { state: { videoUrl: video.src } }); // Pass video URL as state
  //   }
  // };
  return (
    <div className={styles.mainView}>
       <button type="primary" onClick={handleBtn} style={{ marginBottom: 20 }}>
          플레이
        </button>
        {isWindow && (
          <div className={styles.wrapper}>
            <ReactPlayer
              url={testVideo}
              muted
              controls
              playing={isPlaying}
              width={"100%"}
              height={"100%"}
              className={styles.player}
            />
          </div>
        )}
    </div>
  );
};

export default GuideDetail;
