<?php

class Hall extends Model
{
    public function __construct()
    {
        $this->table = 'halls';
        $this->getConnection();
    }
    public function create($data)
    {
      
        if (empty($data['status'])) $data['status'] = 0;
        // echo json_encode($data);
        // die();
        $sql = "INSERT INTO $this->table (name,address,Nbr_place,description,price,status,created_at) VALUES (:name, :address, :Nbr_place, :description, :price, :status, NOW())";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':name', $data['name']);
        $stmt->bindValue(':address', $data['address']);
        $stmt->bindValue(':Nbr_place', $data['Nbr_place']);
        $stmt->bindValue(':description', $data['description']);
        $stmt->bindValue(':price', $data['price']);
        $stmt->bindValue(':status', $data['status']);
        return $stmt->execute() ?  $this->_oneHall($this->_connexion->lastInsertId()) : false;
       
    }
    public function _oneHall($id)
    {
        $sql = "SELECT * FROM $this->table WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':id', $id);
       return $stmt->execute() ? $stmt->fetch(PDO::FETCH_ASSOC) : false;
    }
    public function delete($id)
    {
        $sql = "DELETE FROM $this->table WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':id', $id);
        return $stmt->execute() ? true : false;
    }
    public function update($id, $value)
    {
        $sql = "UPDATE $this->table SET name = :name, address = :address, Nbr_place = :Nbr_place, description = :description, price = :price, status = :status WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':name', $value['name']);
        $stmt->bindValue(':address', $value['address']);
        $stmt->bindValue(':Nbr_place', $value['Nbr_place']);
        $stmt->bindValue(':description', $value['description']);
        $stmt->bindValue(':price', $value['price']);
        $stmt->bindValue(':status', $value['status']);
        return $stmt->execute() ? true : false;
    }
    public function updatestatus($id, $value)
    {
        $sql = "UPDATE $this->table SET status = $value WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':id', $id);
        return $stmt->execute() ? true : false;
    }

}