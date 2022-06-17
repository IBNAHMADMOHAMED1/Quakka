<?php


class Category extends Model
{
    public function __construct()
    {
        $this->table = 'categorys';
        $this->getConnection();
    }
    public function create($data)
    {
        $sql = "INSERT INTO $this->table  (name, description, created_at) VALUES (:name, :description,NOW())";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':name', $data['name']);
        $stmt->bindValue(':description', $data['description']);
        return $stmt->execute() ? true : false;
    }
    public function _getCategory($product_id)
    {
        $sql = "SELECT * FROM $this->table WHERE category_id = :category_id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':category_id', $product_id);
        return $stmt->execute() ? $stmt->fetch(PDO::FETCH_ASSOC) : false;
    }
    public function _geOne($id)
    {
        $sql = "SELECT * FROM $this->table WHERE category_id = :category_id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':category_id', $id);
        return $stmt->execute() ? $stmt->fetch(PDO::FETCH_ASSOC) : false;
    }

    
}   