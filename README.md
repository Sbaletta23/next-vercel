## Get Started
Framework de React para produccion.

```js
$ yarn create next-app // Creamos App
npm run dev // Iniciar

```

# Paginas
- Nombres simpre en minuscula
- Nombre como Path URL
- Exportacion por defecto / Funtional component

# Carpetas
[.next] 
Directorio para construir aplicacion
Hace un Build de la aplicacion en desarrollo
Se crea con el yarn dev

[pages] 
Carpeta donde creamos las rutas de nuestros componentes
Siempre pages va leer la carpeta y luego el archivo que esta dentro.
Si tiene varias archivos, va rendezirar el index

[_app]
Archivo raiz de carpeta page
Comparte contexto con las las pages
 
[pulic]
Directorio estatico de la aplicacion

[styles]
Estilo global - global.css - Solo importando archivo se muestra el css - Solo importamos en _app 
Estilo Module - Home.module.css - Se utiliza con {styles.diseño}

# Static Generation vs Server side rendering

[Server-side-Rendering(SSR)] Next.js presenta la página en HTML en el servidor en cada solicitud.Es más lento, pero sus datos siempre están actualizados.

[Static-Generation-(SSG)] Next.js presenta previamente la página en HTML en el servidor antes de cada solicitud, en el momento de la compilación. El HTML puede ser almacenado globalmente en caché por una CDN y servido al instante.

La generación estática es más eficiente, pero debido a que la presentación previa ocurre antes de tiempo, los datos podrían volverse obsoletos en el momento de la solicitud.

En particular, puede utilizar:

Generación estática incremental Agregue y actualice páginas preprocesadas estáticamente de forma incremental despuésdel tiempo de compilación.

# Componente Next/Link
[Link]
Hace un preFetch de la pagina
Incrementa la velocidad de carga x10


Podemos enviarle un objeto para configurarlo

```js
<Link
    href={{
        pathname: '/', // Path 
        query:{ id: 2} // Query params
    }}
    replace // No nos deja ir para atras
    >
    Home
</Link>

```
No se pueden esterilizar directamente

```js
  return (
    <nav className={styles.nav}> //Forma correcta
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
    </nav>
  )
```

[Styles]
Utilizar estilos globales solo en _app.tsx
```js
 <p className={"description"}> // Estilos globales
    <code className={"code"}>pages/about.tsx</code>
  </p>
```
Utilizar modulos para componentes


[Layouts]
Creamos un layout para que varias paginas compartan misma estructura
- Usar props children
- Utilizarlo como contenedor

```js 
 export const Layout = ({children}) => { // Hight Order Component
  return (

    <NavBar/> // Componente Compartido

    <main className={styles.main}>
        {children}
    </main>
  </div>
  )
}
```

Pagina que tiene Narbar Compartido + Su estructura

```js
export default function About() { // Componente que consume HOC
  return (
    <MainLayouts> /
    <h1>About page</h1>
    <h1 className={"title"}>
      <Link href={'/'}>Ir a home</Link>
    </h1>

    <p className={"description"}>
      Get started by editing{' '}
      <code className={"code"}>pages/about.tsx</code>
    </p>
  </MainLayouts>
  )
}
```

[Menu-dinamico]
- Crear una página llamada pricing
-  El contenido será idéntico a las otras páginas 
-  Crear el enlace en el ménu de navegación a la página de pricing
-  En el Navbar.jsx, crear un arreglo fuera del functional component asi:
const menuItems = [
    {
        text: 'Home',
        href: '/'
    }
]
```js
export const Navbar = () => { // Menu semi-dinamico
    return (

        <nav className={styles.nav}>
        {
            menuItems.map( ({text, href}) => (
                <ActiveLink key={text} text={text}  href={href} />
            ))
        }
        </nav>
    );
}

```

En el menu dinamico en vez de tener el Link, creamos un componente que basicamente es el Link, con la funcionalidad de que se pone azul cuando se esta navegando en esa misma pagina.

```js
export const ActiveLink = ({text, href}) => {

  const { asPath } = useRouter(); // Pagina actual

  return (
    <Link href={ href } legacyBehavior>
      <a style={ asPath === href ? styles : null }> { text } </a>
    </Link>
  );
};
```



[yarn-build]
Cuando hacemos un build nuestra app nos detalla que se usa.
Tambien nos detalla que cosas se van a renderizar de forma static y que cosas del lado del servidor 


```
Route (pages)                              Size     First Load JS
┌ ○ /                                      853 B          75.7 kB
├   /_app                                  0 B            72.7 kB
├ ○ /404                                   181 B          72.9 kB
├ ○ /about                                 958 B          75.8 kB
├ λ /api/hello                             0 B            72.7 kB
├ ○ /contact (341 ms)                      860 B          75.7 kB
└ ○ /pricing (317 ms)                      854 B          75.7 kB
+ First Load JS shared by all              73.5 kB
  ├ chunks/framework-3b5a00d5d7e8d93b.js   45.4 kB
  ├ chunks/main-a455256c0236c590.js        26.3 kB
  ├ chunks/pages/_app-c8d447f786f5c68b.js  314 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/6f988a922277031a.css               737 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps) 
○  (Static)  automatically rendered as static HTML (uses no initial props)
```
[Renderizado]
λ  (Server) - Server Side Rendering
○  (Static) - Static Generation


[Typescript]
Convertir una aplicación de Next.js de JavaScript a TypeScript