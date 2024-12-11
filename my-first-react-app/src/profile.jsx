export default function Profile({imagen,name,edad,correo ,lorem}){
return(
       
        <div id="ext">
        <div id="recu">
            <img src={imagen} alt="" id="imagen"/>

        <h1> {name}</h1>
        <p>{lorem}</p>
            <p4 id="edad">Edad: {edad}
            </p4>
            
            <p4>
            Correo Electronico: {correo}
            </p4>
            <div id="lens"> 
            <p id="len">HTML</p>
            <p id="len">CSS</p>
            <p id="len">JS</p>
            <p id="len"> PHP</p>
            <p id="len">JAVA</p>
            </div>
        </div>
        </div>
        
)

}