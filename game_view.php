<?php
require "functions.php"; // mag ook include zijn
$connection = dbConnect();

// Checken of id wel is meegestuurd om de URL
if (!isset($_GET["id"])) {
    echo "De ID is niet gezet";
    exit;
}

//Checken of het wel een getal (integer) is
$id = $_GET["id"];
$check_int = filter_var($id, FILTER_VALIDATE_INT);
if ($check_int == false) {
    echo "Dit is geen getal (integer)";
    exit;
}

$statement = $connection->prepare("SELECT * FROM `games` WHERE id=?");
$params = [$id];
$statement->execute($params);
$game_detail = $statement->fetch(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/game_view.css">
</head>

<body>
    <main class="game_view">
        <section class="top">
            <article class="game_info">
                <h2><?php echo $game_detail["titel"] ?></h2>
                <p>
                    <?php echo $game_detail["beschrijving"] ?>
                </p>
            </article>
            <article class="trailer">
                <video src="<?php echo $game_detail["trailer"] ?>" controls autoplay></video>
            </article>
        </section>
        <section class="bottom">
            <div class="downloads">
                <a class="button" href="">IOS</a>
                <a class="button" href="">Windows</a>
                <a class="button" href="">Android</a>
            </div>
            <div class="container_img">
                <figure>
                    <img class="game_img" src="img_game_view/<?php echo $game_detail["img1"] ?>" alt="afbeelding van de game">
                </figure>
                <figure>
                    <img class="game_img" src="img_game_view/<?php echo $game_detail["img2"] ?>" alt="afbeelding van de game">
                </figure>
            </div>


        </section>
    </main>
</body>

</html>