require 'test_helper'

class PaginatedInternsControllerTest < ActionDispatch::IntegrationTest
  setup do
    # テストデータを準備
    @intern1 = interns(:one)
    @intern2 = interns(:two)
  end

  # 正常なレスポンスをテスト
  test 'should get paginated interns' do
    get paginated_interns_url, params: { page: 1 }
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal 2, json_response['total']
    assert_equal 12, json_response['per_page']
    assert_equal 2, json_response['data'].size
  end

  # フィルタリング: industry
  test 'should filter by industry' do
    get paginated_interns_url, params: { industry: '1' }
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal 1, json_response['total']
    assert_equal 'Intern1', json_response['data'].first['nickname']
  end

  # フィルタリング: occupation
  test 'should filter by occupation' do
    get paginated_interns_url, params: { occupation: '2' }
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal 1, json_response['total']
    assert_equal 'Intern2', json_response['data'].first['nickname']
  end

  # フィルタリング: department
  test 'should filter by department' do
    get paginated_interns_url, params: { department: '1,2' }
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal 2, json_response['total']
  end

  # データが見つからない場合
  test 'should return not found if no interns match filters' do
    get paginated_interns_url, params: { industry: '999' }
    assert_response :not_found
    json_response = JSON.parse(response.body)
    assert_equal 'No interns found', json_response['message']
  end
end
