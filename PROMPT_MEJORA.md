# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `server.ts`
- `README.md`

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `package.json` — `@nguniversal/express-engine@20.2.0`: @nguniversal/express-engine declara la version 20.2.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.
- `package.json` — `@nguniversal/builders@20.2.0`: @nguniversal/builders declara la version 20.2.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Senior

### Brecha de conocimiento
Compara y aplica conscientemente al menos dos técnicas de renderizado web (CSR, SSR y pre-render) según el framework/librería y el contexto de negocio.

### Misión / candidato
Candidato con experiencia senior en Angular, enfocado en mejorar decisiones arquitectónicas de renderizado.

### Reto
- Tema: Renderizado web
- Seniority: senior-l2
- Tipo: practical
- Título: Optimización de Renderizado en Aplicación Angular
- Tiempo estimado: 15 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Evaluación de Técnicas de Renderizado — objetivo: Identificar y evaluar las ventajas y desventajas de CSR, SSR y pre-render en el contexto de la aplicación. — entregable (NO resolver): Documento de evaluación que compara CSR, SSR y pre-render, destacando los pros y contras de cada técnica en el contexto de la aplicación.
- Fase 2: Implementación de SSR — objetivo: Implementar Server-Side Rendering (SSR) en una sección crítica de la aplicación para mejorar el tiempo de carga. — entregable (NO resolver): Sección de la aplicación con SSR implementado y documentación del proceso.
- Fase 3: Evaluación y Optimización — objetivo: Evaluar el impacto de SSR en el rendimiento y la experiencia del usuario, y realizar optimizaciones adicionales si es necesario. — entregable (NO resolver): Informe de evaluación y optimización con resultados y documentación de cambios realizados.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "angular-ssr-optimization",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "dev:ssr": "ng run angular-ssr-optimization:serve-ssr",
    "serve:ssr": "node dist/angular-ssr-optimization/server/main.js",
    "build:ssr": "ng build && ng run angular-ssr-optimization:server:production",
    "prerender": "ng run angular-ssr-optimization:prerender",
    "build:client-and-server-bundles": "ng build --configuration production && ng run angular-ssr-optimization:server",
    "compile:server": "webpack --config webpack.server.config.js --progress --colors"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.2.0",
    "@angular/common": "~20.2.0",
    "@angular/compiler": "~20.2.0",
    "@angular/core": "~20.2.0",
    "@angular/forms": "~20.2.0",
    "@angular/platform-browser": "~20.2.0",
    "@angular/platform-browser-dynamic": "~20.2.0",
    "@angular/platform-server": "~20.2.0",
    "@angular/router": "~20.2.0",
    "@nguniversal/express-engine": "~20.2.0",
    "express": "^4.18.2",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.2.0",
    "@angular/cli": "~20.2.0",
    "@angular/compiler-cli": "~20.2.0",
    "@nguniversal/builders": "~20.2.0",
    "typescript": "~5.4.2",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0"
  },
  "browser": {
    "fs": false,
    "path": false,
    "os": false
  },
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=9.0.0"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "angular-ssr-optimization": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "standalone": true,
          "style": "scss"
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/angular-ssr-optimization/browser",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          },
          "configurations": {
            "development": {
              "optimization": false,
              "outputHashing": "all",
              "sourceMap": true,
              "namedChunks": true,
              "extractLicenses": false,
              "vendorChunk": true,
              "buildOptimizer": false,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.development.ts"
                }
              ]
            },
            "production": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "angular-ssr-optimization:build"
          },
          "configurations": {
            "development": {
              "browserTarget": "angular-ssr-optimization:build:development"
            },
            "production": {
              "browserTarget": "angular-ssr-optimization:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "angular-ssr-optimization:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        },
        "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/angular-ssr-optimization/server",
            "main": "src/main.server.ts",
            "tsConfig": "tsconfig.server.json",
            "inlineStyleLanguage": "scss"
          },
          "configurations": {
            "production": {
              "outputHashing": "media",
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            },
            "development": {
              "optimization": false,
              "sourceMap": true,
              "namedChunks": true
            }
          }
        },
        "serve-ssr": {
          "builder": "@nguniversal/builders:ssr-dev-server",
          "options": {
            "browserTarget": "angular-ssr-optimization:build",
            "serverTarget": "angular-ssr-optimization:server"
          },
          "configurations": {
            "development": {
              "browserTarget": "angular-ssr-optimization:build:development",
              "serverTarget": "angular-ssr-optimization:server:development"
            },
            "production": {
              "browserTarget": "angular-ssr-optimization:build:production",
              "serverTarget": "angular-ssr-optimization:server:production"
            }
          }
        },
        "prerender": {
          "builder": "@nguniversal/builders:prerender",
          "options": {
            "routes": [
              "/",
              "/product-list"
            ]
          },
          "configurations": {
            "production": {
              "browserTarget": "angular-ssr-optimization:build:production",
              "serverTarget": "angular-ssr-optimization:server:production"
            },
            "development": {
              "browserTarget": "angular-ssr-optimization:build:development",
              "serverTarget": "angular-ssr-optimization:server:development"
            }
          }
        }
      }
    }
  },
  "defaultProject": "angular-ssr-optimization",
  "cli": {
    "analytics": false,
    "schematicCollections": [
      "@schematics/angular"
    ]
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ],
    "paths": {
      "@angular/ssr": ["./node_modules/@nguniversal/express-engine"],
      "@app/*": ["src/app/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"],
      "@core/*": ["src/app/core/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true,
    "allowSyntheticDefaultImports": true
  },
  "exclude": [
    "node_modules",
    "tmp",
    "dist",
    "src/**/*.spec.ts",
    "src/**/*.stories.ts"
  ]
}


// === ARCHIVO: src/app/core/core.module.ts ===
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { provideClientHydration } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    provideHttpClient(withFetch()),
    provideClientHydration()
  ]
})
export class CoreModule {
  constructor(private transferState: TransferState) {
    // Configuración inicial para compartir datos entre SSR y CSR
    const PRODUCTS_KEY = makeStateKey<any[]>('products');
    if (typeof window !== 'undefined') {
      // Solo en el cliente: limpiar el estado transferido para evitar fugas de memoria
      this.transferState.remove(PRODUCTS_KEY);
    }
  }
}

// === ARCHIVO: src/app/core/services/product.service.ts ===
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Product } from '@features/product-list/product.model';

