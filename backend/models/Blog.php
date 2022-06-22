<?php

class Blog extends Model
{
    public function __construct()
    {
        $this->table = 'blogs';
        $this->getConnection();
    }
    public function getall()
    {
        $sql = "SELECT * FROM blogs ORDER BY id DESC";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->execute();
        $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $blogs ? $blogs : false;
    }
    public function create($data,$imgName)
    {
        $sql = "INSERT INTO blogs (title, content,image,category, created_at) VALUES (:title, :content, :image, :category, NOW())";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindParam(':title', $data['title']);
        $stmt->bindParam(':content', $data['content']);
        $stmt->bindParam(':image', $imgName);
        $stmt->bindParam(':category', $data['category']);
        return $stmt->execute() ? true : false;
    }
    public function _oneBlog($id)
    {

        $sql = "SELECT * FROM blogs WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
       return $stmt->execute() ? $stmt->fetch(PDO::FETCH_ASSOC) : false;
    }
    public function _update($id,$data,$imgName)
    {
       
        $sql = "UPDATE blogs SET title = :title, content = :content, image = :image, category = :category WHERE id = :id";
        $stmt = $this->_connexion->prepare($sql);
        $stmt->bindParam(':title', $data['title']);
        $stmt->bindParam(':content', $data['content']);
        $stmt->bindParam(':image', $imgName);
        $stmt->bindParam(':category', $data['category']);
        $stmt->bindParam(':id',$id);
    //    $status= $stmt->execute();
    //    return $status[0]->id;
    }
}