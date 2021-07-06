let contador=0;

//While
while(contador<=3){
    console.log(contador);
    contador++;
}

//do while
contador=0;

do{
    console.log(contador);
    contador++;
}while(contador<=3);

//For

for(contador=0;contador<=3; contador++){
    console.log(contador);
}

//Break
for(contador=0;contador<=10;contador++){
    if(contador%2==0){
        console.log(contador);
        break;
    }
}

//Continue
for(contador=0;contador<=10;contador++){
    if(contador%2==0){
        continue;
    }
    console.log(contador);
}

//Etiquetas. Uso no recomendable
inicio:
for(contador=0;contador<=10;contador++){
    if(contador%2==0){
        continue inicio;
    }
    console.log(contador);
}