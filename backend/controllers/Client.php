<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST,UPDATE,DELETE,GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


class client extends Controller
  {

    public function create()
    {
      $this->loadModel('Client');
      $data = json_decode(file_get_contents('php://input'), true);
      if ($this->Client->create($data)) {
        echo json_encode(['message' => 'Client created']);
      } else {
        echo json_encode(['message' => 'Client not created']);
      }
    }

    public function login()
    {
      $this->loadModel('Client');
      $data = json_decode(file_get_contents('php://input'), true);
    
      $client = $this->Client->login($data);
      if ($client) {
        echo json_encode(['message' => 'Client logged in']);
      } else {
        echo json_encode(['message' => 'Client not logged in']);
      }

    }

    public function profile($id)
    {
      $this->loadModel('Client');
      $client = $this->Client->profile($id);
      if ($client) {
        echo json_encode(['success' => true, 'client' => $client]);
      } else {
        echo json_encode(['success' => 'Client not found']);
      }
    }

    public function my_demandes()
    {
      $this->loadModel('Client');
      $data = json_decode(file_get_contents('php://input'), true);
      $client = $this->Client->my_demandes($data);
      if ($client) {
        echo json_encode(['success' => true, 'client' => $client]);
      } else {
        echo json_encode(['success' => 'Client not found']);
      }
    }

    


  }