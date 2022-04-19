<?php 
    $CN = mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "signup");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $Firstname = $DecodedData['Firstname'];
    $Lastname = $DecodedData['Lastname'];
    $Contact = $DecodedData['Contact'];
    $Email = $DecodedData['Email'];
    $Companyname = $DecodedData['Companyname'];
    
    $IQ = "insert into users (Firstname, Lastname, Contact, Email, Companyname) values('$Firstname','$Lastname','$Contact','$Email','$Companyname')";

    $R = mysqli_query($CN, $IQ);
    
    if($R)
    {
        $Message = "Data register success";
    }else{
        $Message = "Data register Failed";
    }

    $Response [] = array("Message" => $Message);

    echo json_encode($Response);

?>