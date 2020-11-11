<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require('entities/LinkCategory.php');
require('entities/LinkTag.php');
require('entities/Link.php');
require('controllers/IndexController.php');

use Controllers\indexController;

$controller = new indexController();

?>


<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- vendor -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/02247610e6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- custom -->
    <script src="js/main.js"></script>
    <link rel="stylesheet" href="css/main.css">

    <title>Leanne de Goeij medewerker site</title>
</head>
<body class="pt-5">

    <div data-spy="scroll" data-target="#theNav" data-offset="0" class="pt-4">

        <home id="home">
            <div class="container mb-5">
                <div class="row">
                    <?php echo $controller->getCardsByCategoryName("home"); ?>
                    <?php echo $controller->getCardsByCategoryName("modules"); ?>
                </div>
            </div>
        </home>

    </div>

    <!-- vendor -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>