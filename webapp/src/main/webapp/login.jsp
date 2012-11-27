<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<!--[if lt IE 7]>
<html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>
<html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>
<html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title></title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/jquery.mobile-1.2.0.css" />
<script data-main="js/main" src="js/libs/require/require.js"></script>

</head>

<body>
	<div id="login" data-role="page">
		<div data-role="header">
			<h1>Project Management</h1>
		</div>
		<div data-role="content">

			<c:if test="${not empty param.error}">
				<font color="red"> Login error. <br /> Reason :
					${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}
				</font>
			</c:if>
			<form method="POST"  data-ajax="false"
				action="<c:url value="/j_spring_security_check" />">
				<div data-role="fieldcontain">
					<label for="login">Username</label> <input id="login"
						name="j_username" type="text" size="25" autocorrect="off"
						autocapitalize="off" />
				</div>
				<div data-role="fieldcontain">
					<label for="password">Password</label> <input id="password"
						name="j_password" type="password" size="25" />
				</div>
				<div id="submitDiv" data-role="fieldcontain">
					<label for="loginbtnSubmit"></label>
					<input id="loginbtnSubmit"
						type="submit" value="login" data-ajax="false" data-inline="true" />
				</div>
			</form>
		</div>
	</div>
</body>
</html>
