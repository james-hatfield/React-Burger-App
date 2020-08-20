# Summary

This web applications contains the Burger-App frontend in created in react and
a .NET backend

## Burger-App

## Nestjs Backend

## Migration file generation

In order to create a new migration file, follow these steps:

1. Make any and all changes to whatever entities you want to modify, add or remove

2. Delete api/dist folder

3. Run yarn migration:generate NAME=[migration-name] - This will generate the migration file

4. Run yarn start:server - This wil generate a new dist folder with the proper entites/migrations

5. Make sure MSSQL server is connected

6. Run yarn migration:run - This will apply the migration to the database
