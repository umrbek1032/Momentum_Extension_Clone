setInterval(function () {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  //var s = d.getSeconds();
  //var ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? "0" + m : m;
  //s = s < 10 ? '0' + s : s;
  var time = h + ":" + m; //+ ':' + s + ' ' //+ ampm;
  document.querySelector(".clock").innerHTML = time;
}, 1000);
