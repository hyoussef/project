<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<!--[if lt IE 7]>
<html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>
<html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>
<html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>PME</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/jquery.mobile-1.2.0.css"/>
    <link rel="stylesheet" href="css/jqm-icon-pack-2.0-original.css"/>
    <link rel="stylesheet" href="css/projects.css"/>
    <script>
        var conf =
        {
            allowCrossDomainPages : false,
            root:''
        };


    </script>
    <script data-main="js/main" src="js/libs/require/require.js"></script>
</head>
<body style="display: none">

<div id="login" data-role="page">
    <div data-role="header">
        <h1>Login</h1>
    </div>
    <div data-role="content">

    </div>

</div>

<div id="denied" data-role="page" data-theme="a">
    <div  data-role="header" data-position="fixed">
        <h1>PM</h1>
    </div>
    <!-- /header -->
    <div data-role="content" data-theme="a">
		<h1>you are not allowed to go there!</h1>       
    </div>

    <div data-role="footer" data-position="fixed">
    </div>
</div>

<div id="container" data-role="page" data-theme="a">
    <div  data-role="header" data-position="fixed">
        <h1>PM</h1>
    </div>
    <!-- /header -->
    <div data-role="content" data-theme="a">

        <a href="#companies" data-role="button" data-icon="arrow-r" data-iconpos="right">Companies</a>
        <a href="#" data-role="button" data-icon="arrow-r" data-iconpos="right">My Account</a>
    </div>

    <div data-role="footer" data-position="fixed">
    </div>
</div>


<div id="companies" data-role="page" data-theme="a"   class="type-interior">
    <div  data-role="header" data-position="fixed">
    	<div></div>
    </div>
    <!-- /header -->
    <div data-role="content">
    </div>
    <!-- /content -->
    <div data-role="footer"  data-position="fixed">
        <p class="jqm-version"></p>

        <p>&copy; 2012</p>
    </div>
</div>

<!-- Start of second page: #two -->
<div data-role="page" id="entities" data-theme="a"   data-add-back-btn="true">
    <div  data-role="header" data-position="fixed">
    </div><!-- /header -->
    <div data-role="content" >
    </div><!-- /content -->
    <div data-role="footer" data-position="fixed">
    </div><!-- /footer -->
</div><!-- /page two -->

<!-- Start of second page: #two -->
<div data-role="page" id="projects" data-theme="a"   data-add-back-btn="true">
    <div data-role="header" data-position="fixed">
    </div><!-- /header -->
    <div data-role="content" >
    </div><!-- /content -->
    <div data-role="footer" data-position="fixed">
        <h4>Page Footer</h4>
    </div><!-- /footer -->
</div><!-- /page two -->

<!-- Start of second page: #two -->
<div data-role="page" id="MyProject" data-theme="a"   data-add-back-btn="true">
    <div  data-role="header" data-position="fixed">
    </div><!-- /header -->

    <div data-role="content">
    </div><!-- /content -->

    <div data-role="footer" data-position="fixed">
        <h4>Page Footer</h4>
    </div><!-- /footer -->
</div><!-- /page two -->

</body>
</html>

