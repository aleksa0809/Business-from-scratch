# Creating React SPA for online shop

First of all, it is needed to choose a css-framework for web page appearence. The bootstrap 4.7 is used for this perpous. The changes of `app.html`:

```
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    ...
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
```

The next step is creating of a structure of the page. There are `Navbar` and `LeftMenu` components on the top and left sides on page respectively:

```
<div>  
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <LeftMenu />
            </div>
            <div class="col-lg-9">
                <p>Here will be pages.</p>
            </div>
        </div>
    </div>
</div>
```