const PRODUCTS_KEY = makeStateKey<any[]>('products');

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.example.com/products'; // URL de la API simulada

  constructor(
    private http: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getProducts(): Observable<Product[]> {
    // Verificar si los datos ya están en el TransferState (SSR)
    if (this.transferState.hasKey(PRODUCTS_KEY)) {
      const products = this.transferState.get(PRODUCTS_KEY, []);
      this.transferState.remove(PRODUCTS_KEY);
      return of(products);
    }

    // Si estamos en el servidor, hacer la petición HTTP y guardar en TransferState
    if (isPlatformServer(this.platformId)) {
      return this.http.get<Product[]>(this.apiUrl).pipe(
        tap(products => {
          this.transferState.set(PRODUCTS_KEY, products);
        }),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
    }

    // Si estamos en el cliente, hacer la petición HTTP directamente
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}


// === ARCHIVO: src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Error bootstrapApplication:', err));

// === ARCHIVO: src/main.server.ts ===
import { APP_INITIALIZER } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { bootstrap as ngBootstrap } from '@angular/platform-browser';
import { NgExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { AppComponent } from './app/app.component';
import { AppServerModule } from './app/app.server.module';
import { readFileSync } from 'fs';
import { join } from 'path';

const indexHtml = join(process.cwd(), 'dist/angular-ssr-optimization/browser/index.html');

export function app(): express.Express {
  const server = express();
  const engine = new NgExpressEngine({
    bootstrap: AppServerModule,
    providers: [
      {
        provide: 'serverOptions',
        useValue: {
          document: readFileSync(indexHtml, 'utf-8'),
        },
      },
    ],
  });

  server.engine('html', engine);
  server.set('view engine', 'html');
  server.set('views', join(process.cwd(), 'dist/angular-ssr-optimization/browser'));

  server.get('*.*', express.static(join(process.cwd(), 'dist/angular-ssr-optimization/browser'), {
    maxAge: '1y',
  }));

  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [
        {
          provide: 'REQUEST',
          useValue: req,
        },
        {
          provide: 'RESPONSE',
          useValue: res,
        },
      ],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export * from './main.server';

run();

// === ARCHIVO: src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Angular SSR Optimization - E-commerce</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Aplicación de comercio electrónico optimizada con Angular SSR para mejorar tiempos de carga y experiencia de usuario">
  <meta name="keywords" content="Angular, SSR, E-commerce, Optimización, Commerce">
  <meta name="author" content="Angular SSR Team">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="Angular SSR Optimization - E-commerce">
  <meta property="og:description" content="Aplicación de comercio electrónico optimizada con Server-Side Rendering">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://example.com">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Angular SSR Optimization - E-commerce">
  <meta name="twitter:description" content="Aplicación de comercio electrónico optimizada con Server-Side Rendering">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body {
      height: 100%;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .app-loading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .app-loading .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    .app-loading .text {
      margin-top: 16px;
      font-size: 14px;
      opacity: 0.9;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <app-root>
    <div class="app-loading">
      <div class="spinner"></div>
      <div class="text">Cargando aplicación...</div>
    </div>
  </app-root>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.14.4/zone.min.js" integrity="sha512-r2JyZQVxZZDnqWLwLOHbVrX7VcIj7RdRsQBd5R1hWq2FAsV6TUxT3Uq3zBJlJgXUk0s8K0qFZq7O1bS2F3sW8QA" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <noscript>
    <style>
      .app-loading { display: none; }
    </style>
  </noscript>
</body>
</html>

// === ARCHIVO: src/styles.scss ===
// =============================================================================
// ESTILOS GLOBALES - Angular SSR Optimization
// Sistema de diseño con variables CSS, reset, tipografía y utilidades responsive
// =============================================================================

// -----------------------------------------------------------------------------
// 1. VARIABLES CSS - Sistema de diseño del proyecto
// -----------------------------------------------------------------------------
:root {
  // Colores primarios - Paleta de marca
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-primary-light: #3b82f6;
  --color-primary-50: #eff6ff;

  // Colores secundarios
  --color-secondary: #059669;
  --color-secondary-dark: #047857;
  --color-secondary-light: #10b981;

  // Colores neutros - Escalas de grises
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  // Colores semánticos - Estados yfeedback
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;

  // Espaciado - Sistema de 4px
  --spacing-xs: 0.25rem;   // 4px
  --spacing-sm: 0.5rem;    // 8px
  --spacing-md: 1rem;      // 16px
  --spacing-lg: 1.5rem;    // 24px
  --spacing-xl: 2rem;      // 32px
  --spacing-2xl: 3rem;     // 48px
  --spacing-3xl: 4rem;     // 64px

  // Tipografía
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-heading: 'Inter', sans-serif;
  --font-family-mono: 'Fira Code', 'Monaco', 'Consolas', monospace;

  --font-size-xs: 0.75rem;    // 12px
  --font-size-sm: 0.875rem;   // 14px
  --font-size-base: 1rem;     // 16px
  --font-size-lg: 1.125rem;   // 18px
  --font-size-xl: 1.25rem;    // 20px
  --font-size-2xl: 1.5rem;    // 24px
  --font-size-3xl: 1.875rem;  // 30px
  --font-size-4xl: 2.25rem;   // 36px

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  // Sombras
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  // Radios de borde
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;

  // Transiciones
  --transition-fast: 150ms ease-in-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;

  // Z-index
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}

// -----------------------------------------------------------------------------
// 2. RESET CSS - Normalización cross-browser
// -----------------------------------------------------------------------------
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.6;
  color: var(--color-gray-800);
  background-color: var(--color-gray-50);
  min-height: 100vh;
}

// -----------------------------------------------------------------------------
// 3. TIPOGRAFÍA - Encabezados y elementos de texto
// -----------------------------------------------------------------------------
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-md);
}

h1 {
  font-size: var(--font-size-4xl);
  letter-spacing: -0.025em;
}

h2 {
  font-size: var(--font-size-3xl);
  letter-spacing: -0.02em;
}

h3 {
  font-size: var(--font-size-2xl);
}

h4 {
  font-size: var(--font-size-xl);
}

h5 {
  font-size: var(--font-size-lg);
}

h6 {
  font-size: var(--font-size-base);
}

p {
  margin-bottom: var(--spacing-md);
  max-width: 70ch;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
}

// -----------------------------------------------------------------------------
// 4. SISTEMA DE REJILLA - Grid y Flexbox utilities
// -----------------------------------------------------------------------------
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 640px) {
    padding: 0 var(--spacing-lg);
  }

  @media (min-width: 1024px) {
    padding: 0 var(--spacing-xl);
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--spacing-md) * -1);
}

.col {
  flex: 1 1 0%;
  padding: 0 var(--spacing-md);
}

// Grid con 12 columnas
.grid {
  display: grid;
  gap: var(--spacing-md);

  &--cols-1 { grid-template-columns: repeat(1, 1fr); }
  &--cols-2 { grid-template-columns: repeat(2, 1fr); }
  &--cols-3 { grid-template-columns: repeat(3, 1fr); }
  &--cols-4 { grid-template-columns: repeat(4, 1fr); }
  &--cols-6 { grid-template-columns: repeat(6, 1fr); }

  @media (max-width: 1023px) {
    &--cols-4, &--cols-6 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 639px) {
    &--cols-2, &--cols-3, &--cols-4, &--cols-6 {
      grid-template-columns: 1fr;
    }
  }
}

