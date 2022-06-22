<?php


class Imagehall extends Model
{
    public function __construct()
    {
        $this->table = 'HallImags';
        $this->getConnection();
    }
    public function upload_images($id, $images)
    {
        $sutupla = [];
        foreach ($images as $image) {
            $sql = "INSERT INTO $this->table ( name ,idHall) VALUES ('$image',$id)";
            $stmt = $this->_connexion->prepare($sql);
            $stmt->execute() ? array_push($sutupla, true) : array_push($sutupla, false);
        }
        return in_array(false, $sutupla) ? false : true;
    }
    public function get_images_with_products()
    {
        $sql = "SELECT * FROM $this->table LEFT JOIN halls ON $this->table.idHall  = products.product_id";
        $stmt = $this->_connexion->prepare($sql);
        return $stmt->execute() ? $stmt->fetchAll(PDO::FETCH_ASSOC) : false;
    }
    public function _getImages($idHall) {
        $sql = "SELECT * FROM $this->table WHERE idHall  = $idHall ";
        $stmt = $this->_connexion->prepare($sql);
        return $stmt->execute() ? $stmt->fetchAll(PDO::FETCH_ASSOC) : false;
    }
    public function _delete_images($idHall) 
    {   
        $sql = "SELECT * FROM $this->table WHERE idHall  = $idHall ";
        $stmt = $this->_connexion->prepare($sql);
        if ($stmt->execute()) {
            $images = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (count($images) > 0) {
                $sql = "DELETE FROM $this->table WHERE idHall  = $idHall ";
                $stmt = $this->_connexion->prepare($sql);
                return $stmt->execute() ? true : false;
            } else return true;
        } else return false;
    }
}
