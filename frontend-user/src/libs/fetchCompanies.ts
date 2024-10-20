export const getAllCompanies = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const text = await res.text(); // JSON ではなく text としてレスポンスを取得
  console.log('API Response:', text); // レスポンス内容を確認

  try {
    return JSON.parse(text); // JSON.parse を使って直接解析
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    throw new Error('Invalid JSON response from API');
  }
};
