import { VideoPlayer } from "../components";

import promoVideo from "../assets/video/sipl-promo.mp4";

export default function Watch() {
  return (
    <>
      <VideoPlayer src={promoVideo} />
    </>
  );
}
