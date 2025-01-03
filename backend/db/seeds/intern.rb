# 初期化
Intern.delete_all
Feature.delete_all
InternFeature.delete_all

now = Time.now
Intern.create!(
  Array.new(11) do |i|
    {
      nickname: "Intern #{i + 1}",
      department: rand(0..24),
      grade: rand(0..9),
      labo: "Lab #{i + 1}",
      club: %w[サッカー部 吹奏楽部 無所属].sample,
      achievements: "Achievement #{i + 1}",
      experience: "経験#{i + 1}年",
      company_name: "Company #{i + 1}",
      intern_detail: "業務内容#{i + 1}",
      work_duration_description: "#{i + 1}か月",
      weekly_hours_description: "#{(i + 1) * 5}時間/週",
      hourly_wage_description: "時給#{(i + 1) * 200}円",
      work_style: %w[リモート 出社 ハイブリッド].sample,
      application_reason: "応募理由#{i + 1}",
      acquired_skill: "スキル#{i + 1}",
      appeal: "アピールポイント#{i + 1}",
      advise: "アドバイス#{i + 1}",
      evaluation: rand(1..5),
      evaluation_reason: "理由#{i + 1}",
      intern_overview: "概要#{i + 1}",
      catchphrase: "キャッチフレーズ#{i + 1}",
      hourly_wage: (i + 1) * 100,
      weekly_hours: (i + 1) * 10,
      work_duration: i + 1,
      industry: rand(0..8),
      occupation: rand(0..6),
      recruitment_id: nil,
      created_at: now,
      updated_at: now
    }
  end
)

intern1 = Intern.create(
  nickname: 'S',
  department: 17,
  grade: 2,
  labo: 'Softlab',
  club: '無所属',
  achievements: '26卒Sansan内定',
  experience: 'プログラミング歴1年, Railsを用いた簡単な個人開発',
  company_name: 'Techouse株式会社',
  intern_detail: 'Ruby on Railsを用いた社内プロダクトの保守・運用。機能の要件定義から実装までを行う。社内の勉強会や書籍の購入も自由なので、勉強することが仕事でした。',
  work_duration_description: '学部2年次の冬から',
  weekly_hours_description: '週２日はフルタイム、週１日は４時間。長期休暇期間中は週５フルタイム',
  hourly_wage_description: '研修終了の際に一律3万円。それ以降は、一律で時給1200円',
  work_style: '週２出社、週１リモート。オフィスの近くにインターン生専用の宿があるので、筑波大生はよくそこ泊まって連続で出社しています。',
  application_reason: 'ソフトウェアエンジニアを目指すために、実務経験を積みたいと考えたこと。Web開発未経験からでも挑戦できたこと。',
  acquired_skill: 'Rails を用いた開発経験、毎週開催される社内勉強会で得たコンピュータサイエンスの知識、ソフトウェアエンジニアの仕事の進め方、GitやJiraの使い方など',
  appeal: '週三日稼働できること伝えて、熱量の高さをアピールした',
  advise: '応募時に開発経験がない人がほとんどなので、Web開発未経験からでも挑戦できると感じました。Railsチュートリアルで、Railsの勉強を事前にしておくと研修がスムーズにいきます。',
  evaluation: 5,
  evaluation_reason: '大きなタスクを振ってもらえて、圧倒的に成長することができたから。',
  intern_overview: 'Ruby on Rails を用いた SaaS 開発',
  catchphrase: 'Sansan26卒内定者',
  hourly_wage: 1200,
  weekly_hours: 21,
  work_duration: 12,
  industry: 0,
  occupation: 0,
  recruitment_id: nil,
  created_at: now,
  updated_at: now
)

intern2 = Intern.create(
  nickname: 'K',
  department: 18,
  grade: 2,
  labo: '融合知能デザイン研究室',
  club: '筑波スマブラサークル',
  achievements: '26卒LINEヤフー内定',
  experience: 'インターン多数',
  company_name: '株式会社LifeisTech!',
  intern_detail: '中高生にUnityを用いたゲーム開発を指導',
  work_duration_description: '2023/04 ~ 2024/03',
  weekly_hours_description: '週20時間程度',
  hourly_wage_description: '時給1250円',
  work_style: '白金高輪本社出社 / リモート',
  application_reason: 'AI分野の実務経験を積むため。',
  acquired_skill: 'AIモデリング、データクレンジング、チームでの開発経験',
  appeal: '新しい技術への好奇心をアピール',
  advise: '技術力と積極性を伝えることが大事',
  evaluation: 4,
  evaluation_reason: 'チーム貢献度が高かったため',
  intern_overview: '中高生に Unity を用いたゲーム開発を指導',
  catchphrase: 'LINEヤフー26卒内定者',
  hourly_wage: 1250,
  weekly_hours: 20,
  work_duration: 6,
  industry: 0,
  occupation: 0,
  recruitment_id: nil,
  created_at: now,
  updated_at: now
)

intern3 = Intern.create(
  nickname: 'H',
  department: 17,
  grade: 2,
  labo: 'システムソフトウェア研究室',
  club: 'サッカー同好会',
  achievements: '26卒楽天内定',
  experience: 'インターン多数',
  company_name: '株式会社エクサウィザーズ',
  intern_detail: 'Next.jsを用いた新規プロジェクトのフルスタック開発',
  work_duration_description: '2023/10 ~',
  weekly_hours_description: '週20時間程度',
  hourly_wage_description: '時給2000円',
  work_style: '白金高輪本社出社 / リモート',
  application_reason: 'AI分野の実務経験を積むため。',
  acquired_skill: 'AIモデリング、データクレンジング、チームでの開発経験',
  appeal: '新しい技術への好奇心をアピール',
  advise: '技術力と積極性を伝えることが大事',
  evaluation: 4,
  evaluation_reason: 'チーム貢献度が高かったため',
  intern_overview: 'Next.js を用いた新規プロジェクトのフルスタック開発',
  catchphrase: '楽天26卒内定者',
  hourly_wage: 2000,
  weekly_hours: 20,
  work_duration: 3,
  industry: 0,
  occupation: 0,
  recruitment_id: nil,
  created_at: now,
  updated_at: now
)

feature1 = Feature.create!(name: 'メガベンチャー内定者🕶️')
feature2 = Feature.create!(name: '情報系学生💻')
feature3 = Feature.create!(name: '理系の学生📘')
feature4 = Feature.create!(name: '未経験から開始🚀')
Feature.create!(name: '文系の学生📙')

intern1.features << feature1
intern1.features << feature2
intern1.features << feature3
intern1.features << feature4

intern2.features << feature1
intern2.features << feature2
intern2.features << feature3

intern3.features << feature1
intern3.features << feature2
intern3.features << feature3
