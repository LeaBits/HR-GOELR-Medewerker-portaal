<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    function createCard($item, $class = ''){
        $icon = (isset($item['icon']))? '<i class="fa-7x '.$item['icon'].'"></i>' : '';
        $title = (isset($item['title']))? '<h5 class="card-title">'.$item['title'].'</h5>' : '';
        $description = (isset($item['description']))? '<p class="card-text">'.$item['description'].'</p>' : '';
        $linkText = (isset($item['linkText']))? $item['linkText'] : 'Klik hier';
        $link = (isset($item['link']))? '<a href="'.$item['link'].'" target="_blank" class="btn btn-dark stretched-link">'.$linkText.'</a>' : '';
        echo '<div class="col-md-4 mt-1 mb-1">
            <div class="card '.$class.'">
                <div class="card-top card-img-top card-body">'.$icon.'</div>
                <div class="card-body">
                    '.$title.$description.$link.'
                </div>
            </div>
        </div>';
    }

    $itemsHome = array(
        0 => array(
            'icon' => 'far fa-laugh-beam',
            'title' => 'Persoonlijk blog',
            'description' => 'In mijn blog post ik over het leven als startende tech docent. Daarnaast plaats ik ook geregeld eigen \'tutorials\' over zelf gemaakte projecten.',
            'link' => 'https://blog.ldegoeij.nl'
        ),
        1 => array(
            'icon' => 'fas fa-cube',
            'title' => 'Clever',
            'description' => 'Documentatie en bewijzen voor project sprints en building blocks.',
            'link' => 'https://cle.cmgt.hr.nl'
        ),
        2 => array(
            'icon' => 'fab fa-github',
            'title' => 'CMGT GitHub account',
            'description' => 'Op het GitHub account van CMGT kun je lesmateriaal en verschillende projecten vinden binnen de opleiding.',
            'link' => 'https://github.com/HR-CMGT'
        )
    );

    $itemsTutorials = array(
        0 => array(
            'icon' => 'fab fa-python',
            'title' => 'AdaFruit CPX CircuitPython',
            'description' => 'In deze tutorial zie hoe je CircuitPython laad op jouw Circuit Playground (Express).',
            'link' => 'https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-quickstart'
        ),
        1 => array(
            'icon' => 'fab fa-js',
            'title' => 'AdaFruit CPX terug naar MakeCode',
            'description' => 'Mocht je CircuitPython op jouw Circuit Playground (Express) hebben geladen en wil je weer terug naar MakeCode?',
            'link' => 'https://learn.adafruit.com/adafruit-circuit-playground-express/uninstalling-circuitpython'
        )
    );
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
    <script src="src/main.js"></script>
    <link rel="stylesheet" href="src/main.css">

    <title>Leanne de Goeij medewerker site</title>
</head>
<body class="pt-5">
    <header>
        <nav id="theNav" class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Leanne de Goeij</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#tutorials">Tutorials</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div data-spy="scroll" data-target="#theNav" data-offset="0" class="pt-4">

        <home id="home">
            <div class="container mb-5">
                <div class="row">

                    <?php
                        foreach ($itemsHome as $item) {
                            createCard($item, 'home');
                        }
                    ?>

                </div>
            </div>
        </home>

        <tutorials id="tutorials">
            <div class="container mb-5">
                <div class="row">
                    <div class="col-12"><h2>Tutorials</h2></div>

                    <?php
                        foreach ($itemsTutorials as $item) {
                            createCard($item, 'tutorials');
                        }
                    ?>

                </div>
            </div>
        </tutorials>

    </div>

    <!-- vendor -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>