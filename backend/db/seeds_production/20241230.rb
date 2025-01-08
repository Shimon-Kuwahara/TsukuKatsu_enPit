Intern.delete_all
Feature.delete_all
InternFeature.delete_all
intern2 = Intern.create!(
  {
    nickname: 'K',
    department: 18,
    grade: 2,
    labo: '融合知能デザイン研究室：機械学習やクラウドソーシングに関する研究',
    club: '筑波スマブラ対戦会',
    achievements: '26卒LINEYahoo内定者、26卒DeNA内定者、メルカリハッカソン2024最優秀賞受賞',
    experience: 'プログラミングに関して何も知りませんでした。教育への課題意識と学習意欲だけ持ち合わせていました',
    company_name: '株式会社LifeisTech!',
    intern_detail: '中高生にUnityを用いたゲーム開発を指導。ゲーム開発の補助やキャリア相談、動画制作など、幅広く中高生の成長を目的とした業務を行う',
    work_duration_description: '2023/04 ~ 2024/03',
    weekly_hours_description: '週10時間程度',
    hourly_wage_description: '時給1250円 能力や経験に応じて昇給あり。2500円に達している先輩もちらほら。',
    work_style: '短期イベントのキャンプでは会場(各大学や高校、企業本社など)に直接、オンラインプログラムの際はリモート',
    application_reason: '実践的なプログラミングスキルを身につけたいと考えたため、プログラミング未経験からでも挑戦できる環境を求めた',
    acquired_skill: 'プロダクト開発経験、Unityを用いたゲーム開発、中高生向けのプログラミング教育',
    appeal: '教育への問題意識や学習意欲を強くアピール。自分という人間をよく理解した上で、どのように活躍できるかを伝えた。具体的には、日々の学習サイクルを生かして研修に臨めることと、塾講師バイトの中で見つけた外部教育の課題と可能性について面接で熱弁しました',
    advise: '積極性と教育への熱い思いがあれば、経験や技術力は問われないので、挑戦的な環境を求めてる人はぜひ応募してみてください。通年募集していて倍率も高いですが、熱量を特にみてくれる採用基準になっていると思います',
    evaluation: 4,
    evaluation_reason: '中高生の成長を目的とした業務を通じて、技術力だけでなく、コミュニケーションスキル、ファシリテーションスキルなどのソフトスキルの面でも成長できたから。また、東大や早慶などの有名大学の学生やAmazonやSONY、LINEYahooの社員さんと一緒に働く機会が多くあり、多様な価値観やハイレベルな人間関係を築くことができたから。',
    intern_overview: '【成長のきっかけ】中高生のプログラミング教育メンター',
    catchphrase: '26卒DeNA内定者！',
    hourly_wage: 1250,
    weekly_hours: 10,
    work_duration: 12,
    industry: 0,
    occupation: 7,
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
intern1 = Intern.create!(
  nickname: 'S',
  department: 17,
  grade: 2,
  labo: 'SoftLab：OS、システムソフトウェア、データベース、並行システムなどの研究',
  club: '無所属',
  achievements: '26卒Sansan内定者',
  experience: 'プログラミング歴1年（大学の授業とProgateを5時間ほど）, Railsを用いた簡単な個人開発（成績のcsvファイルを用いて、卒業要件の達成率を可視化するアプリケーション）',
  company_name: '株式会社Techouse',
  intern_detail: 'Ruby on Railsを用いた人事労務SaaSの開発を行った。最初の1ヶ月はRails Tutorialを用いた研修を行い、その後は簡単なバグ対応や小さめの機能開発から始めました。人によりますが、3~6ヶ月目から大きめな機能の仕様決定から開発までを任せてもらえる印象があります。',
  work_duration_description: '学部2年次の冬から',
  weekly_hours_description: '週２日は８時間、週１日は４時間。長期休暇期間中は週５で社員さんと同じスケジュールで働いています',
  hourly_wage_description: '初月の研修期間は一律、一月3万円。それ以降は、一律で時給1200円',
  work_style: '週２出社、週１リモート。オフィスの近くにインターン生専用のシェアハウスがあるので、筑波大生はよくそこに泊まって連日出社しています。',
  application_reason: 'ソフトウェアエンジニアを目指すために、実務経験を積みたいと考えたから。Web開発未経験からでも挑戦できたので、自分に合った環境だと感じた。',
  acquired_skill: 'Rails を用いた開発経験、毎週開催される社内勉強会で得たコンピュータサイエンスの知識、ソフトウェアエンジニアの仕事の進め方、Gitの使い方、アジャイルの開発手法など',
  appeal: '長期インターンの書類審査を通過するために、簡単なWebアプリケーションを開発しました。Youtubeを見ながらハンズオン形式でRailsアプリケーションを作成した後に、情報科学類の卒業要件を確認するアプリケーションを作りました。面接では週三日稼働できることと、ソフトウェアエンジニアになりといという思いを伝えて、このインターンシップへの強い情熱の高さをアピールしました。実際に沢山コミットできる学生が多く採用されている印象がありました。',
  advise: '応募時にWeb開発経験がない人がほとんどなので、Web開発未経験からでも挑戦できました！Railsチュートリアルで、Railsの勉強を事前にしておくと研修がスムーズにいきます。ここで培った開発経験が現在のエンジニア就活の軸になりました。学生のうちから実務経験を積むことで、大手メガベンチャーのような競争率の高い企業でも勝ち抜けるような実践的なスキルを身につけることができます。あなたもぜひ挑戦してみてください！',
  evaluation: 5,
  evaluation_reason: '大きなタスクを振ってもらえて、圧倒的に成長することができたから。',
  intern_overview: '【Web開発未経験からの挑戦】Ruby on Rails を用いた SaaS 開発',
  catchphrase: 'Sansan26卒内定者',
  hourly_wage: 1200,
  weekly_hours: 21,
  work_duration: 12,
  industry: 1,
  occupation: 2,
  recruitment_id: recruit.id
)

feature1 = Feature.create!(name: 'メガベンチャー内定者👑')
feature2 = Feature.create!(name: '情報系学生💻')
feature3 = Feature.create!(name: '理系の学生📘')
feature4 = Feature.create!(name: '文系の学生📕')
feature5 = Feature.create!(name: '未経験から開始🚀')
feature6 = Feature.create!(name: '学類生🖌️')
feature7 = Feature.create!(name: '院生🎓')

intern1.features << feature1
intern1.features << feature2
intern1.features << feature3
intern1.features << feature5
intern1.features << feature6

intern2.features << feature1
intern2.features << feature2
intern2.features << feature3
intern2.features << feature5
intern2.features << feature6
