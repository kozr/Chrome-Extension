function setup() {
  noCanvas();
  let r = day();
  let img = createImg('images/' + r + '.jpg');
  img.size(windowWidth, windowHeight);
  img.position(0, 0);
}

function set_body_height() { // set body height = window height
  $('body').height($(window).height());

}
$(function () {

  $(':text').bind('keydown', function (e) { //on keydown for all textboxes  

    if (e.keyCode == 13) //if this is enter key  

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


/*
document.getElementById("ToDoList").addEventListener("button", saveTaskLocal());


function saveTaskLocal(e) {

  var ListItem = document.getElementById('ListItem').value;

  var tasks = {
    ListItem
  };
  // 
 
    localStorage.setItem('task', JSON.stringify(task));

  } else {

    var myTask = localStorage.getItem('task', JSON.parse(task));
    myTask.push(task);

    localStorage.setItem('task', JSON.stringify(myTask));
    task.push(tasks);
  }

}
*/
var i = 1;
$(document).ready(
  function () {
    $('#xbutton').click(

      function () {
        
        if (i < 16) {
          i++;
          var toAdd = $('input[name=ListItem]').val();

        localStorage.setItem(i, JSON.stringify(toAdd));

        $('ol').append('<li>' + toAdd + '</li>');
        $("#clear").val('');
        }
       
        
        
      });

    $("input[name=ListItem]").keyup(function (event) {
      if (event.keyCode == 13) {
        $("#xbutton").click();
      }
    });

    $(document).on('dblclick', 'li', function () {
      $(this).toggleClass('strike').fadeOut('slow');
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

document.onkeyup = KeyCheck;

function KeyCheck(e) {
  var KeyID = (window.event) ? event.keyCode : e.keyCode;

  switch (KeyID) {

    case 49:
      window.location = "index.html";
      break;

  }
}