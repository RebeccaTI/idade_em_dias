var idade = 1;

if (idade >= 5 && idade < 8) {
    console.log("Infantil A");
} else if (idade >= 8 && idade < 11) {
    console.log("Infantil B");
} else if (idade >= 11 && idade < 14) {
    console.log("Juvenil A");
} else if (idade >= 14 && idade < 18) {
    console.log("Juvenil B");
} else if (idade >= 18) {
    console.log("Adulto");
} else {
    console.log("Não há turma para esta faixa etária");

}