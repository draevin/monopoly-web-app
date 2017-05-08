<?php
   $dbhost = 'localhost:3306';
   $dbuser = 'root';
   $dbpass = '';//if it is protected, add your password here
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
//-------------------connect to the database system ---------------------------------------   
   if(! $conn ) 
   {
      die('Could not connect:' . mysql_error());
   }
   
//   echo 'Connected successfully  <br />';


// TESTING
$thisisstupid = mysql_select_db('players');
if(! $thisisstupid){
    $sql ='SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = players';

$retval = mysql_query( $sql, $conn);

if(! $retval ) {
      //die('1 is wrong ' . mysql_error());
    $sql = 'CREATE Database players';
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) 
   {
      die('Could not create database: ' . mysql_error());
   }
   
//   echo "Database players created successfully <br />";
   
    mysql_select_db('players'); //choose the database

//-------------------create a table pet------------------------------------------------------  
	
 $sql =
 'create table player
(
name        varchar(20), 
email       varchar(90)
)';

   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not create table: ' . mysql_error());
   }
   
//   echo "Table player created successfully <br />";
   }  
//   echo "1 is good <br />";  
        //-------------use a database--------------------------------------------------------------   
      mysql_select_db('players'); //choose the database
}
  

   
//-------------retrieve the data from the form---------------------------------------------


$sname = $_POST['fname'];
$semail = $_POST['email'];
$ssub = $_POST['sub'];
$smessage = $_POST['message'];

//var_dump($_POST);
//
//echo ($sname.','.$semail.',\''.$ssub.'\''.',\''.$smessage);

 $sql ="INSERT INTO player(name, email  ) VALUES('$sname','$semail');";
$retval = mysql_query( $sql, $conn);

   if(! $retval ) {
      die('Could not add data: ' . mysql_error());
   }  
//   echo "data has been added to the table player successfully <br />";   

      mysql_close($conn);

//$smessage = wordwrap($smessage,70);
//
//$headers =  'MIME-Version: 1.0' . "\r\n"; 
//$headers .= 'From: Your name <info@address.com>' . "\r\n";
//$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
//$headers = "From: webmaster@example.com" . "\r\n";
////mail("godrulesjmh@gmail.com", $sname ." ".$semail,$ssub."\n".$smessage, $headers);
//mail('godrulesjmh@gmail.com', $ssub, $smessage);
header('Location: thanks.html')
?>
