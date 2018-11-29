//Date.prototype.getWeek = function () {
  //var onejan = new Date(this.getFullYear(), 0, 1);
  //return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
//}

//var today = new Date();
//var weekNumber = today.getWeek();
var weekNumber = 47;
var img = ('images/' + weekNumber + '.jpg');


$(function () {

  $(':text').bind('keydown', function (e) {

    if (e.keyCode == 13)

      e.preventDefault();

  });

});


$(document).ready(
  function () {
    for (i = 0; i < 20; i++) {
      if (localStorage.getItem(i) !== null) {
        var toAdd = localStorage.getItem(i);
        $('ol').append('<li style="color:white; font-size:11px;" id=' + i + '>' + toAdd + '</li>');
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
      $('#bootstrap-overrides').removeClass('fadein').addClass('fadeout')
      $('#cat').removeClass('fadein').addClass('fadeout')
      $('#dog').removeClass('fadein').addClass('fadeout')
    });
    $('#Search').on('focusout', function () {
      $('#bootstrap-overrides').removeClass('fadeout').addClass('fadein')
      $('#cat').removeClass('fadeout').addClass('fadein')
      $('#dog').removeClass('fadeout').addClass('fadein')
    });

    $('body').css('background-image', 'url(' + img + ')');


    var down = {};
    $(document).keydown(function (e) {
      down[e.keyCode] = true;
    }).keyup(function (e) {
      if (down[49] && down[18]) {
        window.open('https://canvas.ubc.ca', '_self');
      }
      if (down[50] && down[18]) {
        window.open('https://gradescope.com', '_self');
      }
      if (down[51] && down[18]) {
        window.open('https://piazza.com/class', '_self');
      }
      if (down[52] && down[18]) {
        window.open('https://ssc.adm.ubc.ca/sscportal/', '_self');
      }
      if (down[53] && down[18]) {
        window.open('https://desmos.com/calculator', '_self');
      }
      down[e.keyCode] = false;
    });

    
    $("input[name=ListItem]").keyup(function (event) {
      if (event.keyCode == 13) {
        $(function () {
          for (i = 0; i < 20; i++) {
            if (localStorage.getItem(i) == null) {
              i;
  
              var toAdd = $('input[name=ListItem]').val();
  
              localStorage.setItem(i, JSON.stringify(toAdd));
  
              $('ol').append('<li id=' + i + '>' + toAdd + '</li>');
              $('#ListItem').val('');
              break;
  
  
            }
          }
        });
        
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