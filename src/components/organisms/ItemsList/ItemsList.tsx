import { ItemCard } from '../../molecules'

interface ItemsListProps {
  items: Array<BriefItem>,
}

const ItemsList = ({ items }: ItemsListProps) => {
  return items ? (
    <div>
      {items.map((item: BriefItem) => <ItemCard key={'item-' + item.id} item={item} />)}
    </div>
  ) : null
}

export default ItemsList
