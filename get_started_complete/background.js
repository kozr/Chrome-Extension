function setup() {
  noCanvas();
  let r = day();
  let img = createImg('images/' + r + '.jpg');
  img.size(windowWidth, windowHeight);
  img.position(0, 0);
}

function windowResized() {
  let r = day();
  let img = createImg('images/' + r + '.jpg');
  img.size(windowWidth, windowHeight);
  img.position(0, 0);
}

function set_body_height() {
  $('body').height($(window).height());

}



$(function () {

  $(':text').bind('keydown', function (e) {

    if (e.keyCode == 13)

      e.preventDefault();

  });

});

$(document).ready(function () {
  $(window).bind('resize', set_body_height);
  set_body_height();
});

$(document).ready(function () {
  $(window).bind('resize', set_body_height);
  set_body_height();
});


$(document).ready(
  function () {
    for (i = 0; i < 20; i++) {
      if (localStorage.getItem(i) !== null) {
        var toAdd = localStorage.getItem(i);
        $('ol').append('<li id=' + i + '>'+ toAdd + '</li>');
      }
    };

    $('#Search').keyup(function (event) {
      if (event.keyCode === 13) {
        var q = $("input[name=Google]").val();
        var patt = new RegExp('^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?' + // port
          '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
          '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', 'i');
        var res = patt.test(q);
        if (res) {
          window.open('https://' + q);
        } else {
          window.open('http://google.com/search?q=' + q);
        }
      }
    });

    
    $('#Search').on('focus', function () {
      $('#bootstrap-overrides').removeClass('fadein')
      $('#bootstrap-overrides').addClass('fadeout')
      $('#cat').removeClass('fadein')
      $('#cat').addClass('fadeout')
      $('#dog').removeClass('fadein')
      $('#dog').addClass('fadeout')
    });
    $('#Search').on('focusout', function () {
      $('#bootstrap-overrides').removeClass('fadeout')
      $('#bootstrap-overrides').addClass('fadein')
      $('#cat').removeClass('fadeout')
      $('#cat').addClass('fadein')
      $('#dog').removeClass('fadeout')
      $('#dog').addClass('fadein')
    });
    
    $('#xbutton').click(

      function () {
        for (i = 0; i < 20; i++) {
          if (localStorage.getItem(i) == null) {
            i;

            var toAdd = $('input[name=ListItem]').val();

            localStorage.setItem(i, JSON.stringify(toAdd));

            $('ol').append('<li id=' + i + '>' + toAdd + '</li>');
            $("#clear").val('');
            break;


          }
        }
      });
    $(window).on('resize', function () {
      noCanvas();
      let r = day();
      let img = createImg('images/' + r + '.jpg');
      img.size(windowWidth, windowHeight);
      img.position(0, 0);
    });
    $("input[name=ListItem]").keyup(function (event) {
      if (event.keyCode == 13) {
        $("#xbutton").click();
        $(this).val('');
      }
    });

    $(document).on('dblclick', 'li', function () {
      $(this).toggleClass('strike').fadeOut('slow');
      var itemID = jQuery(this).attr("id");
      localStorage.removeItem(itemID);
    });

    $('input').focus(function () {
      $(this).val('');
    });

    $('ol').sortable();

  }
);



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}