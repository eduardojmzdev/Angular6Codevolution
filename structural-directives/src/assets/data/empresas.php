<?php

// error_reporting(E_ALL);
// ini_set('display_errors', '1');
// ini_set('display_errors', '1');
define("PATH_WL", dirname(__FILE__));
define("DS", "/");

ini_set('max_execution_time', 3000);

//Host
define("HOST", "localhost");
// define("HOST", "sgnsantafe.selfip.org");
define("DB", "fandamexico");
define("USER", "root");
// define("USER", "monterrey");
define("PASSWORD", "");
// define("PASSWORD", "VsS&jCR1283kzboys7x");
define("PORT", "3306");


try {
	$cn = new PDO("mysql:host=".HOST.";dbname=".DB.";charset=utf8;port=".PORT, USER,PASSWORD);
	// return $cn;
	// echo "Conexion Exitosa";
	$sql="SELECT id_empresa,razon_social,rfc from empresa  limit  9";
	mysql_set_charset("utf8");
		$stmt=$cn->prepare($sql);
		$stmt->execute();
		$result=$stmt->fetchAll(PDO::FETCH_ASSOC);
		$json=json_encode($result);
		echo "<pre>";
		print_r($json);
} catch (PDOException $ex) {
	var_dump($ex);
	die($ex->getMessage());
}
// die();

?>

