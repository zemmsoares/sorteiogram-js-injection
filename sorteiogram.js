var initial = 'initial';
var total_c = total_comments;
var winner = 'WINNER INSTAGRAM HERE';
var winner_comment_id;
var winner_comment_text;
var winner_comment_id_jquery;
var help;
var res;
var comment_id_number;

for (const a of document.querySelectorAll("li")) {
  if (a.textContent.includes(winner)) {
    winner_comment_id=a.id;
      help = document.getElementById(winner_comment_id).childNodes;
      winner_comment_text = help[1].wholeText;
      comment_id_number = winner_comment_id;
      var res = comment_id_number.replace(/\D/g, "");
  }
}

var table = document.getElementById('comments_user');
table.insertAdjacentHTML('afterend', '<div id="teste" class="inputbox btn-red" onclick="example();">Sortear Número!</div>');

btnSortear.style.display = 'none';

var table2 = document.getElementById('comments_user');
table2.insertAdjacentHTML('afterend', '<div id="sorteio_result2" style="display: block;"><br><h2>Número Sorteado: '+res+' / '+total_c+'</h2><br><div style="padding:5px 0px 5px 0px"><li style="list-style:none" class="WinnerBackground"><span class="userBold">@'+winner+'</span>'+winner_comment_text+'</li></div><br></div>');

sorteio_result2.style.display = 'none';

function example(){
    document.getElementById(winner_comment_id).classList.add('WinnerBackground2');
    $('#'+winner_comment_id)[0].scrollIntoView(({ behavior: 'smooth', block: 'nearest', inline: 'start' }));
    sorteio_result2.style.display = 'initial';
    btnSortear.style.display = 'block';
    teste.style.display = 'none';
    document.getElementById('btnSortear').onclick = function() {
        sorteio_result2.style.display = 'none';
        SortearNumero();
    };
}