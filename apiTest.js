//  fetch : api'ye http isteği atmamızı sağlar.
//  get : api'den veri almamızı sağlar.
//  post : sunucuya veri göndermeye yarar.
//  put : sunucudaki bir veriyi güncellemeye yarar.
//  delete : bir veriyi silemey yarar.

// Get örneği
// istek atma işlemini bir fonksiyona tanımlıyoruz.
function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=> response.json())
  .then((data) => renderUsers(data))
  .catch((error)=> console.log(error));
}

// Fonksiyonu çağırıp isteği gerçekleştirme durumu
getUsers()

// Eğer her bir elemanı çağırıp ekrana yazmak istersek
function renderUsers(users){
    users.forEach((user) => document.write(user.name, '<br>'));
}