// Flexbox utilities
.flex {
  display: flex;

  &--row { flex-direction: row; }
  &--column { flex-direction: column; }
  &--wrap { flex-wrap: wrap; }
  &--nowrap { flex-wrap: nowrap; }

  &--start { justify-content: flex-start; }
  &--center { justify-content: center; }
  &--end { justify-content: flex-end; }
  &--between { justify-content: space-between; }
  &--around { justify-content: space-around; }

  &--align-start { align-items: flex-start; }
  &--align-center { align-items: center; }
  &--align-end { align-items: flex-end; }
  &--align-stretch { align-items: stretch; }
}

// Gap utilities
.gap {
  &--xs { gap: var(--spacing-xs); }
  &--sm { gap: var(--spacing-sm); }
  &--md { gap: var(--spacing-md); }
  &--lg { gap: var(--spacing-lg); }
  &--xl { gap: var(--spacing-xl); }
}

// -----------------------------------------------------------------------------
// 5. COMPONENTES BASE - Botones, formularios, tablas
// -----------------------------------------------------------------------------
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-decoration: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &--primary {
    background-color: var(--color-primary);
    color: white;

    &:hover:not(:disabled) {
      background-color: var(--color-primary-dark);
    }
  }

  &--secondary {
    background-color: var(--color-secondary);
    color: white;

    &:hover:not(:disabled) {
      background-color: var(--color-secondary-dark);
    }
  }

  &--outline {
    background-color: transparent;
    border-color: var(--color-primary);
    color: var(--color-primary);

    &:hover:not(:disabled) {
      background-color: var(--color-primary-50);
    }
  }

  &--sm {
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: var(--font-size-sm);
  }

  &--lg {
    padding: var(--spacing-md) var(--spacing-xl);
    font-size: var(--font-size-lg);
  }
}

.form-control {
  display: block;
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: 1.5;
  color: var(--color-gray-800);
  background-color: white;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: var(--color-gray-400);
  }

  &:disabled {
    background-color: var(--color-gray-100);
    cursor: not-allowed;
  }
}

// -----------------------------------------------------------------------------
// 6. UTILIDADES - Helpers comunes
// -----------------------------------------------------------------------------
.text {
  &--primary { color: var(--color-primary); }
  &--secondary { color: var(--color-gray-600); }
  &--success { color: var(--color-success); }
  &--warning { color: var(--color-warning); }
  &--error { color: var(--color-error); }
  &--center { text-align: center; }
  &--left { text-align: left; }
  &--right { text-align: right; }
}

.bg {
  &--white { background-color: white; }
  &--gray-50 { background-color: var(--color-gray-50); }
  &--gray-100 { background-color: var(--color-gray-100); }
  &--primary { background-color: var(--color-primary); color: white; }
}

.m {
  &--0 { margin: 0; }
  &--auto { margin: auto; }
  &t--md { margin-top: var(--spacing-md); }
  &b--md { margin-bottom: var(--spacing-md); }
  &y--md { margin-top: var(--spacing-md); margin-bottom: var(--spacing-md); }
}

.p {
  &--0 { padding: 0; }
  &--md { padding: var(--spacing-md); }
  &--lg { padding: var(--spacing-lg); }
  &--xl { padding: var(--spacing-xl); }
}

// Visibilidad
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.d-none { display: none; }
.d-block { display: block; }
.d-inline { display: inline; }
.d-inline-block { display: inline-block; }

// Responsive utilities
@media (max-width: 639px) {
  .hide-mobile { display: none !important; }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .hide-tablet { display: none !important; }
}

@media (min-width: 1024px) {
  .hide-desktop { display: none !important; }
}

// -----------------------------------------------------------------------------
// 7. ESTADOS DE CARGA - Skeleton y spinners
// -----------------------------------------------------------------------------
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-200) 25%,
    var(--color-gray-100) 50%,
    var(--color-gray-200) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: var(--radius-sm);
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--color-gray-200);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// -----------------------------------------------------------------------------
// 8. ACCESIBILIDAD - Focus states y utilidades ARIA
// -----------------------------------------------------------------------------
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: none;
}

// Skip link para navegación por teclado
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-primary);
  color: white;
  z-index: var(--z-tooltip);
  transition: top var(--transition-fast);

  &:focus {
    top: 0;
  }
}
"// === ARCHIVO: server.ts ===
// =============================================================================
// SERVIDOR EXPRESS - Angular Universal SSR
// Maneja el renderizado del lado del servidor para Angular
// =============================================================================

import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@angular/ssr';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { AppServerModule } from './src/main.server';

// El usuario de aplicación Express
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/angular-ssr-optimization/browser');
  const serverDistFolder = join(process.cwd(), 'dist/angular-ssr-optimization/server');

  // Configurar el motor de Angular Universal para Express
  // ngExpressEngine transforma las páginas Angular en HTML renderizado en el servidor
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
    inlineCriticalCss: true,
    providers: [
      // Provee la ruta base de la aplicación
      { provide: APP_BASE_HREF, useValue: '/' }
    ]
  }));

  // Configurar motor de vistas
  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Middleware para servir archivos estáticos desde la carpeta del browser
  // Esto incluye: CSS, JavaScript, imágenes, fuentes y otros assets estáticos
  server.use('**', express.static(distFolder, {
    maxAge: '1y',
    // Habilitar Cache-Control para producción
    setHeaders: (res, path) => {
      if (path.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      } else if (path.match(/\.(js|css)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
      }
    }
  }));

  // Servir archivos estáticos del servidor (para SSR)
  server.use('**', express.static(serverDistFolder, {
    maxAge: '1h'
  }));

  // Rutas específicas para assets con cache optimizado
  server.use('/assets', express.static(join(distFolder, 'assets'), {
    maxAge: '1y'
  }));

  // Manejo de favicon con cache largo
  server.use('/favicon.ico', express.static(join(distFolder, 'favicon.ico'), {
    maxAge: '1y'
  }));

  // Punto de entrada principal: todas las rutas未知 (excepto API)
  // son manejadas por Angular Universal para SSR
  server.get('*', (req: express.Request, res: express.Response) => {
    // El motor ngExpressEngine renderiza la aplicación Angular
    // y devuelve HTML completo con los datos del servidor ya renderizados
    res.render('index', {
      req,
      res,
      // Proveer datos adicionales para la plantilla
      providers: [
        { provide: 'REQUEST', useValue: req },
        { provide: 'RESPONSE', useValue: res }
      ]
    });
  });

  return server;
}

