#json.image      @message.image.url
#json.user_id    @message.user.id
#json.user_name  @message.user.name
#json.content    @message.content
#json.time       @message.created_at
#json.id         @message.id
json.(@message, :content, :image)
json.date       @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.user_name  @message.user.name
#idもデータとして渡す
json.id         @message.id