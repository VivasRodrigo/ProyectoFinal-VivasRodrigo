//Variables COTIZADOR HOGAR
const casachica= 70000;
const casagrande= 80000;
const departamentochico= 30000;
const departamentogrande = 45000;

const basico= 1;
const completo= 1.2;
const full= 1.4;

let presupuesto= 0;
let iduse= 10;//los usuarios de jsonplaceholder son 10, empiezan a grabar desde el 11
let iduse1= 10;

//declaro un Array de objetos para datos del hogar
const cliente ={
    Nombre: "rodri",
    Contacto: "",
    Tipo:"",
    Metros: "",
    Seguro:"",
    Precio: "",
    Fecha:"",
    id:"",
};

//Variables COTIZADOR AUTO

const autoviejo= 35000;
const autosemiviejo= 450000;
const autoseminuevo= 60000;
const auto0km = 85000;

const respcivil= 1;
const tercompleto= 1.2;
const todoriesgo= 1.4;

const gnc= 1.1;

let presupuestoauto= "";

//declaro un Array de objetos para datos del auto
const clienteauto ={
    Nombre: "",
    Contacto: "",
    Marca:"",
    Modelo:"",
    Año:"",
    Tipo:"",
    GNC:"",
    Seguro:"",
    Precio: "",
    Fecha:"",
};

function producto(a, b){
    return a * b;
}



//fetch
const url= "https://jsonplaceholder.typicode.com/users";
async function fetchUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const user= await response.json()
        console.log("Datos recibidos de Clientes Cotizados",user)

//SIMULACION: buscar cotizacion DEL HOGAR a través del fetch
        
        document.getElementById("buscar").addEventListener("click", ()=> {
        const idcotizacion = document.getElementById('idcotizacion').value;
        idusuario=idcotizacion;
        if (idusuario ==="" || idusuario==0 || idusuario>10){
            Swal.fire({
            title: "Introduce tu Numero de ID!",
            icon: "warning",
            background: '#efefd0',
            color: '#051923', 
            confirmButtonColor: '#72e0b8', 
            iconColor:"#f58a18"
            });
        }else {    
            const userid = user.filter(function(idd) {
                return idd.id == idusuario;
            });
            console.log(userid);
            console.log("ESTO SIMULA LO SIGUIENTE: si el numero de ID es incorrecto sale msj de ERROR, si es correcto se muestran los datos del cliente extraidos de la base de datos descargados con fetch")
            const buscarcoti = document.getElementById('buscarcoti');
            buscarcoti.innerHTML=`
                <div class="datosfinales1">
                    <h2 class="h22">Detalle de tu Cotización:</h2>
                    <div class="detalle">
                    <p class="pdatos1"><b>Datos del asegurado:</b><br>
                    Nombre: ${userid[0].name}<br>
                    Email: ${userid[0].email}<br>
                    Telefono: ${userid[0].phone}<br>
                    Tipo de vivienda: <br>
                    Metros Cuadrados: <br>
                    Tipo de seguro: <br>
                    Precio Mensual: <br>
                    Fecha de cotización:<br>
                    Cotización ID N°:  ${idusuario}
                    </p>
                    </div>
                </div>
                `;}
            document.getElementById('idcotizacion').value = ''
            });        

    }catch(error){
    console.error("Error en el pedido de Usuarios.",error.message)
    }finally {
    console.log("Aca se puede ver que el programa no puede cargar los usuarios, sin embargo el programa continua sin problemas")}
    }    fetchUser()

