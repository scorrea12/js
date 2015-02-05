function calcular() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
 
                if (isNaN(x)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
                }
                else if (isNaN(y)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
                }
                else
                {
                    var rta = parseInt(x) + parseInt(y);
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                }
            }
function concatenar() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
 
                if (x=="") {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>Inserte texto en campo 1</div>";
                }
                else if (y=="") {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>Inserte texto en campo 2</div>";
                }
                else
                {
                    var rta = x+y;
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                }
            }
            function ordenar() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                z = document.getElementById("valor3").value;
 
                if (x=="") {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>Inserte texto en campo 1</div>";
                }
                else if (y=="") {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>Inserte texto en campo 2</div>";
                }
                else if (z=="") {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>Inserte texto en campo 3</div>";
                }
                else
                {
                    var rta = "";
                    if(x<=y && x<=z && y<=z)
                    {
                        rta= x+y+z;
                    }
                    else if(x<=y && x<=z && y>=z)
                    {
                        rta = x+z+y;
                    }
                    if(z<=y && z<=x && x<=y)
                    {
                        rta= z+x+y;
                    }
                    else if(z<=y && z<=x && x>=y)
                    {
                        rta = z+y+x;
                    }
                 if(y<=z && y<=x && z<=x)
                    {
                        rta= y+z+x;
                    }
                    else if(y<=z && y<=x && z>=x)
                    {
                        rta = y+x+z;
                    }
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                }
            }