/*/
- Nədir interface(arayüz) => En basit versiyonunda interface, bir Objektin qurluşunu(strukturunu) tanımlar.
- Bir Objektin necə görünmesi gərəktiğini tanımlamak üçün istifadə Edəbilərik.
- interface ni tip olarak istifadə Edəbilərik. 
/*/

interface IPerson {
    name: string;                          //name: string = "Elmar"; varsayilan deyer interfacede vere bilmezsiz Error 
    age: number;
    greet(phrase: string): void;
}

let user: IPerson = {
    name: "Elmar",
    age: 26,
    greet : (phrase: string) => { console.log( phrase ) }
}

user.greet("Hello World");









/*/

    Beləliklə, bir interfeys nədir?

    Ən sadə versiyasında bir interfeys bir obyektin quruluşunu təsvir edir.

    Bir obyektin necə görünməsini izah etmək üçün istifadə edə bilərik.

    Sizə bir nümunə göstərim.

    JavaScript -də deyil, yalnız TypeScript -də mövcud olan interfeys açar sözü ilə bir interfeys yaratdıq.

    İndi bu şəxsin adını çəkək.

    Bəlkə də yenə bir sinifdə olduğu kimi.

    Böyük bir xarakterlə başladım,(mecbur deyil boyuk herifle ad veresiz interfacenize)

    Və indi burada bir insanın obyektinin necə görünməsini təyin edə bilərik.

    İndi bir sinifdən fərqli olaraq bunu bir plan olaraq istifadə etmirik.

    Ancaq söyləyə biləcəyimiz xüsusi bir növ olduğu kimi burada da bir insanın adının olması lazım olduğunu söyləyə bilərik
    
    name,age,greet()

    Burada görə biləcəyiniz kimi, mülklərin adlarının olduğu xüsusiyyətlər və ya sahə tərifləri əlavə edirəm

    və orada saxlanılacaq dəyərlərin növləri.

    Burada əlimizdə olmayan şey konkret dəyərlərdir.

    Yəni bizdə bu yoxdur.

    Və burada bir standart dəyər təyin etməyə çalışsaydıq, bir interfeysdə ola bilməyən bir səhv alarıq

    Beləliklə, konkret dəyərləri deyil, sadəcə bir quruluş tapa bilərik

    Burada əsl metodu əlavə etmirik, ancaq quruluşu, təsviri, belə demək olarsa

    necə görünməli və şəxsi bir obyektin olacağı bir metodu təyin etmək üçün adını əlavə edirik

    metodun, sonra mötərizənin, sonra da qayıdış növünün, məsələn, mötərizəyə əlavə edilməsi.

    İstədiyiniz hər hansı bir arqumentə sahib ola bilərsiniz, məsələn, yenidən bir növ olmalı, yalnız

    arqumentin adı, sonra metodun növü və sonra qaytarılma növü.

    Əlbəttə ki, parametrlər əlavə etmək mecbur deyil.

    Bəs indi bu şəxs interfeysi ilə nə edə bilərik?

    Bunun arxasında hansı fikir var?

    İndi bunu bir obyekti yoxlamaq üçün istifadə edə bilsək də, məsələn, dəyişən bir istifadəçimiz ola bilər

    və deyək ki, nədənsə dərhal işə salmırıq.

    Nəhayət, bu quruluşa malik bir obyekti orada saxlamaq istəyirik.

    Beləliklə, istifadəçiyə şəxs ola biləcək bir növ təyin edə bilərik.

    İnterfeysimizi bir növ olaraq istifadə edə bilərik.

    İndi bir istifadəçiyə bir dəyər təyin edərkən, bir obyekt olmalıdır, çünki interfeysləri təyin etmək üçün istifadə olunur

    obyektlərdir və ad , yaş, salamla metodu xüsusiyyətinə malik olan bir obyekt olmalıdır

    bir cümlə arqumentini götürməli və sonra heç bir şey qaytarmamalı olan bir sıra və əla bir üsula sahib olmalıdır.

    Beləliklə, bu obyektə, məsələn, Elmar adını əlavə edə bilərik.

    İndi burada konkret dəyər əlavə edirik və orada ayrılmış yerdə tapmaq üçün bu tip olmalıdır vergül.

    Və bu, interfeys tərifimizdən bir fərqdir.

    Açarlarımızı, xüsusiyyətlərimizi və üsullarımızı nöqtəli vergüllə ayırmağa cəsarət edirik.

    Ancaq burada, bir obyekt yaratdığımız zaman, JJavaScript, vergül istifadə edirik, 

    İndi, öyrəndiyiniz kimi, böyük metod, bir parametr ifadəsini götürən bir metod olmalıdır

    İndi orada olanların heç bir əhəmiyyəti yoxdur.

    Yalnız bir string olan bu bir parametrə sahib olmağımız vacibdir və bu heç nə qaytarmayacaq.

    İndi bu etibarlı bir istifadəçi, bir obyekt olardı, çünki interfeysimizin bu tərifini təmin edir.

    Buna görə də, əlbəttə ki, indi,greet metoduna çaqira bilərik

    "Hello World"

    Beləliklə, bu bir interfeysdir.

    Bir obyektin quruluşunu təyin etməyə imkan verir.

    Bu quruluşa malik olan obyektləri yoxlamaq üçün bir növ olaraq istifadə edə bilərik.

/*/