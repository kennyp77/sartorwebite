<?php include("path.php"); ?>
<?php include(ROOT_PATH . '/app/controllers/posts.php');


if (isset($_GET['id'])) {
  $post = selectOne('posts', ['id' => $_GET['id']]);
}
$topics = selectAll('topics');
$posts = selectAll('posts', ['published' => 1]);


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
  <title><?php echo $post['title']; ?> | AwaInspires</title>
</head>

<body>
    <div id="preloder">
        <div class="loader"></div>
    </div>
      <div class="cursor"></div>
  <!-- Facebook Page Plugin SDK -->
  <div id="fb-root"></div>
  <script async defer crossorigin="anonymous"
    src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=285071545181837&autoLogAppEvents=1">
  </script>

  <?php include(ROOT_PATH . "/app/includes/header.php"); ?>

  <!-- Page Wrapper -->
  <div class="page-wrapper">

    <!-- Content -->
    <div class="content clearfix">

      <!-- Main Content Wrapper -->
      <div class="main-content-wrapper">
        <div class="main-content single">
          <h6 class="post-title"><?php echo $post['title']; ?></h6>

          <div class="post-content">
            <?php echo html_entity_decode($post['body']); ?>
          </div>

        </div>
      </div>
      <!-- // Main Content -->

      <!-- Sidebar -->
      <div class="sidebar single">

        <div class="fb-page" data-href="https://www.facebook.com/SartorUsa/" data-small-header="false"
          data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/SartorUsa/" class="fb-xfbml-parse-ignore"><a
              href="https://www.facebook.com/SartorUsa/">Sartor</a></blockquote>
        </div>


        <div class="section popular">
          <h2 class="section-title">Popular</h2>

          <?php foreach ($posts as $p): ?>
            <div class="post clearfix">
              <img src="<?php echo BASE_URL . '/assets/images/' . $p['image']; ?>" alt="">
             <!-- <a href="single.php?id=<?php echo $post['id']; ?>" class="title">
                <h5><?php echo $p['title'] ?></h5>
              </a>-->
                <h5><a href="single.php?id=<?php echo $p['id']; ?>"><?php echo $p['title']; ?></a></h5>
            </div>
          <?php endforeach; ?>
          

        </div>
        
        <div class="section topics">
          <h2 class="section-title">Topics</h2>
              
          <ul>
            <?php foreach ($topics as $topic): ?>
              <li><a href="<?php echo BASE_URL . '/index.php?t_id=' . $topic['id'] . '&name=' . $topic['name'] ?>"><?php echo $topic['name']; ?></a></li>
            <?php endforeach; ?>

          </ul>
        </div>
          </div>
       
      <!-- // Sidebar -->

    </div>
    <!-- // Content -->

  </div>
  <!-- // Page Wrapper -->

  <?php include(ROOT_PATH . "/app/includes/footer.php"); ?>


 <!-- JQuery -->
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