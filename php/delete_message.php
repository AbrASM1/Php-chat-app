<?php
session_start();
if(isset($_SESSION['unique_id'])){
    include_once "config.php";
    if(isset($_POST['delete'])) {
        $msg_id = mysqli_real_escape_string($conn, $_POST['msg_id']);
        $sql = "DELETE FROM messages WHERE msg_id = {$msg_id}";
        
        $query = mysqli_query($conn, $sql);
        if ($query) {
            echo "Message deleted successfully";
            header('Location: ' . $_SERVER['HTTP_REFERER']);
            exit();
        } else {
            echo "Error deleting message: " . mysqli_error($conn);
        }
    }
} else {
    echo "Session not set";
}
?>
