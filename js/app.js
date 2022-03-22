var arr = [];



class Persona {
    constructor(id, nombre, edad, sexo){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
}



function addPersona(){
   let idPersona = GenerarId(arr);
   let Nombre = document.getElementById("txtNombre").value.trimStart().trimEnd();
   let Edad = document.getElementById("txtEdad").value.trimStart().trimEnd();
   let SexoI = document.getElementById("cbSexo");
   let Sex = SexoI.options[SexoI.selectedIndex].innerText;
   if(Validacion(Nombre, Edad, Sex) < 3){
                    
   alert("Faltan campos");

     
   }else{
        p1 = new Persona(idPersona,Nombre,Edad,Sex)
        arr.push(p1);       
        alert("Se creó algo");
        ListarPersona(arr);
   }
   
   
}



function GenerarId(ListaRecorrer){ 
    let GeneratedID = 1
    if (ListaRecorrer.length != 0)
    {
        ListaRecorrer.forEach(element => {
            if(element.id == GeneratedID){
                GeneratedID++
            }
        });
    }  
    return GeneratedID
}


function ListarPersona(arreglo){
    lvPersona.innerHTML = '';
    arreglo.forEach(element => {
        lvPersona.innerHTML += ` 
         <div>
            <li class="list-group-item">id: ${element.id}, Nombre: ${element.nombre}, Edad: ${element.edad}, Sexo: ${element.sexo}
            
            <button type="button" class="btn btn-danger" onclick="Eliminar(${arr}, ${element.id})">Eliminar</button>
             
            <button type="button" class="btn btn-warning">Editar</button>      
            </li>
         </div>`         
    });
     
    
}

function Eliminar(ListaEliminar, id_){
    
    ListaEliminar.forEach(element => {
        if(element.id == id_){
            arr = ListaEliminar.filter(element => element.id != id_ );
            ListarPersona(arr);
            
               
        }
        
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


