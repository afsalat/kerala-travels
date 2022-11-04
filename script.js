var e = document.getElementById("co1");
e.onmouseover = function() {
  document.getElementById('tex1').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex1').style.display = 'none';
}

var e = document.getElementById("co2");
e.onmouseover = function() {
  document.getElementById('tex2').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex2').style.display = 'none';
}

var e = document.getElementById("co3");
e.onmouseover = function() {
  document.getElementById('tex3').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex3').style.display = 'none';
}

var e = document.getElementById("co4");
e.onmouseover = function() {
  document.getElementById('tex4').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex4').style.display = 'none';
}

var e = document.getElementById("co5");
e.onmouseover = function() {
  document.getElementById('tex5').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex5').style.display = 'none';
}

var e = document.getElementById("co6");
e.onmouseover = function() {
  document.getElementById('tex6').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex6').style.display = 'none';
}

var e = document.getElementById("co7");
e.onmouseover = function() {
  document.getElementById('tex7').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex7').style.display = 'none';
}

var e = document.getElementById("co8");
e.onmouseover = function() {
  document.getElementById('tex8').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('tex8').style.display = 'none';
}




// login and sending email

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Wait...';

   const serviceID = 'service_vie98na';
   const templateID = 'template_mf0ibzo';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Register';
      alert('Your succesfully registered!');
    }, (err) => {
      btn.value = 'Register';
      alert(JSON.stringify(err));
    });
});



function show(para){
    document.getElementById('form').style.display=para
    document.getElementsByTagName('header').style.position='absolute'
    document.getElementsByTagName('header').style.zIndex='-1'
    document.getElementById('form').style.transform='transition: 3s'
    document.getElementById('header').style.background="linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55))"
}

function hide(para){
    document.getElementById('form').style.display=para
}