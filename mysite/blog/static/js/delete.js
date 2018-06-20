function deletePost(url){
  if(confirm("Esta seguro de Eliminar?")){    
    location.pathname = url;
  }
  else{
    return false;
  }
}