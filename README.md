# Blog con Django
> Publica tus articulos
## Acerca del proyecto
> Este Proyecto se realizo con DJango aqui explicaremos pasos para ejecutar el blog:

1. Documentación [Django Docs](https://www.djangoproject.com/)
2. Instalación de python 3 [Ver Video](https://www.youtube.com/watch?v=i4iwfySVG4M)
3. Clonar este proyecto
```sh
  git clone https://github.com/JoseChirinos/blog-django.git
```
4. Crear un entorno virtual
```sh
  mkvirtualenv blog
```
5. Activar entorno virtual
```sh
  workon blog
```
6. Ingresar a la carpeta *mysite* y instalar Django
```sh
  pip install Django==2.0.1
```
7. Construir Migraciones
```sh
  python manage.py makemigrations blog
```
8. Migrar Base de Datos
```sh
  python manage.py migrate blog
```
9. Ejecutar Blog
```sh
  python manage.py runserver
```
> Ver Blog [Blog Django: http://localhost:8000](http://localhost:8000)


## Great!!
> This is a project development by JoseChirinos check my [Web](http://www.josechirinos.com/)