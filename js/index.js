/**
 * Created by Ken Fontijne on 8-2-2017.
 */
var container = document.getElementById('languageContainer');

for(var i=1; i<10; i++){

    if (i==1 || i==4 || i==7){
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
    }

    var col = document.createElement('div');
    col.setAttribute('class', 'col-md-4 flagContainer');

    var link = document.createElement('a');
    link.setAttribute('href', "http://www.google.com");

    var flag = document.createElement('img');
    flag.setAttribute('class', 'flag');
    flag.setAttribute('src', 'images/flag' + i + '.png');
    flag.addEventListener('click', function(){
    });

    container.appendChild(row);
    row.appendChild(col);
    col.appendChild(link);
    link.appendChild(flag);
}
