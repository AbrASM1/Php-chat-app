<?php
    session_start();
    if(!isset($_SESSION['unique_id'])){
        header("location: ./inchatlogin.php");
    }
?>

<?php include_once "header.php";?>
<body>
  <div class="wrapper">
    <section class="utilisateur">
        <header>
        <?php
        include_once "php/config.php";
            $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$_SESSION['unique_id']} " );
            if(mysqli_num_rows($sql) > 0){
                $row = mysqli_fetch_assoc($sql);
            }
        ?>    
          <div class="content">
            <img src="php/images/<?php echo $row['img']?>" alt="">
            <div class="details">
                <span><?php echo $row['fname'] . " " .$row['lname'] ?></span>
                <p> <?php echo $row['status'] ?></p>
            </div>
          </div>
          <a href="php/logout.php?logout_id=<?php echo $row['unique_id']; ?>" class="logout">Logout</a>
        </header>
        <div class="search">
            <span class="text">Select whom to chat</span>
            <input type="text" placeholder="Who...?">
            <button><i class="fas fa-search"></i></button>
        </div>
        <div class="list-utilisateurs">
        
        </div>
    </section>
 

  </div>
  <script src="javascript/users.js"></script>
    
</body>
</html>