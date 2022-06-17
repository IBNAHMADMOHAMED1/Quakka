<?php

class Command extends Model
{
    public function __construct()
    {
        $this->table = 'commands';
        $this->getConnection();
    }
    public function getall()
    {
        $sql = "SELECT * FROM commands";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->execute();
        $commands = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $commands ? $commands : false;
    }

    public function createCommandHall($data)
    {
        $sql = "INSERT INTO commands (client_id, hall_id,date_arrival, date_departure, number_of_guests,message ,created_at) VALUES (:id_client, :id_hall,:date_arrival, :date_departure, :number_of_guests, :message , NOW())";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindParam(':id_client', $data['id_client']);
        $stmt->bindParam(':id_hall', $data['id_hall']);
        $stmt->bindParam(':date_arrival', $data['date_arrival']);
        $stmt->bindParam(':date_departure', $data['date_departure']);
        $stmt->bindParam(':number_of_guests', $data['number_of_guests']);
        $stmt->bindParam(':message', $data['message']);
        return $stmt->execute() ? true : false;
    }
    public function delete($id)
    {
        $sql = "DELETE FROM commands WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindParam(':id', $id);
        return $stmt->execute() ? true : false;
    }
    public function updatestatus($id,$value)
    {
        $sql = "UPDATE commands SET status = $value WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindParam(':id', $id);
        return $stmt->execute() ? true : false;
    }
    public function getCommandsByClinet($client_id)
    {
        $sql = "SELECT * FROM commands WHERE client_id = :client_id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindParam(':client_id', $client_id);
       return $stmt->execute() ? $stmt->fetchAll(PDO::FETCH_ASSOC) : false;
    }
 
}