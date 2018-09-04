require 'test_helper'

class WidgetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @widget = widgets(:one)
  end

  test "should get index" do
    get widgets_url, as: :json
    assert_response :success
  end

  test "should create widget" do
    assert_difference('Widget.count') do
      post widgets_url, params: { widget: { photo_data: @widget.photo_data, title: @widget.title } }, as: :json
    end

    assert_response 201
  end

  test "should show widget" do
    get widget_url(@widget), as: :json
    assert_response :success
  end

  test "should update widget" do
    patch widget_url(@widget), params: { widget: { photo_data: @widget.photo_data, title: @widget.title } }, as: :json
    assert_response 200
  end

  test "should destroy widget" do
    assert_difference('Widget.count', -1) do
      delete widget_url(@widget), as: :json
    end

    assert_response 204
  end
end
