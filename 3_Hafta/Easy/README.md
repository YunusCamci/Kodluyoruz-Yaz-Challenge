# Futbol Maçı Atılan Toplam Gol Sayısı Bulma

## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Toplam Gol Sayısını Hesaplayan Fonksiyon

```javascript
         window.onload = function () {

            //Atış Degerlerinin Değişkenleri
            const ucPuanlikAtis = 5;
            const ikiPuanlikAtis = 10;

            //Puan Degerlerinin Değişkenleri
            const puanDegeri3 = 3;
            const puanDegeri2 = 2;

            //Üç Puanlık Atışların Hesaplanması
            ucPuanToplam = ucPuanlikAtis * puanDegeri3;

            //İki Puanlık Atışların Hesaplanması
            ikiPuanToplam = ikiPuanlikAtis * puanDegeri2;

            //Toplan Puan Hesaplaması
            toplamPuan = ucPuanToplam + ikiPuanToplam;

            //Üç Puanlık Atışların UI da yazılma işlemi
            document.getElementById("ucPuanlikAtis").innerHTML = ucPuanlikAtis + " x " + puanDegeri3 + " = <b>" + ucPuanToplam + "</b>";

            //İki Puanlık Atışların UI da yazılma işlemi
            document.getElementById("ikiPuanlikAtis").innerHTML = ikiPuanlikAtis + " x " + puanDegeri2 + " = <b>" + ikiPuanToplam + "</b>";
            
            //Toplam Puanın UI da yazılma işlemi
            document.getElementById("toplamPuan").innerHTML = ucPuanToplam + " + " + ikiPuanToplam + " = <b><u>" + toplamPuan + "</u></b> Cevabı elde edilir.";

        };
```
