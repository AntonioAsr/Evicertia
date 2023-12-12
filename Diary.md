# Diaraio de a bordo

Este documento trata de dar una visión del proceso de desarrollo, así como de justificar las decisiones técnicas tomadas durante el proceso de desarrollo, interacciones realizadas con el equipo de Evicertia y un checklist para trackear el progueso y no dejar ningún requisito sin solucionar.

Se utilizará como guía durante el desarrollo y se irán añadiendo o eliminando puntos de forma dinámica para facilitar el desarrollo, siempre y cuando esos puntos no sean requisitos principales de la prueba técnica.

### Lista de requisitos

- [x] Acceso a figma
- [x] Servidor / API REST: "Up and Running"
- [x] Test Restful API
- [x] Refactor walkgame.js to accept parameters
- [x] React Routing
- [x] UI components
- [] Integration tests (if time allows it)
- [x] Splash Screen
- [x] Modal choose player, (to complete)
- [x] Borde alrededor de la tarjeta del personaje seleccionado.
- [x] Para continuar deberás pulsar el botón “Save changes”.
- [x] Mobile friendly (Puede disminuir el tamaño del mapa acorde al de la pantalla) => El grid escala, pero podría estár manejado mejor
- [x] Mostrar posicion inicial del jugador
- [x] Api - move player
- [x] Revisión del diario antes de entrega
- [] Tarjeta del personaje (card-character). Aparecerá al hacer clic encima del personaje en el tablero y te indicará el nombre y los movimientos que ha hecho.
- [] Import all assets / create some news
    (time)
- [] Fuentes (están en figma) (time)
- [] UI clean up
- [] Improve coloring when moving player (eg. current postion on blue, path on primary color)
- [] Responsiveness is bad, improve it
- [] Theming
- [] Unit test (time)
- [] Typescript

### Preguntas Evicertia

Miercoles 29, 17:30
Antonio:
- ¿Podríamos añadir una pantalla inicial de carga donde aparezca un CTA con la palabra "jugar"? Sería un buen lugar para poner futuras ampliaciones como diferentes modo de juego, ajustes (teclas, idiomas, etc), además de darnos un puto de partida con el enroutameniento de la aplicación (Router).

- ¿Es buena idea forzar la vista móbil para forzar la visualizacion del mapa de juego en modo horizontal (landscape) para proporcionar una mejor experiencia de usuario?


Miércoles 29, 17:40
Raquel:
- Todo me parecen buenas ideas. Eres libre de añadir los elementos que creas necesarios, el diseño que pasamos es solo un cachito para ver como lo replicas pero el resto de pantallas que quieras añadir las puedes hacer como quieras.
Lo de forzar que tenga que poner el móvil en horizontal en el móvil también me parece una buena solución para que sea más fácil de adaptar.

### Desiciones técnicas, librerías, etc...

He optado por [Vite](https://vitejs.dev/) como herramienta para el scaffold ya que es algo mas rápido que [CRA](https://create-react-app.dev/)

Para interactuar con la API rest he optado por usar [Redux Toolkit](https://redux-toolkit.js.org) ya ofrece [RTK](https://redux-toolkit.js.org/rtk-query/overview) query ya que elemina la necesidad de escribir mucha lógica para obtener datos y manager la cache.


### Notas Personales

Las imágenes de los jugadores son las mismas para desktop como para móvil, no es necesario crear diferentes assets para diferentes tamaños de pantalla.
Prestar atención a el color de background que se usa de relleno al crear los "cards".
Faltan la vista de perfil para los personajes en escritorio

Nice To have: Degradado con el color de fondo de jugado hasta final de la tarjeta.

Jueves 30, 9:00
He tenido que eliminar la redireccion https en el servidor, así como añaidr localhost:3000 a lista de entornos que pueden interactuar con la api, ya que estaba obteniendo CORS errors.
Probablemente no sea la solución idionea pero me permite continuar con el desarrollo.
```csharp
Program.cs:

// not sure if I was getting CORS errors because of a chrome extension, just in case added some extra options to CORS


var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()){
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(policy => policy
        .WithOrigins("http://127.0.0.1:3000")
        .AllowAnyMethod()
        .WithMethods("PATCH", "OPTIONS")
        .AllowAnyHeader()
    );
}

app.useRouting();
app.UseAuthorization();

app.MapControllers();

app.Run();

## Revision diario

Gracias por esta oportunindad.
