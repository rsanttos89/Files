<?php
  $requestUri = filter_input(INPUT_SERVER, 'REQUEST_URI');
  $queryStringStart = strpos($requestUri, '?');
  
  if ($queryStringStart !== false) {
      $requestUri = substr($requestUri, 0, $queryStringStart);
  }

  $requestUriWithoutLeadingSlash = substr($requestUri, 1);
  $urlParts = explode('/', $requestUriWithoutLeadingSlash);

  // Check if $urlParts[2] is not set or is empty
  if (!isset($urlParts[2]) || empty($urlParts[2])) {
      // Redirect to 404 page
      header('Location: /view/404');
      exit();
  }

  $paramValue = $urlParts[2];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mario</title>
</head>
<body>
  <p>Parameter Value: <?php echo htmlspecialchars($paramValue); ?></p>
</body>
</html>