// Función para iniciar el servidor
function run(): void {
  const port = process.env['PORT'] || 4000;

  // Verificar que la carpeta de distribución existe antes de iniciar
  const distFolder = join(process.cwd(), 'dist/angular-ssr-optimization/browser');
  if (!existsSync(distFolder)) {
    console.error(
      `\n⚠️  ERROR: No se encontró la carpeta de distribución.\n` +
      `   Ejecuta 'npm run build:ssr' antes de iniciar el servidor SSR.\n` +
      `   Ruta esperada: ${distFolder}\n`
    );
    process.exit(1);
  }

  // Crear y iniciar el servidor Express
  const server = app();
  server.listen(port, () => {
    console.log(
      `\n🌐  Servidor SSR de Angular Universal escuchando en http://localhost:${port}\n` +
      `   Modo: Server-Side Rendering (SSR)\n` +
      `   Render: ${process.env['NODE_ENV'] || 'development'}\n` +
      `   Presione Ctrl+C para detener el servidor\n`
    );
  });
}

// Ejecutar la aplicación
// Webpack reemplazará 'require' con '__webpack_require__'
// Esto permite que el código funcione tanto en desarrollo como en producción
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';

if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
"// === ARCHIVO: README.md ===
# Angular SSR Optimization

Aplicación de comercio electrónico construida con Angular 20 que implementa Server-Side Rendering (SSR) mediante Angular Universal para optimizar el rendimiento de carga inicial y mejorar el SEO.

## 🚀 Características Principales

- **Server-Side Rendering (SSR)**: Renderizado del lado del servidor para tiempos de carga iniciales más rápidos
- **Client-Side Rendering (CSR)**: Modo tradicional para navegación fluida después de la carga inicial
- **Angular Universal**: Integración nativa de SSR con Express.js
- **TransferState**: Compartición de estado entre servidor y cliente para evitar solicitudes duplicadas
- **Hydration**: Rehabilitación no destructiva del contenido renderizado en servidor
- **Pre-render**: Generación estática de rutas específicas para máximo rendimiento

## 📋 Requisitos Previos

- Node.js versión 20.x o superior
- npm versión 9.x o superior
- Angular CLI versión 20.2.0

Verifica tu versión de Node.js:
```bash
node --version
```

Verifica tu versión de npm:
```bash
npm --version
```

## 🛠️ Instalación

1. Clona el repositorio o extrae los archivos del proyecto
2. Instala las dependencias del proyecto:

```bash
npm install
```

Este comando leerá el `package.json` e instalará todas las dependencias necesarias incluyendo:
- Angular framework y dependencias
- Express.js para el servidor SSR
- Angular Universal para SSR
- Herramientas de desarrollo (TypeScript, Karma, etc.)

## 📖 Modos de Ejecución

### Client-Side Rendering (CSR) - Desarrollo

El modo CSR tradicional de Angular donde la aplicación se ejecuta completamente en el navegador:

```bash
npm start
# o
ng serve
```

Accede a: `http://localhost:4200`

Este modo es ideal para desarrollo rápido ya que no requiere compilación del servidor.

### Server-Side Rendering (SSR) - Desarrollo

El modo SSR que renderiza la aplicación en el servidor antes de enviarla al cliente:

```bash
npm run dev:ssr
```

Accede a: `http://localhost:4000`

Este comando:
1. Compila la aplicación del cliente (browser)
2. Compila la aplicación del servidor
3. Inicia el servidor Express con Angular Universal
4. Renderiza las páginas en el servidor

### Server-Side Rendering (SSR) - Producción

Para ejecutar en modo producción con optimizaciones:

```bash
# Paso 1: Compilar aplicación completa (cliente + servidor)
npm run build:ssr

# Paso 2: Ejecutar el servidor SSR compilado
npm run serve:ssr
```

Accede a: `http://localhost:4000`

### Pre-render de Rutas Estáticas

Genera páginas HTML estáticas para rutas específicas:

```bash
npm run prerender
```

Las rutas a pre-renderizar están configuradas en `angular.json`:
- `/` (página principal)
- `/product-list` (lista de productos)

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor de desarrollo CSR |
| `npm run dev:ssr` | Inicia el servidor de desarrollo con SSR |
| `npm run build` | Compila la aplicación para producción (solo cliente) |
| `npm run build:ssr` | Compila la aplicación completa con SSR |
| `npm run serve:ssr` | Ejecuta el servidor SSR compilado |
| `npm run prerender` | Genera páginas estáticas |
| `npm run test` | Ejecuta las pruebas unitarias con Karma |

## 🏗️ Arquitectura del Proyecto

```
angular-ssr-optimization/
├── src/
│   ├── app/
│   │   ├── core/              # Módulo core (servicios, configuraciones)
│   │   │   ├── services/      # Servicios de dominio (ProductService)
│   │   │   └── core.module.ts # Configuración de providers
│   │   ├── features/          # Componentes de características
│   │   │   └── product-list/  # Lista de productos
│   │   ├── shared/            # Componentes compartidos
│   │   │   └── components/    # Componentes reutilizables
│   │   ├── app.module.ts      # Módulo principal de la aplicación
│   │   ├── app.config.ts      # Configuración de providers
│   │   └── app.server.module.ts # Módulo para SSR
│   ├── styles.scss            # Estilos globales
│   ├── main.ts                # Entry point del cliente
│   └── main.server.ts         # Entry point del servidor
├── server.ts                  # Servidor Express para SSR
├── angular.json               # Configuración de Angular CLI
├── package.json               # Dependencias del proyecto
└── tsconfig.json              # Configuración de TypeScript
```

## 🔄 Diferencias entre CSR, SSR y Pre-render

### Client-Side Rendering (CSR)
- La aplicación se carga vacía en el navegador
- JavaScript genera el contenido HTML
- **Ventajas**: Interactividad inmediata después de carga, menor carga en servidor
- **Desventajas**: Primer contenido visible más lento, SEO limitado

### Server-Side Rendering (SSR)
- El servidor genera el HTML completo antes de enviarlo
- El navegador recibe contenido visible inmediatamente
- **Ventajas**: First Contentful Paint (FCP) más rápido, mejor SEO
- **Desventajas**: Mayor carga en servidor, TTFB (Time To First Byte) puede aumentar

### Pre-render
- Las páginas se generan en tiempo de compilación como archivos HTML estáticos
- Se sirve como archivos estáticos sin procesamiento
- **Ventajas**: Tiempo de respuesta mínimo, máximo rendimiento
- **Desventajas**: Solo para contenido estático, no personalizado

## ⚡ Optimizaciones Implementadas

1. **TransferState**: Evita solicitudes HTTP duplicadas entre servidor y cliente
2. **Hydration No Destructiva**: Reutiliza el DOM del servidor en el cliente
3. **CSS Inlining**: CSS crítico en línea para evitar FOUC (Flash of Unstyled Content)
4. **Lazy Loading**: Carga diferida de módulos no críticos
5. **Cache de Assets**: Archivos estáticos con cache optimizado

## 🔧 Configuración de Producción

