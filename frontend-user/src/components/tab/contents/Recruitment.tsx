import { useContext } from "react";
import { TabContext } from "@/components/tab/context/TabContext";
import RecruitmentCard from "@/components/elements/RecruitmentCard";

export default function Review() {
  const { recruitments } = useContext(TabContext);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {recruitments.length > 0 ? (
          recruitments.map((recruitment) => (
            <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
          ))
        ) : (
          <p>この会社の求人はまだ公開されていません</p>
        )}
      </div>
    </>
  );
}
