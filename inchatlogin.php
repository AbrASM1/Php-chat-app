<?php include_once "header.php";?>
<body>
  <div class="wrapper">
    <section class="form login">
        <img src="./Logo.png" alt="" style="height: 50px;width:50px; display:flex;"><header>INCHAT</header>
        <form action="#" class="action" id="">
            <div class="error-txt"></div>
            
                <div class="field input">
                    <label >Email address</label>
                    <input type="email" name="email" placeholder="MyMail@mail.com">
                </div>
                <div class="field input">
                    <label >Password</label>
                    <input type="password" name="password" placeholder="Enter your Password">
                    <i class=" fas fa-eye"></i>
                </div> 
                
                <div class="field button">
                    <input type="submit" value="Start My Chat">
                </div>

            

        </form>
        <div class="link">Not signed up? <a href="./Inchatsignup.php">Singup now</a></div>

    </section>
 

  </div>
  
  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/login.js"></script>   
</body>
</html>