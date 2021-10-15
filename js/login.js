let Nombre = false;
let Apellido = false;
let Celular = false;
let Correo = false;
let Contrasena = false;
let Contrasena2 = false;
const Expresiones = {
    Nombre: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{4,30}$/,
    Apellido: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{4,30}$/,
    Celular: /^[0-9]{10}/,    
    Correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    Contrasena: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){8,}/
}
document.getElementById("CrearCuenta").disabled = true;


document.querySelector("#Id_Nombre").addEventListener("keyup", 
    function Letras(event){

        if (event.key == "Enter")
        {
            document.getElementById("Id_Apellido").focus();
        }       

        if(Expresiones.Nombre.test(event.target.value))
        {
            Nombre = true;
            console.log("Nombre");
            ValidarDatos();
        }
        else
        {
            Nombre = false;
            ValidarDatos();
        }         
               
    });

document.querySelector("#Id_Apellido").addEventListener("keyup", 
    function Letras(event){
        
        if (event.key == "Enter")
        {
            document.getElementById("Id_Celular").focus();
        }       

        if(Expresiones.Apellido.test(event.target.value))
        {
            Apellido = true;
            console.log("Apellido");
            ValidarDatos();
        }
        else
        {
            Apellido = false;
            ValidarDatos();
        }      
    });

document.querySelector("#Id_Celular").addEventListener("keyup", 
    function Numeros(event){

        if (event.key == "Enter")
        {
            document.getElementById("Id_Correo").focus();
        }       

        if(Expresiones.Celular.test(event.target.value))
        {
            Celular = true;
            console.log("Celular");
            ValidarDatos();
        }
        else
        {
            Celular = false;
            ValidarDatos();
        }      
    });

document.querySelector("#Id_Correo").addEventListener("keyup", 
    function Correos(event){
        
        if (event.key == "Enter")
        {
            document.getElementById("Id_Contrasena").focus();
        }       

        if(Expresiones.Correo.test(event.target.value))
        {
            Correo = true;
            console.log("Correo");
            ValidarDatos();
        }
        else
        {
            Correo = false;
            ValidarDatos();
        }       
       
    });

document.querySelector("#Id_Contrasena").addEventListener("keyup", 
    function ContrasenasTexto(event){   
        
        if (event.key == "Enter")
        {
            document.getElementById("Id_ConfirmarContrasena").focus();
        }

        if(Expresiones.Contrasena.test(event.target.value))
        {           
            Contrasena = true;            
            ValidarDatos();
            console.log("Contraseña 1");
            let Contrasena1 = document.getElementById("Id_Contrasena").value;
            let ContrasenaAuxiliar = document.getElementById("Id_ConfirmarContrasena").value;

            if(Contrasena1 == ContrasenaAuxiliar)
            {
                Contrasena2 = true;
                ValidarDatos();
            }
            else
            {
                Contrasena2 = false;
                ValidarDatos();
            }                
        }
        else
        {
            Contrasena = false;            
            ValidarDatos();
        }
       
    });

function ValidarDatos()
{    
    
    if (Nombre== true && Apellido == true && Celular == true
        && Correo == true && Contrasena == true && Contrasena2 == true)
    {
        document.getElementById("CrearCuenta").disabled = false;
    }
    else
    {
        document.getElementById("CrearCuenta").disabled = true;
    }
}


