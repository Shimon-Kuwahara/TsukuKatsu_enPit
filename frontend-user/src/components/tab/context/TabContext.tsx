import { createContext } from "react";
import { Recruitment } from "@/types/recruitment";
import { Review } from "@/types/review";

export const TabContext = createContext(
  {} as {
    tabIndex: number;
    setTabIndex: React.Dispatch<React.SetStateAction<number>>;
    setRefreshTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    recruitments: Recruitment[];
    reviews: Review[];
  }
);
