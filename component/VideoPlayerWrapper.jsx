// components/VideoPlayerWrapper.jsx
"use client";
import dynamic from "next/dynamic";

// Динамический импорт только на клиенте
const VideoPlayer = dynamic(() => import("./VideoPlayer"), { ssr: false });

export default function VideoPlayerWrapper(props) {
  return <VideoPlayer {...props} />;
}
