require "sinatra"
require "sinatra/reloader"
require "./classmate"

NAME = "Omar"

names = ["edward elric (alchemist / pokemon master)", 
        "ronnie the html G.O.A.T", 
        "team rocket", 
        "yorvin the dominican", 
        "marria the edgecase queen"
        ]

kevin = Classmate.new("Kevin", "Airbender")
scott = Classmate.new("Scott", "Breath Fire")


get '/' do
    "Hello human, are you ready for us robots to take over!? |8-D| !"
end

get '/sei' do
    "Robots, humans are ready for you robots to take over the world from us. "
end

get '/my_name' do
    " Hello, my name is #{NAME} " 
end

get '/names' do
    " Names in the list are: "  
    names.join(", ")
end

get '/kevin' do
    kevin.i_have_the_power()
end

get '/scott' do
    scott.i_have_the_power()
end