### D.O.M (Document Object Model)
Nos ayuda a entender todo lo que el usuario puede visualziar en html , todo lo que podemos ver o no podemos ver. Nos permite acceder a los elementos Es una representacion en forma de arbol de todos los elementos de una pagina web
### Obtener Elemento o Elementos
Para obtener un elemento se puede obtener mediante el id y la siguiente clase

document.getElementById()
Selecciona un elemento buscnadolo por su id
document.getElementsByClassName()
Seleccionas elementos buscandolo por su clase
Query Selector
Solo devuele el primer elemento que encuentra
Query Selector All
Devuelve un arreglo de todos los elementos

### Nodos 
Los nodos son la unidad minima de medida dentro del D.O.M, en el D.O.M
Todo los elementos de D.O.M son nodos y se clasifican en
Nodo Elemento
Ejemplo Etiquetas p , h1 , h2
Nodo Atributo
Ejemplo id="nombre" clase="nombre"
Nodo Texto
Es el texto que va dentro de un elemento o su contenido
Todo element HTML es un nodo, pero no todo nodo es un elemento html

### Style
Style
La propiedad Style nos permite acceder y manipular los estilos CSS de un elemento HTML desde Javascript
Existen 2 formas de añadir estilos

style
classList.add();

### D.O.M Travesing

Nos permite movernos entre los elementos html , recorrer el D.O.M como si fuera un arbol , siempre hay una partida inicio y de alli nos movemos , para realizar algún cambio de estilo, o lo que deseemos realizar parentElement
Nos permite recorrer de hijo a padre Se utila propiedad parentElement
NextSibling
Nos permite encontrar un hermano adyacente
Children
Nos permite recorrer de padre a hijo se utiliza el meotod children

### Crear Elementos
Javascript nos permite crear elementos html para despues insertalo se utiliza la propiedad div element
Para poder insertar un elemento tiene que estar contenido dentro de un padre, con el metodo append child nos permite agregar como un hijo a un elemento creado

### Inner HTML
Nos permite agregar tanto texto con etiquetas html en el D.O.M
