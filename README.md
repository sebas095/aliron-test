# Aliron Test

## Requerimentos/Dependencias

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

## Installation

### Backend

```bash
  cd api
  yarn install
  yarn start
```

- Corriendo en http://localhost:5000/v1/api/

### Frontend

```bash
  cd api
  yarn install
  yarn start
```

- Corriendo en http://localhost:3000

## API

| url                                    | Metodo | Descripción                                                                     | Params                                                                                          | Permisos                               |
| -------------------------------------- | ------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------- |
| /auth/signup                           | POST   | Registro de usuario                                                             | - nombre - apellido - email - usuario - contraseña                                              |                                        |
| /auth/signin                           | POST   | Inicio de sesión                                                                | - usuario - contraseña                                                                          |                                        |
| /tournament                            | GET    | Lista todos los torneos existentes                                              |                                                                                                 | - Debe iniciar sesión                  |
| /tournament/winner                     | GET    | Lista todos los torneos que ya esten finalizados                                |                                                                                                 | - Debe iniciar sesión                  |
| /tournament/:tournamentId              | GET    | Muestra el torneo correspondiente indicando el ganador si el torneo ya finalizo | - el id del torneo                                                                              | - Debe iniciar sesión                  |
| /tournament/:tournamentId/:stageNumber | GET    | Muestra los encuentros en la etapa seleccionada del torneo elegido              | - el id del torneo - el número de la ronda o etapa                                              | - Debe iniciar sesión                  |
| /tournament                            | POST   | Crea un torneo                                                                  | - nombre del torneo - número de jugadores - jugadores                                           | - Debe iniciar sesión - Debe ser Admin |
| /tournament/:tournamentId/:stageNumber | POST   | Crea una etapa en el torneo correspondiente                                     | - el id del torneo - el número de la etapa o ronda                                              | - Debe iniciar sesión - Debe ser admin |
| /tournament/:tournamentId/:stageId     | PUT    | Modifica el resultado de una ronda en un torneo elegido                         | - el id del torneo - el id de la ronda o etapa - el score del encuentro (array con dos valores) | - Debe iniciar sesión - Debe ser Admin |
| /user                                  | GET    | Muestra todos los jugadores registrados                                         |                                                                                                 | - Debe iniciar sesión                  |
| /user/:userId                          | GET    | Muestra la información de un usuario                                            |                                                                                                 | - Debe iniciar sesión                  |
