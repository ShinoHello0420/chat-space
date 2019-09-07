class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    #last_message_id = params[:id]
    @messages = group.messages.includes(:user).where("id > ?", params[:id])
    # if params[:id] == ""
    #   @messages = group.messages
    # else
    #   @messages = group.messages.includes(:user).where("id > ?", params[:id])
    # end
  end
end