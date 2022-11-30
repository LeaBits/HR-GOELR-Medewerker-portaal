<?php

require_once('vendor/autoload.php');

$loader = new \Twig\Loader\FilesystemLoader('templates/');
$twig = new \Twig\Environment($loader);

echo $twig->render('tutorial.html.twig', array(
    'pageTitle' => 'FabLab Making keuzevak',
    'datalink' => 'fablab.json'
));