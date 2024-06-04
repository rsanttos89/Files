<?php
function requireView($path) {
    if (file_exists($path)) {
        require($path);
    } else {
        require('view/404.php');
    }
}

$REQUEST_URI = filter_input(INPUT_SERVER, 'REQUEST_URI');
$INITE = strpos($REQUEST_URI, '?');
if ($INITE):
    $REQUEST_URI = substr($REQUEST_URI, 0, $INITE);
endif;

$REQUEST_URI_PASTA = substr($REQUEST_URI, 1);
$URL = explode('/', $REQUEST_URI_PASTA);
$URL[0] = ($URL[0] != '' ? $URL[0] : 'home');

$viewPath = 'view/';

// Verifica se é um arquivo na raiz
if (file_exists($viewPath . $URL[0] . '.php')) {
    requireView($viewPath . $URL[0] . '.php');
} elseif (is_dir($viewPath . $URL[0])) {
    // Se é um diretório, verifica URL[1]
    if (isset($URL[1])) {
        $viewPath .= $URL[0] . '/';
        
        // Verifica se é um arquivo dentro do diretório
        if (file_exists($viewPath . $URL[1] . '.php')) {
            requireView($viewPath . $URL[1] . '.php');
        } elseif (is_dir($viewPath . $URL[1])) {
            // Se é um diretório, verifica URL[2]
            if (isset($URL[2])) {
                $viewPath .= $URL[1] . '/';
                requireView($viewPath . $URL[2] . '.php');
            } else {
                requireView($viewPath . '404.php');
            }
        } else {
            requireView('view/404.php');
        }
    } else {
        requireView('view/404.php');
    }
} else {
    requireView('view/404.php');
}