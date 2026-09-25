# Optimización de Renderizado en Aplicación Angular

La aplicación de comercio electrónico de nuestra empresa, construida con Angular, necesita mejorar su rendimiento en la carga inicial de páginas. Actualmente, la aplicación utiliza Client-Side Rendering (CSR) para la mayoría de sus páginas, lo que resulta en tiempos de carga más largos y una experiencia de usuario menos óptima. Necesitamos explorar y aplicar al menos dos técnicas de renderizado web (CSR, SSR y pre-render) para optimizar el rendimiento, considerando las necesidades del negocio y las características del framework.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Renderizado web |
| **Nivel** | senior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 15 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Evaluación de Técnicas de Renderizado

**Objetivo:** Identificar y evaluar las ventajas y desventajas de CSR, SSR y pre-render en el contexto de la aplicación.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Investiga y documenta las características, beneficios y desventajas de CSR, SSR y pre-render.
- Evalúa cómo cada técnica afecta el rendimiento, la experiencia del usuario y la complejidad de implementación en el contexto de la aplicación Angular.

**Entregable:** Documento de evaluación que compara CSR, SSR y pre-render, destacando los pros y contras de cada técnica en el contexto de la aplicación.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la arquitectura actual de la aplicación y cómo cada técnica se integraría con ella.
- Investiga casos de uso similares en otras aplicaciones Angular.

</details>

### Fase 2: Implementación de SSR

**Objetivo:** Implementar Server-Side Rendering (SSR) en una sección crítica de la aplicación para mejorar el tiempo de carga.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Selecciona una sección de la aplicación que se beneficiaría más de SSR.
- Implementa SSR en esa sección, asegurando una transición suave y manteniendo la consistencia con el resto de la aplicación.
- Documenta el proceso de implementación y cualquier desafío encontrado.

**Entregable:** Sección de la aplicación con SSR implementado y documentación del proceso.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza la documentación oficial de Angular para SSR.
- Considera la integración con el backend y cualquier ajuste necesario en la arquitectura.

</details>

### Fase 3: Evaluación y Optimización

**Objetivo:** Evaluar el impacto de SSR en el rendimiento y la experiencia del usuario, y realizar optimizaciones adicionales si es necesario.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Mide el tiempo de carga y la experiencia del usuario antes y después de implementar SSR.
- Identifica áreas de mejora y realiza optimizaciones adicionales si es necesario.
- Documenta los resultados y cualquier cambio realizado.

**Entregable:** Informe de evaluación y optimización con resultados y documentación de cambios realizados.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas de rendimiento para medir el impacto de SSR.
- Considera la posibilidad de combinar SSR con otras técnicas de optimización.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es Server-Side Rendering (SSR) y cómo difiere de Client-Side Rendering (CSR)?
- **paraQueSirve**: ¿En qué escenarios es más beneficioso utilizar SSR en lugar de CSR?
- **comoSeUsa**: ¿Cómo implementaste SSR en la aplicación Angular y qué desafíos encontraste?
- **erroresComunes**: ¿Qué errores comunes pueden ocurrir al implementar SSR y cómo los evitaste?
- **queDecisionesImplica**: ¿Qué decisiones arquitectónicas implica la implementación de SSR y cómo afectan el resto de la aplicación?

## Criterios de Evaluacion

- Comparación detallada de CSR, SSR y pre-render.
- Implementación exitosa de SSR en una sección de la aplicación.
- Evaluación y optimización del rendimiento post-implementación de SSR.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
