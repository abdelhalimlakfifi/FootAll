<?php

$uri = $_SERVER['REQUEST_URI'];
$url = "https://api.football-data.org/v4".$uri;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$options = array(
  'http' => array(
    'method' => "GET",
    'header' => "X-Auth-Token: ac803cf8d9854ffbbeefef018030ce08"
  )
);

$context = stream_context_create($options);

$file = file_get_contents($url, false, $context);

echo json_encode($file);
