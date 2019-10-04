

var ano = prompt("informe sua idade", );
var mes = prompt("informe o numero referente ao seu mes de aniversario ", );
var diasAniversario = prompt("informe dia do seu aniversario ", );
var diasVida;
var diaHoje = new Date();
var mesHoje = new Date();
var dias=diasAniversario;

if((mes<(mesHoje.getMonth()+1)) && (dias<=diaHoje.getDate())){
    mes=mesHoje.getMonth()+1-mes;
    dias=diaHoje.getDate()-dias;

}else if((mes<(mesHoje.getMonth()+1 )&& dias>diaHoje.getDate())){
    mes=mesHoje.getMonth()-mes;
    dias=diaHoje.getDate()+30-dias;
}
else if(mes>mesHoje.getMonth()&& (dias<=diaHoje.getDate())){
    mes=12-mes+mesHoje.getMonth()+1;
    dias=diaHoje.getDate()-dias;

}else if(mes>mesHoje.getMonth()&& (dias>diaHoje.getDate())){
    mes=12-mes+mesHoje.getMonth()+1;
    dias=diaHoje.getDate()+30-dias;

}else if((mes==mesHoje.getMonth()+1 )&& (diasAniversario > diaHoje.getDate())){
    mes=11;
    dias=diaHoje.getDate()+30-dias;
}else if((mes==mesHoje.getMonth()+1) && (diasAniversario <= diaHoje.getDate())){
    mes=0;
    dias=diaHoje.getDate()-dias;
}
if(dias==diaHoje.getDate()){
    dias=30;
}
console.log(ano);
console.log(mes);
console.log(dias);
diasVida = ano * 365 + mes*30  + dias; 
console.log(diasVida);                                   