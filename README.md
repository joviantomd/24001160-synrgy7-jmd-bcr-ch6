# Challenge 6 - FSW 2 - SYNRGY X BINAR


## Installation


Clone the repository



Install Repository
```bash
git clone https://github.com/joviantomd/24001118-synrgy7-jmd-bcr-ch5.git
```

Install dependencies
```bash
npm install
```

Change Directory
```bash
cd 24001160-synrgy7-jmd-bcr-ch6
```

## Username and Password Account Seed
- ### Super Admin
  Email : superadmin@super.com\
  Password : superadmin1234

- ### Admin
  Email : admin@admin.com\
  Password : admin1234

- ### User
  Email : user@user.com\
  Password : user1234

## API Endpoint

### API `GET`
- Get All Data
  - Request : `GET /cars`
  - CURL
    - Request
      
      ```bash
      curl --location 'localhost:3000/cars'
      ```
- Get Data by ID
  - Request : `GET /cars/:id`
  - CURL
    - Request
   
      ```bash
      curl --location 'localhost:3000/cars/1'
      ```

### API `POST`
- Create Data
  - Request : `/create`
  - CURL
    - Request\
      Note : Jangan lupa ubah `path image` sesuai dengan image yang ada di `path local`mu
      
      ```bash
      curl --location 'localhost:3000/cars/create' \
      --form 'name="Toyota Supra"' \
      --form 'price="350000000"' \
      --form 'category="medium"' \
      --form 'image=@"/path/to/file"' \
      --form 'start_date="2024/05/06"' \
      --form 'end_date="2024/08/28"' \
      --form 'availability="true"'
      ```

### API `PUT`
- Update Data
  - Request : `PUT /cars/:id`
  - CURL
    - Request\
      Note : Jangan lupa ubah `path image` sesuai dengan image yang ada di `path local`mu
      
      ```bash
      curl --location --request PUT 'localhost:3000/cars/2' \
      --form 'name="Skyline GTR"' \
      --form 'price="250000000"' \
      --form 'category="small"' \
      --form 'image=@"/path/to/file"' \
      --form 'start_date="2024/07/08"' \
      --form 'end_date="2024/09/28"' \
      --form 'availability="false"'
      ```

### API `DELETE`
- Delete Data
  - Request : `DELETE /cars/:id`
  - CURL
    - Request

      ```bash
      curl --location --request DELETE 'localhost:3000/cars/1'
      ```
      
## ERD (Entity Relationship Diagram)

![Image](https://res.cloudinary.com/dsozzm34s/image/upload/v1717338106/challenge-6/Practice_Challenge_5_2_grni5h.png)