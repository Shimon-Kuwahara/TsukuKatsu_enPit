Intern.create!(
  {
    nickname: 'K',
    department: 2,
    grade: 3,
    labo: '融合知能デザイン研究室',
    club: '筑波スマブラサークル',
    achievements: '26卒LINEYahoo内定、26卒DeNA内定',
    experience: 'プログラミング完全未経験',
    company_name: '株式会社LifeisTech!',
    intern_detail: '中高生にUnityを用いたゲーム開発を指導。ゲーム開発の補助やキャリア相談、動画制作など、幅広く中高生の成長を目的とした業務を行う',
    work_duration_description: '2023/04 ~ 2024/03',
    weekly_hours_description: '週10時間程度',
    hourly_wage_description: '時給1250円',
    work_style: '短期イベントのキャンプでは会場(各大学や高校、企業本社など)に直接、オンラインプログラムの際はリモート',
    application_reason: '実践的なプログラミングスキルを身につけたいと考えたため、プログラミング未経験からでも挑戦できる環境を求めた',
    acquired_skill: 'プロダクト開発経験、Unityを用いたゲーム開発、中高生向けのプログラミング教育',
    appeal: '教育への問題意識や学習意欲をアピール',
    advise: '積極性と教育への熱い思いがあれば、経験や技術力は問われない',
    evaluation: 4,
    evaluation_reason: '中高生の成長を目的とした業務を通じて、技術力だけでなく、コミュニケーションスキル、ファシリテーションスキルなどのソフトスキルの面でも成長できたから。また、東大や早慶などの有名大学の学生やAmazonやSONY、LINEYahooの社員さんと一緒に働く機会が多くあり、多様な価値観やハイレベルな人間関係を築くことができたから。',
    intern_overview: '中高生のプロダクト開発支援',
    catchphrase: 'LINEYahoo26卒内定者！',
    hourly_wage: 1250,
    weekly_hours: 10,
    work_duration: 6,
    industry: 2,
    occupation: 3,
    recruitment_id: nil,
  }
)

company = Company.create!(
  name: "株式会社Techouse",
  description: "人材プラットフォームの提供を主軸に行う企業。国内主要都市に数ヶ所の事業拠点を持ち、人材プラットフォームの提供を行う。主力製品に「クラウドハウス採用」などがある。",
  location: "東京都港区三田3-13-12 三田MTビル 5F",
  email: "info@example.co.jp",
  phone_number: "03-1234-5678",
  website_url: "https://jp.techouse.com/",
  logo_url: "",
  picture_url: "",
  industry: "IT・WEB",
  business_description: "株式会社Techouseは、最新のテクノロジーを駆使した人材プラットフォームを提供し、企業と求職者の効率的なマッチングを実現します。クラウドハウス採用をはじめ、多様なサービスを通じて採用プロセスの最適化をサポートしています。",
  culture: "Techouseではオープンで協力的な職場環境を重視しています。社員一人ひとりが自主的にアイデアを提案し、チームとして共に成長する文化があります。フレックスタイム制度やリモートワークも導入し、柔軟な働き方を推奨しています。",
  appeal: "エンジニアインターンとして、最先端の技術に触れながら実践的なスキルを磨く絶好の機会です。多様なプロジェクトに参加し、経験豊富なメンターからのサポートを受けることで、キャリアの基盤を築くことができます。また、成長意欲の高い仲間と切磋琢磨できる環境が整っています。",
  password: "password",
  password_confirmation: "password"
)

recruit = Recruitment.create!(
  title: "Ruby on Rails 要件定義から実装まで",
  description: "【実務未経験OK / エンジニア】研修制度・教育支援制度充実！自社プロダクトのWeb開発業務を\"PM\"として「設計から実装まで」お任せします",
  company_id: company.id,
  other_informations: "交通費全額支給／リモートワーク制度あり／服装・髪型自由",
  min_month: "3ヶ月",   # 例: 「最低3ヶ月以上勤務できる方」
  min_days: "週2日",     # 例: 「最低週2日以上勤務できる方」
  min_hours: "週10時間", # 例: 「最低週10時間以上働ける方」
  hourly_wage: 1250,
  salary_notes: "初月は一律30000円。その後は一律時給1250円。書籍購入の福利厚生あり",
  work_style: "フレックスタイム制",
  skills_acquired: "Ruby on RailsをはじめとしたWebアプリ開発の基礎／チーム開発の進め方など",
  required_skills: "プログラミング経験(言語不問)、自走力、責任感",
  welcome_skills: "Ruby on Railsでの開発経験、AWSやDockerの知識",
  selection_flow: "人事面接,1ヶ月のチュートリアル研修,最終面接,内定",
  occupation: "Webフルスタックエンジニア",
  image1: "sample_image1.png",
  image2: nil,
  image3: nil,  # 空の場合はnilでもOK
  status: true
)

# Intern の作成
Intern.create!(
  nickname: 'S',
  department: 1,
  grade: 3,
  labo: 'Softlab',
  club: '無所属',
  achievements: '26卒Sansan内定',
  experience: 'プログラミング歴1年, Railsを用いた簡単な個人開発',
  company_name: '株式会社Techouse',
  intern_detail: 'Ruby on Railsを用いた社内プロダクトの保守・運用。機能の要件定義から実装までを行う。社内の勉強会や書籍の購入も自由なので、勉強することが仕事の一部という環境',
  work_duration_description: '学部2年次の冬から',
  weekly_hours_description: '週２日は８時間、週１日は４時間。長期休暇期間中は週５で社員さんと同じスケジュールで',
  hourly_wage_description: '研修終了の際に一律3万円。それ以降は、一律で時給1200円',
  work_style: '週２出社、週１リモート。オフィスの近くにインターン生専用のシェアハウスがあるので、筑波大生はよくそこ泊まって連続で出社しています。',
  application_reason: 'ソフトウェアエンジニアを目指すために、実務経験を積みたいと考えたこと。Web開発未経験からでも挑戦できたこと。',
  acquired_skill: 'Rails を用いた開発経験、毎週開催される社内勉強会で得たコンピュータサイエンスの知識、ソフトウェアエンジニアの仕事の進め方、GitやJiraの使い方など',
  appeal: '週三日稼働できること伝えて、熱量の高さをアピールした',
  advise: '応募時に開発経験がない人がほとんどなので、Web開発未経験からでも挑戦できると感じました。Railsチュートリアルで、Railsの勉強を事前にしておくと研修がスムーズにいきます。',
  evaluation: 5,
  evaluation_reason: '大きなタスクを振ってもらえて、圧倒的に成長することができたから。',
  intern_overview: 'Ruby on Rails を用いた開発',
  catchphrase: 'Sansan26卒内定者',
  hourly_wage: 1200,
  weekly_hours: 21,
  work_duration: 12,
  industry: 1,
  occupation: 2,
  recruitment_id: recruit.id
)
