function startApp() {

        var cart = [];
        var products = [];

        class Item{
            constructor(id, title, description, quantity, price){
                this.id = id;
                this.title = title;
                this.description = description;
                this.quantity = quantity;
                this.price = price;
            }
        }

        var firstDefaultItem = new Item('1213', 'Banana', 'Banana from China', '1', '133');
        var secondDefaultItem = new Item('224', 'Apples', 'Apples from Germany', '1', '4000');
        var thirdDefaultItem = new Item('332', 'Oranges', 'Oranges from Greek', '1', '3000');

        products.push(firstDefaultItem);
        products.push(secondDefaultItem);
        products.push(thirdDefaultItem);

        localStorage.setItem("Products", JSON.stringify(products));


        showProductView();
        $('#products').click(showProductView);
        $('#cart').click(showCartView);
        $('#infoBox').hide();


        function showProductView() {
            $('#app-container').empty();

            var productsContainer = {
                final: products
            };

            var template = Handlebars.compile(productsTemplate);
            var data = template(productsContainer);
            document.getElementById('app-container').innerHTML += data;
        }

        function showCartView() {
            $('#app-container').empty();

            var cartContainer = {
                final: cart
            };

            var template = Handlebars.compile(cartTemplate);
            var data = template(cartContainer);
            document.getElementById('app-container').innerHTML += data;

            var productPrice = Number(totalCost());
            var shipingPrice = Number((productPrice * 5) / 100.0);
            var totalPrice = Number(productPrice + shipingPrice);

            $('#product-price').html(productPrice);
            $('#shiping-price').html(shipingPrice);
            $('#total-price').html(totalPrice);


        }

        function showShopingCart() {
            $('#drop-down').empty();

            var cartContainer = {
                final: cart
            };

            var template = Handlebars.compile(hoverShopingCart);
            var data = template(cartContainer);
            document.getElementById('drop-down').innerHTML += data;
        }



        //** Products event **//
        $(document).on('click', '#add', function(){
            var id = $('#id').val();
            var title = $('#title').val();
            var description = $('#comment').val();
            var price = $('#price').val();

            addNewProduct(id, title, description, 1, price);
        });

        $(document).on('click', '.buy', function(){
            var dataId = $(this).parent().parent().parent().attr("data-id");
            var dataTitle = $(this).parent().parent().parent().attr("data-title");
            var dataDescription = $(this).parent().parent().parent().attr("data-description");
            var price = Number($(this).parent().parent().parent().attr("data-price"));


            addProductToCart(dataId, dataTitle, dataDescription, 1, price);
            increaseNumber();
        });

        $(document).on('click', '#saveEdit', function(){
            var test = $(this).attr("data-test");
            var title = $('#' + 'title'+ test).val();
            var description = $('#' + 'description'+ test).val();
            var price = $('#' + 'price'+ test).val();

            for (var i in products) {
                if (products[i].id === test) {
                    products[i].title = title;
                    products[i].description = description;
                    products[i].price = Number(price);
                }
            }

            function reload(){
                showProductView();
            }
            setTimeout(reload, 500);
            showInfo('Product was edited successful!')

        });



        $(document).on('click', '.delete', function(){
            var id = $(this).parent().parent().parent().attr("data-id");
            deleteProductFromProducts(id);
            showProductView()
        });

        $(document).on('mouseover', '#cart', function(){
            showShopingCart()
        });



        //** Carts event **//
        $(document).on('click', '.deleteCart', function(){
            cart = [];
            localStorage.setItem("Cart", JSON.stringify(cart));
            $('#number').html(0);
            showProductView()
        });

        $(document).on('click', '.minusProductFromCart', function(){
            var dataId = $(this).parent().parent().parent().attr("data-id");
            minusProductFromCart(dataId);
            showCartView()
        });

        $(document).on('click', '.plusProductFromCart', function(){
            var dataId = $(this).parent().parent().parent().attr("data-id");
            addProductFromCart(dataId);
            showCartView()
        });

        $(document).on('click', '.deleteProductFromCart', function(){
            var dataId = $(this).parent().parent().parent().attr("data-id");
            deleteProductFromCart(dataId);
            increaseNumber();
            showCartView()
        });

        //* products **//

        function addNewProduct(id, title, description, quantity, price) {

            var newProduct = new Item(id, title, description, quantity, price);
            products.push(newProduct);
            localStorage.setItem("Products", JSON.stringify(products));

            function reload(){
                showProductView();
            }
            setTimeout(reload, 500);
            showInfo('New product is created')

        }

        function addProductToCart (id, title, description, quantity, price) {
            for (var i in cart) {
                if (cart[i].id === id) {
                    cart[i].quantity += quantity;
                    localStorage.setItem("Cart", JSON.stringify(cart));
                    return;
                }
            }

            var product = new Item(id, title, description, 1, price);
            cart.push(product);

            localStorage.setItem("Cart", JSON.stringify(cart));

        }

        function deleteProductFromProducts(id) {
            for (var i in products) {
                if (products[i].id === id) {
                    products.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("Products", JSON.stringify(products));
            showInfo('Delete is successful!')
        }
        
        //** cart **//
    
        function addProductFromCart(id) {
            for (var i in cart) {
                if (cart[i].id === id) {
                    cart[i].quantity++;
                    break;
                }
            }
            localStorage.setItem("Cart", JSON.stringify(cart));
            increaseNumber()
        }

        function minusProductFromCart (id) {
            for (var i in cart) {
                if (cart[i].id === id) {
                    cart[i].quantity--;
                    if (cart[i].quantity === 0) {
                        cart.splice(i, 1);
                    }
                    break;
                }
            }
            localStorage.setItem("Cart", JSON.stringify(cart));
            increaseNumber()
        };
        
        function deleteProductFromCart(id) {
            for (var i in cart) {
                if (cart[i].id === id) {
                        cart.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("Cart", JSON.stringify(cart));

        }

        function totalCost() {
            var totalCost = 0;
            for (var i in cart) {
                totalCost += cart[i].price * cart[i].quantity;
            }
            return totalCost.toFixed(2);
        };

        function countProductInCart  () {
            var totalCount = 0;
            for (var i in cart) {
                totalCount += cart[i].quantity;
            }

            return totalCount;
        };



        function increaseNumber() {
            $('#number').html(countProductInCart());
        }

        function showInfo(message) {
            $('#infoBox').text(message);
            $('#infoBox').show();
            setTimeout(function () {
                $('#infoBox').fadeOut();
            }, 3000);
         }
}