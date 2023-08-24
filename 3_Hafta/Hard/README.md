# Ödenmesi Gereken Fiyatı Hesaplama
Bir sınıfta 30 öğrenci bulunmaktadır. Öğrencilerden kaç farklı şekilde 4 kişi seçilebilir?

Problemi'nin çözümü.


## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Toplam Ödenmesi Gereken Fiyatı Bulan Fonksiyon

```javascript
         //Pencere açıldığında çalışmaya başlamasını sağlayan tanımlama
         window.onload = function () {

            //Faktöriyel hesaplaması
            function faktoriyel(n) {
                if (n === 0 || n === 1) {
                    return 1;
                } else {
                    return n * faktoriyel(n - 1);
                }
            }

            //Kombinasyonların hesaplamasını yapan fonksiyon
            function kombinasyon(n, r) {
                return faktoriyel(n) / (faktoriyel(r) * faktoriyel(n - r));
            }

            //Degerlerin tanımlaması
            const toplamOgrenci = 30;
            const secilenOgrenciSayisi = 4;


            //Kombinasyon Hesaplaması için değerleri kombinasyon() Fonksiyonundan geçirdik
            const farkliKombinasyonSayisi = kombinasyon(toplamOgrenci, secilenOgrenciSayisi);

            //27404.999999999996 çıkan sayıyı floor ile yuvarlayıp 1000 e bölerek 27 sayısını elde ettik
            const sonuc = Math.floor(farkliKombinasyonSayisi / 1000);
            
            //UI da yazdırma işlemi
            document.getElementById("sonuc").innerHTML =  toplamOgrenci + " Ögrenciden " + secilenOgrenciSayisi + "'er farklı kişi seçildiginde, <b><u>" +  sonuc + "</u></b> farklı şekilde seçim yapılabilir.";

        };
```
