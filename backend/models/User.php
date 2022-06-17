<?php

class User extends Model
{
    public function __construct()
    {
        $this->table = 'clients';
        $this->getConnection();
    }
    public function login($data)
    {
        $sql = "SELECT * FROM $this->table WHERE email = :email";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':email', $data['email']);
        if ($stmt->execute()) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            return $user ? (password_verify($data['password'], $user['password']) ? $user : false) : false;
        }
    }
    public function create($data)
    {
        $sql = "INSERT INTO `clients`(`username`, `email`, `phoneNumber`, `mailing_address`, `city`, `password`) VALUES (:username,:email,:phoneNumber,:mailing_address,:city,:password)";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':username', $data['username']);
        $stmt->bindValue(':email', $data['email']);
        $stmt->bindValue(':phoneNumber', $data['phoneNumber']);
        $stmt->bindValue(':mailing_address', $data['mailing_address']);
        $stmt->bindValue(':city', $data['city']);
        $stmt->bindValue(':password', password_hash($data['password'], PASSWORD_DEFAULT));
        return $stmt->execute() ? true : false;
    }
}