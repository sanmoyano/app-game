## 26/04/2023
Repo proyecto nuevo -> https://github.com/sotopro/peoplevsnumbers
## ESLint
npm i -D eslint eslint-config-universe prettier
"eslintConfig": {
    "extends": "universe/native"
  }
## .prettierrc
{
    "printWidth": 100,
    "tabWidth": 2,
    "singleQuote": true,
    "bracketSameLine": true,
    "trailingComma": "es5"
}
# shadow generator
https://ethercreative.github.io/react-native-shadow-generator/

## 3/05/2023
Switch de pantallas 
Fuentes externas 
Cuando usamos el short && se crea una referencia vacia en en el virtual DOM, se valida constantemente. Afecta el performance.
Con el ternary operator no pasa. Devolvemos null 
* Entonces que casos conviene usar el short &&?? 
* nunca pasar los setter de los estados como propiedades directamente. Internamente dentro de React puede suceder un doble re-render del padre y del hijo. Realmente lo que hace, estas amarrando el componente padre directamente al componente hijo, hay una referencia de ese estado en dos lugares diferentes. Va intentar actualizar el componente 4 veces. Cause que se enlacen dos componentes a un estado. NO PASAR UN SETTER COMO PROPIEDAD A UN COMPONENTE. Siempre deberan ejecutarse dentro de un evento.
Los componentes se actualizan cuando cambia su estado o su propiedad
- Controlar fuentes en la app -> npm install expo-font
- En la App hay que importar el hook useFont de expo. Este hook recibe un array de objetos con las fuentes que vamos utilizar.

## 8/05/2023
Responsividad y reglas flexibles. 
- Reglas flexibles para que responda a diferentes dispositivos. 
- Cual seria la resolucion mas grande y mas pequena que nuestra aplicacion se va mostrar. 
- Dimension y orientacion -> capturar la dimension del dispositivo 
   * Dimensions: ventana sin barra de estado, pantalla incluye la barra de estado. 