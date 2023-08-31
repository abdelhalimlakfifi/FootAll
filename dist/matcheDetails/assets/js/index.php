<?php

$uri = $_SERVER['REQUEST_URI'];
$url = "https://api.football-data.org/v4".$uri;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$options = array(
  'http' => array(
    'method' => "GET",
    'header' => "X-Auth-Token: 8e1f84010b5348ccb90fa14f6070bbde"
  )
);

$context = stream_context_create($options);

$file = file_get_contents($url, false, $context);
echo json_encode($file);
