function getElementsById(ids) {
    var idList = ids.split(" ");
    var e = [], item;
    for (var i = 0; i < idList.length; i++) {
        item = document.getElementById(idList[i]);
        if (item) {
            e.push(item);
        }
    }
    return(e);
}
doStuff(getElementsById("myCircle1 myCircle2 myCircle3 myCircle4"));
// var e = document.getElementsByClassName("cod");
e.onmouseover = function() {
  document.getElementById('tex').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex').style.display = 'none';
}