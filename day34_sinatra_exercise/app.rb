require "sinatra"
require "sinatra/reloader"


get '/' do
    erb :index
end

get '/double_time' do
    @text = "Hello"
    erb :double_time
end 

get "/info" do
    @username, @password = params[:username], params[:password]
    erb :info
  end

post "/form" do
    puts params
    erb "info"
    # redirect "/info"
    end

# post '/info' do
#     # username = params[:username] || "Hi There"
#     # password = params[:password] || "Nobody"

#     erb :info, :locals => {'username' => username, 'password' => password}
# end
  