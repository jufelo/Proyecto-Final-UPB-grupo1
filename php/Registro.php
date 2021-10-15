<?php
    $Mensaje = "";
    //Conectamos con el servidor
    $Conexion = mysqli_connect('localhost', 'root', '');

    //Verificamos la conexión
    if(!$Conexion)
    {
        echo "No se pudo conectar con el servidor";
    }
    else
    {
        $Base = mysqli_select_db($Conexion, 'tienda_ropa');
        if(!$Base)
        {
            echo "No se encontro la base de datos";
        }
        else
        {
            echo "Estamos en la base de datos";

            if (isset($_POST["CrearCuenta"]))
            {
                //Obtenemos los valores del formulario
                $Nombre = $_POST["Nombre"];
                $Apellido = $_POST["Apellido"];
                $Celular = $_POST["Celular"];
                $Correo = $_POST["Correo"];
                $Contrasena = md5($_POST["Contrasena"]);

                //Verificamos que el usuario no exista
                $Validar = "SELECT * FROM usuario WHERE Correo = '$Correo'";
                $Validando = mysqli_query($Conexion, $Validar);
                if($Validando->num_rows > 0)
                {
                    echo "El correo ya se encuentra creado";
                }
                else
                {
                    //Se ingresan los valores en la base de datos
                    $Valores = "INSERT INTO usuario () 
                    VALUES ('', '$Nombre', '$Apellido', '$Celular', '$Correo', '$Contrasena')";

                    //Ejecutamos sql
                    if (mysqli_query($Conexion, $Valores))
                    {
                        echo "Usuario creado exitosamente";
                    }
                    else
                    {
                        echo "Error: " .$sql . "" . mysqli_error($Conexion);
                    }

                    mysqli_close($Conexion);
                }               
            }
            else
            {
                echo "No se ha pulsado el botón";
            }            
            
        }

    }
?>