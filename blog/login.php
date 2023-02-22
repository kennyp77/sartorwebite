<?php include('path.php'); ?>
<?php include(ROOT_PATH . "/app/controllers/users.php"); 
guestsOnly();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
    <meta name="keywords" content="Black Fasion BLK fashion, Black Designers, Afro Designer Brands, Black Fasion ">
    <meta property="og:site_name" content="Black-Afro Inspired Fashion">
    <meta property="og:url" content="https://www.sartor.io">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta content= "Sartor Magazine is the number one online destination for black owned fashion Designers, showcasing the most stylish and inspiring new designers " name="title">
    <meta content="Black owned fashion has been in the spotlight lately, but if you're looking for an in-depth look at black American designers and their stories, Sartor Magazine could be just what you need. We're not just offering a style direction; we're celebrating people who are making their mark on the world through creativity, innovation, and design." name="description">
    <meta property="og:url" content="https://www.sartor.io/home"/>
    <meta name="google-site-verification" content="7o5LTENcqJrM4-z10LUtH9o66nIKf1dpHmwvSt3MB7w" />
    
    <meta itemprop="name" content="SARTOR.IO : Shop Luxury Black Designers "/>
<meta itemprop="description" content="Black owned fashion has been in the spotlight lately, but if you're looking for an in-depth look at black American designers and their stories, Sartor Magazine could be just what you need. We're not just offering a style direction; we're celebrating people who are making their mark on the world through creativity, innovation, and design. "/>


    <meta name="p:domain_verify" content="655b999e3dc809846aac1fbc4c3d7744"/>
    <title>Sartor Magazine is the number one online destination for black owned fashion Designers, showcasing the most stylish and inspiring new designers </title>

    <!-- Google Font -->
    
    
    
    <link data-brackets-id="6" rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    
    
   <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTXNCRK');
    </script>
    
    <script>
  // The Experience class is available before Evergage is initialised.
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  window.Experiences = function()
  {
    this.experiences = [];
    this.subs = [];
  }
  window.Experiences.prototype.push = function(elm)
  {
    this.experiences.push(elm);
    for (var i = 0; i < this.subs.length; ++i)
    {
      this.subs[i](elm);
    }
  }
  window.Experiences.prototype.subscribe = function(cb)
  {
    this.subs.push(cb);
    for (var i = 0; i < this.experiences.length; ++i)
    {
      cb(this.experiences[i]);
    }
  }
  window.rrmc_experiences = new window.Experiences();
  window.rrmc_trigger_delayed_action = function(action, delay)
  {
    setTimeout(function() {
      var _aaq = window._aaq || (window._aaq = []);
      _aaq.push(['trackAction', action]);
    }, delay);
  };
  window.rrmc_trigger_delayed_attribute = function(attribute, value, delay)
  {
    setTimeout(function() {
      var _aaq = window._aaq || (window._aaq = []);
      _aaq.push(['setCustomField', attribute, value,'request']);
      _aaq.push(['trackAction', 'rrmcAttributeUpdate']);
    }, delay);
  };
</script>



  <!-- Custom Styling -->
  <!--<link rel="stylesheet" href="assets/css/style.css">-->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <!-- Css Styles -->
    <link rel="stylesheet" href="/gallery/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="/gallery/css/button.css" type="text/css">
    <link rel="stylesheet" href="/gallery/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="/gallery/css/themify-icons.css" type="text/css">
    <link rel="stylesheet" href="/gallery/css/owl.carousel.min.css" type="text/css">
    <link rel="stylesheet" href="/gallery/css/magnific-popup.css" type="text/css">
    <link rel="stylesheet" href="/gallery/css/slicknav.min.css" type="text/css">
    <link rel="stylesheet" href="/gallery/css/style.css" type="text/css">
    <!--<link rel="stylesheet" href="/gallery/css/deck-banner.css" type="text/css">-->
    <link rel="stylesheet" href="/gallery/css/mouse.css" type="text/css">



  <link rel="icon" href="/gallery/img/logo.png" type="image/gif" sizes="16x16">
<!-- Google tag (gtag.js) -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8GVMRZVCZ9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8GVMRZVCZ9');
</script>

  <title>Login</title>
</head>

<body>
    <div id="preloder">
        <div class="loader"></div>
    </div>
      <div class="cursor"></div>

<?php include(ROOT_PATH . "/app/includes/header.php"); ?>

  <div class="auth-content">

    <form action="" method="post">
      <h2 class="form-title">Login</h2>

      <?php include(ROOT_PATH . "/app/helpers/formErrors.php"); ?>

      <div>
        <label>Username</label>
        <input type="text" name="username" value="<?php echo $username; ?>" class="text-input">
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value="<?php echo $password; ?>" class="text-input">
      </div>
      <div>
        <button type="submit" name="login-btn" class="btn btn-big">Login</button>
      </div>
      <p>Or <a href="<?php echo BASE_URL . '/register.php' ?>">Sign Up</a></p>
    </form>

  </div>


  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <!-- Slick Carousel -->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

  <!-- Custom Script -->
  <script src="assets/js/scripts.js"></script>
        <!-- Js Plugins -->
   <script src="../gallery/js/jquery-3.3.1.min.js"></script>
    <script src="../gallery/js/bootstrap.min.js"></script>
    <script src="../gallery/js/jquery.magnific-popup.min.js"></script>
    <script src="../gallery/js/mixitup.min.js"></script>
    <script src="../gallery/js/jquery.slicknav.js"></script>
    <script src="../gallery/js/owl.carousel.min.js"></script>
    <script src="../gallery/js/main.js"></script>
    <script src="../gallery/js/mouse.js"></script>

</body>

</html>