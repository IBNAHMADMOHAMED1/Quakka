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
       
        $sql = "INSERT INTO $this->table  (name, product_id, created_at) VALUES (:name, :product_id, NOW())";
        $stmt = $this->_connexion->prepare($sql);
        // use bocle for to upload multiple images
        foreach ($images as $image) {
            $stmt->bindValue(':name', $image);
            $stmt->bindValue(':product_id', $id);
            if ($stmt->execute()) {
                return $this->getAll();
            } else {
                return false;
            }

        }

       
    }
}
