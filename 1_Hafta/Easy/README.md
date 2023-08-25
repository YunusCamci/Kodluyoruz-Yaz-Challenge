# Aynı Renkte Topun Gelme Olasılığı
Bir kutuda 5 kırmızı, 4 yeşil ve 3 mavi top bulunuyor. Kutudan rastgele çekilen 2 topun aynı renk olma olasılığı nedir?


Problemi'nin çözümü.


## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Aynı Renkte 2 Topun Gelme Olasılığını Hesaplayan Fonksiyon

```javascript
         window.onload = function () {

            // Top renk ve sayıları
            const kirmiziTop = 5;
            const yesilTop = 4;
            const maviTop = 3;

            // Toplam top sayısı
            const toplamTop = kirmiziTop + yesilTop + maviTop;

            // İki topun aynı renkte olma olasılığını hesapla
            const ayniRenkOlasiligi = (
                (kirmiziTop * (kirmiziTop - 1) + yesilTop * (yesilTop - 1) + maviTop * (maviTop - 1)) /
                (toplamTop * (toplamTop - 1))
            ).toFixed(2);

            // Ekrana yazdırma işlemi yapıyoruz
            document.getElementById("sonuc").innerHTML = "Rastgele çekilen 2 topun aynı renk olma olasılığı, <b><u>" + ayniRenkOlasiligi + "</u></b> olur.";

        };
```
