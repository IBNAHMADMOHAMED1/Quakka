<?php


class Image extends Model 
{
    public function __construct()
    {
        $this->table = 'imags';
        $this->getConnection();
    }
    public function upload_images($id,$images)
    {
        $sutupla = [];
        foreach ($images as $image) {
            $sql = "INSERT INTO $this->table  (name, product_id, created_at) VALUES (:name, :product_id, NOW())";
            $stmt = $this->_connexion->prepare($sql);
            $stmt->bindValue(':name', $image);
            $stmt->bindValue(':product_id', $id);
            $stmt->execute() ? array_push($sutupla,true) : array_push($sutupla,false);
        }
        return in_array(false, $sutupla) ? false : true;
    }
    public function get_images_with_products()
    {
        $sql = "SELECT * FROM $this->table LEFT JOIN products ON $this->table.product_id = products.product_id";
        $stmt = $this->_connexion->prepare($sql);
        return $stmt->execute() ? $stmt->fetchAll(PDO::FETCH_ASSOC) : false;
    }
    public function _getImages($product_id)
    {
        $sql = "SELECT * FROM $this->table WHERE product_id = :product_id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':product_id', $product_id);
        return $stmt->execute() ? $stmt->fetchAll(PDO::FETCH_ASSOC) : false;
    }
    public function _delete_images($product_id)
    {
        $sql = "SELECT * FROM $this->table WHERE product_id = :product_id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':product_id', $product_id);
        if ($stmt->execute()) {
            $images = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (count($images) > 0) {
                $sql = "DELETE FROM $this->table WHERE product_id = :product_id";
                $stmt = $this->_connexion->prepare($sql);
                $stmt->bindValue(':product_id', $product_id);
                return $stmt->execute() ? true : false;
            }
        }
        else return false;
    }
}
