import Image from 'next/image'
 
export default function DisplayImage({src, fill, priority}) {
  return (
    // <Image
    //   src={src}
    //   width={width}
    //   height={height}
    //   alt="Picture of the author"
    // />
    <Image
    src={src}
    alt="pic of the author"
    fill={fill}
    priority={priority}
  />
  )
}