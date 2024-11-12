import { useContext } from "react";
import Menu from "./Menu";
import { TabContext } from "@/components/tab/context/TabContext";
import Blog from "../contents/Blog";
import Recruitment from "../contents/Recruitment";
import Review from "../contents/Review";

export default function Contents() {
  const { tabIndex } = useContext(TabContext);
  return (
    <>
      <Menu />
      {tabIndex === 0 && <Recruitment />}
      {tabIndex === 1 && <Review />}
      {tabIndex === 2 && <Blog />}
    </>
  );
}
