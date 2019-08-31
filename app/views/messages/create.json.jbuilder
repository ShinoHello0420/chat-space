#json.image      @message.image.url
#json.user_id    @message.user.id
#json.user_name  @message.user.name
#json.content    @message.content
#json.time       @message.created_at
#json.id         @message.id
json.(@message, :content, :image)
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name  @message.user.name
#idもデータとして渡す
json.id         @message.id