<?php
   $dbhost = 'localhost:3306';
   $dbuser = 'root';
   $dbpass = '';//if it is protected, add your password here
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
//-------------------connect to the database system ---------------------------------------   
   if(! $conn ) 
   {
      die('Could not connect: ' . mysql_error());
   }
   
   echo 'Connected successfully  <br />';

//-------------------create a database animals------------------------------------------------------   
   
    mysql_select_db('players'); //choose the database


   $sql = 'DROP DATABASE players';
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not delete database animals: ' . mysql_error());
   }
   
   echo "Database animals deleted successfully\n";

//   $sql = 'DROP TABLE player';
//   $retval = mysql_query( $sql, $conn );
//   
//   if(! $retval ) {
//      die('Could not delete table employees: ' . mysql_error());
//   }  
//   echo "Table employees deleted successfully <br />";
 
   mysql_close($conn);
?>
