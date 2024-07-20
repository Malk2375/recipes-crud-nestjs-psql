<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# Recipes API Project

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Introduction

This project uses NestJS to create an API for managing recipes and ingredients, with PostgreSQL as the database. This guide covers the steps from initialization, entity and controller setup, connecting to PostgreSQL, and testing with Postman.

## Prerequisites

- Node.js
- npm
- PostgreSQL

## Installation

### Clone the Repository

1. Clone the repository to your local machine and navigate into the project directory:

   ```bash
   git clone <https://github.com/Malk2375/recipes-crud-nestjs-psql.git>
   ```

### Install Dependencies

2. Install the project dependencies using npm:

   ```bash
   npm install
   ```

### Database Configuration

3. Create a PostgreSQL database and update the database configuration in the project. This can be done by creating an `.env` file or updating the `ormconfig.json` file with your database credentials.

   Example `.env`:

   ```env
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=yourpassword
   DB_DATABASE=databasename
   ```

### Initialize the Project

4. Start the NestJS application:

   ```bash
   npm run start
   ```

## Project Structure

### Entities

- **Ingredient**: Represents an ingredient with properties such as `id`, `name`, and `aisle`.
- **Recipe**: Represents a recipe with properties such as `id`, `name`, `type`, `instructions`, and a many-to-many relationship with ingredients.

### Controllers

- **IngredientsController**: Handles HTTP requests for creating, reading, updating, and deleting ingredients.
- **RecipesController**: Handles HTTP requests for creating, reading, updating, and deleting recipes.

### Services

- **IngredientsService**: Contains business logic for managing ingredients, including validation to prevent deletion of ingredients referenced in recipes.
- **RecipesService**: Contains business logic for managing recipes and handles CRUD operations.

## Usage

### Testing with Postman

1. **Create Ingredient**:
   - **Method**: POST
   - **URL**: `http://localhost:3000/ingredients`
   - **Body**: 
     ```json
     {
       "name": "Tomato",
       "aisle": "Produce"
     }
     ```

2. **Get All Ingredients**:
   - **Method**: GET
   - **URL**: `http://localhost:3000/ingredients`

3. **Get Ingredient by ID**:
   - **Method**: GET
   - **URL**: `http://localhost:3000/ingredients/:id`

4. **Update Ingredient**:
   - **Method**: PATCH
   - **URL**: `http://localhost:3000/ingredients/:id`
   - **Body**:
     ```json
     {
       "name": "Tomato",
       "aisle": "Canned Goods"
     }
     ```

5. **Delete Ingredient**:
   - **Method**: DELETE
   - **URL**: `http://localhost:3000/ingredients/:id`

   > Note: The API will return an HTTP 409 status if attempting to delete an ingredient that is referenced in at least one recipe.

6. **Create Recipe**:
   - **Method**: POST
   - **URL**: `http://localhost:3000/recipes`
   - **Body**:
     ```json
     {
       "name": "Tomato Soup",
       "type": "dinner",
       "instructions": "Blend tomatoes and cook",
       "ingredients": [1]
     }
     ```

7. **Get All Recipes**:
   - **Method**: GET
   - **URL**: `http://localhost:3000/recipes`

8. **Get Recipe by ID**:
   - **Method**: GET
   - **URL**: `http://localhost:3000/recipes/:id`

9. **Update Recipe**:
   - **Method**: PATCH
   - **URL**: `http://localhost:3000/recipes/:id`
   - **Body**:
     ```json
     {
       "name": "Tomato Basil Soup",
       "type": "dinner",
       "instructions": "Blend tomatoes with basil and cook",
       "ingredients": [1, 2]
     }
     ```

10. **Delete Recipe**:
    - **Method**: DELETE
    - **URL**: `http://localhost:3000/recipes/:id`

## Notes

- Ensure that the PostgreSQL server is running and accessible with the provided credentials.

## Conclusion

This guide provides a basic overview of setting up recipes API project. For more detailed information, refer to the project source code comments.

## Stay in touch

- Author - [Abdelmalek DORBANI](https://www.linkedin.com/in/mohamed-abdelmalek-dorbani/)
- Website - [Portfolio](https://portfolio-malk.vercel.app/)

## License

Nest is [MIT licensed](LICENSE).