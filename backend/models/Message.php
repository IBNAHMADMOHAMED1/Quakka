<?php

class Message extends Model
{

    public function __construct()
    {
        $this->table = 'messages';
        $this->getConnection();
    }
    public function createMessage($data)
    {
        // print_r($data);
        // die();
        $sql = "INSERT INTO messages(name, message, object, email, phone) VALUES (?,?,?,?,?)";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(1, $data['name']);
        $stmt->bindValue(2, $data['message']);
        $stmt->bindValue(3, $data['object']);
        $stmt->bindValue(4, $data['email']);
        $stmt->bindValue(5, $data['phone']);
        return $stmt->execute() ? true : false;
    }
}