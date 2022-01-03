<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mobile Repair shop</title>
    <link rel="shortcut icon" href="https://www.graphicsprings.com/filestorage/stencils/6ff95aa0b8dddbadf060c318f00d8f3d.png?width=500&height=500.ico" type="image/x-icon">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    /><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <link rel="stylesheet" href="mobilerepair2.css" />
  </head>
  <body>


 <div class="container-fluid text-center mt-4" id="cont" >
   
   <img id="logo" src="https://www.graphicsprings.com/filestorage/stencils/6ff95aa0b8dddbadf060c318f00d8f3d.png?width=500&height=500" alt="">
   <nav class="mx-auto pb-3 mb-4 mx-4" id="navbar">
     <a class="me-3 hey py-2 active" id="home" onclick="home()">Home</a>
     <a class="me-3 hey py-2" id="devices" onclick="device()">Devices</a>
     <a class="me-3 hey py-2" id="Problems" onclick="problems()">Problems</a>

     
    </nav>
    <a  class="me-3 hey py-2" id="btt"><button onclick="info()" class="btn btn-primary">Appointment details</button></a>
  </div>
     <?php 

     
 $name= isset($_SESSION["name"])?$_SESSION["name"] : "";

if($name != "") {
$name_1 = $name;
  $email = $_SESSION["email"];
  $date = $_SESSION["date"];
  $time = $_SESSION["time"];
  echo '<script>document.getElementById("btt").style.display="block";</script>';
  session_destroy();
}
//   else {
  
  // }

  ?>
  <div class="container" id="select">

    <div class="col-3" id="homealone">
      <div class="card">
        <div class="card-body" id="select_name_home">Home<i class="fas fa-arrow-right"></i></div>
      </div>
    </div>
    <div class="col-3" id="first">
      <div class="card">
        <div class="card-body" id="select_name_1"></div>
      </div>
    </div>
    <div class="col-3" id="secound">
      <div class="card">
        <div class="card-body" id="select_name_2"></div>
      </div>
    </div>
    <div class="col-3" id="third">
      <div class="card">
        <div class="card-body" id="select_name_3"></div>
      </div>
    </div>
  </div>
  
  
  <div class="container" id="main-cont">
    <div class="row" id="main_mobile"></div>
  </div>
</div>
<input type="hidden" id="id_1" name="letsgo" value="">
<input type="hidden" id="id_2" name="custId" value="">

<div id="backdrop" >

  </div>
  
  <div class="modal" tabindex="-1" id="modal" onclick="modalclose()">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" id="close" onclick="modalclose()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          User_name: <span class="kkk"><?php echo $name_1; ?></span>
          <br>
          Email: <span class="kkk"><?php echo  $email; ?></span>
          <br>
          Date: <span class="kkk"> <?php echo $date; ?></span>
          <br>
          Time: <span class="kkk"> <?php echo $time; ?></span>
        </div>
        <div class="modal-footer">
          
          </div>
        </div>
      </div>
    </div>
    
    
  <div class="container" id="_footer">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <img id="footer" src="https://www.graphicsprings.com/filestorage/stencils/6ff95aa0b8dddbadf060c318f00d8f3d.png?width=500&height=500" alt="">
        <span class="text-muted">© 2021 Company, Inc</span>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </footer>
  </div>
    <script src="mobilerepair2.js"></script>
  </body>
</html>
