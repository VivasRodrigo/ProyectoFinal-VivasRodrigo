//Variables COTIZADOR HOGAR
const casachica= 70000;
const casagrande= 80000;
const departamentochico= 30000;
const departamentogrande = 45000;

const basico= 1;
const completo= 1.2;
const full= 1.4;

let presupuesto= 0;

//declaro un Array de objetos para datos del hogar
const cliente ={
    Nombre: "",
    Contacto: "",
    Tipo:"",
    Metros: "",
    Seguro:"",
    Precio: "",
    Fecha:"",
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
    Año:0,
    Tipo:"",
    GNC:"",
    Seguro:"",
    Precio: "",
    Fecha:"",
};

function producto(a, b){
    return a * b;
}

document.addEventListener('submit', (event) =>{
event.preventDefault();

//Programa COTIZADOR HOGAR
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
            cliente.Tipo= "ERROR, ingresar una opción correcta";
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
            cliente.Seguro= "ERROR, ingresar una opción correcta";
            }
    
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

        if (presupuesto != 0){
            cliente.Fecha= new Date;

            let usuarioGuardado = JSON.stringify(cliente);
            localStorage.setItem("cliente", usuarioGuardado);

            const compra = document.getElementById('compra');
            compra.innerHTML=`
            <div class="datosfinales">
            <h2 class="h22"> ${cliente.Nombre}, el valor del seguro para tu ${cliente.Tipo} es de $${Math.round(cliente.Precio)} mensuales.</h2>
            <p class="pdatos"><b>Datos del asegurado:</b><br>
            Nombre: ${cliente.Nombre}<br>
            Contacto: ${cliente.Contacto}<br>
            Tipo de vivienda: ${cliente.Tipo}<br>
            Metros Cuadrados: ${cliente.Metros}<br>
            Tipo de seguro: ${cliente.Seguro}<br>
            Precio Mensual: $${Math.round(cliente.Precio)}<br>
            Fecha de cotización: ${cliente.Fecha.toLocaleDateString('es-ES')}<br><br>
            </p>
            <h3 class="h33">Introduzca los datos nuevamente para una nueva cotización</h3>
            </div>
            `;

            let usuarioRecuperado = JSON.parse(localStorage.getItem('cliente'));
            console.log(usuarioRecuperado, "datos del usuario guardado");

            presupuesto= 0;
            cliente.Precio=0;
        } else{
            const compra = document.getElementById('compra');
            compra.innerHTML=`
            <div class="datosfinales">
            <h2 class="h22">Favor de completar los datos</h2>
            `;} 

            document.getElementById('nombre').value = ''
            document.getElementById('email').value = ''
            document.getElementById('vivienda').value = ''
            document.getElementById('metros').value = ''
            document.getElementById('tipoplan').value = ''

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
            if(año <= 2015){
                clienteauto.Tipo= "auto viejo";
            } else if(año > 2015 && año <=2020){
                clienteauto.Tipo= "Auto Semi Viejo";
            } else if(año >2020 && año <2025){
                clienteauto.Tipo= "Auto Semi Nuevo";
            } else if(año == 2025){
                clienteauto.Tipo= "Auto 0 KM";
            }else {
                clienteauto.Tipo= "ERROR, ingresar una opción correcta";
            }

        const congnc = document.getElementById('congnc').value;
            if(congnc == 1){
                clienteauto.GNC="Si";
            } else if(congnc == 2){
                clienteauto.GNC="No";
            } else{
                clienteauto.GNC= "Ingrese una opción";
            }

        const tiposeguro = document.getElementById('tiposeguro').value;
            if(tiposeguro == 1){
                clienteauto.Seguro= "Responsabilidad Civil";
            }else if(tiposeguro == 2){
                clienteauto.Seguro= "Terceros Completo";
            }else if(tiposeguro == 3){
                clienteauto.Seguro= "Todo Riesgo";
            }else {
                clienteauto.Seguro= "ERROR, ingresar una opción correcta";
            }

            if(año <= 2015){
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

        if (presupuestoauto != 0){
            clienteauto.Fecha= new Date;

            let usuarioGuardadoAuto = JSON.stringify(clienteauto);
            localStorage.setItem("clienteauto", usuarioGuardadoAuto);

            const compraauto = document.getElementById('compraauto');
            compraauto.innerHTML=`
            <div class="datosfinales">
            <h2 class="h22"> ${clienteauto.Nombre}, el valor del seguro para tu auto es de $${Math.round(clienteauto.Precio)} mensuales.</h2>
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
            <h3 class="h33">Introduzca los datos nuevamente para una nueva cotización</h3>
            </div>
            `;
            
            let usuarioRecuperadoAuto = JSON.parse(localStorage.getItem('clienteauto'));
            console.log(usuarioRecuperadoAuto, "datos del usuario guardado");
            
            presupuestoauto= 0;
            clienteauto.Precio=0;
    
        } else{
            const compraauto = document.getElementById('compraauto');
            compraauto.innerHTML=`
            <div class="datosfinales">
            <h2 class="h22">Favor de completar los datos</h2>
            `;} 

        document.getElementById('nombre').value = ''
        document.getElementById('email').value = ''
        document.getElementById('marca').value = ''
        document.getElementById('modelo').value = ''
        document.getElementById('año').value = ''
        document.getElementById('congnc').value = ''
        document.getElementById('tiposeguro').value = ''
    }
});





