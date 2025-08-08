# PokeExplorer

PokeExplorer es una aplicación móvil hecha con **React Native** que utiliza la API pública [PokeAPI](https://pokeapi.co/) para explorar, buscar y gestionar tus Pokémon favoritos. El proyecto está diseñado siguiendo buenas prácticas de Material Design y navegación moderna, ideal para aprender y experimentar con React Native y consumo de APIs.

## ¿Qué puedes hacer?

- Explorar una lista de Pokémon con scroll infinito.
- Ver detalles completos de cada Pokémon (imagen, tipos, estadísticas, habilidades).
- Marcar y desmarcar Pokémon como favoritos.
- Visualizar y gestionar tu lista de favoritos.
- Iniciar sesión y ver tu perfil.

## Requisitos previos

- Node.js y npm
- React Native CLI
- Android Studio o Xcode (según plataforma)
- [Configura tu entorno siguiendo la guía oficial](https://reactnative.dev/docs/environment-setup)

## Pasos para correr el proyecto

1. **Instala dependencias:**
   ```sh
   npm install
   # o
   yarn install
   ```
2. **Inicia el servidor Metro:**
   ```sh
   npm start
   # o
   yarn start
   ```
3. **Ejecuta la app en Android:**
   ```sh
   npm run android
   # o
   yarn android
   ```
   **Ejecuta la app en iOS:**
   ```sh
   npm run ios
   # o
   yarn ios
   ```
   > Si usas iOS por primera vez, ejecuta `bundle install` y `bundle exec pod install` en la carpeta `ios`.

## Estructura principal

- `src/screens/` — Pantallas principales (Home, Favoritos, Perfil, Login, Detalle)
- `src/components/` — Componentes reutilizables (ítem de Pokémon, icono de favorito, etc.)
- `src/api/` — Lógica para consumir la API de PokeAPI
- `src/store/` — Estado global con Redux

## TODO

- [ ] Persistencia con AsyncStorage
- [ ] Animaciones simples (LayoutAnimation o Reanimated)
- [ ] Modo claro / oscuro
- [x] Scroll infinito en Home
- [ ] Soporte para IOS

## Créditos

- [React Native](https://reactnative.dev/)
- [PokeAPI](https://pokeapi.co/)
- [Material Design Icons](https://material.io/resources/icons/)

---

¡Explora el mundo Pokémon con PokeExplorer!
