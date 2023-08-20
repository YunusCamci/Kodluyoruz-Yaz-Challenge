# Hız-Zaman-Mesafe Problemi
Bu projemizde bir araç 60 Km hız ile 240Km yolu kaç saate alır hesaplamasını yaptık.
Kullanmış olduğumuz ondalıklı sayı kontörlü olmadan to.Fixed kullanıldığı takdir de tam sayılar da virgüllü eklendigi (ör; 4.00) için UI da daha düzgün bir çıktı olması için kullanıldı.


## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Hız-Zaman-Mesafe Problemi Çözüm Algoritması

```javascript
        window.onload = function () {

            //Mesafe ve hız verilerimizi tanımlıyoruz
            let mesafe = 240;
            let hiz = 60;

            //Varış süresini hesaplamak için mesafeyi hıza bölüyoruz
            varis = mesafe / hiz;

            // Bu kontrol de sayı ondalıklı olup olmadıgını kontrol ediyoruz
            function isDecimalNumber(num) {
                return typeof num === 'number' && num % 1 !== 0;
            }


            //Hız ve mesafeyi UI da dinamik olarak gösterimini yapıyoruz
            document.getElementById('hiz').innerText = hiz + ' Km/h';
            document.getElementById('bitisKm').innerText = mesafe + ' Km';

            //Eger sayı ondalıklı ise virgülden sonra iki hane gözükecek şekilde ayarlıyoruz (ör; 3.33)
            if (isDecimalNumber(varis) == true) {
                document.getElementById('sonuc').innerText = varis.toFixed(2) + ' saate';
            } else {
                //sayı ondalıklı degilse direk yazılmasını saglıyoruz
                document.getElementById('sonuc').innerText = varis + ' saate';
            }

        };
```