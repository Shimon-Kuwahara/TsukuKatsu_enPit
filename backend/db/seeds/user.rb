users = User.create!([
  {
    email: "test@example.com", password: "password", confirmed_at: Time.current, last_name: "桑原", first_name: "士門",
    last_name_kana: "クワハラ", first_name_kana: "シモン", gender: 0, university: 0, department: "情報メディア創成学類",
    grade: 2, graduation_year: 2026, graduation_month: 3,
  },
  {
    email: "test1@example.com", password: "password", confirmed_at: Time.current, last_name: "白澤", first_name: "陸",
    last_name_kana: "シラサワ", first_name_kana: "リク", gender: 0, university: 0, department: "情報科学類",
    grade: 2, graduation_year: 2026, graduation_month: 3,
  },
  {
    email: "test2@example.com", password: "password", confirmed_at: Time.current, last_name: "小川", first_name: "健太",
    last_name_kana: "オガワ", first_name_kana: "ケンタ", gender: 0, university: 1, department: "情報理工学位",
    grade: 4, graduation_year: 2026, graduation_month: 3,
  },
  {
    email: "test3@example.com", password: "password", confirmed_at: Time.current, last_name: "渡邉", first_name: "周",
    last_name_kana: "ワタナベ", first_name_kana: "アマネ", gender: 0, university: 0, department: "情報科学類",
    grade: 2, graduation_year: 2026, graduation_month: 3,
  },
  {
    email: "test4@example.com", password: "password", confirmed_at: Time.current, last_name: "川上", first_name: "日菜乃",
    last_name_kana: "カワカミ", first_name_kana: "ヒナノ", gender: 1, university: 0, department: "心理学類",
    grade: 2, graduation_year: 2026, graduation_month: 3,
  },
])

@kuwahara = users.find { |user| user.last_name == "桑原" }.id
@shirasawa = users.find { |user| user.last_name == "白澤" }.id
@ogawa = users.find { |user| user.last_name == "小川" }.id
@watanabe = users.find { |user| user.last_name == "渡邉" }.id
@kawakami = users.find { |user| user.last_name == "川上" }.id
