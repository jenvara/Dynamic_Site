<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Treehouse Profile</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css" media="screen">
        @import url(http://fonts.googleapis.com/css?family=Varela+Round);
        @import url(http://necolas.github.io/normalize.css/3.0.2/normalize.css);

        body {
            background: #ECEEEF;
            text-align: center;
            margin: 100px auto;
            max-width: 462px;
            padding: 0 40px;
            font: 18px normal 'Varela Round', Helvetica, serif;
            color: #777B7E;
        }

        img {
            width: 100%;
        }

        #searchIcon, #avatar {
            width: 50%;
            border-radius: 50%;
            margin: 0 25% 0 25%;
        }

        input {
            font-family: 'Varela Round', Helvetica, serif;
            font-size: 18px;
            padding: 31px 0;
            margin: 10px 0;
            text-align: center;
            width: 360px;
            border-radius: 4px;
            border: 1px solid #D5DDE4;
            color: #2C3238;
        }

        #username {
            margin: 20px 0 0;
        }

        .button {
            border-color: #5FB6E1;
            background: #5FB6E1;
            color: #fff;
        }

        #error {
            width: 100%;
            padding: 22px 0;
            background: #FFE6B2;
            color: #C5A14E;
            position: absolute;
            left: 0;
            top: 0;
        }

        #profile {
            background: #fff;
            border-radius: 4px;
            border: 1px solid #D5DDE4;
            padding: 40px 0 0;
            margin: -40px 0 0;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 40px 0 0;
        }

        li {
            display: inline-block;
            width: 100%;
            padding: 22px 0;
            margin: 0;
            border-top: 1px solid #D5DDE4;
        }

        a, a:visited {
            color: #5FB6E1;
            text-decoration: none;
        }

        span {
            color: #2C3238;
        }
    </style>
</head>
<body><img src="http://i.imgur.com/VKKm0pn.png" alt="Magnifying Glass" id="searchIcon">

<form action="/" method="POST">
    <input type="text" placeholder="Enter a Treehouse username" id="username" name="username">
    <input type="submit" value="search" class="button">
</form></body>
</html>







