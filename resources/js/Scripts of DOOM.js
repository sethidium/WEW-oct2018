cssVars();

// open navigation

$('.nav-prompt').click(function() {

   if ($('.nav-inner').attr('aria-expanded') == 'false') {
       $('.nav-inner').attr('aria-expanded', 'true');
   }
   else{
    $('.nav-inner').attr('aria-expanded', 'false');
   }


//Change the Text//
if ($('.nav-prompt').text() == 'Open Navigation') {
   
    $('.nav-prompt').text('Close Navigation'); }
else {
    $('.nav-prompt').text('Open Navigation');
}
})


//NAV Active Class
function activeMenu() {
    var url = window.location.href;
    $('.nav-inner a').filter(function() {
        return this.href == url;
     }).addClass('active');
}
//Run The Function//
activeMenu()