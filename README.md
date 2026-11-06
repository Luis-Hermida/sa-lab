# sa-lab

Ejercicios cortos de fundamentos (redes, concurrencia, I/O, datos) que acompañan mi programa para llegar a Solutions Architect. El proyecto principal vive en [Forge](https://github.com/luis-hermida/forge); aquí van los ejercicios sueltos que no son parte de Forge.

## Estructura

```
exercises/
  01-tcp-server/   Servidor HTTP escrito a mano sobre TCP (semana 1)
```

Cada ejercicio es un workspace de npm con su propio `README.md` (enunciado, cómo correrlo y notas de razonamiento).

## Reglas

- Los ejercicios marcados **sin IA** los escribo yo. La IA solo revisa después.
- Cada README termina con mis respuestas de razonamiento: qué aprendí, qué se rompe y por qué.

## Uso

```bash
nvm use            # Node 22
npm run start -w exercises/01-tcp-server
```
