"use client";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Page() {
  const [uid, setUid] = useState<string>("");

  useEffect(() => {
    // クライアントサイドでのみ実行
    const userId = Cookies.get('uid');
    setUid(userId as string);
  }, []);

  return (
    <div>
      <p>Current User ID: {uid ? uid : 'Loading...'}</p>
    </div>
  );
}
