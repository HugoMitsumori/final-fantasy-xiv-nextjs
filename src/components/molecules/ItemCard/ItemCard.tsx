import { Card, ContentTitle, ContentThumbnail } from '../../atoms'

interface ItemCardProps {
  item: BriefItem,
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <a href={item.url}>
      <Card>
        <ContentThumbnail src={item.thumbnailUrl} />
        <ContentTitle text={item.name} />
      </Card>
    </a>
  )
}

export default ItemCard
