<?php 

$api="https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text";

$paragraph=@file_get_contents("$api");
if($paragraph==false){
     //display error
    echo"fail to fetch the paragraph";
}
else{
   //if api is successful then display
    echo htmlspecialchars($paragraph);
}
?>