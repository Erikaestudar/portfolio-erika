<?php
// Mini Backend para redirecionar pro WhatsApp
if (isset($_GET['name']) && isset($_GET['message'])) {
    $name = trim($_GET['name']);
    $message = trim($_GET['message']);

    // ⚠️ O número real fica escondido aqui no backend!
    $phone = "5518996402021";
    
    // Monta a mensagem
    $text = "Olá! Me chamo $name, $message";
    $msg = urlencode($text);

    // Monta a URL final
    $url = "https://wa.me/$phone?text=$msg";

    // Redireciona
    header("Location: $url");
    exit();
} else {
    echo "Parâmetros inválidos!";
}
?>
