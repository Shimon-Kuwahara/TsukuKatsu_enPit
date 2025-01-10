intern1 = Intern.create!(
  {
    nickname: 'TM',
    department: 30,
    grade: 4,
    labo: 'システム数理研究室：組み合わせ最適化を研究してるよ。',
    club: '無所属',
    achievements: '最適化ソルバーを使って最適化問題を解いた経験あり',
    experience: '大学入学時にPCを購入し、情報科学類2年次までの授業が主な経験',
    company_name: '株式会社Sassor',
    intern_detail: 'pythonを用いてデータ分析してその結果をもとにシステム開発する。僕は蓄電池の充放電スケジュール制御システムをpulpで開発しました。機械学習で翌日の電力価格を予測するモデルや家庭向けの消費電力モデルを開発しました。週1にミーティングで、進捗報告が必須業務',
    evaluation: 4,
    evaluation_reason: 'キャッチアップ資料があらかじめ用意されているため、自分の力で十分勧められる初心者に向いていると感じています。機械学習に興味がなくても、自分の関心に合わせて業務を変更できるのもいい点。',
    work_duration_description: '情報科学類2年次の夏からインターン開始。修士一年の現在まで三年間継続して、スケジュールに合わせて働いています。',
    weekly_hours_description: '月に20時間ほどフレックスで勤務。主に余裕のある土日に働くことが多い。',
    hourly_wage_description: '1050円からスタート。現在は1500円に昇給。先輩から時給の相談をしてみては？とアドバイスをもらい。自分で社員さんに相談し昇給してもらえた。',
    work_style: '土日がメインでつくばからフルリモート勤務。出社(本社：中目黒)はできるがしない。',
    application_reason: '文系の友達のゼミが早く、自分も将来の就活のことを考え、焦燥感にかられた。ブライダルバイトやオンライン家庭教師をやっていたが、働く時間が固定されており、働きたい時間に働けないことに不満を感じており、自由に働ける長期インターンを探した。一般的なJ長期インターン求人サイトから応募。5社程選考に進んだ結果、合格をもらえた。',
    acquired_skill: 'Pythonで機械学習の特徴抽出やチューニングなど、実務レベルの経験値を得ることができた。また、電力業界への理解、特に蓄電池に関する領域知識を得ることができた。',
    appeal: '選考フローは社員さんとの面接一回。課題(気象庁のホームページから気温をスクレイピングしてデータ分析の結果をプレゼンする形式)があった。面接までにpythonで実装し、合格をいただいた。',
    advise: '「いろんなところ受けて、受かるところから始めることが大切。長期インターンに興味があるならすぐに挑戦する行動力が大切。」',
    intern_overview: '【未経験からの挑戦】エネルギー業界に貢献するテクノロジー企業での機械学習エンジニア業務',
    catchphrase: '機械学習エンジニア必見',
    hourly_wage: 1500,
    weekly_hours: 20,
    work_duration: 36,
    industry: 0,
    occupation: 8,
    recruitment_id: nil
  }
)

intern2 = Intern.create!(
  {
    nickname: '正月休み',
    department: 30,
    grade: 4,
    labo: 'セキュリティとソフトウェア研究室：機械学習に個人のDNS問い合わせを学習させて、普段と異なるDNS問い合わせがあった場合の検知',
    club: '元体育会弓道部',
    achievements: '小学生からPC経験、自作PC組み立て経験、高校生からプログラミングを始める',
    experience: 'COJTでのチーム開発経験(Unity, C#を用いた新ジャンルボードゲームや、パスワードクラッカーを実装)、paiza経験',
    company_name: 'アクセル株式会社',
    intern_detail: '自社開発のAIフレームワークのAPI開発、ドキュメント作成、学習済みモデルの動作確認、動作確認用のプログラム作成（動画同士の違いを数値化する）。自分のスキルに応じて、配属先を決定する。アルゴリズムチームにて、Unity用の画像認識APIの開発。',
    evaluation: 4,
    evaluation_reason: '技術力はつく。自分が興味あることを結構やらせてもらえるし、授業や研究その他等忙しいときは融通してもらえるので助かる。困ったら気軽に聞ける。良いインターン先だと思います。',
    work_duration_description: '学部三年次のCOJT終了後にスタート。現在は3年目。',
    weekly_hours_description: '少ない分には自由だけど基本10時間。深夜はできない、休日もできない。平日ならどこでも自由で、授業と両立して働けます。',
    hourly_wage_description: '最初が2000円。昇給して2050円。',
    work_style: 'フルリモート',
    application_reason: 'お金をもらいながら、技術系の就職に生きる仕事がしたいと考えていて、実務経験や、実際に手を動かす機会が欲しかったため応募',
    acquired_skill: 'githubの利用、doxygenの使い方等',
    appeal: '面接では技術力経験値や大学での授業で友人にプログラミングを教える機会が多いことをアピール。',
    advise: 'COJT履修して、長期インターン挑戦のきっかけを作ろう！',
    intern_overview: '【COJT経由】AIフレームワークのAPI開発を担当するエンジニア長期インターン',
    catchphrase: 'COJT経験者',
    hourly_wage: 2050,
    weekly_hours: 10,
    work_duration: 36,
    industry: 0,
    occupation: 8,
    recruitment_id: nil
  }
)

feature2 = Feature.find_by!(name: '情報系学生💻')
feature3 = Feature.find_by!(name: '理系の学生📘')
feature5 = Feature.find_by!(name: '未経験から開始🚀')
feature7 = Feature.find_by!(name: '院生🎓')

intern1.features << feature2
intern1.features << feature3
intern1.features << feature5
intern1.features << feature7

intern2.features << feature2
intern2.features << feature3
intern2.features << feature5
intern2.features << feature7
