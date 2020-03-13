//Navegador: Especialmente Chrome ya que cuenta con óptimas herramientas de desarrollo.

//React Developer Tools: Es una herramienta Open Source creada por Facebook y tiene instalación para Chrome o Firefox. Nos dejará ver el código de React inspeccionando elementos.

//Editor de texto: Puedes usar cualquiera, en este curso sugerimos Visual Studio Code. Tiene muchos plugins útiles para el desarrollo.

//Prettier: Es un plugin que hace que el código se vea bien sin importar cómo esta escrito.





//const element = document.createElement('h1');////siempre podemos crear elementos
// que tipo de elemento queremos crear  
//element.innerText = 'hola mundo';

//const container = document.getElementById('app');

//container.appendChild (element);



import React from 'react'; //importar herramientas analogo a createElement
import ReactDOM from 'react-dom';//importar herramientas analogo de appenChild

const element = <h1>hola mundo</h1>

const container = document.getElementById('app');

ReactDOM.render(element, container)//metodo render 1 que queremos renderizar y donde lo queremos renderizar 


//import React from 'react'; //importar herramientas analogo a createElement
//import ReactDOM from 'react-dom';//importar herramientas analogo de appenChild

//const element = React.createElement('h1' , {}, 'hola kevin '); //crear elemento

//const container = document.getElementById('app');

//ReactDOM.render(element, container)//metodo render 1 que queremos renderizar y donde lo queremos renderizar 


