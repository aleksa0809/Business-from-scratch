# Anna Veronica Web Shop application: REST API

 There is simple API for showing information about goods from server. It filters list of records according with `segment` and `size` parameters.  The URL that browser sends to server (the GET method is used) consists of constant part (/api/v1/product) and varibales. The `sector` variable can take values `vip` or `casual`, the `size` variable  - `large` or `regular`. 

```
/api/v1/product/:sector/:size
```

The URL can also look like `/api/v1/product/toplist` to show most popular products. 

If URL contains wrong data, server replies with 401 or 404 status.

The REST API is not a full-fledged CRUD tool. There is no ability for inserting, updating, deleting data. One can only select data according with client's filter. Changing of database can be made by editing `data.json` file in the `backend` folder. 

This server also doesn't support saving information about users and purchases.
