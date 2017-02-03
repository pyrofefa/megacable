var noActivity = 0;
var flag = false;
$(document).ready(function () 
{
    //alert("entrando");
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 1000); // 1 segundo
    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        noActivity = 0;
    });
    $(this).keypress(function (e) {
        noActivity = 0;
    });
});
function timerIncrement() 
{

  noActivity = noActivity + 1;
  //console.log(flag);
  console.log("noActivity: "+noActivity);
  
    if (noActivity > 300)
    {
      noActivity = 0; 
      window.location = '#/';
    }
}
