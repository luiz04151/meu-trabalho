<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

// Conexão
$conn = new mysqli("localhost", "root", "", "site_igreja");

if ($conn->connect_error) {
    echo json_encode(["status" => "erro", "message" => "Erro de conexão"]);
    exit;
}

// Recebe JSON do React
$data = json_decode(file_get_contents("php://input"), true);

// SE O POST VIER VAZIO, EVITA ERRO
if (!$data) {
    echo json_encode(["status" => "erro", "message" => "Nenhum dado recebido"]);
    exit;
}

$nome = $data["nome"] ?? '';
$email = $data["email"] ?? '';
$endereco = $data["endereco"] ?? '';
$bairro = $data["bairro"] ?? '';
$nascimento = $data["nascimento"] ?? '';
$tipo = $data["tipo"] ?? '';

$sql = "INSERT INTO formulario_igreja (`Nome`, `E-mail`, `Endereço`, `Bairro`, `Data de Nascimento`, `Tipo de cadastro`)
        VALUES ('$nome', '$email', '$endereco', '$bairro', '$nascimento', '$tipo')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "ok", "message" => "Salvo com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "message" => "Erro ao salvar: " . $conn->error]);
}

$conn->close();
?>
