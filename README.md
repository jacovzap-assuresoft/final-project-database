### DATABASE FUNDAMENTALS FINAL PROJECT

# INIT DATABASE FROM ZERO
In order to generate the tables in an empty database run the following commnand:
```
npx prisma generate dev
```

# CREATE NEW MIGRATIONS
When changes are made in the prisma schema, the changes can be applied by creating a new migration, this can be done with the next command line: 
```
npx prisma migrate dev --name <name of the migration>
```

# APPLY CHANGES TO PROJECT
When some changes are made to schema and database, the PrismaClient needs to be called to recognize the new models, execute the command:
```
npx prisma generate
```
# KNOWN ISSUES
Sometimes can happen that the command npx prisma generate returns an error, this can be solved deleting the node_modules folder and installing the packages again 
