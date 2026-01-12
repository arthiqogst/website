// Minimal JS: mobile menu toggle and callback form (mailto fallback)
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }

  var form = document.getElementById('callback-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = (document.getElementById('name')||{}).value || '';
      var phone = (document.getElementById('phone')||{}).value || '';
      var message = (document.getElementById('message')||{}).value || '';
      var subject = encodeURIComponent('Callback request from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nPhone: ' + phone + '\n\n' + message);
      // mailto fallback for static site
      var mailto = 'mailto:hello@arthiqo.com?subject=' + subject + '&body=' + body;
      window.location.href = mailto;
    });
  }
});
