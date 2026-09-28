# La Casona · MVP interactivo

Sitio público mobile-first preparado para GitHub Pages. Los pagos, QR, billetera y CRM son demostrativos y se guardan localmente en el navegador.

Prototipo frontend sin dependencias. Incluye:

- Portal responsive con estética nocturna y feed social inspirado en la dinámica de Instagram.
- Publicaciones editoriales clickeables que abren noticias completas.
- Comentarios anónimos demostrativos persistidos en el navegador.
- Galería horizontal tipo Reels con cinco videos reales de La Casona embebidos desde YouTube.
- Contenido mixto: noticias, momentos, tragos, radio en vivo y encuestas anónimas.
- Navegación de noticias con botón “Volver al portal” siempre visible.
- Cartelera de Dale Q’ Va y Ulises Bueno.
- Ficha de evento, sectores, cantidad y total.
- Checkout local demostrativo (no cobra ni transmite datos).
- Entrada persistida en `localStorage` con QR visual demo.
- Vista administrativa conceptual.
- Fotografías editoriales recientes de los artistas.
- Reproductor oficial de Kick para `lacasonafm`, con autoplay y solicitud de sonido activo.
- Billetera virtual del boliche con saldo, movimientos y QR personal.
- Solicitud de carga por transferencia con aviso de Telegram simulado y aprobación desde administración.
- Menú de tragos, carrito y pedido anticipado para varias barras.
- Punto de venta para barra: selección de productos, lectura simulada de QR y cobro desde saldo.
- Panel operativo con cargas pendientes, ventas por barra y stock.

## Abrir

Abrí `index.html` en un navegador moderno o serví la carpeta con cualquier servidor HTTP estático.

## Importante

Fechas, precios, stock, métricas y contenido legal son ilustrativos. La billetera, los cobros y Telegram funcionan en modo demostración dentro del navegador (`localStorage`): no mueven dinero real ni envían mensajes. Para producción hay que agregar backend, base de datos, autenticación, conciliación bancaria, bot de Telegram, QR firmado y antifraude. Mercado Pago queda expresamente pendiente para una segunda etapa.

Créditos fotográficos del prototipo: El Doce (Dale Q’ Va) y La Popu/Cadena 3 (Ulises Bueno). Para producción se recomienda solicitar los materiales oficiales de prensa y autorización de cada artista.
