# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Optimización de Renderizado en Aplicación Angular**.

| | |
|---|---|
| Tema | Renderizado web |
| Nivel | senior-l2 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | Server-Side Rendering con Angular Universal y patrones modulares |
| Tiempo estimado | 15 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, angular.json y tsconfig.json en la raiz`
- `src/main.ts con bootstrapApplication`
- `src/app/app.config.ts con los providers`
- `src/app/core con servicios y modelos`
- `src/app/features con componentes contenedores`
- `src/app/shared con componentes presentacionales`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET y el proyecto no instala. Usa rango con caret sobre una version que exista.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.
- Angular necesita `angular.json` y `tsconfig.json` ademas del `package.json`, o `ng build` no corre.

Dependencias:

- @angular/animations 20.2.0
- @angular/common 20.2.0
- @angular/compiler 20.2.0
- @angular/core 20.2.0
- @angular/forms 20.2.0
- @angular/platform-browser 20.2.0
- @angular/platform-browser-dynamic 20.2.0
- @angular/platform-server 20.2.0
- @angular/router 20.2.0
- @nguniversal/express-engine 20.2.0
- express 4.18.2
- rxjs 7.8.0
- typescript 5.4.2
- zone.js 0.14.4
- @angular-devkit/build-angular 20.2.0
- @angular/cli 20.2.0
- @angular/compiler-cli 20.2.0
- @nguniversal/builders 20.2.0
- jasmine-core n/a
- karma n/a
- karma-jasmine n/a
- karma-chrome-launcher n/a

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Evaluación de Técnicas de Renderizado**: Documento de evaluación que compara CSR, SSR y pre-render, destacando los pros y contras de cada técnica en el contexto de la aplicación.
- **Fase 2 — Implementación de SSR**: Sección de la aplicación con SSR implementado y documentación del proceso.
- **Fase 3 — Evaluación y Optimización**: Informe de evaluación y optimización con resultados y documentación de cambios realizados.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Archivos que la arquitectura declara (2 de 19)

La propuesta arquitectonica del reto los lista y no llegaron al repo. Crealos con implementacion real, respetando la capa en la que viven:

- [ ] `server.ts`
- [ ] `README.md`

### 2. Referencias colgando (2)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `package.json` — `@nguniversal/express-engine@20.2.0`
      @nguniversal/express-engine declara la version 20.2.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.
- [ ] `package.json` — `@nguniversal/builders@20.2.0`
      @nguniversal/builders declara la version 20.2.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

### Presentes (19)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/app/core/core.module.ts`
- `src/app/core/services/product.service.ts`
- `src/main.ts`
- `src/main.server.ts`
- `src/index.html`
- `src/styles.scss`
- `server/routes/index.ts`
- `src/app/app.module.ts`
- `src/app/app.server.module.ts`
- `src/app/app.config.ts`
- `src/app/features/product-list/product-list.module.ts`
- `src/app/features/product-list/product-list.component.ts`
- `src/app/features/product-list/product-list.component.html`
- `src/app/features/product-list/product-list.component.scss`
- `src/app/shared/shared.module.ts`
- `src/app/shared/components/product-card/product-card.component.ts`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src`
- `src/app/core`
- `src/app/features/product-list`
- `src/app/features/product-detail`
- `src/app/shared`
- `server`
- `server/routes`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **Server-Side Rendering con Angular Universal y patrones modulares**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Senior
- Brecha que el reto ataca: Compara y aplica conscientemente al menos dos técnicas de renderizado web (CSR, SSR y pre-render) según el framework/librería y el contexto de negocio.
- Mision: Candidato con experiencia senior en Angular, enfocado en mejorar decisiones arquitectónicas de renderizado.

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
