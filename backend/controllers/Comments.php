<?php

class comments extends Controller
{
    public function createComment()
    {
        $this->loadModel('Comment');
        $data = json_decode(file_get_contents('php://input'), true);
        if (empty($data)) return json_encode(['message' => 'No data']);
        $comment = $this->Comment->createComment($data);
        if ($comment)  echo json_encode([true, $comment]);
        else echo json_encode([false, 'Invalid credentials']);
    }
    public function getall($blog_id)
    {
        header('Content-Type: application/json');
        $this->loadModel('Comment');
        $comments = $this->Comment->getallComments($blog_id);
        $this->loadModel('Client');
        $clients = $this->Client->getall();
        $comments = array_map(function ($comment) use ($clients) {
            $comment['client'] = array_filter($clients, function ($client) use ($comment) {
                return $client['id'] == $comment['client_id'];
            });
            $comment['client'] = array_values($comment['client'])[0];
            return $comment;
        }, $comments);

      if ($comments) echo json_encode([true,$comments]);
        else echo json_encode([false, 'Invalid credentials']);
    }
    public function delete($id)
    {
        $this->loadModel('Comment');
        $comment = $this->Comment->delete($id);
        if ($comment) echo json_encode([true, $comment]);
        else echo json_encode([false, 'Invalid credentials']);
    }
    
}