import { createContext } from "react";
import { Review } from "@/types/review";

export const TabContext = createContext(
	{} as {
		tabIndex: number;
		setTabIndex: React.Dispatch<React.SetStateAction<number>>;
		reviews: Review[];
	}
);
