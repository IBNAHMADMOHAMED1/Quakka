<?php 

class blogs extends controller
{
    public function index()
    {
        $this->loadModel('Blog');
        $blogs = $this->Blog->getall();
        if ($blogs) 
            echo json_encode([http_response_code(200), $blogs]);
        else  echo json_encode(['success' => 'Blogs not found']);
    }
    public function getall()
    {
        header('Content-Type: application/json');
        $this->loadModel('Blog');
        $blogs = $this->Blog->getall();
        if ($blogs) echo json_encode([true, $blogs]);
        else  echo json_encode([false, 'Blogs not found']);
    }
    public function create()
    {
        header('Content-Type: application/json');
        $data = $_POST;
        $image = $_FILES['image'];
        $this->loadModel('Blog');
        $imgName = $this->uploadImage($image);
        $blog = $this->Blog->create($data,$imgName);
        if ($blog) echo json_encode([true,$blog]);
        else  echo json_encode(['message' => 'Blog not created']);
    }
    public function uploadImage($image)
    {
        $imgName = time() . '_' . basename($image['name']);
        $imgPath = 'C:\xampp\htdocs\Quakka\frontend\dashboardadminquakkad\src\assets\img\blog/' . $imgName;
        $fileTmpName = $image['tmp_name'];
        move_uploaded_file($fileTmpName, $imgPath);
        return $imgName;
    }
    public function delete($id)
    {
        $this->loadModel('Blog');
        $blog = $this->Blog->delete($id);
        if ($blog) echo json_encode([true, 'blog' => $blog]);
        else  echo json_encode(['message' => 'Blog not deleted']);
    }
   
}
   