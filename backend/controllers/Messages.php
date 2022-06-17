<?php 

class messages extends Controller
{
    public function index()
    {
        $this->render('index');
    }
    public function createMessage()
    {
        $this->loadModel('Message');
        $data = json_decode(file_get_contents('php://input'), true);
        if (empty($data)) 
            return json_encode(['message' => 'No data']);
        else {
            $message = $this->Message->createMessage($data);
            if ($message) 
                 echo json_encode([true, $message]);  
            else echo json_encode([false, 'Invalid credentials']);
        }
    }
}