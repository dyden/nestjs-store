# NestJS STORE API


Scaffold quickly your next [NestJS](https://nestjs.com/) API project with 
❤️ using this template

- Crafted for Docker environments (Dockerfile support docker-compose and environment variables)
- REST API with [TypeORM](http://typeorm.io) support 
- Swagger documentation, [Joi](https://github.com/hapijs/joi) validation.
- pgAdmin 
## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/package/page)
- It's also necessary have [Docker](https://www.docker.com/) intalled

### 1.2 Project configuration

Download or clone the following repository:

``` sh
https://github.com/dyden/nestjs-store
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./nestjs-store
npm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing your environment variables used for development.

```
POSTGRES_DB=my_db
POSTGRES_USER=root
POSTGRES_PASSWORD=root
POSTGRES_PORT=5432
POSTGRES_HOST=localhost
```
You also have to start the database with docker compose:
````
docker-compose up -d postgres
````

Now you can start your project:

```
nest start
```
or create a new image with docker and run it:

````
 docker build -t nestjs-store .
 ````
 
````
docker run -d nestjs-store
````
You can now head to http://localhost:3000/docs and see your API Swagger docs. 

The example Store API is located at the http://localhost:3000 endpoint.

You can also see your database at the http://localhost:5050/browser/ with docker compose credentials

# To do

- Add JWT Authetication
- Add Middleware