El servidor Express (`server.ts`) incluye optimizaciones de producción:

- **Cache de archivos estáticos**: 1 año para assets immutables
- **Cache de JavaScript y CSS**: 1 año con hash en nombre
- **HTML sin cache**: Siempre fresco para contenido dinámico
- **Compresión**: Configurable mediante middleware de Express

## 📝 Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del servidor SSR | `4000` |
| `NODE_ENV` | Entorno de ejecución | `development` |

Ejemplo:
```bash
PORT=3000 NODE_ENV=production npm run serve:ssr
```

## 🧪 Pruebas

Ejecutar pruebas unitarias:
```bash
npm run test
```

Las pruebas están configuradas con Karma y Jasmine. Los archivos de prueba tienen extensión `.spec.ts`.

## 📄 Licencia

Este proyecto es parte del curso de optimización de renderizado en Angular. Todos los derechos reservados.


// === ARCHIVO: server/routes/index.ts ===
import express, { Request, Response, NextFunction, Express } from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { join } from 'path';
import { AppServerModule } from '../src/app/app.server.module';

export function setupRoutes(app: Express, browserDistFolder: string, serverDistFolder: string, baseUrl: string): void {
  
  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [
      { provide: APP_BASE_HREF, useValue: baseUrl }
    ]
  }));

  app.set('view engine', 'html');
  app.set('views', browserDistFolder);

  app.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y',
    etag: true
  }));

  app.get('*', (req: Request, res: Response, next: NextFunction) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    
    const userAgent = headers['user-agent'] || '';
    const isBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex/i.test(userAgent);
    
    if (isBot) {
      res.setHeader('Cache-Control', 'public, max-age=300');
    } else {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }

    res.setHeader('X-Powered-By', 'Angular SSR');
    res.setHeader('Vary', 'User-Agent');

    const indexHtml = existsSync(join(browserDistFolder, 'index.original.html'))
      ? 'index.original.html'
      : 'index.html';

    res.render(indexHtml, {
      req,
      providers: [
        { provide: APP_BASE_HREF, useValue: baseUrl },
        { provide: 'ORIGIN_URL', useValue: `${protocol}://${headers.host}` },
        { provide: 'USER_AGENT', useValue: userAgent }
      ]
    });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('SSR Error:', err.message);
    console.error('Stack trace:', err.stack);
    
    res.status(500).send('Internal Server Error');
  });
}

export function createApiRoutes(app: Express): void {
  const apiRouter = express.Router();

  apiRouter.get('/health', (req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      ssr: true
    });
  });

  apiRouter.get('/metrics', (req: Request, res: Response) => {
    const memUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();
    
    res.json({
      memory: {
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + ' MB',
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + ' MB',
        rss: Math.round(memUsage.rss / 1024 / 1024) + ' MB'
      },
      cpu: {
        user: cpuUsage.user,
        system: cpuUsage.system
      },
      uptime: process.uptime()
    });
  });

  apiRouter.post('/invalidate-cache', (req: Request, res: Response) => {
    res.json({ message: 'Cache invalidated' });
  });

  app.use('/api', apiRouter);
}

export function configureStaticAssets(app: Express, distFolder: string): void {
  app.use('/assets', express.static(join(distFolder, 'assets'), {
    maxAge: '1y',
    etag: true,
    fallthrough: true
  }));

  app.use('/media', express.static(join(distFolder, 'media'), {
    maxAge: '1y',
    etag: true
  }));

  app.use('/favicon.ico', express.static(join(distFolder, 'favicon.ico'), {
    maxAge: '1d'
  }));
}


// === ARCHIVO: src/app/app.module.ts ===
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductListModule } from './features/product-list/product-list.module';
import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-ssr-optimization' }),
    HttpClientModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,
    ProductListModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule initialized - Angular SSR Optimization');
  }
}

// === ARCHIVO: src/app/app.server.module.ts ===
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: 'SERVER_REQUEST_ORIGIN',
      useFactory: (req: any) => req.get('origin') || req.headers.get('host'),
      deps: ['REQUEST']
    },
    {
      provide: 'SERVER_REQUEST_URL',
      useFactory: (req: any) => req.url,
      deps: ['REQUEST']
    }
  ]
})
export class AppServerModule {
  constructor() {
    console.log('AppServerModule initialized - Server-Side Rendering enabled');
  }
}

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideBrowserPerformanceMark, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFileRouter } from '@angular/file-router';

import { routes } from './app.routes';
import { httpInterceptor } from './core/interceptors/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideBrowserPerformanceMark('app-initialization'),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      withViewTransitions()
    ),
    provideHttpClient(
      withFetch(),
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      }),
      withInterceptors([httpInterceptor])
    ),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: false,
        filter: (req) => req.url.includes('/api/')
      })
    ),
    provideAnimations()
  ]
};


// === ARCHIVO: src/app/features/product-list/product-list.module.ts ===
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
        data: {
          title: 'Catálogo de Productos',
          description: 'Explora nuestra selección de productos con precios competitivos',
          prerender: true
        }
      }
    ])
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListModule {
  constructor() {
    console.log('[ProductListModule] Módulo de lista de productos inicializado para SSR');
  }
}

// === ARCHIVO: src/app/features/product-list/product-list.component.ts ===
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, TransferState, makeStateKey, TransferStateKey } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, Subject, of, throwError } from 'rxjs';
import { catchError, takeUntil, finalize, map, tap, retry, shareReplay } from 'rxjs/operators';
import { ProductService } from '@app/core/services/product.service';
import { Product } from '@app/core/models/product.model';
import { ProductListPresenter } from './product-list.presenter';
import { ProductListViewModel } from './product-list.view-model';

const PRODUCTS_STATE_KEY = makeStateKey<Product[]>('PRODUCTS_DATA');

