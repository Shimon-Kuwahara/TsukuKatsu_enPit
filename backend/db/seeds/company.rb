companies = Company.create!([
  {
    name: 'VeBuIn株式会社（ヴィビュイン株式会社）',
    description: 'VeBuInは、日本×インドのハイブリッド開発を行うIT企業です。経験豊富なインドのシステムエンジニアが先端IT技術を活用してシステム開発を実行。',
    website_url: 'https://vebuin.com/', location: '〒305-0045 茨城県つくば市梅園2-1-13 筑波コウケンビル',
    logo_url: '', picture_url: '',
    email: 'vebuin@sample.com', phone_number: '123-456-7890', password: 'password', password_confirmation: 'password'
  },
  {
    name: '株式会社Techouse',
    description: 'Techouseは国内1,000万人以上が従事する製造業を中心に、アナログな産業をデジタル化する会社です。現在はトヨタ、ホンダ、デンソーなど国内を代表する企業が利用しており、サービスの利用ユーザーは年間500万人にも上ります。',
    website_url: 'https://jp.techouse.com/', location: '東京都港区三田3-13-12三田MTビル 5F',
    logo_url: '', picture_url: '',
    email: 'techouse@sample.com', phone_number: '123-456-7890', password: 'password', password_confirmation: 'password'
  },
  {
    name: 'LifeisTech株式会社',
    description: 'ライフイズテックは、次世代ひとり一人の「より豊かな今と未来をつくる力」を育み、その多様な力を地域や社会へと届けるためのプロダクトやサービスを開発・提供しています。',
    website_url: 'https://life-is-tech.com/', location: '東京都港区南麻布２丁目１２−３',
    logo_url: '', picture_url: '',
    email: 'lifeistech@sample.com', phone_number: '123-456-7890', password: 'password', password_confirmation: 'password'
  },
  {
    name: '株式会社TAIAN',
    description: 'TAIAN は「お祝いテックカンパニー」として、現在は主にブライダル業界の DX を推進する会社です。コロナ禍を経てブライダル業界も変革を迫られている中で、私たちは新規集客から式後の生涯顧客化をサポートするブライダル DX 総合プラットフォーム「Oiwaii」を開発・提供しています。',
    website_url: 'https://taian-inc.com/', location: '東京都新宿区新宿１丁目３４−１６ 清水ビル 3F',
    logo_url: '', picture_url: '',
    email: 'taian@sample.com', phone_number: '123-456-7890', password: 'password', password_confirmation: 'password'
  },
  {
    name: 'ポッドテック株式会社',
    description: 'ポッドテックは、AIとアクセシビリティの力を通じて、誰もが主役となる社会を実現し、デジタル世界での平等を推進します。このビジョンに向かって、私たちは全力で取り組んでいきます。',
    website_url: 'https://podtech.tech/', location: '茨城県つくば市吾妻２丁目５－１',
    logo_url: '', picture_url: '',
    email: 'podtech@sample.com', phone_number: '123-456-7890', password: 'password', password_confirmation: 'password'
  },
])

@vebuin = companies.find { |company| company.name == 'VeBuIn株式会社（ヴィビュイン株式会社）' }.id
@techouse = companies.find { |company| company.name == '株式会社Techouse' }.id
@lifeistech = companies.find { |company| company.name == 'LifeisTech株式会社' }.id
@taian = companies.find { |company| company.name == '株式会社TAIAN' }.id
@podtech = companies.find { |company| company.name == 'ポッドテック株式会社' }.id
