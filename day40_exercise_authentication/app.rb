require "sinatra"
require "sinatra/activerecord"
require "sinatra/flash"
require "./models"

set :database, "sqlite3:[name of database file]"

require 'sinatra/activerecord/rake'
require './app'