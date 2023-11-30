import Video from 'next-video';

export default function DisplayVideo({src}) {
  return <Video src={src} />;
}