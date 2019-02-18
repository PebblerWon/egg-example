<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hacker News</title>
	<link rel="stylesheet" href="/public/css/news.css">
</head>
<body>
	<ul class="news-view view">
		{% for item in list %}
			<li class="item">
				<a href={{item.url}}>{{item.title}}</a>
			</li>
		{% endfor %}
	</ul>
	<form action="">
		<laber for="usrName">name: </laber>
		<input type="text" id="usrName" name="usrName">
	</form>
</body>
</html>