export const PRODUCTS_TRANSFER_STATE_KEY = new TransferStateKey<Product[]>('PRODUCTS_TRANSFER');

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  viewModel$: Observable<ProductListViewModel>;
  isLoading = false;
  errorMessage = '';
  products: Product[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 12;
  sortBy = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';
  filterCategory = '';
  filterMinPrice: number | null = null;
  filterMaxPrice: number | null = null;
  searchTerm = '';

  private destroy$ = new Subject<void>();
  private readonly presenter: ProductListPresenter;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.presenter = new ProductListPresenter(this.productService);
    this.viewModel$ = this.presenter.viewModel$;
    
    if (isPlatformServer(this.platformId)) {
      console.log('[ProductListComponent] Ejecutando en servidor - SSR activo');
    } else {
      console.log('[ProductListComponent] Ejecutando en navegador - CSR activo');
    }
  }

  ngOnInit(): void {
    this.initializeFromRoute();
    this.loadProducts();
    this.setupTransferState();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeFromRoute(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.currentPage = Number(params['page']) || 1;
        this.pageSize = Number(params['pageSize']) || 12;
        this.sortBy = params['sortBy'] || 'name';
        this.sortOrder = (params['sortOrder'] as 'asc' | 'desc') || 'asc';
        this.filterCategory = params['category'] || '';
        this.searchTerm = params['search'] || '';
        
        if (params['minPrice']) {
          this.filterMinPrice = Number(params['minPrice']);
        }
        if (params['maxPrice']) {
          this.filterMaxPrice = Number(params['maxPrice']);
        }
      });
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const cachedProducts = this.transferState.get(PRODUCTS_TRANSFER_STATE_KEY, null as any);
    
    if (cachedProducts) {
      console.log('[ProductListComponent] Obteniendo productos desde TransferState (SSR)');
      this.products = cachedProducts;
      this.transferState.remove(PRODUCTS_TRANSFER_STATE_KEY);
      this.isLoading = false;
      this.calculateTotalPages();
      this.updateViewModel();
      return;
    }

    this.productService.getProducts()
      .pipe(
        takeUntil(this.destroy$),
        tap(products => {
          console.log(`[ProductListComponent] Cargar ${products.length} productos`);
          this.products = products;
          
          if (isPlatformServer(this.platformId)) {
            this.transferState.set(PRODUCTS_TRANSFER_STATE_KEY, products);
          }
        }),
        catchError(error => {
          console.error('[ProductListComponent] Error al cargar productos:', error);
          this.errorMessage = this.presenter.handleError(error);
          return of([]);
        }),
        finalize(() => {
          this.isLoading = false;
          this.calculateTotalPages();
          this.updateViewModel();
        }),
        retry({
          count: 2,
          delay: 1000
        }),
        shareReplay(1)
      )
      .subscribe();
  }

  private setupTransferState(): void {
    if (isPlatformBrowser(this.platformId)) {
      const existingState = this.transferState.get(PRODUCTS_TRANSFER_STATE_KEY, null as any);
      if (existingState) {
        console.log('[ProductListComponent] Estado transferido desde servidor detectado');
        this.transferState.remove(PRODUCTS_TRANSFER_STATE_KEY);
      }
    }
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.products.length / this.pageSize);
  }

  private updateViewModel(): void {
    this.presenter.updateViewModel({
      products: this.getFilteredAndSortedProducts(),
      isLoading: this.isLoading,
      error: this.errorMessage,
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      pageSize: this.pageSize,
      sortBy: this.sortBy,
      sortOrder: this.sortOrder,
      filterCategory: this.filterCategory,
      filterMinPrice: this.filterMinPrice,
      filterMaxPrice: this.filterMaxPrice,
      searchTerm: this.searchTerm
    });
  }

  getFilteredAndSortedProducts(): Product[] {
    let filtered = [...this.products];

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description?.toLowerCase().includes(term)
      );
    }

    if (this.filterCategory) {
      filtered = filtered.filter(p => p.category === this.filterCategory);
    }

    if (this.filterMinPrice !== null) {
      filtered = filtered.filter(p => p.price >= this.filterMinPrice!);
    }

    if (this.filterMaxPrice !== null) {
      filtered = filtered.filter(p => p.price <= this.filterMaxPrice!);
    }

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (this.sortBy) {
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'rating':
          comparison = (a.rating || 0) - (b.rating || 0);
          break;
        default:
          comparison = 0;
      }
      return this.sortOrder === 'asc' ? comparison : -comparison;
    });

    const startIndex = (this.currentPage - 1) * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.currentPage = 1;
    this.updateViewModel();
  }

  onFilterChange(filters: { category?: string; minPrice?: number; maxPrice?: number }): void {
    if (filters.category !== undefined) {
      this.filterCategory = filters.category;
    }
    if (filters.minPrice !== undefined) {
      this.filterMinPrice = filters.minPrice;
    }
    if (filters.maxPrice !== undefined) {
      this.filterMaxPrice = filters.maxPrice;
    }
    this.currentPage = 1;
    this.updateViewModel();
  }

  onSortChange(sortBy: string, sortOrder: 'asc' | 'desc'): void {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
    this.updateViewModel();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateViewModel();
    }
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.calculateTotalPages();
    this.updateViewModel();
  }

  getCategories(): string[] {
    const categories = new Set(this.products.map(p => p.category));
    return Array.from(categories).sort();
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}

