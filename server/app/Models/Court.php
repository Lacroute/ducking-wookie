<?php
class Court extends Prefab{
  
  function __construct(){
      F3::set('dB',new DB\SQL(
        'mysql:host='.F3::get('db_host').';port=3306;dbname='.F3::get('db_server'),
        F3::get('db_user'),
        F3::get('db_pw')
      ));
  }
  
  function getAll($limit=false, $latest=false){
    $all=new DB\SQL\Mapper(F3::get('dB'),'court');
    $params = array('limit'=>($limit ? $limit : 0), 'order'=>($latest ? 'creation DESC' : 'name'));
    return $all->find(null, $params);
  }

  function getSingle($id){
    $one=new DB\SQL\Mapper(F3::get('dB'),'court');
    return $one->load(array('id_court=?', $id));
  }

  function addCourt()
  {
    $court=new DB\SQL\Mapper(F3::get('dB'),'court');
    
    $court->name=ucwords(F3::get('POST.name'));
    $court->street=F3::get('POST.street');
    $court->city=ucwords(F3::get('POST.city'));
    $court->zip_code=F3::get('POST.zip_code');

    $court->save();
  }

  function __destruct(){

  }
  
}






?>