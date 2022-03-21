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
    lvPersona.innerHTML = '';
    arreglo.forEach(element => {
        lvPersona.innerHTML += ` <div>
         <li class="list-group-item">Nombre: ${element.nombre}, Edad: ${element.edad}, Sexo: ${element.sexo}
             <button type="button" class="btn btn-danger">Eliminar</button>
             <button type="button" class="btn btn-warning">Editar</button>
         </li>
         </div>`

         
           
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

function agregarWeas(){
    

    let ItemLista = 
    `                <div>
    <li class="list-group-item">Nombre: Vicente, Edad: 22, Sexo: Todo el día
        <button type="button" class="btn btn-danger">Eliminar</button>
        <button type="button" class="btn btn-warning">Editar</button>
    </li>
    </div>`

    lvPersona.innerHTML += ItemLista

}


