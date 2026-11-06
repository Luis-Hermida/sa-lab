# 01 · Servidor TCP sin IA

Semana 1, martes 3. **Sin IA**: lo escribo yo; la IA solo revisa al final.

## Concepto

Una respuesta HTTP es solo texto sobre TCP: línea de estado, headers, línea vacía, body. `Content-Length` le dice al cliente cuántos bytes esperar, y las líneas terminan en `\r\n`.

## Enunciado

Con el módulo `net` de Node, escribe un servidor que:

1. Escuche en el puerto 8080.
2. Imprima en consola lo que llega por cada conexión.
3. Responda un HTTP válido escrito a mano.

Pistas: `net.createServer(socket => { ... })`, `socket.on('data', ...)`, `socket.write(...)`, `socket.end()`.

## Cómo probarlo

```bash
npm run dev                          # reinicia al guardar
curl -v http://localhost:8080/files  # en otra terminal
```

Luego ábrelo en el navegador: `http://localhost:8080/files`.

## Razonamiento (mis respuestas)

1. ¿Qué headers manda el navegador que `curl` no?
   >
2. ¿Qué pasa si `Content-Length` es más chico que el body?
   >
3. ¿Y si es más grande?
   >

## Viernes 6 · Extensión

Agrega un `setTimeout` de 5 s antes de responder y abre dos `curl` a la vez. Luego cámbialo por un `while` que ocupe la CPU 5 s. Anota qué cambia y por qué.

>
