<?php


class Product extends Model
{
    public function __construct()
    {
        $this->table = 'products';

        $this->getConnection();
    }   

    public function create($data)
    {
        $sql = "INSERT INTO products (name, description, price, quantity, category_id, created_at, updated_at) VALUES (:name, :description, :price, :quantity, :category_id, NOW(), NOW())";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':name', $data['name']);
        $stmt->bindValue(':description', $data['description']);
        $stmt->bindValue(':price', $data['price']);
        $stmt->bindValue(':quantity', $data['quantity']);
        $stmt->bindValue(':category_id', $data['category_id']);
        $stmt->execute();
    }
}