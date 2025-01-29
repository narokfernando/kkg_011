<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="theme-color" color-scheme="dark light"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- global css -->
	<link rel="stylesheet" type="text/css" id="resetcss" href="/app/css/_ui.css">
	<link rel="stylesheet" type="text/css" href="/app/css/_theme.css">
	<link rel="stylesheet" type="text/css" href="/app/css/_lang.css">
	<link rel="stylesheet" type="text/css" href="/app/css/_settings.css">
	<link rel="stylesheet" type="text/css" href="/app/css/_sound.css">
	<link rel="stylesheet" type="text/css" href="/app/css/_map.css">
	<link rel="stylesheet" type="text/css" href="/app/css/_inventory.css">
	<link rel="stylesheet" type="text/css" id="resetcss" href="/app/css/_reset.css">

	<!-- scene -->
	<link rel="stylesheet" type="text/css" id="globalscenecss" href="/app/css/_scene.css">
	<link rel="stylesheet" type="text/css" id="globalscenecss" href="/app/css/_scenery.css">
	<link rel="stylesheet" type="text/css" id="pathcss" href="/app/css/_paths.css">
	<link rel="stylesheet" type="text/css" id="collectcss" href="/app/css/_collect.css">
	<link rel="stylesheet" type="text/css" id="collectablescss" href="/app/css/_collectables.css">
	<link rel="stylesheet" type="text/css" id="collectablescss" href="/app/css/_heroes.css">
	<link rel="stylesheet" type="text/css" id="regionscenery" href="">

	<!-- external -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

	<!-- dbs -->
	<link rel="stylesheet" type="text/css" id="coinscss" href="/db/treasures/coins/coins.css">

	<!-- local css -->
	<link rel="stylesheet" type="text/css" id="scenecss" href="scene.css">
	
	<title id="title"></title>
</head>
<body id="body">

	<div id="scene"></div>

	<script src="/app/js/__getEventsListeners.js"></script>

	<!-- scene js -->
	<script id="scenejs" src="scene.js"></script>

	<!-- global js -->
	<script src="/app/js/_reset.js"></script>
	<script src="/app/js/_save.js"></script>
	<script src="/app/js/_url.js"></script>
	<script src="/app/js/_lang.js"></script>
	<script src="/app/js/_theme.js"></script>
	<script src="/app/js/_sound.js"></script>
	<script src="/app/js/_settings.js"></script>
	<script src="/app/js/_map.js"></script>
	<script src="/app/js/_inventory.js"></script>
	
	<script src="/app/js/_loadJS.js"></script>

	<!-- game js -->
	<script src="/app/js/_game.js"></script>
	<script src="/app/js/_scene.js"></script>

	<!-- dbs -->
	<script src="/db/_db_heroes.js"></script>
	<script src="/db/_db_dices.js"></script>
	<script src="/db/_db_swords.js"></script>
	<script src="/db/_db_shields.js"></script>
	<script src="/db/_db_spells.js"></script>
	<script src="/db/_db_specialcards.js"></script>
	<script src="/db/_db_pages.js"></script>
	<script src="/db/_db_maps.js"></script>

	<!-- heroes -->
	<script src="/app/js/_heroes.js"></script>

	<!-- mechanics js -->
	<script src="/app/js/_goto.js"></script>
	<script src="/app/js/_collect.js"></script>
	<script src="/app/js/_move.js"></script>
	<script src="/app/js/_controller.js"></script>

	<!-- run js -->
	<script src="/app/js/_run.js"></script>


</body>
</html>