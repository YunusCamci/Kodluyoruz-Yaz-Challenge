# Aylık Kitap Okuma Hedefi Hesaplama
Bir öğrenci kitap okuma hedefi olarak yılda 36 kitap okumayı belirledi. Eğer her ay eşit sayıda kitap okursa kaç kitap okumuş olur?


Problemi'nin çözümü.


## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Aylık Okunması Gereken Kitap Sayısını Hesaplayan Fonksiyon

```javascript
         window.onload = function () {

            //Hedeflenen kitap sayısı
            hedefKitapSayisi = 36;

            //Yılda dedeği için 12 ay olarak aldık
            hedefSure = 12;

            // Hesaplama işlemi
            okumasiGerekenKitap = hedefKitapSayisi / hedefSure;

            // Ekrana yazdırma işlemi
            document.getElementById("sonuc").innerHTML = hedefKitapSayisi + " Kitap / " + hedefSure + " Ay = <b><u>" + okumasiGerekenKitap + " Kitap</u></b> okuması gerekli (aylık).";
  
        };
```
