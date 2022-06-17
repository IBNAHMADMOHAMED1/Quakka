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
        $sql = "INSERT INTO products (name, description, price, quantity, category_id, created_at) VALUES (:name, :description, :price, :quantity, :category_id, NOW())";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':name', $data['name']);
        $stmt->bindValue(':description', $data['description']);
        $stmt->bindValue(':price', $data['price']);
        $stmt->bindValue(':quantity', $data['quantity']);
        $stmt->bindValue(':category_id', $data['category_id']);
        return $stmt->execute() ? $this->_oneProduct($this->_connexion->lastInsertId()) : false;
    }
    public function get_products_with_images()
    {
        // body
    }
    public function _oneProduct($id)
    {
        $sql = "SELECT * FROM products WHERE product_id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':id', $id);
        return $stmt->execute() ? $stmt->fetch(PDO::FETCH_ASSOC) : false;
    }
    public function update($id, $data)
    {
        $sql = "UPDATE products SET name = :name, description = :description, price = :price, quantity = :quantity, category_id = :category_id ,created_at = NOW() WHERE product_id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':name', $data['name']);
        $stmt->bindValue(':description', $data['description']);
        $stmt->bindValue(':price', $data['price']);
        $stmt->bindValue(':quantity', $data['quantity']);
        $stmt->bindValue(':category_id', $data['category_id']);
        $stmt->bindValue(':id', $id);
        return $stmt->execute() ? $this->_oneProduct($id) : false;
    }
    public function _deleteProduct($id) {
        $sql = "DELETE FROM products WHERE product_id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':id', $id);
        return $stmt->execute() ? true : false;
    }
    public function updateProduct($data, $newQuantity)
    {
        $sql = "UPDATE products SET quantity = :quantity WHERE product_id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':quantity', $newQuantity);
        $stmt->bindValue(':id', $data['product_id']);
        return $stmt->execute() ?  $this->_oneProduct($data['product_id']) : false;
    }
}