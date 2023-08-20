# Kullanıcıdan Alınan Sayının Karekökten Çıkıp Çıkmadığı Kontrolü

## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Karekök Kontrol Fonksiyonu

```javascript
         //Karekök fonksiyonu
        function hesapla() {


            var sayi = Number(document.getElementById("kullaniciSayi").value);

            // Sayının karekökünü hesapla
            var karekok = Math.sqrt(sayi);

            // Karekökten çıkıp çıkmadığını kontrol et
            if (!isNaN(karekok) && Math.floor(karekok) === karekok) {

                document.getElementById("sonuc").innerHTML = karekok;
                
            } else {

                document.getElementById("sonuc").innerHTML = "Bu sayının karekökü tam olarak çıkmıyor.";
            }

        }
```