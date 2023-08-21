# Havuz Problemi
Bu projemizde iki musluk bir havuzu kaç saate doldurur hesaplamasını yaptık.


## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Havuz Problemi Çözüm Algoritması

```javascript
        window.onload = function () {

            //Değişkenleri dinamik olarak tanımladık iki havuz girişi oldugunu var saydık
            let havuzGirisi1 = 10;
            let havuzGirisi2 = 15;
            let havuzBosaltmaHizi = 30;

            //1 ve ikinici girişlerin hızlarını hesapladık
            suGirisHizi1 = 1 / havuzGirisi1;
            suGirisHizi2 = 1 / havuzGirisi2;

            //Havuzu boşaltma hızını hesapladık
            boslatmaHizi = 1 / havuzBosaltmaHizi;

            //iki girişin havuzu doldurma hızı
            toplamDoldurmaHizi = suGirisHizi1 + suGirisHizi2;

            //Havuz kaç saate dolacak hesaplaması
            havuzDolmaSuresi = 1 / toplamDoldurmaHizi;

            //Ceil fonksiyonu ile sayıyı yuvarladık
            document.getElementById('sonuc').innerText = Math.ceil(havuzDolmaSuresi) + ' saate';
        };
```