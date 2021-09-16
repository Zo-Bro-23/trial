function post(req, resp){
  if (req.method == 'POST'){
    resp.send(req.body.name)
  }
}