$(function(){
  function buildHTML(message){
    var image = if message.content.present?
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                    ${ message.user.name }
                    </div>
                      <div class="upper-message__date">
                      ${ message.created_at.strftime("%Y/%m/%d %H:%M") }
                      </div>
                    </div>
                    <div class="lower-message">

                    <p class="lower-message__content">
                    ${ message.content }
                    </p>
                    ${ end }
                    ${ image_tag message.image.url, class: 'lower-message__image' if message.image.present? }
                    </div>
                  </div>
                </div>`;
    return html;
  }
  function scroll() {
    $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/messages'
    var url = $(this).attr('action');
    console.log(url)
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data); 
      var html = buildHTML(data);
      $('.messages').append(html);
      scroll()
    })
    .fail(function(){
      alert('error')
      $('.form__submit').prop('disabled', false);
    })
  })
});
