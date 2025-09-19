/* General Notes for React Native 

https://reactnative.dev/docs/getting-started

*/

/* Crear nuevo proyecto */
// npx @react-native-community/cli init nombre-proyecto
/* Para abrir el emulador */
// npx react-native run-android

/* Si al correr el proyecto da un error por la version de JAva es porque esta usando la vieja de Android Studio

  Método 1: Configurar Gradle para que use la misma versión de Java que la de tu sistema
  Abre tu proyecto en tu editor de código.

  Navega a la carpeta android/gradle.properties.

  Abre el archivo gradle.properties y añade la siguiente línea al final del archivo:

  Properties

  org.gradle.java.home=C:\\Program Files\\Java\\jdk-21
  ⚠️ Importante: Asegúrate de que la ruta (C:\\Program Files\\Java\\jdk-21) coincida exactamente con la ubicación de tu instalación de Java 24. A menudo, la ruta puede ser ligeramente diferente, como C:\\Program Files\\Java\\jdk-24.0.2 o C:\\Program Files\\Eclipse Adoptium\\jdk-24.0.2.12-hotspot.

  Asegúrate de usar dobles barras invertidas (\\) para que la ruta sea válida en Gradle.

  Guarda los cambios y vuelve a ejecutar tu proyecto.
*/

/* Para obtener opcines en el emulador android dentro de la app */
// presionamos ctrl + m