/*/
    singltation Pattern - (tek kalp) ---> private constructor(){}
    tek misalini instansini yaratmaq yeni bütün bu Classlardan yaranan objectlərin bir datasi olacaq
    ve ya eyni zamanda, bir sınıfa dayalı birden çok object oluşturamayacağınızdan emin olmak istersiniz
    let obj1 = new ObjClass();// return [{name: 'A', value:'aA'}, {name: 'B', value:'bB'}, {name: 'C',value:'cC'}]
    let obj2 = new ObjClass();// return [{name: 'A', value:'aA'}, {name: 'B', value:'bB'}, {name: 'C',value:'cC'}]

/*/
/*/
    Asaqidaki misalda
    this - ItDepartmentAdmin Classindan yaranan Objecti evez edir
    if(ItDepartmentAdmin.itsAdminInstance){  return this.itsAdminInstance; } evelce if ile kontrol edirik
    if(ItDepartmentAdmin.itsAdminInstance) eger itsAdminInstance data varsa
    bu zaman this = {itsAdminInstance: itsAdminInstance} buradanda new ItDepartmentAdmin() bunan yaranan bütün
    objectlerde this - e beraber olacaq (biz obj.property sekilinde this-e properti elave etmisik)
    ama ItDepartmentAdmin.itsAdminInstance bunda value (data) yoxdursa undefined dir if undefine de falsedir
    bu zaman  this.itsAdminInstance = new ItDepartmentAdmin(1,"Elmar","elmar12345"); bele data kechirik
    yeni this = { itsAdminInstance: new ItDepartmentAdmin(1,"Elmar","elmar12345") }
    ve ya return new ItDepartmentAdmin(1,"Elmar","elmar12345") belede yaza bilerdik
    sonrada Object yaradarken Classin Adi ile metodunu Chaqiririq day new deye bilmirik çünki constructor privatedi

    let obj = new ItDepartmentAdmin(1,"Elmar","elmar12345") =>ERROR !!!! constructor privatedi
/*/
var ItDepartmentAdmin = /** @class */ (function () {
    function ItDepartmentAdmin(admin) {
        this.admin = admin;
        ItDepartmentAdmin.Admins.push(admin);
    }
    Object.defineProperty(ItDepartmentAdmin.prototype, "getITAdmins", {
        get: function () { return ItDepartmentAdmin.Admins; },
        enumerable: false,
        configurable: true
    });
    ItDepartmentAdmin.getAdminsInstance = function () {
        if (ItDepartmentAdmin.itsAdminInstance) {
            return this.itsAdminInstance;
        }
        this.itsAdminInstance = new ItDepartmentAdmin({ id: 1, name: "Elmar", password: "elmar12345" });
        return this.itsAdminInstance;
    };
    ItDepartmentAdmin.prototype.addAdmin = function (admin) { ItDepartmentAdmin.Admins.push(admin); };
    ItDepartmentAdmin.Admins = [];
    return ItDepartmentAdmin;
}());
var itDepartmentAdmin = ItDepartmentAdmin.getAdminsInstance();
console.log("itDepartmentAdmin: " + itDepartmentAdmin.getITAdmins);
console.log("itDepartmentAdmin id : " + itDepartmentAdmin.getITAdmins[0].id +
    " | itDepartmentAdmin name : " + itDepartmentAdmin.getITAdmins[0].name +
    " | itDepartmentAdmin password : " + itDepartmentAdmin.getITAdmins[0].password);
