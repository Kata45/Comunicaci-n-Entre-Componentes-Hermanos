![Angular Logo](https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?auto=webp&s=6611d9c403cb948d1caf33e595f129bd18d745e3)

---

<div align="center">

<h1>Proyecto Angular</h1>

> ## 👩🏻‍💻**Kata**
> **Objetivo:** mostrar la comunicación entre **componentes hermanos** utilizando un **servicio compartido**, junto con un sistema de navegación dinámico a través del **Angular Router**.  

</div>

---

<div align="center">
<h1> Comunicación Entre Componentes Hermanos en Angular </h1>
</div>

Proyecto demostrativo – Angular Standalone + Bootstrap + Router

La aplicación simula un menú lateral compuesto por:  
- Una **barra de interacción** (Componente 1)  
- Una **barra de navegación** (Componente 2)  
- Varias páginas que se cargan dinámicamente dentro del `router-outlet`  

Todo el proyecto está desarrollado con **Componentes Standalone**, recomendado en Angular moderno.

---

<div align="center">
<h1> Tecnologías utilizadas </h1>
</div>

- **Angular 17+** con Standalone Components  
- **TypeScript**
- **Bootstrap 5**  
- **RxJS (BehaviorSubject)**  
- **HTML y CSS**

---

<div align="center">
<h1> Objetivo del proyecto </h1>
</div>

El propósito principal es aprender y demostrar:

- Cómo se comunican **componentes hermanos** usando un **servicio**  
- Cómo cambiar una **barra de navegación** desde otra barra independiente  
- Cómo cambiar contenido dinámico mediante **router-outlet**  
- Cómo manejar selección activa en botones y listas  

---

<div align="center">
<h1> Estructura de Componentes </h1>
</div>

```
app.ts (P A D R E)
│
├── barra-interaccion (Hijo A)
│ ├── Botones superiores
│ ├── Envían datos al servicio
│
├── barra-navegacion (Hijo B)
│ ├── Recibe datos del servicio
│ ├── Muestra lista de navegación
│ ├── Cambia rutas
│
└── router-outlet
├── pagina-a
├── pagina-b
└── pagina-c
```

---

# Componente Padre

## **`app.ts`**
Este componente es el contenedor principal del sistema.  
Dentro de él se ubican:

- La barra de interacción  
- La barra de navegación  
- El router-outlet donde se cargan las páginas  

---

# Componentes Hermanos (Hijos del Padre)

## **`barra-interaccion` (Hijo A)**  
Componente encargado de:

- Mostrar botones verticales (Grupo 1, Grupo 2, Grupo 3)
- Enviar al servicio:
  - un **título**
  - una **lista de opciones**
- Cambiar dinámicamente el contenido del Componente 2

**No tiene relación directa con la barra de navegación.**

---

## **`barra-navegacion` (Hijo B)**  
Componente encargado de:

- Escuchar datos enviados por el servicio (título y opciones)
- Mostrar lista de navegación con estilo Bootstrap
- Resaltar la opción seleccionada
- Cambiar el contenido del `router-outlet`

---

# Comunicación entre Componentes Hermanos

Este proyecto utiliza un **ComunicacionService**, con dos BehaviorSubject:

# Flujo

barra-interacción → (envía datos) → servicio → (emite datos) → barra-navegación

# Navegación (Router)

```
/pagina-a
/pagina-b
/pagina-c
```

---

<div align="center">
<h1> Contenido de las páginas </h1>
</div>

Para este proyecto la temática simula una aplicación administrativa, por ello las páginas a, b y c expresan en su contenido herramientas para manejar la información.
- Página A: Módulo Principal
Información general, accesos rápidos, vista inicial.
- Página B: Gestión de Usuarios
Simula panel administrativo con funciones de CRUD.
- Página C: Reportes y Estadísticas
Simula gráficos, reportes e informes del sistema.

---
##### © **2025** Creado por *Kata* — Todos los derechos reservados.
---







