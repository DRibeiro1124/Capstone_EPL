class HomeController < ApplicationController
  def index
    redirect_to teams_path   
  end
end
