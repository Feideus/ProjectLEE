<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=DATABASE1;charset=utf8','root','root');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$reponse = $bdd->query('SELECT * FROM partenaires');

while ($donnees = $reponse->fetch())
{
	echo $donnees[num_sir] . '<br />';
        echo $donnees[nom] . '<br />';
        echo $donnees[categorie] . '<br />';
}

$reponse->closeCursor();

?>
