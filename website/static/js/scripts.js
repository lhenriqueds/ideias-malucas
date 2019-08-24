function Enviar1()
{
    window.location.href = "/login"
}
 

var el = document.getElementById('campooutros');

document.getElementById( 'op' ).addEventListener( 'change', function(){
    if(this.value === 'OUTROS') {
        el.style.visibility = 'visible';
    } else {
        el.style.visibility = 'hidden';
    }
});