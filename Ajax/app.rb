require 'sinatra'
require 'json'

# 既存のコードの上部に以下を追加
get '/' do
  send_file 'index.html'
end

set :bind, '0.0.0.0'

get '/api/greet' do
  content_type :json
  { message: "Hello, Ajax!" }.to_json
end
