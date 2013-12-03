<?php
class Maincontroller{
    
 
    function __construct(){

    }

    function get404() {
        echo json_encode(array('error'=>'404'));
        return;
    }

    function getAllCourts(){
        if(!$all=Court::instance()->getAll()){
            echo json_encode(array('error'=>'no court'));
            return;
        }
        echo Views::instance()->toJSON($all,array('id_court'=>'id_court', 'name'=>'name', 'latitude'=>'latitude', 'longitude'=>'longitude', 'creation'=>'creation', 'street'=>'street', 'city'=>'city', 'zip_code'=>'zip_code'));
    }

    function getSingleCourt(){
        if(!$one=Court::instance()->getSingle(F3::get('PARAMS.id'))){
            echo json_encode(array('error'=>'no court'));
            return;
        }
        echo Views::instance()->toJSON($one,array('id_court'=>'id_court', 'name'=>'name', 'latitude'=>'latitude', 'longitude'=>'longitude', 'creation'=>'creation', 'street'=>'street', 'city'=>'city', 'zip_code'=>'zip_code'));
    }

    function addCourt()
    {
        Court::instance()->addCourt();
    }

    function sortByLatest()
    {
        if(!$all_latest=Court::instance()->getAll(10, true)){
            echo json_encode(array('error'=>'no court'));
            return;
        }
        echo Views::instance()->toJSON($all_latest,array('id_court'=>'id_court', 'name'=>'name', 'latitude'=>'latitude', 'longitude'=>'longitude', 'creation'=>'creation', 'street'=>'street', 'city'=>'city', 'zip_code'=>'zip_code'));
    }

    function __destruct(){

    }
}
?>