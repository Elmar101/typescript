// HƏR YERDƏ İSTİFADƏ EDİLƏN TƏK OBJECT VƏ EYNİ DATANİ SAXLİYAN OBJECT 
class Singletion {
    // 2 Cİ OLARAQ ÖZİMİZİN İSDƏDİYİ OBJECTİ VERMƏLİYİK BUNUN ÜÇÜN ƏLBƏTDƏ CLASSİMİZİN TÜRİNDƏ OBJECTİ YARADACAYİQ
    private static instance_OF_SİNGLETİON: Singletion = null;
    private text: string;

    //1 ci olaraq Bu Classa Hər yerdən ulaşımı əngəlləməliyik bunun üçün CONSTRUCTORUNU PRİVATE EDİRİK !!!
    private constructor(){ this.text = " Hello World "}

    // 3 CI OLARAQ BIZ BU OBJECTI  " instance_OF_SİNGLETİON " DİŞARIDAN ULLAŞIR ETMƏLİYİK BU CLASSİN BİR METODU İLƏ
    public static GET_INSTANCE_OF_SİNGLETİON():Singletion { 
        if(Singletion.instance_OF_SİNGLETİON == null){
            this.instance_OF_SİNGLETİON = new Singletion();
        }
        return this.instance_OF_SİNGLETİON
    }

    /*/
        4 CI OLARAQ BƏS BİZ BU Singletion CLASSDAN OBJECT YARADA BİLMİRİKSƏ BİZ BU CLASSİN DAXİLİNDƏKİLƏRDƏN NECƏ 
        İSTİFADƏ EDƏCƏYİK DOQRU SUAL 
        BUNUN ÜÇÜN BİZ BU CLASSİN DAXİLİNDƏKİLƏRİ STATİC EDƏCƏYİK CLASSA MƏXSUS YƏNİ CLASS ÜZƏRİNDƏN ERİŞƏK DİƏ

        private static instance_OF_SİNGLETİON: Singletion; BU ZAMAN HƏRYERDƏ CLASSIN ADI İLƏ ERİŞƏ BİLƏCƏYİK
        VƏ BU OBJECTİN DƏYƏRİNİ GÖTİRMƏKDƏN ÖTRİDƏ BİZ GET_INSTANCE_OF_SİNGLETİON() BELƏ METTOD YAZDİQ 
        ÇÜNKİ - private static instance_OF_SİNGLETİON: Singletion; -  instance_OF_SİNGLETİON 
        BU CLASS BASE DƏYİŞƏNİ PRİVATEDİ BU DƏYİŞƏNİN DATASINI ƏLDƏ ETMƏK ÜÇÜN YAZDİQİMİZ METODDUR  
        GET_INSTANCE_OF_SİNGLETİON() BU METODDA CLASS BASE OLMALİDİ
        ONUN ÜÇÜNDƏ STATİC EDİRİK !!! VƏ instance_OF_SİNGLETİON BU DƏYİŞƏN TİPDƏ DATA GERİYƏ QAYTARMALİDİ !!!
    /*/ 
    public GetText(): string{ return this.text; }
}

class Program {

    constructor(){
        console.log(Singletion.GET_INSTANCE_OF_SİNGLETİON().GetText())
        /*/
        
             MƏN ARTIQ Singletion CLASSİN GetText() METODUNA ULAŞMAQDAN ÖTRİ 
             GET_INSTANCE_OF_SİNGLETİON() METODUNU ÇAQİRMALİYAM
             ÇÜNKİ BU METOD Singletion TÜRİNDƏ BİZƏ instance_OF_SİNGLETİON 
             BU DƏYİŞƏNİ VERİR BU DƏYİŞƏNDƏ BİR OBJEKTİ
             VƏ BU OBJECTİN GetText() METODU VAR 

        /*/
    }
    
}

let program = new Program();