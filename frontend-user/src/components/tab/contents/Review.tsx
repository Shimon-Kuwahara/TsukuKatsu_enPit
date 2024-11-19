import { useContext } from "react";
import { TabContext } from "@/components/tab/context/TabContext";
import ReviewCard from "@/components/elements/ReviewCard";

export default function Review() {
  const { reviews } = useContext(TabContext);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <p>この会社の最初のレビューを書いてみませんか？</p>
        )}
      </div>
    </>
  );
}
