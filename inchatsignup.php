<?php include_once "header.php";?>
<body>
  <div class="wrapper">
    <section class="form signup">
        <img src="./Logo.png" alt="" style="height: 50px;width:50px; display:flex;"><header>INCHAT</header>
        <form action="#" enctype="multipart/form-data" class="action" id="myForm" autocomplete="off">
            <div class="error-txt"></div>
            <div class="user-details">
                <div class="field input">
                    <label >First name</label>
                    <input type="text" name="fname" placeholder="First name" required>
                </div>
                <div class="field input">
                    <label >Last name</label>
                    <input type="text" name="lname" placeholder="Last name" required>
                </div>
            </div>
                <div class="field input">
                    <label >Email address</label>
                    <input type="email" name="email" placeholder="MyMail@mail.com" required>
                </div>
                <div class="field input">
                    <label >Password</label>
                    <input type="password" name="password" placeholder="Enter new Password" required>
                    <i class=" fas fa-eye"></i>
                </div> 
                <div class="field picture">
                    <label >Profile picture</label>
                    <input type="file" name="image" required >

                </div>
                <div class="field button">
                    <input type="submit" value="Start My Chat">
                </div>

            

        </form>
        <div class="link">Already signed up? <a href="./inchatlogin.php">Login now</a></div>

    </section>
 

  </div>
  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/signup.js"></script>
    
</body>
</html>