//Programa COTIZADOR HOGAR
document.addEventListener('submit', (event) =>{
event.preventDefault();

    if (event.target.id === 'miCotizacion') {  
        const nombre = document.getElementById('nombre').value;
            cliente.Nombre= nombre;
        const email = document.getElementById('email').value;
            cliente.Contacto= email;
        const vivienda = document.getElementById('vivienda').value;
            if(vivienda == 1){
            cliente.Tipo="Casa";
            } else if(vivienda == 2){
            cliente.Tipo="Departamento";
            } else {
            cliente.Tipo= "";
            }
        const metros = document.getElementById('metros').value;
            cliente.Metros= metros;
        const tipoplan = document.getElementById('tipoplan').value;
            if(tipoplan == 1){
            cliente.Seguro= "Básico";
            }else if(tipoplan == 2){
            cliente.Seguro= "Completo";
            }else if(tipoplan == 3){
            cliente.Seguro= "Full";
            }else {
            cliente.Seguro= "";
            }

        // si no hay datos cargados sale mensaje de advertencia.
        if (cliente.Nombre === "" ||
            cliente.Contacto === "" ||
            cliente.Tipo === "" ||
            cliente.Metros === "" ||
            cliente.Seguro === ""){
                Swal.fire({
                title: "Completa todos los datos!",
                icon: "warning",
                background: '#efefd0',
                color: '#051923', 
                confirmButtonColor: '#72e0b8', 
                iconColor:"#f58a18"
                });
        } else{
        if(vivienda == 1){
            if(metros >0 && metros <=150){
                if(tipoplan == 1){
                presupuesto= producto(casachica,basico);
                }else if(tipoplan == 2){
                presupuesto= producto(casachica,completo);
                }else if(tipoplan == 3){
                presupuesto= producto(casachica,full);
            }}else if(metros >=151){
                if(tipoplan == 1){
                presupuesto= producto(casagrande,basico);
                }else if(tipoplan == 2){
                presupuesto= producto(casagrande,completo);
                }else if(tipoplan == 3){
                presupuesto= producto(casagrande,full);
            }}} else{
                if(metros >0 && metros<=80){
                if(tipoplan == 1){
                presupuesto= producto(departamentochico,basico);
                }else if(tipoplan == 2){
                presupuesto= producto(departamentochico,completo);
                }else if (tipoplan == 3){
                presupuesto= producto(departamentochico,full);
            }}else if(metros >=81){
                if(tipoplan == 1){
                presupuesto= producto(departamentogrande,basico);
                }else if(tipoplan == 2){
                presupuesto= producto(departamentogrande,completo);
                }else if(tipoplan == 3){
                presupuesto= producto(departamentogrande,full);
            }}}

        cliente.Precio= presupuesto;        
        if (presupuesto !="" || presupuesto!= 0){
            cliente.Fecha= new Date;
            iduse++
            cliente.id=iduse

            const compra = document.getElementById('compra');
            compra.innerHTML=`
            <div class="datosfinales">
                <h2 class="h22"> ${cliente.Nombre}, el valor del seguro para tu ${cliente.Tipo} es de $${Math.round(cliente.Precio)} mensuales.</h2>
                <div class="detalle">
                    <p class="pdatos"><b>Datos del asegurado:</b><br>
                        Nombre: ${cliente.Nombre}<br>
                        Contacto: ${cliente.Contacto}<br>
                        Tipo de vivienda: ${cliente.Tipo}<br>
                        Metros Cuadrados: ${cliente.Metros}<br>
                        Tipo de seguro: ${cliente.Seguro}<br>
                        Precio Mensual: $${Math.round(cliente.Precio)}<br>
                        Fecha de cotización: ${cliente.Fecha.toLocaleDateString('es-ES')}<br>
                        ID: ${cliente.id}<br><br>
                    </p>
                    <button class="boton2" id="contacto">Quiero que me contacten</button>
                </div>
                <h3 class="h33">Introduzca los datos nuevamente para una nueva cotización</h3>
            </div>
            `;
            
            //al hacer click en QUIERO QUE ME CONTACTEN el Usuario queda guardado en localstorage con el mensaje contactar al cliente
            document.getElementById("contacto").addEventListener("click", ()=> {
                cliente.Contactar="Contactar al cliente";
                let usuarioGuardado = JSON.stringify(cliente);
                localStorage.setItem("cliente", usuarioGuardado);
                let usuarioRecuperado = JSON.parse(localStorage.getItem('cliente'));
                console.log(usuarioRecuperado, "datos del usuario guardado");

                Swal.fire({
                    title: "Formulario enviado con éxito",
                    text: "Uno de nuestros agentes se comunicará contigo",
                    icon: "success",
                    background: '#efefd0',
                    color: '#051923',
                    confirmButtonColor: '#72e0b8',                     
                    });
            console.log("al hacer click en QUIERO QUE ME CONTACTEN el Usuario queda guardado en localstorage con el mensaje contactar al cliente");
                    
            presupuesto= "";
            cliente.Precio="";
                setTimeout(() => {
                    document.getElementById('nombre').value = ''
                    document.getElementById('email').value = ''
                    document.getElementById('vivienda').value = ''
                    document.getElementById('metros').value = ''
                    document.getElementById('tipoplan').value = ''
                }, 2000);
            
            }); 

        }
    }

//Programa COTIZADOR AUTO
    } else if (event.target.id === 'miCotizacionauto') {        
        
        const nombre = document.getElementById('nombre').value;
            clienteauto.Nombre= nombre;  
        const email = document.getElementById('email').value;
            clienteauto.Contacto= email;
        const marca = document.getElementById('marca').value;
            clienteauto.Marca= marca;
        const modelo = document.getElementById('modelo').value;
            clienteauto.Modelo= modelo;
        const año = document.getElementById('año').value;
            clienteauto.Año= año;
            if(año!="" && año<= 2015){
                clienteauto.Tipo= "auto viejo";
            } else if(año > 2015 && año <=2020){
                clienteauto.Tipo= "Auto Semi Viejo";
            } else if(año >2020 && año <2025){
                clienteauto.Tipo= "Auto Semi Nuevo";
            } else if(año == 2025){
                clienteauto.Tipo= "Auto 0 KM";
            }else {
                clienteauto.Tipo= ""
                clienteauto.Año="";
            }
        const congnc = document.getElementById('congnc').value;
            if(congnc == 1){
                clienteauto.GNC="Si";
            } else if(congnc == 2){
                clienteauto.GNC="No";
            } else{
                clienteauto.GNC= "";
            }
        const tiposeguro = document.getElementById('tiposeguro').value;
            if(tiposeguro == 1){
                clienteauto.Seguro= "Responsabilidad Civil";
            }else if(tiposeguro == 2){
                clienteauto.Seguro= "Terceros Completo";
            }else if(tiposeguro == 3){
                clienteauto.Seguro= "Todo Riesgo";
            }else {
                clienteauto.Seguro= "";
            }

        // si no hay datos cargados sale mensaje de advertencia.
        if (clienteauto.Nombre === "" ||
            clienteauto.Contacto === "" ||
            clienteauto.Marca === ""||
            clienteauto.Modelo === "" ||
            clienteauto.Año === "" ||
            clienteauto.GNC === "" ||
            clienteauto.Seguro === ""){
                Swal.fire({
                    title: "Completa todos los datos!",
                    icon: "warning",
                    background: '#efefd0',
                    color: '#051923', 
                    confirmButtonColor: '#72e0b8', 
                    iconColor:"#b76b3c"
        })} else{    
            if(año!="" && año<= 2015){
                if(tiposeguro == 1){
                presupuestoauto= producto(autoviejo,respcivil);
                }else if(tiposeguro == 2){
                presupuestoauto= producto(autoviejo,tercompleto);
                }else if(tiposeguro == 3){
                presupuestoauto= producto(autoviejo,todoriesgo);
            }} else if(año > 2015 && año <=2020){
                if(tiposeguro == 1){
                presupuestoauto= producto(autosemiviejo,respcivil);
                }else if(tiposeguro == 2){
                presupuestoauto= producto(autosemiviejo,tercompleto);
                }else{
                presupuestoauto= producto(autosemiviejo,todoriesgo);
            }} else if(año >2020 && año <2025){
                if(tiposeguro == 1){
                presupuestoauto= producto(autoseminuevo,respcivil);
                }else if(tiposeguro == 2){
                presupuestoauto= producto(autoseminuevo,tercompleto);
                }else{
                presupuestoauto= producto(autoseminuevo,todoriesgo);
            }} else if(año == 2025){
                if(tiposeguro == 1){
                presupuestoauto= producto(auto0km,respcivil);
                }else if(tiposeguro == 2){
                presupuestoauto= producto(auto0km,tercompleto);
                }else if(tiposeguro == 3) {
                presupuestoauto= producto(auto0km,todoriesgo);
                }}   

        if (congnc == 1){
            clienteauto.Precio= producto(presupuestoauto,gnc)
            } else if (congnc == 2){
            clienteauto.Precio= presupuestoauto;
            }     

        if (presupuestoauto !="" || presupuestoauto!= 0){
            clienteauto.Fecha= new Date;
            iduse1++
            clienteauto.id=iduse

            const compraauto = document.getElementById('compraauto');
            compraauto.innerHTML=`
            <div class="datosfinales">
                <h2 class="h22"> ${clienteauto.Nombre}, el valor del seguro para tu auto es de $${Math.round(clienteauto.Precio)} mensuales.</h2>
                <div class="detalle">
                    <p class="pdatos"><b>Datos del asegurado:</b><br>
                        Nombre: ${clienteauto.Nombre}<br>
                        Contacto: ${clienteauto.Contacto}<br>
                        Marca: ${clienteauto.Marca}<br>
                        Modelo: ${clienteauto.Modelo}<br>
                        Año: ${clienteauto.Año}<br>
                        GNC: ${clienteauto.GNC}<br>
                        Tipo de seguro: ${clienteauto.Seguro}<br>
                        Precio Mensual: $${Math.round(clienteauto.Precio)}<br>
                        Fecha de cotización: ${clienteauto.Fecha.toLocaleDateString('es-ES')}<br><br>
                    </p>
                    <button class="boton2" id="contacto">Quiero que me contacten</button>
                </div>
                <h3 class="h33">Introduzca los datos nuevamente para una nueva cotización</h3>
            </div>
            `;
            
            //al hacer click en QUIERO QUE ME CONTACTEN el Usuario queda guardado en localstorage con el mensaje contactar al cliente
            document.getElementById("contacto").addEventListener("click", ()=> {
                clienteauto.Contactar="Contactar al cliente";
                let usuarioGuardadoAuto = JSON.stringify(clienteauto);
                localStorage.setItem("clienteauto", usuarioGuardadoAuto);
                let usuarioRecuperadoAuto = JSON.parse(localStorage.getItem('clienteauto'));
                console.log(usuarioRecuperadoAuto, "datos del usuario guardado");
        
                Swal.fire({
                    title: "Formulario enviado con éxito",
                    text: "Uno de nuestros agentes se comunicara contigo",
                    icon: "success",
                    background: '#efefd0',
                    color: '#051923',
                    confirmButtonColor: '#72e0b8',    
                    });

            console.log("al hacer click en QUIERO QUE ME CONTACTEN el Usuario queda guardado en localstorage con el mensaje contactar al cliente");
            
            presupuestoauto="";
            clienteauto.Precio="";

                setTimeout(() => {
                    document.getElementById('nombre').value = ''
                    document.getElementById('email').value = ''
                    document.getElementById('marca').value = ''
                    document.getElementById('modelo').value = ''
                    document.getElementById('año').value = ''
                    document.getElementById('congnc').value = ''
                    document.getElementById('tiposeguro').value = ''
                }, 2000);            
            
            });
        }
    }}
});