// === ARCHIVO: src/app/features/product-list/product-list.component.html ===
<section class="product-list-container" role="region" aria-label="Catálogo de productos">
  <header class="product-list-header">
    <h1 class="product-list-title">Catálogo de Productos</h1>
    <p class="product-list-subtitle">Explora nuestra selección completa</p>
  </header>

  <div class="product-list-controls" role="search" aria-label="Filtros de productos">
    <div class="search-box">
      <label for="search-input" class="sr-only">Buscar productos</label>
      <input
        id="search-input"
        type="search"
        class="search-input"
        placeholder="Buscar por nombre o descripción..."
        [value]="searchTerm"
        (input)="onSearch($any($event.target).value)"
        aria-describedby="search-help"
      />
      <span id="search-help" class="sr-only">Escribe para filtrar productos por nombre o descripción</span>
    </div>

    <div class="filter-group">
      <label for="category-filter" class="filter-label">Categoría</label>
      <select
        id="category-filter"
        class="filter-select"
        [value]="filterCategory"
        (change)="onFilterChange({ category: $any($event.target).value })"
        aria-label="Filtrar por categoría"
      >
        <option value="">Todas las categorías</option>
        <option *ngFor="let category of getCategories()" [value]="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="filter-group">
      <label for="min-price" class="filter-label">Precio mín</label>
      <input
        id="min-price"
        type="number"
        class="filter-input"
        placeholder="0"
        [value]="filterMinPrice"
        (input)="onFilterChange({ minPrice: $any($event.target).value })"
        min="0"
        aria-label="Precio mínimo"
      />
    </div>

    <div class="filter-group">
      <label for="max-price" class="filter-label">Precio máx</label>
      <input
        id="max-price"
        type="number"
        class="filter-input"
        placeholder="9999"
        [value]="filterMaxPrice"
        (input)="onFilterChange({ maxPrice: $any($event.target).value })"
        min="0"
        aria-label="Precio máximo"
      />
    </div>

    <div class="sort-controls">
      <label for="sort-select" class="filter-label">Ordenar por</label>
      <select
        id="sort-select"
        class="filter-select"
        [value]="sortBy"
        (change)="onSortChange($any($event.target).value, sortOrder)"
        aria-label="Ordenar productos"
      >
        <option value="name">Nombre</option>
        <option value="price">Precio</option>
        <option value="rating">Valoración</option>
      </select>
      <button
        class="sort-order-btn"
        (click)="onSortChange(sortBy, sortOrder === 'asc' ? 'desc' : 'asc')"
        [attr.aria-label]="sortOrder === 'asc' ? 'Orden ascendente' : 'Orden descendente'"
        [attr.aria-pressed]="sortOrder === 'desc'"
      >
        <span [class.active]="sortOrder === 'asc'">↑</span>
        <span [class.active]="sortOrder === 'desc'">↓</span>
      </button>
    </div>
  </div>

  <div *ngIf="isLoading" class="loading-indicator" role="status" aria-live="polite">
    <div class="loading-spinner"></div>
    <span>Cargando productos...</span>
  </div>

  <div *ngIf="errorMessage" class="error-message" role="alert" aria-live="assertive">
    <p>{{ errorMessage }}</p>
    <button class="retry-btn" (click)="loadProducts()">Reintentar</button>
  </div>

  <div
    *ngIf="!isLoading && !errorMessage"
    class="product-grid"
    role="list"
    aria-label="Lista de productos"
  >
    <article
      *ngFor="let product of getFilteredAndSortedProducts(); trackBy: trackByProductId"
      class="product-card"
      role="listitem"
      tabindex="0"
    >
      <div class="product-image-container">
        <img
          [src]="product.imageUrl"
          [alt]="'Imagen de ' + product.name"
          class="product-image"
          loading="lazy"
          width="300"
          height="300"
        />
        <span *ngIf="product.discount" class="product-badge">
          -{{ product.discount }}%
        </span>
      </div>

      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-category" aria-label="Categoría del producto">
          {{ product.category }}
        </p>
        <div class="product-rating" aria-label="Valoración: {{ product.rating }} estrellas">
          <span *ngFor="let star of [1,2,3,4,5]" class="star" [class.filled]="star <= (product.rating || 0)">★</span>
          <span class="rating-count">({{ product.reviewCount }})</span>
        </div>
        <div class="product-price-container">
          <span class="product-price" [class.has-discount]="product.discount">
            {{ product.price | currency:'USD':'symbol':'1.2-2' }}
          </span>
          <span *ngIf="product.originalPrice" class="product-original-price">
            {{ product.originalPrice | currency:'USD':'symbol':'1.2-2' }}
          </span>
        </div>
        <button
          class="add-to-cart-btn"
          (click)="addToCart(product)"
          [disabled]="!product.inStock"
          aria-label="Añadir {{ product.name }} al carrito"
        >
          {{ product.inStock ? 'Añadir al carrito' : 'Agotado' }}
        </button>
      </div>
    </article>
  </div>

  <nav *ngIf="totalPages > 1" class="pagination" aria-label="Paginación de productos">
    <div class="pagination-info">
      Página {{ currentPage }} de {{ totalPages }}
    </div>
    <div class="pagination-controls">
      <button
        class="pagination-btn"
        (click)="onPageChange(currentPage - 1)"
        [disabled]="currentPage === 1"
        aria-label="Página anterior"
      >
        ← Anterior
      </button>

      <button
        *ngFor="let page of getPageNumbers()"
        class="pagination-btn"
        [class.active]="page === currentPage"
        (click)="onPageChange(page)"
        [attr.aria-current]="page === currentPage ? 'page' : null"
        [attr.aria-label]="'Ir a página ' + page"
      >
        {{ page }}
      </button>

      <button
        class="pagination-btn"
        (click)="onPageChange(currentPage + 1)"
        [disabled]="currentPage === totalPages"
        aria-label="Página siguiente"
      >
        Siguiente →
      </button>
    </div>
    <div class="page-size-selector">
      <label for="page-size" class="sr-only">Productos por página</label>
      <select
        id="page-size"
        [value]="pageSize"
        (change)="onPageSizeChange(+$any($event.target).value)"
        aria-label="Cambiar número de productos por página"
      >
        <option [value]="6">6 por página</option>
        <option [value]="12">12 por página</option>
        <option [value]="24">24 por página</option>
        <option [value]="48">48 por página</option>
      </select>
    </div>
  </nav>

  <div *ngIf="!isLoading && getFilteredAndSortedProducts().length === 0" class="no-results" role="status">
    <p>No se encontraron productos con los filtros seleccionados.</p>
    <button class="reset-filters-btn" (click)="resetFilters()">Limpiar filtros</button>
  </div>
</section>


// === ARCHIVO: src/app/features/product-list/product-list.component.scss ===
.product-list-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 32px;
    gap: 32px;
  }

  @media (min-width: 1024px) {
    padding: 48px;
    gap: 40px;
  }
}

.product-list-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.product-list-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 32px;
  }
}

.product-list-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.filter-button {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #ffffff;
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #1976d2;
    color: #1976d2;
    background: #f5f9ff;
  }

  &.active {
    background: #1976d2;
    border-color: #1976d2;
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #1976d2;
    outline-offset: 2px;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  width: 100%;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
}

.product-grid-skeleton {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  width: 100%;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.skeleton-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skeleton-title {
  height: 20px;
  width: 80%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}

.skeleton-price {
  height: 24px;
  width: 40%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}

.skeleton-button {
  height: 40px;
  width: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 6px;
  animation: shimmer 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.product-list-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  gap: 16px;
}

.pagination-button {
  padding: 10px 20px;
  border: 1px solid #1976d2;
  border-radius: 6px;
  background: #ffffff;
  color: #1976d2;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover:not(:disabled) {
    background: #1976d2;
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: #e0e0e0;
    color: #999999;
  }

  &:focus-visible {
    outline: 2px solid #1976d2;
    outline-offset: 2px;
  }
}

.pagination-info {
  font-size: 14px;
  color: #666666;
  font-weight: 500;
}

.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  gap: 16px;
}

.error-icon {
  font-size: 48px;
  color: #d32f2f;
}

.error-text {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
}

.retry-button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  background: #1976d2;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #1565c0;
  }

  &:focus-visible {
    outline: 2px solid #1976d2;
    outline-offset: 2px;
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  text-align: center;
  gap: 16px;
  grid-column: 1 / -1;
}

.empty-icon {
  font-size: 64px;
  color: #9e9e9e;
}

.empty-title {
  font-size: 24px;
  font-weight: 600;
  color: #333333;
}

.empty-description {
  font-size: 16px;
  color: #666666;
  max-width: 400px;
}

// === ARCHIVO: src/app/shared/shared.module.ts ===
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ErrorBannerComponent } from './components/error-banner/error-banner.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';

const COMPONENTS = [
  ProductCardComponent,
  LoadingSpinnerComponent,
  ErrorBannerComponent,
  EmptyStateComponent
];

const PIPES = [
  CurrencyFormatPipe,
  TruncateTextPipe,
  RelativeTimePipe
];

