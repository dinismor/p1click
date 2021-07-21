import "./admin_gerir";
export function horas_atuais()
{
  var d = new Date();

  var dia = d.getDay();
  var ndate = d.toLocaleString();
  var mes= d.getMonth()+1;

  var horas = d.getHours();
  var minutos = d.getMinutes();
  var segundos = d.getSeconds();

  horas=("0"+horas).slice(-2);
  minutos=("0"+minutos).slice(-2);
  segundos=("0"+segundos).slice(-2);

  var horas_atuaisss= ""+ horas+":"+minutos+":"+segundos;

  return horas_atuaisss;
  
};


export function teste() {
  


};

export function dia_atual()
{
  var d = new Date();
  var mes= d.getMonth()+1;
  var data_atual=""+ d.getDate()+"/"+mes+"/"+d.getFullYear();
  
  return data_atual;
};

export function dia_semana()
{
  var d = new Date();
  
  var weekday = new Array(7);
  weekday[0] = "Domingo";
  weekday[1] = "Segunda-feira";
  weekday[2] = "Terça-feira";
  weekday[3] = "Quarta-feira";
  weekday[4] = "Quinta-feira";
  weekday[5] = "Sexta-feira";
  weekday[6] = "Sábado";

  var n = weekday[d.getDay()];
 return n;
};


var minutos_atraso=15; //valor default ate futuras alteraçoes

export function mostra_minutos_atraso()
{

  var bruh="0"; //default
//  var xyxx = Tempo.("atraso_consultas");

  var xyxx = localStorage.getItem("atraso_consultas");

  if(xyxx == null)
  {
    localStorage.setItem("atraso_consultas",JSON.stringify(bruh));
    atraso_consulta_x=bruh;

  }
  else
  {
  var split = xyxx.split("\u0022");
  var atraso_consulta_x=split[1];

  var xcx="\u0022\u0022";

  if(xyxx==xcx)
  {
    localStorage.setItem("atraso_consultas",JSON.stringify(bruh));
    atraso_consulta_x=bruh;

  }
  }
 
  //alert(xcx);

  return atraso_consulta_x;


  /*
  
  var bruh="0"; //default

  var xyxx = localStorage.getItem("atraso_consultas"); 
  
  var split = xyxx.split("\u0022");
  var atraso_consulta_x=split[1];

  var xcx="\u0022\u0022";

  if(xyxx==xcx)
  {
    localStorage.setItem("atraso_consultas",JSON.stringify(bruh));
    atraso_consulta_x=bruh;

  }

 
  //alert(xcx);

  return atraso_consulta_x;
  
  */
};


/////////////////////////////////


export function home_mostra_minutos_restantes()
{
};





export function  minutos_atraso_consulta() {

  //vai buscar os ids

  var tempo_atraso = document.getElementById('number_x').value; 

  var element = document.getElementById('botao');
  
  var minutx = document.getElementById('minutos');

  //var minutzz = document.getElementById('btn_teste'); //so para ir buscar o value

  //------------------------------------------//

  var minutos_atraso=JSON.stringify(minutos_atraso);
  //
 // minutx.innerHTML=""+tempo_atraso;

  localStorage.setItem("atraso_consultas",JSON.stringify(tempo_atraso)); //definir os 

  element.addEventListener("click", () => {

    var xxx = localStorage.getItem("atraso_consultas"); 

    localStorage.setItem("atraso_consultas", JSON.stringify(minutos_atraso)); //definir o local storage


  });


};

function verificacao()
{

}


export function realtimeClock(){
  
    const startTimer = () =>
    {

    }

   
var agora = new Date(); //declarar a data atual
let data_evento = new Date(2021,7,30); 
    
    



    //data definida
    data_evento.setHours(15); //horas definidas do dia
    data_evento.setMinutes(30); //minutos definidos do dia acima
    data_evento.setSeconds(0);  //segundos definidos do evento
    //countdown timer template 
    
    var diferenca = data_evento - agora; 

    var s = Math.floor(diferenca/1000); //dividir os valores da diferença por 1000
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    //txt
    /*
    var timer_label = document.getElementById('txt_timer');
    timer_label.innerText="aa";
    */
    
    //diferenca entre o dia do evento e o atual
    
    
    
    h %= 24;
    m %= 60;
    s %= 60;
    
    
    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;
    
    d= d-31;
    var txt=""+ d+" : "+h+" : "+m+" : "+s+"";
    
    // document.getElementById("resultado").innerText = resultado;
    //export{ txt };

    
        return ""+txt;
      };
    
    //this.countdown_txt.text = txt;
    
    

