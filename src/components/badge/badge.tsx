import React from 'react';
import './badge.css';

import { StarIcon } from '@heroicons/react/24/solid';

interface BadgeProps {
  text: string;
  isNew?: boolean;
  isRating?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ text, isNew, isRating }) => {
  return (
    <span className={`badge ${!!isNew && 'badge-isNew'}`}>
      {!!isRating && <StarIcon className="badge-starIcon" />}

      {text}
    </span>
  );
};

export default Badge;
