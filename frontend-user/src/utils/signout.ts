import axios from "axios";
import Cookies from "js-cookie";

const signout = async () => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}auth/sign_out`, {
      headers: {
        "access-token": Cookies.get("access-token") || "",
        "client": Cookies.get("client") || "",
        "uid": Cookies.get("uid") || "",
      },
    });

    if (response.status === 200) {
      // クッキーを削除
      Cookies.remove("access-token");
      Cookies.remove("client");
      Cookies.remove("uid");
      window.dispatchEvent(new Event("cookieUpdated")); // cookie更新時にカスタムイベントを発火
      console.log("ログアウトしました");
    } else {
      console.error("ログアウトに失敗しました");
    }
  } catch (error) {
    console.error("ログアウト時にエラーが発生しました:", error);
  }
};

export default signout;