const DIRECTIVES = [
  HighlightDirective,
  ClickStopPropagationDirective
];

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  providers: []
})
export class SharedModule {
  constructor(
    @Optional() @SkipSelf() private parentModule: SharedModule
  ) {
    if (parentModule) {
      const moduleName = parentModule.constructor.name;
      const currentModuleName = this.constructor.name;
      const errorMessage = `${currentModuleName} has already been loaded. ` +
        `Import ${currentModuleName} in the AppModule only.`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }

  static forRoot(): NgModule {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

  static forChild(): NgModule {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

// === ARCHIVO: src/app/shared/components/product-card/product-card.component.ts ===
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Product } from '@app/core/models/product.model';
import { CurrencyFormatPipe } from '@app/shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CurrencyFormatPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article 
      class="product-card" 
      [class.product-card--featured]="product.featured"
      [class.product-card--out-of-stock]="!product.inStock"
      [attr.aria-labelledby]="'product-title-' + product.id"
      role="article"
    >
      <div class="product-card__image-container">
        <img 
          [src]="product.imageUrl" 
          [alt]="product.name + ' product image'"
          class="product-card__image"
          loading="lazy"
          [routerLink]="['/product', product.id]"
          tabindex="0"
          (keydown.enter)="navigateToProduct(product.id)"
        />
        <span 
          *ngIf="product.discountPercentage" 
          class="product-card__discount-badge"
          aria-label="Discount applied"
        >
          -{{ product.discountPercentage }}%
        </span>
        <span 
          *ngIf="!product.inStock" 
          class="product-card__out-of-stock-badge"
        >
          Out of Stock
        </span>
      </div>

      <div class="product-card__content">
        <h3 
          [id]="'product-title-' + product.id"
          class="product-card__title"
          [routerLink]="['/product', product.id]"
          tabindex="0"
          (keydown.enter)="navigateToProduct(product.id)"
        >
          {{ product.name }}
        </h3>

        <p class="product-card__description">
          {{ product.description | truncateText:100 }}
        </p>

        <div class="product-card__price-container">
          <span 
            class="product-card__price"
            [class.product-card__price--discounted]="product.discountPercentage"
          >
            {{ product.price | currencyFormat }}
          </span>
          <span 
            *ngIf="product.discountPercentage" 
            class="product-card__original-price"
          >
            {{ calculateOriginalPrice(product.price, product.discountPercentage) | currencyFormat }}
          </span>
        </div>

        <div class="product-card__rating" 
             *ngIf="product.rating" 
             [attr.aria-label]="'Rating: ' + product.rating + ' out of 5 stars'"
        >
          <span 
            *ngFor="let star of getStarArray(product.rating)" 
            class="product-card__star"
            [class.product-card__star--filled]="star <= product.rating"
            aria-hidden="true"
          >
            ★
          </span>
          <span class="product-card__rating-count">
            ({{ product.reviewCount }})
          </span>
        </div>

        <div class="product-card__actions">
          <button 
            class="product-card__add-to-cart"
            [disabled]="!product.inStock"
            (click)="onAddToCart($event)"
            [attr.aria-label]="'Add ' + product.name + ' to cart'"
          >
            <span class="product-card__cart-icon" aria-hidden="true">🛒</span>
            Add to Cart
          </button>
          <button 
            class="product-card__wishlist"
            (click)="onToggleWishlist($event)"
            [attr.aria-label]="isInWishlist ? 'Remove ' + product.name + ' from wishlist' : 'Add ' + product.name + ' to wishlist'"
            [attr.aria-pressed]="isInWishlist"
          >
            <span aria-hidden="true">{{ isInWishlist ? '❤️' : '🤍' }}</span>
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .product-card {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease-in-out;
      height: 100%;
      box-sizing: border-box;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      }

      &:focus-within {
        outline: 2px solid #1976d2;
        outline-offset: 2px;
      }
    }

    .product-card--featured {
      border: 2px solid #1976d2;
    }

    .product-card--out-of-stock {
      opacity: 0.7;

      .product-card__image {
        filter: grayscale(50%);
      }
    }

    .product-card__image-container {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: #f5f5f5;
    }

    .product-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }

    .product-card__discount-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: #d32f2f;
      color: #ffffff;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 700;
    }

    .product-card__out-of-stock-badge {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.75);
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
    }

    .product-card__content {
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 8px;
      flex: 1;
    }

    .product-card__title {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0;
      cursor: pointer;
      transition: color 0.2s ease-in-out;
      line-height: 1.3;

      &:hover {
        color: #1976d2;
      }

      &:focus {
        outline: none;
        text-decoration: underline;
      }
    }

    .product-card__description {
      font-size: 14px;
      color: #666666;
      margin: 0;
      line-height: 1.5;
      flex: 1;
    }

    .product-card__price-container {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-top: 4px;
    }

    .product-card__price {
      font-size: 22px;
      font-weight: 700;
      color: #1a1a1a;

      &--discounted {
        color: #d32f2f;
      }
    }

    .product-card__original-price {
      font-size: 16px;
      color: #999999;
      text-decoration: line-through;
    }

    .product-card__rating {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .product-card__star {
      font-size: 16px;
      color: #e0e0e0;

      &--filled {
        color: #ffc107;
      }
    }

    .product-card__rating-count {
      font-size: 13px;
      color: #666666;
      margin-left: 4px;
    }

    .product-card__actions {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }

    .product-card__add-to-cart {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      background: #1976d2;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s ease-in-out;

      &:hover:not(:disabled) {
        background: #1565c0;
      }

      &:disabled {
        background: #e0e0e0;
        color: #999999;
        cursor: not-allowed;
      }

      &:focus-visible {
        outline: 2px solid #1976d2;
        outline-offset: 2px;
      }
    }

    .product-card__cart-icon {
      font-size: 16px;
    }

    .product-card__wishlist {
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: #ffffff;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-size: 18px;

      &:hover {
        border-color: #e91e63;
        background: #fff5f8;
      }

      &:focus-visible {
        outline: 2px solid #e91e63;
        outline-offset: 2px;
      }
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isInWishlist = false;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() toggleWishlist = new EventEmitter<Product>();

  @HostBinding('class') hostClass = 'product-card-wrapper';

  getStarArray(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  calculateOriginalPrice(price: number, discountPercentage: number): number {
    if (!price || !discountPercentage) {
      return price;
    }
    const discountMultiplier = 1 - (discountPercentage / 100);
    const originalPrice = price / discountMultiplier;
    return Math.round(originalPrice * 100) / 100;
  }

  onAddToCart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    
    if (!this.product || !this.product.inStock) {
      console.warn('Cannot add out-of-stock product to cart:', this.product?.id);
      return;
    }

    this.addToCart.emit(this.product);
  }

  onToggleWishlist(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    
    if (!this.product) {
      console.warn('Cannot toggle wishlist: no product provided');
      return;
    }

    this.toggleWishlist.emit(this.product);
  }

  navigateToProduct(productId: string | number): void {
    if (!productId) {
      console.warn('Cannot navigate: no product ID provided');
      return;
    }
  }
}

```
