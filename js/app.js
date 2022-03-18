var arr = [];



class Persona {
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
}



function addPersona(){
   
   let Nombre = document.getElementById("txtNombre").value;
   let Edad = document.getElementById("txtEdad").value;
   let SexoI = document.getElementById("cbSexo");
   let Sex = SexoI.options[SexoI.selectedIndex].innerText;
   if(Validacion(Nombre, Edad, Sex) < 3){
       
    alert("Faltan campos");
     
   }else{
        p1 = new Persona(Nombre,Edad,Sex)
        arr.push(p1);       
        alert("Se creó algo");
        ListarPersona(arr);
   }

   
   
}


function ListarPersona(arreglo){
    let htmlLista = document.getElementById('lvPersona');
    htmlLista.innerHTML = '';
    arreglo.forEach(element => {
         htmlLista.innerHTML += `<li class="list-group-item">Nombre: ${element.nombre}, Edad: ${element.edad}, Sexo: ${element.sexo}</li>`  
    });
     
    
}

function Validacion(_nombre, _edad, _sexo){
    let contador = 0;

    if(_nombre != ''){
        contador++;
    }
    
    if(_edad != ''){
        contador++;
    }
    
    if(_sexo != ''){
        contador++;
    }
    return contador;
}




