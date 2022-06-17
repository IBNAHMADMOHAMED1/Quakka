<?php

class Client extends Model
{
    public function __construct()
    {
        $this->table = 'clients';
        $this->getConnection();
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
        $stmt->bindValue(':password', $data['password']);
        return $stmt->execute() ? true : false;
    }
    public function lastInsertId()
    {
        return $this->_connexion->lastInsertId();
    }
    public function getClient($id)
    {
        $sql = "SELECT * FROM clients WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':id', $id);
        return $stmt->execute() ? $stmt->fetch(PDO::FETCH_ASSOC) : false;
    }
    public function login($data)
    {
        $sql = "SELECT * FROM $this->table WHERE email = :email AND password = :password";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':email', $data['email']);
        $stmt->bindValue(':password', password_hash($data['password'], PASSWORD_DEFAULT));
        if ($stmt->execute()) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            return $user ? $user : false;
        }
    }
}