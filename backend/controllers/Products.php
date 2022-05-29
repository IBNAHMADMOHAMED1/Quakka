<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Content-Type:multipart/form-data');
header('Access-Control-Allow-Methods: POST,UPDATE,DELETE,GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


class Products extends Controller
{

    public function index()
    {
        $this->loadModel('Product');
        $products = $this->Product->getall();
        if ($products) {
            echo json_encode([http_response_code(200), $products]);
        } else {
            echo json_encode(['success' => 'Products not found']);
        }

    }

    public function getproducts()
    {
        $this->loadModel('Product');
        $products = $this->Product->get_products_with_images();
        if ($products) {
            echo json_encode([http_response_code(200), $products]);
        } else {
            echo json_encode(['success' => 'Products not found']);
        }

    }

    public function create()
    {
        $this->loadModel('Product');
        $data = json_decode(file_get_contents('php://input'), true);
        $product = $this->Product->create($data);
       
        if ($product) {
            echo json_encode(['success' => true, 'product' => $product]);
        } else {
            echo json_encode(['message' => 'Product not created']);
        }
    }
    public function update($id)
    {
        $this->loadModel('Product');
        $data = json_decode(file_get_contents('php://input'), true);
        
        if ($this->Product->update($id, $data)) {
            echo json_encode(['success' => true, 'product' => 'updated']);
        } else {
            echo json_encode(['message' => 'Product not updated']);
        }
    }
    public function delete($id)
    {
        $this->loadModel('Product');
        if ($this->Product->delete($id)) {
            echo json_encode(['message' => 'Product deleted']);
        } else {
            echo json_encode(['message' => 'Product not deleted']);
        }
    }
    public function show($id)
    {
        $this->loadModel('Product');
        $product = $this->Product->show($id);
        if ($product) {
            echo json_encode(['success' => true, 'product' => $product]);
        } else {
            echo json_encode(['success' => 'Product not found']);
        }
    }
    public function search()
    {
        $this->loadModel('Product');
        $data = json_decode(file_get_contents('php://input'), true);
        $products = $this->Product->search($data);
        if ($products) {
            echo json_encode(['success' => true, 'products' => $products]);
        } else {
            echo json_encode(['success' => 'Products not found']);
        }
    }

    // product has many Images
    public function images($id)
    {
        $this->loadModel('Product');
        $images = $this->Product->images($id);
        if ($images) {
            echo json_encode(['success' => true, 'images' => $images]);
        } else {
            echo json_encode(['success' => 'Images not found']);
        }
    }
    // upload many images
    public function upload_images($id)
    {
        $this->loadModel('Image');
        $data = $_FILES;
        // access to
        $images = $this->validate_images($data);
        
        if ($this->Image->upload_images($id, $images)) {
            echo json_encode(['success' => true, 'message' => 'Images uploaded']);
        } else {
            echo json_encode(['success' => 'Images not uploaded']);
        }
        
        
        
    }
    public function validate_images($imgas)
    {
        $images = $_FILES;
        $image_names = [];
      
        foreach ($imgas as $key => $image) {
            $fileName = $image['name'];
            $fileTmpName = $image['tmp_name'];
            $fileSize = $image['size'];
            $fileError = $image['error'];
            $fileType = $image['type'];
            $fileExt = explode('.', $fileName);
            $fileActualExt = strtolower(end($fileExt));
            $allowed = array('jpg', 'jpeg', 'png');
            if (in_array($fileActualExt, $allowed)) {
                if ($fileError === 0) {
                    if ($fileSize < 1000000) {
                        $fileNameNew = uniqid('', true) . "." . $fileActualExt;
                        $fileDestination = 'C:\Users\youcode\Desktop\dashboardadminquakkad\src\assets\img\product/' . $fileNameNew;
                        move_uploaded_file($fileTmpName, $fileDestination);
                        $image_names[] = $fileNameNew;
                    } else {
                        echo json_encode(['error' => 'File size is too big']);
                    }
                } else {
                    echo json_encode(['error' => 'There was an error uploading your file']);
                }
            } else {
                echo json_encode(['error' => 'You cannot upload files of this type']);
            }
        }
        return $image_names;
      
    }

    
}