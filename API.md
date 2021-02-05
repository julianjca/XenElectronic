# XenElectronic API Documentation

## Get all products
----
  Returns json data for all products.

* **URL**

  /products

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "products": [
          {
            "id": "270cd61d-1965-4ed2-bbf3-a91425a030b8",
            "productName": "Product 1",
            "price": 100,
            "productImage": "https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg",
            "categoryId": "18bc6c31-e636-4f71-b1f8-52449dbe9950",
            "createdAt": "2021-02-06T17:51:32.017Z",
            "updatedAt": "2021-02-06T17:51:32.017Z",
            "category": {
              "name": "Category 1"
            }
          },
        ]
      }
    ```

* **Sample Call:**

  ```javascript
    axios.get(`API_URL/products`);
  ```

## Get products by ID
----
  Returns json data for a product.

* **URL**

  /products/:id

* **Method:**

  `GET`

* **Params:**

  `id`: required

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "product": {
            "id": "270cd61d-1965-4ed2-bbf3-a91425a030b8",
            "productName": "Product 1",
            "price": 100,
            "productImage": "https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg",
            "categoryId": "18bc6c31-e636-4f71-b1f8-52449dbe9950",
            "createdAt": "2021-02-06T17:51:32.017Z",
            "updatedAt": "2021-02-06T17:51:32.017Z",
            "category": {
              "name": "Category 1"
            }
          },
      }
    ```

* **Sample Call:**

  ```javascript
    axios.get(`API_URL/products/1`);
  ```

## Create Product
----
  Create a product.

* **URL**

  /products

* **Method:**

  `POST`

* **Body:**

  `productName`: required
  `price`: required
  `categoryId`: required
  ``

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success adding product."
    }
    ```

* **Sample Call:**

  ```javascript
    axios.post(
      `API_URL/products`, 
      { name: 'name', price: 1, categoryId: '123'},
    );
  ```

## Update Product
----
  Update a product.

* **URL**

  /products/:id

* **Method:**

  `PUT`

* **Body:**

  `productName`: required
  `price`: required
  `categoryId`: required

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success updating product."
    }
    ```

* **Sample Call:**

  ```javascript
    axios.put(
      `API_URL/products/1`, 
      { name: 'name', price: '$1'},
    );
  ```

## Delete Product
----
  Delete a product.

* **URL**

  /products/:id

* **Method:**

  `DELETE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "message": "Success deleting product."
      }
    ```

* **Sample Call:**

  ```javascript
    axios.delete(
      `API_URL/products/1`
    );
  ```

## Get all categories
----
  Returns json data for all categories.

* **URL**

  /categories

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "categories": [
        {
          "id": "18bc6c31-e636-4f71-b1f8-52449dbe9950",
          "name": "Category 1",
          "createdAt": "2021-02-06T17:51:32.008Z",
          "updatedAt": "2021-02-06T17:51:32.008Z"
        },
      ]
    }
    ```

* **Sample Call:**

  ```javascript
    axios.get(`API_URL/categories`);
  ```

## Get category by ID
----
  Returns json data for a category.

* **URL**

  /categories/:id

* **Method:**

  `GET`

* **Params:**

  `id`: required

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "category": {
          "id": "18bc6c31-e636-4f71-b1f8-52449dbe9950",
          "name": "Category 1",
          "createdAt": "2021-02-06T17:51:32.008Z",
          "updatedAt": "2021-02-06T17:51:32.008Z"
        }
      }
    ```

* **Sample Call:**

  ```javascript
    axios.get(`API_URL/categories/1`);
  ```

## Create Category
----
  Create a category.

* **URL**

  /categories

* **Method:**

  `POST`

* **Body:**

  `name`: required
  ``

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success adding category."
    }
    ```

* **Sample Call:**

  ```javascript
    axios.post(
      `API_URL/categories`, 
      { name: 'name'},
    );
  ```

## Update Category
----
  Update a category.

* **URL**

  /categories/:id

* **Method:**

  `PUT`

* **Body:**

  `name`: required

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success updating category."
    }
    ```

* **Sample Call:**

  ```javascript
    axios.put(
      `API_URL/categories/1`, 
      { name: 'name' },
    );
  ```

## Delete Category
----
  Delete a category.

* **URL**

  /categories/:id

* **Method:**

  `DELETE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "message": "Success deleting category."
      }
    ```

* **Sample Call:**

  ```javascript
    axios.delete(
      `API_URL/categories/1`
    );
  ```