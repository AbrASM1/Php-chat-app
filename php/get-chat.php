<?php
session_start();
if(isset($_SESSION['unique_id'])){
    include_once "config.php";
    $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
    $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
    $output="";
    $sql="SELECT * FROM messages 
          LEFT JOIN users on users.unique_id = messages.outgoing_msg_id
          WHERE (outgoing_msg_id={$outgoing_id} AND incoming_msg_id= {$incoming_id})
          OR (outgoing_msg_id={$incoming_id} AND incoming_msg_id= {$outgoing_id}) ORDER BY msg_id ASC";
    $querry = mysqli_query($conn,$sql);
    if(mysqli_num_rows($querry)>0){
        while($row= mysqli_fetch_assoc($querry)){
        /*sent*/if($row['outgoing_msg_id'] === $outgoing_id) {
    $output .= '<div class="chat outgoing">
        <div class="details">
        <p>'.$row['msg'].'</p>
        </div>
        <form action="php/delete_message.php" method="post">
        <input type="hidden" name="msg_id" value="'.$row['msg_id'].'">
        <button type="submit" class="transparent-trash-icon" name="delete"><i class="fas fa-trash"></i></button>
        </form>
        </div>';

        /*recive*/}else{
                    $output .='<div class="chat coming">
                                <img src="php/images/'.$row['img'].'" alt="">
                                <div class="details">
                                    <p>'.$row['msg'].'</p>
                                </div>
                                </div>';
            }
        }
        echo $output;
    }
} 
else {
    header("Location: ../login.php");
}
?>
<script src="javascript/chat.js"></script>