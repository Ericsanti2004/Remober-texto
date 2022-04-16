function Concolor()
{
    document.getElementById("btnHola").style.backgroundColor = "green";
}

function sinColor()
{
    document.getElementById("btnHola").style.backgroundColor = "";  
} 

function Ocultar()
{
    document.getElementById('Texto01').style.display = 'none';
    btnHola.textContent = "Mostrar";
    
}

function Reaparecer()
{
    document.getElementById('Texto01').style.display = 'block';
    btnHola.textContent = "Ocultar";
}


function comparador()
{
    if(btnHola.textContent == "Mostrar" )
    {
        Reaparecer();
    }else{
        Ocultar();
    }
}

btnHola.addEventListener("mouseover", sinColor);
btnHola.addEventListener("mouseout", Concolor);
btnHola.addEventListener("click",comparador );

document.getElementById("text").addEventListener("keydown", barra);

function barra()
{
  console.log(text)
}