//Angular => Singltation Pattern mentiqi ile Chalisir 
//let itDepartmentAdmin: ItDepartmentAdmin = new ItDepartmentAdmin(1,"Elmar","elmar12345");
//Constructor of class 'ItDepartmentAdmin' is private and only accessible within the class declaration.
/*/
    Şimdi, benim de tanıtmak istediğim son bir ilginç özellik var ve bu özel olacak.

    yapıcının.

    Şimdi, kullanımı olan özel bir kurucu nedir?

    Nesne yönelimli programlamada, singleton kalıbı adı verilen bir kalıp vardır.

    desen, her zaman belirli bir sınıfın yalnızca bir örneğine sahip olacağınızdan emin olmakla ilgilidir.

    Bu, bir şekilde statik yöntemleri veya özellikleri kullanamadığınız veya kullanmadığınız senaryolarda faydalı olabilir.

    istemek.

    Ancak aynı zamanda, bir sınıfa dayalı birden çok nesne oluşturamayacağınızdan emin olmak istersiniz,

    ancak her zaman bir sınıfa dayalı tam olarak bir nesneye sahip olursunuz.

    Diyelim ki muhasebe departmanımız için tam olarak sadece bir nesne oluşturabileceğimizden emin olmak istiyoruz.

    bu sınıfa dayanmaktadır, çünkü tüm şirketimizde tam olarak bir muhasebe departmanımız var.

    Birden fazla BT departmanımız olabilir, ancak artık uygulamak için tam olarak bir muhasebe departmanımız var.

    bu ve bundan kaçınmak için manuel olarak yeni muhasebe departmanını defalarca ararız.

    Ekleyerek muhasebe bölümü sınıfının yapıcısını özel bir kurucuya dönüştürebiliriz.

    önündeki özel anahtar kelime.

    Şimdi, bunun yaptığı şey, bu konuda yeni diyemememizi sağlamak.

    Burada yapıcı özel olduğu için bir hata aldığını görüyorsunuz.

    Yani sadece sınıfın içinden erişilebilir, bu kulağa garip geliyor çünkü sonra içeri nasıl giriyoruz?

    artık ona dayalı nesneler oluşturamazsak sınıf?

    Cevap, statik yöntemlerdir, sınıfın kendisinde statik bir yöntem çağrılabilir.

    Yani bunun için somutlaştırmanız gerekmez.

    Yani burada statik bir yöntem ekleyebiliriz.

    Get instance diyebileceğimiz bu isim tamamen size kalmış.

    Şimdi anlık olsun, bu sınıfın bir örneğine sahip olup olmadığımızı kontrol edecek ve değilse, yeni bir

    bir.

    Bunun için yeni bir statik özellik örneği, statik bir özel mülk ekleyebiliriz, böylece özel koyabilirsiniz.

    Muhasebe departmanı türünde olacak olan Instant's adlı statikin önünde.

    Yani orada bir muhasebe departmanı örneği depolayacak.

    Yani burada söylediğim şey bu, sınıfın kendisinde erişilebilen statik bir özelliğim var,

    ama sadece sınıfın içinden ve orada sakladığımız değer, tip dışı muhasebe departmanı olacaktır.

    Bu nedenle, sınıfın kendisine kapalı, bu örnek özelliğini burada get örneğinde kullanabilir ve bunun olup olmadığını kontrol edebiliriz.

    Örnek burada statik yerine ayarlanır, bunu kullanırsak sınıfın kendisine atıfta bulunur ve ardından

    bunun üzerindeki diğer tüm statik özelliklere erişebiliriz.

    Bunun alternatifi olacaktır.

    Sınıfsız sınıf adını kullanmak için.

    Ve şimdi bu ayarlanmışsa, geri dönmek istiyorum.

    Bu örnek veya tekrar, örneğin, sınıf adlı, ancak bu, statik bir yöntem yerine çalışır,

    bize sınıfın kendisine erişim sağlar, bundan farklı olarak, bize erişim sağlayan statik olmayan bir yöntemde

    burada ne yaptığımıza değil, birlikte çalışmaya çalıştığımız örneğe.

    Ancak, burada başaramazsak, o zaman henüz bir örneğimiz yok.

    Sonra bu örneği, bu statik örnek özelliği yeni muhasebe departmanına eşit olacak şekilde ayarladım.

    Bunu buradan kullanabiliriz çünkü artık bu sınıf metodunun içindeyiz.

    Böylece burada özel kurucuya erişebilir ve kimliğimizi iletebiliriz.

    Ve raporumuz, Zaret ve ardından bu örneği buraya geri verdi.

    Şimdi zaten sahip olabileceğimiz bir örneği bile döndürüyoruz veya henüz sahip değilsek, yaratıyoruz.

    yeni bir.

    Ancak buradaki bu kod ile işaretlenmiş kod yalnızca bir kez çalışabilir çünkü bir örneğimiz olduğunda, onu yaparız.

    this if bloğu ve mevcut örneği döndürürüz.

    Yani şimdi muhasebe departmanını bu şekilde oluşturmak yerine onunla çalışmak isterseniz,

    CONSED Muhasebe'yi arayın.

    Muhasebe departmanı doget örneği ve bu, muhasebe departmanının yeni bir örneğini döndürür,

    ama bunu bir daha yaparsam, muhasebeye başvursam göreceğiniz örneğin aynısını alacağım.

    Ve burayı hesaba katarak, kaydedip yeniden yüklersek ikisinin tam olarak eşit olması gerektiğini göreceksiniz.

    Aşağıda benim iki muhasebe departmanı nesnem var, aynı kimliğe sahipler, tamamen aynı

    kurulum, onlar aynı nesne, aynı örnek, çünkü bu singleton ile sadece bir örneğimiz var

    yapıcının önünde özel anahtar kelimenin yardımıyla oluşturulan desen.

    Şimdi, bu muhtemelen Singleton desenine her zaman kullanmayacağınız bir yaklaşımdır, bazen

    Bir işe yara.

    Her zaman buna ihtiyacın yok, ama kesinlikle bilmeye değer çünkü bu bir şey

    özel kurucu sayesinde TypeScript ile kolayca uygulayabileceğiniz ilginç.
/*/
