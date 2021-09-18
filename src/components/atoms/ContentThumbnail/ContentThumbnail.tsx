import Image from 'next/image'

interface ContentThumbnailProps {
  src: string,
}

const ContentThumbnail = ({ src }: ContentThumbnailProps) => {
  return <Image src={src} alt="" width={50} height={50} />
}

export default ContentThumbnail
