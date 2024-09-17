import React from "react";
import Star from "./Star";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
      {Array.from({ length: totalStars }, (_, index) => {
        const starRating = index + 1;
        let fillPercentage = 0;

        if (rating >= starRating) {
          fillPercentage = 100;
        } else if (rating < starRating && rating > index) {
          fillPercentage = (rating - index) * 100;
        }

        return <Star key={index} fillPercentage={fillPercentage} />;
      })}
    </div>
  );
};

export default StarRating;
