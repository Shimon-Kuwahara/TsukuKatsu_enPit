# 既存のデータを削除
Recruitment.destroy_all # まずRecruitmentを削除して、Companyに関連する外部キー制約エラーを回避
Company.destroy_all

# 会社データとリクルートメントデータを含む配列を定義
companies = [
  {
    company_data: {
      name: '株式会社Techouse',
      description: 'Techouseは国内1,000万人以上が従事する製造業を中心に、アナログな産業をデジタル化する会社です。\n現在はトヨタ、ホンダ、デンソーなど国内を代表する企業が利用しており、サービスの利用ユーザーは年間500万人にも上ります。\n下記2事業を展開しておりますが、毎年新規サービスをリリースしており、次の社会インフラとしてふさわしいサービスプラットフォームに進化させ続けております。',
      website_url: 'https://jp.techouse.com/',
      logo_url: '',
      picture_url: '',
      location: '東京都港区三田3-13-12三田MTビル 5F',
      email: 'techouse@sample.com',
      phone_number: '123-456-7890',
      password: 'password',
      password_confirmation: 'password'
    },
    recruitment_data: {
      title: '<実務未経験OK / エンジニア長期インターン> 研修制度・教育支援制度充実！自社プロダクトのWeb開発業務を"PM"として「設計から実装まで」お任せします - 株式会社Techouseの長期・有給インターンシップ',
      industry: 'WEB業界',
      description: 'Techouseの長期インターンでは、自社プロダクトのWeb開発業務を《設計から実装まで》お任せしております。\n業務外でも社内で〈週次勉強会〉〈ハッカソン〉〈LT会〉など高頻度で開催、インターンであっても利用できる〈福利厚生 / 学習支援制度〉を整備しており、エンジニアとして学習するための環境を全て整えています。\nアルバイトのようにシフト制での勤務となりますので、学業・研究との両立も問題ございません。現在のエンジニア組織は正社員に加え、50名以上のインターンが在籍しております。\nインターン全体の8割が大学院生、全体の7割が情報系専攻の学生という構成になっており、ハイレベルな環境で実務開発に取り組んでいただくことができます。\n24卒インターン参加者の就活実績として、AWS Irelandや日本IBM、アクセンチュアなど、大手IT・SIer企業様の内定をほとんどのメンバーがいただいております。\nその上で、Techouseに新卒入社予定のメンバーも多数在籍しております。',
      benefits: '約1か月間の研修を実施していただいた後、実務開発開始となります。プロダクト開発に携わっていただくための研修プログラムをご用意しておりますので、開発未経験の方でもご安心ください。',
      job_description: '▼業務例・ソフトウェアエンジニアとしての開発業務全般・サービスの要件定義/設計/開発/テスト/運用・顧客やメンバーへのヒアリングを通した問題発見・メンバーのマネジメント/メンタリング・技術調査/技術選定',
      job_titles: 'Webエンジニア（バックエンド/フロントエンド）',
      job_engineer: true,
      job_designer: false,
      job_sales: false,
      job_planning: false,
      job_marketing: false,
      job_writer: false,
      job_others: false,
      skills_acquired: 'フルスタックなWeb開発スキル',
      wage: '時給1,200円',
      salary_notes: '完全一律',
      work_location: '東京都港区三田3-13-12三田MTビル 5F',
      min_work_period: '最低6ヶ月',
      min_work_days: '週3日以上',
      min_work_hours: '一日3時間から (10:00~22:00の間で自由に選択可能)',
      commute_support: '月三万円まで',
      required_skills: 'プログラミング経験 ※言語・スキルレベルは問いません。授業で学んだ、独学で勉強したなどでもOK！',
      welcome_skills: 'Ruby, JavaScript, React',
      promotion_system: 'なし',
      remote_policy: 'フルリモート/一部リモート勤務',
      selection_flow: '面接 -> 1ヶ月研修 -> 採用',
      deadline: '2025-1-31',
      welfare_benefits: '▼福利厚生・書籍購入自由・資格取得費用の会社負担・月100USDまで個人学習用途でAWSの自由利用可',
      apply_url: 'https://www.in-fra.jp/apply-internship/23630'
    }
  },
  {
    company_data: {
      name: 'Company B',
      description: 'Description for Company B',
      website_url: 'https://companyb.com',
      logo_url: 'https://companyb.com/logo.png',
      picture_url: 'https://companyb.com/picture.png',
      location: 'Location B',
      email: 'contact@companyb.com',
      phone_number: '987-654-3210',
      password: 'password123',
      password_confirmation: 'password123'
    },
    recruitment_data: {
      title: 'Marketing Specialist',
      industry: 'Marketing & PR',
      description: 'Lead and manage multi-channel marketing campaigns.',
      benefits: 'Flexible hours, wellness programs',
      job_description: 'Plan, execute, and analyze marketing strategies to drive brand growth.',
      job_titles: 'Marketing Specialist',
      job_engineer: false,
      job_designer: false,
      job_sales: false,
      job_planning: true,
      job_marketing: true,
      job_writer: false,
      job_others: false,
      skills_acquired: 'SEO, branding, communication',
      wage: '50,000 - 75,000 USD',
      salary_notes: 'Performance bonuses available',
      work_location: 'On-site',
      min_work_period: '2 years',
      min_work_days: '4 days/week',
      min_work_hours: '6 hours/day',
      commute_support: 'Partial reimbursement',
      required_skills: 'Content marketing, analytics tools',
      welcome_skills: 'Prior international campaign experience',
      promotion_system: 'Regular performance reviews',
      remote_policy: 'Flexible with on-site requirements',
      selection_flow: 'Initial screening -> Panel interview -> Task assessment',
      deadline: '2024-11-30',
      welfare_benefits: 'Health benefits, travel allowance',
      apply_url: 'https://apply.companyb.com/marketing'
    }
  },
  {
    company_data: {
      name: 'Company C',
      description: 'Description for Company C',
      website_url: 'https://companyc.com',
      logo_url: 'https://companyc.com/logo.png',
      picture_url: 'https://companyc.com/picture.png',
      location: 'Location C',
      email: 'contact@companyc.com',
      phone_number: '555-555-5555',
      password: 'password123',
      password_confirmation: 'password123'
    },
    recruitment_data: {
      title: 'UX Designer',
      industry: 'Design',
      description: 'Design intuitive interfaces for a wide range of applications.',
      benefits: 'Creative environment, career growth',
      job_description: 'Lead user research and prototype design.',
      job_titles: 'UX Designer',
      job_engineer: false,
      job_designer: true,
      job_sales: false,
      job_planning: false,
      job_marketing: false,
      job_writer: false,
      job_others: false,
      skills_acquired: 'Prototyping, user testing, wireframing',
      wage: '70,000 - 90,000 USD',
      salary_notes: 'Based on portfolio and experience',
      work_location: 'Remote/Office',
      min_work_period: '1 year',
      min_work_days: '3 days/week',
      min_work_hours: '6 hours/day',
      commute_support: 'No support for remote workers',
      required_skills: 'Wireframing, prototyping tools',
      welcome_skills: 'Portfolio demonstrating impactful designs',
      promotion_system: 'Annual review system',
      remote_policy: 'Flexible',
      selection_flow: 'Portfolio review -> Design task -> Interview',
      deadline: '2024-12-10',
      welfare_benefits: 'Health, creative retreats',
      apply_url: 'https://apply.companyc.com/design'
    }
  }
]

companies.each do |data|
  begin
    company = Company.create!(data[:company_data])
    Recruitment.create!(data[:recruitment_data].merge(company_id: company.id))
  rescue ActiveRecord::RecordInvalid => e
    puts "エラーが発生しました: #{e.record.errors.full_messages.join(', ')}"
  end
end

puts "シードデータの作成が完了しました！"
