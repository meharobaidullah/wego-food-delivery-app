import { FoodProduct } from '../../types/product';
import { Badge } from '../badge';
import './product-card.css';

import { GiftIcon } from '@heroicons/react/24/solid';

const PromotionTag = ({ type }: { type: string }) => {
  switch (type) {
    case 'discount':
      return <div className="card-promotion discount">%</div>;
    case '1+1':
      return <div className="card-promotion one-plus-one">1+1</div>;
    case 'gift':
      return (
        <div className="card-promotion gift">
          <GiftIcon className="icon" />
        </div>
      );
    default:
      return null;
  }
};

export const ProductCard = ({ product }: { product: FoodProduct }) => {
  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.name} loading="lazy" />

      {product.promotion && <PromotionTag type={product.promotion} />}

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>

        <div className="d-flex align-items-center mt-sm">
          <Badge text={product.rating.toFixed(2)} isRating />
          <Badge text={`${product.minCookTime}-${product.maxCookTime} min`} />

          {product.isNew && <Badge text="New" isNew />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
