<?php

class Comment extends Model
{
    public function __construct()
    {
        $this->table = 'comments';
        $this->getConnection();
    }
    public function createComment($data)
    {
        $sql = "INSERT INTO $this->table  (comment, client_id, blog_id, created_at) VALUES (:comment, :client_id, :blog_id, NOW())";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':comment', $data['comment']);
        $stmt->bindValue(':client_id', $data['client_id']);
        $stmt->bindValue(':blog_id', $data['blog_id']);
        return $stmt->execute() ? $this->getAll() : false;
    }
    public function getallComments($blog_id)
    {
        $sql = "SELECT * FROM $this->table WHERE blog_id = :blog_id ";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':blog_id', $blog_id);
       return  $stmt->execute() ? $stmt->fetchAll(PDO::FETCH_ASSOC) : false;
       
    }

}