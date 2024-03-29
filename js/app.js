var arr = [];
var buttonAgregar = undefined;


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
        LimpiarCampos();
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
         
            <li class="list-group-item">id: ${element.id}, Nombre: ${element.nombre}, Edad: ${element.edad}, Sexo: ${element.sexo}
            
            <button type="button" class="btn btn-danger" onclick="Eliminar(arr, ${element.id})">Eliminar</button>
             
            <button type="button" class="btn btn-warning" onclick="EditarPersona(${element.id}, arr)">Editar</button>      
            </li>
         `         
    });
     
    
}

function Eliminar(ListaEliminar, id_){
    
    if(confirm("Estás seguro eliminar a este usuario")){
        ListaEliminar.forEach(element => {
            if(element.id == id_){
                arr = ListaEliminar.filter(element => element.id != id_ );
                ListarPersona(arr);              
            }            
        });
    }
}





function Validacion(_nombre, _edad, _sexo){
    let contador = 0;

    if(_nombre != ''){
        contador++;
    }
    
    if(_edad != ''){
        contador++;
    }
    
    if(_sexo != 'Elegir'){
        contador++;
    }
    return contador;
}

function agregarCosas(){
    

    let ItemLista = 
    `                <div>
    <li class="list-group-item">Nombre: Nicolas, Edad: 24, Sexo: Todo el día
        <button type="button" class="btn btn-danger">Eliminar</button>
        <button type="button" class="btn btn-warning">Editar</button>
    </li>
    </div>`

    lvPersona.innerHTML += ItemLista

}


function LimpiarCampos(){
     document.getElementById('txtNombre').value = '';
     document.getElementById('txtEdad').value = '';
     document.getElementById('cbSexo').selectedIndex = 0;
}



function EditarPersona(_id, ArrEdit){
    
    let editPer = ArrEdit.filter(element => element.id == _id)[0]

    document.getElementById('txtNombre').value = editPer.nombre;
    document.getElementById('txtEdad').value = editPer.edad;
    var seleccionar = document.getElementById('cbSexo');
    var SexIndex = 0;

    for (let i = 0; i < seleccionar.length; i++) {
        if (seleccionar[i].innerHTML == editPer.sexo) {
            SexIndex = i;
            break;
        }      
    }

    seleccionar.selectedIndex = SexIndex;


    bloquearBotones(true);


    buttonAgregar = document.getElementById('btnAgregar');

    SecBtnCrear.removeChild(buttonAgregar);


    var BottonGuardar =  `<button type="button" class="btn btn-success btnA" id="btnGuardar" onclick="guardarCambios(${editPer.id},arr)">Guardar</button>`;

    var BottonCancelar = `<button type="button" class="btn btn-danger btnA" id="btnCancelar" onclick="cancelarCambios()">Cancelar</button>`;
    
    SecBtnCrear.innerHTML += BottonGuardar;

    SecBtnCrear.innerHTML += BottonCancelar;
    
    
        
      
}


function cancelarCambios(){
    bloquearBotones(false);
    SecBtnCrear.innerHTML = '';
    SecBtnCrear.appendChild(buttonAgregar);
    LimpiarCampos();

    

}


function guardarCambios(idEditar, arrEditar){
    
    let NombreEditar = document.getElementById("txtNombre");
    let EdadEditar = document.getElementById("txtEdad");
    let SexoEditar = document.getElementById("cbSexo");
    let SexoIeditar = SexoEditar.options[SexoEditar.selectedIndex].text;


    p1 = new Persona(idEditar,NombreEditar,EdadEditar,SexoIeditar)
    
    arrEditar.forEach(element => {
        if(idEditar == element.id){
           element.nombre = NombreEditar.value,
           element.edad = EdadEditar.value,
           element.sexo = SexoIeditar;
        }
    });

    ListarPersona(arr);


    cancelarCambios();
    
}




function bloquearBotones(algo){
   
    var idLista = document.getElementById('lvPersona');

    idLista.childNodes.forEach(x => {
        if(x.nodeName == 'LI'){
            x.childNodes[1].disabled = algo;
            x.childNodes[3].disabled = algo;
        }
    });

}



