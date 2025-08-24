# 🍽️ Menú Imperio de los Frijoles

Un menú digital responsivo y elegante para restaurantes, especialmente optimizado para televisores grandes (20 pulgadas en adelante).

## ✨ Características

- **Diseño responsivo** optimizado para televisores grandes
- **Colores temáticos**: Naranja, rojo y amarillo mostaza
- **Layout de 2 columnas** con 1 producto por columna (con imágenes)
- **Sección separada** para productos sin imagen (solo listados)
- **Carousel automático** con navegación manual
- **Auto-rotación** para todas las pantallas (cada 20 segundos)
- **Navegación por teclado** con flechas ← →
- **Diseño moderno** con efectos hover y animaciones

## 🎨 Paleta de Colores

- **Naranja**: #FF6B35
- **Rojo**: #D62828  
- **Amarillo mostaza**: #F4A261
- **Amarillo claro**: #F9C74F
- **Oscuro**: #2C1810

## 📱 Responsividad

- **Televisores 4K (2560px+)**: Tamaños extra grandes
- **Televisores HD (1920px+)**: Tamaños grandes
- **Dispositivos móviles**: Layout de 1 columna
- **Auto-rotación**: Solo en pantallas grandes

## 🚀 Instalación

1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. Para televisores, usa el modo pantalla completa

## 🎯 Uso

### Navegación Manual
- **Botones**: Haz clic en "Anterior" o "Siguiente"
- **Teclado**: Usa las flechas ← → del teclado

### Navegación Automática
- El menú cambia automáticamente cada 20 segundos en todas las pantallas
- Se puede desactivar comentando la función en `script.js`

## 📁 Estructura del Proyecto

```
menuImperio/
├── index.html          # Página principal
├── css/
│   ├── style.js       # Estilos principales
│   └── styles.css     # Estilos adicionales
├── js/
│   └── script.js      # Lógica del carousel
└── img/               # Imágenes de productos
```

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/style.js`:
```css
:root {
    --color-naranja: #FF6B35;
    --color-rojo: #D62828;
    --color-amarillo: #F4A261;
}
```

### Agregar Productos
Edita el array `productos` en `js/script.js`:
```javascript
{
    id: 45,
    nombre: "Nuevo Producto",
    descripcion: "Descripción del producto",
    tipo: "Categoría",
    observacion: "Observación especial",
    precio: 25000,
    imagen: "img/45.jpg"
}
```

### Cambiar Velocidad de Auto-rotación
Modifica el intervalo en `script.js`:
```javascript
setInterval(() => {
    // Lógica de cambio
}, 20000); // 20 segundos
```

## 📺 Optimización para Televisores

- **Pantalla completa**: Usa F11 o modo pantalla completa
- **Resolución**: Recomendado 1920x1080 o superior
- **Navegación**: Teclado inalámbrico recomendado
- **Auto-rotación**: Ideal para exhibición continua

## 🌐 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móviles

## 📝 Notas

- Las imágenes se cargan dinámicamente según el ID del producto
- Si una imagen no existe, se muestra una imagen por defecto
- El menú es completamente responsivo y se adapta a cualquier pantalla
- Los precios se formatean automáticamente en pesos colombianos

## 🤝 Soporte

Para soporte técnico o personalizaciones adicionales, contacta al desarrollador.

---

**Desarrollado con ❤️ para restaurantes colombianos**
