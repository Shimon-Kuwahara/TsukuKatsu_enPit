import { useContext } from "react";
import "@/styles/tabstyle.css";
import { TabContext } from "@/app/companies/[id]/page";

export default function Menu() {
	const { tabIndex, setTabIndex } = useContext(TabContext);
	return (
		<>
			<div style={{ display: "flex" }}>
				<div
					onClick={() => setTabIndex(0)}
					className={`tab ${tabIndex === 0 && "selected"}`}
				>
					求人
				</div>
				<div
					onClick={() => setTabIndex(1)}
					className={`tab ${tabIndex === 1 && "selected"}`}
				>
					口コミ
				</div>
				<div
					onClick={() => setTabIndex(2)}
					className={`tab ${tabIndex === 2 && "selected"}`}
				>
					ブログ
				</div>
			</div>
		</>
	);
}
